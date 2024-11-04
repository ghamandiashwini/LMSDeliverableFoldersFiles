import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function ViewallFacilitatorCourses() {
    const { userno } = useParams();
    const [courses, setCourses] = useState([]);
    const [rollno, setRollno] = useState();
    
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [searchresult, setSearchResult] = useState({
      rollno:"", 
      firstname:"", 
      lastname:"" , 
      location:"", 
      userid:""
    });
    const [faclitatorcourses, setFacilitatorCourses] = useState([]);
    const [error, setError] = useState('');
    // Fetch courses from backend
    useEffect(() => {
       // Search for a course by ID
  const handleSearch = async () => {
      try {
       // console.log(userno);
        const response = await axios.get(`http://localhost:5000/api/facilitator/searchfacilitatorbyuserid/${userno}`);
        console.log(response.data[0].rollno);
        //setSearchResult(response.data[0]);

        const response1 = await axios.get(`http://localhost:5000/api/facilitatorcourse/searchfacilitatorcourse/${response.data[0].rollno}`);
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
        setSearchResult(null);
        setError('Facilitator not found');
      }
    };
      
 /*const handlecourseSearch = async () => {
      try {
        console.log(searchresult.rollno);
      
        const response = await axios.get(`http://localhost:5000/api/facilitatorcourse/searchfacilitatorcourse/${searchresult.rollno}`);
        console.log(response.data.length);
        setFacilitatorCourses(response.data);
        
      } catch (error) {
        //setSearchResult(null);
        setError('Facilitator course not found');
      }
    }; */
      
      
      /*const fetchCourses = async () => {
        try {
          console.log(faclitatorcourses.length);
          for(let i=0; i<=faclitatorcourses.length; i++)
          {
           // console.log(faclitatorcourses[i].courseno);
            const response = await axios.get(`http://localhost:5000/api/course/searchcoursebycourseno/${faclitatorcourses[i].courseno}`);
            setCourses(response.data);
          setMessage(`Welcome, ${response.data.course.courseno}!`);
          }
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
     
      };*/

      handleSearch();
      console.log("here");
    //  handlecourseSearch();
      console.log("here1");
      //fetchCourses();
    
    }, []);


    const handleback = async () => {
         navigate(`/FacilitatorDashoard/${userno}`);
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


export default ViewallFacilitatorCourses;