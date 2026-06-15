"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Download, CheckCircle2, Loader2 } from "lucide-react";

export const TerminalFooter = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["Welcome to Sanyam-OS v1.0.0", "Type 'contact --send' to get in touch."]);
  const [step, setStep] = useState<"command" | "email" | "message" | "sending" | "success">("command");
  const [userEmail, setUserEmail] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const originalInput = input.trim();
    
    if (step === "command") {
      if (cmd === "contact --send") {
        setHistory([...history, `> ${originalInput}`, "System: Entering contact mode...", "Enter your email:"]);
        setStep("email");
      } else if (cmd === "help") {
        setHistory([
          ...history, 
          `> ${originalInput}`, 
          "Available commands:",
          "  contact --send  : Send a direct email to Sanyam",
          "  clear           : Clear the terminal output"
        ]);
      } else if (cmd === "clear") {
        setHistory([]);
      } else {
        setHistory([...history, `> ${originalInput}`, `Command not found: ${cmd}. Type 'help' for options.`]);
      }
    } else if (step === "email") {
      setUserEmail(originalInput);
      setHistory([...history, `> ${originalInput}`, "Enter your message:"]);
      setStep("message");
    } else if (step === "message") {
      setHistory([...history, `> ${originalInput}`, "System: Encrypting and sending..."]);
      setStep("sending");
      
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail, message: originalInput }),
        });

        if (res.ok) {
          setHistory(prev => [...prev, "System: Message sent successfully!", "System: Connection established."]);
          setStep("command");
        } else {
          setHistory(prev => [...prev, "System: Error sending message. Please try again or use direct email."]);
          setStep("command");
        }
      } catch (error) {
        setHistory(prev => [...prev, "System: Network error. Failed to send message."]);
        setStep("command");
      }
    }
    setInput("");
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      const link = document.createElement('a');
      link.href = "/Sanyam-Phartyal-Resume.pdf";
      link.download = "Sanyam-Phartyal-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2500);
  };

  return (
    <footer className="w-full max-w-4xl mx-auto pb-20 px-5">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 w-full bg-[#0a0a0a] border border-white/[0.05] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <div className="bg-neutral-900/40 backdrop-blur-md px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs font-medium text-neutral-500">Terminal</span>
            <Terminal className="h-4 w-4 text-neutral-600" />
          </div>
          
          <div ref={scrollRef} className="h-64 p-4 font-mono text-sm overflow-y-auto no-scrollbar bg-black/50 backdrop-blur-sm">
            {history.map((line, i) => (
              <div key={i} className={line.startsWith(">") ? "text-blue-400" : "text-neutral-300"}>
                {line}
              </div>
            ))}
            {step !== "sending" && (
              <form onSubmit={handleCommand} className="flex mt-1">
                <span className="text-blue-500 mr-3">❯</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-white p-0 m-0"
                  placeholder={step === "command" ? "type help..." : ""}
                />
              </form>
            )}
          </div>
        </div>

        <div className="w-full md:w-72 flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-neutral-200">Ready to build?</h3>
          <p className="text-base font-light leading-relaxed text-neutral-400">
            I'm currently looking for 2026 Grad roles. Let's create something meaningful together.
          </p>
          
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="relative flex items-center justify-center gap-2 w-full py-3.5 bg-[#0a0a0a] text-neutral-300 border border-white/[0.05] rounded-full font-medium transition-all duration-300 hover:bg-blue-500/5 hover:text-blue-400 hover:border-blue-500/30 disabled:opacity-70 overflow-hidden shadow-lg"
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