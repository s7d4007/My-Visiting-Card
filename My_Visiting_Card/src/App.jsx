import { useState } from 'react'
import './App.css'
import ProfileCard from "./ProfileCard";

function App() {
  const handleContactClick = () => {
    window.open("https://www.linkedin.com/in/souvik-dutta-244304307/", "_blank");
  };

  return <ProfileCard onContactClick={handleContactClick} />;
}

export default App;