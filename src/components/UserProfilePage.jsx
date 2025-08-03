import React, { useState } from 'react';
import './UserProfilePage.css';
import Navbar from './Navbar';

const UserProfilePage = () => {
  const [profilePic, setProfilePic] = useState('/assets/profile1.png');
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showStory, setShowStory] = useState(false);

  const user = {
    name: 'Anil Yadav',
    username: 'anilydv',
    followers: 120,
    following: 80,
    posts: Array(6).fill('/assets/post0.jpg'),
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleStoryPicChange = (e) => {
    const file = e.target.files[0];
    if (file && stories.length < 5) {
      const newStory = URL.createObjectURL(file);
      setStories([...stories, newStory]);
    } else if (stories.length >= 5) {
      alert('You can only add up to 5 stories!');
    }
  };

  const handleProfileClick = (e) => {
    // prevent clicking when clicking on the "+" button (story upload)
    if (e.target.classList.contains('plus-icon')) return;
    if (stories.length > 0) {
      setCurrentStoryIndex(0);
      setShowStory(true);
    }
  };

  const closeStory = () => setShowStory(false);

  const showNextStory = (e) => {
    e.stopPropagation();
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const showPrevStory = (e) => {
    e.stopPropagation();
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-pic-container" onClick={handleProfileClick}>
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <label htmlFor="story-upload" className="plus-icon">+</label>
            <input
              type="file"
              id="story-upload"
              accept="image/*"
              onChange={handleStoryPicChange}
              hidden
            />
          </div>

          <div className="user-info">
            <h2>{user.name}</h2>
            <p className="username-line">
              @{user.username}
              <label htmlFor="profile-upload" className="upload-btn-inline">Edit Profile</label>
            </p>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleProfilePicChange}
              hidden
            />
            <div className="follow-stats">
              <span><strong>{user.followers}</strong> Followers</span>
              <span><strong>{user.following}</strong> Following</span>
            </div>
          </div>
        </div>

        <div className="posts-section">
          <h3>Your Posts</h3>
          <div className="posts-grid">
            {user.posts.map((post, index) => (
              <img key={index} src={post} alt={`Post ${index + 1}`} className="post-img" />
            ))}
          </div>
        </div>

        {showStory && (
          <div className="story-modal" onClick={closeStory}>
            {currentStoryIndex > 0 && (
              <button className="story-nav left" onClick={showPrevStory}>&#8592;</button>
            )}
            <img
              src={stories[currentStoryIndex]}
              alt={`Story ${currentStoryIndex + 1}`}
              className="story-img-large"
            />
            {currentStoryIndex < stories.length - 1 && (
              <button className="story-nav right" onClick={showNextStory}>&#8594;</button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfilePage;
