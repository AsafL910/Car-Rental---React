import {createContext, useState} from 'react'

const authContext = createContext();

function UseAuth() {
  const [authed, setAuthed] = useState(false);
  const [userId, setUserId] = useState();

  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    }
  };
}

export default UseAuth