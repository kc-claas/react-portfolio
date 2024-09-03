import { Link } from "react-router-dom"

function Resume() {
    return (
        <>
            <p className="resume-dl"><Link className='resume-dl' to={'/docs/resume.rtf'} download target="_blank">Download</Link> my resume</p>
            <h2>Frontend Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Backend Proficiencies</h2>
            <ul>
                <li>Node</li>
                <li>APIs</li>
                <li>Express</li>
                <li>PostgreSQL</li>
            </ul>
        </>
    )
}

export default Resume