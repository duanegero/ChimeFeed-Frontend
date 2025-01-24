import React, { useState, useEffect } from "react"; //import react, usestate and use effect
import { useLocation } from "react-router-dom"; //importing use location

//importing helper functions
import getFindFriendsData from "./Helpers/getFindFriendsData";
import postNewFriendship from "../Helpers/postNewFriendship";
import deleteFriendButtonClassName from "../Buttons/buttonStyles";

export default function GetFindFriendsTable() {
  //creating a variable to handle location
  const location = useLocation();

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Get the userId parameter

  //setting use state vairables to use in app
  const [findFriendsData, setFindFriendsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    //if there's a userID
    if (userId) {
      //defining a async function
      const getData = async () => {
        try {
          //set variable, to handle helper function
          const data = await getFindFriendsData(userId);
          //set variable with returned data
          setFindFriendsData(data);
        } catch (error) {
          //catch, log and set if any errors
          console.error("Error fetching find friends data:", error);
          setError("Failed to laod feed data");
        }
      };
      //call the function
      getData();
    }
    //pass in the user ID
  }, [userId]);

  //defining a async function
  const refreshFindFriends = async () => {
    if (userId) {
      try {
        //set variable, to handle helper function
        const data = await getFindFriendsData(userId);
        //set variable with returned data
        setFindFriendsData(data);
      } catch (error) {
        //catch, log and set if any errors
        console.error("Error refreshing Find Friends", error);
        setError("Failed to refresh Find Friends");
      }
    }
  };

  return (
    <>
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {findFriendsData.length === 0 ? (
          <p className="text-gray-700 flex justify-center items-center mt-10 font-bangers text-3xl tracking-wider">
            No Users Found.
          </p>
        ) : (
          <ul className="flex flex-col justify-center items-center mt-10">
            {findFriendsData.map((friend, index) => (
              <li
                className="bg-gray-200 rounded-lg shadow-md mb-4 border border-red-800 p-10 w-1/2 hover:animate-flip flex flex-col justify-center items-center gap-4"
                key={index}
              >
                <span className="font-poppins tracking-wider ">
                  {friend.username}
                </span>

                <button
                  onClick={async (event) => {
                    try {
                      await postNewFriendship(
                        event,
                        friend.username,
                        userId,
                        friend.id
                      );
                      refreshFindFriends();
                    } catch (error) {
                      console.log("Error Adding Friend");
                      setError("Failed to add friend");
                    }
                  }}
                  className={deleteFriendButtonClassName()}
                >
                  Add Friend
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
