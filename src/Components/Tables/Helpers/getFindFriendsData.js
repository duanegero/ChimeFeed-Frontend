import axios from "axios"; //importing axios to make api calls

const apiUrl = "http://localhost:3004"; //creating a veriable to handle the api URL

//defining a async function with passed in variable
const getFindFriendsData = async (userId) => {
  try {
    //send axios request to api
    const response = await axios.get(
      `${apiUrl}/friendships/${userId}/find-friends`
    );
    //return data to use in app
    return response.data;
  } catch (error) {
    //catch and log any errors
    console.error("Error fetching find friends data", error);
  }
};

//export function to use else where in app
export default getFindFriendsData;
