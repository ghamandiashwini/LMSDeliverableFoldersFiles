import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Addnewcourse() {

  const { userno } = useParams();
  const [courseno, setCourseno] = useState('');
  const [coursename, setCoursename] = useState('');
  const [fees, setFees] = useState('');
  const [courseduration, setDuration] = useState('');
  const [mode, setMode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCreateNewCourse = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/course/createnewcourse', { courseno, coursename, fees , 
        courseduration, mode });
      setMessage(response.data.message);
      navigate(`/AdminDashoard/${userno}`);

    } catch (error) {
      setMessage('Registration failed: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Add New Course</h2>
     <div><label>Course No</label><input type="text" placeholder="courseno" onChange={(e) => setCourseno(e.target.value)} /></div> 
     <div> <label>Course Name</label><input type="text" placeholder="coursename" onChange={(e) => setCoursename(e.target.value)} /></div> 
     <div><label>Fees</label><input type="text" placeholder="fees" onChange={(e) => setFees(e.target.value)} /></div> 
     <div><label>Duration</label> <input type="text" placeholder="
courseduration" onChange={(e) => setDuration(e.target.value)} /></div> 
     <div><label>Mode</label> <input type="text" placeholder="mode" onChange={(e) => setMode(e.target.value)} /></div> 
      <button onClick={handleCreateNewCourse}>Add</button>
      <p>{message}</p>
    </div>
  );
}

export default Addnewcourse;