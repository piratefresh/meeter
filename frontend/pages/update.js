import Link from "next/link";
import UpdateMeeting from "../components/UpdateMeeting";

const Sell = ({ query }) => (
  <div>
    <UpdateMeeting id={query.id} />
  </div>
);

export default Sell;
