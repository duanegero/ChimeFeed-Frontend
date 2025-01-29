import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

//defining a async function with passed in variables
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

  //if all fields arn't complete alert user
  if (!username || !password || !firstname || !lastname || !age) {
    alert("All fields most be complete");
    return;
  }

  //creating a new object with input from user
  const newUser = {
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    age: age,
  };

  try {
    //sending a axios request with api url and new object
    const response = await axios.post(`${apiUrl}/users`, newUser);
    //log and alert user
    console.log("New User", response.data);
    alert(`New User, ${username}, created.`);

    //set all fields back to empty strings
    setUsername("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setAge("");
  } catch (error) {
    //log any errors
    console.error("New User Error", error.message, error.stack);
  }
};

//export function to use else where
export default submitNewUser;
