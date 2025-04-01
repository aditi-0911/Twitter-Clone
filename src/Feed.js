
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.text}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Post
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Feed;
