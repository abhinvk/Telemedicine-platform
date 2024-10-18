const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['upcoming', 'completed'], required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
