import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Motel Manager",
      company: "Macquarie Valley Motor Inn",
      period: "June 2025 - Present",
      description: "Managing daily operations of a 40-room motel facility. Handling check-ins/outs, room allocations, and service logistics via GuestPoint systems.",
      technologies: ["GuestPoint", "MYOB", "Payroll Systems", "Financial Tracking"],
      achievements: [
        "Improved booking efficiency through process streamlining",
        "Reduced administrative overhead",
        "Maintained high guest satisfaction ratings",
        "Coordinate staffing schedules for housekeeping and maintenance teams"
      ]
    },
    {
      title: "Insurance Specialist", 
      company: "QBE Insurance",
      period: "October 2023 - May 2024",
      description: "Responded to 40-50 customer inquiries daily via Genesys platform, maintaining 4-5 minute resolution time with high accuracy.",
      technologies: ["Genesys", "Workday", "CRM Systems", "Data Management"],
      achievements: [
        "Achieved high NPS through personalized service",
        "Maintained accurate customer data for compliance",
        "Processed high-volume inquiries efficiently",
        "Supported reporting and compliance efforts"
      ]
    },
    {
      title: "Student Tutor",
      company: "Self-Employed",
      period: "January 2020 - Present", 
      description: "Tutoring 30+ high school and HSC students in Mathematics Ext 1/2, Chemistry, Physics, and Software Design.",
      technologies: ["Educational Methods", "Assessment Tools", "Visual Mapping", "Mock Exams"],
      achievements: [
        "Improved student performance by 15-20%",
        "Conducted bi-weekly assessments",
        "Applied differentiated teaching methods",
        "Developed targeted learning plans"
      ]
    },
    {
      title: "Sales Intern",
      company: "Instalocate", 
      period: "December 2020 - February 2021",
      description: "Performed administrative tasks and market research to support the sales pipeline development.",
      technologies: ["Market Research", "Sales Analytics", "Customer Engagement"],
      achievements: [
        "Developed tailored sales pitches",
        "Increased customer engagement",
        "Supported customer acquisition efforts",
        "Conducted comprehensive market analysis"
      ]
    },
    {
      title: "Engineering Intern",
      company: "University of Sydney",
      period: "November 2020 - December 2020",
      description: "Designed CAD models and PCB layouts for small-scale electronics projects during Engineering Work Experience Program.",
      technologies: ["CAD Design", "PCB Layout", "Circuit Simulation", "Schematic Verification"],
      achievements: [
        "Designed functional CAD models",
        "Created PCB layouts for electronics projects", 
        "Performed circuit simulations",
        "Validated functional designs through testing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm text-primary mb-2">
              &gt; LOADING_MISSION_ARCHIVE...
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 hero-title">OPERATIONAL_HISTORY</h2>
            <p className="text-muted-foreground text-lg terminal-text">
              [CLASSIFIED] Field deployment records and mission accomplishments
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative lg:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block"></div>
                  
                  <Card className="glass-card shadow-glow hover:shadow-strong transition-all duration-300 circuit-bg data-stream">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1 text-accent terminal-text">{exp.title}</h3>
                          <p className="text-primary font-medium terminal-text">[{exp.company}]</p>
                        </div>
                        <Badge variant="outline" className="w-fit mt-2 lg:mt-0 border-primary text-primary terminal-text neon-pulse">
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2 terminal-text text-accent">&gt; MISSION_ACCOMPLISHMENTS:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <span className="text-primary mr-2 terminal-text">▶</span>
                              <span className="text-sm text-muted-foreground">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 terminal-text text-accent">&gt; DEPLOYED_SYSTEMS:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs neon-pulse terminal-text border-primary/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;