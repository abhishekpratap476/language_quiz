import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const history = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/kit", {
        userName,
        password,
      });

      if (response.data.status === "success") {
        history("/home", { state: { id: userName } });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response.data.message);
      
      setError(error.response.data.message);
      setuserName("");
      setPassword("");
    }
  }

  return (
    <div class="body">
       {error && <div className="alert">{error}</div>}
      
      <div className="wraper">
        <main>
          <h2 className="adj">Login</h2>
          <form className="adj">
            <div className="input">
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="input">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <button className="btn" onClick={submit}>
              Login
            </button><br/><br/>
            <p>If you had no account? <a href="/register">Register</a></p>
          </form>
        </main>
      </div>

    </div>
  );
};

export default Login;