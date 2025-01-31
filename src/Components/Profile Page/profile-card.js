import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; //importing uselocation
import getUserProfile from "./Helpers/getUserProfile";
import { loginButtonClassName } from "../Buttons/buttonStyles";

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
    <div className="flex flex-col items-center justify-center mt-16 ">
      <div className="w-2/3 h-2/3 flex flex-col justify-center items-center m-2 p-4 border border-gray-300 shadow-2xl rounded-3xl bg-blue-100">
        {userData ? (
          <div className="flex flex-row ">
            <div>
              <h2 className="text-4xl tracking-widest uppercase font-bangers text-red-800 mb-10 mr-16 mt-10">
                {userData.username}
              </h2>
            </div>
            <div className="flex flex-col pt-5 pb-5">
              <p className="font-poppins tracking-wider text-lg">
                First Name: {userData.first_name}
              </p>
              <p className="font-poppins tracking-wider text-lg">
                Last Name: {userData.last_name}
              </p>
              <p className="font-poppins tracking-wider text-lg">
                Age: {userData.age}
              </p>
              <p className="font-poppins tracking-wider text-lg">
                Created: {dayjs(userData.created_at).fromNow()}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button className={loginButtonClassName()}>Update</button>
    </div>
  );
}
