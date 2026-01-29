// components/ui/floating-dock.tsx
"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

// 1. Individual Icon Item
function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Base size: 60px, Magnified size: 100px
  const widthTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              // Positioned the tooltip slightly higher (-top-14) so it clears the cursor
              className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 absolute left-1/2 -translate-x-1/2 -top-14 w-fit text-xs z-50"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center justify-center h-full w-full">
            <div className="h-8 w-8 text-neutral-300 flex items-center justify-center">
                {icon}
            </div>
        </div>
      </motion.div>
    </Link>
  );
}

// 2. The Infinite Dock Container
export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      className={cn(
        // INCREASED HEIGHT from h-32 to h-48 to allow space for tooltips
        "mx-auto flex h-48 items-center gap-4 bg-neutral-900/20 border border-white/5 rounded-xl px-4 hover-pause w-full overflow-hidden mask-linear-gradient",
        desktopClassName
      )}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {/* Added pt-4 to push icons down slightly, giving more headroom for tooltips */}
      <div className="flex gap-4 animate-scroll min-w-max items-center pt-4">
        {items.map((item, idx) => (
          <IconContainer mouseX={mouseX} key={`a-${item.title}-${idx}`} {...item} />
        ))}
        {items.map((item, idx) => (
          <IconContainer mouseX={mouseX} key={`b-${item.title}-${idx}`} {...item} />
        ))}
        {items.map((item, idx) => (
          <IconContainer mouseX={mouseX} key={`c-${item.title}-${idx}`} {...item} />
        ))}
      </div>
    </div>
  );
};