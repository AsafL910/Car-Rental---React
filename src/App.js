import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home.js";
import SignUp from "./components/pages/SignUp.js";
import SignIn from "./components/pages/SignIn.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/pages/Admin.js";
import SearchCarsForRent from "./components/pages/SearchCarsForRent.js";
import { createContext, useState } from "react";
import RequireAuth from './components/RequireAuth.js'


export const UserContext = createContext({});

function App() {
  const [user, setUser] = useState({
    username: "אורח",
    status: "אורח",
    name: "אורח"
  });

  
  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/search" element={<SearchCarsForRent />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
