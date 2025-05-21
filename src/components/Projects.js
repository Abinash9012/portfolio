import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects with a clean, responsive design.',
      tech: 'HTML, CSS, JavaScript',
      link: '#'
    },
    {
      title: 'Weather App',
      description: 'A web app that fetches real-time weather data using a public API, styled with modern CSS.',
      tech: 'JavaScript, API, CSS',
      link: '#'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'A dynamic dashboard for managing products and sales, built with a front-end framework.',
      tech: 'React, Node.js',
      link: '#'
    }
  ];

  const projectVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.section
      id="projects"
      className="section projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project"
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            <motion.a
              href={project.link}
              className="project-link"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;