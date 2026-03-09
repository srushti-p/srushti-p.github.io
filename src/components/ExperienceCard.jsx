import './ExperienceCard.css'
import eyLogo from '/public/assets/EY.svg'
import tdLogo from '/public/assets/TD.svg'
import sonicallyLogo from '/public/assets/Sonically.png'
import shomigoLogo from '/public/assets/Shomigo.png'

const experiences = [
  {
    company: 'Ernst & Young (EY)',
    title: 'Consultant',
    date: 'Oct 2024 - Present',
    location: 'Canada',
    logo: eyLogo,
    bullets: [
      'Led the end-to-end integration of 300K investment accounts during a $5B acquisition by coordinating a 12-person cross-functional squad across product, development, operations, and compliance.',
      'Leveraged SQL analysis across 60+ retail and commercial investment products to identify product gaps and migration risks, informing executive decisions on positioning, user experience, and integration strategy.',
      'Orchestrated strategy workshops across business and technology teams to define a 12-month product and platform migration roadmap across three legacy systems.',
      'Resolved key integration blockers across systems by driving technology and business tradeoff decisions, enabling the successful migration of 60K active investing clients.',
    ],
  },
  {
    company: 'TD Canada Trust',
    title: 'Software Engineer Intern',
    date: 'Summer 2023',
    location: 'Canada',
    logo: tdLogo,
    bullets: [
      'Built and deployed a Python + AWS automation tool that eliminated 200+ hours of manual reporting work annually for frontline banking teams.',
      'Partnered with five business stakeholders to gather requirements and translate them into a reporting solution that reduced reporting time by 90% for end users.',
      'Developed a predictive analytics model using 10K+ operational data points to forecast outage incidents and optimize proactive resource allocation.',
    ],
  },
  {
    company: 'Sonical.ly',
    title: 'Project Manager Intern',
    date: 'Summer 2022',
    location: 'Canada',
    logo: sonicallyLogo,
    bullets: [
      'Conducted market and keyword analysis to design an SEO-driven user acquisition strategy, increasing app downloads by 6%.',
      'Led cross-functional execution of a content growth initiative across marketing, design, and copy teams, increasing website traffic by 18% in three weeks.',
    ],
  },
  {
    company: 'Shomigo',
    title: 'Business Analyst Intern',
    date: 'Summer 2022',
    location: 'Canada',
    logo: shomigoLogo,
    bullets: [
      'Executed cohort analysis on customer profiles to identify underserved market segments and synthesized findings into five strategic insights that shaped go-to-market decisions.',
      'Built a dynamic dashboard tracking vendor-level performance KPIs, enabling faster operational decision-making across the team.',
    ],
  },
]

export const ExperienceCard = () => {
  return (
    <>
      {experiences.map((experience) => (
        <div className="job-card" key={`${experience.company}-${experience.title}`}>
          <div className="job-header">
            <div className="left-text">
              <h3 className="company">{experience.company}</h3>
              <p className="job-title">{experience.title}</p>
              {experience.bullets.map((bullet) => (
                <p className="job-description" key={bullet}>• {bullet}</p>
              ))}
            </div>

            <div className="job-details">
              <span className="job-date">{experience.date}</span>
              <span className="job-location"><i>{experience.location}</i></span>
              {experience.logo ? (
                <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo" loading="lazy" />
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ExperienceCard
