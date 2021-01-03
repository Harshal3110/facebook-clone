import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  // Run this piece of code only once when the feed loads
  // db.collection is accessing realtime data from the firebase
  // onsnapshot means when anything changes inside the collection it gives realtime update
  // Id is unique id and data is store data in firebase
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []); //By keeping this square bracket empty it only runs once when feed component loads

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          image={post.data.image}
          timestamp={post.data.timestamp}
          username={post.data.username}
        />
      ))}
    </div>
  );
}

export default Feed;
