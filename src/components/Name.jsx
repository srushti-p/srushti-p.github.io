import './Name.css'
import emailLogo from '/public/assets/emaillogo.png'
import linkedinLogo from '/public/assets/LinkedinLogo.png'
import xLogo from '/public/assets/XLogo.png'
import githubLogo from '/public/assets/GitHubLogo.png'
import resume from '/public/assets/SrushtiPatelResume.pdf'

function Name() {
  return (
    <div className="box">
      <div className="nameBox">
        <h1 className="name-title">Srushti Patel</h1>
        <div className="social-media-container">
          <a href="mailto:srushtipatel.hba2024@ivey.ca" rel="noopener noreferrer" aria-label="Email">
            <img src={emailLogo} className="social-media" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/srushti-p/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinLogo} className="social-media" alt="LinkedIn" />
          </a>
          <a href="https://x.com/srushti_p_" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src={xLogo} className="social-media" alt="X" />
          </a>
          <a href="https://github.com/srushti-p" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={githubLogo} className="social-media" alt="GitHub" />
          </a>
        </div>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="resume-button">Resume</button>
        </a>
        <p className="personal-description">Consultant focused on product strategy, integration, and analytics.</p>
      </div>
    </div>
  )
}

export default Name
