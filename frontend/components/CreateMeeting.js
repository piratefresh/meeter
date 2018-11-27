import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
    $startTime: Int!
    $endTime: Int!
  ) {
    createMeeting(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      startTime: $startTime
      endTime: $endTime
    ) {
      id
    }
  }
`;

class CreateMeeting extends Component {
  state = {
    title: "dance party",
    description: "a cool dance party",
    image: "party.jpg",
    largeImage: "largeparty.jpg",
    startTime: "",
    endTime: ""
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
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };
  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createMeeting, { loading, error }) => (
          <Form
            onSubmit={async e => {
              // stop form from submitting
              e.preventDefault();
              // call the mutation
              const res = await createMeeting();
              // change them to the single meeting page
              console.log(res);
              Router.push({
                pathname: "/meeting",
                query: { id: res.data.createMeeting.id }
              });
            }}
          >
            <Error error={error} />
            <h2>Create a Meeting</h2>
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  required
                  onChange={this.uploadFile}
                />
                {this.state.image && (
                  <img
                    width="200"
                    src={this.state.image}
                    alt="Upload preview"
                  />
                )}
              </label>

              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
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
                  value={this.state.startTime}
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
                  value={this.state.endTime}
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
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateMeeting;
export { CREATE_ITEM_MUTATION };
