import axios from "axios"; //importing axios to make api calls

const apiUrl = "http://localhost:3004"; //creating a veriable to handle the api URL

//defining async function with passed in variable
const getUserProfile = async (userId) => {
  try {
    //creating a variable to handle axios get request
    const response = await axios.get(`${apiUrl}/users/${userId}`);
    //return data to use in app
    return response.data;
  } catch (error) {
    //log if error and return null
    console.error("Error fetching user profile", error);
    return null;
  }
};

//export function to use else where in app
export default getUserProfile;
