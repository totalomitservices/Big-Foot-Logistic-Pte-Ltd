export type Service = {
  id: string;
  title: string;
  description: string;
  imageId: string;
};

export const servicesData: Service[] = [
  {
    id: "air-freight",
    title: "Freight Forwarding",
    description: "Fast and reliable air cargo services to get your goods anywhere in the world, on time.",
    imageId: "service-air-freight",
  },
  {
    id: "ocean-freight",
    title: "Land Transit",
    description: "Cost-effective sea shipping solutions for large consignments with global reach.",
    imageId: "service-ocean-freight",
  },
  {
    id: "road-transport",
    title: "Road Transport",
    description: "Flexible and efficient ground transportation for domestic and cross-border deliveries.",
    imageId: "service-road-transport",
  },
  {
    id: "warehousing",
    title: "Warehousing",
    description: "Secure and scalable storage solutions to manage your inventory effectively.",
    imageId: "service-warehouse",
  },
  {
    id: "customs-brokerage",
    title: "Customs Brokerage",
    description: "Hassle-free customs clearance with our expert team managing all documentation.",
    imageId: "service-customs",
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    description: "End-to-end supply chain management to optimize your logistics operations.",
    imageId: "service-supply-chain",
  },
];
