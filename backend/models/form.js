import mongoose from "mongoose";


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
  },
  topics: {
    type: String,
  },
  reason: {
    type: String,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});

// Custom validation to ensure conditional requirements are met
formSchema.pre('validate', function (next) {
  if (this.attendance === 'Absent' && (this.workHours || this.topics)) {
    return next(new Error("Work Hours and Topics should not be provided when attendance is Absent."));
  }

  if (this.attendance === 'Late' || this.attendance === 'Absent') {
    if (!this.reason) {
      return next(new Error('Reason is required for Late or Absent attendance.'));
    }
  }

  next();
});

const Form = mongoose.model('Form', formSchema);

export default Form;
