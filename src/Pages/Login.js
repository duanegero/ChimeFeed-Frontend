import React, { useEffect } from "react";
import LoginHeader from "../Components/Login Page/login-header";
import LoginForm from "../Components/Login Page/login-form";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <LoginHeader />
      <LoginForm />
    </>
  );
}
