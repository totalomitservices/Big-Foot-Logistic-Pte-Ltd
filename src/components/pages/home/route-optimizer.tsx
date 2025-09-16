'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { getOptimizedRoute } from '@/app/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Bot, Loader2, Route, Ticket, TrendingUp } from 'lucide-react';

const formSchema = z.object({
  deliverySchedules: z
    .string()
    .min(10, 'Please provide detailed delivery schedules and time windows.')
    .default('Ex: 5 packages to 123 Main St, 10am-12pm; 2 packages to 456 Oak Ave, 2pm-4pm.'),
  trafficConditions: z
    .string()
    .min(10, 'Please describe current traffic conditions.')
    .default('Ex: Heavy congestion on I-5 North, accident on 7th Ave.'),
  weatherData: z
    .string()
    .min(10, 'Please describe current weather conditions.')
    .default('Ex: Light rain, 55°F, 10 mph wind from SW.'),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Optimize Routes
    </Button>
  );
}

export default function RouteOptimizer() {
  const { toast } = useToast();
  
  const initialState = { success: false, message: '', data: undefined };
  const [state, formAction] = useFormState(getOptimizedRoute, initialState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formSchema.parse({}),
  });

  useEffect(() => {
    if (!state.success && state.message) {
      toast({
        variant: 'destructive',
        title: 'Optimization Failed',
        description: state.message,
      });
    }
  }, [state, toast]);


  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary">AI-Powered Route Optimization</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Enter your logistics data to receive AI-driven route optimizations, saving time and reducing costs. Our model analyzes traffic, weather, and schedules in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card>
            <CardHeader>
              <CardTitle>Logistics Data Input</CardTitle>
              <CardDescription>Provide the necessary information for route analysis.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form action={formAction}>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="deliverySchedules"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Delivery Schedules</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Destinations, time windows, package counts..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="trafficConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Traffic Conditions</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Real-time congestion, incidents, road closures..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="weatherData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weather Data</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Precipitation, wind, temperature..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <SubmitButton />
                </CardFooter>
              </form>
            </Form>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                  <Route className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>Optimized Routes</CardTitle>
                  <CardDescription>The most efficient path for each delivery.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                {state.data?.optimizedRoutes ? <p className="text-sm">{state.data.optimizedRoutes}</p> : <p className="text-sm text-muted-foreground">Results will be displayed here...</p>}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                  <Ticket className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>Estimated Delivery Times</CardTitle>
                  <CardDescription>Predicted arrival times for all destinations.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                {state.data?.estimatedDeliveryTimes ? <p className="text-sm">{state.data.estimatedDeliveryTimes}</p> : <p className="text-sm text-muted-foreground">Results will be displayed here...</p>}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>Estimated Cost Savings</CardTitle>
                  <CardDescription>Potential savings from fuel and time reduction.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                {state.data?.costSavings ? <p className="text-sm font-bold text-accent">{state.data.costSavings}</p> : <p className="text-sm text-muted-foreground">Results will be displayed here...</p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
