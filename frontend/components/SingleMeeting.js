import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import Error from "./ErrorMessage";
import Head from "next/head";

const SingleMeetingStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_MEETING_QUERY = gql`
  query SINGLE_MEETING_QUERY($id: ID!) {
    meeting(where: { id: $id }) {
      id
      title
      description
      date
      largeImage
      startTime
      endTime
      user {
        name
      }
    }
  }
`;

class SingleMeeting extends Component {
  render() {
    return (
      <Query
        query={SINGLE_MEETING_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>loading....</p>;
          if (!data.meeting) return <p>No Meeting Found for {this.props.id}</p>;
          const meeting = data.meeting;
          return (
            <SingleMeetingStyles>
              <Head>
                <title>Meeter | {meeting.title}</title>
              </Head>
              <img src={meeting.largeImage} alt={meeting.title} />
              <div className="details">
                <h2>Viewing {meeting.title}</h2>
                <p>
                  {meeting.startTime} - {meeting.endTime} at {meeting.date}
                </p>
                <p>Hosted by {meeting.user.name}</p>
                <p>{meeting.description}</p>
              </div>
            </SingleMeetingStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleMeeting;
