import Link from "next/link";
import User from "./User";
import Signout from "./Signout";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/events">
          <a>Explore Events</a>
        </Link>
        {console.log(me)}
        {me && (
          <>
            {/* React fragment // ghost element */}
            <Link href="/createevent">
              <a>Create Event</a>
            </Link>
            <Link href="/createevent">
              <a>Messaging</a>
            </Link>
            <Link href="/account">
              <a>Account</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
