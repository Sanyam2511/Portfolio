// components/ghoststream-card.tsx
"use client";

import { motion } from "framer-motion";
import { Laptop, Server, FileJson } from "lucide-react";

export const GhoststreamCard = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-black items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="flex items-center justify-between w-3/4 max-w-[300px] z-10 relative">
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20">
            <Laptop className="h-6 w-6 text-blue-400" />
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">USER</span>
        </div>

        <div className="h-[2px] bg-neutral-800 flex-1 mx-4 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "400%" }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"
            />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20">
            <Laptop className="h-6 w-6 text-blue-400" />
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">USER</span>
        </div>

        <motion.div 
            className="absolute left-10 -top-6 p-1 bg-neutral-800 border border-neutral-700 rounded shadow-sm"
            animate={{ 
                x: [0, 160],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1]
            }}
        >
            <FileJson className="h-3 w-3 text-green-400" />
        </motion.div>
      </div>

      <div className="absolute bottom-3 right-3 flex gap-2">
        <span className="text-[10px] px-2 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">WebRTC</span>
        <span className="text-[10px] px-2 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">Socket.io</span>
      </div>
    </div>
  );
};