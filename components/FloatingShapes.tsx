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
          x: [0, 100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        style={{ top: "10%", left: "10%" }}
      >
        {/* <DotLottieReact
          src="/animations/Animation - 1.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        /> */}
      </motion.div>

      {/* Animation 2 */}
      <motion.div
        className="absolute opacity-30 w-36 h-36"
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        style={{ top: "50%", left: "80%" }}
      >
        {/* <DotLottieReact
          src="/animations/Animation - 2.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        /> */}
      </motion.div>

      {/* Animation 3 */}
      <motion.div
        className="absolute opacity-30 w-44 h-44"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        style={{ top: "70%", left: "30%" }}
      >
        {/* <DotLottieReact
          src="/animations/Animation - 3.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        /> */}
      </motion.div>

      {/* Animation 4 */}
      <motion.div
        className="absolute opacity-30 w-32 h-32"
        animate={{
          x: [0, 150, 0],
          y: [0, -150, 0],
          scale: [1, 1.5, 1],
          rotate: [0, 270, 360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        style={{ top: "20%", left: "70%" }}
      >
        <DotLottieReact
          src="/animations/Animation - 1.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Animation 5 */}
      <motion.div
        className="absolute opacity-30 w-40 h-40"
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
          scale: [1, 0.7, 1],
          rotate: [0, -270, -360],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        style={{ top: "80%", left: "20%" }}
      >
        {/* <DotLottieReact
          src="/animations/Animation - 5.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        /> */}
      </motion.div>

      {/* Animation 6 */}
      <motion.div
        className="absolute opacity-30 w-38 h-38"
        animate={{
          x: [0, 120, 0],
          y: [0, -120, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 16,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        style={{ top: "40%", left: "40%" }}
      >
        {/* <DotLottieReact
          src="/animations/Animation - 6.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        /> */}
      </motion.div>

      {/* Additional decorative elements */}
      <motion.div
        className="absolute w-24 h-24 bg-[#00FF88] rounded-full opacity-10 backdrop-blur-sm"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ top: "30%", left: "60%" }}
      />

      <motion.div
        className="absolute w-32 h-32 bg-[#FF0066] rounded-full opacity-10 backdrop-blur-sm"
        animate={{
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ top: "60%", left: "50%" }}
      />
    </>
  );
}
