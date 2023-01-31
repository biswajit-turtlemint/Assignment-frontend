import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Button } from "@mui/material";
import "./modify.css";
export default function Modify() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [detail, setDetail] = useState();
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const fetchUserDetail = async () => {
      const response = await axios.get("http://localhost:8090/modify/" + path);
      setDetail(response.data);
      setDisplay(true);
      //console.log(response.data);
    };
    fetchUserDetail();
  }, [path]);
  console.log(path);
  console.log(detail);
  //console.log(username);
  return (
    <>
      {display && (
        <div className="register">
          <div className="column">
            <span className="registerTitle">Modify Your Details</span>
            <form className="registerForm">
              <label htmlFor="name">Username: </label>
              <input
                type="text"
                id="name"
                placeholder="Username"
                className="registerInput"
                autoFocus={true}
                defaultValue={detail.username}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}

              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="registerInput"
                defaultValue={detail.email}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}

              <label htmlFor="mobile">Phone No: </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile no"
                className="registerInput"
                defaultValue={detail.mobile}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}

              <button className="registerButton" type="submit">
                Save
              </button>
              <button className="registerButton">Submit</button>
            </form>
          </div>

          <div className="column column2">
            <span className="date">Created At: {new Date(detail.timestamp).toDateString()}</span>
            <button className="btn">
              Modify
            </button>
          </div>
        </div>
      )}
    </>
  );
}
