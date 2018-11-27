const { forwardTo } = require("prisma-binding");

const Query = {
  meetings: forwardTo("db"),
  meeting: forwardTo("db")
  /*   async meetings(parent, args, ctx, info) {
    const meetings = await ctx.db.query.meetings();
    return meetings;
  } */
};

module.exports = Query;
