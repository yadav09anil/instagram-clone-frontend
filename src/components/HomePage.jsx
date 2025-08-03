import React from 'react';
import Navbar from './Navbar';
import Story from './Story';
import Suggestion from './Suggestion';
import Post from './Post';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage-content">
        <div className="feed-section">
          <Story />
          <Post />
        </div>
        <div className="suggestion-section">
          <Suggestion />
        </div>
      </div>
    </>
  );
};

export default HomePage;
