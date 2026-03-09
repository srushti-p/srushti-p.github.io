import ProjectsCard from "./ProjectsCard.jsx";

function Projects() {
    return (
        <>
            <h2 className="projects-header" id="projects-anchor">Projects</h2>

            <div className="projects-container">
                <div className="projects-box">

                    <ProjectsCard />
                </div>
            </div>
        </>
    );


}

export default Projects

