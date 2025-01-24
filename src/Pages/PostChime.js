import React, { useEffect } from "react";
import PostChimeHeader from "../Components/PostChime Page/pc-header";
import PostChimeForm from "../Components/PostChime Page/pc-form";

export default function PostChime() {
  useEffect(() => {
    document.title = "Post A Chime";
  });

  return (
    <>
      <PostChimeHeader />
      <PostChimeForm />
    </>
  );
}
