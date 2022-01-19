import {Form as Input} from 'react-bootstrap'

const UserInputRadio = ({options, icon, text, onChange}) => {
  return (
    <Input style={{margin: 10}}>
      <Input.Label>
        {icon}
        {text}
      </Input.Label>
      {options.map((option, index) => (
        <Input.Check inline key={index} onSelect={onChange(option)} type="radio" name="gender" label={option} />
      ))}
    </Input>
  );
}

export default UserInputRadio
