
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { jobOpenings, conemanJob, perksAndBenefits } from '@/data/careers';

function JobCard({ job }: { job: (typeof jobOpenings)[number] | typeof conemanJob }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="bg-secondary">
        <CardTitle className="text-xl text-primary">{job.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4 flex-grow">
        {'details' in job && job.details && (
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {job.details.map((detail, i) => <li key={i}>{detail}</li>)}
          </ul>
        )}
         {'requirements' in job && job.requirements && (
           <div>
                <h4 className="font-semibold mb-1 text-foreground">Requirements:</h4>
                <p className="text-muted-foreground">{job.requirements}</p>
           </div>
        )}
        {'jobScopes' in job && job.jobScopes && (
            <div>
                <h4 className="font-semibold mb-2 text-foreground">Job Scopes:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.jobScopes.map((scope, i) => <li key={i}>{scope}</li>)}
                </ul>
            </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm pt-4">
            <p><strong className="text-foreground">Job Type:</strong> {job.type}</p>
            <p><strong className="text-foreground">Location:</strong> {job.location}</p>
            <p className="col-span-1 sm:col-span-2"><strong className="text-foreground">Eligibility:</strong> {job.eligibility}</p>
        </div>
        {'bonus' in job && job.bonus && (
           <CardDescription className="pt-2 text-accent font-semibold italic">
            {job.bonus}
           </CardDescription>
        )}
      </CardContent>
    </Card>
  );
}

function ApplyCard() {
  return (
    <Card className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground border-accent shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white">How to Apply?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-center">
        <p className="text-primary-foreground/90">
          Interested in joining us? We’d love to hear from you! Send your updated resume to:
        </p>
        <Button asChild variant="secondary" className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 transform hover:scale-105">
          <a href="mailto:recruitment@bigfoot.com.sg">
            <Mail className="mr-2 h-5 w-5" aria-hidden="true"/>
            recruitment@bigfoot.com.sg
          </a>
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-primary-foreground/30" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-primary px-2 text-primary-foreground/70">
              or
            </span>
          </div>
        </div>
         <p className="text-primary-foreground/90">Contact us on WhatsApp for an immediate response:</p>
         <div className="flex flex-col space-y-3">
           <Button asChild variant="secondary" className="w-full bg-green-500/10 hover:bg-green-500/20 text-white border border-green-400/50 transition-all duration-300 transform hover:scale-105">
            <a href="https://api.whatsapp.com/send/?phone=6592713514&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" aria-hidden="true"/>
              +65 9271 3514
            </a>
          </Button>
           <Button asChild variant="secondary" className="w-full bg-green-500/10 hover:bg-green-500/20 text-white border border-green-400/50 transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/6593850651" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" aria-hidden="true"/>
              +65 9385 0651
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ConemanSpecialistCard() {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="bg-secondary">
                <CardTitle className="text-xl text-primary">{conemanJob.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4 flex-grow">
                <div>
                    <h4 className="font-semibold mb-1 text-foreground">Requirements:</h4>
                    <p className="text-muted-foreground">{conemanJob.requirements}</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-foreground">Job Scopes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {conemanJob.jobScopes.map((scope, i) => <li key={i}>{scope}</li>)}
                    </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm pt-4">
                    <p><strong className="text-foreground">Job Type:</strong> {conemanJob.type}</p>
                    <p><strong className="text-foreground">Location:</strong> {conemanJob.location}</p>
                    <p className="col-span-1 sm:col-span-2"><strong className="text-foreground">Eligibility:</strong> {conemanJob.eligibility}</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default function OpenPositionsClient() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary">
            Job Opportunities
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {jobOpenings.map((job) => (
                    <JobCard key={job.title} job={job} />
                ))}
                <div className="md:col-span-2">
                    <ApplyCard />
                </div>
            </div>
            <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-8">
                  <ConemanSpecialistCard />
                </div>
            </div>
        </div>

        <div className="mt-16 space-y-12">
            <Card>
            <CardHeader>
                <CardTitle>Perks & Benefits</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
                <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-muted-foreground">
                    {perksAndBenefits.map((perk, i) => <li key={i}>{perk}</li>)}
                </ul>
            </CardContent>
            </Card>
            <div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                Life at Big-Foot Group
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
                We are more than just a logistics company. We are a family of passionate professionals who take pride in delivering top-notch services to our clients. From team-building activities to professional development workshops, there’s always something happening at Big-Foot Logistic.
            </p>
            </div>
        </div>

      </div>
    </section>
  );
}
