import React,{ useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {

  const navigate = useNavigate();
  const location = useLocation();
  const showInfluencerForm = location.pathname.includes('influencer')

  useEffect(() =>{
    if(location.pathname === '/signup'){
      navigate('/signup/influencer')
    }
  }, [location.pathname, navigate])

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="switch-btn">
          <button
            className={showInfluencerForm ? "active" : ""}
            onClick={() => {
              navigate("/signup/influencer");
            }}
          >
            Influencer
          </button>
          <button
            className={!showInfluencerForm ? "active" : ""}
            onClick={() => {
              navigate("/signup/brand")
            }}
          >
            Brand
          </button>
        </div>
        {showInfluencerForm ? (
          <div className="influ-sign-up">
            <h4>Influencer&apos;s Login</h4>
            <form className="influ-form" action="">
              <input
                type="text"
                name="influ-name"
                id="influ-name"
                required
                placeholder="Put Your Name"
              />
              <input
                type="text"
                name="influ-insta"
                id="influ-insta"
                required
                placeholder="Put Your Insta ID"
              />
              <select name="content">
                <option value="content-type">select your content Type</option>
                <option value="content-type">Technology</option>
                <option value="content-type">Fashion</option>
                <option value="content-type">Food and Drink</option>
                <option value="content-type">Gaming</option>
                <option value="content-type">Sports</option>
              </select>
              <input
                type="text"
                name="influ-follo-cnt"
                id="influ-follo-cnt"
                placeholder="Your Follower count"
              />
              <textarea
                name="aud-desc"
                cols={35}
                rows={6}
                placeholder="The majority of my audience consists of women aged 18-34, primarily from New York City, USA. My niche focuses on sustainable fashion and beauty."
              ></textarea>

              <button type="submit">Sign Up</button>
            </form>
          </div>
        ) : (
          <div className="influ-sign-up">
            <h4>Brand&apos;s Login</h4>
            <form className="influ-form" action="">
              <input
                type="text"
                name="brand-name"
                id="brand-name"
                required
                placeholder="Put Your Company Name"
              />
              <input
                type="text"
                name="brand-website"
                id="brand-website"
                required
                placeholder="Put Your website"
              />
              <select name="content">
                <option value="content-type">
                  select your Company industry
                </option>
                <option value="content-type">Technology</option>
                <option value="content-type">Fashion</option>
                <option value="content-type">Food and Drink</option>
                <option value="content-type">Gaming</option>
                <option value="content-type">Sports</option>
              </select>

              <select name="cmp-size">
                <option value="content-type">select your Company size</option>
                <option value="content-type">Startup</option>
                <option value="content-type">Small</option>
                <option value="content-type">Mid</option>
                <option value="content-type">Large</option>
              </select>

              <input
                type="text"
                name="brand-insta"
                id="brand-insta"
                placeholder="Put Your Insta Handle"
              />

              <textarea
                name="aud-desc"
                cols={35}
                rows={14}
                placeholder="Our brand, Acme Fashion, is dedicated to creating stylish, sustainable clothing for modern women. We believe in eco-friendly practices and ethical production, ensuring that our products not only look good but also do good. Our core values include sustainability, transparency, and quality craftsmanship. Our target market consists of women aged 18-35 who are conscious about the environment and seek fashionable yet sustainable wardrobe options."
              ></textarea>

              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
