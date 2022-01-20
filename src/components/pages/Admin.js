import ManageObjects from "./ManageObjects";
import { Tabs, Tab } from "react-bootstrap";

const Admin = () => {
  return (
    <Tabs style={{marginTop: "8vh"}} defaultActiveKey="users">
      <Tab eventKey="users" title="משתמשים">
        <ManageObjects fetchLink="http://localhost:5000/users" />
      </Tab>
      <Tab eventKey="cars" title="רכבים">
        <ManageObjects fetchLink="http://localhost:5000/posts" />
      </Tab>
      <Tab eventKey="types" title="סוגי רכבים">
        <ManageObjects fetchLink="http://localhost:5000/posts" />
      </Tab>
      <Tab eventKey="invites" title="הזמנות">
        <ManageObjects fetchLink="http://localhost:5000/posts" />
      </Tab>
    </Tabs>
  );
};

export default Admin;
