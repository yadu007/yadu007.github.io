import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer / IT Specialist",
      company: "HEINEKEN Global Shared Services",
      duration: "May 2025 - Present · 5 mos",
      location: "Cracow, Małopolskie, Poland · Hybrid",
      type: "Full-time",
      description: "Contributing to global digital transformation initiatives at one of the world's leading brewing companies.",
      technologies: ["Enterprise Solutions", "Global Scale", "Digital Transformation"]
    },
    {
      title: "Technical Project Lead",
      company: "L&T Technology Services",
      duration: "May 2024 - May 2025 · 1 yr 1 mo", 
      location: "Krakowski, Małopolskie, Poland · On-site",
      type: "Full-time",
      description: "Led technical projects and mentored engineering teams while driving architectural decisions.",
      technologies: ["Leadership", "Architecture", "Team Management"]
    },
    {
      title: "Senior Software Engineer",
      company: "L&T Technology Services",
      duration: "Oct 2021 - May 2024 · 2 yrs 8 mos",
      location: "Krakowski, Małopolskie, Poland · On-site", 
      type: "Full-time",
      description: "Worked extensively on Sky's top-tier broadband services, onboarding 500,000+ customers with 8,000+ daily new users. Built scalable telecommunications infrastructure serving the UK market.",
      technologies: ["Node.js", "Python", "AWS Lambda", "Terraform", "API Gateway", "SQS", "SNS", "VPC"]
    },
    {
      title: "Software Programmer",
      company: "ENSUREDIT",
      duration: "Jan 2020 - May 2022 · 2 yrs 5 mos",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time", 
      description: "Developed Ice Insurance platform providing smart solutions for insurance agents across the country. Created APIs, integrated insurance services, and built microservices.",
      technologies: ["Node.js", "Python", "Express.js", "Redis", "Beanstalkd", "MongoDB", "AWS"]
    },
    {
      title: "Python Developer",
      company: "Tarams",
      duration: "Feb 2019 - Jan 2020 · 1 yr",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time",
      description: "Focused on Python development with enterprise-grade solutions using modern frameworks and databases.",
      technologies: ["Python", "Django", "PostgreSQL", "RabbitMQ", "Celery", "Firebase", "Docker"]
    },
    {
      title: "Software Development Engineer",
      company: "Social Animal", 
      duration: "Oct 2017 - Feb 2019 · 1 yr 5 mos",
      location: "Chennai Area, India",
      type: "Full-time",
      description: "Built Social Animal, a powerful content marketing tool with vast article database for content research, influencer outreach, and competitor monitoring.",
      technologies: ["Node.js", "Express.js", "Elasticsearch", "Redis", "Beanstalkd", "MySQL", "HTML", "CSS"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            8 years of building scalable solutions across telecommunications, fintech, and enterprise domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover interactive-element">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
                      <Building className="h-5 w-5" />
                      {exp.company}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;