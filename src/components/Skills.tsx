import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "NEURAL_INTERFACES",
      skills: ["Python", "Java", "C", "C#", "JavaScript", "TypeScript", "VHDL", "Verilog"],
      color: "shadow-glow"
    },
    {
      title: "SYSTEM_FRAMEWORKS", 
      skills: ["React", "Redux", "Flutter", "HTML", "CSS", "Unix Shell"],
      color: "shadow-blue-glow"
    },
    {
      title: "HARDWARE_PROTOCOLS",
      skills: ["FPGA (Basys3)", "Vivado", "Quartus", "CAD Design", "PCB Design", "Circuit Simulation"],
      color: "shadow-yellow-glow"
    },
    {
      title: "OPERATIONAL_TOOLS",
      skills: ["Visual Studio", "Git", "MYOB", "GuestPoint", "Genesys", "Workday", "MS Office"],
      color: "shadow-medium"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm text-primary mb-2">
              &gt; SCANNING_INSTALLED_MODULES...
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 hero-title">DIGITAL_ARSENAL</h2>
            <p className="text-muted-foreground text-lg terminal-text">
              [CLASSIFIED] Neural interface protocols and system infiltration tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
                <Card 
                key={category.title} 
                className={`glass-card ${category.color} hover:shadow-strong transition-all duration-300 circuit-bg data-stream`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary mr-3 animate-pulse"></div>
                    <h3 className="text-lg font-semibold terminal-text text-accent">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default neon-pulse terminal-text border-primary/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Proficiency Bars */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 hero-title terminal-text">&gt; SYSTEM_PROFICIENCY_LEVELS</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Python/Java/C Programming", level: 90 },
                { name: "React/Flutter Development", level: 85 },
                { name: "Hardware Design & FPGA", level: 80 },
                { name: "Database Management", level: 85 },
                { name: "System Operations", level: 95 },
                { name: "Customer Service Protocols", level: 90 }
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2 glass-card p-4">
                  <div className="flex justify-between">
                    <span className="font-medium terminal-text text-accent">{skill.name}</span>
                    <span className="text-primary terminal-text">[{skill.level}%]</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 border border-primary/30">
                    <div 
                      className="bg-gradient-to-r from-primary via-accent to-primary h-3 rounded-full transition-all duration-1000 ease-out shadow-glow"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;