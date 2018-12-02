import Meetings from "../components/Meetings";

const Home = props => (
  <div>
    <Meetings page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;
