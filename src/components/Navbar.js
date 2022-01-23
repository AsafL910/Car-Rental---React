import { Nav, Navbar as ReactNavbar } from "react-bootstrap";
import { FaGlobeAfrica } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const myStyle = { marginLeft: 10, marginRight: 10 };

  return (
    <ReactNavbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      style={{ display: "flex" }}
    >
      <ReactNavbar.Brand href="/">
        <FaGlobeAfrica></FaGlobeAfrica> גלובוס רכבים
      </ReactNavbar.Brand>

      <Nav
        style={{
          flexDirection: "row",
          justifySelf: "left",
          textDecoration: "none",
        }}
      >
        {" "}
        <Nav.Item>
          <Link style={myStyle} to="/search">
            חיפוש רכבים
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link style={myStyle} to="/signUp">
            הרשמה
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link style={myStyle} to="/signIn">
            התחברות
          </Link>
        </Nav.Item>
      </Nav>
    </ReactNavbar>
  );
};

export default Navbar;
