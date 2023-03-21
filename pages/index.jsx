import React, { useEffect, useState } from 'react';

import HomePage from '../Components/HomePage';
import LoginPage from '../Components/LoginPage';
import { onAuthStateChanged } from '../Utils/firebase';

export default function index() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  return <div>{user ? <HomePage userData={user} /> : <LoginPage />}</div>;
}
