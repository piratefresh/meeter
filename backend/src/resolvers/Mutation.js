const Mutations = {
  async createMeeting(parent, args, ctx, info) {
    const meeting = await ctx.db.mutation.createMeeting(
      {
        data: {
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
  }
};

module.exports = Mutations;
