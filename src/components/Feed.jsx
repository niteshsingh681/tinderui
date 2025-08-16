import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice.js";
import { BASE_URL } from "../utils/constant.js";
import UserCard from "./UserCard.jsx"

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const feedData = async () => {
    if (feed) return; // Avoid re-fetch if feed already exists
    try {
      const res = await axios.get(`${BASE_URL}/user/feed`,{withCredentials:true});
      //console.log(res.data);
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log("Error fetching feed", err);
    }
  };

  // ✅ useEffect should be outside, at component level
  useEffect(() => {
    feedData();
  }, []);

  return (
   feed && 
   <div className="flex  justify-center my-4 ">

     <UserCard user={feed[8]}/>
    </div>
  );
};

export default Feed;
