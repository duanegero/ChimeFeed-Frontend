import React, { useEffect } from "react";
import NewUserHeader from "../Components/NewUser Page/nu-header";
import NewUserForm from "../Components/NewUser Page/nu-form";

export default function NewUser() {
  useEffect(() => {
    document.title = "Sign-up";
  });

  return (
    <>
      <NewUserHeader />
      <NewUserForm />
    </>
  );
}
