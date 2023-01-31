import React ,{useState} from "react";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { deleteSnippet } from "../../actions/users";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export default function DeleteDialogBox({user}) {
    //const { id,username,email,mobile } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [id, setUserId] = useState(user.id);
  

 
 
  
  //console.log(userId)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch(deleteSnippet(id,navigate));
    setOpen(false);
  }

  return (
    <div>
      <div>
        <button className="btn" onClick={handleClickOpen}>
          Delete
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
        <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want delete your details?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
