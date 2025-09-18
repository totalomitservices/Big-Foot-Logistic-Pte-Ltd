
import { Globe, ShieldCheck, Timer, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Reliability",
    description: "Count on us for secure and dependable delivery. Your cargo is our top priority, handled with utmost care.",
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: "Global Network",
    description: "With a vast network of partners, we offer seamless logistics solutions across the globe.",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Professionalism",
    description: "Our experienced team is dedicated to providing exceptional service and expert guidance.",
  },
  {
    icon: <Timer className="h-10 w-10 text-accent" />,
    title: "Fast & On-Time",
    description: "We leverage advanced tracking and efficient routes to ensure your deliveries are always on schedule.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold text-primary">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are committed to providing superior logistics services that drive success for your business.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center border-0 shadow-none bg-transparent group">
              <CardHeader className="items-center">
                <div className="bg-secondary p-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/30 group-hover:shadow-xl">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{feature.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
