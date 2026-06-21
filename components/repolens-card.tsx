"use client";

import { motion } from "framer-motion";
import { Aperture } from "lucide-react";

import Link from "next/link";

export const RepoLensCard = () => {
  return (
    <Link href="https://repo-lens-web.vercel.app/" target="_blank" className="block w-full h-full">
      <div className="flex flex-col w-full h-full min-h-[14rem] bg-neutral-950 relative overflow-hidden group rounded-xl">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/15 blur-[100px] rounded-full pointer-events-none" />

      {/* Abstract Scanning Line */}
      <motion.div
         animate={{ y: ["-100%", "200%"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none z-0"
      />

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-30">
         <motion.line
           x1="50%" y1="50%" x2="25%" y2="30%"
           stroke="url(#purple-gradient)" strokeWidth="1"
           strokeDasharray="4 4"
           animate={{ strokeDashoffset: [0, 20] }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
         />
         <motion.line
           x1="50%" y1="50%" x2="75%" y2="25%"
           stroke="url(#purple-gradient)" strokeWidth="1"
           strokeDasharray="4 4"
           animate={{ strokeDashoffset: [0, 20] }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
         />
         <motion.line
           x1="50%" y1="50%" x2="20%" y2="70%"
           stroke="url(#purple-gradient)" strokeWidth="1"
           strokeDasharray="4 4"
           animate={{ strokeDashoffset: [0, 20] }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
         />
         <motion.line
           x1="50%" y1="50%" x2="80%" y2="65%"
           stroke="url(#purple-gradient)" strokeWidth="1"
           strokeDasharray="4 4"
           animate={{ strokeDashoffset: [0, 20] }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
         />
         <defs>
           <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
             <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
             <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
           </linearGradient>
         </defs>
      </svg>

      {/* Central AI Node */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
         <motion.div
            animate={{ 
               scale: [1, 1.1, 1],
               rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center"
         >
            <div className="absolute inset-0 border border-purple-500/20 rounded-full border-dashed" />
            <div className="absolute inset-2 border border-purple-400/10 rounded-full border-dotted" />
         </motion.div>
         
         <div className="absolute p-3 sm:p-4 bg-neutral-950/80 border border-purple-500/30 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <Aperture className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
         </div>
      </div>

      {/* Peripheral Repository Nodes */}
      <div className="absolute inset-0 z-10">
         {[
           { top: "30%", left: "25%", delay: 0 },
           { top: "25%", right: "25%", delay: 1 },
           { bottom: "30%", left: "20%", delay: 2 },
           { bottom: "35%", right: "20%", delay: 3 },
         ].map((pos, i) => (
           <motion.div
             key={i}
             initial={{ scale: 0.8, opacity: 0.5 }}
             animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
             className="absolute p-1.5 sm:p-2 bg-neutral-900 border border-white/5 rounded-lg backdrop-blur-sm -translate-x-1/2 -translate-y-1/2"
             style={{ top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom }}
           >
             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/60 shadow-[0_0_10px_rgba(168,85,247,0.4)]" />
           </motion.div>
         ))}

         {/* Floating Abstract "Data" Packets */}
         <motion.div 
            initial={{ opacity: 0, y: 10, x: -10 }}
            animate={{ opacity: [0, 1, 0], y: -20, x: 10 }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute top-[35%] left-[30%] flex flex-col gap-1 p-1.5 bg-neutral-900/60 border border-purple-500/20 rounded backdrop-blur-md"
         >
            <div className="h-0.5 w-6 bg-purple-400/50 rounded-full" />
            <div className="h-0.5 w-4 bg-neutral-500/50 rounded-full" />
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, y: 10, x: 10 }}
            animate={{ opacity: [0, 1, 0], y: -20, x: -10 }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            className="absolute bottom-[40%] right-[30%] flex flex-col gap-1 p-1.5 bg-neutral-900/60 border border-purple-500/20 rounded backdrop-blur-md"
         >
            <div className="h-0.5 w-8 bg-purple-400/50 rounded-full" />
            <div className="h-0.5 w-5 bg-neutral-500/50 rounded-full" />
         </motion.div>
      </div>

      {/* Decorative Badges */}
      <div className="absolute bottom-3 left-4 flex gap-2 z-30">
         <span className="text-[8px] sm:text-[9px] font-mono px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-md">
           <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
           Gemini_Engine
         </span>
      </div>
      </div>
    </Link>
  );
};
