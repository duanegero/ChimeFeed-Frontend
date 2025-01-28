import { useState } from "react";

import GetFeedTable from "../Tables/GetFeedTable";
import GetPostTable from "../Tables/GetPostsTable";
import openPostChimePage from "../PostChime Page/Helpers/openPostChimeWindow";
import GetFriendsTable from "../Tables/GetFriendsTable";
import GetFindFriendsTable from "../Tables/GetFindFriendsTable";
import ProfileCard from "../Profile Page/profile-card";

export default function HomeNav() {
  const [activeTab, setActiveTab] = useState("");
  const userId = new URLSearchParams(window.location.search).get("userId");
  return (
    <div>
      <nav className="bg-red-800 w-full py-2 rounded-lg">
        <ul className="flex justify-around items-center font-poppins text-amber-500 tracking-widest">
          <li
            onClick={() => setActiveTab("profile")}
            className="hover:cursor-pointer hover:text-white hover:font-bold"
          >
            View Profile
          </li>
          <li
            onClick={() => setActiveTab("feed")}
            className="hover:cursor-pointer hover:text-white hover:font-bold"
          >
            View Feed
          </li>
          <li
            onClick={() => setActiveTab("history")}
            className="hover:cursor-pointer hover:text-white hover:font-bold"
          >
            View My Posts
          </li>
          <li
            onClick={() => openPostChimePage(userId)}
            className="hover:cursor-pointer hover:text-white hover:font-bold"
          >
            Share A Chime
          </li>
          <li
            onClick={() => setActiveTab("friends")}
            className="hover:cursor-pointer hover:text-white hover:font-bold"
          >
            View Friends
          </li>
          <li
            onClick={() => setActiveTab("find-friends")}
            className="hover:cursor-pointer hover:text-white hover:font-bold"
          >
            Find New Friends
          </li>
        </ul>
      </nav>
      <div>{activeTab === "profile" && <ProfileCard />}</div>
      <div>{activeTab === "feed" && <GetFeedTable />}</div>
      <div>{activeTab === "history" && <GetPostTable />}</div>
      <div>{activeTab === "friends" && <GetFriendsTable />}</div>
      <div>{activeTab === "find-friends" && <GetFindFriendsTable />}</div>
    </div>
  );
}
