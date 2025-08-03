// ImagePost.js
import React, { useState } from 'react';
import './CreatePostPage.css';
import Navbar from './Navbar'; // Importing the exported Navbar component

const ImagePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handlePost = () => {
    if (image && caption.trim()) {
      setSuccessMessage('✅ Image posted successfully!');
      setImage(null);
      setCaption('');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      alert('Please add both an image and caption.');
    }
  };

  return (
    <>
      <Navbar /> {/* Navbar being used here */}
      <div className="image-post-container">
        <h2 className="heading">Create a Post</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />

        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a caption..."
          className="caption-input"
          rows="3"
        />

        <button onClick={handlePost} className="post-button">
          Post
        </button>

        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}
      </div>
    </>
  );
};

export default ImagePost;
