import React, { useState, useEffect } from 'react';
import AppointmentCard from './AppointmentCard';
import Navbar from './Navbar';

const UserPage = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [previousAppointments, setPreviousAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments for a specific user (replace 'user123' with actual user ID)
    fetch('http://localhost:5000/api/appointments/user123')
      .then(res => res.json())
      .then(data => {
        setUpcomingAppointments(data.upcomingAppointments);
        setPreviousAppointments(data.previousAppointments);
      })
      .catch(err => console.error('Error fetching appointments:', err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>User Dashboard</h1>

      <h2>Upcoming Appointments</h2>
      {upcomingAppointments.map(appointment => (
        <AppointmentCard key={appointment._id} appointment={appointment} />
      ))}

      <h2>Previous Sessions</h2>
      {previousAppointments.map(appointment => (
        <AppointmentCard key={appointment._id} appointment={appointment} />
      ))}
    </div>
  );
};

export default UserPage;
