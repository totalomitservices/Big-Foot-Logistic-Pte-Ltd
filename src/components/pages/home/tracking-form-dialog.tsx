
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import TrackingForm from './tracking-form';

export default function TrackingFormDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="destructive"
          className="transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
        >
          <span>Track Your Shipment</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background/90 backdrop-blur-sm shadow-lg rounded-none">
        <TrackingForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
