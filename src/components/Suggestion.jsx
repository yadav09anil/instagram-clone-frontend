import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Suggestion.css';

const friends = [
  {
    name: 'Preet Singh',
    username: 'singh_preet',
    profilePic: '/assets/profile14.jpg',
  },
  {
    name: 'Diljot',
    username: 'singh_jot',
    profilePic: '/assets/profile13.jpg',
  },
  {
    name: 'Rohit',
    username: 'rohit_s',
    profilePic: '/assets/profile11.jpg',
  },
  {
    name: 'Himanshu',
    username: 'himanshu_v',
    profilePic: '/assets/profile13.jpg',
  },
  {
    name: 'Nitish kumar',
    username: 'nitish_k',
    profilePic: '/assets/profile10.jpg',
  },
  {
    name: 'Arjun Sharma',
    username: 'arjun_s',
    profilePic: '/assets/profile1.png',
  },
];

const Suggestion = () => {
  const navigate = useNavigate();
  const [addedFriends, setAddedFriends] = useState([]);

  const handleProfileClick = (username) => {
    navigate(`/user/${username}`);
  };

  const handleAddFriend = (e, username) => {
    e.stopPropagation(); // prevent navigation
    if (addedFriends.includes(username)) {
      // Remove from added friends
      setAddedFriends(addedFriends.filter((u) => u !== username));
    } else {
      // Add to added friends
      setAddedFriends([...addedFriends, username]);
    }
  };

  return (
    <div className="suggestion-container">
      <h3>Suggested for you</h3>
      {friends.map((friend, index) => {
        const isFriendAdded = addedFriends.includes(friend.username);
        return (
          <div
            className="suggestion-card"
            key={index}
            onClick={() => handleProfileClick(friend.username)}
            style={{ cursor: 'pointer' }}
          >
            <div className="suggestion-info">
              <img
                src={friend.profilePic}
                alt={friend.name}
                className="suggestion-pic"
              />
              <div className="suggestion-text">
                <span className="suggestion-name">{friend.name}</span>
                <span className="suggestion-username">@{friend.username}</span>
              </div>
            </div>
            <button
              className={`suggestion-btn ${isFriendAdded ? 'added' : ''}`}
              onClick={(e) => handleAddFriend(e, friend.username)}
            >
              {isFriendAdded ? 'Friend Added' : 'Add Friend'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestion;
