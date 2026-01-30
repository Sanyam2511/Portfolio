"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { LayoutGrid, Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: "01_Identity", href: "#identity" },
    { name: "02_Deployments", href: "#deployments" },
    { name: "03_Arsenal", href: "#arsenal" },
    { name: "04_Lifecycle", href: "#lifecycle" },
    { name: "05_Academics", href: "#academics" },
    { name: "06_Achievements", href: "#achievements" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] bg-neutral-950/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* LEFT: System Navigation & Desktop Links */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <LayoutGrid className="h-4 w-4 text-blue-500" />
            <span className="text-xs text-white font-mono font-bold tracking-widest uppercase">Sanyam_Phartyal</span>
          </div>
          
          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-[12px] font-mono text-neutral-500 hover:text-blue-400 transition-colors tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE TRIGGER (Hidden on Desktop) */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950 border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="text-sm font-mono text-neutral-400 hover:text-blue-500 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="h-[1px] bg-blue-500 origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
};