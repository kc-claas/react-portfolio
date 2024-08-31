import { Link } from "react-router-dom"


function Footer() {
    return (
        <ul>
            <li>
                <Link to="https://github.com/kc-claas">
                    Github
                </Link>
            </li>
            <li>
                <Link to="#">
                    LinkedIn
                </Link>
            </li>
            <li>
                <Link to="#">
                    Facebook
                </Link>
            </li>
        </ul>
    )
}

export default Footer