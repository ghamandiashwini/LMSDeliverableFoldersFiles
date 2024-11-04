const express = require('express');
const StudentCourse = require('../models/StudentCourse');
const router = express.Router();

router.post('/enrollstudenttocourse', async (req, res) => {
    try {
      const { rollno, courseno} = req.body;

      const newStudentCourse = new StudentCourse({ rollno, courseno});
      await newStudentCourse.save();
      res.json({ message: 'Student is Enrolled successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

   
   // API endpoint to search for a course by ID
 router.get('/searchstudentcourse/:rollno', async (req, res) => {
  try {
    const {rollno} = req.params;
    console.log(Object.values(rollno));
     // Use a regular expression for a "like" search
     const regex = new RegExp(rollno, 'i'); // 'i' makes it case-insensitive
    
    const studentcourse = await StudentCourse.find({rollno:regex});
    

    if (studentcourse) {
      res.json(studentcourse);
    } else {
      res.status(404).json({ message: 'Studnets course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


  module.exports = router;

  


