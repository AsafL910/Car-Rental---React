import { Nav, Navbar as ReactNavbar } from "react-bootstrap";
import { FaGlobeAfrica, FaSearch, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const Navbar = () => {
  const myStyle = { marginLeft: 10, marginRight: 10 };
  const { user, setUser } = useContext(UserContext);

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
           חיפוש רכבים <FaSearch/>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link style={myStyle} to="/signUp">
            הרשמה
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link style={myStyle} to="/signIn">
            {user.username === "אורח" ? (
              <span> התחבר <FaSignInAlt/></span>
            ) : (
              <span
                onClick={() =>
                  setUser({
                    username: "אורח",
                    status: "אורח",
                  })
                }
              >
                <FaSignOutAlt/> התנתק
              </span>
            )}
          </Link>
        </Nav.Item>
      </Nav>
    </ReactNavbar>
  );
};

export default Navbar;
