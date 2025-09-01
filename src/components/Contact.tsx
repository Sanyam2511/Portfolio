import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sanyamphartyal822@gmail.com",
      href: "mailto:sanyamphartyal822@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8171895077",
      href: "tel:+918171895077",
      color: "accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Dehradun, India",
      href: "#",
      color: "secondary"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "#",
      platform: "linkedin"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub", 
      href: "#",
      platform: "github"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Portfolio",
      href: "#",
      platform: "portfolio"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 gradient-accent rounded-full blur-3xl opacity-10 animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-luxury">Let's Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to contribute to your team's success. Let's discuss how we can build something amazing together.
            </p>
            <Badge variant="secondary" className="mt-4 glass">
              <Calendar className="w-4 h-4 mr-2" />
              Available for Immediate Start
            </Badge>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.label}
                className="glass hover:glow-primary transition-all duration-500 group p-6 text-center animate-slide-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {method.label}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.value}
                  </p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="glass border-primary/30 hover:border-primary/60 hover:glow-primary transition-all duration-300 w-full"
                    asChild
                  >
                    <a href={method.href}>
                      Connect
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Main CTA Section */}
          <Card className="glass hover:glow-accent transition-all duration-500 p-8 text-center animate-fade-in delay-300">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-luxury">Ready to Start?</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  I'm actively seeking a Full Stack internship where I can apply my MERN stack expertise, 
                  contribute to meaningful projects, and grow alongside experienced developers. 
                  Let's discuss how I can add value to your team.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.platform}
                    variant="outline"
                    size="sm"
                    className="glass border-primary/30 hover:border-primary/60 hover:glow-primary transition-all duration-300"
                    asChild
                  >
                    <a href={link.href} className="flex items-center gap-2">
                      {link.icon}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>

              {/* Primary CTA */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="gradient-primary hover:glow-primary transition-all duration-300 group"
                  asChild
                >
                  <a href="mailto:sanyamphartyal822@gmail.com" className="flex items-center gap-2">
                    <Mail size={20} />
                    Get In Touch
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Footer Note */}
          <div className="text-center mt-12 animate-fade-in delay-500">
            <p className="text-sm text-muted-foreground">
              💡 Open to discussing internship opportunities, project collaborations, or just connecting with fellow developers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;