// app/page.tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GhoststreamCard } from "@/components/ghoststream-card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Globe, Code, Terminal, Layers } from "lucide-react";

// --- CONTENT DATA ---

// 1. Internship Experience Data (The Scroll Section)
const internshipContent = [
  {
    title: "Internship @ [Company Name]",
    description:
      "Joined the frontend team as a Full Stack Intern. My first task was to audit the existing codebase and migrate legacy components to Next.js 14, improving maintainability.",
    content: (
        // Visual: A Code Snippet Mockup
        <div className="h-full w-full bg-neutral-900 border border-neutral-700 rounded-md p-4 flex flex-col gap-2">
            <div className="flex gap-1 mb-2">
                <div className="h-2 w-2 rounded-full bg-red-500"/>
                <div className="h-2 w-2 rounded-full bg-yellow-500"/>
                <div className="h-2 w-2 rounded-full bg-green-500"/>
            </div>
            <div className="space-y-1">
                <div className="h-2 w-1/2 bg-neutral-700 rounded"/>
                <div className="h-2 w-3/4 bg-neutral-700 rounded"/>
                <div className="h-2 w-1/3 bg-blue-500/50 rounded"/>
            </div>
            <div className="mt-auto text-xs text-neutral-500 font-mono">migration_v14.tsx</div>
        </div>
    ),
  },
  {
    title: "Developing the Dashboard",
    description:
      "I took ownership of the new User Analytics Dashboard. Used Recharts for data visualization and implemented Redux for complex state management across 4 different views.",
    content: (
        // Visual: A Mini Chart Mockup
      <div className="h-full w-full bg-neutral-900 border border-neutral-700 rounded-md flex items-end justify-center gap-2 p-4">
        <div className="w-4 h-12 bg-blue-500 rounded-t"/>
        <div className="w-4 h-24 bg-blue-400 rounded-t"/>
        <div className="w-4 h-16 bg-blue-600 rounded-t"/>
        <div className="w-4 h-32 bg-blue-300 rounded-t"/>
        <div className="w-4 h-20 bg-blue-500 rounded-t"/>
      </div>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "In my final month, I focused on Core Web Vitals. Reduced LCP by 40% by implementing image lazy loading and code splitting. Shipped to production for 10k+ users.",
    content: (
        // Visual: A "Success" Terminal
      <div className="h-full w-full bg-black border border-neutral-800 rounded-md p-4 font-mono text-xs text-green-400 flex flex-col justify-center">
        <p>$ npm run build</p>
        <p className="text-neutral-500">Creating an optimized production build...</p>
        <p>✓ Compiled successfully</p>
        <p>✓ LCP Reduced: -40%</p>
        <p className="animate-pulse">_</p>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white py-20 px-5 flex flex-col items-center">
      
      {/* HERO SECTION */}
      <div className="max-w-4xl w-full mb-24 text-center md:text-left mt-10">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 tracking-tight">
          Sanyam.
        </h1>
        <p className="mt-4 text-neutral-400 max-w-lg text-xl mx-auto md:mx-0 font-light">
           Crafting heavy-duty UI & scalable backends.
        </p>
      </div>

      {/* SECTION 1: PROJECTS BENTO GRID (4 ITEMS) */}
      <div className="max-w-4xl mx-auto w-full mb-32">
        <h2 className="text-2xl font-semibold mb-8 text-neutral-200">Selected Works</h2>
        <BentoGrid>
            
            {/* 1. Ghoststream (Feature Project) */}
            <BentoGridItem
            title="Ghoststream"
            description="Real-time P2P file sharing ecosystem."
            header={<GhoststreamCard />}
            icon={<Globe className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-2" 
            />

            {/* 2. Portfolio V2 (This Site) */}
            <BentoGridItem
            title="Portfolio V2"
            description="Next.js 14, Framer Motion, Tailwind."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900 rounded-xl border border-white/10 p-4 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-xs text-neutral-500 font-mono">{'<Portfolio />'}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
            </div>}
            icon={<Code className="h-4 w-4 text-neutral-500" />}
            className=""
            />

            {/* 3. Tech Stack / Skills */}
            <BentoGridItem
            title="My Stack"
            description="TypeScript, Node.js, Prisma, Docker."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900 rounded-xl border border-white/10 flex flex-wrap gap-2 content-center justify-center p-2">
                <span className="h-2 w-8 bg-neutral-700 rounded-full animate-pulse"/>
                <span className="h-2 w-12 bg-neutral-600 rounded-full"/>
                <span className="h-2 w-6 bg-neutral-700 rounded-full"/>
            </div>}
            icon={<Layers className="h-4 w-4 text-neutral-500" />}
            className=""
            />

            {/* 4. Future Project / Analytics (2 cols to balance the grid) */}
            <BentoGridItem
            title="Analytics Dashboard"
            description="Upcoming: A complex data visualization platform for SaaS metrics."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-neutral-600 font-mono text-sm">
                Coming Soon
            </div>}
            icon={<Terminal className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-2"
            />

        </BentoGrid>
      </div>


      {/* SECTION 2: EXPERIENCE (CLEAN SCROLL) */}
      <div className="max-w-4xl mx-auto w-full">
         <h2 className="text-2xl font-semibold mb-8 text-neutral-200">Experience</h2>
         <StickyScroll content={internshipContent} />
      </div>

    </main>
  );
}