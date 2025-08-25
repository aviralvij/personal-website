import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm text-primary mb-2">
              &gt; ACCESSING_PERSONNEL_FILE...
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 hero-title">OPERATIVE_PROFILE</h2>
            <p className="text-muted-foreground text-lg terminal-text">
              [CLASSIFIED] Digital resistance member - Full system analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="circuit-bg p-4 rounded border border-primary/30">
                <p className="text-lg leading-relaxed">
                  <span className="terminal-text text-accent">[BACKGROUND]:</span> Motivated Computer Engineering & Commerce (FinTech) operative 
                  currently deployed at UNSW. Specialized in data management protocols, administrative 
                  support systems, and technical project delivery. Extensive experience managing 
                  structured intelligence across high-security corporate environments.
                </p>
              </div>
              
              <div className="data-stream p-4 bg-card/50 rounded border border-primary/20">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  <span className="terminal-text text-primary">[OPERATIONAL_STATUS]:</span> Currently infiltrating motel management systems 
                  via Macquarie Valley Motor Inn, handling customer service protocols at QBE Insurance, 
                  and conducting knowledge transfer operations through tutoring networks. 
                  Passionate about leveraging engineering and finance principles in real-world system penetration.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 glass-card neon-pulse">
                  <div className="text-2xl font-bold text-primary mb-2 terminal-text">ACTIVE</div>
                  <div className="text-sm text-muted-foreground">Mission Status</div>
                </div>
                <div className="text-center p-4 glass-card neon-pulse">
                  <div className="text-2xl font-bold text-accent mb-2 terminal-text">2026</div>
                  <div className="text-sm text-muted-foreground">Target Completion</div>
                </div>
              </div>
            </div>

            <Card className="glass-card shadow-glow circuit-bg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 hero-title terminal-text">&gt; OPERATIONAL_CAPABILITIES</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shadow-glow"></div>
                    <div>
                      <h4 className="font-medium text-accent">System Management & Operations</h4>
                      <p className="text-sm text-muted-foreground">
                        Managing 40-room motel operations, payroll systems via MYOB, and coordinating maintenance protocols.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shadow-yellow-glow"></div>
                    <div>
                      <h4 className="font-medium text-primary">Intelligence & Customer Protocols</h4>
                      <p className="text-sm text-muted-foreground">
                        Processing 40-50 daily inquiries via Genesys, maintaining CRM databases, achieving high NPS ratings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 shadow-blue-glow"></div>
                    <div>
                      <h4 className="font-medium text-accent">Knowledge Transfer Operations</h4>
                      <p className="text-sm text-muted-foreground">
                        Tutoring 30+ operatives in Mathematics, Chemistry, Physics & Software Design. 15-20% performance improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;