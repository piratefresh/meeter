import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import Meetingstyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import DeleteMeeting from "./DeleteMeeting";

class Meeting extends Component {
  static propTypes = {
    meeting: PropTypes.object.isRequired
  };
  render() {
    const { meeting } = this.props;
    return (
      <Meetingstyles onMouseOver={() => this.props.highlightMarker(meeting.id)}>
        {meeting.image && <img src={meeting.image} alt={meeting.title} />}
        <Title>
          <Link
            href={{
              pathname: "/meeting",
              query: { id: meeting.id }
            }}
          >
            <a>{meeting.title}</a>
          </Link>
        </Title>
        <PriceTag>
          {meeting.startTime}-{meeting.endTime}
        </PriceTag>
        <p>{meeting.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: meeting.id }
            }}
          >
            <a>Edit</a>
          </Link>
          <button>Read More</button>
          <DeleteMeeting id={meeting.id}>Delete Meeting</DeleteMeeting>
        </div>
      </Meetingstyles>
    );
  }
}

export default Meeting;
