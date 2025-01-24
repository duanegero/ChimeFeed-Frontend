import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

//defining a async function with passed in variables
const submitNewChime = async (event, userId, content, setContent) => {
  event.preventDefault();

  //if no details alert user
  if (!userId || !content) {
    alert("Oh No, you must enter text to post.");
    return;
  }

  //creating an object to be passed to api, with user details
  const newChime = {
    userId: userId,
    content: content,
  };

  try {
    //send an axios request with new object
    const response = await axios.post(`${apiUrl}/posts`, newChime);

    //log and alert user of success
    console.log("New Chime", response.data);
    alert("Chime Posted Successfully.");
    //set the input field to empty string
    setContent("");
  } catch (error) {
    //log if any errors
    console.error("Post Error", error.message, error.stack);
  }
};

//export function to use else where in app
export default submitNewChime;
