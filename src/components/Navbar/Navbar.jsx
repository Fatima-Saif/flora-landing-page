import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navItems = ['Home', 'Shop', 'Collection', 'Blog', 'Contact'];

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
        >
            <div className="navbar-pill">
                {navItems.map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="nav-item">
                        {item}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
