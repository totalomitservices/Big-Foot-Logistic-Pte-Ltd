'use server';

import {
  optimizeDeliveryRoutes,
  OptimizeDeliveryRoutesInput,
  OptimizeDeliveryRoutesOutput,
} from '@/ai/flows/optimize-delivery-routes';
import { z } from 'zod';

const OptimizeFormSchema = z.object({
  deliverySchedules: z.string().min(10, 'Please provide more details about delivery schedules.'),
  trafficConditions: z.string().min(10, 'Please provide more details about traffic conditions.'),
  weatherData: z.string().min(10, 'Please provide more details about the weather.'),
});

type FormState = {
  success: boolean;
  message: string;
  data?: OptimizeDeliveryRoutesOutput;
}

export async function getOptimizedRoute(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const validatedFields = OptimizeFormSchema.safeParse({
    deliverySchedules: formData.get('deliverySchedules'),
    trafficConditions: formData.get('trafficConditions'),
    weatherData: formData.get('weatherData'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      data: undefined
    };
  }

  const input: OptimizeDeliveryRoutesInput = validatedFields.data;

  try {
    const result = await optimizeDeliveryRoutes(input);
    return {
      success: true,
      message: 'Successfully generated optimized routes.',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      data: undefined
    };
  }
}
