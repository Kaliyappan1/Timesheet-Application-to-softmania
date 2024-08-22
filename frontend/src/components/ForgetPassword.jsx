// ForgotPasswordDialog.jsx
import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

function ForgotPasswordDialog({ open, handleClose }) {

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Forgot Password</DialogTitle>
      <DialogContent >
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Enter your email"
          type="email"
          fullWidth
          variant="outlined"

        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Enter your password"
          type="password"
          fullWidth
          variant="outlined"

        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Enter your password"
          type="password"
          fullWidth
          variant="outlined"

        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ForgotPasswordDialog;
