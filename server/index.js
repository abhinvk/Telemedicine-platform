const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const appointmentsRouter = require('./routes/appointments');

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON

mongoose.connect('mongodb://localhost:27017/telemedicine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/appointments', appointmentsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
