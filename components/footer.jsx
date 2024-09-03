import { Link } from "react-router-dom"
import fblogo from "../assets/images/fblogo.png"
import lilogo from "../assets/images/linkedinlogo.png"
import ghlogo from "../assets/images/github-mark-white.png"

function Footer() {
    return (
        <div className="container">
        <ul className="nav row text-center justify-content-center">
            <li className="nav-link col-1">
                <Link to="https://github.com/kc-claas">
                    <img src={ghlogo} className='footer-icon' alt="github"/>
                </Link>
            </li>
            <li className="nav-link col-1">
                <Link to="https://github.com/kc-claas">
                    <img src={lilogo} className='footer-icon' alt="linkedin"/>
                </Link>
            </li>
            <li className="nav-link col-1">
                <Link to="https://github.com/kc-claas">
                    <img src={fblogo} className='footer-icon' alt="facebook"/>
                </Link>
            </li>
        </ul>
        </div>
    )
}

export default Footer