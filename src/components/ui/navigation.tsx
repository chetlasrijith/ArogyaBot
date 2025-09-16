import { Button } from "@/components/ui/button";
import arogyaLogo from "@/assets/arogyaai-logo.png";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={arogyaLogo} alt="ArogyaAI Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-foreground">ArogyaAI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
            Impact
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </a>
        </div>

        <Button variant="default" className="gradient-primary hover:opacity-90 transition-opacity">
          Try ArogyaAI
        </Button>
      </div>
    </nav>
  );
}