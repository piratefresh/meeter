import Dashboard from "../components/Dashboard";
import PleaseSignIn from "../components/PleaseSignin";

const DashboardPage = props => (
  <div>
    <PleaseSignIn>
      <Dashboard />
      {console.log(props)}
    </PleaseSignIn>
  </div>
);

export default DashboardPage;
