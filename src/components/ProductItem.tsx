import { component$ } from "@builder.io/qwik";
import type { Product } from "../constants/constants";

interface Props {
    product: Product;
}

export default component$<Props>(({ product }) => {
    return (
        <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
            <div class="relative w-full min-h-52">
                <img alt="" src={product.productImg} class="w-full h-full rounded-2xl object-cover absolute top-0 right-0" />
                <img alt="" src={product.companyLogo} class="relative z-1 w-1/2 h-full m-auto object-contain" />
            </div>
            <div class="max-w-lg">
                <div class="flex flex-col gap-x-4 my-4">
                    <div>{product.startYear ? <time>{product.startYear} - </time> : null}{product.endYear ? (<time>{product.endYear}</time>) : null}</div>
                    <p class="relative inline-flex items-center text-sm font-semibold text-blue-500 dark:text-blue-400 capitalize">
                        {product.companyName}
                    </p>
                </div>
                <div class="relative">
                    <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                        <a href={product.productURL}>
                            <span class="absolute inset-0"></span>
                            {product.productTitle}
                        </a>
                    </h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">
                        {product.productSubtitle}
                    </p>
                </div>
            </div>
        </article>
    );
});