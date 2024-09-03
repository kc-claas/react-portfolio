import logo from '../assets/images/github-mark-white.png'
import { Link } from 'react-router-dom'

function Project({title, className, deployL, repoL, background}) {
    return (
        <section className={`col-10 col-md-5 card m-3 ${className}`}>
            <img src={background} alt={title} className='card-image'/>
            <Link to={deployL}>
                <h3 className="project-link">{title}</h3>
            </Link>
            <Link to={repoL}>
            <img className='logo' src={logo} alt='github logo'/>
            </Link>
        </section>
    )

}

export default Project