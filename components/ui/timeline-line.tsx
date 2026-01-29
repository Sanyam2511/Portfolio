"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const TimelineLine = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto px-10">
      <div className="absolute left-0 md:left-10 top-0 bottom-0 w-[2px] bg-neutral-800 rounded-full" />
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute left-0 md:left-10 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      />

      <div className="flex flex-col gap-20">
        {children}
      </div>
    </div>
  );
};