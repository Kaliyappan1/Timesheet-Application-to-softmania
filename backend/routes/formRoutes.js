import express from 'express';
import Form from '../models/form.js'
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


router.get('/timesheets', async (req, res) => {
  try {
    const timesheets = await Form.find();
    res.json(timesheets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an existing timesheet entry
router.put('/timesheets/:id', async (req, res) => {
  const { id } = req.params;
  const { name, date, attendance, workHours, topics, description } = req.body;

  try {
    // Find the form entry by ID and update it with the new data
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      {
        name,
        date,
        attendance,
        workHours: attendance === 'Absent' ? null : workHours,
        topics: attendance === 'Absent' ? null : topics,
        description,
      },
      { new: true, runValidators: true }
    );

    if (!updatedForm) {
      return res.status(404).json({ success: false, message: 'Timesheet not found' });
    }

    res.status(200).json({ success: true, message: 'Timesheet updated successfully', data: updatedForm });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Delete a form entry by ID
router.delete('/timesheets/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the timesheet by ID and delete it
    const deletedTimesheet = await Form.findByIdAndDelete(id);

    if (!deletedTimesheet) {
      return res.status(404).json({ message: "Timesheet not found" });
    }

    res.status(200).json({ message: "Timesheet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export default router;
