import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      className="section about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="about-content">
        <motion.img
          src="https://img.freepik.com/premium-vector/icono-perfil-simple-color-blanco-icon_1076610-50204.jpg"
          alt="Profile"
          className="profile-img"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="about-text">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hi, I'm Abinash Sarangi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I'm a passionate web developer with a knack for creating intuitive and visually stunning websites. My goal is to build impactful digital experiences that solve real-world problems. When I'm not coding, you can find me exploring new tech trends or sipping coffee while brainstorming my next project.
          </motion.p>
          <motion.a
            href="/contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

export default About;