import './ExperienceCard.css'

const experiences = [
  {
    company: 'Ernst & Young (EY)',
    title: 'Consultant',
    date: 'Oct 2024 - Present',
    location: 'Canada',
    logo: 'https://logo.clearbit.com/ey.com',
    bullets: [
      'Led end-to-end migration planning and execution for 300K investment accounts in a ~$5B bank acquisition, aligning product, engineering, operations, and compliance teams.',
      'Used SQL to evaluate 70+ retail and commercial investment products, identifying feature gaps that informed integration and customer migration decisions.',
      'Facilitated cross-functional strategy sessions and resolved critical blockers across three legacy systems to support a 12-month migration roadmap and 60K client transition.',
    ],
  },
  {
    company: 'TD Canada Trust',
    title: 'Software Engineer Intern',
    date: 'Summer 2023',
    location: 'Canada',
    logo: 'https://logo.clearbit.com/td.com',
    bullets: [
      'Built an automated reporting tool with Python and AWS that reduced manual reporting effort by 200+ hours annually.',
      'Partnered with stakeholders to define requirements and deliver a solution that accelerated critical reporting tasks by 90%.',
      'Developed a predictive model on 10,000+ data points to forecast outage incidents and improve resource allocation.',
    ],
  },
  {
    company: 'Sonical.ly',
    title: 'Project Manager Intern',
    date: 'Summer 2022',
    location: 'Canada',
    logo: '',
    bullets: [
      'Researched market trends and implemented an SEO strategy that increased app downloads by 6%.',
      'Directed end-to-end blog content strategy with cross-functional partners, increasing viewership by 18% in three weeks.',
    ],
  },
  {
    company: 'Shomigo',
    title: 'Business Analyst Intern',
    date: 'Summer 2022',
    location: 'Canada',
    logo: '',
    bullets: [
      'Analyzed large datasets to assess the competitive landscape and produced five go-to-market insights adopted by leadership.',
      'Built a dynamic KPI dashboard for vendor performance tracking to improve decision-making speed.',
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
