import "./navbar.css"
import signup from "../signup/Signup"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/"><div className="nav-left">
        <span className='logo'><i className="fa-brands fa-neos"></i></span>
        <span className='title'>Influencer</span>
      </div></Link>

      <div className="nav-right">
        <ul className='nav-right-opts'>
            <li><a href="#">About</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Resources</a></li>
        </ul>

        <ul className="signin">
            <li><Link to="/signup/influencer">Sign Up</Link></li>
            <li><a href="#"><button>Get in Touch</button></a></li>
        </ul>
      </div>
    </div>
  )
}
