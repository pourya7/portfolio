import { component$ } from "@builder.io/qwik";
import ProductItem from "./ProductItem";

export default component$(() => {
    return (
        <section class="container mx-auto">
            <h2 class="text-3xl font-bold text-center">Products & Contributions</h2>
            <div
                class="grid grid-cols-1 gap-x-8 gap-y-8 mt-16 mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <ProductItem project="bfm" company="strands" startYear="2017" endYear="2020" title="Business Finance Manager (BFM)" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum" />
                <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                    <div class="relative w-full min-h-52">
                        <img alt="" src="./img/project-card-pfm.jpg" class="w-full h-full rounded-2xl object-cover absolute top-0 right-0 bg-white" />
                        <img alt="" src="./img/strands-logo.png" class="relative z-1 w-1/2 h-full m-auto object-contain" />
                    </div>
                    <div class="max-w-lg">
                        <div class="flex flex-col gap-x-4 my-4">
                            <div><time>2017</time> - <time>2020</time></div>
                            <p class="relative inline-flex items-center text-sm font-semibold
                                text-blue-500 dark:text-blue-400">Strands</p>
                        </div>
                        <div class="relative">
                            <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                <a href="./products/project-strands-pfm.html">
                                    <span class="absolute inset-0"></span>
                                    Personal Finance Manager (PFM)
                                </a>
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum
                                repudiandae hic explicabo qui accusantium? Enim molestiae nesciunt dolore provident
                            </p>
                        </div>
                    </div>
                </article>
                <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                    <div class="relative w-full min-h-52">
                        <img alt="" src="./img/project-card-huntington.jpg"
                            class="w-full h-full rounded-2xl object-cover absolute top-0 right-0" />
                        <img alt="" src="./img/huntington-logo-white.png" width="50%"
                            class="relative z-1 h-full m-auto object-contain" />
                    </div>
                    <div class="max-w-lg">
                        <div class="flex flex-col gap-x-4 my-4">
                            <div><time datetime="2017-06-20">2017</time> - <time datetime="2018-01-01">2018</time></div>
                            <p class="relative inline-flex items-center text-sm font-semibold
                                text-blue-500 dark:text-blue-400">Strands</p>
                        </div>
                        <div class="relative">
                            <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                <a href="./products/project-strands-huntington.html">
                                    <span class="absolute inset-0"></span>
                                    Huntington Bank
                                </a>
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum
                                repudiandae hic explicabo qui accusantium? Enim molestiae nesciunt dolore provident
                            </p>
                        </div>
                    </div>
                </article>
                <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                    <div class="relative w-full min-h-52">
                        <img alt="" src="./img/project-card-teb.jpg"
                            class="w-full h-full rounded-2xl object-cover absolute top-0 right-0" />
                        <img alt="" src="./img/teb-logo-white.png" width="50%"
                            class="relative z-1 h-full m-auto object-contain" />
                    </div>
                    <div class="max-w-lg">
                        <div class="flex flex-col gap-x-4 my-4">
                            <div><time datetime="2018-01-01">2018</time></div>
                            <p class="relative inline-flex items-center text-sm font-semibold
                                text-blue-500 dark:text-blue-400">Strands</p>
                        </div>
                        <div class="relative">
                            <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                <a href="./products/project-strands-teb.html">
                                    <span class="absolute inset-0"></span>
                                    TEB Bank
                                </a>
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum
                                repudiandae hic explicabo qui accusantium? Enim molestiae nesciunt dolore provident
                            </p>
                        </div>
                    </div>
                </article>
                <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                    <div class="relative w-full min-h-52">
                        <img alt="" src="./img/project-card-ocbc.jpg"
                            class="w-full h-full rounded-2xl object-cover absolute top-0 right-0" />
                        <img alt="" src="./img/ocbc-logo-white.png" width="50%"
                            class="relative z-1 h-full m-auto object-contain" />
                    </div>
                    <div class="max-w-lg">
                        <div class="flex flex-col gap-x-4 my-4">
                            <div><time datetime="2018-01-01">2018</time> - <time datetime="2020-01-01">2020</time></div>
                            <p class="relative inline-flex items-center text-sm font-semibold
                                text-blue-500 dark:text-blue-400">Strands</p>
                        </div>
                        <div class="relative">
                            <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                <a href="./products/project-strands-ocbc.html">
                                    <span class="absolute inset-0"></span>
                                    OCBC Bank
                                </a>
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum
                                repudiandae hic explicabo qui accusantium? Enim molestiae nesciunt dolore provident
                            </p>
                        </div>
                    </div>
                </article>
                <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                    <div class="relative w-full min-h-52">
                        <img alt="" src="./img/project-card-sitejet-crm.jpg"
                            class="w-full h-full rounded-2xl object-cover absolute top-0 right-0 bg-white" />
                        <img alt="" src="./img/websitebutler-logo.png" width="50%"
                            class="relative z-1 h-full m-auto object-contain" />
                    </div>
                    <div class="max-w-lg">
                        <div class="flex flex-col gap-x-4 my-4">
                            <div><time datetime="2020-01-01">2020</time> - <time datetime="2021-01-01">2022</time></div>
                            <p class="relative inline-flex items-center text-sm font-semibold
                                text-blue-500 dark:text-blue-400">Sitejet</p>
                        </div>
                        <div class="relative">
                            <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                <a href="./products/project-sitejet-crm.html">
                                    <span class="absolute inset-0"></span>
                                    Sitejet CRM
                                </a>
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum
                                repudiandae hic explicabo qui accusantium? Enim molestiae nesciunt dolore provident
                            </p>
                        </div>
                    </div>
                </article>
                <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                    <div class="relative w-full min-h-52">
                        <img alt="" src="./img/project-card-sitejet-cms.jpg"
                            class="w-full h-full rounded-2xl object-cover absolute top-0 right-0 bg-white" />
                        <img alt="" src="./img/websitebutler-logo.png" width="50%"
                            class="relative z-1 h-full m-auto object-contain" />
                    </div>
                    <div class="max-w-lg">
                        <div class="flex flex-col gap-x-4 my-4">
                            <div><time datetime="2020-01-01">2020</time> - <time datetime="2022-01-01">2022</time></div>
                            <p class="relative inline-flex items-center text-sm font-semibold
                                text-blue-500 dark:text-blue-400">Sitejet</p>
                        </div>
                        <div class="relative">
                            <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                <a href="./products/project-sitejet-cms.html">
                                    <span class="absolute inset-0"></span>
                                    Sitejet CMS
                                </a>
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum
                                repudiandae hic explicabo qui accusantium? Enim molestiae nesciunt dolore provident
                            </p>
                        </div>
                    </div>
                </article>
                <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                    <div class="relative w-full min-h-52">
                        <img alt="" src="./img/project-card-zeal-product.jpg"
                            class="w-full h-full rounded-2xl object-cover absolute top-0 right-0 bg-white" />
                        <img alt="" src="./img/zeal-logo.png" width="50%"
                            class="relative z-1 h-full m-auto object-contain" />
                    </div>
                    <div class="max-w-lg">
                        <div class="flex flex-col gap-x-4 my-4">
                            <div><time datetime="2020-01-01">2022</time> - <time datetime="2024-01-01">Current</time>
                            </div>
                            <p class="relative inline-flex items-center text-sm font-semibold
                                text-blue-500 dark:text-blue-400">Zeal Tech</p>
                        </div>
                        <div class="relative">
                            <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                <a href="./products/project-zeal.html">
                                    <span class="absolute inset-0"></span>
                                    ZFX & Traze
                                </a>
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero debitis cum
                                repudiandae hic explicabo qui accusantium? Enim molestiae nesciunt dolore provident
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
});