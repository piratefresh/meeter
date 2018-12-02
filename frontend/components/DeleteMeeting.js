import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_MEETINGS_QUERY } from "./Meetings";

const DELETE_MEETING_MUTATION = gql`
  mutation DELETE_MEETING_MUTATION($id: ID!) {
    deleteMeeting(id: $id) {
      id
    }
  }
`;

class DeleteMeeting extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client,
    // so it matches the server
    // read the cache for the meetings we want
    const data = cache.readQuery({ query: ALL_MEETINGS_QUERY });
    console.log(data);
    // filter the deleted meetings out of the page
    data.meetings = data.meetings.filter(
      meeting => meeting.id !== payload.data.deleteMeeting.id
    );
    // Put meetings back
    cache.writeQuery({ query: ALL_MEETINGS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_MEETING_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteMeeting, { error }) => (
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete this meeting?")) {
                deleteMeeting();
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteMeeting;
