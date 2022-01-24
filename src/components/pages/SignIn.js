import { Card, Button, Row } from "react-bootstrap";
import UserInputText from "../UserInputText";
import { FaUser, FaKey } from "react-icons/fa";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App.js";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const validateUsername = (username) => username.length < 20 && username;
  const validatePassword = (password) => password.length > 8;

  const submitForm = async () => {
    validateUsername(username) && validatePassword(password)
      ? updateCurrUser(username, password)
      : alert("אין מצב שאלה הפרטים שלך");
  };

  const updateCurrUser = async () => {
    const allUsers = await (
      await fetch("http://localhost:5000/users")
    ).json();
    const foundUser = allUsers.find((currUser) => currUser.username === username && currUser.password === password)
    if (foundUser) {
      setUser(foundUser)
      navigate("/")
    } else {
      alert("לא מצאנו את המשתמש שלך")
    }
    setUsername("")
    setPassword("")
  }

  const { setUser, user } = useContext(UserContext);

  return (
    <>
    <Card
      style={{
        width: 400,
        padding: 20,
        margin: "auto",
        marginTop: 100,
        alignItems: "center",
      }}
      className="d-grid gap-2"
    >
      <UserInputText
        text="שם משתמש:"
        value={username}
        placeholder="הכנס שם משתמש"
        icon={<FaUser />}
        input={username}
        onChange={(text) => setUsername(text)}
      />
      <UserInputText
        type="password"
        text="סיסמא:"
        value={password}
        placeholder="הכנס סיסמא"
        icon={<FaKey />}
        input={password}
        onChange={(text) => setPassword(text)}
      />

      <Button style={{ margin: 10 }} size="lg" onClick={submitForm}>
        התחבר
      </Button>
      <Link to="/signUp">אין לי משתתמש</Link>
    </Card>
    <Row><img style={{width: "10%" ,margin: "auto", marginTop: 100}} src="https://cdn.pixabay.com/photo/2016/04/17/01/41/globe-1334084_960_720.png"></img></Row>
    </>
  );
};

export default SignIn;
