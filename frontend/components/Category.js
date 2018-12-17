import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import GoogleMap from "./GoogleMaps";
import Meeting from "./Meeting";

const CategoryStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  color: black;
`;

const CATEGORY_EVENTS_QUERY = gql`
  query CATEGORY_EVENTS_QUERY($query: String!) {
    meetings(where: { category_contains: $query }) {
      id
      title
      lng
      lat
      image
      startTime
      endTime
      description
      category
      address
      user {
        id
      }
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 40px;
`;
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedMarker: null
    };
    this.highlightMarker = this.highlightMarker.bind(this);
  }
  highlightMarker(meetingId) {
    this.setState({ highlightedMarker: meetingId });
  }
  render() {
    return (
      <Query
        query={CATEGORY_EVENTS_QUERY}
        variables={{
          query: this.props.query
        }}
      >
        {({ error, loading, data }) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>{error.message}</p>;
          // first we decoustruct our payload, Gets the data from our query
          return (
            <Wrapper>
              <CategoryStyles>
                {data.meetings.map(meeting => {
                  return (
                    <Meeting
                      meeting={meeting}
                      key={meeting.id}
                      highlightMarker={this.highlightMarker}
                    />
                  );
                })}
              </CategoryStyles>
              <GoogleMap
                meetings={data.meetings}
                highlightedMarker={this.state.highlightedMarker}
              />
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}

export default Category;
