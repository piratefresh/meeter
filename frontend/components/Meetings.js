import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Meeting from "./Meeting";

const ALL_MEETINGS_QUERY = gql`
  query ALL_MEETINGS_QUERY {
    meetings {
      id
      title
      description
      image
      largeImage
      startTime
      endTime
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;
const MeetingsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Meetings extends Component {
  render() {
    return (
      <Center>
        <p>Meetings!</p>
        <Query query={ALL_MEETINGS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>{error.message}</p>;
            // first we decoustruct our payload, Gets the data from our query
            console.log(data);
            return (
              <MeetingsList>
                {data.meetings.map(meeting => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))}
              </MeetingsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Meetings;

export { ALL_MEETINGS_QUERY };
