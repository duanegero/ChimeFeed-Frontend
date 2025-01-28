import React, { useState, useEffect } from "react"; //importing react, usestate and useeffect
import { useLocation } from "react-router-dom"; //importing uselocation

//import helper function
import getFeedData from "../Tables/Helpers/getFeedData";
import submitPostLike from "./Helpers/submitPostLike";

import { GrLike } from "react-icons/gr";

//import dayjs and relative time to adjust time in app
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function GetFeedTable() {
  //create a vaiable to handle location
  const location = useLocation();

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Get the userId parameter

  //create use state variables to handle data and errors
  const [feedData, setFeedData] = useState([]);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts or when userId changes
  useEffect(() => {
    if (userId) {
      const getData = async () => {
        try {
          // Fetch feed data using the helper function
          const data = await getFeedData(userId);
          setFeedData(data); // Update feedData state with the fetched data
        } catch (error) {
          // Handle errors by setting an error message
          console.error("Error fetching feed data:", error); // Log the error
          setError("Failed to load feed data."); // Display a user-friendly error message
        }
      };
      getData(); // Call the async function to fetch data
    }
  }, [userId]); // Dependency array ensures the effect runs when userId changes

  return (
    <>
      <div className="overflow-auto max-h-[500px] border border-gray-300 rounded-lg m-20">
        {error && <p className="text-red-600">{error}</p>}{" "}
        <table className="min-w-full text-center">
          <thead className="bg-amber-500 sticky top-0 text-white font-extralight ">
            <tr>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl">
                Username
              </th>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl">
                Content
              </th>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {feedData.length > 0 ? (
              feedData.map((item, index) => (
                <tr className="even:bg-gray-50" key={index}>
                  <td className="px-4 py-2">{item.username}</td>
                  <td className="px-16 py-2 flex flex-col items-center justify-center">
                    {item.content}
                    <GrLike
                      className="text-green-500 hover:text-green-700 cursor-pointer"
                      size={24}
                      onClick={(event) => {
                        submitPostLike(event, userId, item.id);
                      }}
                    />
                  </td>
                  <td className="px-4 py-2">
                    {dayjs(item.created_at).fromNow()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No feed data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
