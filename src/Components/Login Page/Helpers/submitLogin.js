import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

//defining a async function with passed in variables
const submitLogin = async (
  event,
  username,
  password,
  setUsername,
  setPassword,
  navigate
) => {
  event.preventDefault();

  //if no username and password alret user
  if (!username || !password) {
    alert("Enter Username and Password");
    return;
  }

  //creating new object json to send to api
  const user = {
    username: username,
    password: password,
  };

  try {
    //making an api call with, with new object
    const response = await axios.post(`${apiUrl}/login`, user);

    //assigning the response to a variable
    const token = response.data.token;
    const userId = response.data.userId;
    //storing token to use later
    localStorage.setItem("token", token);

    //alert user welcome
    alert(`Welcome ${username}`);
    //clear input fields
    setUsername("");
    setPassword("");

    //open home page with user ID in URL
    navigate(`/home?userId=${userId}`);
  } catch (error) {
    //log if any errors
    console.error("Login Error", error.message, error.stack);

    //alert user if any errors, use status
    if (error.response && error.response.status === 401) {
      alert("Invalid username or password. Please try again.");
    } else if (error.response && error.response.status === 500) {
      alert("Server error. Please try again later.");
    } else {
      alert("An unexpected error occurred. Please try again.");
    }

    //clear input fields
    setUsername("");
    setPassword("");
  }
};

//export to use in app
export default submitLogin;
