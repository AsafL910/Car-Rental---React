import { Form as Input } from "react-bootstrap";

const UserInputText = ({
  icon,
  text,
  placeholder,
  validationFunc,
  extraInfo,
  type,
  onChange,
  value
}) => {
  return (
    <Input>
      <Input.Label>
        {icon}
        {text}
      </Input.Label>
      <Input.Control
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={(newInput) => {
          onChange(newInput.target.value);
        }}
        isValid={validationFunc && validationFunc(value)}
        value={value}
      />
      <Input.Text className="text-muted">{extraInfo}</Input.Text>
    </Input>
  );
};

export default UserInputText;
