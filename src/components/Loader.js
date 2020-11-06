import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariant = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.6,
      },
      y: {
        yoyo: Infinity,
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariant}
        animate={animation}
      ></motion.div>
      <motion.div onClick={() => cycleAnimation()}>Click here to change loader</motion.div>
    </>
  );
};

export default Loader;
