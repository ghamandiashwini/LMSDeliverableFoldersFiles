import React, {useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Editcourse() {

  const { userno } = useParams();
  const [courseId, setCourseId] = useState('');
  const [courseno, setCourseno] = useState('');
  const [coursename, setCoursename] = useState('');
  const [fees, setFees] = useState('');
  const [courseduration, setDuration] = useState('');
  const [mode, setMode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [searchval, setSearchval] = useState('');
  const [searchresult, setSearchResult] = useState({
    _id:"",
    courseno:"",
    coursename:"",
    courseduration:"",
    fees:"",
    mode:"",
    });
  const [error, setError] = useState('');
  const enterdcourseno = useRef(0);
  const [flag, setFlag] = useState(false);
  const [flagVal, setFlagval] = useState("");

   // Search for a course by ID
  const handleSearch = async () => {
    try {
      console.log(searchval);
      const response = await axios.get(`http://localhost:5000/api/course/searchcourse/${searchval}`);
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
      setError('Course not found');
      setFlag(false);
      setFlagval("No Course Found");
    }
    };


  const handleEditCourse = async () => {
    try {
      await axios.put(`http://localhost:5000/api/course/update/${searchresult._id}`,searchresult);
      
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleback = async () => {
    navigate(`/AdminDashoard/${userno}`);
 };

 const handleDeleteCourse = async (id) => {
  try {
      const response = await fetch(`http://localhost:5000/api/course/delete/${searchresult._id}`, {
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
                            <b>search Course</b>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                <label>Course Name</label>
                                </div>
                                <div className="col-md-4">
                                <input type="text"  name="txtcno"  ref={enterdcourseno}  onChange={(e)=>{setSearchval(e.target.value)}}  className="form-control" />
                                </div>
                                <div className="col-md-4">
                                <input type="button"  value="Search course"  className="btn btn-success"  onClick={handleSearch} />
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
      <div><input type="hidden" value={searchresult._id}  name="courseId" onChange={(e)=>{setSearchResult({...searchresult,_id:e.target.value})}} /></div> 
     <div><label>Course No</label><input type="text" id="cno"  value={searchresult.courseno}  name="courseno" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,courseno:e.target.value})}} /></div> 
     <div> <label>Course Name</label><input type="text" value={searchresult.coursename}   name="coursename" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,coursename:e.target.value})}} /></div> 
     <div><label>Fees</label><input type="text" value={searchresult.fees}  name="fees" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,fees:e.target.value})}} /></div> 
     <div><label>Duration</label> <input type="text" name="{setSearchResult
courseduration" value={searchresult.courseduration}  className="form-control" onChange={(e)=>{setSearchResult({...searchresult,courseduration:e.target.value})}}/></div> 
     <div><label>Mode</label> <input type="text"  value={searchresult.mode}  name="mode"  className="form-control" onChange={(e)=>{setSearchResult({...searchresult,mode:e.target.value})}} /></div> 
     <button onClick={handleEditCourse}>Edit</button>       
     <button onClick={handleDeleteCourse}>Delete</button>                             
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

export default Editcourse;