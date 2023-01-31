import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router";
import "./details.css";
import DialogBox from "../Modal/Modal";
import DeleteDialogBox from "../delete/Delete";
export default function Details(props) {
  const location = useLocation();
  const data = location.state?.data;
  //const path = location.pathname.split("/")[2];
  // const [detail, setDetail] = useState();
  // const [display, setDisplay] = useState(false);
  // useEffect(() => {
  //   const fetchUserDetail = async () => {
  //     const response = await axios.get("http://localhost:8090/user/" + path);
  //     setDetail(response.data);
  //     setDisplay(true);
  //     //console.log(response.data);
  //   };
  //   fetchUserDetail();
  // }, [path]);
  //console.log(path);
  //console.log("hey");
  console.log(data);
  return (
    <div>
      <div className="row1">
        <div className="column1 c1">
          <h2>User Details</h2>
          <div className="details">
            <TextField
              className="area"
              id="standard-basic"
              label="Username"
              variant="standard"
              value={data.username}
            />
            <TextField
              className="area"
              id="standard-basic"
              label="Email"
              variant="standard"
              value={data.email}
            />
            <TextField
              className="area"
              id="standard-basic"
              label="Mobile No"
              variant="standard"
              value={data.mobile}
            />
          </div>
        </div>
        <div className="column1 c2">
          <h2>Fixed</h2>
          <div className="fixed">
            <p>Created At: {new Date(data.timestamp).toDateString()}</p>
                  <div className="button">
                    {/* <Link to={`/modify/${id}`}>
                                             <button className='btn'>
                                                 Modify
                                             </button>
                                         </Link> */}
                    <DialogBox user={data} />
                    <div className="delete">
                      <DeleteDialogBox user={data} />
                    </div>
                    
                  </div>
                  
          </div>
        </div>
      </div>
    </div>
  );
}
