import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

const submitNewUser = async (
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
) => {
  event.preventDefault();

  if (!username || !password || !firstname || !lastname || !age) {
    alert("All fields most be complete");
    return;
  }

  const newUser = {
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    age: age,
  };

  try {
    const response = await axios.post(`${apiUrl}/users`, newUser);
    console.log("New User", response.data);
    alert(`New User, ${username}, created.`);
    setUsername("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setAge("");
  } catch (error) {
    console.error("New User Error", error.message, error.stack);
  }
};

export default submitNewUser;
