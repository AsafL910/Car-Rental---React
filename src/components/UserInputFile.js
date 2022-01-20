import { Form as Input } from "react-bootstrap";

const UserInputFile = ({
  icon,
  text,
  extraInfo,
  validationFunc,
  input,
  onChange,
}) => {
  return (
    <Input>
      <Input.Label>
        {icon}
        {text}
      </Input.Label>
      <Input.Control
        type="file"
        files={input}
        onChange={(e) => {
          onChange(e.target.files[0]);
        }}
        isValid={validationFunc(input)}
      />
      <Input.Text className="text-muted">{extraInfo}</Input.Text>
    </Input>
  );
};

export default UserInputFile;
