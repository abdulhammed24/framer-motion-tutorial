import React, { useState, useEffect } from "react";
// AnimatePresence is animate-out a component
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      // delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  // const [showTitle, setShowTitle] = useState(true);

  // // do this after 4second
  // setTimeout(() => {
  //   setShowTitle(false);
  // }, 4000);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* showTitle must be true to show the <h2/> tag */}
      {/* <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -100 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence> */}

      <h2>Thank you for your order :)</h2>

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
