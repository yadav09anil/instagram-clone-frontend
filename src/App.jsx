import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import Signup from "./components/SignupPage";
import Forgot from "./components/ForgotPage";
import HomePage from "./components/HomePage";
import SearchUser from "./components/SearchUser";
import UserProfilePage from "./components/UserProfilePage";
import OtherUserProfile from './components/OtherUserProfile';
import CreatePostPage from "./components/CreatePostPage";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchUser />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/user/:username" element={<OtherUserProfile />} />
        <Route path="/create" element={<CreatePostPage />} />
    
       
      </Routes>
    </Router>
  );
}

export default App;
