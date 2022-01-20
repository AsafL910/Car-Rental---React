import EditableTableField from "./EditableTableField";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaSave, FaTrash } from "react-icons/fa";

const EditableTableRow = ({ startUser, edit, editTrue, editFalse }) => {
  
  const [user, setUser] = useState(startUser);
  const updateUser = async (user) => {
    await fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });
    editFalse();
  };

  return (
    <tr key={user.id} onClick={() => editTrue()}>
      <EditableTableField
        onChange={(input) => setUser({ ...user, username: input })}
        value={user.username}
        edit={edit}
      />
      <EditableTableField
        onChange={(input) => setUser({ ...user, name: input })}
        value={user.name}
        edit={edit}
      />
      <EditableTableField
        onChange={(input) => setUser({ ...user, password: input })}
        value={user.password}
        edit={edit}
      />
      <EditableTableField
        onChange={(input) => setUser({ ...user, birthDate: input })}
        value={user.birthDate}
        edit={edit}
      />
      <EditableTableField
        onChange={(input) => setUser({ ...user, gender: input })}
        value={user.gender}
        edit={edit}
      />
      <EditableTableField
        onChange={(input) => setUser({ ...user, email: input })}
        value={user.email}
        edit={edit}
      />
      <EditableTableField
        onChange={(input) => setUser({ ...user, status: input })}
        value={user.status}
        edit={edit}
      />
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
            onClick={() => updateUser(user)}
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
            onClick={() => updateUser(user)}
          >
            <FaTrash /> מחיקה
          </button>
        </div>
      }
    </tr>
  );
};

export default EditableTableRow;
