import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

const submitPostLike = async (event, userId, postId) => {
  event.preventDefault();

  //if no ID's alret user
  if (!userId || !postId) {
    alert("Oh No, you must choose a post to like.");
    return;
  }

  //creating a new object with ID'd
  const newLike = {
    userId: userId,
    postId: postId,
  };

  try {
    //sending a axios request to api url with new object
    const response = await axios.post(`${apiUrl}/post-likes`, newLike);

    //log and alert user of successful like
    console.log("New Like", response.data);
    alert("Post Liked Successfully");
  } catch (error) {
    //if error 400 alert user that they've already like the post
    if (error.response && error.response.status === 400) {
      alert(error.response.data.message);
    } else {
      //log any other errors
      console.error("Post Error", error.message, error.stack);
    }
  }
};

//export function to use else where in app
export default submitPostLike;
