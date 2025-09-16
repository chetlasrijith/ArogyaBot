import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Calendar, Stethoscope, Mic, MessageSquare, Shield } from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Real-time Outbreak Alerts",
    description: "Stay informed about health emergencies and disease outbreaks in your area with timely notifications.",
    color: "text-health-warning"
  },
  {
    icon: Calendar,
    title: "Vaccine Reminders",
    description: "Never miss important vaccinations with personalized reminders for you and your family.",
    color: "text-health-success"
  },
  {
    icon: Stethoscope,
    title: "Symptom Guidance",
    description: "Get preliminary health assessments and guidance on when to seek professional medical care.",
    color: "text-primary"
  },
  {
    icon: Mic,
    title: "Voice & Text Support",
    description: "Interact naturally through voice calls, text messages, or chat - whatever works best for you.",
    color: "text-accent"
  },
  {
    icon: MessageSquare,
    title: "Offline SMS/IVR Access",
    description: "Access healthcare guidance even with limited internet through SMS and voice calls.",
    color: "text-muted-foreground"
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your health information is protected with enterprise-grade security and privacy measures.",
    color: "text-health-emergency"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Health Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ArogyaAI provides a complete suite of healthcare tools designed to support 
            individuals, families, and healthcare workers in rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass hover-lift group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}