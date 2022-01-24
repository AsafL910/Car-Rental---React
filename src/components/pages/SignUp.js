import {
  FaUser,
  FaUserTag,
  FaKey,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import UserInputText from "../UserInputText.js";
import DatePicker from "../DatePicker.js";
import { Card, Button, Spinner, Row, Col } from "react-bootstrap";
import UserInputRadio from "../UserInputRadio.js";
import UserInputFile from "../UserInputFile.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validateUsername = (username) => username.length < 20 && username;
const validateName = (name) => !/\d/.test(name) && name;
const validatePassword = (password) => password.length > 8;
const validateGender = (gender) => gender;
const validateEmail = (email) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) && email;
const validateImage = (file) => !file || file.size / 1024 / 1024 < 10;
const validateAll = (username, name, password, gender, email, image) =>
  validateUsername(username) &&
  validateName(name) &&
  validatePassword(password) &&
  validateGender(gender) &&
  validateEmail(email) &&
  validateImage(image);

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [imageFile, setImageFile] = useState(new File([], "Temp.png"));
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const resetForm = () => {
    setName("");
    setUsername("");
    setPassword("");
    setEmail("");
    setBirthDate(new Date());
    setImageFile(new File([], "Temp.png"));
  };

  const addUser = async () => {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        username: username,
        name: name,
        password: password,
        birthDate: birthDate,
        gender: gender,
        email: email,
        imageFile: imageFile,
        status: "משתמש",
      }),
    });
  };

  const fetchUsers = async () => {
    const users = await (await fetch("http://localhost:5000/users")).json()
    return users;
  }

  const submitForm = async () => {
    if (validateAll(username, name, password, gender, email, imageFile)) {
      setIsLoading(true);
      if (((await fetchUsers()).some((user) => user.username === username))) {
        alert("שם משתמש תפוס");
        setIsLoading(false);
      } else {
      resetForm();
      addUser();
      navigate('/signIn')
      }
    } else alert("אנא וודא שכל הפרטים נכונים");
  };
  return (
    <>
    <Row style={{marginTop: 150}}>
      <Col lg={4}>
      <Card
      style={{
        width: 400,
        padding: 20,
        marginRight: 200,
        alignItems: "center",
        opacity: "0.95",
      }}
      className="d-grid gap-2"
    >
      <UserInputText
        type="text"
        text="שם מלא:"
        placeholder="הכנס שם מלא"
        icon={<FaUserTag />}
        validationFunc={validateName}
        value={name}
        onChange={(text) => setName(text)}
      />
      <UserInputText
        type="text"
        text="שם משתמש:"
        placeholder="הכנס שם משתמש"
        icon={<FaUser />}
        validationFunc={validateUsername}
        value={username}
        onChange={(text) => setUsername(text)}
      />
      <UserInputText
        type="password"
        text="סיסמא:"
        placeholder="הכנס סיסמא"
        icon={<FaKey />}
        extraInfo="על הסיסמא להיות מעל 8 תווים"
        validationFunc={validatePassword}
        value={password}
        onChange={(text) => setPassword(text)}
      />
      <DatePicker
        title="תאריך לידה:"
        icon={<FaCalendarAlt />}
        date={birthDate}
        onChange={(newDate) => setBirthDate(newDate)}
        maxDate={new Date()}
      />
      <UserInputRadio
        text="מין:"
        icon={<BsGenderAmbiguous />}
        options={["זכר", "נקבה"]}
        onChange={(gender) => setGender(gender)}
      />
      <UserInputText
        text="אימייל:"
        icon={<FaEnvelope />}
        placeholder="הכנס אימייל"
        extraInfo="על כתובת האימייל להיות תקנית"
        validationFunc={validateEmail}
        value={email}
        onChange={(text) => setEmail(text)}
      />
      <UserInputFile
        text="תמונה:"
        extraInfo="גודל מקסימלי לקובץ 10mb"
        validationFunc={validateImage}
        onChange={(newImage) => setImageFile(newImage)}
        value={imageFile}
      />

      <Button style={{ margin: 10 }} size="lg" onClick={submitForm}>
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          <span>שלח</span>
        )}
      </Button>
    </Card>
      </Col>
      <Col lg={8}>
      <img style={{width: "100%", marginTop: 100, padding: "6%"}} src="https://i.pinimg.com/originals/a9/0f/43/a90f43ceb1a1f63a68a96c11648e0607.png"></img>
      </Col>
    </Row>
    
    
    </>
    
  );
};

export default SignUp;
