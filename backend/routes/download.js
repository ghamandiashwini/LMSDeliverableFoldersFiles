const express = require('express');
const es = require('es'); 

const File = require('../models/File');
const path = require('path');
const router = express.Router();



// Route to handle file download by file ID
router.get('/downloadresources/:id', async (req, res) => {
  try {
    // Find the file by ID
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Determine MIME type and set headers
   // const mimeType = mime.getType(file.filepath); // Gets the MIME type based on file path or extension
       
    res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
    res.download(path.resolve(file.filepath), file.filename);

    // Set the headers and send the file for download
   // res.download(path.resolve(file.filepath), file.filename);
  } catch (error) {
    res.status(500).json({ message: 'Error downloading file' });
  }
});

// Route to handle file download by file ID
/*router.get('/getresources/:courseno', async (req, res) => {
    try {
      // Find the file by ID
      const file = await File.find({courseno:req.params.courseno});
  
      if (!file) {
        return res.status(404).json({ message: 'File not found' });
      }
  
      // Set the headers and send the file for download
      //res.download(path.resolve(file.filepath), file.filename);
    } catch (error) {
      res.status(500).json({ message: 'Error downloading file' });
    }
  });*/

  
 // API endpoint to search for a course by ID
 router.get('/getresources/:courseno', async (req, res) => {
    try {
      const {courseno} = req.params;
      console.log(Object.values(courseno));
       // Use a regular expression for a "like" search
     //  const regex = new RegExp(courseno, 'i'); // 'i' makes it case-insensitive
      
      const file = await File.find({courseno});
      
  
      if (file) {
        res.json(file);
      } else {
        res.status(404).json({ message: 'Resource not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
module.exports = router;