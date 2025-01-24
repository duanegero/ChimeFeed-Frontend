import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

const deletePost = async (postId, refreshPosts) => {
  //check to make sure postId is passed and valid
  if (!postId || isNaN(postId)) {
    console.error("Invalid postId:", postId);
    alert("Post ID is invalid");
    return;
  }
  //creating a variable to handle user confrimming
  const confirmDeletePost = window.confirm(
    `Are you sure you want to delete post?`
  );

  //if user confirms
  if (confirmDeletePost) {
    try {
      //send axios request with variables
      const response = await axios.delete(`${apiUrl}/posts/${postId}`);

      //log and alert user of delete
      console.log("Post Deleted", response.data);
      alert("Post Deleted");

      //refresh the page
      refreshPosts();
    } catch (error) {
      //log if error, with message and alert user
      console.error("Delete Error", error.message, error.stack);
      alert("Post not Deleted");
    }
  } else {
    //if user cancels delete log and alert
    console.log("Delete Post was canceled");
    alert("Delete Post was canceled");
  }
};

//export function to use else where in app
export default deletePost;
