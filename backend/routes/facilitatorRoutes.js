const express = require('express');
const Facilitator = require('../models/Facilitator');
const router = express.Router();

router.post('/createnewfacilitator', async (req, res) => {
    try {
      const { rollno, firstname, lastname , location, userid} = req.body;

      const newFacilitator = new Facilitator({ rollno, firstname, lastname , location, userid});
      await newFacilitator.save();
      res.json({ message: 'Facilitator is created successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // API endpoint to get all courses
  router.get('/viewallfacilitator', async (req, res) => {
    try {
      const facilitator = await Facilitator.find();
      res.json(facilitator);
     // const token = jwt.sign({ id: courses._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      //res.json({ token, user: { id: courses._id, courseno: courses.courseno, rocoursenamele:courses.coursename , courseduration:courses.courseduration, mode:courses.mode} });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


 
 // API endpoint to search for a course by ID
 router.get('/searchfacilitator/:searchval', async (req, res) => {
  try {
    const {searchval} = req.params;
    console.log(Object.values(searchval));
     // Use a regular expression for a "like" search
     const regex = new RegExp(searchval, 'i'); // 'i' makes it case-insensitive
    
    const facilitator = await Facilitator.find({rollno:regex}).limit(1);
    

    if (facilitator) {
      res.json(facilitator);
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
    const updatedCourse = await Facilitator.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete endpoint
router.delete("/delete/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const deletedFacilitator = await Facilitator.findByIdAndDelete(id);
      if (!deletedFacilitator) {
          return res.status(404).json({ message: "Facilitator not found" });
      }
      res.json({ message: "Facilitator deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error deleting Facilitator", error });
  }
});

 // API endpoint to search for a course by ID
 router.get('/searchfacilitatorbyuserid/:userno', async (req, res) => {
  try {
    const {userno} = req.params;
    console.log(Object.values(userno));
     // Use a regular expression for a "like" search
    // const regex = new RegExp(userno, 'i'); // 'i' makes it case-insensitive
    
    const facilitator = await Facilitator.find({userid:userno}).limit(1);
    
    if (facilitator) {
      res.json(facilitator);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  module.exports = router;

  


