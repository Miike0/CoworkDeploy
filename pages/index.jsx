import React, { use, useEffect, useState } from 'react';

import HomePage from '../Components/HomePage';
import LoginPage from '../Components/LoginPage';
import { onAuthStateChanged } from '../Utils/firebase';
import ChatbotComponent from '../Components/ChatBotComponent';
import axios from 'axios';
import { API_URL } from '../Utils/Constants';
import { useRouter } from 'next/router';

export default function index() {
  const [user, setUser] = useState(undefined);
  const [userData, setUserData] = useState(undefined);
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);

  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (user) {
      getUserInfo();
    }
    setIsLoading(false);
  }, [user]);

  useEffect(() => {
    if (userData && userData.college === '' || userData?.college === 'CUCEI' ) {
      router.push({
        pathname: '/skills',
        query: { id: user.uid },
      });
    }
  }, [userData]);
  const getUserInfo = async () => {
    if (user?.uid) {
      try {
        const res = await axios.get(API_URL + 'user?id=' + user?.uid);
        setUserData(res.data.data);
      } catch (err) {
        console.log('error', err);
      }
    }
  };
  return (
    <div>
      {user === null && <LoginPage />}
      {user && !loading && <HomePage userData={user} navbarData={userData}/>}
      <ChatbotComponent />
    </div>
  );
}
