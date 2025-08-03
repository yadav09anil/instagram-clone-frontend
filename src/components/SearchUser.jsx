import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './SearchUser.css';

const dummyUsers = [
  {
    name: 'Anil Yadav',
    username: 'anilydv',
    profilePic: '/assets/profile1.png',
  },
  {
    name: 'Meena Sharma',
    username: 'meenaxoxo',
    profilePic: '/assets/profile1.png',
  },
  {
    name: 'Rohit Singh',
    username: 'rohit_the_one',
    profilePic: '/assets/profile1.png',
  },
  {
    name: 'Rahul Verma',
    username: 'rahulvibes',
    profilePic: '/assets/profile1.png',
  },
];

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // for redirection

  const filteredUsers = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  const handleUserClick = (username) => {
    navigate(`/user/${username}`);
  };

  return (
    <>
      <Navbar />

      <div className="search-page">
        <h2 className="search-heading">Search Your Friend</h2>

        <input
          type="text"
          placeholder="Search by name or username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />

        {query && (
          <div className="search-results">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <div
                  key={index}
                  className="search-result-item"
                  onClick={() => handleUserClick(user.username)} // Navigate on click
                >
                  <img src={user.profilePic} alt={user.username} className="search-profile-pic" />
                  <div className="search-user-info">
                    <span className="search-name">{user.name}</span>
                    <span className="search-username">@{user.username}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-result">No users found.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
