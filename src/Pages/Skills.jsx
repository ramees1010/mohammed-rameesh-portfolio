import { motion } from "motion/react";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "SQL",
  "Hibernate",
  "REST API",
  "Git",
];

function Skills() {
  return (
    <main className="page skills-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>WHAT I WORK WITH</p>
        <h1>Skills</h1>
      </motion.div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.08,
            }}
          >
            <div className="skill-circle">
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default Skills;