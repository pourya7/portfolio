import { component$ } from "@builder.io/qwik";
import ProductItem from "./ProductItem";

interface Experience {
    id: string;
    companyName: string;
    companyLogo: string;
    productImg?: string;
    productTitle: string;
    productSubtitle: string;
    startYear?: string;
    endYear?: string;
}

interface Props {
    products: Experience[];
}

export default component$<Props>(({ products }) => {
    return (
        <section class="container mx-auto" id="products">
            <h2 class="text-3xl font-bold text-center">Products & Contributions</h2>
            <div class="grid grid-cols-1 gap-x-8 gap-y-8 mt-16 mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {products.map(product => <ProductItem product={product} />)}
            </div>
        </section>
    );
});