import React, { useEffect, useState } from 'react';
import { uploadFile } from './api';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Upload() {
    const { userno } = useParams();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [courses, setCourses] = useState([]);
  const [courseno, setCourseno] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/course/viewallcourses');
        setCourses(response.data);
        setMessage(`Welcome, ${response.data.course.coursename}!`);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
}, []);


const handleCourseChange = (event) => {
    setCourseno(event.target.value);
    console.log("Selected course:", event.target.value); // Optional: log the selected course
};

  const handleUpload = async () => {
    try {
      if (file) {
        const response = await uploadFile(file,courseno);
        setMessage(response.data.message);
      } else {
        setMessage('Please select a file');
      }
    } catch (error) {
      setMessage('File upload failed');
    }
  };

  const handleback = async () => {
    navigate(`/FacilitatorDashoard/${userno}`);
 };
  return (
    <div>
<button onClick={handleback}>Back</button>        
      <h2>Upload a File</h2>
      <div>
      <div >
                                <label htmlFor="course-dropdown">Select a Course: </label>
                                    <select
                                        id="course-dropdown"
                                        value={courseno}
                                        onChange={handleCourseChange}
                                    >
                                        <option value="">-- Choose a Course --</option>
                                        {courses.map((course) => (
                                            <option key={course.courseno} value={course.courseno}>
                                                {course.coursename}
                                            </option>
                                        ))}
                                    </select>
    </div>

      </div><div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Upload;