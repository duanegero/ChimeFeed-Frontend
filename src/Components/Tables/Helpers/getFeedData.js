import axios from "axios"; //importing axios to make api calls

const apiUrl = "http://localhost:3004"; //creating a veriable to handle the api URL

const getFeedData = async (userId) => {
  try {
    //senda api get, create variable
    const response = await axios.get(`${apiUrl}/posts/${userId}/friends-posts`);
    //return data to use in app
    return response.data;
  } catch (error) {
    //log if error caught
    console.error("Error fetching feed data", error);
    throw error;
  }
};

//export function to use in app
export default getFeedData;
