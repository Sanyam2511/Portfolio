// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-5 font-mono">
      <div className="max-w-2xl w-full bg-black border border-red-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.1)]">
        <div className="bg-red-500/10 px-4 py-2 border-b border-red-500/20 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
          </div>
          <span className="text-[10px] text-red-500 uppercase tracking-widest font-bold">System_Error: 404</span>
          <AlertTriangle className="h-3 w-3 text-red-500" />
        </div>

        <div className="p-8 space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-red-500 mb-2">/&gt; FATAL_ROUTING_ERROR detected</p>
            <p className="text-neutral-400">The requested segment does not exist in the current deployment.</p>
          </motion.div>

          <div className="space-y-1 text-sm">
            <p className="text-neutral-500">Traceback (most recent call last):</p>
            <p className="text-neutral-600 pl-4">File "app/router.sys", line 404, in GET</p>
            <p className="text-neutral-600 pl-4">ResourceNotFound: "The path you are looking for has been garbage collected."</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-6"
          >
            <p className="text-green-500 mb-4 font-bold">Suggested action: Re-route to main cluster.</p>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </motion.div>
        </div>

        <div className="bg-neutral-900/50 p-4 border-t border-white/5 flex justify-between items-center text-[10px] text-neutral-600">
          <span>SANYAM-OS_RECOVERY_MODE</span>
          <span className="animate-pulse">_LISTENING</span>
        </div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}