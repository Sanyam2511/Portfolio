import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Code, FileText, Globe, Laptop, Rocket, User } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white py-10 px-5 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mb-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Your Name <br />
          <span className="text-2xl md:text-4xl font-light text-neutral-400">
            Full Stack Developer
          </span>
        </h1>
        <p className="mt-4 text-neutral-400 max-w-lg">
           3rd Year Student. Building scalable applications with Next.js & TypeScript.
        </p>
      </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </main>
  );
}

const items = [
  {
    title: "Ghoststream",
    description: "Real-time P2P file sharing with WebRTC and Socket.io.",
    header: <div className="flex items-center justify-center h-full w-full bg-blue-500/10 text-blue-500">Live Preview Area</div>,
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Internship Experience",
    description: "3 Months @ [Company Name]. Worked on scalable UI.",
    header: <div className="flex items-center justify-center h-full w-full bg-green-500/10 text-green-500">Timeline Graphic</div>,
    icon: <Laptop className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tech Stack",
    description: "Next.js, Prisma, TypeScript, Docker.",
    header: <div className="flex items-center justify-center h-full w-full bg-orange-500/10 text-orange-500">Icons Marquee</div>,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "About Me",
    description: "Passionate about UI/UX and backend performance.",
    header: <div className="flex items-center justify-center h-full w-full bg-purple-500/10 text-purple-500">Profile / Map</div>,
    icon: <User className="h-4 w-4 text-neutral-500" />,
  },
];