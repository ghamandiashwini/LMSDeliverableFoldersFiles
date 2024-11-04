const express = require('express');
const File = require('../models/File');
const multer = require('multer');
const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Route to upload a file
router.post('/upload/:courseno', upload.single('file'), async (req, res) => {
  try {
    const{courseno}=req.params;
    const { originalname, mimetype, path  } = req.file;
      const file = new File({
      filename: originalname,
      filepath: path,
      fileType: mimetype,
      courseno:courseno,
    });
    await file.save();
    res.status(200).json({ message: 'File uploaded successfully', file });
  } catch (err) {
    res.status(500).json({ error: 'File upload failed' });
  }
});

  module.exports = router;