import styles from "./Signup.module.css";
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };
  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>Email: </span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>Password: </span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <span>Display Name </span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <button className="btn">Signup</button>
    </form>
  );
}

export default Signup;
