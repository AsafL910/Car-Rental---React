import EditableTableField from "./EditableTableField";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaSave, FaTrash } from "react-icons/fa";

const EditableTableRow = ({
  startObject,
  edit,
  reload,
  fetchLink,
}) => {
  const [isChanged, setIsChanged] = useState(false);
  const [editable, setEditable] = useState(edit);
  const [object, setObject] = useState(startObject);
  const updateObject = async (object) => {
      await fetch(`${fetchLink}/${object.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(object),
      });
      setIsChanged(false)
      setEditable(false)      
  };

  const deleteObject = async (object) => {
    await fetch(`${fetchLink}/${object.id}`, {
      method: "DELETE",
    });
    setEditable(false);
    reload();
  };

  return (
    <tr key={object.id} onClick={() => setEditable(true)}>
      {Object.keys(object).map(
        (property, index) =>
          (typeof object[property] === "string" ||
            typeof object[property] === "number") && (
            <EditableTableField
              key={index}
              value={object[property]}
              edit={editable}
              onChange={(input) => {setObject(
                { ...object, [property]: input })
                setIsChanged(true)}}
            />
          )
      )}

      {editable && (
        <div>
          <Button
            style={{
              background: "#0d6efd",
              color: "white",
              margin: 5,
              borderRadius: "15px",
            }}
            cursor="pointer"
            onClick={() => updateObject(object)}
            disabled={!isChanged}
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
            onClick={() => deleteObject(object)}
          >
            <FaTrash /> מחיקה
          </Button>
        </div>
      )}
    </tr>
  );
};

export default EditableTableRow;
