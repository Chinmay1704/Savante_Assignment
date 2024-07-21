import React from "react";
import "./home.css";
import home_img_1 from "/src/assets/home_1.jpg"

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="home-left-top">
          <h1>
            WE HARNESS THE POWER OF CREATORS TO DRIVE TRUE HUMAN INFLUENCE
          </h1>

          <p>
            We&apos;re Influencer, the originators of influencer marketing. A
            global agency, founded by creators.
          </p>
        </div>

        <div className="home-left-bottom">
          <div className="home-left-bottom-btn">
            <button className="brand"><a href="/">For Brands</a></button>
            <button className="influencer"><a href="/">For Creators</a></button>
          </div>

          <div className="home-left-bottom-text">
            <span className="partner-text">official Partners</span>

            <div className="home-left-bottom-logos">
              <span><i className="fa-brands fa-meta"></i>Meta</span>
              <span><i className="fa-brands fa-tiktok"></i>TikTok</span>
              <span><i className="fa-brands fa-youtube"></i>YouTube</span>
              <span><i className="fa-brands fa-twitch"></i>Twitch</span>
              <span><i className="fa-brands fa-snapchat"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-right">
        <img src={home_img_1} alt="" />
      </div>
    </div>
  );
}
