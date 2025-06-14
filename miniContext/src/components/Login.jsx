import React, { useState, useContext } from "react";
import UserContext from "../context/UseContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
     e.preventDefault(),
     setUser({username, password})
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      /> {" "}
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
