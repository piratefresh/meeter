import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import GoogleMap from "./GoogleMaps";
import Meeting from "./Meeting";

const SEARCH_QUERY = gql`
  query SEARCH_QUERY($query: String!) {
    meetings(
      where: {
        OR: [
          { category_contains: $query }
          { title_contains: $query }
          { address_contains: $query }
          { description_contains: $query }
        ]
      }
    ) {
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
const SearchStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  color: black;
`;

class SearchResults extends Component {
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
        query={SEARCH_QUERY}
        variables={{
          query: this.props.query
        }}
      >
        {({ error, loading, data }) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>{error.message}</p>;
          // first we decoustruct our payload, Gets the data from our query
          return (
            <div>
              <h2 styles={{ alignText: "center" }}>
                Searched for {this.props.query}
              </h2>
              <Wrapper>
                <SearchStyles>
                  {data.meetings.map(meeting => {
                    return (
                      <Meeting
                        meeting={meeting}
                        key={meeting.id}
                        highlightMarker={this.highlightMarker}
                      />
                    );
                  })}
                </SearchStyles>
                <GoogleMap
                  meetings={data.meetings}
                  highlightedMarker={this.state.highlightedMarker}
                />
              </Wrapper>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default SearchResults;
