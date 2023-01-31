import React ,{useState} from "react";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { editUser } from "../../actions/users";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export default function DialogBox({user}) {
    //const { id,username,email,mobile } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [id, setUserId] = useState(user.id);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const [mobile, setMobile] = useState(user.mobile);
 console.log(username);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
      ...user,
      username,
      email,
      mobile,
    };
    console.log(username);
    try {
      dispatch(editUser(id,navigate,updateUser));
      setOpen(false);
    } catch (err) {}
  };
  //console.log(userId)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <button className="btn" onClick={handleClickOpen}>
          Modify
        </button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">Modify Your Details</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form className="registerForm" onSubmit={handleSubmit}>
              <label htmlFor="name">Username: </label>
              <input
                type="text"
                id="name"
                placeholder="Username"
                defaultValue={username}
                className="registerInput"
                onChange={(e)=>setUsername(e.target.value)}
                autoFocus={true}
                //defaultValue={detail.username}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}

              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="registerInput"
                defaultValue={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}

              <label htmlFor="mobile">Phone No: </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile no"
                className="registerInput"
                defaultValue={mobile}
                onChange={(e)=>setMobile(e.target.value)}
              />
              {/* onChange={(e)=>setTitle(e.target.value)} */}

              
              <button className="registerButton" type="submit">Submit</button>
            </form>
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
