import React from "react";
import "./home.css";
import home_img_1 from "/src/assets/home_1.jpg";
import work_img_1 from "/src/assets/home_2.jpg";
import work_img_2 from "/src/assets/home_3.jpg";
import work_img_3 from "/src/assets/home_4.jpg";
import work_img_4 from "/src/assets/home_5.jpg";

export default function Home() {
  return (
    <>
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
              <button className="brand">
                <a href="/">For Brands</a>
              </button>
              <button className="influencer">
                <a href="/">For Creators</a>
              </button>
            </div>

            <div className="home-left-bottom-text">
              <span className="partner-text">official Partners</span>

              <div className="home-left-bottom-logos">
                <span>
                  <i className="fa-brands fa-meta"></i>Meta
                </span>
                <span>
                  <i className="fa-brands fa-tiktok"></i>TikTok
                </span>
                <span>
                  <i className="fa-brands fa-youtube"></i>YouTube
                </span>
                <span>
                  <i className="fa-brands fa-twitch"></i>Twitch
                </span>
                <span>
                  <i className="fa-brands fa-snapchat"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-right">
          <img src={home_img_1} alt="" />
        </div>
      </div>

      <div className="work-container">
        <div className="work-container-title">
          <h3>Our Work</h3>

          <button>View all</button>
        </div>

        <div className="work-tiles">
          <div className="work-tiles-item">
            <div className="work-tiles-item-img">
              <img src={work_img_1} alt="" />
            </div>

            <div className="work-tiles-item-text">
              <h4>Costa</h4>
              <p>Hot takes on hot shakes</p>

              <div className="work-tiles-item-text-features">
                <div className="view">
                  <h3>3.5M</h3>
                  <span>views</span>
                </div>

                <div className="engagement">
                  <h3>2.14M</h3>
                  <span>engagement</span>
                </div>

                <div className="awareness">
                  <h3>+23P</h3>
                  <span>increase in awareness</span>
                </div>

                <div className="popularity">
                  <h3>+12PT</h3>
                  <span>
                    increase in Gen Z <b>very likely</b> to try
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="work-tiles-item">
            <div className="work-tiles-item-img">
              <img src={work_img_2} alt="" />
            </div>

            <div className="work-tiles-item-text">
              <h4>LEE KUM KEE</h4>
              <p>Flavour favours the brave</p>

              <div className="work-tiles-item-text-features">
                <div className="view">
                  <h3>13.5M</h3>
                  <span>views</span>
                </div>

                <div className="engagement">
                  <h3>2.14M</h3>
                  <span>engagement</span>
                </div>

                <div className="awareness">
                  <h3>+23P</h3>
                  <span>increase in product awareness</span>
                </div>

                <div className="popularity">
                  <h3>+21PTS</h3>
                  <span>increase in intent to try product</span>
                </div>
              </div>
            </div>
          </div>

          <div className="work-tiles-item">
            <div className="work-tiles-item-img">
              <img src={work_img_3} alt="" />
            </div>

            <div className="work-tiles-item-text">
              <h4>Cocal Cola</h4>
              <p>magical outage for coca cola</p>

              <div className="work-tiles-item-text-features">
                <div className="view">
                  <h3>120</h3>
                  <span>Creators</span>
                </div>

                <div className="engagement">
                  <h3>300+</h3>
                  <span>pieces of content</span>
                </div>

                <div className="awareness">
                  <h3>172M</h3>
                  <span>impressions</span>
                </div>

                <div className="popularity">
                  <h3>+50M</h3>
                  <span>Video views</span>
                </div>
              </div>
            </div>
          </div>

          <div className="work-tiles-item">
            <div className="work-tiles-item-img">
              <img src={work_img_4} alt="" />
            </div>

            <div className="work-tiles-item-text">
              <h4>Amazon</h4>
              <p>Gaming week 2023</p>

              <div className="work-tiles-item-text-features">
                <div className="view">
                  <h3>190K</h3>
                  <span>Audience size</span>
                </div>

                <div className="engagement">
                  <h3>2.7M</h3>
                  <span>Impressions</span>
                </div>

                <div className="awareness">
                  <h3>77.6K</h3>
                  <span>Engagement</span>
                </div>

                <div className="popularity">
                  <h3>13k+</h3>
                  <span>Link Clicks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="approach-container">
        
      </div>
    </>
  );
}
