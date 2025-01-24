import React, { useState } from "react"; //importing react and usestate

//importing button styles and helpers functions to use in the app
import loginButtonClassName from "../Buttons/buttonStyles";
import submitNewChime from "./Helpers/submitNewChime";
import closePostChimeWindow from "./Helpers/closePostChimeWindow";

export default function PostChimeForm() {
  //setting vaiables using use state
  const [content, setContent] = useState("");
  //parsing the id from the current url
  const userId = new URLSearchParams(window.location.search).get("userId");

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            await submitNewChime(event, userId, content, setContent);
            closePostChimeWindow();
          } catch (error) {
            console.error("Error submitting Chime", error);
          }
        }}
        className="flex flex-col justify-center items-center"
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-80 h-40 p-2 mt-20 resize-none rounded-lg shadow-md hover:shadow-lg focus:shadow-xl transition-shadow"
          placeholder="Chime here..."
        ></textarea>
        <button className={loginButtonClassName()}>Chime</button>
      </form>
    </div>
  );
}
