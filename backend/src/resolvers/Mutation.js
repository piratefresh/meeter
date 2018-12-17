const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transporter, makeANiceEmail } = require("../mail");
const postmark = require("postmark");
const { hasPermission } = require("../utils");

const Mutations = {
  async createMeeting(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to do that!");
    }
    const meeting = await ctx.db.mutation.createMeeting(
      {
        data: {
          // This is how to provide relationship between meeting and user
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          ...args // spread the argument variable
        }
      },
      info
    );
    console.log(meeting);
    return meeting;
  },
  updateMeeting(parent, args, ctx, info) {
    // First take a copy of the updates
    const updates = { ...args };
    // Remove the ID from updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateMeeting(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info // return query
    );
  },
  async deleteMeeting(parent, args, ctx, info) {
    const where = { id: args.id };
    // Find meeting
    const meeting = await ctx.db.query.meeting(
      { where },
      `{ id title user {id}}`
    );
    // check if they made meeting or has permission
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );

    if (!ownsItem && !hasPermissions) {
      throw new Error("You arent allowed to delete this meeting!");
    }
    // delete it
    return ctx.db.mutation.deleteMeeting({ where }, info);
  },
  async signup(parent, args, ctx, info) {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // Hash their password
    const password = await bcrypt.hash(args.password, 10);
    // create the user in db
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args, // spread the object
          password,
          /* confirmToken, */
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    // Create the JWT Token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // Update user with confirm token
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { confirmToken: token }
    });
    // Send an email:
    const mailClient = new postmark.ServerClient(
      "4a41d03e-4e6a-472f-ae96-e1b89b27312c"
    );
    mailClient.sendEmail({
      From: "tug36870@temple.edu",
      To: user.email,
      Subject: "Confirm your account",
      TextBody: makeANiceEmail(`Click this link to confirm your account 
      \n\n <a href="${
        process.env.FRONTEND_URL
      }/confirmation?confirmToken=${token}">Click Here To Confirm Your Account</a>`)
    });
    // Email them that reset token
    /*     const mailRes = await transporter.sendMail({
      from: "magnussithnilsen@gmail.com",
      to: user.email,
      subject: "Confirm your account",
      html: makeANiceEmail(`Click this link to confirm your account 
            \n\n <a href="${
              process.env.FRONTEND_URL
            }/confirmation?confirmToken=${token}">Click Here To Confirm Your Account</a>`)
    }); */
    // We set JWT as cookie on response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie age
    });
    // Return user to browser
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // check if user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    // Check if account is confirmed
    /*     if (!user.confirmed) {
      throw new Error(`Please confirm your email to login`);
    } */
    // check if password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid Password!");
    }
    // generate jwt token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie age
    });
    // return user
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Goodbye!" };
  },
  async requestReset(parent, args, ctx, info) {
    // Check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // Set a reset token and expiry on user
    const randomBytesPromisified = promisify(randomBytes);
    const resetToken = (await randomBytesPromisified(20)).toString("hex");
    const resetTokenExpiry = Date.now(3600000); // 1 hour
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    // Email them that reset token
    const mailRes = await transporter.sendMail({
      from: '"mailtrap" <test@test.com>',
      to: user.email,
      subject: "Your Password Reset Token",
      html: makeANiceEmail(`Your Password Reset Token is here!
      \n\n
      <a href="${
        process.env.FRONTEND_URL
      }/reset?resetToken=${resetToken}">Click Here to Reset</a>`)
    });
    // Return the message
    return { message: "Thanks!" };
  },
  async resetPassword(parent, args, ctx, info) {
    // Check if password match
    if (args.password !== args.confirmPassword) {
      throw new Error("Passwords does not match!");
    }
    // check if reset token is legit
    // check if reset token is expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error("This token is either invalid or expired!");
    }
    // Hash new password
    const password = await bcrypt.hash(args.password, 10);
    // save new password and remove token
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password, // Spread
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    // generate jwt
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // set new jwt token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie age
    });
    // return new user
    return updatedUser;
  },
  // Confirms user via email
  async confirmUser(parent, args, ctx, info) {
    const [user] = await ctx.db.query.users({
      where: {
        confirmToken: args.confirmToken,
        confirmed: false
      }
    });
    // check if user exist
    if (!user) {
      throw new Error("Confirmation link is expired or not working");
    }
    // updates user to confirmed
    await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        confirmed: true,
        confirmToken: null
      }
    });
    // generate jwt token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie age
    });
    // Return the message
    return user, { message: "Account has been confirmed" };
  },
  // Create Profile
  async updateUser(parent, args, ctx, info) {
    // updates user to confirmed
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: {
        bio: args.bio,
        avatar: args.avatar
      }
    });
    // Return the message
    return updatedUser;
  },
  async updatePermissions(parent, args, ctx, info) {
    // Check if user logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in");
    }
    // Query current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId
        }
      },
      info
    );
    // Check if they have permissions to do this
    hasPermission(currentUser, ["ADMIN", "PERMISSIONUPDATE"]);
    // update permission
    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions
          }
        },
        where: {
          id: args.userId
        }
      },
      info
    );
  }
};

module.exports = Mutations;
