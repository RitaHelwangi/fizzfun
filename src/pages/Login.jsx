import React from "react";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";

const Login = () => (
  <div className="login-page">
    <h2>Admin Login</h2>
    <LoginForm />
  </div>
);

export default Login;