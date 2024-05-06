import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);



  useEffect(() => {
    const handleLinkClick = () => {
      // Close the sidebar after a short delay (e.g., 300ms) to allow time for scrolling
      setTimeout(() => {
        setOpen(false);
      }, 200);
    };

    document.querySelectorAll(".sidebar .links a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      // Cleanup event listeners on component unmount
      document.querySelectorAll(".sidebar .links a").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);




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
    <>
    {/* Backdrop for dimming effect */}
    {open && (
        <div className="sidebar-backdrop" onClick={() => setOpen(false)} />
      )}

    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
    </>
  );
};

export default Sidebar;
