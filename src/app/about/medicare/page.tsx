
'use client';

import type { Metadata } from 'next';
import { groupOfCompaniesDetails } from '@/data/group-of-companies-details';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Mail, Phone } from 'lucide-react';

// Note: Metadata export is not supported in client components.
// If you need to set metadata, this should be done in a parent server component or layout.

export default function MedicarePage() {
  const medicareInfo = groupOfCompaniesDetails.find(c => c.name === 'BIGFOOT Medicare Pte Ltd');

  if (!medicareInfo) {
    return (
        <div className="bg-background text-foreground py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-2xl font-bold text-destructive">Company information not found.</h1>
            </div>
      </div>
    )
  }

  return (
    <div className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Card className="max-w-4xl mx-auto bg-background shadow-xl">
            <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">
                    {medicareInfo.name}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>{medicareInfo.description}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-border space-y-4">
                    <h3 className="text-xl font-semibold text-primary">Contact Information</h3>
                    <div className="space-y-3 text-muted-foreground">
                        {medicareInfo.address && (
                            <div className="flex items-start gap-3">
                                <Building className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                <span>{medicareInfo.address}</span>
                            </div>
                        )}
                         {medicareInfo.phone && (
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href={`tel:${medicareInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary">{medicareInfo.phone}</a>
                            </div>
                        )}
                        {medicareInfo.email && (
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href={`mailto:${medicareInfo.email}`} className="hover:text-primary">{medicareInfo.email}</a>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
