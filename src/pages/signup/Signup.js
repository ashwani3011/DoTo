import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="signup-form"
      >
        <label>
          <span>Name</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
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
