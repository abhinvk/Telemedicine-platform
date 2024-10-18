const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // URL for image
  specialization: { type: String, required: true },
  fee: { type: Number, required: false }, // Fee is now optional
  password: { type: String, required: true }, // Password field added
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
