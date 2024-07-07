// import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-90 text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-transparent backdrop-blur-sm rounded-2xl overflow-hidden border border-black-20 dark:border-white-20 shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.string,
  item: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white-20 bg-transparent shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

Menu.propTypes = {
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const ProductItem = ({ title, href }) => {
  return href ? (
    <a href={href} className="flex space-x-2" target="_blank" rel="noopener noreferrer">
      <div>
        <h4 className="font-bold mb-5 text-white">
          {title}
        </h4>
      </div>
    </a>
  ) : (
    <div className="flex space-x-2">
      <div>
        <h4 className="font-bold mb-5 text-white">
          {title}
        </h4>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
};




const HoveredLink = ({ children, ...rest }) => {
  return (
    <a {...rest} className="text-neutral-200 hover:text-gray hover:cursor-pointer">
      {children}
    </a>
  );
};

HoveredLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MenuItem, Menu, ProductItem, HoveredLink };
