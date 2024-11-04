import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AddFacilitator() {

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

  const handleCreateNewFacilitator = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/facilitator/createnewfacilitator', { rollno, firstname,lastname , location, userid });
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
    <div> 
      <h2>Add New Facilitator</h2>
     <div><label>Roll No</label><input type="text" placeholder="rollno" onChange={(e) => setRollno(e.target.value)} /></div> 
     <div> <label>First Name</label><input type="text" placeholder="firstname" onChange={(e) => setFirstname(e.target.value)} /></div> 
     <div><label>Last Name</label><input type="text" placeholder="lastname" onChange={(e) => setLastname(e.target.value)} /></div> 
     <div><label>Loacation</label> <input type="text" placeholder=" location" onChange={(e) => setLocation(e.target.value)} /></div> 
     <div><label>Use Rno</label> <input type="text" placeholder=" userid" onChange={(e) => setUserId(e.target.value)} /></div> 
     <button onClick={handleCreateNewFacilitator}>Add</button>
      <p>{message}</p>
    </div>
  );

}

export default AddFacilitator;