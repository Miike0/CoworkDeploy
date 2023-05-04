import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { auth, logOut } from '../Utils/firebase';
import { useRouter } from 'next/router';
import CreateNewProject from './CreateNewProject';
import UserAvatar from './UserAvatar';
import { Badge, Divider, Popover } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { API_URL } from '../Utils/Constants';

export default function NavBar({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifications, setnotifications] = React.useState(null);
  const [userNotifications, setUserNotifications] = React.useState([]);
  const open = Boolean(anchorEl);
  const openNoti = Boolean(notifications);
  const NotificationMenuStyle = {
    backgroundColor: '#545454',
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickNoti = (event) => {
    setnotifications(event.currentTarget);
  };
  const handleCloseNoti = () => {
    setnotifications(null);
  };
  useEffect(() => {
    getNotifications();
    /*     const interval = setInterval(() => {
      getNotifications();
    }, 600000000000000); */
    /*     return () => clearInterval(interval); */
  }, []);

  const getNotifications = async () => {
    await axios
      .get(API_URL + 'notifications?id=' + auth.currentUser.uid)
      .then((res) => {
        setUserNotifications(res.data.notifications);
      });
  };
  const router = useRouter();
  const userdata = JSON.parse(localStorage.getItem('userdata')) || user;
  return (
    <Navbar collapseOnSelect expand="lg" className="navigation-Bar">
      <Navbar.Brand href="#home" className="navBrand">
        <img
          className="navbarLogo"
          src="https://cdn.discordapp.com/attachments/408479278175485952/1026945474441261187/blueSymbol.png"
          alt=""
        />
      </Navbar.Brand>

      <Nav
        className="ms-lg-auto me-lg-4 ms-md-0 me-md-0 my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <div className="d-flex flex-row justify-content-around ">
          <HomeIcon onClick={()=> router.push('/')} className="icon" sx={{ fontSize: 40 }} />
          <WorkIcon className="icon" sx={{ fontSize: 40 }} />
          <div>
            <Badge badgeContent={userNotifications?.length} color="primary">
              <NotificationsIcon
                className="icon"
                sx={{ fontSize: 40 }}
                onClick={handleClickNoti}
              />
            </Badge>
            <Popover
              id={1}
              open={openNoti}
              anchorEl={notifications}
              onClose={handleCloseNoti}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <div
                className="d-flex flex-column"
                style={{ backgroundColor: '#212121' }}
              >
                <div>
                  <h3
                    className="me-auto ms-auto mt-2 pe-4"
                    style={{ color: '#dddddd' }}
                  >
                    {'Notificaciones'}
                  </h3>
                  <hr style={{ borderColor: '#dddddd' }} />
                </div>
                {userNotifications?.length ? (
                  userNotifications?.map((notification) => {
                    return (
                      <section>
                        <div className="d-flex flex-column justify-content-center align-items-center me-4">
                          <UserAvatar
                            name={notification.userName}
                            image={notification.userImage}
                          />
                          <span
                            style={{
                              color: '#dddddd',
                              marginTop: '0.1rem',
                            }}
                            className="ms-4"
                          >
                            {`Quiere Unirse a tu Proyecto `}
                          </span>
                          <strong
                            style={{
                              color: '#dddddd',
                            }}
                            className="ms-4 mb-2"
                          >
                            {notification.projectName}
                          </strong>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                          <Button
                            style={{
                              backgroundColor: 'green',
                              border: 'green',
                            }}
                            className="me-2"
                            onClick={async () => {
                              await axios.post(API_URL + 'project/addMember', {
                                project: notification.project,
                                member: notification.user,
                              });
                              await axios.delete(API_URL + 'notifications', {
                                data: {
                                  user: auth.currentUser.uid,
                                  notifUser: notification.user,
                                  project: notification.project,
                                },
                              });
                              getNotifications();
                            }}
                          >
                            {'Aceptar'}
                          </Button>
                          <Button
                            style={{ backgroundColor: 'red', border: 'red' }}
                            onClick={async () => {
                              await axios.delete(API_URL + 'notifications', {
                                data: {
                                  user: auth.currentUser.uid,
                                  notifUser: notification.user,
                                  project: notification.project,
                                },
                              });
                              getNotifications();
                            }}
                          >
                            {'Rechazar'}
                          </Button>
                        </div>
                        <hr style={{ borderColor: '#dddddd' }} />
                      </section>
                    );
                  })
                ) : (
                  <span
                    style={{
                      color: '#dddddd',
                      marginTop: '0.1rem',
                    }}
                    className="mx-2 mb-2"
                  >
                    {`No hay notificaciones `}
                  </span>
                )}
              </div>
            </Popover>
          </div>

          <CreateNewProject />
        </div>
      </Nav>
      <Nav>
        <Button
          className="navbutton"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <div className="d-flex flex-row align-items-center">
            <Avatar alt="user img" src={userdata?.avatar || null} />
            <h5 className="d-none d-xl-block ms-xl-2 me-xl-4 mt-2 ">
              {`${userdata.firstname} ${userdata.lastname}` ||
                userdata?.username}
            </h5>
          </div>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            onClick={() => {
              router.push({
                pathname: '/userProfile',
                query: { id: auth.currentUser.uid },
              })
            }}
          >
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem
            onClick={() => {
              router.push('/')
              logOut();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Nav>
    </Navbar>
  );
}
