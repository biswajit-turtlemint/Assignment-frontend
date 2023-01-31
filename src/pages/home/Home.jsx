import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyUsers } from "../../actions/users";
import DialogBox from "../Modal/Modal";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyUsers());
  }, []);
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);

  return (
    <div>
      <p>Assignment</p>
      
      <button>
        <Link to="/adduser">Add User</Link>
      </button>
      {users && (
        <div>
          <Grid container alignItems="stretch" spacing={3}>
            <Typography style={{ marginLeft: "20px", marginTop: "50px" }}>
              All Users
            </Typography>
            {users.map((user) => (
              <Grid key={user.id} item xs={12} sm={12} md={12} lg={12}>
                <div className="content">
                  <Paper style={{ padding: "15px" }} className="details">
                    <div>
                      <Link
                        to="/userDetail"
                        state={{ data: user }}
                      >
                        <Typography className="name">
                          Name: {user.username}
                        </Typography>
                        <Typography className="name">
                          Email: {user.email}
                        </Typography>
                      </Link>
                    </div>
                  </Paper>
                  <div className="button">
                    {/* <Link to={`/modify/${id}`}>
                                             <button className='btn'>
                                                 Modify
                                             </button>
                                         </Link> */}
                    <DialogBox user={user} />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
