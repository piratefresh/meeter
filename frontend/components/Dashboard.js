import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import RequestReset from "./RequestReset";
import { CURRENT_USER_QUERY } from "./User";
import Form from "./styles/Form";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
`;

class Dashboard extends Component {
  state = {
    bio: "",
    avatar: "",
    largeAvatar: ""
  };

  handleChange = e => {
    // allows us to change state of input
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    console.log("uploading file..");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "meeter");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/da91pbpmj/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    if (!file.error) {
      this.setState({
        avatar: file.secure_url,
        largeAvatar: file.eager[0].secure_url
      });
    }
  };

  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          console.log(data.me);
          return (
            <Wrapper>
              <h2>{data.me.name} Dashboard</h2>
              <Form action="">
                <label htmlFor="file">
                  Avatar
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload an Avatar"
                    required
                    onChange={this.uploadFile}
                  />
                  {this.state.avatar && (
                    <img
                      width="200"
                      src={this.state.avatar}
                      alt="Upload Preview"
                    />
                  )}
                </label>
                <label htmlFor="bio">
                  bio
                  <textarea
                    id="bio"
                    name="bio"
                    placeholder="Write a description of yourself!"
                    required
                    value={this.state.bio}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </Form>
              <RequestReset />
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}

export default Dashboard;
