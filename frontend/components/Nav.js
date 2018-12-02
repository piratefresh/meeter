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
        {me && (
          <>
            {/* React fragment // ghost element */}
            <Link href="/meetings">
              <a>My Network</a>
            </Link>
            <Link href="/createevent">
              <a>Jobs</a>
            </Link>
            <Link href="/createevent">
              <a>Messaging</a>
            </Link>
            <Link href="/createevent">
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
