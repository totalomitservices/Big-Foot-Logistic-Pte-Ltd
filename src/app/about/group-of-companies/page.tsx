
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { groupOfCompanies } from '@/data/group-of-companies';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group of Companies | Bigfoot Logistics',
  description: 'Explore the diverse companies that form the Bigfoot Logistics group, from engineering and shipping to medicare and global trading.',
};

export default function GroupOfCompaniesPage() {
  return (
    <div className="bg-background text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Our Group of Companies
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Bigfoot Logistics is a diversified organization with a global presence across various industries. Discover the companies that make up our group.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-primary">Companies in the Bigfoot Group</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-muted-foreground">
              {groupOfCompanies.map((company) => (
                <li key={company.name}>{company.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
