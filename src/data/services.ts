
export type Service = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  href: string;
};

export const servicesData: Service[] = [
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    description: "Fast and reliable air cargo services to get your goods anywhere in the world, on time.",
    imageId: "service-air-freight",
    href: "/services/freight-forwarding",
  },
  {
    id: "land-transit",
    title: "Land Transit",
    description: "Cost-effective sea shipping solutions for large consignments with global reach.",
    imageId: "service-ocean-freight",
    href: "/services/land-transit",
  },
  {
    id: "custom-clearance",
    title: "Custom Clearance",
    description: "Flexible and efficient ground transportation for domestic and cross-border deliveries.",
    imageId: "service-road-transport",
    href: "/services/custom-clearance",
  },
  {
    id: "warehousing",
    title: "Warehousing",
    description: "Secure and scalable storage solutions to manage your inventory effectively.",
    imageId: "service-warehouse",
    href: "/services/warehousing",
  },
  {
    id: "packers-and-movers",
    title: "Packers and Movers",
    description: "Hassle-free customs clearance with our expert team managing all documentation.",
    imageId: "service-customs",
    href: "/services/packers-and-movers",
  },
  {
    id: "other-expertise",
    title: "Other Expertise",
    description: "Specialized logistics services including port handling, consultancy, and quality inspection.",
    imageId: "service-supply-chain",
    href: "/services/other-expertise",
  },
];
