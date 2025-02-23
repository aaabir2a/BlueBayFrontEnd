"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

// Floating shapes component
export default function FloatingShapes() {
  return (
    <>
      {/* Animation 1 */}
      <motion.div
        className="absolute opacity-30 w-40 h-40"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "15%", left: "15%" }}
      >
        <DotLottieReact
          src="/animations/Animation - 1.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Animation 2 */}
      <motion.div
        className="absolute opacity-30 w-36 h-36"
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
          scale: [1, 0.9, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "45%", left: "75%" }}
      >
        <DotLottieReact
          src="/animations/Animation - 2.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Animation 3 */}
      <motion.div
        className="absolute opacity-30 w-44 h-44"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "65%", left: "25%" }}
      >
        <DotLottieReact
          src="/animations/Animation - 3.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Animation 4 */}
      <motion.div
        className="absolute opacity-30 w-32 h-32"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "25%", left: "65%" }}
      >
        <DotLottieReact
          src="/animations/Animation - 4.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Animation 5 */}
      <motion.div
        className="absolute opacity-30 w-40 h-40"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "75%", left: "15%" }}
      >
        <DotLottieReact
          src="/animations/Animation - 5.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Animation 6 */}
      <motion.div
        className="absolute opacity-30 w-36 h-36"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "35%", left: "45%" }}
      >
        <DotLottieReact
          src="/animations/Animation - 6.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Subtle background elements */}
      <motion.div
        className="absolute w-24 h-24 bg-[#00FF88] rounded-full opacity-10 backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "30%", left: "60%" }}
      />

      <motion.div
        className="absolute w-32 h-32 bg-[#FF0066] rounded-full opacity-10 backdrop-blur-sm"
        animate={{
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "60%", left: "50%" }}
      />
    </>
  );
}
