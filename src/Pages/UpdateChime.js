import React, { useEffect } from "react";
import UpdateChimeHeader from "../Components/UpdateChime Page/uc-header";
import HomeFooter from "../Components/Home Page/home-footer";
import UpdateChimeForm from "../Components/UpdateChime Page/uc-form";

export default function UpdateChime() {
  useEffect(() => {
    document.title = "Update Chime";
  });

  return (
    <>
      <UpdateChimeHeader />
      <UpdateChimeForm />
      <HomeFooter />
    </>
  );
}
