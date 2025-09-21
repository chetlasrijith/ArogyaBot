import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Send } from "lucide-react";

export function DemoSection() {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See ArogyaAI in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how easy it is to get healthcare guidance through
            your preferred communication method.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* WhatsApp Demo */}
          <Card className="glass hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">WhatsApp Chat</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-lg p-3 max-w-xs">
                    <p className="text-sm">
                      Hi ArogyaAI, my child has fever and cough. What should I do?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="gradient-primary rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">
                      I understand your concern. For a child with fever and cough,
                      here's what you should do:
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="gradient-primary rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">
                      1. Monitor temperature regularly
                      <br />
                      2. Give plenty of fluids
                      <br />
                      3. Ensure rest
                      <br />
                      4. If fever {'>'}101°F or persistent cough, consult a doctor
                      immediately
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-secondary rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Thank you! Should I be worried?</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="gradient-primary rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">
                      Fever and cough in children can be common, but monitor
                      closely. If symptoms worsen or persist beyond 2-3 days,
                      please consult a healthcare provider. I'm here 24/7 if you
                      need more guidance! 💚
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 p-3 bg-background rounded-lg">
                <input
                  type="text"
                  placeholder="Type your health question..."
                  className="flex-1 bg-transparent outline-none text-sm"
                  disabled
                />
                <Send className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          {/* SMS/IVR Demo */}
          <Card className="glass hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">SMS & Voice Support</span>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium mb-2">SMS Option</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-secondary p-3 rounded">
                      <strong>You:</strong> SMS "HEALTH FEVER CHILD" to 12345
                    </div>
                    <div className="bg-primary/10 p-3 rounded">
                      <strong>ArogyaAI:</strong> For child fever: Monitor temp, give
                      fluids, rest. See doctor if {'>'}101°F. Reply HELP for more
                      info.
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <p className="font-medium mb-2">Voice (IVR) Option</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-secondary p-3 rounded">
                      <strong>You:</strong> Call 1800-XXX-XXXX
                    </div>
                    <div className="bg-accent/10 p-3 rounded">
                      <strong>ArogyaAI:</strong> "Hello! Press 1 for Odia, 2 for
                      Hindi, 3 for English. Describe your health concern after the
                      beep..."
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Available 24/7:</strong> Get instant health guidance
                    through SMS or voice calls,
                    <br className="hidden sm:block" /> even without internet
                    connectivity. Perfect for rural areas with basic phone access.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/14155238886"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity">
              Try Interactive Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}