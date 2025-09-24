import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Linkedin, Github, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Always eager to explore new challenges and forge meaningful connections. 
            Let's discuss potential collaborations or exciting opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Cracow, Poland</span>
              </div>
              
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Currently contributing to HEINEKEN's global digital transformation 
                  and open to discussing innovative projects and opportunities.
                </p>
                
                <div className="flex flex-col gap-3">
                  <Button className="justify-start" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  
                  <Button className="justify-start" variant="outline">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                  
                  <Button className="justify-start" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Projects
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability & Interests */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Open to Opportunities</h4>
                  <p className="text-muted-foreground text-sm">
                    Consulting, technical leadership roles, and exciting freelance projects
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Areas of Interest</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cloud Architecture",
                      "Microservices",
                      "DevOps",
                      "AI/ML Integration",
                      "Enterprise Solutions",
                      "Telecommunications"
                    ].map((interest, index) => (
                      <span key={index} className="skill-tag text-xs">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Collaboration Style</h4>
                  <p className="text-muted-foreground text-sm">
                    Hybrid work enthusiast, continuous learner, and advocate 
                    for innovative problem-solving approaches
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="card-hover text-center bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether it's scaling your infrastructure, building innovative solutions, 
              or tackling complex technical challenges, let's turn ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg pulse-glow">
                <Mail className="h-5 w-5 mr-2" />
                Start a Conversation
              </Button>
              
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;