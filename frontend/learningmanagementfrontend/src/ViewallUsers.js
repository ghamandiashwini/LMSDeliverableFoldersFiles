import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function ViewallUsers() {
    const { userno } = useParams();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    // Fetch courses from backend
    useEffect(() => {
      const fetchStudents = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/users/viewallUsers');
          setUsers(response.data);
          setMessage(`Welcome, ${response.data.user.username}!`);
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
                        <th>User Name</th>
                        <th>Password</th>
                        <th>User NO</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
          {users.map((user) => (
            <tr>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td> {user.userno}</td>
            <td> {user.role}</td>
            <td> {user.email}</td>
          
            </tr>
          ))}
     </table>
        </div>
      </div>
    );
}


export default ViewallUsers;