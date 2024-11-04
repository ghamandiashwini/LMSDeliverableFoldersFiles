const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

router.post('/createnewcourse', async (req, res) => {
    try {
      const { courseno, coursename, fees , 
        courseduration, mode} = req.body;
      const newCourse = new Course({ courseno, coursename, fees , courseduration, mode});
      await newCourse.save();
      res.json({ message: 'Course is created successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  // API endpoint to get all courses
  router.get('/viewallcourses', async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
     // const token = jwt.sign({ id: courses._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      //res.json({ token, user: { id: courses._id, courseno: courses.courseno, rocoursenamele:courses.coursename , courseduration:courses.courseduration, mode:courses.mode} });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // API endpoint to search for a course by ID
  router.get('/searchcourse/:searchval', async (req, res) => {
  try {
    const {searchval} = req.params;
    console.log(Object.values(searchval));
     // Use a regular expression for a "like" search
     const regex = new RegExp(searchval, 'i'); // 'i' makes it case-insensitive
    
    const course = await Course.find({coursename:regex}).limit(1);
    

    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
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
    const updatedCourse = await Course.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete endpoint
router.delete("/delete/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const deletedCourse = await Course.findByIdAndDelete(id);
      if (!deletedCourse) {
          return res.status(404).json({ message: "Course not found" });
      }
      res.json({ message: "Course deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error deleting Course", error });
  }
});

 // API endpoint to search for a course by ID
 router.get('/searchcoursebycourseno/:courseno', async (req, res) => {
  try {
    const {courseno} = req.params;
    console.log(Object.values(courseno));
     // Use a regular expression for a "like" search
   //  const regex = new RegExp(courseno, 'i'); // 'i' makes it case-insensitive
    
    const course = await Course.find({courseno});
    

    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  module.exports = router;