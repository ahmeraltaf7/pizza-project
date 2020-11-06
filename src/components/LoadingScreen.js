import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import anime from "animejs";

const LoaderVariant = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1 },
  }
};
const LoadingScreen = () => {
  useEffect(() => {
    anime({
      targets: ".tri path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 100;
      },
      direction: "alternate",
      loop: false,
    });
  }, []);
  return (
    <svg
      className="tri"
      width="165"
      height="80"
      viewBox="0 0 168 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.99998 133L84 5L84.851 5.52521L5.85096 133.525L4.99998 133Z"
        stroke="#00FFFF"
        stroke-width="6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M164 135H5V134H164V135Z"
        stroke="#00FFFF"
        stroke-width="6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M83.848 5.00003L163.848 133L163 133.53L83 5.53003L83.848 5.00003Z"
        stroke="#00FFFF"
        stroke-width="6"
      />
      <motion.path
      variants={LoaderVariant}
      initial="hide"
      animate="show"
        d="M95.4502 100.84H73.5622L69.5302 112H62.6182L80.7622 62.104H88.3222L106.394 112H99.4822L95.4502 100.84ZM93.5782 95.512L84.5062 70.168L75.4342 95.512H93.5782Z"
        fill="#00FFFF"
      />
    </svg>

    // <svg
    //   className="tri"
    //   width="165"
    //   height="80"
    //   viewBox="0 0 165 134"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M2.99998 131L82 3L82.851 3.52521L3.85096 131.525L2.99998 131Z"
    //     stroke="#00FFFF"
    //     stroke-width="3"
    //   />
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M162 131H3V130H162V131Z"
    //     stroke="#00FFFF"
    //     stroke-width="3"
    //   />
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M82 3.00003L162 131L161.152 131.53L81.152 3.53003L82 3.00003Z"
    //     stroke="#00FFFF"
    //     stroke-width="3"
    //   />
    // </svg>
  );
};

export default LoadingScreen;
