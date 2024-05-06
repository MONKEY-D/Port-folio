import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18320116/pexels-photo-18320116/free-photo-of-wooden-hut-of-lifeguards.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Facial Recognition Project",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://images.pexels.com/photos/22703015/pexels-photo-22703015/free-photo-of-cafe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Facial Recognition Project",
  },
  {
    id: 3,
    title: "Vanilla Commerce",
    img: "https://images.pexels.com/photos/18687157/pexels-photo-18687157/free-photo-of-walhalla-memorial-in-germany.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Facial Recognition Project",
  },
  {
    id: 4,
    title: "Music App Commerce",
    img: "https://images.pexels.com/photos/20141251/pexels-photo-20141251/free-photo-of-cockburn-st-edinburgh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Facial Recognition Project",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start","end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400 , 400 ]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
