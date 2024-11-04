import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function ViewallFacilitatorDetails() {
    const { userno } = useParams();
    const [facilitators, setFacilitator] = useState({});
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [searchresult, setSearchResult] = useState({
      rollno:"", 
      firstname:"",
      lastname:"" ,
      location:"", 
      userid:"",
    });

    const [searchval, setSearchval] = useState('');

    // Fetch courses from backend
    useEffect(() => {
      /*const fetchFacilitator = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/facilitator/viewallfacilitator');
          setFacilitator(response.data);
          setMessage(`Welcome, ${response.data.facilitator.firstname}!`);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };*/

      // Search for a course by ID
  const handleSearch = async () => {
    try {
      setSearchval(userno);
      const response = await axios.get(`http://localhost:5000/api/facilitator/searchfacilitatorbyuserid/${userno}`);
      console.log(response.data[0]);
      //setFacilitator(response.data[0]);
      setSearchResult(response.data[0]);
    
    } catch (error) {
      // setFacilitator(null);
      setSearchResult(null);
    
    }
    };


    handleSearch();
      //fetchFacilitator();
    }, []);


    const handleback = async () => {
         navigate(`/FacilitatorDashoard/${userno}`);
      };

    

    return (
      <div className="App">
        <h1>My Details</h1>
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
           <tr>
            <td>{searchresult.rollno}</td>
            <td>{searchresult.firstname}</td>
            <td>{searchresult.lastname}</td>
            <td> {searchresult.location}</td>
          
            </tr>

     </table>
        </div>
      </div>
    );
}


export default ViewallFacilitatorDetails;