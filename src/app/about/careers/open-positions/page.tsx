
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const jobOpenings = [
  {
    title: 'IGH Driver (Up to $6,000)',
    details: [
      'Minimum of Class 4 Driving License',
      'Minimum of PSLE Pass in English',
      'Minimum of 23 Workdays',
      '12 Hours Rotating Shifts',
    ],
    type: 'Full Time',
    location: 'Pasir Panjang',
    eligibility: 'Singaporean & PR Only',
    bonus: '$25,000 in Joining & Quarterly Bonuses *T&C Applies',
  },
  {
    title: 'Prime Mover Driver (Up to $4,800)',
    details: [
      'Minimum of Class 3 Driving License',
      'Minimum of PSLE Pass in English',
      'Minimum of 22 Workdays',
      '12 Hours Rotating Shifts',
    ],
    type: 'Full Time',
    location: 'Pasir Panjang',
    eligibility: 'Singaporean & PR Only',
    bonus: '$25,000 in Joining & Quarterly Bonuses *T&C Applies',
  },
  {
    title: 'Coneman / Lashing Specialist',
    requirements: 'No experience needed',
    type: 'Full Time',
    location: 'Pasir Panjang',
    eligibility: 'Singaporean & PR Only',
    jobScopes: [
      'Conning & de-conning twist locks from container at wharfside.',
      'Twist locks lashing gears, while using such equipment, work in a safe and efficient manner, adhering to standard operating procedures and complying to safety rules and regulations in the operational areas',
      'Assist in water bunkering operations.',
      'Any other ad-hoc duties as and when assigned',
    ],
  },
];

const perksAndBenefits = [
    'OT Pay',
    'Transport Incentives',
    'Performance Incentives',
    'Medical Benefits',
    'Referral Scheme',
    'Many more attractive incentives!'
];

export default function OpenPositionsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://picsum.photos/seed/open-positions-hero/1920/400"
          alt="We're hiring banner"
          fill
          priority
          className="object-cover"
          data-ai-hint="we're hiring"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Current Openings
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Find your next opportunity with Bigfoot Logistics.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-8">
                  Job Opportunities
                </h2>
                <div className="space-y-8">
                  {jobOpenings.map((job) => (
                    <Card key={job.title} className="overflow-hidden">
                      <CardHeader className="bg-secondary">
                        <CardTitle className="text-xl text-primary">{job.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        {job.details && (
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {job.details.map((detail, i) => <li key={i}>{detail}</li>)}
                          </ul>
                        )}
                         {job.requirements && (
                           <div>
                                <h4 className="font-semibold mb-1 text-foreground">Requirements:</h4>
                                <p className="text-muted-foreground">{job.requirements}</p>
                           </div>
                        )}
                        {job.jobScopes && (
                            <div>
                                <h4 className="font-semibold mb-2 text-foreground">Job Scopes:</h4>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    {job.jobScopes.map((scope, i) => <li key={i}>{scope}</li>)}
                                </ul>
                            </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-4">
                            <p><strong className="text-foreground">Job Type:</strong> {job.type}</p>
                            <p><strong className="text-foreground">Location:</strong> {job.location}</p>
                            <p><strong className="text-foreground">Eligibility:</strong> {job.eligibility}</p>
                        </div>
                        {job.bonus && (
                           <CardDescription className="pt-2 text-accent font-semibold italic">
                            {job.bonus}
                           </CardDescription>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

               <div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                  Life at Big-Foot Group
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are more than just a logistics company. We are a family of passionate professionals who take pride in delivering top-notch services to our clients. From team-building activities to professional development workshops, there’s always something happening at Big-Foot Logistic.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="sticky top-28">
                <CardHeader>
                  <CardTitle>How to Apply?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Interested in joining us? We’d love to hear from you! Send your updated resume to:
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:recruitment@bigfoot.com.sg">recruitment@bigfoot.com.sg</a>
                  </Button>
                  <p className="text-center text-muted-foreground">or WhatsApp us at:</p>
                   <Button asChild variant="outline" className="w-full">
                    <a href="https://wa.me/6592713514" target="_blank" rel="noopener noreferrer">+65 9271 3514</a>
                  </Button>
                   <Button asChild variant="outline" className="w-full">
                    <a href="https://wa.me/6593850651" target="_blank" rel="noopener noreferrer">+65 9385 0651</a>
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">for an immediate response.</p>
                </CardContent>
              </Card>

               <Card>
                <CardHeader>
                  <CardTitle>Perks & Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {perksAndBenefits.map((perk, i) => <li key={i}>{perk}</li>)}
                    </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
