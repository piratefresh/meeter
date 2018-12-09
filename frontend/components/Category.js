import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import Error from "./ErrorMessage";
import Head from "next/head";
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

class Category extends Component {
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
            <CategoryStyles>
              {data.meetings.map(meeting => {
                return <Meeting meeting={meeting} key={meeting.id} />;
              })}
            </CategoryStyles>
          );
        }}
      </Query>
    );
  }
}

export default Category;
