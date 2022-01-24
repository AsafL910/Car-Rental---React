import { Nav, Navbar as ReactNavbar } from "react-bootstrap";
import {
  FaGlobeAfrica,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
  FaHome
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const Navbar = () => {
  const navigate = useNavigate();
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
      <ReactNavbar.Brand>
        <FaGlobeAfrica></FaGlobeAfrica> גלובוס רכבים
      </ReactNavbar.Brand>

      <Nav
        style={{
          flexDirection: "row",
          justifySelf: "left",
          textDecoration: "none",
        }}
      >
       <Nav.Link  style={myStyle} onClick={() => navigate("/")}><FaHome/></Nav.Link>
        <Nav.Item>
          <Nav.Link style={myStyle} onClick={() => navigate("/search")}>
            <FaSearch />
          </Nav.Link>
        </Nav.Item>
          {user.username === 'אורח' && 
          <Nav.Item>
          <Nav.Link style={myStyle} onClick={() => navigate("/signUp")}>
            <FaUserAlt />
          </Nav.Link>
        </Nav.Item>}
        <Nav.Item>
          <Nav.Link style={myStyle} onClick={() => navigate("/signIn")}>
            {user.username === "אורח" ? (
              <span>
                {" "}
                <FaSignInAlt />
              </span>
            ) : (
              <span
                onClick={() =>
                  setUser({
                    username: "אורח",
                    status: "אורח",
                  })
                }
              >
                <FaSignOutAlt /> התנתק
              </span>
            )}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </ReactNavbar>
  );
};

export default Navbar;
