import React, { useEffect } from "react";
import ChimeLikesHeader from "../Components/Chime Likes/cl-header";
import ChimeLikeTable from "../Components/Chime Likes/cl-table";
import HomeFooter from "../Components/Home Page/home-footer";

export default function ChimeLikes() {
  useEffect(() => {
    document.title = "Likes";
  });

  return (
    <>
      <ChimeLikesHeader />
      <ChimeLikeTable />
      <HomeFooter />
    </>
  );
}
