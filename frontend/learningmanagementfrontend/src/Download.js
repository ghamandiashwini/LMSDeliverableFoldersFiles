import React, { useEffect, useState } from 'react';
import { fetchFiles, downloadFile } from './downloadapi';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function Download() {
  const [files, setFiles] = useState([]);
  const { userno } = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');
  const [courseno, setCourseno] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {
 
    const handleSearch = async () => {
        try {
         // console.log(userno);
          const response = await axios.get(`http://localhost:5000/api/student/searchstudentbyuserid/${userno}`);
          console.log(response.data[0].rollno);
          //setSearchResult(response.data[0]);
  
          const response1 = await axios.get(`http://localhost:5000/api/studentcourse/searchstudentcourse/${response.data[0].rollno}`);
          console.log(response1.data.length);
          //setFacilitatorCourses(response1.data);
  
          for(let i=0; i<=response1.data.length; i++)
            {
             // console.log(faclitatorcourses[i].courseno);
              const response3 = await axios.get(`http://localhost:5000/api/course/searchcoursebycourseno/${response1.data[i].courseno}`);
              setCourses(response3.data);
            setMessage(`Welcome, ${response3.data.course.courseno}!`);
            }
          
        } catch (error) {
          //setSearchResult(null);
          setError('Student not found');
        }
      };
 
      handleSearch();
    //getFiles();
  }, []);

    // Fetch files on component mount
    const getFiles = async () => {
        const data = await fetchFiles(courseno);
        setFiles(data);
      };

  const handleback = async () => {
    navigate(`/StudentDashobard/${userno}`);
 };

 const handleCourseChange = (event) => {
    setCourseno(event.target.value);
    console.log("Selected course:", event.target.value); // Optional: log the selected course
};

  return (
    <div>
      <button onClick={handleback}>Back</button> 
      <h2>Course Resources Download</h2>
      <div className="col-md-4">
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
                                <div className="col-md-4">
                                  <button onClick={getFiles}>Get Resources</button>    
                                 </div>
                                <div className="col-md-4">

                                <br></br>                         
      <ul>
        {files.map((file) => (
          <li key={file._id}>
           {file.filename}
            <button onClick={() => downloadFile(file._id)}>Download</button>
          </li>
         
        ))}
      </ul>
      <br></br>
      </div>
    </div>
  );
}
export default Download;