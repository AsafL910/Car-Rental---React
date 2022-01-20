import { Table, Button, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import EditableTableRow from "../EditableTableRow.js";
import { FaEdit, FaPlus, FaSave } from "react-icons/fa";

const ManageObjects = ({ fetchLink }) => {
  const [edit, setEdit] = useState(false);
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    const changeObjects = async () => {
      setObjects(await fetchObjects());
    };
    changeObjects();
  }, []);
  const fetchObjects = async () => await (await fetch(fetchLink)).json();
  return (
    <div style={{ height: "10vh"}}>
      <Table striped bordered hover style={{ overflow: "auto"}}>
        <thead>
          <tr>
            {Object.getOwnPropertyNames(
              objects.length > 0 ? objects[0] : {}
            ).map(
              (key) =>
                typeof objects[0][key] === "string" && <th key={key}>{key}</th>
            )}
            {edit && (
              <th>
                {" "}
                עריכה <FaEdit />
              </th>
            )}
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
              reload={async () => setObjects(await fetchObjects())}
              fetchLink={fetchLink}
            />
          ))}
        </tbody>
      </Table>
      <ButtonGroup
        size="lg"
        style={{ position: "fixed", left: 30, bottom: 30 }}
      >
        <Button
          className="btn-secondary"
          onClick={() => setEdit(!edit)}
          style={{
            borderRadius: 10,
            margin: 10,
            boxShadow: "6px 6px 15px 1px black",
          }}
        >
          {edit ? <FaSave /> : <FaEdit />}
        </Button>
        <Button
          className="btn-secondary"
          style={{
            borderRadius: 10,
            margin: 10,
            boxShadow: "6px 6px 15px 1px black",
          }}
        >
          <FaPlus />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ManageObjects;
