import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import EditableTableRow from "../EditableTableRow.js";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const changeUsers = async () => {
      setUsers(await fetchUsers());
    };
    changeUsers();
  }, []);
  const fetchUsers = async () =>
    await (await fetch("http://localhost:5000/users")).json();
  return (
    <div style={{ margin: 100 }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>שם משתמש</th>
            <th>שם מלא</th>
            <th>סיסמא</th>
            <th>תאריך לידה</th>
            <th>מין</th>
            <th>מייל</th>
            <th>מנהל</th>
            <th>עדכון</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <EditableTableRow
              key={user.id}
              startUser={user}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;
