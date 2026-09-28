import { motion } from "motion/react";

const journey = [
  {
    title: "Secondary Education",
  },
  {
    title: "Higher Secondary",
  },
  {
    title: "Bachelor of Computer Applications",
  },
  {
    title: "Java Full Stack Development",
  },
];

function About() {
  return (
    <main className="page">

      {/* Heading */}

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>GET TO KNOW ME</p>
        <h1>About Me</h1>
      </motion.div>


      {/* About content */}

      <div className="about-content">

        {/* LEFT SIDE */}

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <h2>I'm a Java Full Stack Developer.</h2>

          <p>
            I'm a BCA graduate interested in building modern and
            practical web applications.
          </p>

          <p>
            My main focus is Java backend development using Spring Boot,
            REST APIs, JPA and SQL. I also work with React to create
            responsive and interactive user interfaces.
          </p>

          <p>
            I enjoy learning new technologies and turning ideas into
            working applications.
          </p>

        </motion.div>


        {/* RIGHT SIDE - ROADMAP */}

        <motion.div
          className="about-roadmap"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="roadmap-line"></div>

          {journey.map((item, index) => (

            <motion.div
              className="roadmap-item"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
            >

              <div className="roadmap-dot"></div>

              <div className="roadmap-info">
                <h3>{item.title}</h3>
              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </main>
  );
}

export default About;