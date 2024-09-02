import Project from './project'

function Portfolio() {
    return (
        <>
            <h2>Projects</h2>
            <div className='row justify-content-evenly'>
                <Project title={'Weather Dashboard'} className={'weather'} deployL={'https://weather-dashboard-s3ye.onrender.com/'} repoL={'https://github.com/kc-claas/weather-dashboard'}/>
                <Project title={'Readme Generator'} className={'readme'} deployL={'https://drive.google.com/file/d/1fgUILvxERCnN773_eP8ytQrDBr5sVM-j/view'} repoL={'https://github.com/kc-claas/README-generator'}/>
                <Project title={'Recipe Vault'} className={'recipe'} deployL={'https://kc-claas.github.io/recipe-vault/'} repoL={'https://github.com/kc-claas/recipe-vault'}/>
                <Project title={'Employee Tracker'} className={'employee'} deployL={'https://drive.google.com/file/d/1QzCXGhejaHi7_2Jrde4rVLTDpMZyRHjN/view'} repoL={'https://github.com/kc-claas/employee-tracker?tab=readme-ov-file'}/>
                <Project title={'Vehicle Builder'} className={'vehicle'} deployL={'https://drive.google.com/file/d/1u_h3xaEnTCLpOOQ32lAYL7x-p051b-Jy/view'} repoL={'https://github.com/kc-claas/vehicle-builder?tab=readme-ov-file'}/>
                <Project title={'RPS Game'} className={'rps'} deployL={'https://kc-claas.github.io/rps-miniproject/'} repoL={'https://github.com/kc-claas/rps-miniproject'}/>
            </div>
        </>
    )
}

export default Portfolio