import React, { useContext } from 'react';
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';

export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  // const userLogin = false;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
        <div className="topLeft">
            <a href='https://www.facebook.com/' target="_blank"><i className="topIcon fab fa-facebook-square"></i></a>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">
                    HOME
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/contact">
                    CONTACT
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/write">
                   WRITE
                  </Link>
                </li>
                {user && <li className="topListItem" onClick={handleLogout}>
                  LOGOUT
                </li>}
            </ul>
        </div>
        <div className="topRight">
          {user ? (
              <Link className="link" to="/settings">
                <img
                  className="topImg"
                  src={PF+user.profilePic}
                  alt=""
                />
              </Link>) : (
                <ul className="topList">
                  <li className="topListItem">
                    <Link className="link" to="/login">
                      LOGIN
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link className="link" to="/register">
                      REGISTER
                    </Link>
                  </li>
                </ul>
              )
          }
          <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}