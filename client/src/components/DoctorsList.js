import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors from the backend
    axios.get('http://localhost:5000/api/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.log(error));
  }, []);

  const requestConsultation = (doctorId) => {
    // Handle consultation request logic here
    alert(`Consultation requested for Doctor ID: ${doctorId}`);
  };

  return (
    <div className="doctor-list">
      {doctors.map(doctor => (
        <div key={doctor._id} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} />
          <h3>{doctor.name}</h3>
          <p>Specialization: {doctor.specialization}</p>
          <p>Fee: ₹{doctor.fee}</p>
          <button onClick={() => requestConsultation(doctor._id)}>Request Consultation</button>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
