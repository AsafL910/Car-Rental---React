import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home.js";
import SignUp from "./components/pages/SignUp.js";
import SignIn from "./components/pages/SignIn.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManageUsers from "./components/pages/ManageUsers.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path='/admin/manageUsers' element={<ManageUsers/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
