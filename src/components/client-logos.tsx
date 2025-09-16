import type { SVGProps } from "react";

export function TechCorpLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 20 L30 10 L50 30 L10 20 Z" fill="currentColor" />
      <text x="55" y="25" fontFamily="Arial, sans-serif" fontSize="16" fill="currentColor">TechCorp</text>
    </svg>
  );
}

export function InnovateLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="20" r="15" fill="currentColor" />
      <text x="40" y="25" fontFamily="Verdana, sans-serif" fontSize="16" fill="currentColor">Innovate</text>
    </svg>
  );
}

export function GlobalTradeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="30" height="30" fill="currentColor" />
      <text x="40" y="25" fontFamily="Georgia, serif" fontSize="14" fill="currentColor">GlobalTrade</text>
    </svg>
  );
}

export function ApexIndustriesLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 35 L25 5 L40 35 Z" fill="currentColor" />
      <text x="45" y="25" fontFamily="Impact, sans-serif" fontSize="16" fill="currentColor">APEX</text>
    </svg>
  );
}

export function QuantumLogisticsLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 20 Q20 5, 35 20 T65 20" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="70" y="25" fontFamily="Courier New, monospace" fontSize="16" fill="currentColor">QUANTUM</text>
    </svg>
  );
}

export function EcoFreightLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20,30 A15,15 0,0,1 20,10" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M20,10 L10,20 L30,20 Z" fill="currentColor" />
        <text x="35" y="25" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">ECO</text>
    </svg>
  );
}
