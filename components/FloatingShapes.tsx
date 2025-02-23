"use client";
import { motion } from "framer-motion";
import LottieWrapper from "./LottieWrapper";

export default function FloatingShapes() {
  const animations = [
    {
      src: "/animations/Animation - 1.json",
      position: { top: "15%", left: "15%" },
      motion: {
        animate: { y: [0, 20, 0] },
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    {
      src: "/animations/Animation - 2.json",
      position: { top: "45%", left: "75%" },
      motion: {
        animate: { y: [0, -20, 0] },
        transition: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    {
      src: "/animations/Animation - 3.json",
      position: { top: "65%", left: "25%" },
      motion: {
        animate: { y: [0, 15, 0] },
        transition: {
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    {
      src: "/animations/Animation - 4.json",
      position: { top: "25%", left: "65%" },
      motion: {
        animate: { y: [0, -15, 0] },
        transition: {
          duration: 4.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    {
      src: "/animations/Animation - 5.json",
      position: { top: "75%", left: "15%" },
      motion: {
        animate: { y: [0, 10, 0] },
        transition: {
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    {
      src: "/animations/Animation - 6.json",
      position: { top: "35%", left: "45%" },
      motion: {
        animate: { y: [0, -10, 0] },
        transition: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
  ];

  return (
    <>
      {animations.map((anim, index) => (
        <motion.div
          key={index}
          className="absolute opacity-30 w-32 h-32"
          style={anim.position}
          animate={anim.motion.animate}
          transition={anim.motion.transition}
        >
          <LottieWrapper src={anim.src} />
        </motion.div>
      ))}

      {/* Simple decorative elements */}
      <motion.div
        className="absolute w-24 h-24 bg-[#00FF88] rounded-full opacity-10 backdrop-blur-sm"
        style={{ top: "30%", left: "60%" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-32 h-32 bg-[#FF0066] rounded-full opacity-10 backdrop-blur-sm"
        style={{ top: "60%", left: "50%" }}
        animate={{ scale: [1, 0.9, 1] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
