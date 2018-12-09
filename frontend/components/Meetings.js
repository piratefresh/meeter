import React, { Component } from "react";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import Meeting from "./Meeting";
import GoogleMap from "./GoogleMaps";
import { perPage } from "../config";

const ALL_MEETINGS_QUERY = gql`
  query ALL_MEETINGS_QUERY($skip: Int!, $first: Int) {
    meetings(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      description
      image
      largeImage
      startTime
      endTime
      lat
      lng
    }
    meetingsConnection {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
      }
      aggregate {
        count
      }
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;
const Wrapper = styled.div``;
const MeetingsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  cursor: pointer;
`;

class Meetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true
    };
  }
  render() {
    return (
      <Center>
        <p>Meetings!</p>
        <Query
          query={ALL_MEETINGS_QUERY}
          variables={{
            skip: 0,
            first: 6
          }}
          fetchPolicy="network-only"
        >
          {({ data, error, loading, fetchMore }) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>{error.message}</p>;
            // first we decoustruct our payload, Gets the data from our query
            return (
              <Wrapper>
                <GoogleMap meetings={data.meetings} />
                <MeetingsList>
                  {data.meetings.map(meeting => {
                    return (
                      <InfiniteScroll
                        pageStart={0}
                        hasMore={this.state.hasMore}
                        loadMore={() =>
                          fetchMore({
                            variables: {
                              skip: data.meetings.length
                            },
                            updateQuery: (
                              previousResult,
                              { fetchMoreResult }
                            ) => {
                              {
                                console.log(this.state.hasMore);
                              }
                              this.setState({
                                hasMore:
                                  data.meetingsConnection.aggregate.count >
                                  data.meetings.lengthe
                              });
                              {
                                console.log(this.state.hasMore);
                              }
                              if (!fetchMoreResult) {
                                hasMore =
                                  data.meetingsConnection.aggregate.count >
                                  data.meetings.length;
                                return previousResult;
                              }

                              return {
                                ...fetchMoreResult,
                                meetings: [
                                  ...previousResult.meetings,
                                  ...fetchMoreResult.meetings.filter(
                                    newMeeting =>
                                      !previousResult.meetings.some(
                                        p => p.id === newMeeting.id
                                      )
                                  )
                                ]
                              };
                            }
                          })
                        }
                        loader={
                          <div className="loader" key={0}>
                            Loading ...
                          </div>
                        }
                      >
                        <Meeting meeting={meeting} key={meeting.id} />
                      </InfiniteScroll>
                    );
                  })}
                </MeetingsList>
              </Wrapper>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Meetings;

export { ALL_MEETINGS_QUERY };
