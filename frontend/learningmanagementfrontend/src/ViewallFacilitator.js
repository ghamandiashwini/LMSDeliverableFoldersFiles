import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function ViewallFacilitator() {
    const { userno } = useParams();
    const [facilitators, setFacilitator] = useState([]);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    // Fetch courses from backend
    useEffect(() => {
      const fetchFacilitator = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/facilitator/viewallfacilitator');
          setFacilitator(response.data);
          setMessage(`Welcome, ${response.data.facilitator.firstname}!`);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchFacilitator();
    }, []);


    const handleback = async () => {
         navigate(`/AdminDashoard/${userno}`);
      };

    

    return (
      <div className="App">
        <h1>All Facilitators</h1>
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
          {facilitators.map((facilitator) => (
            <tr>
            <td>{facilitator.rollno}</td>
            <td>{facilitator.firstname}</td>
            <td>{facilitator.lastname}</td>
            <td> {facilitator.location}</td>
          
            </tr>
          ))}
     </table>
        </div>
      </div>
    );
}


export default ViewallFacilitator;