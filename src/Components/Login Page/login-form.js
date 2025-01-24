import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

import submitLogin from "./Helpers/submitLogin"; //iporting helper function to use in app
import { loginButtonClassName, signUpButton } from "../Buttons/buttonStyles";
import openNewUserWindow from "../NewUser Page/Helpers/openNewUserWindow";

export default function LoginForm() {
  //creating use state variables to set and use
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //creating variable to have navigate
  const navigate = useNavigate();

  //defining a function to call helper and pass in vairables
  const handleSubmit = (event) => {
    submitLogin(event, username, password, setUsername, setPassword, navigate);
  };

  //HTML and Tailwind CSS used to display and collect data with app
  return (
    <div className="flex flex-col justify-center items-center min-w-fit pt-28">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-96 border-2 border-gray-300 p-0 rounded-lg shadow-lg"
      >
        <div className="bg-amber-500 w-full flex justify-center items-center pt-10 pb-2 pl-4">
          <p className="font-extrabold text-red-800 tracking-tighter text-5xl shadow-lg uppercase">
            Login
          </p>
        </div>
        <div className="flex flex-col mt-10">
          <label className="font-poppins tracking-wide">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Type your username"
            className="p-1 mb-6 mt-1 w-60 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform focus:scale-105"
          ></input>
        </div>
        <div className="flex flex-col">
          <lable className="font-poppins tracking-wide">Password</lable>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Type your password"
            className="p-1 mb-16 w-60 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform focus:scale-105"
          ></input>
        </div>
        <div className="mb-5">
          <button type="submit" className={loginButtonClassName()}>
            Chime In
          </button>
        </div>
      </form>
      <button
        type="button"
        onClick={openNewUserWindow}
        className={signUpButton()}
      >
        Sign Up
      </button>
    </div>
  );
}
