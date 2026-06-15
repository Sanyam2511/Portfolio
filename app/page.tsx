"use client";

import Link from "next/link"; 
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GhoststreamCard } from "@/components/ghoststream-card";
import { VotingPlatformCard } from "@/components/voting-platform-card";
import { RepoLensCard } from "@/components/repolens-card";
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
  Vote, 
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
  Brain,
  SearchCode
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { 
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, 
  SiExpress, SiPrisma, SiMongodb, SiPostgresql, 
  SiTailwindcss, SiDocker, SiHtml5, SiCss3, SiGit, SiFigma 
} from "react-icons/si";

const internshipContent = [
  {
    title: "Frontend Engineering @ FlowbitAI",
    description: "Built complex interfaces from scratch with Next.js, strictly adhering to Figma designs. Provided active design insights during meetings to enhance UI/UX and bridge the gap between design and engineering.",
    content: (
      <div className="relative h-full w-full rounded-xl overflow-hidden group bg-neutral-950 border border-white/10 flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_14px]" />
        <div className="flex w-full px-6 gap-4 items-center z-10">
          <div className="flex-1 h-32 rounded-lg border border-dashed border-pink-500/50 bg-pink-500/5 flex flex-col p-3 gap-2 relative">
             <span className="absolute -top-2.5 -left-1 text-[8px] bg-pink-500/20 text-pink-400 px-1 font-mono rounded">FIGMA</span>
             <div className="h-4 w-1/2 bg-pink-500/20 rounded-sm" />
             <div className="h-2 w-3/4 bg-pink-500/10 rounded-sm mt-auto" />
             <div className="h-8 w-full bg-pink-500/10 rounded-sm" />
          </div>
          <div className="w-8 flex justify-center">
             <div className="h-0.5 w-full bg-gradient-to-r from-pink-500/50 to-blue-500/50 relative">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border-t border-r border-blue-500/50" />
             </div>
          </div>
          <div className="flex-1 h-32 rounded-lg border border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)] flex flex-col p-3 gap-2 relative overflow-hidden">
             <span className="absolute -top-2.5 -left-1 text-[8px] bg-blue-500/20 text-blue-400 px-1 font-mono rounded">PRODUCTION</span>
             <div className="h-4 w-1/2 bg-blue-400 rounded-sm shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
             <div className="h-2 w-3/4 bg-blue-400/50 rounded-sm mt-auto" />
             <div className="h-8 w-full bg-blue-500/20 rounded-sm border border-blue-400/30" />
             <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400/20 blur-[20px]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Backend Architecture & Systems",
    description: "Engineered robust backend routing for numerous new features. Implemented advanced caching layers and rate limiting to ensure system scalability and secure endpoints under heavy load.",
    content: (
      <div className="h-full w-full bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center p-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />
         <div className="flex flex-col gap-4 w-full max-w-[200px] z-10">
            <div className="flex justify-between items-center bg-neutral-900 border border-white/5 p-2 rounded-lg relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
               <span className="text-[10px] font-mono text-neutral-400 pl-2">Client_Req</span>
               <div className="flex gap-1">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '75ms' }} />
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '150ms' }} />
               </div>
            </div>
            
            <div className="flex justify-center">
               <div className="w-0.5 h-4 bg-emerald-500/30" />
            </div>

            <div className="flex justify-between items-center bg-neutral-900 border border-emerald-500/30 p-2.5 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.1)] relative">
               <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider">RATE_LIMITER</span>
               <span className="text-[8px] font-mono bg-emerald-500/10 text-emerald-500 px-1 rounded">ACTIVE</span>
            </div>

            <div className="flex justify-center">
               <div className="w-0.5 h-4 bg-emerald-500/30" />
            </div>

            <div className="flex justify-between items-center bg-neutral-900 border border-blue-500/30 p-2.5 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.1)] relative">
               <span className="text-[10px] font-mono text-blue-400 font-bold tracking-wider">REDIS_CACHE</span>
               <span className="text-[8px] font-mono bg-blue-500/10 text-blue-500 px-1 rounded">HIT</span>
            </div>
         </div>
      </div>
    ),
  },
  {
    title: "Performance & Reliability",
    description: "Drastically optimized data-fetching layers, reducing redundant API calls down to single digits. Diagnosed and resolved numerous critical bugs to maintain flawless system reliability.",
    content: (
      <div className="h-full w-full bg-black border border-neutral-800 rounded-xl p-6 font-mono text-xs flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <Cpu className="w-24 h-24" />
        </div>
        <div className="z-10 space-y-3">
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
             <span className="text-neutral-500">API_CALLS_PER_RENDER</span>
             <div className="flex items-center gap-2">
                <span className="text-red-400 line-through">42</span>
                <span className="text-neutral-600">-&gt;</span>
                <span className="text-green-400 font-bold">3</span>
             </div>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
             <span className="text-neutral-500">SYSTEM_BUGS_RESOLVED</span>
             <span className="text-blue-400 font-bold">Numerous</span>
          </div>
          <div className="flex justify-between items-center pt-2">
             <span className="text-neutral-500">SYSTEM_STATUS</span>
             <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-green-400">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               OPTIMIZED
             </div>
          </div>
        </div>
      </div>
    ),
  },
];

const educationData = [
  { title: "B.Tech in Computer Science", institution: "DIT University, Dehradun", duration: "2023 - 2027", grade: "9.45 CGPA", icon: <GraduationCap className="h-5 w-5" />, description: "Focusing on Full Stack Development and Real-time Systems.", tag: "Current" },
  { title: "Intermediate (PCM)", institution: "Dhruva Public School", duration: "2021 - 2023", grade: "89%", icon: <Award className="h-5 w-5" />, description: "Deep dive into Mathematics and Physics.", tag: "Completed" },
  { title: "High School", institution: "Little Scholars, Kashipur", duration: "2019 - 2021", grade: "96%", icon: <BookOpen className="h-5 w-5" />, description: "First step into technical logic and sciences.", tag: "Completed" },
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
    { stat: "300+", label: "Problem Solving", sublabel: "LeetCode Problems • 100+ Day Streak", icon: <Brain className="h-6 w-6 text-blue-400" />, hash: "01" },
    { stat: "FINALIST", label: "Hackathons", sublabel: "Multiple Hackathons (Top teams out of 100+)", icon: <Trophy className="h-6 w-6 text-yellow-500" />, hash: "02" },
    { stat: "7", label: "Deployments", sublabel: "End-to-End Full Stack Web Apps", icon: <Rocket className="h-6 w-6 text-red-400" />, hash: "03" },
];

const achievementsBottom = [
    { stat: "CONTRIBUTOR", label: "Open Source", sublabel: "GitHub PRs: UI Bugs & Documentation", icon: <GitPullRequest className="h-6 w-6 text-purple-400" />, hash: "04" },
    { stat: "LIVE_PROD", label: "University Projects", sublabel: "Annual Fest Website Contributor", icon: <Globe className="h-6 w-6 text-green-400" />, hash: "05" },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white py-20 px-5 flex flex-col items-center relative z-10 overflow-x-hidden scroll-mt-20">
      <div id="identity" className="max-w-5xl w-full mb-24 mt-10 relative scroll-mt-32">
        <div className="absolute -top-10 -left-10 font-medium text-[10px] text-neutral-600 hidden md:block uppercase tracking-widest">
          Location: India &bull; Status: Available for Hire
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
                <span className="text-sm font-medium text-blue-400 tracking-wide">Graduation: Class of 2027</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight">SANYAM<span className="text-blue-500">.</span></h1>
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
                <span className="text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">/github</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sanyam-phartyal-a21baa350/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 group"
              >
                <SiLinkedin className="h-4 w-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">/linkedin</span>
              </a>
              <div className="flex items-center gap-2 text-blue-400">
                <Activity className="h-4 w-4" />
                <span className="text-sm font-medium uppercase tracking-wide">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="deployments" className="max-w-5xl mx-auto w-full mb-24 scroll-mt-32">
        <div className="flex items-center gap-4 mb-12 self-start">
          <div className="h-px w-12 bg-blue-500/50" />
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Projects</h2>
        </div>
        <BentoGrid className="md:auto-rows-[22rem] gap-8">
            
            {/* 1. GHOSTSTREAM -> Changed to md:col-span-1 to make it leaner */}
            <Link 
              href="https://ghoststream-vbbi.vercel.app" 
              target="_blank" 
              className="md:col-span-1 group relative overflow-hidden rounded-xl bg-blue-500/[0.02] border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="absolute top-2 left-2 h-4 w-4 border-t border-l border-blue-500/30 z-20" />
              <div className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-blue-500/30 z-20" />
              <BentoGridItem
                  title={<div className="space-y-1"><h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Ghoststream</h3><p className="text-[10px] font-mono text-neutral-500 uppercase">STATUS: LIVE</p></div>}
                  description="Real-time P2P sharing via WebRTC."
                  header={
                    <div className="relative flex-1 w-full h-full min-h-[12rem] overflow-hidden">
                      <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 flex items-center">
                        <GhoststreamCard />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90 pointer-events-none" />
                    </div>
                  }
                  icon={<Globe className="h-4 w-4 text-blue-500" />}
                  className="h-full border-none bg-transparent" 
              />
            </Link>
            
            <Link 
              href="https://online-voting-system-live.vercel.app" 
              target="_blank" 
              className="md:col-span-2 group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/30 transition-all"
            >
              <BentoGridItem 
                title={
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">SecureVote</h3>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase">STATUS: LIVE</p>
                  </div>
                }
                description="A secure, transparent voting system with receipt-based cryptographic verification." 
                header={
                  <div className="relative flex-1 w-full h-full min-h-[12rem] overflow-hidden rounded-xl border border-white/5">
                    <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                       <VotingPlatformCard />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>
                } 
                icon={<Vote className="h-4 w-4 text-emerald-500" />} 
                className="h-full border-none bg-transparent" 
              />
            </Link>

            <Link 
              href="https://github.com/Sanyam2511/repolens" 
              target="_blank" 
              className="md:col-span-2 group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] hover:border-purple-500/30 transition-all"
            >
              <BentoGridItem 
                title={
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">RepoLens</h3>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase">STATUS: LIVE</p>
                  </div>
                }
                description="Decode complex codebases instantly with dynamic dependency maps and Gemini-powered context-aware AI chat." 
                header={
                  <div className="relative flex-1 w-full h-full min-h-[12rem] overflow-hidden rounded-xl border border-white/5">
                    <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                       <RepoLensCard />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>
                } 
                icon={<SearchCode className="h-4 w-4 text-purple-500" />} 
                className="h-full border-none bg-transparent" 
              />
            </Link>

            <BentoGridItem 
              title="Portfolio V2" 
              description="Next.js 14 developer environment." 
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900/50 rounded-xl border border-white/5 p-4 relative overflow-hidden"><Code className="absolute bottom-2 right-2 w-12 h-12 opacity-10" /></div>} 
              icon={<Code className="h-4 w-4 text-neutral-500" />} 
              className="md:col-span-1 border border-white/5 bg-white/[0.01]" 
            />
        </BentoGrid>
      </div>

      <div id="arsenal" className="max-w-4xl mx-auto w-full mb-24 flex flex-col items-center scroll-mt-32">
        <div className="flex items-center gap-4 mb-12 self-start"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Skills & Technologies</h2></div>
        <div className="w-full relative py-10">
          <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10"><FloatingDock items={stackItems} desktopClassName="bg-transparent border-none shadow-none h-full" /></div>
        </div>
      </div>

      <div id="lifecycle" className="max-w-4xl mx-auto w-full mb-24 scroll-mt-32">
        <div className="flex items-center gap-4 mb-12"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Experience</h2></div>
        <div className="w-full relative"><StickyScroll content={internshipContent} /></div>
      </div>

      <div id="academics" className="max-w-4xl mx-auto w-full mb-24 scroll-mt-32">
        <div className="flex items-center gap-4 mb-16"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Education</h2></div>
        <TimelineLine>
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16 pb-16">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-[10px] font-medium text-blue-400 uppercase tracking-wider border border-blue-500/20">{edu.tag}</span>
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">{edu.duration}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-semibold text-neutral-100 hover:text-blue-400 transition-colors">{edu.title}</h3>
                  <p className="text-lg text-neutral-400 font-light">{edu.institution}</p>
                </div>
                <p className="max-w-xl text-base text-neutral-400 leading-relaxed font-light">{edu.description}</p>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 w-fit">
                    <GitCommit className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-400">{`Grade: ${edu.grade}`}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TimelineLine>
      </div>

      <div id="achievements" className="max-w-6xl mx-auto w-full mb-24 relative px-4 scroll-mt-32">
          <div className="absolute inset-0 bg-blue-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-4 mb-24">
            <div className="h-px w-12 bg-blue-500/50" />
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Achievements</h2>
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
        <div className="flex items-center gap-4 mb-12 self-start"><div className="h-px w-12 bg-blue-500/50" /><h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-400">Contact Me</h2></div>
        <TerminalFooter />
        <div className="mt-20 pb-10 flex flex-col items-center border-t border-white/5 pt-10">
          <p className="text-[10px] font-mono text-neutral-700 tracking-[0.2em] uppercase">© 2026 SANYAM PHARTYAL // PORTFOLIO</p>
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
                    <div className="p-3 bg-neutral-900 rounded-full border border-white/5 group-hover:border-blue-500/30 transition-all">{item.icon}</div>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((bar) => (
                            <div key={bar} className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${bar <= 4 ? 'bg-blue-500/40' : 'bg-neutral-800'} group-hover:bg-blue-400`} />
                        ))}
                    </div>
                </div>
                <div className="space-y-1">
                    <h3 className="text-4xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">{item.stat}</h3>
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-blue-500/50" />
                        <p className="text-xs font-medium text-blue-400 uppercase tracking-widest">{item.label}</p>
                    </div>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed pt-2">{item.sublabel}</p>
                </div>
            </div>
        </div>
    );
}