import { useContext, useState } from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Settings() {

    const {user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const [file, setFile] = useState(null);
    const [newUsername, setNewUsername] = useState(user.username);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState(user.password);
    const [updateSuccess, setUpdateSuccess] = useState(false);
  
    // Updating user handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
          userId: user._id,
          username: newUsername,
          email: newEmail,
          password: newPassword
        };
        
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          updatedUser.profilePic = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.put("/users/" + user._id, updatedUser);
          setUpdateSuccess(true);
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
          dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingstitle">
                    <span className="settingsTitleUpdate">Update your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                        src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                        alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user-pen"></i>{" "}
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} name="name" onChange={(e) => setNewUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} name="email" onChange={(e) => setNewEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="New Password" name="password" onChange={(e) => setNewPassword(e.target.value)}/>
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                    {updateSuccess && (
                        <span className='successMsg'>
                            Profile has been updated.
                        </span>
                    )}
                </form>
            </div>
            <Sidebar />
        </div>
    ) 
}
