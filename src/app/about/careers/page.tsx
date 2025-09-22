
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Bigfoot Logistics',
  description: 'Join the Bigfoot Logistics family. Explore career opportunities in a dynamic, inclusive, and growth-oriented workplace. Be a part of a company that moves the world.',
};


export default function CareersPage() {
  return (
    <div className="relative bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/main/career.jpg"
          alt="Diverse team working together in an office at Bigfoot Logistics"
          fill
          priority
          className="object-cover"
          data-ai-hint="diverse team"
        />
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Join Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl font-thin">
            Be a part of a company that moves the world.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-headline font-bold text-primary text-center">
              Join the Big-Foot Family
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              At <span className="font-bold">Big-Foot Logistic Pte Ltd,</span> we believe that our people are our greatest strength. As a leader in innovative logistics solutions, we are dedicated to fostering a dynamic, inclusive, and growth-oriented workplace. Here, every individual has the opportunity to learn, contribute, and make a meaningful impact on both the company and the industry.
            </p>
            
            <div className="mt-12 space-y-8">
                <div>
                    <h3 className="text-2xl font-headline font-semibold text-primary mb-2">Why Work With Us?</h3>
                    <div className="space-y-6 text-lg text-muted-foreground">
                        <div>
                            <h4 className="font-semibold text-xl text-foreground mb-1">Innovative Environment:</h4>
                            <p>At Big-Foot Logistic, innovation is at the heart of what we do. We invest in modern systems and advanced technologies that enable us to stay ahead in the logistics and supply chain industry. You’ll be part of a team that constantly looks for smarter, faster, and more efficient ways to deliver results. Here, your ideas are valued, and your contributions can help shape the future of logistics.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl text-foreground mb-1">Career Growth:</h4>
                             <p>We believe every career is a journey, and we’re here to support yours. From structured training to on-the-job learning, you’ll have plenty of opportunities to sharpen your skills. Whether you’re a fresh graduate exploring your first role or a seasoned professional seeking the next big step, we provide clear pathways for advancement. Your growth is our growth, and we’ll help you achieve both personal and professional milestones.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl text-foreground mb-1">Supportive Culture:</h4>
                             <p>A positive workplace is built on trust and teamwork, and that’s exactly what we foster. At Big-Foot Logistic, collaboration is key — we encourage open communication and respect for every voice. We celebrate individual contributions while working together to achieve shared goals. Our culture is about lifting each other, solving challenges as a team, and recognizing hard work.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl text-foreground mb-1">Competitive Benefits & Bonuses:</h4>
                            <p>We understand the importance of rewarding our employees. Some positions offer joining and quarterly bonuses of up to $25,000, providing both recognition and motivation. Additionally, our comprehensive benefits package includes health insurance, wellness support, and access to ongoing training. We also provide opportunities for professional certifications, ensuring you remain competitive in your career. With us, you will enjoy not just a job, but a sustainable and rewarding future.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline" className="btn-animated-border">
                <Link href="/about/careers/open-positions">
                  <span>View Open Positions</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
