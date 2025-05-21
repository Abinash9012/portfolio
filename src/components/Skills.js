import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", icon: "fas fa-c", proficiency: 40 },
        { name: "Java", icon: "fab fa-java", proficiency: 60 },
        { name: "Python", icon: "fab fa-python", proficiency: 50 },
      ],
    },
    {
      category: "Frameworks and Libraries",
      skills: [
        { name: "Django", icon: "fab fa-python", proficiency: 60 },
        { name: "Frontend Development (HTML, CSS, JavaScript)", icon: "fab fa-html5", proficiency: 60 },
      ],
    },
    {
      category: "Software and Tools",
      skills: [
        { name: "MS Office", icon: "fas fa-file-word", proficiency: 70 },
        { name: "Networking", icon: "fas fa-network-wired", proficiency: 40 },
        { name: "MySQL", icon: "fas fa-database", proficiency: 60 },
      ],
    },
  ];

  return (
    <motion.section
      className="section"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill">
                <i className={`${skill.icon} skill-icon`}></i>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}

export default Skills;