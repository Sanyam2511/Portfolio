import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, TrendingUp, Heart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RaktMitra",
      subtitle: "Blood Donation Platform",
      description: "Full-stack web platform connecting 1,000+ blood donors and seekers with real-time sync and secure JWT authentication.",
      impact: "Increased donor interaction rate by 60%",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      icon: <Heart className="w-6 h-6 text-red-500" />,
      link: "#",
      github: "#",
      stats: "1,000+ Users"
    },
    {
      title: "Foliona",
      subtitle: "Smart Plant Care Assistant",
      description: "Personalized plant care assistant supporting 10+ plant categories with individual watering, light, and fertilization logic.",
      impact: "Increased user engagement by 30%",
      tech: ["React", "Node.js", "MongoDB", "Weather API"],
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      link: "#",
      github: "#",
      stats: "10+ Categories"
    },
    {
      title: "StudyBuddy",
      subtitle: "Educational Web App",
      description: "Fully accessible web app with text-to-speech, speech-to-text, and high-contrast themes for students with disabilities.",
      impact: "Reduced learning friction by 40%",
      tech: ["JavaScript", "HTML", "CSS", "Web Speech API"],
      icon: <Users className="w-6 h-6 text-blue-500" />,
      link: "#",
      github: "#",
      stats: "5+ Disabilities Supported"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications solving meaningful problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.title} className={`glass hover:glow-primary transition-all duration-500 group relative overflow-hidden animate-slide-up`} style={{animationDelay: `${index * 100}ms`}}>
              <div className="p-6 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.stats}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary">
                    📈 {project.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 glass border-primary/30 hover:border-primary/60 hover:glow-primary transition-all duration-300">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="glass border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all duration-300">
                    <Github size={16} />
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in delay-300">
          <Button variant="outline" size="lg" className="glass border-primary/30 hover:border-primary/60 hover:glow-primary transition-all duration-300">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;