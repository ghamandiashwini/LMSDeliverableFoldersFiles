const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();

router.post('/createnewadmin', async (req, res) => {
    try {
      const { rollno, firstname, lastname , location, userid} = req.body;

      const newAdmin = new Admin({ rollno, firstname, lastname , location, userid});
      await newAdmin.save();
      res.json({ message: 'Admin is created successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // API endpoint to get all courses
  router.get('/viewalladmins', async (req, res) => {
    try {
      const admins = await Admin.find();
      res.json(admins);
     // const token = jwt.sign({ id: courses._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      //res.json({ token, user: { id: courses._id, courseno: courses.courseno, rocoursenamele:courses.coursename , courseduration:courses.courseduration, mode:courses.mode} });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  // API endpoint to search for a course by ID
 router.get('/searchadmin/:searchval', async (req, res) => {
  try {
    const {searchval} = req.params;
    console.log(Object.values(searchval));
     // Use a regular expression for a "like" search
     const regex = new RegExp(searchval, 'i'); // 'i' makes it case-insensitive
    
    const admin = await Admin.find({rollno:regex}).limit(1);
    

    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ message: 'Admin not found' });
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
    const updatedCourse = await Admin.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Delete endpoint
router.delete("/delete/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const deletedAdmin = await Admin.findByIdAndDelete(id);
      if (!deletedAdmin) {
          return res.status(404).json({ message: "Admin not found" });
      }
      res.json({ message: "Admin deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error deleting Admin", error });
  }
});

  module.exports = router;

  


