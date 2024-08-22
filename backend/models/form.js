// models/Form.js

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  attendance: {
    type: String,
    enum: ['Present', 'Late', 'Absent'],
    required: true,
  },
  workHours: {
    type: Number,
    required: true,
  },
  topics: {
    type: String, // Change from enum to String
    required: true,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
