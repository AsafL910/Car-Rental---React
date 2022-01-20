import EditableTableField from "./EditableTableField";
import { useState } from "react";
import { Button } from "react-bootstrap";

const EditableTableRow = ({ startUser }) => {
    const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(startUser);
  const updateUser = async (user) => {
    await fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });
    setEdit(false);
  };

  return (
    <tr key={user.id} onClick={()=>setEdit(true)}>
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
      <td>{user.isAdmin ? "כן" : "לא"}</td>
      <button className="btn btn-primary" style={{}} cursor="pointer" onClick={() => updateUser(user)}>
        עדכן משתמש
      </button>
    </tr>
  );
};

export default EditableTableRow;
