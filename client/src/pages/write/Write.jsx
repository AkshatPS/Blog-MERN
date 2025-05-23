import React from 'react';
import "./write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + "-" + user.username + "-" + file.name ;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/upload`, data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts`, newPost);
      window.location.replace("/posts/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor='fileInput'>
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input 
            id="fileInput" 
            type="file" 
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input 
            className="writeInput" 
            placeholder='Blog Title' 
            type='text' 
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea className="writeInput writeText" placeholder='Tell your story' type='text' autoFocus={true} onChange={e=>setDesc(e.target.value)} />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>

      </form>
    </div>  
  )
}
