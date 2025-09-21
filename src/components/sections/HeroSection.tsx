import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-health-community.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Heart className="w-6 h-6 text-health-success" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted Healthcare AI
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                ArogyaAI
              </span>{" "}
              – Your Health Companion in Every Language
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Trusted healthcare guidance, anytime, anywhere – via WhatsApp, SMS, and IVR.
              Empowering rural and semi-urban communities with AI-driven health support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/14155238886" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity group">
                  Try ArogyaAI
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="hover-lift">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Multi-language</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-health-success" />
                <span>80% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-health-emergency" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl hover-lift">
              <img 
                src={heroImage} 
                alt="Rural healthcare community using ArogyaAI" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 gradient-card opacity-20"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glass rounded-full p-4 float">
              <Heart className="w-8 h-8 text-health-success" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-full p-4 float" style={{animationDelay: '1.5s'}}>
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}