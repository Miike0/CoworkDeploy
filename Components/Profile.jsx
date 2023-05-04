import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Avatar from '@mui/material/Avatar';
import { auth } from '../Utils/firebase';
import { useRouter } from 'next/router';


function Profile({ user }) {
  const router = useRouter();

  return (
    <div className="profile-container">
      <img
        src="https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background profile"
        className="profile-bg-img"
      />
      <Container className="profile-data-container">
        <Row className="profile-about">
          <Col md="auto" className="profile-about-avatar">
            <Avatar
              alt={user.username}
              sx={{ width: 160, height: 160 }}
              src={user.avatar}
              className="profile-about-avatar-img"
            ></Avatar>
          </Col>
          <Col xs={9} className="profile-about-me">
            <span className="profile-about-me-name">{user.firstname ? `${user.firstname} ${user.lastname}`:user.username}</span>
            <p className="profile-about-me-description">
              {user.aboutMe || 'Este usuario aún no tiene descripción'}
            </p>
          </Col>
          <Col md="auto" className="profile-actions">
            <Col md="4" className="profile-actions-more">
              {user?.email === auth.currentUser.email && (
                <Button
                  variant="text"
                  className="profile-actions-more-btn button"
                >
                  <SettingsIcon 
                    fontSize="medium" 
                    onClick={
                      () => {
                        sessionStorage.setItem('userID', auth.currentUser.uid);
                        router.push(
                          {
                            pathname: '/Settings',
                            query: { id: auth.currentUser.uid },
                          },
                          
                        );
                      }
                    }
                  />
                </Button>
              )}
            </Col>
            {user.email != auth.currentUser.email && (
              <div className='d-flex justify-content-around'>
{/*                 <Col md="5" className="profile-actions-message">
                  <Button
                    variant="outlined"
                    className="profile-actions-message-btn button"
                  >
                    Mensaje
                  </Button>
                </Col>
                <Col md="5" className="profile-actions-follow">
                  <Button
                    variant="contained"
                    startIcon={<AddRoundedIcon />}
                    className="profile-actions-follow-btn button"
                  >
                    Seguir
                  </Button>
                </Col> */}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
