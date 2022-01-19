import { useState } from "react";
import { Form as Input } from "react-bootstrap";

const UserInputText = ({
  icon,
  text,
  placeholder,
  validationFunc,
  extraInfo,
  type,
}) => {
  const [input, setInput] = useState("");

  return (
    <Input>
      <Input.Label>
        {icon}
        {text}
      </Input.Label>
      <Input.Control
        type={type ? type : "text"}
        placeholder={placeholder}
        value={input}
        onInput={(e) => {
          setInput(e.target.value);
        }}
        isValid={validationFunc(input)}
      />
      <Input.Text className="text-muted">{extraInfo}</Input.Text>
    </Input>
  );
};

export default UserInputText;
