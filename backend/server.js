const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/course', require('./routes/courseRoutes'));
app.use('/api/facilitator', require('./routes/facilitatorRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

app.use('/api/studentcourse', require('./routes/studentcourseRoutes'));
app.use('/api/facilitatorcourse', require('./routes/facilitatorcourseRoutes'));
app.use('/api/file', require('./routes/upload'));
app.use('/api/download', require('./routes/download'));
app.use('/api/comments', require('./routes/commentsRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
