import React, { useEffect, useState } from 'react';

import HomePage from '../Components/HomePage';
import LoginPage from '../Components/LoginPage';
import { onAuthStateChanged } from '../Utils/firebase';
import ChatbotComponent from '../Components/ChatBotComponent';

export default function index() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  return (
    <div>
      {user ? <HomePage userData={user} /> : <LoginPage />}
      <ChatbotComponent />
    </div>
  );
}
