import { FaUser, FaUserTag, FaKey, FaCalendarAlt } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import UserInputText from "../UserInputText.js";
import DatePicker from "../DatePicker.js";
import { Card, Button } from "react-bootstrap";
import UserInputRadio from "../UserInputRadio.js";
import UserInputFile from "../UserInputFile.js";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [imageFile, setImageFile] = useState(new File([], "Temp.png"));

  const submitForm = () =>
    console.log({
      username: username,
      name: name,
      password: password,
      birthDate: birthDate,
      gender: gender,
      email: email,
      imageFile: imageFile,
    });
  return (
    <Card
      style={{ width: 400, padding: 20, margin: 100, alignItems: "center" }}
      className="d-grid gap-2"
    >
      <UserInputText
        type="text"
        text="שם מלא:"
        placeholder="הכנס שם מלא"
        icon={FaUserTag}
        validationFunc={(text) => !/\d/.test(text) && text}
        input={name}
        onChange={(text) => setName(text)}
      />
      <UserInputText
        type="text"
        text="שם משתמש:"
        placeholder="הכנס שם משתמש"
        icon={FaUser}
        validationFunc={(text) => text}
        input={username}
        onChange={(text) => setUsername(text)}
      />
      <UserInputText
        type="password"
        text="סיסמא:"
        placeholder="הכנס סיסמא"
        icon={FaKey}
        extraInfo="על הסיסמא להיות מעל 8 תווים"
        validationFunc={(text) => text.length > 8}
        input={password}
        onChange={(text) => setPassword(text)}
      />
      <DatePicker
        title="תאריך לידה:"
        icon={FaCalendarAlt}
        date={birthDate}
        onChange={(newDate) => setBirthDate(newDate)}
      />
      <UserInputRadio
        text="מין:"
        icon={BsGenderAmbiguous}
        options={["זכר", "נקבה"]}
        onChange={(gender) => setGender(gender)}
      />
      <UserInputText
        text="אימייל:"
        placeholder="הכנס אימייל"
        extraInfo="על כתובת האימייל להיות תקנית"
        validationFunc={(email) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
        }
        input={email}
        onChange={(text) => setEmail(text)}
      />
      <UserInputFile
        text="תמונה:"
        extraInfo="גודל מקסימלי לקובץ 10mb"
        validationFunc={(file) => file.size / 1024 / 1024 < 10}
        onChange={(newImage) => setImageFile(newImage)}
        input={imageFile}
      />

      <Button style={{ margin: 10 }} size="lg" onClick={submitForm}>
        שלח
      </Button>
    </Card>
  );
};

export default SignUp;
