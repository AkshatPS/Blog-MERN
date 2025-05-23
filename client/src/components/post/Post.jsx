import React from 'react';
import "./post.css"
import { Link } from "react-router-dom";

export default function Post({post}) {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {post.photo ?
                <img className="postImg" src={PF + post.photo} alt="" /> :
                <img className="postImg" src="https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Default Photo" />
            }
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className='postCat'>{c.name}</span>
                    ))}
                </div>
                <Link to={`/posts/${post._id}`} className='link'>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    )
}
