"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Get a Quote", status: "active" },
  { id: 2, title: "See Details", status: "inactive" },
  { id: 3, title: "Confirmation", status: "inactive" },
];

const formSchema = z.object({
  origin: z.string().min(1, "Origin is required"),
  destination: z.string().min(1, "Destination is required"),
  cargoType: z.string().min(1, "Cargo type is required"),
});

export default function ShippingQuoteForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      origin: "",
      destination: "",
      cargoType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Quote Requested!",
      description: "We've received your request and will get back to you shortly.",
    });
  }

  return (
    <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20 rounded-lg shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="sr-only">Shipping Quote Request</CardTitle>
        <div role="tablist" aria-label="Shipping quote progress" className="flex items-center justify-between text-white">
          {steps.map((step, index) => (
            <div
              key={step.id}
              role="tab"
              aria-selected={step.status === 'active'}
              className="flex flex-col items-center flex-grow"
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  step.status === "active"
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-gray-300/50 text-gray-200"
                }`}
              >
                {step.status === "active" ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              <p
                className={`mt-2 text-xs font-semibold ${
                  step.status === "active" ? "text-white" : "text-gray-300"
                }`}
              >
                {step.title}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute top-1/3 left-1/2 w-full -translate-y-1/2">
                  {index < steps.length - 1 && (
                    <div
                      className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-300/50"
                      style={{
                        width: `calc(100% / ${steps.length - 1} * ${index + 0.5})`,
                        transform: "translateX(-50%)",
                      }}
                      role="presentation"
                    ></div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="origin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Origin</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Origin"
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-200 focus:border-accent focus:ring-accent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Destination</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Destination"
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-200 focus:border-accent focus:ring-accent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cargoType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Cargo Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/20 border-white/30 text-white placeholder:text-gray-200 focus:border-accent focus:ring-accent">
                          <SelectValue placeholder="Select Cargo Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general">General Cargo</SelectItem>
                        <SelectItem value="perishable">Perishable Goods</SelectItem>
                        <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                        <SelectItem value="fragile">Fragile Items</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold group"
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
