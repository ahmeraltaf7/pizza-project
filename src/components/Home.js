import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const containerVariant = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 0.7, duration: 2 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
const buttonVariant = {
  hover: {
    // scale: [1,1.2,1,1.2,1,1.2,1], //keyframes
    scale: 1.2,
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariant}
      initial="hide"
      animate="show"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
