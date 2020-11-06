import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  //initial state
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  //animate state
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4, //for movement higher numb result more slow movement
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4, //delay children animation
    },
  },
};

const childVariants = {
  //initial state
  hidden: {
    opacity: 0,
  },
  //animate state
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  // const [showTitle, setShowTitle] = useState(true);
  // setTimeout(() => {
  //   setShowTitle(false);
  // }, 4000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <AnimatePresence>
        {showTitle && <motion.h2 exit={{y: -1000}}>Thank you for your order</motion.h2>}
      </AnimatePresence> */}

      <h2 >Thank you for your order</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
