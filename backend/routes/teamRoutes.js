const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel.js');

// Create a new team member
router.post('/add', async (req, res) => {
  const { name, role, contact } = req.body;

  try {
    const newTeam = new Team({ name, role, contact });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all team members
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
