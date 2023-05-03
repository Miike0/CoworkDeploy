import React, { use, useEffect, useState } from "react";

import HomePage from "../Components/HomePage";
import LoginPage from "../Components/LoginPage";
import { onAuthStateChanged } from "../Utils/firebase";
import ChatbotComponent from '../Components/ChatBotComponent';
import axios from "axios";
import { API_URL } from "../Utils/Constants";

export default function index() {
  const [user, setUser] = useState(undefined);
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);

  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    console.log('datos de usuario',user);
    if(user){
      getUserInfo();
    }

  }, [user])
  
  const getUserInfo = async () => {
    console.log('aberts',user?.uid);
    if (user?.uid) {
      try {
        const res = await axios.get(API_URL + 'user?id=' + user?.uid);
        setUserData(res.data.data);
        

      } catch (err) {
        console.log('error papi',err);
      }
    }
  };
  return (
    <div>
      
    {user === null && <LoginPage/>} 
    {user && <HomePage userData={user}/>}
      <ChatbotComponent />
    
  </div>
  );
}
