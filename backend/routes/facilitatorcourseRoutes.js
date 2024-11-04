const express = require('express');
const FacilitatorCourse = require('../models/FacilitatorCourse');
const router = express.Router();

router.post('/addfacilitatortocourse', async (req, res) => {
    try {
      const { rollno, courseno} = req.body;

      const newFacilitatorCourse = new FacilitatorCourse({ rollno, courseno});
      await newFacilitatorCourse.save();
      res.json({ message: 'Course is added to Faclilitaor successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

   // API endpoint to search for a course by ID
 router.get('/searchfacilitatorcourse/:rollno', async (req, res) => {
  try {
    const {rollno} = req.params;
   // console.log(Object.values(searchresult));
     // Use a regular expression for a "like" search
     const regex = new RegExp(rollno, 'i'); // 'i' makes it case-insensitive
    
    const facilitatorcourse = await FacilitatorCourse.find({rollno:regex});
    

    if (facilitatorcourse) {
      res.json(facilitatorcourse);
    } else {
      res.status(404).json({ message: 'Facilitator course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
   

  module.exports = router;

  


