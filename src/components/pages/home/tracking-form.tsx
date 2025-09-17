
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Rocket } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  from: z.string().min(2, "Origin is required."),
  to: z.string().min(2, "Destination is required."),
});

export default function TrackingForm() {
    const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      from: "",
      to: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
        title: "Shipment Tracking",
        description: "This is a demo. No real tracking is performed.",
    })
    form.reset();
  }

  return (
    <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Rocket /> Track Your Shipment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} className="bg-white/20 border-white/30 placeholder:text-gray-300"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} className="bg-white/20 border-white/30 placeholder:text-gray-300"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="from"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="From" {...field} className="bg-white/20 border-white/30 placeholder:text-gray-300"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="to"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="To" {...field} className="bg-white/20 border-white/30 placeholder:text-gray-300"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <Button type="submit" variant="accent" className="w-full">Track Now</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
