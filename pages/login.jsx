import Image from "next/image";
import React from "react";
import LoginForm from "../Components/loginForm";
import HomeHeader from "../Components/HomeHeader";

function login() {
  return (
    <div>
      <video
        className="backgroundVideo"
        loop
        src="https://firebasestorage.googleapis.com/v0/b/todoapp-ee3b8.appspot.com/o/resources%2FL%C3%83%C2%A1piz%20-%208256.mp4?alt=media&token=7397d1e2-3e04-4a46-9279-43a088219d27"
        autoPlay={true}
        muted
      />
      <div className="backdrop">
        <HomeHeader />
        <div className="landingBody">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}



export default login;
