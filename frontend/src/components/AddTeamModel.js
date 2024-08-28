import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddTeamModal = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const teamData = { name, role, contact };

    try {
      const res = await fetch("/api/teams/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamData),
      });

      if (res.ok) {
        alert("Team added successfully");
        onClose(); // Close the modal
        setName(""); // Clear the form
        setRole("");
        setContact("");
      } else {
        alert("Failed to add team");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Team</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contact Email"
            type="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddTeamModal;
