import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import PostChime from "./Pages/PostChime";
import NewUser from "./Pages/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="post-chime" element={<PostChime />} />
        <Route path="new-user" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
