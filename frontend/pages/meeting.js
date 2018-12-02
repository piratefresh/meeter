import SingleMeeting from "../components/SingleMeeting";

const meeting = props => (
  <div>
    <SingleMeeting id={props.query.id} />
  </div>
);

export default meeting;
