import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Router from "next/router";
import styled from "styled-components";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import SelectList from "./SelectList";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $category: String!
    $image: String
    $largeImage: String
    $startTime: String!
    $endTime: String!
    $lat: Float!
    $lng: Float!
    $address: String!
  ) {
    createMeeting(
      title: $title
      description: $description
      category: $category
      image: $image
      largeImage: $largeImage
      startTime: $startTime
      endTime: $endTime
      lat: $lat
      lng: $lng
      address: $address
    ) {
      id
    }
  }
`;

const AutocompleteContainer = styled.div`
  border-bottom: honeydew;
  border-left: honeydew;
  border-right: honeydew;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 2px 2px;
`;

class CreateMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "dance party",
      description: "a cool dance party",
      image: "party.jpg",
      largeImage: "",
      category: "",
      startTime: "",
      endTime: "",
      address: "",
      lat: "",
      lng: "",
      gmapsLoaded: false
    };
    this.toggleSelected = this.toggleSelected.bind(this);
  }
  handleChange = e => {
    // allows us to change state of input
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  // Get name of category from dropdown box
  toggleSelected(value, label) {
    this.setState({
      category: value
    });
  }

  handleChangeAddress = address => {
    this.setState({ address });
  };
  // Here we get the lat and lng from google api
  handleSelect = selected => {
    this.setState({ address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          lat,
          lng
        });
      })
      .catch(error => console.error("Error", error));
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
        image: file.secure_url,
        largeImage: file.eager[0].secure_url
      });
    }
  };

  initMap = () => {
    this.setState({
      gmapsLoaded: true
    });
  };

  componentDidMount() {
    window.initMap = this.initMap;
    const gmapScriptEl = document.createElement(`script`);
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-syviZl4VJqqgBlhXxTu4_s3cnXEajDY&libraries=places&callback=initMap`;
    document
      .querySelector(`body`)
      .insertAdjacentElement(`beforeend`, gmapScriptEl);
  }
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
                    alt="Upload Preview"
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
              <label htmlFor="Address">
                {/* LNG AND LAT GOOGLE API */}
                {this.state.gmapsLoaded && (
                  <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChangeAddress}
                    onSelect={this.handleSelect}
                    shouldFetchSuggestions={this.state.address.length > 2}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading
                    }) => (
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: "Search Places ...",
                            className: "location-search-input"
                          })}
                        />
                        <AutocompleteContainer>
                          {loading && <div>Loading...</div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? {
                                  backgroundColor: "#fafafa",
                                  cursor: "pointer"
                                }
                              : {
                                  backgroundColor: "#ffffff",
                                  cursor: "pointer"
                                };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style
                                })}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </AutocompleteContainer>
                      </div>
                    )}
                  </PlacesAutocomplete>
                )}
              </label>

              <label htmlFor="Category">
                <SelectList toggleItem={this.toggleSelected} />
              </label>

              <label htmlFor="startTime">
                Start Time
                <input
                  type="time"
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
                  type="time"
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
