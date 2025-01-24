import React, { useEffect } from "react";
import HomeHeader from "../Components/Home Page/home-header";
import HomeNav from "../Components/Home Page/home-nav";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <HomeHeader />
      <HomeNav />
    </>
  );
}
