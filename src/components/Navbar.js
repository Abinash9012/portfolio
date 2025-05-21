import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      className="nav-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="logo">Abinash Sarangi</Link>
      <button
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <motion.ul
        className={`nav-links ${isOpen ? 'active' : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {['resume', 'contact'].map((item) => (
          <motion.li key={item} variants={linkVariants}>
            <Link to={`/${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;