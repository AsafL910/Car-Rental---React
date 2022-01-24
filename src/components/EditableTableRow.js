import EditableTableField from "./EditableTableField";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaSave, FaTrash } from "react-icons/fa";

const EditableTableRow = ({
  startObject,
  edit,
  editTrue,
  editFalse,
  reload,
  fetchLink,
}) => {
  const [object, setObject] = useState(startObject);
  const updateUser = async (object) => {
    await fetch(`${fetchLink}/${object.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(object),
    });
    editFalse();
  };

  const deleteUser = async (object) => {
    await fetch(`${fetchLink}/${object.id}`, {
      method: "DELETE",
    });
    reload();
  };

  return (
    <tr key={object.id} onClick={() => editTrue()}>
      {Object.keys(object).map(
        (property, index) =>
          (typeof object[property] === "string" ||
            typeof object[property] === "number") && (
            <EditableTableField
              key={index}
              value={object[property]}
              edit={edit}
              onChange={(input) => setObject({ ...object, [property]: input })}
            />
          )
      )}

      {edit && (
        <div>
          <Button
            style={{
              background: "#0d6efd",
              color: "white",
              margin: 5,
              borderRadius: "15px",
            }}
            cursor="pointer"
            onClick={() => updateUser(object)}
          >
            <FaSave /> עדכון
          </Button>
          <Button
            variant="danger"
            style={{
              background: "#dc3545",
              color: "white",
              margin: 5,
              borderRadius: "15px",
            }}
            cursor="pointer"
            onClick={() => deleteUser(object)}
          >
            <FaTrash /> מחיקה
          </Button>
        </div>
      )}
    </tr>
  );
};

export default EditableTableRow;
