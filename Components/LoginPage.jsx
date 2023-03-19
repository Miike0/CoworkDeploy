import Image from "next/image";
import React from "react";
import LoginForm from "./loginForm";
import HomeHeader from "./HomeHeader";

export default function LoginPage() {
  return (
    <div>
      <video
        className="backgroundVideo"
        loop
        src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2F200314%20_Work%20Life_02_%204k_017.mp4?alt=media&token=fbfe0fd8-19d4-4ba4-a1e5-dadd67e1f170"
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




