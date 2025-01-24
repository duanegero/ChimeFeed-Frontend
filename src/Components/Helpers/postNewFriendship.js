import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3004"; //setting variable to handle calls to api

const postNewFriendship = async (event, username, userId, id) => {
  event.preventDefault();

  //creating a variable to handle the user confirm
  const confirmFriendship = window.confirm(
    `Are you sure you want to become frineds with ${username}?`
  );

  //creating an object with user details, to send to api
  const newFriendship = {
    userId: userId,
    selectedUserId: id,
  };

  //if confirmed by user
  if (confirmFriendship) {
    try {
      //send axios request to api, create variable to handle response
      const response = await axios.post(`${apiUrl}/friendships`, newFriendship);

      //log response if success
      console.log("New Friendship", response.data);

      //alert user if success
      alert(`New Friendship with ${username}`);
    } catch (error) {
      //log if error, with message and alert user
      console.error("Friendship Error", error.message, error.stack);
      alert("Friendship Error");
    }
  } else {
    //if not confirmed by user alert and log cancel
    console.log(`Friendship request with ${username} was canceled.`);
    alert(`You canceled the friendship request with ${username}.`);
  }
};

//export to use else where in app
export default postNewFriendship;
