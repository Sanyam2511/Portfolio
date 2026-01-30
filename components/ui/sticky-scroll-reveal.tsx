"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[35rem] overflow-y-auto flex justify-center relative lg:space-x-10 rounded-md p-4 md:p-10 no-scrollbar"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-32 relative group/card">
              <div className="absolute inset-0 lg:hidden -z-10 opacity-[0.08] blur-[2px] pointer-events-none scale-110">
                {item.content}
              </div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                }}
                className="text-3xl font-bold text-neutral-100 tracking-tight"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                }}
                className="text-lg text-neutral-400 max-w-sm mt-10 font-light leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-60" />
        </div>
      </div>

      <div
        className={cn(
          "hidden lg:block h-80 w-[450px] sticky top-16 overflow-hidden transition-all duration-500",
          contentClassName
        )}
      >
        <div className="absolute top-0 left-0 h-6 w-6 border-t border-l border-blue-500/30" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-blue-500/30" />
        <div className="absolute inset-0 bg-blue-500/[0.02] blur-3xl rounded-full" />

        {content.map((item, index) => (
          <motion.div
            key={"content" + index}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{
              opacity: activeCard === index ? 1 : 0,
              x: activeCard === index ? 0 : 20,
              scale: activeCard === index ? 1 : 0.95,
              filter: activeCard === index ? "blur(0px)" : "blur(8px)",
            }}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="absolute inset-0 h-full w-full flex items-center justify-center p-6"
          >
            {item.content ?? null}
          </motion.div>
        ))}

        <div className="absolute bottom-2 left-2 text-[8px] font-mono text-neutral-700 uppercase tracking-[0.2em]">
          viewport_0{activeCard + 1} // buffer_active
        </div>
      </div>
    </motion.div>
  );
};