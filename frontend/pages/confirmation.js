import Link from "next/link";
import Confirm from "../components/Confirm";

const confirmPage = props => (
  <div>
    <p>Confirm your account {props.query.confirmToken}</p>
    <Confirm confirmToken={props.query.confirmToken} />
  </div>
);

export default confirmPage;
