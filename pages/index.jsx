import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import SeachFilters from "../Components/SeachFilters";
import ProjectCard from "../Components/ProjectCard";
import { Row } from "react-bootstrap";
import { API_URL } from "../Utils/Constants.js";
import HomePage from "../Components/HomePage";
import LoginPage from "../Components/LoginPage";
import { onAuthStateChanged } from "../Utils/firebase";



export default function index() {

  const [user, setuser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(setuser)

  }, []);

  return (
    <div>
      {
        user === null &&
        <LoginPage/>
      }
      {
        user &&
        <HomePage userData={user}/>
      }
    </div>)


}
