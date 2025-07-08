"use client";

import axios from "axios";
import { useState } from "react";

const SimplePost = () => {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

  let result = "";

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    result = {
      name: post,
      title: title,
      id:Math.floor(Math.random())*1000+1
    };

     try{
        await axios.post("https://jsonplaceholder.typicode.com/posts",result)
        alert("submitted")

     }catch(err){
        console.log("error");
        alert("some error occur")
     }

  };

  return (
    <>
      <p>user form</p>
      <form onSubmit={onSubmitHandler}>
        <label>post</label>
        <input
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <label>title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default SimplePost;
