import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import EditableTableRow from "../EditableTableRow.js";

const ManageObjects = () => {
  const [edit, setEdit] = useState(false);
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    const changeUsers = async () => {
      setObjects(await fetchUsers());
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
            {Object.getOwnPropertyNames(
              objects.length > 0 ? objects[0] : {}
            ).map(
              (key) =>
                typeof objects[0][key] === "string" && <th key={key}>{key}</th>
            )}
            {edit && <th>עדכון</th>}
          </tr>
        </thead>
        <tbody>
          {objects.map((object, index) => (
            <EditableTableRow
              key={index}
              startObject={object}
              edit={edit}
              editTrue={() => setEdit(true)}
              editFalse={() => setEdit(false)}
              reload={async () => setObjects(await fetchUsers())}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageObjects;
