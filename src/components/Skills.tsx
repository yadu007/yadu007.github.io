import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cloud, Database, Settings, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Node.js", "JavaScript", "TypeScript", "Java", "C#"]
    },
    {
      icon: Globe,
      title: "Web Frameworks",
      skills: ["Express.js", "Django", "React", "HTML5", "CSS3", "RESTful APIs"]
    },
    {
      icon: Database,
      title: "Databases & Storage", 
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "AWS DocumentDB"]
    },
    {
      icon: Cloud,
      title: "AWS Cloud Services",
      skills: ["Lambda", "API Gateway", "SQS", "SNS", "VPC", "CloudWatch", "Route53", "Cognito"]
    },
    {
      icon: Settings,
      title: "DevOps & Tools",
      skills: ["Docker", "Terraform", "RabbitMQ", "Celery", "Beanstalkd", "Firebase", "Grafana"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Desktop",
      skills: ["Android Development", "Windows Applications", "Cross-platform Solutions"]
    }
  ];

  const highlights = [
    { number: "500,000+", label: "Customers Onboarded" },
    { number: "8,000+", label: "Daily Active Users" },
    { number: "8+", label: "Years Experience" },
    { number: "6+", label: "Companies Served" }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning full-stack development, cloud architecture, and enterprise solutions
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {highlight.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {highlight.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover interactive-element">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Key Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <h4 className="font-bold mb-2">Telecommunications</h4>
                <p className="text-muted-foreground text-sm">
                  Sky Broadband infrastructure serving 500K+ customers
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <h4 className="font-bold mb-2">Cloud Architecture</h4>
                <p className="text-muted-foreground text-sm">
                  Scalable AWS solutions with Terraform automation
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <h4 className="font-bold mb-2">Enterprise Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Large-scale applications for global corporations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;