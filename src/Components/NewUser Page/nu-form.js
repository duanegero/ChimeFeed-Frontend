import React, { use, useState } from "react"; //importing react and useState

export default function NewUserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <form>
        <div>
          <lable>Username</lable>
          <input
            value={username}
            type="text"
            placeholder="Type here..."
          ></input>
        </div>
        <div>
          <lable>Password</lable>
          <input
            value={password}
            type="password"
            placeholder="Type here..."
          ></input>
        </div>
        <div>
          <lable>First Name</lable>
          <input
            value={firstname}
            type="text"
            placeholder="Type here..."
          ></input>
        </div>
        <div>
          <lable>Last Name</lable>
          <input
            value={lastname}
            type="text"
            placeholder="Type here..."
          ></input>
        </div>
        <div>
          <lable>Age</lable>
          <input value={age} type="number" placeholder="Type here..."></input>
        </div>
        <div>
          <button>Create User</button>
        </div>
      </form>
    </div>
  );
}
