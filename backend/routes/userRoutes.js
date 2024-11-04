const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password , userno, role,email} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword , userno,role, email});
    await newUser.save();
    res.json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, username: user.username, role:user.role , userno:user.userno} });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

 // API endpoint to get all courses
 router.get('/viewallUsers', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
   // const token = jwt.sign({ id: courses._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    //res.json({ token, user: { id: courses._id, courseno: courses.courseno, rocoursenamele:courses.coursename , courseduration:courses.courseduration, mode:courses.mode} });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// API endpoint to search for a course by ID
router.get('/searchuser/:searchval', async (req, res) => {
  try {
    const {searchval} = req.params;
    console.log(Object.values(searchval));
     // Use a regular expression for a "like" search
     const regex = new RegExp(searchval, 'i'); // 'i' makes it case-insensitive
    
    const user = await User.find({username:regex}).limit(1);
    

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
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
    const updatedCourse = await User.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Delete endpoint
router.delete("/delete/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const deletedStudent = await User.findByIdAndDelete(id);
      if (!deletedStudent) {
          return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error deleting User", error });
  }
});

module.exports = router;
