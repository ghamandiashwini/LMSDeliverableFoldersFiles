const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// POST - Add a new comment
router.post('/postcomment', async (req, res) => {
  try {
    const { text, author, postId } = req.body;
    const newComment = new Comment({ text, author, postId });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating comment', error });
  }
});

// GET - Get comments for a specific post
router.get('/searchcomment/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments', error });
  }
});

// DELETE - Delete a comment by ID
router.delete('/deletecomment/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (comment) {
      res.status(200).json({ message: 'Comment deleted' });
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comment', error });
  }
});

module.exports = router;