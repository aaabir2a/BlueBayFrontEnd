"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SafeLottie from "./SafeLottie";

export default function FloatingShapes() {
  const [mountedAnimations, setMountedAnimations] = useState<number[]>([]);

  // Gradually mount animations to prevent memory issues
  useEffect(() => {
    const totalAnimations = 3; // Reduced from 6 to 3
    const delay = 1000; // 1 second delay between each animation

    for (let i = 0; i < totalAnimations; i++) {
      setTimeout(() => {
        setMountedAnimations((prev) => [...prev, i]);
      }, i * delay);
    }
  }, []);

  const animations = [
    {
      src: "/animations/Animation - 1.json",
      position: { top: "20%", left: "20%" },
      size: "w-28 h-28",
    },
    {
      src: "/animations/Animation - 2.json",
      position: { top: "60%", left: "70%" },
      size: "w-24 h-24",
    },
    {
      src: "/animations/Animation - 3.json",
      position: { top: "40%", left: "40%" },
      size: "w-32 h-32",
    },
  ];

  return (
    <>
      {/* Static decorative elements */}
      <div
        className="absolute w-40 h-40 bg-[#0066FF] rounded-full opacity-5 blur-2xl"
        style={{ top: "30%", left: "60%" }}
      />
      <div
        className="absolute w-48 h-48 bg-[#FF0066] rounded-full opacity-5 blur-2xl"
        style={{ top: "50%", left: "20%" }}
      />

      {/* Lottie Animations */}
      {mountedAnimations.map((index) => {
        const anim = animations[index];
        if (!anim) return null;

        return (
          <motion.div
            key={index}
            className={`absolute opacity-30 ${anim.size}`}
            style={anim.position}
            animate={{
              y: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              y: {
                duration: 3 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              opacity: {
                duration: 4 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <SafeLottie src={anim.src} />
          </motion.div>
        );
      })}

      {/* Simple animated shapes */}
      <motion.div
        className="absolute w-24 h-24 bg-[#00FF88] rounded-full opacity-10 backdrop-blur-sm"
        style={{ top: "25%", left: "65%" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-32 h-32 bg-[#FF0066] rounded-full opacity-10 backdrop-blur-sm"
        style={{ top: "70%", left: "35%" }}
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
