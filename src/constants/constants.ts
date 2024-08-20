export interface Product {
    startYear?: string;
    endYear?: string;
    companyName: string;
    companyLogo: string;
    productImg: string;
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
        productSubtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum",
        productURL: "./products/project-strands-bfm.html"
    },
    {
        startYear: "2017",
        endYear: "2020",
        companyName: "Strands",
        companyLogo: "./img/strands-logo-white.png",
        productImg: "./img/project-card-pfm.jpg",
        productTitle: "Personal Finance Manager (PFM)",
        productSubtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum",
        productURL: "./products/project-strands-pfm.html"
    },
    {
        startYear: "2017",
        endYear: "2018",
        companyName: "Strands",
        companyLogo: "./img/huntington-logo-white.png",
        productImg: "./img/project-card-huntington.jpg",
        productTitle: "Huntington Bank",
        productSubtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum",
        productURL: "./products/project-strands-huntington.html"
    },
    {
        startYear: undefined,
        endYear: "2018",
        companyName: "Strands",
        companyLogo: "./img/teb-logo-white.png",
        productImg: "./img/project-card-teb.jpg",
        productTitle: "TEB Bank",
        productSubtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum",
        productURL: "./products/project-strands-teb.html"
    },
    {
        startYear: "2018",
        endYear: "2020",
        companyName: "Strands",
        companyLogo: "./img/ocbc-logo-white.png",
        productImg: "./img/project-card-ocbc.jpg",
        productTitle: "OCBC Bank",
        productSubtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum",
        productURL: "./products/project-strands-ocbc.html"
    },
    {
        startYear: "2020",
        endYear: "2022",
        companyName: "Sitejet",
        companyLogo: "./img/websitebutler-logo.png",
        productImg: "./img/project-card-sitejet-crm.jpg",
        productTitle: "Sitejet CRM",
        productSubtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum",
        productURL: "./products/project-sitejet-crm.html"
    },
    {
        startYear: "2020",
        endYear: "2022",
        companyName: "Sitejet",
        companyLogo: "./img/websitebutler-logo.png",
        productImg: "./img/project-card-sitejet-cms.jpg",
        productTitle: "Sitejet CMS",
        productSubtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum",
        productURL: "./products/project-sitejet-cms.html"
    },
    {
        startYear: "2022",
        endYear: "Current",
        companyName: "Zeal Tech",
        companyLogo: "./img/zeal-logo.png",
        productImg: "./img/project-card-zeal-product.jpg",
        productTitle: "ZFX & Traze",
        productSubtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum",
        productURL: "./products/project-zeal.html"
    },
];