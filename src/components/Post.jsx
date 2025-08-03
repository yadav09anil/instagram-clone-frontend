import React, { useState } from 'react';
import './Post.css';
import { FaHeart, FaRegHeart, FaRegCommentDots, FaPaperPlane, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const dummyPosts = [
    {
      profilePic: '/assets/profile1.png',
      name: 'Anil Yadav',
      username: 'anilydv',
      image: '/assets/post1.jpg'
    },
    {
      profilePic: '/assets/profile6.jpg',
      name: 'Meena Sharma',
      username: 'meenaxoxo',
      image: '/assets/post0.jpg'
    },
    {
      profilePic: '/assets/profile5.jpg',
      name: 'Rohit Singh',
      username: 'rohit_the_one',
      image: '/assets/post3.jpg'
    }
  ];

  return (
    <>
      {dummyPosts.map((post, index) => (
        <SinglePost key={index} post={post} />
      ))}
    </>
  );
};

const SinglePost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [showHeart, setShowHeart] = useState(false); // ❤️

  const navigate = useNavigate();

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleDoubleClick = () => {
    if (!liked) setLiked(true);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 800);
  };

  const handleCommentIconClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newComment = {
        name: post.name,
        profilePic: post.profilePic,
        text: input.trim()
      };
      setComments([...comments, newComment]);
      setInput('');
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleEditComment = (index) => {
    setEditingIndex(index);
    setEditText(comments[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].text = editText;
    setComments(updatedComments);
    setEditingIndex(null);
  };

  const goToProfile = () => {
    navigate(`/user/${post.username}`);
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-profile-pic" src={post.profilePic} alt="profile" />
        <div className="post-user-info" onClick={goToProfile} style={{ cursor: 'pointer' }}>
          <span className="post-name">{post.name}</span>
          <span className="post-username">@{post.username}</span>
        </div>
      </div>

      <div className="post-image-container" onDoubleClick={handleDoubleClick}>
        <img className="post-image" src={post.image} alt="post" />
        {showHeart && <FaHeart className="double-tap-heart" />}
      </div>

      <div className="post-actions">
        <button className="like-button" onClick={handleLike}>
          {liked ? <FaHeart className="heart liked" /> : <FaRegHeart className="heart" />}
        </button>
        <button className="comment-icon-button" onClick={handleCommentIconClick}>
          <FaRegCommentDots className="comment-icon" />
        </button>
      </div>

      {showCommentInput && (
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="send-icon-button">
            <FaPaperPlane className="send-icon" />
          </button>
        </form>
      )}

      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <img className="comment-profile-pic" src={comment.profilePic} alt="profile" />
            <div className="comment-content">
              <span className="comment-name">{comment.name}</span>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                  />
                  <button onClick={() => handleSaveEdit(index)} className="save-button">
                    <FaCheck />
                  </button>
                </>
              ) : (
                <span className="comment-text">{comment.text}</span>
              )}
            </div>

            <div className="comment-actions">
              {editingIndex !== index && (
                <>
                  <button onClick={() => handleEditComment(index)} className="edit-button">Edit</button>
                  <button onClick={() => handleDeleteComment(index)} className="delete-button">Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Post;
