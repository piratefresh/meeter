import Link from "next/link";
import Reset from "../components/Reset";

const resetPage = props => (
  <div>
    <p>Reset your password {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default resetPage;
