import React, {useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditStudent() {

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

   // Search for a course by ID
  const handleSearch = async () => {
    try {
      console.log(searchval);
      const response = await axios.get(`http://localhost:5000/api/student/searchstudent/${searchval}`);
      console.log(response.data);
      setSearchResult(response.data[0]);
    
      if(response.data){
     
      
      setError(null);
      setFlag(true);

    } else {
      setMessage(response.data.message);
      setFlag(false);
    }

    } catch (error) {
      setSearchResult(null);
      setError('Student not found');
      setFlag(false);
      setFlagval("No Course Found");
    }
    };


  const handleEditCourse = async () => {
    try {
      await axios.put(`http://localhost:5000/api/student/update/${searchresult._id}`,searchresult);
      
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleback = async () => {
    navigate(`/AdminDashoard/${userno}`);
 };


 const handleDeleteStudent = async (id) => {
  try {
      const response = await fetch(`http://localhost:5000/api/student/delete/${searchresult._id}`, {
          method: "DELETE",
      });
      setMessage(response.data.message);
      /*if (response.ok) {
        setSearchResult(items.filter((item) => item._id !== id));
      } else {
          console.error("Failed to delete the item");
      }*/
  } catch (error) {
      console.error("Error deleting item:", error);
  }
};

  return (
    <div>
           <button onClick={handleback}>Back</button>          
       <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <b>Search Student</b>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                <label>Student No</label>
                                </div>
                                <div className="col-md-4">
                                <input type="text"  name="txtstdno"  ref={enterdcourseno}  onChange={(e)=>{setSearchval(e.target.value)}}  className="form-control" />
                                </div>
                                <div className="col-md-4">
                                <input type="button"  value="Search student"  className="btn btn-success"  onClick={handleSearch} />
                                </div>
                            </div>
                            
                            
                            <br />
                            <hr />
        
       </div> 
       </div> 
       {
          flag ?(

       <form name="frmcourseMod">
      <h2>Edit Course</h2>
       <div><input type="hidden" value={searchresult._id}  name="studnetId" onChange={(e)=>{setSearchResult({...searchresult,_id:e.target.value})}} /></div> 
     <div><label>Student No</label><input type="text" id="cno"  value={searchresult.rollno}  name="rollno" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,rollno:e.target.value})}} /></div> 
     <div> <label>Student Name</label><input type="text" value={searchresult.firstname}   name="firstname" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,firstname:e.target.value})}} /></div> 
     <div><label>Last Name</label><input type="text" value={searchresult.lastname}  name="lastname" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,fees:e.firstname.value})}} /></div> 
     <div><label>Location</label> <input type="text" name="location" value={searchresult.location}  className="form-control" onChange={(e)=>{setSearchResult({...searchresult,location:e.target.value})}}/></div> 
     <div><label>User Id</label> <input type="text"  value={searchresult.userid}  name="userid"  className="form-control" onChange={(e)=>{setSearchResult({...searchresult,userid:e.target.value})}} /></div> 
     <button onClick={handleEditCourse}>Edit</button>    
     <button onClick={handleDeleteStudent}>Delete</button>                             
     <p>{message}</p>
     
     </form>
        ):(
     <h1>{flagVal}</h1>
 ) 
}
 </div>
 </div>
        
          
  );
}

export default EditStudent;