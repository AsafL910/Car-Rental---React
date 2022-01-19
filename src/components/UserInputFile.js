import { useState } from "react";
import { Form as Input } from 'react-bootstrap' 

const UserInputFile = ({
  icon,
  text,
  extraInfo,
  validationFunc
}) => {
  const [input, setInput] = useState(new File([],'HelloThere.png'));

  return (
    <Input>
      <Input.Label>
        {icon}
        {text}
      </Input.Label>
      <Input.Control
        type='file'
        files={input}
        onInput={(e) => {
          setInput(e.target.files[0]);
        }}
        isValid={validationFunc(input)}
        />
      <Input.Text className='text-muted'>{extraInfo}</Input.Text>
    </Input>
  );
};

export default UserInputFile
