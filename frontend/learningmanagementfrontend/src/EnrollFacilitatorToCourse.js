import React, {useEffect,useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EnrollFacilitatorToCourse() {

  const { userno } = useParams();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [searchval, setSearchval] = useState('');
  const [searchresult, setSearchResult] = useState({
    });
  const [error, setError] = useState('');
  const enterdcourseno = useRef(0);
  const [flag, setFlag] = useState(false);
  const [flagVal, setFlagval] = useState("");

  const [courses, setCourses] = useState([]);
  
  const [courseno, setCourseno] = useState("");
  const [rollno, setRollno] = useState("");

  const [students, setStudents] = useState([]);



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

    const fetchStudents = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/facilitator/viewallfacilitator');
          setStudents(response.data);
          setMessage(`Welcome, ${response.data.facilitator.firstname}!`);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchStudents();
  }, []);

  const handleEnrollStudenttoCourse = async () => {
    try {
        console.log(rollno);
        console.log(courseno);
      const response = await axios.post('http://localhost:5000/api/facilitatorcourse/addfacilitatortocourse', { rollno, courseno});
      setMessage(response.data.message);
      navigate(`/AdminDashoard/${userno}`);

    } catch (error) {
      setMessage('Registration failed: ' + error.response.data.error);
    }
  };

  const handleback = async () => {
    navigate(`/AdminDashoard/${userno}`);
 };

 const handleCourseChange = (event) => {
    setCourseno(event.target.value);
    console.log("Selected course:", event.target.value); // Optional: log the selected course
};

const handleStudnetChange = (event) => {
    setRollno(event.target.value);
    console.log("Selected student:", event.target.value); // Optional: log the selected course
};

  return (
    <div>
           <button onClick={handleback}>Back</button>          
       <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <b>Add Facilitator to the Course</b>
                        </div>
                        <div className="card-body">
                            <div className="row">
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
                                <label htmlFor="course-dropdown">Select a Facilitaor: </label>
                                    <select
                                        id="course-dropdown"
                                        value={rollno}
                                        onChange={handleStudnetChange}
                                    >
                                        <option value="">-- Choose a Facilitator --</option>
                                        {students.map((student) => (
                                            <option key={student.rollno} value={student.rollno}>
                                                {student.rollno} 
                                            </option>
                                        ))}
                                    </select>
                                </div>
                               
                                <div className="col-md-4">
                                  <button onClick={handleEnrollStudenttoCourse}>Add Course</button>    
                                 </div>
                            </div>
                                                       
                            <br />
                            <hr />
        
                         </div> 
                 </div> 
        </div>  
</div>
       
          
  );
}

export default EnrollFacilitatorToCourse;