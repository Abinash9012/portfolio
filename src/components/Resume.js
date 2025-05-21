import { motion } from 'framer-motion';

function Resume() {
  return (
    <motion.section
      className="section resume"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2>Resume</h2>
      <motion.div
        className="resume-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3>Objective</h3>
        <div className="resume-item">
          <p>
            Aspiring software developer with foundational knowledge in both hardware and software domains, seeking an opportunity to contribute to innovative projects and grow within a dynamic team. Eager to leverage my skills in programming, web development, database management, and basic networking (including server concepts), along with a practical understanding of computer hardware, to support and enhance business operations.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="resume-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3>Education</h3>
        <div className="resume-item">
          <h4>B.Tech in Computer Science and Engineering (Expected 2025)</h4>
          <p>KMBB College of Engineering and Technology, Khordha</p>
        </div>
        <div className="resume-item">
          <h4>Class XII (CHSE, Odisha) - 73.33%</h4>
          <p>KMBB Science Higher Secondary School, Cuttack</p>
          <p>2021</p>
        </div>
        <div className="resume-item">
          <h4>Class X (BSE, Odisha) - 73.5%</h4>
          <p>Utkalmani Nodal Ucha Bidyapitha, Kendupatna</p>
          <p>2019</p>
        </div>
      </motion.div>

      <motion.div
        className="resume-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3>Technical Skills</h3>
        <div className="resume-item">
          <h4>Programming Languages</h4>
          <ul className="resume-skills">
            <li>C (Basic understanding of syntax and loops)</li>
            <li>Java (OOP concepts, exception handling, GUI with JFrame)</li>
            <li>Python (Core concepts, OOP, file handling, modules)</li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Frameworks and Libraries</h4>
          <ul className="resume-skills">
            <li>Django (Building simple web applications)</li>
            <li>Frontend Development (HTML, CSS, JavaScript)</li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Software and Tools</h4>
          <ul className="resume-skills">
            <li>MS Office (Word, Excel, PowerPoint)</li>
            <li>MySQL (Basic database operations)</li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Networking</h4>
          <ul className="resume-skills">
            <li>Basic understanding of server concepts and network fundamentals</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="resume-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>Certifications</h3>
        <div className="resume-item">
          <p>Python Programming - Central Tool Room & Training Centre (CTTC), Bhubaneswar (June 2024)</p>
        </div>
      </motion.div>

      <motion.div
        className="resume-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Projects</h3>
        <div className="resume-item">
          <h4>Amazon Clone</h4>
          <p>Frontend Development using HTML, CSS, and JavaScript.</p>
        </div>
        <div className="resume-item">
          <h4>Calculator</h4>
          <p>Built using Python.</p>
        </div>
        <div className="resume-item">
          <h4>Simple Portfolio Site</h4>
          <p>Frontend Development using HTML, CSS, and JavaScript.</p>
        </div>
      </motion.div>

      <motion.div
        className="resume-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <h3>Contact Information</h3>
        <div className="resume-item">
          <p>Address: Panchupal, Barang, Odisha 754005</p>
          <p>Email: <a href="mailto:sarangiabinash17@gmail.com">sarangiabinash17@gmail.com</a></p>
          <p>Contact: 9583682212 / 9348860704</p>
        </div>
      </motion.div>

      <motion.a
        href="/resume.pdf"
        download
        className="cta-button download-resume"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Download PDF
      </motion.a>
    </motion.section>
  );
}

export default Resume;