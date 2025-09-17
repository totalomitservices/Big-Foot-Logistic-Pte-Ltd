"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Calculator, Map, Phone } from "lucide-react";
import Link from "next/link";

const quickAccessItems = [
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Get a Quote",
    href: "#contact",
  },
  {
    icon: <Map className="h-6 w-6" />,
    title: "Track Shipment",
    href: "#",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Contact Us",
    href: "#contact",
  },
];

export default function QuickAccessCard() {
  return (
    <Card className="w-full bg-white/10 backdrop-blur-sm border-white/20 shadow-lg animate-fade-in text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          Quick Access
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-6 pt-0">
        {quickAccessItems.map((item) => (
          <Button
            key={item.title}
            asChild
            variant="ghost"
            className="justify-start text-left h-auto p-4 hover:bg-white/20 transition-all duration-200 group"
          >
            <Link href={item.href}>
              <div className="flex items-center gap-4">
                <div className="bg-accent/20 text-accent p-3">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <p className="font-semibold">{item.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
