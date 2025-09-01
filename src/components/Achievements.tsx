import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Code, GitBranch } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "150+ LeetCode Problems",
      description: "Maintained 100+ day streak with consistent problem-solving",
      badge: "100+ Days",
      color: "primary"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Hackathon Finalist",
      description: "Finished as finalist among 100+ teams at Hack the Hills by DIT University",
      badge: "Top Finalist",
      color: "accent"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "3+ Full-Stack Apps",
      description: "Built and deployed end-to-end applications using MERN and vanilla JS",
      badge: "Deployed",
      color: "secondary"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-500" />,
      title: "Open Source Contributions",
      description: "Contributed pull requests improving documentation and resolving UI bugs",
      badge: "Active",
      color: "muted"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that showcase dedication and growth
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title} 
              className="glass hover:glow-primary transition-all duration-500 group p-6 text-center animate-slide-up relative overflow-hidden"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                    {achievement.icon}
                  </div>
                </div>

                {/* Badge */}
                <Badge 
                  variant="secondary" 
                  className="mb-3 bg-primary/20 text-primary border-primary/30"
                >
                  {achievement.badge}
                </Badge>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 animate-fade-in delay-200">
          <Card className="glass max-w-4xl mx-auto p-8 hover:glow-accent transition-all duration-300">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">9.48</div>
                <p className="text-sm text-muted-foreground">GPA Score</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">3+</div>
                <p className="text-sm text-muted-foreground">Projects Built</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">150+</div>
                <p className="text-sm text-muted-foreground">Problems Solved</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">1000+</div>
                <p className="text-sm text-muted-foreground">Users Impacted</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;