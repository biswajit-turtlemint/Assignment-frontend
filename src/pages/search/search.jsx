import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import "./search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [user, setUser] = useState();
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [mobile, setMobile] = useState(0);

  //
  const handleSearch = async (e) => {
    const response = await axios.get(`http://localhost:8090/${query}`);
    setUser(response.data);
    setUserId(response.data.id);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setMobile(response.data.mobile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
      ...user,
      username,
      email,
      mobile,
    };
    console.log(updateUser);
    try {
      const res = await axios.put(
        `http://localhost:8090/update/${userId}`,
        updateUser
      );
      console.log("done");
      navigate("/");
    } catch (err) {}
  };
 const handleLink = async (e) => {
    window.location.href="https://paytm.com";
 }
  console.log(user);
  console.log(username);
  console.log(email);
  console.log(mobile);
  console.log(userId);
  return (
    <Box>
      {!user && (
        <div>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button style={{ backgroundcolor: "teal" }} onClick={handleSearch}>
            Search
          </Button>
        </div>
      )}

      {/* onChange={(e) => setQuery(e.target.value)} */}
      {user && (
        <div>
          <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <label htmlFor="name">Username: </label>
              <input
                type="text"
                id="name"
                placeholder="Username"
                className="writeInput"
                autoFocus={true}
                defaultValue={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}
            </div>

            <div className="writeFormGroup">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="writeInput"
                defaultValue={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}
            </div>
            <div className="writeFormGroup">
              <label htmlFor="mobile">Phone No: </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile no"
                className="writeInput"
                defaultValue={user.mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}
            </div>
            <button className="writeSubmit" type="submit">
              Save
            </button>
            <button onClick={handleLink}>Submit</button>
          </form>
          <div className="card">
            <span>Created At: {new Date(user.timestamp).toDateString()}</span>
          </div>
        </div>
      )}
    </Box>
  );
}
