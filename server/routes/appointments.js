const express = require('express');
const Appointment = require('../models/appointment');
const router = express.Router();

// Fetch upcoming and previous appointments
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const upcomingAppointments = await Appointment.find({ userId, status: 'upcoming' });
    const previousAppointments = await Appointment.find({ userId, status: 'completed' });
    res.json({ upcomingAppointments, previousAppointments });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Book new appointment
router.post('/', async (req, res) => {
  try {
    const { doctorId, userId, date } = req.body;
    const newAppointment = new Appointment({ doctorId, userId, date, status: 'upcoming' });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Error booking appointment' });
  }
});

module.exports = router;
