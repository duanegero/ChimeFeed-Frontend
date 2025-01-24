import axios from "axios"; //importing axios to make api calls

const apiUrl = "http://localhost:3004"; //creating a veriable to handle the api URL

//defining async function with passed in variable
const getFriendData = async (userId) => {
  try {
    //send axios request to api, using variables
    const response = await axios.get(`${apiUrl}/friendships/${userId}`);
    //return response data to use in app
    return response.data;
  } catch (error) {
    //log if error caught
    console.error("Error fetching friend data", error);
    throw error;
  }
};

//export app to be used else where in app
export default getFriendData;
