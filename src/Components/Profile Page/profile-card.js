import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; //importing uselocation
import getUserProfile from "./Helpers/getUserProfile";

//import dayjs and relativetime to adjust time in app
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function ProfileCard() {
  //create a vaiable to handle location
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Get the userId parameter

  useEffect(() => {
    //check if userId exists
    if (userId) {
      //call the helper function with passed in variable
      getUserProfile(userId).then((data) => {
        //set data with returned data
        setUserData(data);
      });
    }
  }, [userId]); //only re-run the effect when userId changes

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-2/3 h-2/3 flex flex-col justify-center items-center m-2 p-4 border border-gray-300 shadow-2xl rounded-3xl ">
        {userData ? (
          <>
            <h2 className="text-2xl tracking-widest uppercase font-poppins text-gray-700 mb-10">
              {userData.username}
            </h2>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
            <p>Age: {userData.age}</p>
            <p>Created: {dayjs(userData.created_at).fromNow()}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
