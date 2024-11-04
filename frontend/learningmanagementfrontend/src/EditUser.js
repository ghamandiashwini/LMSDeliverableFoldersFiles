import React, {useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditUser() {

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
      const response = await axios.get(`http://localhost:5000/api/users/searchuser/${searchval}`);
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
      await axios.put(`http://localhost:5000/api/users/update/${searchresult._id}`,searchresult);
      
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleback = async () => {
    navigate(`/AdminDashoard/${userno}`);
 };


 const handleDeleteStudent = async (id) => {
  try {
      const response = await fetch(`http://localhost:5000/api/users/delete/${searchresult._id}`, {
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
                            <b>Search Users</b>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                <label>User Name</label>
                                </div>
                                <div className="col-md-4">
                                <input type="text"  name="txtuserno"  ref={enterdcourseno}  onChange={(e)=>{setSearchval(e.target.value)}}  className="form-control" />
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
     <div><label>User Name</label><input type="text" id="cno"  value={searchresult.username}  name="username" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,username:e.target.value})}} /></div> 
     <div> <label>Password</label><input type="text" value={searchresult.password} disabled  name="password" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,password:e.target.value})}} /></div> 
     <div><label>User No</label><input type="text" value={searchresult.userno}  name="userno" className="form-control" onChange={(e)=>{setSearchResult({...searchresult,userno:e.firstname.value})}} /></div> 
     <div><label>Role</label> <input type="text" name="location" value={searchresult.role}  className="form-control" onChange={(e)=>{setSearchResult({...searchresult,role:e.target.value})}}/></div> 
     <div><label>Email</label> <input type="text"  value={searchresult.email}  name="email"  className="form-control" onChange={(e)=>{setSearchResult({...searchresult,email:e.target.value})}} /></div> 
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

export default EditUser;