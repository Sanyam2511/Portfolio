// app/page.tsx

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GhoststreamCard } from "@/components/ghoststream-card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Globe, Code, Terminal } from "lucide-react";
import { Card3D } from "@/components/ui/3d-card";
import { GraduationCap, Award, BookOpen, GitCommit,Cpu,Hash,Activity, Github, ExternalLink, Linkedin} from "lucide-react";
import { TimelineLine } from "@/components/ui/timeline-line";
import { TerminalFooter } from "@/components/ui/terminal-footer";
import Image from "next/image";
import { 
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma
} from "react-icons/si";

const internshipContent = [
  {
    title: "Internship @ [Company Name]",
    description:
      "Joined the frontend team as a Full Stack Intern. My first task was to audit the existing codebase and migrate legacy components to Next.js 14, improving maintainability.",
    content: (
        <div className="relative h-[100%] w-full rounded-xl overflow-hidden group">
        <Image 
          src="/image.png" 
          alt="Document Processing Flow Architecture"
          fill
          className="object-contain p-2 opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02]"
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
      </div>
    ),
  },
  {
    title: "Developing the Dashboard",
    description:
      "I took ownership of the new User Analytics Dashboard. Used Recharts for data visualization and implemented Redux for complex state management across 4 different views.",
    content: (
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

const educationData = [
  {
    title: "B.Tech in Computer Science",
    institution: "Your College Name",
    duration: "2023 - 2027",
    grade: "9.2 CGPA", 
    icon: <GraduationCap className="h-5 w-5" />,
    description: "Currently in 3rd year. Focusing on Full Stack Development and Real-time Systems.",
    tag: "v3.0.0 (Latest)"
  },
  {
    title: "Intermediate (PCM)",
    institution: "Your School Name",
    duration: "2021 - 2023",
    grade: "95%", 
    icon: <Award className="h-5 w-5" />,
    description: "Deep dive into Mathematics and Physics. Built foundation for engineering.",
    tag: "v2.0.0"
  },
  {
    title: "High School",
    institution: "Your School Name",
    duration: "2019 - 2021",
    grade: "98%", 
    icon: <BookOpen className="h-5 w-5" />,
    description: "First step into the world of technical logic and sciences.",
    tag: "v1.0.0 (Initial Commit)"
  },
];

const stackItems = [
    { title: "Next.js", icon: <SiNextdotjs className="h-full w-full text-white" />, href: "#" },
    { title: "React", icon: <SiReact className="h-full w-full text-blue-400" />, href: "#" },
    { title: "TypeScript", icon: <SiTypescript className="h-full w-full text-blue-500" />, href: "#" },
    { title: "Node.js", icon: <SiNodedotjs className="h-full w-full text-green-500" />, href: "#" },
    { title: "Express", icon: <SiExpress className="h-full w-full text-white" />, href: "#" },
    { title: "MongoDB", icon: <SiMongodb className="h-full w-full text-green-500" />, href: "#" },
    { title: "PostgreSQL", icon: <SiPostgresql className="h-full w-full text-blue-300" />, href: "#" },
    { title: "Prisma", icon: <SiPrisma className="h-full w-full text-white" />, href: "#" },
    { title: "Tailwind", icon: <SiTailwindcss className="h-full w-full text-cyan-400" />, href: "#" },
    { title: "Docker", icon: <SiDocker className="h-full w-full text-blue-500" />, href: "#" },
    { title: "HTML5", icon: <SiHtml5 className="h-full w-full text-orange-500" />, href: "#" },
    { title: "CSS3", icon: <SiCss3 className="h-full w-full text-blue-500" />, href: "#" },
    { title: "Git", icon: <SiGit className="h-full w-full text-orange-600" />, href: "#" },
    { title: "Figma", icon: <SiFigma className="h-full w-full text-purple-400" />, href: "#" },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white py-20 px-5 flex flex-col items-center">
      
      <div className="max-w-5xl w-full mb-40 mt-10 ml-30 relative">
        <div className="absolute -top-10 -left-10 font-mono text-[10px] text-neutral-800 hidden md:block">
          LOC: 30.3165° N, 78.0322° E // SYS_READY: TRUE
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          <div className="relative group">
            <div className="absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 border-blue-500/40" />
            <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-blue-500/40" />
            
            <Card3D className="h-[400px] w-[300px] border-none bg-transparent shadow-none p-0">
               <div className="relative h-full w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-lg overflow-hidden">
                  <Image 
                    src="/your-portrait.jpg" 
                    alt="Sanyam"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-2 w-full animate-scan" />
               </div>
            </Card3D>
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase">
                  Current_Build: 2026_Graduate
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter">
                SANYAM<span className="text-blue-500">.</span>
              </h1>
              
              <p className="max-w-xl text-xl text-neutral-400 font-light leading-relaxed">
                Full-Stack Architect specialized in high-performance ecosystems. 
                Currently engineering <span className="text-white">real-time P2P systems</span> and 
                optimizing document processing with <span className="text-white">9.2 CGPA precision</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4 border-t border-white/5">
              <a href="#" className="flex items-center gap-2 group">
                <Hash className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-mono text-neutral-500 group-hover:text-white transition-colors">/github</span>
              </a>
              <a href="#" className="flex items-center gap-2 group">
                <Hash className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-mono text-neutral-500 group-hover:text-white transition-colors">/linkedin</span>
              </a>
              <a href="#" className="flex items-center gap-2 group text-blue-400">
                <Activity className="h-4 w-4" />
                <span className="text-sm font-mono uppercase tracking-widest">Active_Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-neutral-200">Selected Works</h2>
        <BentoGrid>
            <BentoGridItem
                title="Ghoststream"
                description="Real-time P2P file sharing ecosystem."
                header={<GhoststreamCard />}
                icon={<Globe className="h-4 w-4 text-neutral-500" />}
                className="md:col-span-2" 
            />
            <BentoGridItem
                title="Portfolio V2"
                description="Next.js 14, Framer Motion, Tailwind."
                header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900 rounded-xl border border-white/10 p-4 relative overflow-hidden">
                        <div className="absolute top-2 left-2 text-xs text-neutral-500 font-mono">{'<Portfolio />'}</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                        <div className="absolute bottom-0 right-0 p-4 opacity-20">
                            <Code className="w-16 h-16" />
                        </div>
                    </div>
                }
                icon={<Code className="h-4 w-4 text-neutral-500" />}
                className=""
            />
            <BentoGridItem
                title="Analytics Dashboard"
                description="Upcoming: A complex data visualization platform for SaaS metrics."
                header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-neutral-600 font-mono text-sm">
                        Coming Soon...
                    </div>
                }
                icon={<Terminal className="h-4 w-4 text-neutral-500" />}
                className="md:col-span-3"
            />
        </BentoGrid>
      </div>

        <div className="max-w-4xl mx-auto w-full mb-40 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-12 self-start">
            <div className="h-px w-12 bg-blue-500/50" />
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">
              System Dependencies
            </h2>
          </div>
          
          <div className="w-full relative py-10">
            <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <FloatingDock 
                  items={stackItems} 
                  desktopClassName="bg-transparent border-none shadow-none h-full" 
              />
            </div>

            <div className="absolute -bottom-4 right-0 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
              Active_Modules: {stackItems.length} // Runtime: Node.js_v20
            </div>
          </div>
        </div>

      <div className="max-w-4xl mx-auto w-full mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-blue-500/50" />
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">
            Professional_Lifecycle
          </h2>
        </div>
  
      <div className="w-full relative">
        <StickyScroll content={internshipContent} />
      </div>
    </div>

      <div className="max-w-4xl mx-auto w-full pb-40">
      <div className="flex items-center gap-4 mt-2 mb-16">
        <div className="h-px w-12 bg-blue-500/50" />
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">
          Academic_Build_History
        </h2>
      </div>
      
      <TimelineLine>
        {educationData.map((edu, idx) => (
          <div key={idx} className="relative pl-12 md:pl-24 group">
            <div className="absolute left-[-6px] md:left-[34px] top-2 h-4 w-4 rounded-full border-2 border-blue-500 bg-neutral-950 z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                  {edu.tag}
                </span>
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                  HASH: {edu.duration.replace(" - ", "_")}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-neutral-100 group-hover:text-blue-400 transition-colors duration-300">
                  {edu.title}
                </h3>
                <p className="text-lg text-neutral-400 font-light italic">
                  {edu.institution}
                </p>
              </div>

              <p className="max-w-xl text-sm text-neutral-500 leading-relaxed font-mono">
                {`// ${edu.description}`}
              </p>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-neutral-700" />
                  <span className="text-xs font-mono text-neutral-600 uppercase">Architecture: B.Tech_v3.4</span>
                </div>
                <div className="flex items-center gap-2 bg-neutral-900/50 px-4 py-2 rounded-lg border border-white/5">
                  <GitCommit className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-bold text-green-400">
                    {`SUCCESS: ${edu.grade}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </TimelineLine>
    </div>

      <div className="max-w-4xl mx-auto w-full mt-2">
        <h2 className="text-2xl font-semibold mb-8 text-neutral-200">Initialize Connection</h2>
        
        <TerminalFooter />

        <div className="mt-20 pb-10 flex flex-col items-center border-t border-white/5 pt-10">
          <p className="text-[10px] font-mono text-neutral-700 tracking-[0.2em] uppercase">
            © 2026 SANYAM_DEVELOPER // STATUS: READY_TO_SHIP
          </p>
        </div>
      </div>

    </main>
  );
}