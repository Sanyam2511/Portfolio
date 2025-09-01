import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = {
    languages: ["C", "Java", "JavaScript", "MySQL"],
    technologies: ["React", "Node.js", "MongoDB", "HTML", "CSS"],
    tools: ["Git", "Github", "Postman"],
    concepts: ["Data Structures & Algorithms", "OOPS", "DBMS", "OS"]
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-accent opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-luxury">About Me</span>
          </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-slide-up">
              <Card className="glass p-6 hover:glow-primary transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-lg">B.Tech in Computer Science</h4>
                    <p className="text-muted-foreground">DIT University, Dehradun</p>
                    <p className="text-sm text-muted-foreground">August 2023 – Present</p>
                    <Badge variant="secondary" className="mt-2">GPA: 9.48/10.00</Badge>
                  </div>
                  <div className="pt-4">
                    <h5 className="font-medium mb-2">Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {["OOP", "DSA", "DBMS", "Operating System"].map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6 animate-slide-up delay-100">
              <Card className="glass p-6 hover:glow-accent transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Passion & Goals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about creating impactful software solutions that solve real-world problems. 
                  With a strong foundation in full-stack development and algorithms, I'm constantly learning 
                  and building projects that push the boundaries of what's possible with modern web technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Currently seeking a Full Stack internship where I can contribute to scalable, meaningful 
                  software solutions while growing alongside experienced developers.
                </p>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-up delay-200">
            <h3 className="text-3xl font-bold text-center mb-10">
              <span className="text-luxury">Technical Excellence</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <Card key={category} className="glass p-6 hover:glow-primary transition-all duration-300 group">
                  <h4 className="font-semibold text-lg mb-4 capitalize text-primary group-hover:text-accent transition-colors">
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="w-full justify-start text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;