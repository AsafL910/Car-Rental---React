import EditableTableField from "./EditableTableField";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaSave, FaTrash } from "react-icons/fa";

const EditableTableRow = ({ startObject, edit, editTrue, editFalse, reload }) => {
  
  const [object, setObject] = useState(startObject);
  const updateUser = async (object) => {
    await fetch(`http://localhost:5000/users/${object.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(object),
    });
    editFalse();
  };

  const deleteUser = async (object) => {
    await fetch(`http://localhost:5000/users/${object.id}`, {
        method: "DELETE"
      });
      reload();
  }

  return (
      
    <tr key={object.id} onClick={() => editTrue()}>
        {Object.keys(object).map((property, index) => ( (typeof object[property]  === 'string' ) &&
        <EditableTableField
          key={index}
          value={object[property]}
          edit={edit}
          onChange={(input) => setObject({ ...object, [property]: input })}
        />
      ))}
      
      { edit &&
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
            <FaSave /> עדכון משתמש
          </Button>
          <button className="btn btn-danger"
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
          </button>
        </div>
      }
    </tr>
  );
};

export default EditableTableRow;
