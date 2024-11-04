// src/pages/Dashboard.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';


function StudentDashboard() {
    const { userno } = useParams();
    const navigate = useNavigate();
    
    const redirectToViewAllCourses = () => {
        // Programmatic navigation to the Dashboard page
        navigate(`/ViewallStudentCourses/${userno}`);
        };
        const redirectToViewAllDetails = () => {
            // Programmatic navigation to the Dashboard page
            navigate(`/ViewallStudentDetails/${userno}`);
            };   
            
            const redirectToEditAllDetails = () => {
                // Programmatic navigation to the Dashboard page
                navigate(`/EditStudentDetails/${userno}`);
                }; 

                const redirectToDownloadResources = () => {
                    // Programmatic navigation to the Dashboard page
                    navigate(`/Download/${userno}`);
                    };     

                    const redirectToCommentSection = () => {
                        // Programmatic navigation to the Dashboard page
                        navigate(`/PostPage/${userno}`);
                        };     
                     
                 
return (
    <div class="container-fluide" >
<h2>Student Dashboard</h2>
<p>Welcome {userno} </p>
<div class="row" style={{ border: '1 solid black'}}>
           <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">View MY Courses</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllCourses}>View All Courses</button>
            </div>
           </div>

           <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">View MY Details</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllDetails}>View Details</button>
            </div>
           </div>

           <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Download Resources</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToDownloadResources}>Download Rseources</button>
            </div>
           </div>

           <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Comment Section</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToCommentSection}>Comment Section</button>
            </div>
           </div>

           
</div>

</div>
);
}
export default StudentDashboard;
