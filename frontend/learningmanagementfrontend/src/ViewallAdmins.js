import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function ViewallAdmins() {
    const { userno } = useParams();
    const [admins, setAdmins] = useState([]);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    // Fetch courses from backend
    useEffect(() => {
      const fetchAdmins = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/admin/viewalladmins');
          setAdmins(response.data);
          setMessage(`Welcome, ${response.data.admin.firstname}!`);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchAdmins();
    }, []);


    const handleback = async () => {
         navigate(`/AdminDashoard/${userno}`);
      };

    

    return (
      <div className="App">
        <h1>All Admins</h1>
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
          {admins.map((admin) => (
            <tr>
            <td>{admin.rollno}</td>
            <td>{admin.firstname}</td>
            <td>{admin.lastname}</td>
            <td> {admin.location}</td>
          
            </tr>
          ))}
     </table>
        </div>
      </div>
    );
}


export default ViewallAdmins;