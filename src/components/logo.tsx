import type { SVGProps } from 'react';

const BigfootIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4.5 16.5c-2.3 2.3-2.3 6.1 0 8.5 2.3 2.3 6.1 2.3 8.5 0" />
    <path d="M9 12c0-3.9 3.1-7 7-7 2.2 0 4.2 1 5.5 2.6" />
    <path d="m13 18-4-4" />
    <path d="m10.5 21.5 3-3" />
    <path d="M14.5 13.5c-1.3 1.3-1.3 3.5 0 4.8 1.3 1.3 3.5 1.3 4.8 0" />
  </svg>
);

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-primary ${className}`}>
      <div className="bg-primary text-primary-foreground p-2 rounded-md">
        <BigfootIcon className="h-6 w-6" />
      </div>
      <span className="text-xl font-headline font-bold">Bigfoot Logistics</span>
    </div>
  );
}
