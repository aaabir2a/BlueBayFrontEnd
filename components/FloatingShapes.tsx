'use client'
import { motion } from "framer-motion";

// Floating shapes component
export default function FloatingShapes() {
  return (
    <>
      {/* Circle 1 */}
      <motion.div
        className="absolute w-24 h-24 bg-[#0066FF] rounded-full opacity-10 blur-lg"
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
      />

      {/* Circle 2 */}
      <motion.div
        className="absolute w-16 h-16 bg-[#00FF88] rounded-full opacity-10 blur-lg"
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
        className="absolute w-32 h-8 bg-[#FF0066] opacity-10 blur-lg"
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
    </>
  );
};