import './ProjectsCard.css'

const projects = [
  {
    title: 'Ivey Design Project',
    description:
      'Conducted root-cause analysis on Tim Hortons wait times, mapped the customer journey, and designed Figma mockups for a product feature that reduced queue friction.',
    tags: ['Product Design', 'User Research', 'Root-Cause Analysis', 'Figma'],
  },
  {
    title: 'Image Classification Model',
    description:
      'Built a CNN-based classification model and achieved 99% accuracy for categorized image prediction using Python and Matplotlib.',
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
