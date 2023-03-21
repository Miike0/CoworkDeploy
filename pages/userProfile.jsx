import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import NavBar from '../Components/NavBar';
import AboutMe from '../Components/AboutMe';
import Profile from '../Components/Profile';
import GeneralDataUP from '../Components/GeneralDataUP';
import MyProjectsUP from '../Components/MyProjectsUP';

import { API_URL } from '../Utils/Constants';

export default function userProfile() {
  const router = useRouter();
  const [id, setID] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      console.log(id); // add this line to check the value of id
      if (id) {
        try {
          const res = await axios.get(API_URL + 'user?id=' + id);
          setUser(res.data.data);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
    };
    setIsLoading(true);
    getUserInfo();
  }, [id]);

  useEffect(() => {
    if (router.isReady && !id) {
      setID(router.query.id || null);
    }
  }, [router.isReady]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <NavBar user={user} />
          <Profile user={user} />
          <div className="information-container">
            <AboutMe user={user} />
            <div className="information-container-right">
              <GeneralDataUP user={user} />
              {user.projects?.length > 0 && (
                <MyProjectsUP user={user} userID={id} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
