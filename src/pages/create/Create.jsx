import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  
  const [mobile, setMobile] = useState(0);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//         username,
//         email,
//         mobile,
//     };
//     fetch("http://localhost:8090/user", {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     })
//       .then((response) => console.log(response))
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//       navigate('/');
//   };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      mobile,
    };
    console.log(newUser);
    try {
      const res = await axios.post("http://localhost:8090/user", newUser);
      console.log("done");
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="write">
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Username"
            className="writeInput"
            autoFocus={true}
            onChange={(e)=>setUsername(e.target.value)}
          />
          {/* onChange={(e)=>setTitle(e.target.value)} */}
        </div>

        <div className="writeFormGroup">
          <input
            type="email"
            placeholder="Email"
            className="writeInput"
            onChange={(e)=>setEmail(e.target.value)}
            
          />
          {/* onChange={(e)=>setTitle(e.target.value)} */}
        </div>
        <div className="writeFormGroup">
          <input
            type="tel"
            placeholder="Enter your mobile no"
            className="writeInput"
            onChange={(e)=>setMobile(e.target.value)}
          />
          {/* onChange={(e)=>setTitle(e.target.value)} */}
        </div>
        <button className="writeSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}