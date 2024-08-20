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
                            I am a lead product owner and front-end team lead with <span
                                id="years-of-experience">10</span> years of experience
                        </strong>
                        <span class="underline mr-1 cursor-help" id="planet-cursor"
                            title="Malaysia, Singapore, Turkey, Spain, Germany, UK and USA">
                            internationally
                        </span>
                        both in-office and remotely. I help companies build enterprise web applications based on
                        a user-centric strategy, with the aim of innovating user experience.
                    </p>

                    <div class="flex space-x-4 mb-8">
                        <a href="https://calendly.com/pourya7/30min" class="bg-blue-500 text-white px-4 py-2 rounded"
                            target="_blank">
                            Let's Talk!
                        </a>

                        <a href="#" class="border border-blue-500 text-blue-500 px-4 py-2 rounded" target="_blank">
                            View CV
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <img src="./img/hero.jpg" alt="Pourya Da"
                        class="rounded-full object-cover w-[300px] h-[300px] mx-auto shadow-[16px_16px_0_0_salmon,_-16px_-16px_0_0_#3182ce]" />
                </div>
            </div>
            <div class="mt-8 bg-white">
                <div class="flex flex-wrap gap-4">
                    <img src="./img/b2b-logo.png" alt="B2B International" width="100" class="object-contain" />
                    <img src="./img/huntington-logo.png" alt="Huntington Bank in USA" width="100"
                        class="object-contain" />
                    <img src="./img/ocbc-logo.png" alt="OCBC Bank in Singapore" width="100" class="object-contain" />
                    <img src="./img/teb-logo.png" alt="TEB Bank in Istanbul" width="100" class="object-contain" />
                    <img src="./img/strands-logo.png" alt="Strands in Barcelona" width="100" class="object-contain" />
                    <img src="./img/plesk-logo.svg" alt="Plesk in Berlin" width="100" class="object-contain" />
                    <img src="./img/sitejet-logo.png" alt="Sitejet in Berlin" width="100" class="object-contain" />
                    <img src="./img/zfx-logo.png" alt="Zeal Tech in London" width="100" class="object-contain" />
                </div>
            </div>
        </section>
    );
});