import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Hospital Management System",
    description:
      "A hospital appointment and medical record management application with patient, doctor, department and appointment management.",
    technologies:
      "Java • Spring Boot • JPA • PostgreSQL • REST API • React",
  },
  {
    number: "02",
    title: "GOCARE",
    description:
      "A taxi booking service project designed to help specially abled individuals with safer transportation and caretaker support.",
    technologies:
      "Python • Django • MySQL • Flutter • HTML • CSS • JavaScript",
  },
  {
    number: "03",
    title: "Developer Portfolio",
    description:
      "A modern personal portfolio website designed to showcase my skills, projects and experience with smooth animations.",
    technologies:
      "React • HTML • JavaScript • CSS",
  },
];

function Projects() {
  return (
    <main className="page">

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>MY RECENT WORK</p>
        <h1>Projects</h1>
      </motion.div>

      <div className="projects-list">

        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.7,
            }}
            whileHover={{ y: -10 }}
          >

            <span className="project-number">
              {project.number}
            </span>

            <div className="project-info">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span className="project-tech">
                {project.technologies}
              </span>
            </div>

            <div className="project-arrow">
              ↗
            </div>

          </motion.article>
        ))}

      </div>

    </main>
  );
}

export default Projects;