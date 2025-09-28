import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <motion.div
          className="header-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="header-title-link">
            <h1 className="header-title">Abhay Singh</h1>
          </Link>
        </motion.div>
        
        <nav>
          <motion.ul 
            className="header-nav"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.li key={item.name} className="header-nav-item" whileHover={{ scale: 1.05 }}>
                <Link 
                  to={item.path} 
                  className={`header-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;