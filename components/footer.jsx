import { Link } from "react-router-dom"


function Footer() {
    return (
        <div className="container">
        <ul className="nav row text-center justify-content-center">
            <li className="nav-link col-1">
                <Link to="https://github.com/kc-claas">
                    Github
                </Link>
            </li>
            <li className="nav-link col-1">
                <Link to="https://github.com/kc-claas">
                    LinkedIn
                </Link>
            </li>
            <li className="nav-link col-1">
                <Link to="https://github.com/kc-claas">
                    Facebook
                </Link>
            </li>
        </ul>
        </div>
    )
}

export default Footer