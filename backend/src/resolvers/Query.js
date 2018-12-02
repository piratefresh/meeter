const { forwardTo } = require("prisma-binding");

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
  }
  /*   async meetings(parent, args, ctx, info) {
    const meetings = await ctx.db.query.meetings();
    return meetings;
  } */
};

module.exports = Query;
