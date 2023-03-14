import React from "react";
import { withRouter } from 'next/router';

import NavBar from "../Components/NavBar";
function prueba(props) {
  return (
    <div>
      <NavBar />
      <div>
        <h1>{props.router.query.name}</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>{props.router.query.name}</h1>

        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
        <h1>dasd</h1>
      </div>
    </div>
  );
}

export default withRouter(prueba);