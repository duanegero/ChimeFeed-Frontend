import React, { useState, useEffect } from "react"; //importing react, usestate and useeffect
import { useLocation } from "react-router-dom"; //importing uselocation

import getLikesData from "../Chime Likes/Helpers/getLikesData";

//import dayjs and relative time to adjust time in app
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function ChimeLikeTable() {
  //create a vaiable to handle location
  const location = useLocation();

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const postId = queryParams.get("postId"); // Get the postId parameter

  //create use state variables to handle data and errors
  const [likesData, setLikesData] = useState([]);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts or when postId changes
  useEffect(() => {
    if (postId) {
      const getData = async () => {
        try {
          //fetch like data using a helper function
          const data = await getLikesData(postId);
          //updating the like data with returned data
          setLikesData(data);
        } catch (error) {
          //log and set if any errors
          console.error("Error fetching like data");
          setError("Failed to fetch like data");
        }
      };
      getData(); // Call the async function to fetch data
    }
  }, [postId]); // Dependency array ensures the effect runs when postId changes

  return (
    <>
      <div className="overflow-auto max-h-[230px] border border-gray-300 rounded-lg m-20 ">
        {error && <p className="text-red-600">{error}</p>}
        <table className="min-w-full table-auto text-center">
          <thead className="bg-red-800 sticky top-0 text-white font-extralight ">
            <tr>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl text-amber-500">
                Username
              </th>
              <th className="px-4 py-2 tracking-widest font-bangers text-2xl text-amber-500">
                Liked
              </th>
            </tr>
          </thead>
          <tbody>
            {likesData.length > 0 ? (
              likesData.map((item, index) => (
                <tr
                  className="odd:bg-white even:bg-gray-100 hover:bg-blue-100 transition duration-200"
                  key={index}
                >
                  <td className="px-4 py-2">{item.username}</td>
                  <td className="px-4 py-2">
                    {dayjs(item.created_at).fromNow()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Likes</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
