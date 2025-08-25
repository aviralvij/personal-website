import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FPGA-Based Basic Computer",
      description:
        "Designed and implemented a computer using VHDL on a Basys 3 board, capable of performing core operations like addition, subtraction, multiplication, and division.",
      image: "/placeholder.svg",
      technologies: ["VHDL", "FPGA", "Basys 3", "Digital Design", "Computer Architecture"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Physical Health App & Website",
      description:
        "Built a mobile and web solution using Flutter for promoting physical wellness and activity tracking. Cross-platform deployment with real-time health monitoring.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Mobile Development", "Health APIs", "Cross-platform"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Developed using Java, HTML, and CSS, hosted on GitHub Pages to showcase academic and personal work with responsive design and interactive elements.",
      image: "/placeholder.svg",
      technologies: ["Java", "HTML", "CSS", "GitHub Pages", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "L1 Rocket Project",
      description:
        "Created and tested a Level 1 rocket design using CAD and OpenRocket simulation software. Fabricated through 3D printing and laser cutting technologies.",
      image: "/placeholder.svg",
      technologies: ["CAD Design", "OpenRocket", "3D Printing", "Laser Cutting", "Aerospace"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm text-primary mb-2">
              &gt; ACCESSING_PROJECT_DATABASE...
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 hero-title">SYSTEM_INFILTRATIONS</h2>
            <p className="text-muted-foreground text-lg terminal-text">
              [CLASSIFIED] Digital constructs and hardware penetration projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="glass-card shadow-glow circuit-bg data-stream">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-3 text-accent terminal-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <span className="terminal-text text-primary">[MISSION_BRIEF]:</span>{" "}
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs neon-pulse terminal-text border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/*
                  <div className="flex gap-3">
                    <Button size="sm" className="flex items-center gap-2 terminal-text neon-pulse">
                      <ExternalLink className="w-4 h-4" />
                      &gt; ACCESS_SYSTEM
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 terminal-text data-stream border-primary">
                      <Github className="w-4 h-4" />
                      &gt; VIEW_SOURCE
                    </Button>
                  </div>
                  */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
