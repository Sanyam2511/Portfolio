"use client";
import React, { useEffect, useState } from "react";

export const BackgroundGrid = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    // We keep the base color here so it covers the whole screen
    <div className="fixed inset-0 -z-50 bg-neutral-950 pointer-events-none">
      {/* 1. The Neural Grid */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 90%)"
        }}
      />

      {/* 2. The Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
      />
    </div>
  );
};