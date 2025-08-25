import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Aviral Vij</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating digital experiences 
              that make a difference.
            </p>
            <div className="flex space-x-4">
              {/* Github icon removed */}
              <a 
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* Twitter icon removed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a 
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#skills"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#experience"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a 
                href="#projects"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>contactaviralvij@gmail.com</p>
              <p>0437 532 888</p>
              <p>Sydney, Australia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Aviral Vij. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;