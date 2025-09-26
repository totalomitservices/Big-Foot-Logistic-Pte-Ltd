
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { groupOfCompaniesDetails } from '@/data/group-of-companies-details';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function GroupOfCompaniesPage() {
  return (
    <div className="bg-secondary text-foreground pt-32 pb-16 lg:pt-48 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-accent">
            Our Group of Companies
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Bigfoot Logistics is a diversified organization with a global presence across various industries. Discover the companies that make up our group.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupOfCompaniesDetails.map((company) => (
            <Card key={company.name} className="flex flex-col h-full bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary font-headline text-xl uppercase">{company.name}</CardTitle>
                {company.uen && <CardDescription>UEN: {company.uen}</CardDescription>}
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                {company.description && <p className="text-muted-foreground text-sm leading-relaxed">{company.description}</p>}
                
                <Accordion type="single" collapsible className="w-full">
                  {(company.businessPurpose || company.userPurpose || company.corePurpose) && (
                    <AccordionItem value="purpose">
                      <AccordionTrigger className="text-sm font-semibold">Purpose</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-3">
                        {company.businessPurpose && <div><h4 className="font-bold text-foreground">Business Purpose</h4><p>{company.businessPurpose}</p></div>}
                        {company.userPurpose && <div><h4 className="font-bold text-foreground">User Purpose</h4><p>{company.userPurpose}</p></div>}
                        {company.corePurpose && <div><h4 className="font-bold text-foreground">Core Purpose</h4><p>{company.corePurpose}</p></div>}
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {company.relationship && (
                    <AccordionItem value="relationship">
                      <AccordionTrigger className="text-sm font-semibold">Relationship to Bigfoot</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {company.relationship}
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Accordion>

                <div className="space-y-3 pt-4 border-t border-border">
                  {company.address && (
                    <div className="flex items-start gap-3 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{company.address}</span>
                    </div>
                  )}
                  {company.phone && (
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <Phone className="h-4 w-4 text-destructive flex-shrink-0" />
                      <span>{company.phone}</span>
                    </div>
                  )}
                  {company.email && (
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <Mail className="h-4 w-4 text-destructive flex-shrink-0" />
                      <span className="truncate">{company.email}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
