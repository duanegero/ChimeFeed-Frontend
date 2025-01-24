import React, { useEffect } from "react";
import NewUserHeader from "../Components/NewUser Page/nu-header";

export default function NewUser() {
  useEffect(() => {
    document.title = "Sign-up";
  });

  return (
    <>
      <NewUserHeader />
    </>
  );
}
