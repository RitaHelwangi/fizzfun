import React, { useState } from "react";
import useAdminStore from "../data/adminStore";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { toggleLogIn } = useAdminStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

    if (username !== "admin" || password !== "password") {
      if (username !== "admin") setUsernameError("Invalid username");
      if (password !== "password") setPasswordError("Invalid password");
      return;
    }

    toggleLogIn();

  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={usernameError ? "input-error" : ""}
        />
        {usernameError && <span className="error">{usernameError}</span>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={passwordError ? "input-error" : ""}
        />
        {passwordError && <span className="error">{passwordError}</span>}
      </div>
      <button type="submit" className="login-btn">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;