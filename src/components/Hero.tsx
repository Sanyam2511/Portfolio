import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, MapPin, Mail, Phone, Trophy, Star, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-luxury rounded-full blur-3xl opacity-25 animate-luxury-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-accent rounded-full blur-3xl opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 gradient-primary rounded-full blur-2xl opacity-15 animate-float delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="glass text-sm px-4 py-2 shimmer border-accent/40">
                <Trophy className="w-4 h-4 mr-2 text-accent" />
                Available for Full Stack Internship
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold font-inter leading-tight">
                <span className="text-luxury">Sanyam</span>
                <br />
                <span className="text-foreground">Phartyal</span>
              </h1>
              <p className="text-xl lg:text-2xl text-accent font-medium">
                Premium Full Stack Developer & Elite B.Tech CSE Student
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Top-tier 3rd-year student with <span className="text-accent font-semibold">9.48 GPA</span>, 
                crafting impactful enterprise-grade solutions with MERN stack. 
                <span className="text-primary font-semibold">150+ LeetCode</span> problems mastered and ready to drive innovation 
                in your next breakthrough project.
              </p>
            </div>

            {/* Premium Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="glass px-4 py-2 rounded-xl border border-primary/30 flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">9.48 GPA</span>
              </div>
              <div className="glass px-4 py-2 rounded-xl border border-accent/30 flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">150+ Problems</span>
              </div>
              <div className="glass px-4 py-2 rounded-xl border border-accent/30 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Hackathon Finalist</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dehradun, India
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                sanyamphartyal822@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                8171895077
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-luxury hover:glow-luxury transition-all duration-500 group text-background font-semibold">
                Explore My Work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="glass border-primary/40 hover:border-accent/60 hover:glow-accent transition-all duration-500 shimmer">
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Premium Profile Image Placeholder */}
          <div className="flex justify-center animate-slide-up delay-200">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl glass glow-luxury animate-luxury-glow relative overflow-hidden border-2 border-primary/20">
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/15 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full gradient-luxury flex items-center justify-center animate-glow">
                      <span className="text-2xl font-bold text-background">SP</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">Premium Profile Photo</p>
                    <p className="text-xs text-muted-foreground">Ready for Professional Headshots</p>
                  </div>
                </div>
              </div>
              
              {/* Floating premium badges */}
              <Badge className="absolute -top-3 -right-3 gradient-primary text-primary-foreground animate-float font-semibold px-3 py-1">
                <Trophy className="w-3 h-3 mr-1" />
                Elite GPA
              </Badge>
              <Badge className="absolute -bottom-3 -left-3 gradient-luxury text-background animate-float delay-500 font-semibold px-3 py-1">
                <Star className="w-3 h-3 mr-1" />
                Top Performer
              </Badge>
              <Badge className="absolute top-1/2 -left-6 gradient-accent text-accent-foreground animate-float delay-1000 font-semibold px-3 py-1">
                <Code className="w-3 h-3 mr-1" />
                MERN Expert
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;