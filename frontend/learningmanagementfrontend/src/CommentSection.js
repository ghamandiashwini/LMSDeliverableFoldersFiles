import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch comments for the post
  useEffect(() => {
    axios.get(`http://localhost:5000/api/comments/searchcomment/${postId}`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [postId]);

  // Handle comment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = { text: newComment, author, postId };

    axios.post('http://localhost:5000/api/comments/postcomment', commentData)
      .then(response => {
        setComments([...comments, response.data]);
        setNewComment('');
        setAuthor('');
      })
      .catch(error => console.error('Error posting comment:', error));
  };

  // Render comments and input form
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>
            <strong>{comment.author}:</strong> {comment.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
