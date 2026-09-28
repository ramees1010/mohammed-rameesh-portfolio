import { motion } from "motion/react";

function Portfolio() {
  return (

    <main className="home">

  <div className="home-background"></div>

   
      <div className="hero-content">

        <motion.p
          className="hero-small"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          HELLO, I'M
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9
          }}
        >
          Mohammed
          <br />
          <span>Rameesh</span>
        </motion.h1>


        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8
          }}
        >
          Java Full Stack Developer
        </motion.h2>


        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.8
          }}
        >
          
        </motion.p>


        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.9,
            duration: 0.7
          }}
        >

          <a
            href="#projects"
            className="btn primary-btn"
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="btn secondary-btn"
          >
            Contact Me
          </a>

        </motion.div>

      </div>


     

    </main>
  );
}

export default Portfolio;