import { FaUser, FaUserTag, FaKey, FaCalendarAlt } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import UserInputText from "../UserInputText.js";
import DatePicker from "../DatePicker.js";
import { Card, Button } from "react-bootstrap";
import UserInputRadio from "../UserInputRadio.js";
import UserInputFile from "../UserInputFile.js";

const SignUp = () => {
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
      />
      <UserInputText
        type="text"
        text="שם משתמש:"
        placeholder="הכנס שם משתמש"
        icon={FaUser}
        validationFunc={(text) => text}
      />
      <UserInputText
        type="password"
        text="סיסמא:"
        placeholder="הכנס סיסמא"
        icon={FaKey}
        extraInfo="על הסיסמא להיות מעל 8 תווים"
        validationFunc={(text) => text.length > 8}
      />
      <DatePicker title="תאריך לידה:" icon={FaCalendarAlt} />
      <UserInputRadio
        text="מין:"
        icon={BsGenderAmbiguous}
        options={["זכר", "נקבה"]}
      />
      <UserInputText
        text="אימייל:"
        placeholder="הכנס אימייל"
        extraInfo="על כתובת האימייל להיות תקנית"
        validationFunc={(email) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
        }
      />
      <UserInputFile
        text="תמונה:"
        extraInfo="גודל מקסימלי לקובץ 10mb"
        validationFunc={(file) => file.size / 1024 / 1024 < 10}
      />

    <Button style={{margin: 10}}size='lg' type="submit">שלח</Button>
    </Card>
  );
};

export default SignUp;
