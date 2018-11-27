import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/meetings">
      <a>My Network</a>
    </Link>
    <Link href="/sell">
      <a>Jobs</a>
    </Link>
    <Link href="/sell">
      <a>Messaging</a>
    </Link>
    <Link href="/sell">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
