import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation
  const springX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 16); // Center cursor
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "rgba(252, 239, 145, 0.7)",
        boxShadow: "0 0 24px #FCEF91",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "initial",
        x: springX,
        y: springY,
      }}
    />
  );
};

export default CustomCursor;