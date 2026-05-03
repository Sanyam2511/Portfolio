"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Vote, Loader2, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export const VotingPlatformCard = () => {
  const [ballot, setBallot] = useState({ id: 1024, status: "Verifying", hash: "0x8F9B2" });
  useEffect(() => {
    const generateHash = () => {
      return "0x" + Array.from({length: 5}, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
    };

    const interval = setInterval(() => {
      setBallot(prev => ({
        id: prev.id + 1,
        status: "Verifying",
        hash: generateHash()
      }));

      setTimeout(() => {
        setBallot(prev => ({ ...prev, status: "Verified" }));
      }, 1500);

    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-1 w-full h-full min-h-[14rem] bg-black items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:15px_15px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.08),transparent_70%)]" />

      <div className="flex items-center justify-between w-full max-w-md px-6 z-10 relative">
        <div className="flex flex-col items-start gap-3 hidden sm:flex">
          <span className="text-[8px] text-emerald-500 font-mono tracking-widest border border-emerald-500/30 px-1.5 py-0.5 rounded bg-emerald-500/10 uppercase">
            Live_Tally
          </span>
          <div className="flex flex-col gap-2 w-24">
            {[60, 85, 45].map((w, i) => (
              <div key={i} className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-400"
                  initial={{ width: "20%" }}
                  animate={{ width: [`${w}%`, `${w + (Math.random() * 20 - 10)}%`, `${w}%`] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center scale-90 sm:scale-100">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 rounded-full border border-dashed border-emerald-500/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-20 h-20 rounded-full border border-dotted border-emerald-400/50"
          />
          <div className="p-4 bg-neutral-950 rounded-full border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative z-10">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
          </div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 -right-4 p-1.5 bg-neutral-900 border border-neutral-700 rounded-md shadow-xl z-20"
          >
            <Lock className="h-3 w-3 text-neutral-400" />
          </motion.div>
        </div>

        <div className="flex flex-col items-end gap-2 hidden sm:flex w-32">
           <div className="flex items-center gap-1.5 mb-1 opacity-80">
              <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest">
                Latest_Cast
              </span>
              <Vote className="h-3 w-3 text-emerald-500" />
           </div>

           <AnimatePresence mode="popLayout">
             <motion.div
                key={ballot.id}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="relative flex flex-col gap-1.5 p-2.5 bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-lg w-full shadow-2xl"
             >
                <div className="flex justify-between items-center">
                   <span className="text-[10px] text-neutral-300 font-mono font-bold">
                     Ballot #{ballot.id}
                   </span>
                   {ballot.status === "Verifying" ? (
                       <Loader2 className="h-3 w-3 text-yellow-500 animate-spin" />
                   ) : (
                       <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                   )}
                </div>
                
                <div className="h-px w-full bg-neutral-800 my-0.5" />
                
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-mono text-neutral-500">SIGN:</span>
                  <span className="text-[9px] font-mono text-neutral-400">{ballot.hash}...</span>
                </div>

                <div className={`mt-1 text-[8px] font-mono font-bold uppercase tracking-widest text-center py-1 rounded-sm border ${
                  ballot.status === "Verifying" 
                    ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" 
                    : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                }`}>
                   {ballot.status}
                </div>
             </motion.div>
           </AnimatePresence>
        </div>

      </div>

      <div className="absolute bottom-3 right-3 flex gap-2">
        <span className="text-[9px] px-2 py-1 rounded-full bg-neutral-900 text-emerald-500 border border-emerald-500/20 uppercase tracking-widest flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Receipt-Verified
        </span>
      </div>
    </div>
  );
};