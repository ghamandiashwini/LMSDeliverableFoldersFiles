import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function ViewallCourses() {
    const { userno } = useParams();
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    // Fetch courses from backend
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


    const handleback = async () => {
         navigate(`/AdminDashoard/${userno}`);
      };

  
    return (
      <div className="App">
        <h1>All Courses</h1>
        <br></br>
        <button onClick={handleback} type="button" class="btn btn-primary">Back</button>
        <div className="course-list">
        <table className="table table-info"  border={1}>
                    <tr>
                        <th>Course No</th>
                        <th>Course Name</th>
                        <th>Course Fees</th>
                        <th>Course Duration</th>
                        <th>Course Mode</th>
                    </tr>  
          {courses.map((course) => (
            <tr>
            <td>{course.courseno}</td>
            <td>{course.coursename}</td>
            <td>{course.fees}</td>
            <td> {course.courseduration}</td>
            <td>{course.mode}</td>
         </tr>
          ))}
     </table>
        </div>
      </div>
    );
}


export default ViewallCourses;