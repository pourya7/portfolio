import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="container mx-auto">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2">
                    <h2 class="text-3xl font-bold mb-4">Hello, I'm Pourya</h2>
                    <p class="mb-8 font-medium text-justify">
                        My name is Pourya /'puryɒ/.
                        <strong class="mx-1">
                            Senior Product Engineer with over <span
                                id="years-of-experience">10</span> years of experience
                        </strong>
                        architecting high-performance web applications, scalable SaaS platforms, and AI-native products.
                        Deeply proficient in the modern React ecosystem (Next.js, TypeScript) and Python (FastAPI, PydanticAI),
                        I combine hands-on technical execution with a product mindset to deliver
                        complex solutions internationally — both in-office and remotely.
                    </p>

                    <div class="flex space-x-4 mb-8">
                        <a href="https://calendar.app.google/164UfwYawwGmsAbQA" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            target="_blank">
                            📅 Schedule a call with me
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <img src="/img/hero.jpg" alt="Pourya Da"
                        class="rounded-full object-cover w-[300px] h-[300px] mx-auto shadow-[16px_16px_0_0_salmon,_-16px_-16px_0_0_#3182ce]" />
                </div>
            </div>
            <div class="mt-8">
                <div class="flex flex-wrap gap-4 items-center">
                    {/* Each logo pair: light version shown by default, white version shown in dark mode */}
                    <div>
                        <img src="/img/b2b-logo.png" alt="B2B International" width="100" class="object-contain dark:hidden" />
                        <img src="/img/b2b-logo-white.png" alt="B2B International" width="100" class="object-contain hidden dark:block" />
                    </div>
                    <div>
                        <img src="/img/huntington-logo.png" alt="Huntington Bank" width="100" class="object-contain dark:hidden" />
                        <img src="/img/huntington-logo-white.png" alt="Huntington Bank" width="100" class="object-contain hidden dark:block" />
                    </div>
                    <div>
                        <img src="/img/ocbc-logo.png" alt="OCBC Bank" width="100" class="object-contain dark:hidden" />
                        <img src="/img/ocbc-logo-white.png" alt="OCBC Bank" width="100" class="object-contain hidden dark:block" />
                    </div>
                    <div>
                        <img src="/img/teb-logo.png" alt="TEB Bank" width="100" class="object-contain dark:hidden" />
                        <img src="/img/teb-logo-white.png" alt="TEB Bank" width="100" class="object-contain hidden dark:block" />
                    </div>
                    <div>
                        <img src="/img/strands-logo.png" alt="Strands" width="100" class="object-contain dark:hidden" />
                        <img src="/img/strands-logo-white.png" alt="Strands" width="100" class="object-contain hidden dark:block" />
                    </div>
                    <div>
                        <img src="/img/plesk-logo.svg" alt="Plesk" width="100" class="object-contain dark:hidden" />
                        <img src="/img/plesk-logo-white.png" alt="Plesk" width="100" class="object-contain hidden dark:block" />
                    </div>
                    <div>
                        <img src="/img/sitejet-logo.png" alt="Sitejet" width="100" class="object-contain dark:hidden" />
                        <img src="/img/sitejet-logo.png" alt="Sitejet" width="100" class="object-contain hidden dark:block invert" />
                    </div>
                    <div>
                        <img src="/img/zfx-logo.png" alt="Zeal Tech" width="100" class="object-contain dark:hidden" />
                        <img src="/img/zeal-logo-white.png" alt="Zeal Tech" width="100" class="object-contain hidden dark:block" />
                    </div>
                </div>
            </div>
        </section>
    );
});