
export type CompanyDetails = {
    name: string;
    uen?: string;
    description: string;
    address?: string;
    phone?: string;
    fax?: string;
    email?: string;
    website?: string;
    businessPurpose?: string;
    userPurpose?: string;
    corePurpose?: string;
    relationship?: string;
};

export const groupOfCompaniesDetails: CompanyDetails[] = [
    {
        name: 'BIGFOOT Meats Pte. Ltd.',
        uen: '200412500R',
        description: 'Your trusted source in Singapore for high-quality frozen meats, poultry, and more — wholesale or retail, fresh to frozen, all with care. Founded decades ago, they blend consistency, scale, and passion so your kitchen never has to compromise. Straight from Jurong Food Hub to your plate, BIGFOOT delivers the meat you trust, every single time.',
        address: 'Singapore',
        phone: '+65 6324 4722',
        email: 'enquiries@bigfoot.com.sg'
    },
    {
        name: 'BIGFOOT Engineering Pte. Ltd.',
        uen: '200416199R',
        description: 'Specializes in steel works and welding, including structural steel fabrication and welding services. Their expertise also extends to building and repairing ships, tankers, and other ocean-going vessels, including conversions to offshore structures.',
        address: 'Singapore',
        phone: '+65 6362 4575',
        email: 'enquiries@bigfoot.com.sg',
        website: 'https://bigfoot.com.sg'
    },
    {
        name: 'BIGFOOT Shipping (S) Pte. Ltd.',
        uen: '200416196D',
        description: 'Incorporated on 16 December 2004, is an Exempt Private Company Limited by Shares in Singapore. Based at 8 Joo Koon Road, Singapore 628972, it operates as part of Big-Foot Logistics, delivering end-to-end logistics solutions — including transportation, warehousing, freight forwarding, permit clearance, packing, and manpower supply.',
        address: 'Singapore',
        phone: '+65 6324 4722',
        fax: '+65 6324 4711',
        email: 'enquiries@bigfoot.com.sg',
        website: 'https://bigfoot.com.sg'
    },
    {
        name: 'BIGFOOT International (S) Pte. Ltd.',
        uen: '200823528W',
        description: 'Incorporated on 22 December 2008, is a live local company with a paid-up capital of $200,000. Registered at 8 Joo Koon Road #01-01-02, Singapore 628972, it has two officers/shareholders and filed its latest annual return on 31 May 2024. Its core business is Process Plant Engineering Services, serving as both its principal and secondary activity.',
        address: 'Singapore',
        phone: '+65 6324 4722',
        email: 'enquiries@bigfoot.com.sg',
        website: 'https://bigfoot-groups.com'
    },
    {
        name: 'BIGFOOT Medicare Pte. Ltd.',
        uen: '200600180R',
        description: 'A Singapore-based company incorporated on 4 January 2006. It is an exempt private company limited by shares with its registered office at 8 Joo Koon Road, Singapore 628972. The company’s core activity is home healthcare and emergency medical services, while its secondary activity includes freight transport arrangement, reflecting its integration with the broader logistics network of the Bigfoot Group. With a paid-up capital of SGD 100,000, the company plays a dual role in supporting healthcare delivery and logistical efficiency. Formerly known as Huk Seng Container 2006 Pte Ltd, it has since evolved under the Bigfoot brand to focus on healthcare logistics and services.',
        address: 'Singapore'
    },
    {
        name: 'BIGFOOT Worldwide Pte. Ltd.',
        uen: '201438007Z',
        description: 'Established on 23 December 2014, is another entity within the Bigfoot Group. Operating from the same address at 8 Joo Koon Road, Singapore, the company specializes in wholesale trade of a variety of goods without a dominant product. It is an exempt private company with a paid-up capital of SGD 150,000 and remains active to date. By handling a wide range of products across multiple industries, BIGFOOT Worldwide strengthens the group’s international trading and distribution capabilities, complementing its core logistics and freight operations.',
        address: 'Singapore'
    },
    {
        name: 'BIGFOOT International Network Sdn. Bhd.',
        uen: '1269063-T',
        description: 'Incorporated in Malaysia on 20 February 2018, expands the Bigfoot brand into the Malaysian healthcare sector. Its registered office is located in Taman Tun Dr Ismail, Kuala Lumpur. The company is primarily engaged in medical and healthcare services, including dialysis centres, ambulance operations, and other general healthcare provisions. This healthcare arm of the group illustrates Bigfoot’s strategic diversification, blending logistics expertise with critical health services to cater to regional demand. By combining healthcare support and logistics, it plays a unique role in Malaysia’s service landscape.',
        address: 'Malaysia'
    },
    {
        name: 'BIGFOOT (India) Pvt Ltd',
        description: 'Represents the group’s footprint in the Indian market, though publicly available details are limited compared to its Singapore and Malaysian counterparts. The company is recognized as part of the Bigfoot Group’s expansion strategy in Asia, focusing on logistics, freight solutions, and healthcare-related services. While its precise incorporation details and capital structure are not widely disclosed, the entity is positioned to strengthen Bigfoot’s cross-border operations between South Asia and Southeast Asia. Its presence in India underscores the group’s ambition to build a robust regional network across healthcare, trade, and logistics services.',
        address: 'India'
    },
    {
        name: 'BIGFOOT Logistic (India) Pvt. Ltd.',
        description: 'Bigfoot Logistic (India) Pvt Ltd provides reliable end-to-end logistics solutions, including transportation, storage, and related services across Tamil Nadu. The company focuses on safe, efficient goods movement and streamlined supply-chain support, helping businesses reduce operational challenges, improve efficiency, and ensure timely delivery while serving as a trusted logistics partner.',
        address: 'India',
        phone: '+91 90156 44441',
    },
    {
        name: 'BIGFOOT Trading (Australia) Pty. Ltd.',
        description: 'BIGFOOT Trading (Australia) Pty Ltd is a trading and distribution company that manages procurement, import, and supply of goods in the Australian market. It streamlines commercial trade by handling logistics and regulatory compliance, offering businesses a reliable channel to access quality products on time and at competitive prices while supporting long-term partnerships.',
        address: 'Australia',
    },
    {
        name: 'Independent Livestock Services Pty. Ltd.',
        description: 'Independent Livestock Services Pty Ltd is a privately registered company specializing in the safe, humane, and efficient transportation of livestock, offering professional logistics tailored to the animal transport industry while ensuring compliance with welfare regulations. It operates independently and has no ownership or subsidiary connection with Bigfoot Logistics Pvt Ltd despite both being in the logistics sector.',
        phone: '+04 1841 0313',
        address: 'Australia'
    },
    {
        name: 'BIGFOOT Global Academy Pte. Ltd.',
        uen: '201133521Z',
        description: 'BIGFOOT Global Academy Pte. Ltd.’s website serves as a professional platform to showcase its products, services, and brand identity, clearly presenting its vision and offerings while providing essential details like services, pricing, and contact information. It functions as both a marketing and communication tool, helping customers explore services, view updates, and connect easily, while supporting the company in building credibility and expanding its global reach.',
        address: 'Singapore',
        phone: '+65 8066 3057',
        email: 'enquiry.sg@bfga.edu.sg'
    }
];
