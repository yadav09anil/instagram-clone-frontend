import React, { useRef } from 'react';
import './Story.css';
import { FaChevronRight } from 'react-icons/fa'; 

const stories = [
  { username: 'Anil', image: '/assets/profile1.png' },
  { username: 'Mohit', image: '/assets/profile2.jpg' },
  { username: 'Rohit', image: '/assets/profile3.jpg' },
  { username: 'Anurag', image: '/assets/profile4.jpg' },
  { username: 'Abhishek', image: '/assets/profile5.jpg' },
  { username: 'Shivam', image: '/assets/profile6.jpg' },
  { username: 'Prashant', image: '/assets/profile7.jpg' },
  { username: 'Ravi', image: '/assets/profile8.jpg' },
  { username: 'Shivam', image: '/assets/profile9.jpg' },
  { username: 'Sachin', image: '/assets/profile10.jpg' },
];

const Story = () => {
  const storyRef = useRef(null);

  const handleScrollRight = () => {
    storyRef.current.scrollBy({ left: 200, behavior: 'smooth' }); 
  };

  return (
    <div className="story-wrapper">
      <div className="story-container" ref={storyRef}>
        {stories.map((story, index) => (
          <div className="story" key={index}>
            <div className="story-img-wrapper">
              <img src={story.image} alt={story.username} />
            </div>
            <p className="story-username">{story.username}</p>
          </div>
        ))}
      </div>

      <button className="scroll-button" onClick={handleScrollRight}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Story;
