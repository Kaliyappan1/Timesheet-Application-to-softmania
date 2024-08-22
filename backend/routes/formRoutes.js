const express = require('express');
const Form = require('../models/form.js');
const router = express.Router();

// Create a new form entry
router.post('/submit', async (req, res) => {
  const { name, date, attendance, workHours, topics, description } = req.body;

  try {
    const newForm = new Form({
      name,
      date,
      attendance,
      workHours,
      topics,
      description,
    });

    await newForm.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
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
