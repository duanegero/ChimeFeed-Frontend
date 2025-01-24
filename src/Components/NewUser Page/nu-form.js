import React, { useState } from "react"; //importing react and useState

//importing button styles and helper functions to use in app
import { loginButtonClassName } from "../Buttons/buttonStyles";
import submitNewUser from "./Helpers/submitNewUser";

export default function NewUserForm() {
  //creating usestate variables to handle user data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="flex flex-col justify-center items-center min-w-fit pt-12">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            await submitNewUser(
              event,
              username,
              setUsername,
              password,
              setPassword,
              firstname,
              setFirstname,
              lastname,
              setLastname,
              age,
              setAge
            );
          } catch (error) {
            console.error("Error submitting User", error);
          }
        }}
        className="flex flex-col justify-center items-center w-96 border-2 border-gray-300 p-0 rounded-lg shadow-lg pt-5 pb-10"
      >
        <div>
          <h1 className="text-xl font-bangers text-amber-500 tracking-wider pb-4">
            Join the Chime, where every voice matters!{" "}
          </h1>
        </div>
        <div className=" flex flex-row mt-4 mb-3">
          <lable className="font-poppins pr-2">First Name:</lable>
          <input
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            type="text"
            placeholder="Type here..."
            className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          ></input>
        </div>
        <div className=" flex flex-row mb-3">
          <lable className="font-poppins pr-2">Last Name:</lable>
          <input
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            type="text"
            placeholder="Type here..."
            className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          ></input>
        </div>
        <div className=" flex flex-row  mb-3">
          <lable className="font-poppins pr-2">Username:</lable>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Type here..."
            className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          ></input>
        </div>
        <div className=" flex flex-row mb-3">
          <lable className="font-poppins pr-2">Password:</lable>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Type here..."
            className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          ></input>
        </div>
        <div className=" flex flex-row mb-3">
          <label className="font-poppins pr-2">Age:</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            min="18"
            max="100"
            className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          ></input>
        </div>
        <div>
          <p className="text-xs font-poppins text-gray-400 pb-4">
            Please complete all fields before proceeding
          </p>
        </div>
        <div>
          <button type="submit" className={loginButtonClassName()}>
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}
