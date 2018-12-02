import React, { Component } from "react";
import Router from "next/router";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const CONFIRM_USER_MUTATION = gql`
  mutation CONFIRM_USER_MUTATION($confirmToken: String!) {
    confirmUser(confirmToken: $confirmToken) {
      message
    }
  }
`;

class Confirm extends Component {
  static propTypes = {
    confirmToken: PropTypes.string.isRequired
  };
  state = {
    confirmToken: this.props.confirmToken
  };
  render() {
    return (
      <Mutation
        mutation={CONFIRM_USER_MUTATION}
        variables={{
          confirmToken: this.props.confirmToken
        }}
        refetchQueries={[
          {
            query: CURRENT_USER_QUERY
          }
        ]}
      >
        {(confirmUser, { error, loading, called }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await confirmUser();
                Router.push({ pathname: "/" });
              }}
            >
              <button type="submit">Click to confirm account</button>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Confirm;
