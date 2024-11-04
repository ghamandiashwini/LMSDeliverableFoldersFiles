const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.post('/createnewstudent', async (req, res) => {
    try {
      const { rollno, firstname, lastname , location, userid} = req.body;

      const newStudent = new Student({ rollno, firstname, lastname , location, userid});
      await newStudent.save();
      res.json({ message: 'Student is created successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

   // API endpoint to get all courses
   router.get('/viewallstudents', async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
     // const token = jwt.sign({ id: courses._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      //res.json({ token, user: { id: courses._id, courseno: courses.courseno, rocoursenamele:courses.coursename , courseduration:courses.courseduration, mode:courses.mode} });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
 
 // API endpoint to search for a course by ID
 router.get('/searchstudent/:searchval', async (req, res) => {
  try {
    const {searchval} = req.params;
    console.log(Object.values(searchval));
     // Use a regular expression for a "like" search
     const regex = new RegExp(searchval, 'i'); // 'i' makes it case-insensitive
    
    const student = await Student.find({rollno:regex}).limit(1);
    

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// API endpoint to update a course by ID
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedCourse = await Student.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// Delete endpoint
router.delete("/delete/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const deletedStudent = await Student.findByIdAndDelete(id);
      if (!deletedStudent) {
          return res.status(404).json({ message: "Student not found" });
      }
      res.json({ message: "Student deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error deleting Student", error });
  }
});



// API endpoint to search for a course by ID
router.get('/searchstudentbyuserid/:userno', async (req, res) => {
  try {
    const {userno} = req.params;
    console.log(Object.values(userno));
     // Use a regular expression for a "like" search
    // const regex = new RegExp(userno, 'i'); // 'i' makes it case-insensitive
    
    const student = await Student.find({userid:userno}).limit(1);
    
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  module.exports = router;

  


