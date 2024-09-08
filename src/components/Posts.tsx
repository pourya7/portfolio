import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="container mx-auto">
            <h2 class="text-3xl font-bold mb-4 text-center">Blog</h2>
            <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 xl:grid-cols-2 mt-16">
                <article>
                    <time class="block text-gray-600 dark:text-gray-400">Aug 14, 2024</time>
                    <h2 class="mt-2 text-gray-800 dark:text-gray-100 md:text-2xl lg:text-4xl font-bold">
                        Introducing HyperUX - The Future of AI-Driven Personalisation in FinTech
                    </h2>
                    <p class="mt-4 text-lg line-clamp-3 sm:text-sm text-gray-800 dark:text-gray-200">
                        HyperUX is an open-source project aimed at revolutionizing fintech through AI-driven
                        hyper-personalization, offering real-time, individually tailored user experiences. Unlike
                        traditional systems that rely on static user segments, HyperUX adapts dynamically to each user's
                        behavior, context, and preferences, enhancing engagement and satisfaction.
                    </p>
                    <div class="flex mt-4">
                        <a href="https://dev.to/pourya7/introducing-hyperux-the-future-of-ai-driven-personalisation-in-fintech-3cec"
                            target="_blank" class="text-md font-medium text-blue-500 dark:text-blue-400">
                            Continue reading <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </article>
                <div class="grid grid-cols-1 gap-y-8">
                    <article>
                        <time class="block text-gray-600 dark:text-gray-400">Aug 14, 2019</time>
                        <h2 class="mt-2 text-gray-800 dark:text-gray-100 md:text-2xl font-bold">
                            React State Management without Redux
                        </h2>
                        <p class="mt-4 text-lg line-clamp-3 sm:text-sm text-gray-800 dark:text-gray-200">
                            React Hooks and Context API can effectively replicate Redux’s state management features,
                            allowing for the creation of a global store, handling reducers, and managing actions, both
                            synchronous and asynchronous, without the need for Redux. By using custom hooks instead of
                            higher-order components, developers can achieve a cleaner and more efficient codebase with
                            fewer dependencies.
                        </p>
                        <div class="flex mt-4">
                            <a href="https://medium.com/strands-tech-corner/react-state-management-without-redux-d39c7087039d"
                                target="_blank" class="text-md font-medium text-blue-500 dark:text-blue-400">
                                Continue reading <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </article>
                    <div class="border-t-2 border-gray-200 dark:border-gray-800 hidden lg:block xl:block"></div>
                    <article>
                        <time class="block text-gray-600 dark:text-gray-400">Apr 11, 2019</time>
                        <h2 class="mt-2 text-gray-800 dark:text-gray-100 md:text-2xl font-bold">
                            3 common mistakes that impede React reconciliation and updating processes
                        </h2>
                        <p class="mt-4 text-lg line-clamp-3 sm:text-sm text-gray-800 dark:text-gray-200">
                            To optimize React's performance and avoid unnecessary re-renders, developers should avoid
                            common mistakes such as using object literals in props, passing anonymous functions, and
                            overusing or spreading unnecessary props. Each of these practices creates new objects or
                            closures in memory, leading to frequent and unnecessary re-rendering.
                        </p>
                        <div class="flex mt-4">
                            <a href="https://medium.com/strands-tech-corner/3-common-mistakes-that-impede-react-reconciliation-and-updating-processes-8b917ebde61e"
                                target="_blank" class="text-md font-medium text-blue-500 dark:text-blue-400">
                                Continue reading <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
});