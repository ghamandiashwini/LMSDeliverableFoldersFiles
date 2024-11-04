import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function ViewallStudents() {
    const { userno } = useParams();
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    // Fetch courses from backend
    useEffect(() => {
      const fetchStudents = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/student/viewallstudents');
          setStudents(response.data);
          setMessage(`Welcome, ${response.data.student.firstname}!`);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchStudents();
    }, []);


    const handleback = async () => {
         navigate(`/AdminDashoard/${userno}`);
      };

    

    return (
      <div className="App">
        <h1>All Students</h1>
        <br></br>
        <button onClick={handleback} type="button" class="btn btn-primary">Back</button>
        <div className="course-list">
        <table className="table table-info"  border={1}>
                    <tr>
                        <th>Roll No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Location</th>
                    </tr>
          {students.map((student) => (
            <tr>
            <td>{student.rollno}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td> {student.location}</td>
          
            </tr>
          ))}
     </table>
        </div>
      </div>
    );
}


export default ViewallStudents;