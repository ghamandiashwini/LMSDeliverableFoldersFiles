import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import AdminDashoard from './AdminDashoard';
import FacilitatorDashoard from './FacilitatorDashoard';
import StudentDashboard from './StudentDashboard';
import Addnewcourse from './Addnewcourse';
import AddFacilitator from './AddFacilitator';
import AddStudent from './AddStudent';
import AddAdmin from './AddAdmin';
import ViewallCourses from './ViewallCourses';
import ViewallAdmins from './ViewallAdmins';

import ViewallStudents from './ViewallStudents';
import ViewallFacilitator from './ViewallFacilitator';

import EditStudent from './EditStudent';
import EditAdmin from './EditAdmin';
import Editcourse from './Editcourse';
import EditFacilitator from './EditFacilitator';

import ViewallUsers from './ViewallUsers';
import EditUser from './EditUser';

import EnrollStudentToCourse from './EnrollStudentToCourse';

import EnrollFacilitatorToCourse from './EnrollFacilitatorToCourse';

import ViewallFacilitatorCourses from './ViewallFacilitatorCourses';

import ViewallFacilitatorDetails from './ViewallFacilitatorDetails';
import EditFacilitatorDetails from './EditFacilitatorDetails';

import ViewallStudentCourses from './ViewallStudentCourses';

import Upload from './Upload';
import ViewallStudentDetails from './ViewallStudentDetails';
import EditStudentDetails from './EditStudentDetails';

import Download from './Download';
import PostPage from './PostPage';


const App = () => {
return (
    <div>
      <h1>Learning Management System</h1>
      <Router>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/AdminDashoard/:userno" element={<AdminDashoard />} />
<Route path="/StudentDashboard/:userno" element={<StudentDashboard />} />
<Route path="/FacilitatorDashoard/:userno" element={<FacilitatorDashoard />} />
<Route path="/FacilitatorDashoard/:userno" element={<FacilitatorDashoard />} />

<Route path="/Addnewcourse/:userno" element={<Addnewcourse />} />

<Route path="/AddFacilitator/:userno" element={<AddFacilitator />} />
<Route path="/AddStudent/:userno" element={<AddStudent />} />
<Route path="/AddAdmin/:userno" element={<AddAdmin />} />
<Route path="/ViewallCourses/:userno" element={<ViewallCourses />} />
<Route path="/ViewallAdmins/:userno" element={<ViewallAdmins />} />
<Route path="/ViewallStudents/:userno" element={<ViewallStudents />} />
<Route path="/ViewallFacilitator/:userno" element={<ViewallFacilitator />} />

<Route path="/Editcourse/:userno" element={<Editcourse />} />

<Route path="/EditStudent/:userno" element={<EditStudent />} />

<Route path="/EditAdmin/:userno" element={<EditAdmin />} />
<Route path="/EditFacilitator/:userno" element={<EditFacilitator />} />


<Route path="/Register/:userno" element={<Register />} />
<Route path="/ViewallUsers/:userno" element={<ViewallUsers />} />
<Route path="/EditUser/:userno" element={<EditUser />} />
<Route path="/EnrollStudentToCourse/:userno" element={<EnrollStudentToCourse />} />
<Route path="/EnrollFacilitatorToCourse/:userno" element={<EnrollFacilitatorToCourse />} />
<Route path="/ViewallFacilitatorCourses/:userno" element={<ViewallFacilitatorCourses />} />
<Route path="/ViewallFacilitatorDetails/:userno" element={<ViewallFacilitatorDetails />} />
<Route path="/EditFacilitatorDetails/:userno" element={<EditFacilitatorDetails />} />
<Route path="/Upload/:userno" element={<Upload />} />

<Route path="/ViewallStudentCourses/:userno" element={<ViewallStudentCourses />} />

<Route path="/ViewallStudentDetails/:userno" element={<ViewallStudentDetails />} />
<Route path="/EditStudentDetails/:userno" element={<EditStudentDetails />} />
<Route path="/Download/:userno" element={<Download />} />
<Route path="/PostPage/:userno" element={<PostPage />} />


</Routes>
</Router>
     </div>
  );
};

export default App;