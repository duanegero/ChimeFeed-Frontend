import axios from "axios"; //importing axios to make api calls

const apiUrl = "http://localhost:3004"; //create varible to handle api url

const getPostsData = async (userId) => {
  try {
    //send api get request, create variable
    const response = await axios.get(`${apiUrl}/posts/${userId}`);
    //return data to use in app
    return response.data;
  } catch (error) {
    console.error("Error fetching posts data.", error);
    throw error;
  }
};

//export function to use in app
export default getPostsData;
