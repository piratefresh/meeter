import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import CenterMaxWidth from "./styles/CenterMaxWidth";

const SINGLE_MEETING_QUERY = gql`
  query SINGLE_MEETING_QUERY($id: ID!) {
    meeting(where: { id: $id }) {
      id
      title
      startTime
      endTime
      description
    }
  }
`;
const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $startTime: Int
    $endTime: Int
  ) {
    updateMeeting(
      id: $id
      title: $title
      description: $description
      startTime: $startTime
      endTime: $endTime
    ) {
      id
    }
  }
`;

class UpdateMeeting extends Component {
  state = {};
  handleChange = e => {
    // allows us to change state of input
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updateMeeting = async (e, updateMeetingMutation) => {
    e.preventDefault();
    console.log("updating item");
    console.log(this.state);
    const res = await updateMeetingMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log("updated");
  };

  render() {
    return (
      <CenterMaxWidth>
        <Query
          query={SINGLE_MEETING_QUERY}
          variables={{
            id: this.props.id
          }}
        >
          {({ data, loading }) => {
            if (loading) return <p>Loading</p>;
            if (!data.meeting) return <p>No item for for ID {this.props.id}</p>;
            return (
              <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
                {(updateMeeting, { loading, error }) => (
                  <Form onSubmit={e => this.updateMeeting(e, updateMeeting)}>
                    <Error error={error} />
                    <h2>Create a Meeting</h2>
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="title">
                        Title
                        <input
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          required
                          defaultValue={data.meeting.title}
                          onChange={this.handleChange}
                        />
                      </label>

                      <label htmlFor="startTime">
                        Start Time
                        <input
                          type="number"
                          id="startTime"
                          name="startTime"
                          placeholder="startTime"
                          required
                          defaultValue={data.meeting.startTime}
                          onChange={this.handleChange}
                        />
                      </label>

                      <label htmlFor="endTime">
                        End Time
                        <input
                          type="number"
                          id="endTime"
                          name="endTime"
                          placeholder="endTime"
                          required
                          defaultValue={data.meeting.endTime}
                          onChange={this.handleChange}
                        />
                      </label>

                      <label htmlFor="description">
                        Description
                        <textarea
                          id="description"
                          name="description"
                          placeholder="Enter A Description"
                          required
                          defaultValue={data.meeting.description}
                          onChange={this.handleChange}
                        />
                      </label>
                      <button type="submit">Sav{loading ? "ing" : "e"}</button>
                    </fieldset>
                  </Form>
                )}
              </Mutation>
            );
          }}
        </Query>
      </CenterMaxWidth>
    );
  }
}

export default UpdateMeeting;
export { UPDATE_ITEM_MUTATION };
