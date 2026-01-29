"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Download, CheckCircle2, Loader2 } from "lucide-react";

export const TerminalFooter = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["Welcome to Sanyam-OS v1.0.0", "Type 'contact --send' to get in touch."]);
  const [step, setStep] = useState<"command" | "email" | "message" | "sending" | "success">("command");
  const [isDownloading, setIsDownloading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (step === "command") {
      if (cmd === "contact --send") {
        setHistory([...history, `> ${input}`, "System: Entering contact mode...", "Enter your email:"]);
        setStep("email");
      } else if (cmd === "help") {
        setHistory([...history, `> ${input}`, "Available commands: contact --send, clear, resume"]);
      } else if (cmd === "clear") {
        setHistory([]);
      } else {
        setHistory([...history, `> ${input}`, `Command not found: ${cmd}. Type 'help' for options.`]);
      }
    } else if (step === "email") {
      setHistory([...history, `> ${input}`, "Enter your message:"]);
      setStep("message");
    } else if (step === "message") {
      setHistory([...history, `> ${input}`, "System: Encrypting and sending..."]);
      setStep("sending");
      setTimeout(() => {
        setHistory([...history, `> ${input}`, "System: Message sent successfully!"]);
        setStep("success");
      }, 2000);
    }
    setInput("");
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate generation time
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, you'd point to your public/resume.pdf
      window.open("/resume-placeholder.pdf", "_blank");
    }, 2500);
  };

  return (
    <footer className="w-full max-w-4xl mx-auto pb-20 px-5">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Terminal Section */}
        <div className="flex-1 w-full bg-black border border-white/[0.2] rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-neutral-900 px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">ship-terminal.exe</span>
            <Terminal className="h-3 w-3 text-neutral-500" />
          </div>
          
          <div ref={scrollRef} className="h-64 p-4 font-mono text-sm overflow-y-auto no-scrollbar bg-black/50 backdrop-blur-sm">
            {history.map((line, i) => (
              <div key={i} className={line.startsWith(">") ? "text-blue-400" : "text-neutral-300"}>
                {line}
              </div>
            ))}
            {step !== "sending" && step !== "success" && (
              <form onSubmit={handleCommand} className="flex mt-1">
                <span className="text-green-500 mr-2">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-white p-0 m-0"
                  autoFocus
                  placeholder={step === "command" ? "type help..." : ""}
                />
              </form>
            )}
            {step === "success" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 mt-2">
                <CheckCircle2 className="h-4 w-4" /> Connection established.
              </motion.div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full md:w-72 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-neutral-200">Ready to build?</h3>
          <p className="text-sm text-neutral-500">
            I'm currently looking for 2026 Grad roles. Let's create something meaningful together.
          </p>
          
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="relative flex items-center justify-center gap-2 w-full py-4 bg-white text-black rounded-xl font-bold transition-all hover:bg-neutral-200 disabled:opacity-70 overflow-hidden"
          >
            {isDownloading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Compiling PDF...
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Print Resume
              </>
            )}
            {/* Animated Loading Bar for Button Background */}
            {isDownloading && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.5, ease: "linear" }}
                className="absolute inset-0 bg-blue-500/20 pointer-events-none"
              />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};