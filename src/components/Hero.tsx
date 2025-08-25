import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-subtle-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <div className="terminal-text text-sm opacity-70 mb-2">
                &gt; INITIALIZING_NEURAL_INTERFACE...
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                SYSTEM_USER:{" "}
                <span className="hero-title">
                  AVIRAL_VIJ
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-accent terminal-text">
                DIGITAL_ARCHITECT | CODE_REBEL | SYSTEM_INFILTRATOR
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed circuit-bg p-4 rounded border border-primary/30">
              <span className="terminal-text text-primary">[STATUS]:</span> Computer Engineering & FinTech operative at UNSW. 
              Specializing in data management protocols, technical project deployment, and 
              full-stack system penetration. Experienced in coordinating resistance operations 
              across high-security corporate environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover:shadow-yellow-glow transition-all duration-300 neon-pulse terminal-text"
              >
                &gt; ACCESS_MISSION_ARCHIVE
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 data-stream terminal-text"
              >
                &gt; ESTABLISH_SECURE_LINK
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-in">
            <div className="relative float-animation">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-glow border-2 border-primary relative">
                <img
                  src={heroPortrait}
                  alt="Digital operative profile scan"
                  className="w-full h-full object-cover filter brightness-110 contrast-125"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-4 left-4 terminal-text text-xs text-primary">
                  [ID_SCAN_ACTIVE]
                </div>
                <div className="absolute bottom-4 right-4 terminal-text text-xs text-accent">
                  CLEARANCE_LEVEL: OMEGA
                </div>
              </div>
              <div className="absolute -inset-1 rounded-lg bg-hero-gradient opacity-30 blur-md -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;