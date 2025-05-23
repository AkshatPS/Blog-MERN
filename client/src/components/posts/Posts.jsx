import React from 'react';
import "./posts.css";
import Post from '../post/Post';

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {Array.isArray(posts) && posts.map((p) => (
        <Post key={p._id || p.id} post={p} />
      ))}
    </div>  
  );
}
