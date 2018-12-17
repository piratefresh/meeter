const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

const Query = {
  meetings: forwardTo("db"),
  meeting: forwardTo("db"),
  meetingsConnection: forwardTo("db"),
  me(parent, args, ctx, info) {
    // shorthand syntax es6
    // Check if there is a current user ID
    if (!ctx.request.userId) {
      // request not req
      return null; // no user found
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // Check if they are logged in.
    if (!ctx.request.userId) {
      throw new Error("You msut be logged in!");
    }
    // 1. Check if user has persmission to query all the users
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);
    // 2. If they do query all users
    return ctx.db.query.users({}, info);
  }
};

module.exports = Query;
