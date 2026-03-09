import './ProjectsCard.css'

const projects = [
  {
    title: 'Ivey Design Project',
    description:
      'Executed root-cause analysis on prolonged Tim Hortons wait times by mapping the end-to-end user journey, then designed and prototyped a mobile app feature with Figma mockups presented to Deloitte and Tim Hortons judges.',
    tags: ['Product Design', 'User Research', 'Root-Cause Analysis', 'Figma'],
  },
  {
    title: 'Image Classification Model',
    description:
      'Built a CNN classification model in Python to classify and categorize images, achieving 99% accuracy on the test dataset.',
    tags: ['Python', 'Matplotlib', 'CNN', 'Machine Learning'],
  },
]

export const ProjectsCard = () => {
  return (
    <>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectsCard
