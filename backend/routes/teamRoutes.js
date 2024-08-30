const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel.js'); // Assuming you have a Team model defined with Mongoose

// Get all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new team member
router.post('/add', async (req, res) => {
  const team = new Team({
    name: req.body.name,
    role: req.body.role,
    contact: req.body.contact
  });

  try {
    const newTeam = await team.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Edit a team member
router.put('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ message: 'Team member not found' });
    }

    team.name = req.body.name;
    team.role = req.body.role;
    team.contact = req.body.contact;

    const updatedTeam = await team.save();
    res.json(updatedTeam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a team member

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the timesheet by ID and delete it
    const deletedTeam = await Team.findByIdAndDelete(id);

    if (!deletedTeam) {
      return res.status(404).json({ message: "Timesheet not found" });
    }

    res.status(200).json({ message: "Timesheet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
