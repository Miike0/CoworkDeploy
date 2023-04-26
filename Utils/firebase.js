// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import axios from 'axios';
import { API_URL } from '../Utils/Constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhdTxM5P__a7nkIgXvflU90A7EFSCc07E',
  authDomain: 'coworkv2.firebaseapp.com',
  databaseURL: 'https://coworkv2-default-rtdb.firebaseio.com',
  projectId: 'coworkv2',
  storageBucket: 'coworkv2.appspot.com',
  messagingSenderId: '838600891436',
  appId: '1:838600891436:web:ff11737ad8c1345f0d0589',
  measurementId: 'G-BY014MEZT1',
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth(app);

const mapUser = (user) => {
  if (user) {
    const { displayName, email, photoURL, uid } = user;
    const mappedUser = {
      uid,
      avatar: photoURL,
      username: displayName,
      email: email,
    };
    storeUserDB(user, mappedUser);
    return mappedUser;
  } else return null;
};
export const registerNewUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return mapUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const signInWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return mapUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      return mapUser(result.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const loginWithFacebook = () => {
  const facebookProvider = new FacebookAuthProvider();
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      return mapUser(result.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
};
export const logOut = () => {
  auth.signOut();
};

export const onAuthStateChanged = (onChange) => {
  return auth.onAuthStateChanged((user) => {
    const mappedUser = mapUser(user);
    onChange(mappedUser);
  });
};

const registerInDB = async (user, mappedUser) => {
  await axios
    .post(API_URL + 'user/add', {
      id: user.uid,
      ...mappedUser,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      if (err.message === 'Request failed with status code 404') {
        registerInDB(user);
      }
    });
};

const storeUserDB = (user, mappedUser) => {
  const checkExists = async (user) => {
    await axios
      .get(API_URL + 'user?id=' + user.uid)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.message === 'Request failed with status code 404') {
          registerInDB(user, mappedUser);
        }
      });
  };

  checkExists(user);
};
