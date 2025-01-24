import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

const deleteFriendship = async (event, user_id1, user_id2) => {
  event.preventDefault();

  //creating a variable to handle the user confirm
  const confirmDeleteFriendship = window.confirm(
    `Are you sure you want to delete friend?`
  );

  //if confirmed by user
  if (confirmDeleteFriendship) {
    try {
      //send axios request to api, create variable to handle response
      const response = await axios.delete(`${apiUrl}/friendships`, {
        data: { user_id1, user_id2 },
      });

      //log response if success
      console.log("Deleted Friendship", response.data);

      //alert user if success
      alert("Friendship Deleted");
    } catch (error) {
      //log if error, with message and alert user
      console.error("Delete Error", error.message, error.stack);
      alert("Friendship not Deleted");
    }
  } else {
    //if not confirmed by user alert and log cancel
    console.log("Delete Friendship was canceled");
    alert("Delete Friendship was canceled");
  }
};

//export to use else where in app
export default deleteFriendship;
