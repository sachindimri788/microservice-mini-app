import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
function PostList() {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {Object.values(posts).map((post) => (
        <div
          key={post.id}
          style={{
            border: "2px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>
            {post.id} <span>{post.title} </span>
          </h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
