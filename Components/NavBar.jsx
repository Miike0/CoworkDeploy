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
import { logOut } from '../Utils/firebase';
import { useRouter } from 'next/router';
import CreateNewProject from './CreateNewProject';

export default function NavBar({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  console.log('data', JSON.parse(localStorage.getItem('user')));
  const userdata = user || JSON.parse(localStorage.getItem('user'));
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
          <HomeIcon className="icon" sx={{ fontSize: 40 }} />
          <WorkIcon className="icon" sx={{ fontSize: 40 }} />
          <NotificationsIcon className="icon" sx={{ fontSize: 40 }} />
          <CreateNewProject/>
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
              {userdata?.username || 'Unknow User'}
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
                query: { id: userdata.uid },
              });
            }}
          >
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => logOut()}>Logout</MenuItem>
        </Menu>
      </Nav>
    </Navbar>
  );
}
