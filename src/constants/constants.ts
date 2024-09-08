export interface Product {
    startYear?: string;
    endYear?: string;
    companyName: string;
    companyLogo: string;
    productImg?: string;
    productTitle: string;
    productSubtitle: string;
    productURL: string;
}


export const products: Product[] = [
    {
        startYear: "2017",
        endYear: "2020",
        companyName: "Strands",
        companyLogo: "./img/strands-logo-white.png",
        productImg: "./img/project-card-bfm.jpg",
        productTitle: "Business Finance Manager (BFM)",
        productSubtitle: "BFM tool is designed to help small and medium businesses manage their finances with ease. Using advanced data analytics and machine learning, BFM provides real-time insights, helping business owners track cash flow, manage invoices, and plan for growth. It’s like having a financial advisor at your fingertips, empowering businesses to make smart, informed decisions.",
        productURL: "./products/project-strands-bfm.html"
    },
    {
        startYear: "2017",
        endYear: "2020",
        companyName: "Strands",
        companyLogo: "./img/strands-logo-white.png",
        productImg: "./img/project-card-bfm.jpg",
        productTitle: "Personal Finance Manager (PFM)",
        productSubtitle: "PFM is a smart tool that helps individuals take control of their personal finances. With the help of machine learning, PFM offers personalised advice, helping users budget, track spending, and plan for the future. It simplifies money management by providing insights tailored to each user's financial habits, making it easier to achieve financial goals.",
        productURL: "./products/project-strands-pfm.html"
    },
    {
        startYear: "2017",
        endYear: "2020",
        companyName: "Strands",
        companyLogo: "./img/huntington-logo-white.png",
        productImg: "./img/project-card-huntington.jpg",
        productTitle: "Huntington Bank",
        productSubtitle: "Contributed to the development of an AI-powered financial management tool, improving user engagement and positioning Huntington Bank as a digital leader.",
        productURL: "./products/project-strands-huntington.html"
    },
    {
        startYear: "2018",
        endYear: "2020",
        companyName: "Strands",
        companyLogo: "./img/ocbc-logo-white.png",
        productImg: "./img/project-card-ocbc.jpg",
        productTitle: "OCBC Bank",
        productSubtitle: "Front-End Engineer for the AI-driven BFM product that provided SMEs with advanced financial tools, driving innovation in digital banking.",
        productURL: "./products/project-strands-ocbc.html"
    },
    {
        startYear: "2020",
        endYear: "2022",
        companyName: "Sitejet",
        companyLogo: "./img/websitebutler-logo.png",
        productImg: undefined,
        productTitle: "Sitejet CRM and Website Builder",
        productSubtitle: "Developed and enhanced a CRM platform and website builder for web professionals, contributing to Sitejet’s acquisition by Plesk.",
        productURL: "./products/project-sitejet-cms.html"
    },
    {
        startYear: "2022",
        endYear: "2023",
        companyName: "Zeal Tech Ltd",
        companyLogo: "./img/zeal-logo.png",
        productImg: undefined,
        productTitle: "ZFX Trader Mobile App",
        productSubtitle: "Lead Product Owner for the launch of Zeal Tech's first mobile trading app, resulting in 30% improved user onboarding and expanded global reach.",
        productURL: "./products/project-zeal.html"
    },
    {
        startYear: "2022",
        endYear: "Current",
        companyName: "Zeal Tech Ltd",
        companyLogo: "./img/zeal-logo.png",
        productImg: undefined,
        productTitle: "MyZFX Customer Portal",
        productSubtitle: "Lead the redevelopment and modernization of Zeal's primary customer portal, enhancing user experience and expanding product adoption in key regions.",
        productURL: "./products/project-zeal.html"
    },
];