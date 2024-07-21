import React from "react";
import "./home.css";
import home_img_1 from "/src/assets/home_1.jpg";
import work_img_1 from "/src/assets/home_2.jpg";
import work_img_2 from "/src/assets/home_3.jpg";
import work_img_3 from "/src/assets/home_4.jpg";
import work_img_4 from "/src/assets/home_5.jpg";
import approach_img_1 from "/src/assets/home_6.jpg";
import approach_img_2 from "/src/assets/home_7.jpg";
import approach_img_3 from "/src/assets/home_8.jpg";
import team_img_1 from "/src/assets/creator_1.jpg";
import team_img_2 from "/src/assets/creator_2.jpg";
import team_img_3 from "/src/assets/cvo.jpg";
import team_img_4 from "/src/assets/group_director.jpg";
import team_img_5 from "/src/assets/president.jpg";

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
        <div className="approach-title">
          <h2>Our Approach</h2>
        </div>

        <div className="approach-content">
          <div className="approach-content-item">
            <div className="approach-content-item-left">
              <span>ideas</span>

              <h3>WHERE CREATIVITY MEETS DATA, MAGIC HAPPENS</h3>

              <p>
                Imagine the boldness of creativity fuelled by the precision of
                analytics, guided by your brand&apos;s unique purpose —
                that&apos;s the Influencer way. We design impactful campaigns
                that captivate attention, inspire action, and boost CTR, views,
                and conversions. Bringing your bespoke creative strategy to life
                for game-changing commercial performance.
              </p>

              <button className="learn-more">Learn More</button>
            </div>

            <div className="approach-content-item-right">
              <img src={approach_img_1} alt="" />
            </div>
          </div>

          <div className="approach-content-item">
            <div className="approach-content-item-right">
              <img src={approach_img_2} alt="" />
            </div>

            <div className="approach-content-item-left">
              <span>EXECUTIONAL EXCELLENCE</span>

              <h3>AGILITY, TRUST AND EFFECTIVENESS</h3>

              <p>
                We&apos;re rewriting the narrative of influencer marketing by
                uniting your brand with passionate creators who align with your
                purpose. As trusted partners and guardians of your brand we
                build and execute campaigns across every timeline, scope and
                requirement.
              </p>

              <button className="learn-more">Learn More</button>
            </div>
          </div>

          <div className="approach-content-item">
            <div className="approach-content-item-left">
              <span>MEASUREMENT</span>

              <h3>TRANSFORMING DATA INTO GROWTH</h3>

              <p>
                At Influencer, we don&apos;t just reference data — we bring it
                to life. Our Influencer Marketing Platform and Impact Studio
                help us transform data into actionable strategies, morphing
                followers into dedicated customers. We work with you to
                determine which KPI&apos;s matter most and refocus your efforts
                there.
              </p>

              <button className="learn-more">Learn More</button>
            </div>

            <div className="approach-content-item-right">
              <img src={approach_img_3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div className="team-heading">
          <h2>our Team</h2>

          <p>
            Meet the powerhouse of Influencer: a dynamic team of dreamers,
            makers, and game changers, reshaping the future of marketing. With a
            collective passion and unique expertise, our people turn data into
            action, creativity into impact, and new ideas into new realities.
          </p>

          <button>About Us</button>
        </div>

        <div className="team-photo">
          <img src={team_img_1} alt="" />
          <img src={team_img_2} alt="" />
          <img src={team_img_3} alt="" />
          <img src={team_img_4} alt="" />
          <img src={team_img_5} alt="" />
        </div>
      </div>

      <div className="contact">
        <h2>Ready to make waves?</h2>

        <button>Let&apos;s Talk</button>
      </div>

      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo">
            <i className="fa-brands fa-neos"></i>
          </span>
          <span className="title">Influencer</span>
        </div>

        <div className="footer-content">
          <div className="footer-item">
            <ul>
              <li className="head">Product</li>
              <li>Brands</li>
              <li>Measurement</li>
              <li>Creators</li>
            </ul>
          </div>

          <div className="footer-item">
            <ul>
              <li className="head">Company</li>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-item">
            <ul>
              <li className="head">Resources</li>
              <li>Work</li>
              <li>Resources</li>
            </ul>
          </div>

          <div className="footer-item">
            <ul>
              <li className="head">Social</li>
              <li>Instagram</li>
              <li>X</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>TikTok</li>
              <li>YouTube</li>
            </ul>
          </div>

          <div className="footer-item">
            <ul>
              <li className="head">Legal</li>
              <li>Platform terms</li>
              <li>Privacy</li>
              <li>LinkedIn</li>
              <li>Creator Team UK</li>
              <li>Creator Team US</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
