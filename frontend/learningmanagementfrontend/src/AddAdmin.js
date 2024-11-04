import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AddAdmin() {

  const { userno } = useParams();

  const [rollno, setRollno] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [userid, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  //const [userInput, setUserInput] = useState('');

  /*const handlePrompt = () => {
    // Display the prompt and store the result
    const input = window.prompt('Please enter email of the facilitator to add:', 'Facilitator Fmail');
    if (input !== null) {
      return input ;
    }
}*/

 /* const handleSearchUser = async () => {
     
    try {
      const input1 = handlePrompt();
      const response = await axios.post('http://localhost:5000/api/users/searchuser', {input1});
      setMessage(`Welcome, ${response.data.user.username}!`);
      setUserNo(response.data.user.userno);
      } catch (error) {
      setMessage('User is Not Registed: ' + error.response.data.message);
    }
  };*/

  const handleCreateNewAdmin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/createnewadmin', { rollno, firstname,lastname , location, userid });
      setMessage(response.data.message);
      navigate(`/AdminDashoard/${userno}`);

    } catch (error) {
      setMessage('Registration failed: ' + error.response.data.error);
    }
  };

 
  /*useEffect(() => {
     handleSearchUser();
  }, []); // Dependency array, runs when `username` changes*/



  return (
    <div class="container-fluide"> 
      <h2>Add New Admin</h2>
     <div class="container-lg"><label>Roll No</label>&nbsp;&nbsp;&nbsp;<input type="text" placeholder="rollno" onChange={(e) => setRollno(e.target.value)} /></div> 
   <br></br>    
     <div class="container-lg"> <label>First Name</label>&nbsp;&nbsp;&nbsp;<input type="text" placeholder="firstname" onChange={(e) => setFirstname(e.target.value)} /></div> 
     <br></br>
     <div class="container-lg"><label>Last Name</label>&nbsp;&nbsp;&nbsp;<input type="text" placeholder="lastname" onChange={(e) => setLastname(e.target.value)} /></div> 
     <br></br>
     <div class="container-lg"><label>Loacation</label>&nbsp;&nbsp;&nbsp; <input type="text" placeholder=" location" onChange={(e) => setLocation(e.target.value)} /></div> 
     <br></br>
     <div class="container-lg"><label>Use Rno</label>&nbsp;&nbsp;&nbsp; <input type="text" placeholder=" userid" onChange={(e) => setUserId(e.target.value)} /></div> 
     <br></br>
     <button onClick={handleCreateNewAdmin} type="button" class="btn btn-primary">Add</button>
     <br></br>
      <p>{message}</p>
    </div>
  );

}

export default AddAdmin;