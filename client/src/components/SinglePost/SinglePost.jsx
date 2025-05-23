import React from 'react';
import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Context } from '../../context/Context';

export default function SinglePost() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];  // get post id from url path
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const { user } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    // date formatting
    const OPTIONS = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };

    // Fetch post data from api based on post id
    useEffect(()=>{
        const getPost = async () => {
            const result = await axios.get("/posts/" + path);
            setPost(result.data);
            setTitle(result.data.title);
            setDesc(result.data.desc);
        };
        getPost();
    }, [path]);

    // Deleting post handler
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username}
            });
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    };

    // Updating post handler
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc
            });
            setUpdateMode(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo ? <img src={PF + post.photo} alt="" className="singlePostImg"/> :
                    <img className="singlePostImg"
                    src="https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Default"
                    />
                }
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
                )}
                
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b> {post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate"> {new Date(post.createdAt).toLocaleDateString('en-US', OPTIONS)}</span>
                </div>

                {updateMode ? (
                    <textarea
                        className="singlePostDescInput"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ):(
                    <p className="singlePostDesc">
                        {desc}
                    </p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
                
            </div>
        </div>
    )
}
