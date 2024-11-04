// src/pages/Dashboard.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function AdminDashoard() {
    const { userno } = useParams();
    const navigate = useNavigate();
    const redirectTocreatenewcourse = () => {
        // Programmatic navigation to the Dashboard page
        navigate(`/Addnewcourse/${userno}`);
        };
       
        const redirectTocreatenewFacilitator = () => {
            // Programmatic navigation to the Dashboard page
            navigate(`/Addfacilitator/${userno}`);
            };

            const redirectTocreatenewStudent = () => {
                // Programmatic navigation to the Dashboard page
                navigate(`/AddStudent/${userno}`);
                };

                const redirectTocreatenewAdmin = () => {
                    // Programmatic navigation to the Dashboard page
                    navigate(`/AddAdmin/${userno}`);
                    };
                    const redirectToViewAllCourses = () => {
                        // Programmatic navigation to the Dashboard page
                        navigate(`/ViewallCourses/${userno}`);
                        };
                        const redirectToViewAllAdmins = () => {
                            // Programmatic navigation to the Dashboard page
                            navigate(`/ViewallAdmins/${userno}`);
                            };
                            const redirectToViewAllStudents = () => {
                                // Programmatic navigation to the Dashboard page
                                navigate(`/ViewallStudents/${userno}`);
                                };
                                const redirectToViewAllFacilitators = () => {
                                    // Programmatic navigation to the Dashboard page
                                    navigate(`/ViewallFacilitator/${userno}`);
                                    };    
                                    const redirectToEditCourses = () => {
                                        // Programmatic navigation to the Dashboard page
                                        navigate(`/Editcourse/${userno}`);
                                        }; 
                                        const redirectToEditStudent = () => {
                                            // Programmatic navigation to the Dashboard page
                                            navigate(`/EditStudent/${userno}`);
                                            };

                                            const redirectToEditAdmin = () => {
                                                // Programmatic navigation to the Dashboard page
                                                navigate(`/EditAdmin/${userno}`);
                                                };    
                                                const redirectToEditFacilitator = () => {
                                                    // Programmatic navigation to the Dashboard page
                                                    navigate(`/EditFacilitator/${userno}`);
                                                    };
                                                    const redirectToRegisterUser = () => {
                                                        // Programmatic navigation to the Dashboard page
                                                        navigate(`/Register/${userno}`);
                                                        };
                                                        const redirectToViewAllUsers = () => {
                                                            // Programmatic navigation to the Dashboard page
                                                            navigate(`/ViewAllUsers/${userno}`);
                                                            };

                                                            const redirectToViewAllEditUser = () => {
                                                                // Programmatic navigation to the Dashboard page
                                                                navigate(`/EditUser/${userno}`);
                                                                };

                                                                const redirectToEnrollStudentToCourse = () => {
                                                                    // Programmatic navigation to the Dashboard page
                                                                    navigate(`/EnrollStudentToCourse/${userno}`);
                                                                    };

                                                                    const redirectToEnrollFacilitatorToCourse = () => {
                                                                        // Programmatic navigation to the Dashboard page
                                                                        navigate(`/EnrollFacilitatorToCourse/${userno}`);
                                                                        };
                                                        
                                                    
                                                                    
                                            
return (
    <div class="container-fluide" >
<h2>Admin Dashboard</h2>
<p>Welcome {userno} </p>

<div class="row" style={{ border: '1 solid black'}}>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Create New course</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectTocreatenewcourse}>Add New Course</button>
            </div>
        </div>
        
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Add Admin</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectTocreatenewAdmin}>Add New Admin</button>
            </div>
        </div>

        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Add Student</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectTocreatenewStudent}>Add New student</button>
            </div>
        </div>

        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Add Facilitator</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectTocreatenewFacilitator}>Add New Facilitator</button>
            </div>
        </div>

        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Register User</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToRegisterUser}>Register User</button>
            </div>
        </div>
       
</div>

<div class="row" style={{ border: '1 solid black'}}>
           <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">View All Courses</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllCourses}>View All Courses</button>
            </div>
        </div>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">View All Admins</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllAdmins}>View All Admins</button>
            </div>
        </div>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">View All Students</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllStudents}>View All students</button>
            </div>
        </div>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">View All Facilitators</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllFacilitators}>View All Facilitators</button>
            </div>
        </div>

        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">View All Users</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllUsers}>View All Users</button>
            </div>
        </div>

</div>
<div class="row" style={{ border: '1 solid black'}}>
           <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Search / Edit / Delete Course</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToEditCourses}>Search Courses</button>
            </div>
        </div>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Search / Edit / Delete Admin</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToEditAdmin}>Search Admin</button>
            </div>
        </div>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Search / Edit / Delete Student</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToEditStudent}>Search Student</button>
            </div>
        </div>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Search / Edit / Delete Faclilitator</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToEditFacilitator}>Search Faclilitator</button>
            </div>
        </div>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Search / Edit / Delete User</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllEditUser}>Search User</button>
            </div>
        </div>

        
</div>
<div class="row" style={{ border: '1 solid black'}}>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Enroll Student To Course</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToEnrollStudentToCourse}>Enroll Student</button>
            </div>
        </div>

</div>

<div class="row" style={{ border: '1 solid black'}}>
        <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Add Facilitator To Course</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToEnrollFacilitatorToCourse}>Add Facilitotor</button>
            </div>
        </div>

</div>

     

</div>
);
}
export default AdminDashoard;
