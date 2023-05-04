import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from '../Utils/Constants';
import NavBar from '../Components/NavBar';
import UserSettings from '../Components/UserSettings'
function Settings(props) {
  const [user, setUser] = useState();
  const [userID, setUserID] = useState();
  const [loading, isLoading] = useState(true);
  const getProject = async (id) => {
    await axios
      .get(API_URL + 'project', { params: { id } })
      .then((res) => setProject(res.data.data));
  };
  const getUser = async (id) => {
    await axios
      .get(API_URL + 'user', { params: { id } })
      .then((res) => setUser(res.data.data));
  };
  const [sendNotificationModalShown, setSendNotificationModalShown] =
    useState(false);

  useEffect(() => {
    let projectKey;
    let userKey;
    if (!props.router.query.id) userKey = sessionStorage.getItem('userID');
    else userKey = props.router.query.id;
    getUser(userKey);
    setUserID(userKey);
  }, [loading]);

  useEffect(() => {
    if (user && userID) isLoading(false);
  }, [user, userID]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <NavBar />
      <UserSettings/>
    </>
  );
}
export default withRouter(Settings);
