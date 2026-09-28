import { useState } from "react";
import { motion } from "motion/react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}
    `;

    window.location.href =
      `mailto:YOUR_EMAIL@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="page contact-page">

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>LET'S CONNECT</p>

        <h1>
          Let's build something
          <br />
          <span>great together.</span>
        </h1>
      </motion.div>


      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >

        {/* Three columns */}

        <div className="form-row">

          <div className="form-group">
            <label>Your Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label>Your Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label>Message</label>

            <input
              type="text"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

        </div>


        <motion.button
          type="submit"
          className="connect-button"
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Connect →
        </motion.button>

      </motion.form>

    </main>
  );
}

export default Contact;