// PostPage.js
import React from 'react';
import CommentSection from './CommentSection';

const PostPage = ({ postId }) => {
  return (
    <div>
      <h1>Post Title</h1>
      <p>Post content here...</p>

      <CommentSection postId={postId} />
    </div>
  );
};

export default PostPage;