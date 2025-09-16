'use server';

/**
 * @fileOverview This file defines a Genkit flow for optimizing delivery routes using AI.
 *
 * - optimizeDeliveryRoutes - A function that takes delivery schedules, traffic conditions, and weather data as input and returns the most efficient routes.
 * - OptimizeDeliveryRoutesInput - The input type for the optimizeDeliveryRoutes function.
 * - OptimizeDeliveryRoutesOutput - The return type for the optimizeDeliveryRoutes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeDeliveryRoutesInputSchema = z.object({
  deliverySchedules: z
    .string()
    .describe('The delivery schedules, including destinations and time windows.'),
  trafficConditions: z
    .string()
    .describe('Real-time traffic conditions, including congestion and incidents.'),
  weatherData: z.string().describe('Current weather data, including temperature, precipitation, and wind speed.'),
});

export type OptimizeDeliveryRoutesInput = z.infer<typeof OptimizeDeliveryRoutesInputSchema>;

const OptimizeDeliveryRoutesOutputSchema = z.object({
  optimizedRoutes: z
    .string()
    .describe('The optimized delivery routes, including specific routes for each delivery.'),
  estimatedDeliveryTimes: z
    .string()
    .describe('The estimated delivery times for each destination based on the optimized routes.'),
  costSavings: z.string().describe('Estimated cost savings achieved by using the optimized routes.'),
});

export type OptimizeDeliveryRoutesOutput = z.infer<typeof OptimizeDeliveryRoutesOutputSchema>;

export async function optimizeDeliveryRoutes(input: OptimizeDeliveryRoutesInput): Promise<OptimizeDeliveryRoutesOutput> {
  return optimizeDeliveryRoutesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeDeliveryRoutesPrompt',
  input: {schema: OptimizeDeliveryRoutesInputSchema},
  output: {schema: OptimizeDeliveryRoutesOutputSchema},
  prompt: `You are an AI logistics expert. Analyze the following data to determine the most efficient delivery routes.

Delivery Schedules: {{{deliverySchedules}}}
Traffic Conditions: {{{trafficConditions}}}
Weather Data: {{{weatherData}}}

Provide optimized delivery routes, estimated delivery times, and estimated cost savings.
`,
});

const optimizeDeliveryRoutesFlow = ai.defineFlow(
  {
    name: 'optimizeDeliveryRoutesFlow',
    inputSchema: OptimizeDeliveryRoutesInputSchema,
    outputSchema: OptimizeDeliveryRoutesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
