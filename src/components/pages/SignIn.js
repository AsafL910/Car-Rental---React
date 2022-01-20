import { Card, Button } from "react-bootstrap";
import UserInputText from "../UserInputText";
import { FaUser, FaKey } from "react-icons/fa";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { auto } from "@popperjs/core";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const validateUsername = (username) => username.length < 20 && username;
  const validatePassword = (password) => password.length > 8;

  const submitForm = () => {validateUsername(username) && validatePassword ? console.log("submit") : alert("אין מצב שאלה הפרטים שלך")}
  return (
    <Card
      style={{ width: 400, padding: 20, margin: auto, marginTop: 100, alignItems: "center" }}
      className="d-grid gap-2"
    >
      <UserInputText
        text="שם משתמש:"
        placeholder="הכנס שם משתמש"
        icon={<FaUser/>}
        validationFunc={validateUsername}
        input={username}
        onChange={(text) => setUsername(text)}
      />
      <UserInputText
        type="password"
        text="סיסמא:"
        placeholder="הכנס סיסמא"
        icon={<FaKey/>}
        validationFunc={validatePassword}
        input={password}
        onChange={(text) => setPassword(text)}
      />

      <Button style={{ margin: 10 }} size="lg" onClick={submitForm}>התחבר</Button>
      <Link to='/signUp'>אין לי משתתמש</Link>
    </Card>
  );
};

export default SignIn;
