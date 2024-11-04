// src/pages/Dashboard.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function FacilitatorDashoard() {
    const { userno } = useParams();
    const navigate = useNavigate();
    const redirectToViewAllCourses = () => {
        // Programmatic navigation to the Dashboard page
        navigate(`/ViewallFacilitatorCourses/${userno}`);
        };
       const redirectToViewAllFacilitatorDetails = () => {
        // Programmatic navigation to the Dashboard page
        navigate(`/ViewallFacilitatorDetails/${userno}`);
        };

        const redirectToEditFacilitatorDetails = () => {
            // Programmatic navigation to the Dashboard page
            navigate(`/EditFacilitatorDetails/${userno}`);
            };

        const redirectToupload = () => {
                // Programmatic navigation to the Dashboard page
                navigate(`/Upload/${userno}`);
                };
        
          
                    
return (
<div class="container-fluide" >
<h2>Facilitator Dashboard</h2>
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
                <h5 class="card-title">View deatails</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToViewAllFacilitatorDetails}>View Details </button>
            </div>
           </div>

           <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Edit deatails</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToEditFacilitatorDetails}>Edit Details </button>
            </div>
           </div>
           <div class="card" style={{ width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Upload Resources</h5>
                <button type="button" class="btn btn-lg btn-primary"  onClick={redirectToupload}>Upload Resource for course </button>
            </div>
           </div>
           
</div>







</div>
);
}
export default FacilitatorDashoard;
