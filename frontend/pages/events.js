import Meetings from "../components/Meetings";

const Events = props => (
  <div>
    <Meetings page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Events;
