import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, MapPin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-accent rounded-full blur-3xl opacity-15 animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="glass text-sm px-4 py-2">
                Available for Full Stack Internship
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold font-inter leading-tight">
                <span className="text-gradient">Sanyam</span>
                <br />
                <span className="text-foreground">Phartyal</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Full Stack Developer & B.Tech CSE Student
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate 3rd-year student with 9.48 GPA, building impactful projects with MERN stack. 
                150+ LeetCode problems solved and ready to contribute to scalable solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dehradun
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                sanyamphartyal822@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                8171895077
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary hover:glow-primary transition-all duration-300 group">
                View Projects
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="glass border-primary/30 hover:border-primary/60 hover:glow-primary transition-all duration-300">
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center animate-slide-up delay-200">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl glass glow-accent animate-glow relative overflow-hidden">
                <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">SP</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Profile Photo Placeholder</p>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground animate-float">
                9.48 GPA
              </Badge>
              <Badge className="absolute -bottom-2 -left-2 bg-accent text-accent-foreground animate-float delay-500">
                150+ Problems
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;