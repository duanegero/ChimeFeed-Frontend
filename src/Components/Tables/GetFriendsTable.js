import React, { useState, useEffect } from "react"; //importing react and usestate
import { useLocation } from "react-router-dom"; //importing uselocation

//import helper function
import getFriendData from "./Helpers/getFriendData";
import deleteFriendship from "../Helpers/deleteFriendship";
import deleteFriendButtonClassName from "../Buttons/buttonStyles";

//import dayjs and relativetime to adjust time in app
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function GetFriendsTable() {
  //creating a variable to handle location
  const location = useLocation();

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Get the userId parameter

  //creating use state vaiables to set data
  const [friendsData, setFriendsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    //if there's a user ID
    if (userId) {
      //run defined async function
      const getData = async () => {
        try {
          //create a variable to handle helper function
          const data = await getFriendData(userId);
          //set variable with returned data
          setFriendsData(data);
        } catch (error) {
          // Handle errors by setting an error message
          console.error("Error fetching friend data:", error); // Log the error
          setError("Failed to load feed data.");
        }
      };
      getData(); //call get data function
    }
  }, [userId]); //pass in the userId to function

  //defining a async function
  const refreshFriends = async () => {
    //if there's a user ID
    if (userId) {
      try {
        //create a variable to handle helper function
        const data = await getFriendData(userId);
        //set variable with returned data
        setFriendsData(data);
      } catch (error) {
        // Handle errors by setting an error message
        console.error("Error refreshing Friends:", error);
        setError("Failed to refresh Friends");
      }
    }
  };

  return (
    <>
      <div className="overflow-auto max-h-[500px] border border-red-800 rounded-lg m-20">
        {error && <p className="text-red-600">{error}</p>}
        <table className="min-w-full text-center table-fixed border-collapse">
          <thead className="bg-amber-500 sticky top-0 text-white font-extralight z-10">
            <tr>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl w-1/3">
                Friend
              </th>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl w-1/3">
                Since
              </th>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl w-1/3">
                Unfriend
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {friendsData.length > 0 ? (
              friendsData.map((friend, index) => (
                <tr className="even:bg-blue-100" key={index}>
                  <td className="px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bangers text-red-800 tracking-widest">
                    {friend.friend_username}
                  </td>
                  <td className="px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bangers text-red-800 tracking-widest">
                    {dayjs(friend.created_at).fromNow()}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={async (event) => {
                        try {
                          await deleteFriendship(
                            event,
                            userId,
                            friend.friend_id
                          );
                          refreshFriends();
                        } catch (error) {
                          console.error("Error Deleting friendship");
                          setError("Failed to delete friendship");
                        }
                      }}
                      className={deleteFriendButtonClassName()}
                    >
                      Unfriend
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className=" font-bangers text-gray-700 tracking-wider text-2xl"
                >
                  No Friends Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
