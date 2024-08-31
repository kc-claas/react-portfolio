import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const currentPage = useLocation().pathname

    return (
        <ul>
            <li>
                <Link to='/' className={currentPage === '/'? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li>
                <Link to='/portfolio' className={currentPage === '/portfolio'? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to='/contact' className={currentPage === '/contact'? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
            <li>
                <Link to='/resume' className={currentPage === '/resume'? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>
        </ul>
        
    )
}


export default Navbar