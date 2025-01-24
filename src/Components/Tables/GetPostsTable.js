import React, { useState, useEffect } from "react"; //importing react and usestate
import { useLocation } from "react-router-dom"; //importing uselocation

//importing helpers and button classes to use in app
import getPostsData from "./Helpers/getPostsData";
import TrashButton from "../Buttons/trashButton";
import deletePost from "../Helpers/deletePosts";

//import dayjs and relativetime to adjust time in app
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function GetPostTable() {
  //creating a variable to handle location
  const location = useLocation();

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Get the userId parameter

  // Create useState variables to handle data and errors
  const [postHistory, setPostHistory] = useState([]);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts or when userId changes
  useEffect(() => {
    if (userId) {
      const getData = async () => {
        try {
          // Fetch feed data using the helper function
          const data = await getPostsData(userId);
          setPostHistory(data); // Updating the post history with returned data
        } catch (error) {
          console.error("Error fetching feed data:", error); // Log the error
          setError("Failed to load Post History");
        }
      };
      getData(); // Call the async function to fetch data
    }
  }, [userId]); // Dependency array ensures the effect runs when userId changes

  // Function to refresh posts
  const refreshPosts = async () => {
    if (userId) {
      try {
        const data = await getPostsData(userId); // Get the latest data
        setPostHistory(data); // Update state with the new data
      } catch (error) {
        console.error("Error refreshing posts:", error); // Log the error
        setError("Failed to refresh Post History");
      }
    }
  };

  return (
    <>
      <div className="overflow-auto max-h-[500px] border border-gray-300 rounded-lg m-20">
        {error && <p className="text-red-600">{error}</p>}{" "}
        <table className="min-w-full text-center">
          <thead className="bg-amber-500 sticky top-0 text-white font-extralight ">
            <tr>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl">
                Content
              </th>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl">
                Date
              </th>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {postHistory.length > 0 ? (
              postHistory.map((item, index) => (
                <tr className="even:bg-gray-50" key={index}>
                  <td className="px-4 py-2">{item.content}</td>
                  <td className="px-4 py-2">
                    {dayjs(item.created_at).fromNow()}
                  </td>
                  <td>
                    <TrashButton
                      postId={item.id}
                      onDelete={deletePost}
                      refreshPosts={refreshPosts} // Pass the refreshPosts function
                    ></TrashButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No post history available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
