import React, { useState } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px)",
      transition: {
        stiffness: 100, 
        duration: 1.5,
        delay: 0.01,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
