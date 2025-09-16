import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="w-6 h-6 text-health-success" />
            <span className="text-sm font-medium text-muted-foreground">
              Join the Movement
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Join the{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Digital Health Revolution
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Be part of transforming healthcare accessibility in rural India. 
            Get started with ArogyaAI today and experience AI-powered health guidance 
            in your own language.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity group">
              Get Started with ArogyaAI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Available on WhatsApp • SMS • Voice Calls • Free to Use
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-health-success/10 rounded-full blur-xl"></div>
    </section>
  );
}