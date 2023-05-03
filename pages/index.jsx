import React, { use, useEffect, useState } from "react";

import HomePage from "../Components/HomePage";
import LoginPage from "../Components/LoginPage";
import { onAuthStateChanged } from "../Utils/firebase";
import ChatbotComponent from '../Components/ChatBotComponent';

export default function index() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(setUser);

  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  

  return (
    <div>
      
    {user === null && <LoginPage/>} 
    {user && <HomePage userData={user}/>}
      <ChatbotComponent />
    
  </div>
  );
}
