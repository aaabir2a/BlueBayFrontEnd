"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

// Floating shapes component
export default function FloatingShapes() {
  return (
    <>
      {/* Circle 1 */}
      <motion.div
        className="absolute opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ top: "10%", left: "10%" }}
      >
        <DotLottieReact src="/animations/Animation - 1.json" loop autoplay />
      </motion.div>

      {/* Circle 2 */}
      <motion.div
        className="absolute w-24 h-24 bg-[#00FF88] rounded-full opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ top: "50%", left: "80%" }}
      />

      {/* Rectangle */}
      <motion.div
        className="absolute w-40 h-12 bg-[#FF0066] opacity-20 "
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ top: "70%", left: "30%" }}
      />

      {/* Circle 3 */}
      <motion.div
        className="absolute w-20 h-20 bg-[#FFCC00] rounded-full opacity-20 "
        animate={{
          x: [0, 150, 0],
          y: [0, -150, 0],
          scale: [1, 1.5, 1],
          rotate: [0, 270, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ top: "20%", left: "70%" }}
      />

      {/* Circle 4 */}
      <motion.div
        className="absolute w-28 h-28 bg-[#9900FF] rounded-full opacity-20 "
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
          scale: [1, 0.7, 1],
          rotate: [0, -270, -360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ top: "80%", left: "20%" }}
      />
    </>
  );
}
