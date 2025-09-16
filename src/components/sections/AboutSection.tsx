import { Card, CardContent } from "@/components/ui/card";
import { Languages, Smartphone, Users, Wifi } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bridging Healthcare Gaps with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ArogyaAI is a multilingual AI-powered health chatbot specifically designed for 
            rural and semi-urban communities in India. We provide accessible healthcare 
            guidance through familiar platforms like WhatsApp, SMS, and voice calls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multilingual Support</h3>
              <p className="text-sm text-muted-foreground">
                Available in Odia, Hindi, and English with more languages coming soon
              </p>
            </CardContent>
          </Card>

          <Card className="glass hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Universal Access</h3>
              <p className="text-sm text-muted-foreground">
                Works on smartphones and basic feature phones via SMS and IVR
              </p>
            </CardContent>
          </Card>

          <Card className="glass hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Community Focused</h3>
              <p className="text-sm text-muted-foreground">
                Designed specifically for rural and semi-urban healthcare needs
              </p>
            </CardContent>
          </Card>

          <Card className="glass hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Offline Capable</h3>
              <p className="text-sm text-muted-foreground">
                SMS and IVR support for areas with limited internet connectivity
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}