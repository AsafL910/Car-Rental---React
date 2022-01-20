import { Form } from "react-bootstrap";

export const EditableTableField = ({ value, onChange, edit }) => {
  return (
    <td>
      {edit ? (
        <Form.Control
          value={value}
          onChange={(input) => onChange(input.target.value)}
        />
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
};

export default EditableTableField;
