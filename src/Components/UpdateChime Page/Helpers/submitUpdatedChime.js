import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

//defining a async function with passed in variables
const submitUpdatedChime = async (event, postId, content, setContent) => {
  event.preventDefault();

  //alret if all data requiered isn't there
  if (!postId || !content) {
    alert("Oh No, you must enter text to update.");
    return;
  }

  try {
    //create a variable to handle axios request to api
    const response = await axios.put(`${apiUrl}/posts/${postId}`, { content });

    //log and alret user of success
    console.log("Updated Chime", response.data);
    alert("Chime Updated Successfully.");
    setContent("");
  } catch (error) {
    //log if any errors
    console.error("Update Error", error.message, error.stack);
  }
};

//export function to use in app
export default submitUpdatedChime;
