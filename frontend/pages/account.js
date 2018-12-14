import Link from "next/link";
import CreateMeeting from "../components/CreateMeeting";
import PleaseSignIn from "../components/PleaseSignin";

const CreateEvent = props => (
  <div>
    <PleaseSignIn>
      <CreateMeeting />
    </PleaseSignIn>
  </div>
);

export default CreateEvent;
