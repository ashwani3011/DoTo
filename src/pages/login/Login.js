import { useState } from "react";

import "./Login.css";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="signup-form">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="login-form"
      >
        <label>
          <span>Email</span>
          <input
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
