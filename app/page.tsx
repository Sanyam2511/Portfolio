"use client";

import Link from "next/link"; 
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GhoststreamCard } from "@/components/ghoststream-card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Card3D } from "@/components/ui/3d-card";
import { TimelineLine } from "@/components/ui/timeline-line";
import { TerminalFooter } from "@/components/ui/terminal-footer";
import Image from "next/image";

import { 
  Globe, 
  Code, 
  Terminal, 
  Link as LinkIcon, 
  GraduationCap, 
  Award, 
  BookOpen, 
  GitCommit,
  Cpu,
  Hash,
  Activity, 
  Github, 
  ExternalLink, 
  Linkedin,
  Trophy,
  Rocket,
  GitPullRequest,
  Brain
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { 
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, 
  SiExpress, SiPrisma, SiMongodb, SiPostgresql, 
  SiTailwindcss, SiDocker, SiHtml5, SiCss3, SiGit, SiFigma 
} from "react-icons/si";

const internshipContent = [
  {
    title: "Internship @ FlowbitAI",
    description: "Joined the frontend team as a Full Stack Intern. Tasked with architecting complex document processing flows and migrating legacy components to Next.js 14 while improving maintainability and readability.",
    content: (
      <div className="relative h-[85%] w-full rounded-xl overflow-hidden group border border-blue-500/20 bg-blue-950/5">
        <Image 
          src="/image.png" 
          alt="Document Processing Architecture"
          fill
          className="object-contain p-4 opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
      </div>
    ),
  },
  {
    title: "Logic Development & State Management",
    description: "Built multiple production routes and implemented Redux for complex state management across 4 different views, ensuring a seamless data flow between the server and the frontend.",
    content: (
      <div className="h-[85%] w-full bg-neutral-900/50 border border-neutral-700/50 rounded-xl flex items-end justify-center gap-2 p-6">
        <div className="w-4 h-12 bg-blue-500/50 rounded-t animate-pulse"/>
        <div className="w-4 h-24 bg-blue-400/50 rounded-t animate-pulse [animation-delay:0.2s]"/>
        <div className="w-4 h-16 bg-blue-600/50 rounded-t animate-pulse [animation-delay:0.4s]"/>
        <div className="w-4 h-32 bg-blue-300/50 rounded-t animate-pulse [animation-delay:0.6s]"/>
      </div>
    ),
  },
  {
    title: "Performance Optimization",
    description: "Reduced LCP by 40% through image lazy loading and code splitting. Successfully resolved critical production bugs to maintain high system availability.",
    content: (
      <div className="h-[85%] w-full bg-black/60 border border-neutral-800 rounded-xl p-6 font-mono text-xs text-green-400 flex flex-col justify-center">
        <p>$ npm run build</p>
        <p className="text-neutral-500">Creating optimized production build...</p>
        <p>✓ Compiled successfully</p>
        <p>✓ LCP Reduced: -40%</p>
        <p className="animate-pulse">_</p>
      </div>
    ),
  },
];

const educationData = [
  { title: "B.Tech in Computer Science", institution: "DIT University, Dehradun", duration: "2023 - 2027", grade: "9.45 CGPA", icon: <GraduationCap className="h-5 w-5" />, description: "Focusing on Full Stack Development and Real-time Systems.", tag: "v3.0.0 (Latest)" },
  { title: "Intermediate (PCM)", institution: "Dhruva Public School", duration: "2021 - 2023", grade: "89%", icon: <Award className="h-5 w-5" />, description: "Deep dive into Mathematics and Physics.", tag: "v2.0.0" },
  { title: "High School", institution: "Little Scholars, Kashipur", duration: "2019 - 2021", grade: "96%", icon: <BookOpen className="h-5 w-5" />, description: "First step into technical logic and sciences.", tag: "v1.0.0 (Initial Commit)" },
];

const stackItems = [
  { title: "Next.js", icon: <SiNextdotjs className="h-full w-full text-white" />, href: "#" },
  { title: "React", icon: <SiReact className="h-full w-full text-blue-400" />, href: "#" },
  { title: "TypeScript", icon: <SiTypescript className="h-full w-full text-blue-500" />, href: "#" },
  { title: "Node.js", icon: <SiNodedotjs className="h-full w-full text-green-500" />, href: "#" },
  { title: "Tailwind", icon: <SiTailwindcss className="h-full w-full text-cyan-400" />, href: "#" },
  { title: "Prisma", icon: <SiPrisma className="h-full w-full text-white" />, href: "#" },
  { title: "Git", icon: <SiGit className="h-full w-full text-orange-600" />, href: "#" },
];

const achievementsTop = [
    { stat: "200+", label: "Logic_Solve", sublabel: "LeetCode Problems // 100+ Day Streak", icon: <Brain className="h-6 w-6 text-blue-400" />, hash: "01" },
    { stat: "FINALIST", label: "Competitive_Build", sublabel: "Multiple Hackathons (Top teams out of 100+)", icon: <Trophy className="h-6 w-6 text-yellow-500" />, hash: "02" },
    { stat: "3+", label: "Full_Stack_Deploy", sublabel: "E2E Web Apps (MERN & Vanilla JS)", icon: <Rocket className="h-6 w-6 text-red-400" />, hash: "03" },
];

const achievementsBottom = [
    { stat: "CONTRIBUTOR", label: "Open_Source", sublabel: "GitHub PRs: UI Bugs & Documentation", icon: <GitPullRequest className="h-6 w-6 text-purple-400" />, hash: "04" },
    { stat: "LIVE_PROD", label: "University_Live", sublabel: "Annual Fest Website Contributor", icon: <Globe className="h-6 w-6 text-green-400" />, hash: "05" },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white py-20 px-5 flex flex-col items-center relative z-10 overflow-x-hidden scroll-mt-20">
      <div id="identity" className="max-w-5xl w-full mb-40 mt-10 relative scroll-mt-32">
        <div className="absolute -top-10 -left-10 font-mono text-[10px] text-neutral-800 hidden md:block uppercase tracking-widest">
          LOC: 30.3165° N // SYS_READY: TRUE
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="relative group">
            <div className="absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 border-blue-500/40" />
            <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-blue-500/40" />
            <Card3D className="h-[400px] w-[400px] border-none bg-transparent shadow-none p-0">
               <div className="relative h-full w-full rounded-lg overflow-hidden hover:grayscale-0 transition-all duration-700">
                  <Image src="/profile2.jpeg" alt="Sanyam" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-2 w-full animate-scan" />
               </div>
            </Card3D>
          </div>
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase">Current_Build: 2026_Graduate</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter">SANYAM<span className="text-blue-500">.</span></h1>
              <p className="max-w-xl text-xl text-neutral-400 font-light leading-relaxed italic">
                Full-Stack Architect specialized in high-performance ecosystems. Currently engineering <span className="text-white">real-time P2P systems</span> and optimizing document processing with <span className="text-white">9.45 CGPA precision</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4 border-t border-white/5">
              <a 
                href="https://github.com/Sanyam2511" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 group"
              >
                <SiGithub className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors" />
                <span className="text-sm font-mono text-neutral-500 group-hover:text-white transition-colors">/github</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sanyam-phartyal-a21baa350/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 group"
              >
                <SiLinkedin className="h-4 w-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-mono text-neutral-500 group-hover:text-white transition-colors">/linkedin</span>
              </a>
              <div className="flex items-center gap-2 text-blue-400">
                <Activity className="h-4 w-4" />
                <span className="text-sm font-mono uppercase tracking-widest">Active_Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="deployments" className="max-w-5xl mx-auto w-full mb-40 scroll-mt-32">
        <div className="flex items-center gap-4 mb-12 self-start"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Selected Works</h2></div>
        <BentoGrid className="md:auto-rows-[25rem] gap-8">
            <Link 
              href="https://ghoststream-vbbi.vercel.app" 
              target="_blank" 
              className="md:col-span-2 group relative overflow-hidden rounded-xl bg-blue-500/[0.02] border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="absolute top-2 left-2 h-4 w-4 border-t border-l border-blue-500/30 z-20" />
              <div className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-blue-500/30 z-20" />
              <BentoGridItem
                  title={<div className="space-y-1"><h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Ghoststream</h3><p className="text-[10px] font-mono text-neutral-500 uppercase">STATUS: LIVE</p></div>}
                  description="Real-time P2P file sharing ecosystem built with WebRTC."
                  header={
                    <div className="relative flex-1 w-full h-full min-h-[16rem] overflow-hidden">
                      <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                        <GhoststreamCard />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90 pointer-events-none" />
                    </div>
                  }
                  icon={<Globe className="h-4 w-4 text-blue-500" />}
                  className="h-full border-none bg-transparent" 
              />
            </Link>
            
            <BentoGridItem 
              title="Portfolio V2" 
              description="Next.js 14 developer environment." 
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900/50 rounded-xl border border-white/5 p-4 relative overflow-hidden"><Code className="absolute bottom-2 right-2 w-12 h-12 opacity-10" /></div>} 
              icon={<Code className="h-4 w-4 text-neutral-500" />} 
              className="border border-white/5 bg-white/[0.01]" 
            />

            <BentoGridItem 
              title="System_Kernel" 
              description="Low-level architectural components." 
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] bg-blue-900/10 rounded-xl border border-blue-500/5 p-4 relative overflow-hidden"><Terminal className="absolute bottom-2 right-2 w-12 h-12 opacity-10" /></div>} 
              icon={<Terminal className="h-4 w-4 text-blue-500" />} 
              className="border border-white/5 bg-white/[0.01]" 
            />
        </BentoGrid>
      </div>

      <div id="arsenal" className="max-w-4xl mx-auto w-full mb-40 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-12 self-start"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">System Dependencies</h2></div>
        <div className="w-full relative py-10">
          <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10"><FloatingDock items={stackItems} desktopClassName="bg-transparent border-none shadow-none h-full" /></div>
        </div>
      </div>

      <div id="lifecycle" className="max-w-4xl mx-auto w-full mb-40">
        <div className="flex items-center gap-4 mb-12"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Professional_Lifecycle</h2></div>
        <div className="w-full relative"><StickyScroll content={internshipContent} /></div>
      </div>

      <div id="academics" className="max-w-4xl mx-auto w-full mb-40">
        <div className="flex items-center gap-4 mb-16"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Academic_Build_History</h2></div>
        <TimelineLine>
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-12 md:pl-24 group pb-16">
              <div className="absolute left-[-6px] md:left-[34px] top-2 h-4 w-4 rounded-full border-2 border-blue-500 bg-neutral-950 z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap items-center gap-3"><span className="px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-[10px] font-mono text-blue-400 uppercase tracking-widest">{edu.tag}</span><span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">HASH: {edu.duration.replace(" - ", "_")}</span></div>
                <div className="space-y-1"><h3 className="text-3xl font-bold text-neutral-100 group-hover:text-blue-400 transition-colors">{edu.title}</h3><p className="text-lg text-neutral-400 font-light italic">{edu.institution}</p></div>
                <p className="max-w-xl text-sm text-neutral-500 leading-relaxed font-mono">{`// ${edu.description}`}</p>
                <div className="flex items-center gap-6 pt-2"><div className="flex items-center gap-2 bg-neutral-900/50 px-4 py-2 rounded-lg border border-white/5"><GitCommit className="h-4 w-4 text-green-500" /><span className="text-sm font-bold text-green-400">{`SUCCESS: ${edu.grade}`}</span></div></div>
              </div>
            </div>
          ))}
        </TimelineLine>
      </div>

      <div id="achievements" className="max-w-6xl mx-auto w-full mb-40 relative px-4 scroll-mt-32">
          <div className="absolute inset-0 bg-blue-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-4 mb-24">
            <div className="h-px w-12 bg-blue-500/50" />
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">System_Milestones</h2>
          </div>

          <div className="flex flex-col gap-y-32">
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-24">
                  {achievementsTop.map((item, idx) => (
                      <AchievementNode key={idx} item={item} />
                  ))}
              </div>
              <div className="flex flex-wrap justify-center gap-x-30 gap-y-24">
                  {achievementsBottom.map((item, idx) => (
                      <AchievementNode key={idx} item={item} />
                  ))}
              </div>
          </div>
      </div>
      <div className="max-w-4xl mx-auto w-full mt-2" id="contact">
        <div className="flex items-center gap-4 mb-12 self-start"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Initialize Connection</h2></div>
        <TerminalFooter />
        <div className="mt-20 pb-10 flex flex-col items-center border-t border-white/5 pt-10">
          <p className="text-[10px] font-mono text-neutral-700 tracking-[0.2em] uppercase">© 2026 SANYAM_DEVELOPER // STATUS: READY_TO_SHIP</p>
        </div>
      </div>
    </main>
  );
}

    function AchievementNode({ item }: { item: any }) {
        return (
            <div className="group relative flex flex-col items-start min-w-[280px] max-w-[320px] transition-all duration-500">
                <span className="absolute -top-12 -left-4 text-8xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-blue-500/[0.05] transition-colors duration-700">
                    {item.hash}
                </span>
                <div className="absolute -top-4 -left-4 h-8 w-8 border-t border-l border-white/5 group-hover:border-blue-500/40 transition-all duration-500" />
                <div className="relative z-10 space-y-6 w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="p-3 bg-neutral-950 rounded-xl border border-white/5 group-hover:border-blue-500/30 transition-all">{item.icon}</div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((bar) => (
                                <div key={bar} className={`h-3 w-1 rounded-full transition-all duration-500 ${bar <= 4 ? 'bg-blue-500/40' : 'bg-neutral-800'} group-hover:bg-blue-400`} />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-5xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-colors uppercase">{item.stat}</h3>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse" />
                            <p className="text-xs font-mono text-blue-400 uppercase tracking-[0.2em]">{item.label}</p>
                        </div>
                        <p className="text-sm text-neutral-500 font-light leading-relaxed pt-2">{item.sublabel}</p>
                    </div>
                </div>
            </div>
        );
    }