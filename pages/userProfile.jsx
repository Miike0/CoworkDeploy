import React from "react";
import NavBar from "../Components/NavBar";
import AboutMe from "../Components/AboutMe";
import Profile from "../Components/Profile";
import GeneralDataUP from "../Components/GeneralDataUP";
import MyProjectsUP from "../Components/MyProjectsUP";

export default function userProfile() {
    return (
        <div>
            <NavBar />
            <Profile/>
            <div className="information-container">
                <AboutMe/>
                <div className="information-container-right">
                    <GeneralDataUP />
                    <MyProjectsUP />
                </div>
            </div>
        </div>
    );
}