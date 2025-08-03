import React, { useState } from 'react';
import './OtherUserProfile.css';
import Navbar from './Navbar';

const OtherUserProfilePage = () => {
  const [isFriend, setIsFriend] = useState(false); // State to track if the user is a friend

  const user = {
    name: 'NAME',
    username: 'User_Name',
    followers: 540,
    following: 310,
    profilePic: '/assets/profile1.png',
    posts: [
      '/assets/post1.jpg',
      '/assets/post2.jpg',
      '/assets/post3.jpg',
      '/assets/post4.jpg',
    ],
  };

  // Function to toggle friend status
  const handleFriendToggle = () => {
    setIsFriend(!isFriend);
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-pic-container">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
          </div>

          <div className="user-info">
            <h2>{user.name}</h2>

            <p className="username-line">@{user.username}</p>
            <button
              className={`add-friend-btn ${isFriend ? 'friend' : ''}`} // Change class based on isFriend state
              onClick={handleFriendToggle}
            >
              {isFriend ? 'Friends' : 'Add Friend'}
            </button>
            <div className="follow-stats">
              <span><strong>{user.followers}</strong> Followers</span>
              <span><strong>{user.following}</strong> Following</span>
            </div>
          </div>
        </div>

        <div className="posts-section">
          <h3>Posts</h3>
          <div className="posts-grid">
            {user.posts.map((post, index) => (
              <img key={index} src={post} alt={`Post ${index + 1}`} className="post-img" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherUserProfilePage;
