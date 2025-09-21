import { Heart, Mail, Phone, MapPin } from "lucide-react";
import arogyaLogo from "@/assets/arogyaai-logo.png";

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={arogyaLogo} alt="ArogyaAI Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">ArogyaAI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering rural communities with AI-driven healthcare guidance 
              in every language, anytime, anywhere.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made by Team Kaizen</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About ArogyaAI</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">Impact</a></li>
              <li><a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Developer Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@arogyaai.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 70324 40444</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 ArogyaAI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
              <strong>Disclaimer:</strong> ArogyaAI is for health awareness only and not a substitute for professional medical advice. 
              Always consult healthcare professionals for medical concerns.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}