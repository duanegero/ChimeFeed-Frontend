import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

const submitPostLike = async (event, userId, postId) => {
  event.preventDefault();

  if (!userId || !postId) {
    alert("Oh No, you must choose a post to like.");
    return;
  }

  const newLike = {
    userId: userId,
    postId: postId,
  };

  try {
    const response = await axios.post(`${apiUrl}/post-likes`, newLike);

    console.log("New Like", response.data);
    alert("Post Liked Successfully");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.message);
    } else {
      console.error("Post Error", error.message, error.stack);
    }
  }
};

export default submitPostLike;
