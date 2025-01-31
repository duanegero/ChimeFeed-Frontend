import React, { useState } from "react"; //importing react and usestate

//importing helpers and button classes to use in app
import loginButtonClassName from "../Buttons/buttonStyles";
import submitUpdatedChime from "./Helpers/submitUpdatedChime";

export default function UpdateChimeForm() {
  //setting up use state variables
  const [content, setContent] = useState("");
  const [charCount, setCharCount] = useState(0);

  //getting ID from URL
  const postId = new URLSearchParams(window.location.search).get("postId");
  //getting the old content from local storage
  const storedContent = localStorage.getItem("content");

  return (
    <div>
      <form className="flex flex-col justify-center items-center">
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setCharCount(e.target.value.length);
          }}
          placeholder={storedContent}
          className="w-80 h-40 p-2 mt-20 resize-none rounded-lg shadow-md hover:shadow-lg focus:shadow-xl transition-shadow"
        ></textarea>
        <p className="text-gray-400">Characters: {charCount}</p>
        <button
          className={loginButtonClassName()}
          onClick={(event) =>
            submitUpdatedChime(event, postId, content, setContent)
          }
        >
          Update Chime
        </button>
      </form>
    </div>
  );
}
