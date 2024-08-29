const express = require('express');
const Form = require('../models/form.js');
const router = express.Router();

// Create a new form entry
router.post('/submit', async (req, res) => {
  const { name, date, attendance, workHours, topics, reason, description } = req.body;

  try {
    // Create a new form entry
    const newForm = new Form({
      name,
      date,
      attendance,
      workHours: attendance === 'Absent' ? null : workHours,
      topics: attendance === 'Absent' ? null : topics,
      reason: (attendance === 'Late' || attendance === 'Absent') ? reason : null,
      description,
    });

    await newForm.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Retrieve all form entries
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
