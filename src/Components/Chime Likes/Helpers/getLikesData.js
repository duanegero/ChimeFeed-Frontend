import axios from "axios"; //importing axios to make api calls

const apiUrl = "http://localhost:3004"; //creating a veriable to handle the api URL

//defining asynce function with passed in variable
const getLikesData = async (postId) => {
  try {
    //send axios api get request with api url and post ID
    const response = await axios.get(`${apiUrl}/post-likes/${postId}`);
    //return data to use in app
    return response.data;
  } catch (error) {
    //if any errors log and alert user
    console.error("Error fetching like data.", error);
    throw error;
  }
};

//export function to use else where
export default getLikesData;
