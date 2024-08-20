import { component$ } from "@builder.io/qwik";
import ProductItem from "./ProductItem";
import { products } from "../constants/constants";

export default component$(() => {
    return (
        <section class="container mx-auto">
            <h2 class="text-3xl font-bold text-center">Products & Contributions</h2>
            <div class="grid grid-cols-1 gap-x-8 gap-y-8 mt-16 mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {products.map(product => <ProductItem product={product} />)}
            </div>
        </section>
    );
});