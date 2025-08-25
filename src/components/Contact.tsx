import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="terminal-text text-sm text-primary mb-2">
              &gt; ESTABLISHING_SECURE_COMMUNICATION_CHANNEL...
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 hero-title">CONTACT_PROTOCOL</h2>
            <p className="text-muted-foreground text-lg terminal-text">
              [SECURE_LINE] Initiate encrypted communication for mission coordination
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 hero-title terminal-text">&gt; INITIATE_CONTACT</h3>
                <div className="circuit-bg p-4 rounded border border-primary/30 mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="terminal-text text-primary">[TRANSMISSION]:</span> Digital operative ready for mission briefings, 
                    system collaboration protocols, or knowledge transfer operations. 
                    All communications are monitored and encrypted. Proceed with secure contact.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center neon-pulse">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium terminal-text text-accent">SECURE_EMAIL</p>
                    <a 
                      href="mailto:contactaviralvij@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors terminal-text"
                    >
                      contactaviralvij@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center neon-pulse">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium terminal-text text-accent">ENCRYPTED_LINE</p>
                    <a 
                      href="tel:+61437532888"
                      className="text-muted-foreground hover:text-primary transition-colors terminal-text"
                    >
                      0437 532 888
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center neon-pulse">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium terminal-text text-accent">COORDINATES</p>
                    <p className="text-muted-foreground terminal-text">
                      Sydney, Australia [UNSW_SECTOR]
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-medium mb-4 terminal-text text-accent">&gt; NETWORK_LINKS</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/aviralvij/"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors neon-pulse data-stream"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass-card shadow-glow circuit-bg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 hero-title terminal-text">&gt; SECURE_TRANSMISSION_FORM</h3>
                <form className="space-y-4" action="https://formspree.io/f/mblarqvg" method="POST">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" name="firstName" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" name="lastName" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" name="email" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input placeholder="Project Discussion" name="subject" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      name="message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow terminal-text neon-pulse">
                    &gt; TRANSMIT_MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;