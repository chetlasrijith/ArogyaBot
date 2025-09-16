import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Clock } from "lucide-react";

const impactStats = [
  {
    icon: TrendingUp,
    metric: "+20%",
    label: "Health Awareness",
    description: "Increased health awareness in rural communities",
    color: "text-health-success"
  },
  {
    icon: Target,
    metric: "80%",
    label: "Accuracy Rate",
    description: "AI-powered health guidance accuracy",
    color: "text-primary"
  },
  {
    icon: Users,
    metric: "10K+",
    label: "Community Members",
    description: "People served across rural India",
    color: "text-accent"
  },
  {
    icon: Clock,
    metric: "24/7",
    label: "Availability",
    description: "Round-the-clock health support",
    color: "text-health-warning"
  }
];

const beneficiaries = [
  {
    title: "Citizens",
    benefits: ["Instant health guidance", "Preventive care reminders", "Emergency assistance", "Language accessibility"]
  },
  {
    title: "ASHA Workers",
    benefits: ["Decision support tools", "Training resources", "Community outreach", "Data collection assistance"]
  },
  {
    title: "Government Health Departments",
    benefits: ["Real-time health monitoring", "Outbreak prediction", "Resource optimization", "Policy insights"]
  }
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Healthcare Delivery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how ArogyaAI is making a measurable impact on healthcare accessibility 
            and outcomes across rural communities.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="glass hover-lift text-center">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Beneficiaries */}
        <div className="grid md:grid-cols-3 gap-8">
          {beneficiaries.map((beneficiary, index) => (
            <Card key={index} className="glass hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {beneficiary.title}
                </h3>
                <ul className="space-y-3">
                  {beneficiary.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}