import { component$, useSignal } from '@builder.io/qwik';
import { LuMoon, LuSun } from "@qwikest/icons/lucide";

export default component$(() => {
    const theme = useSignal("light");

    return (
        <nav class="flex justify-between items-center h-16 container mx-auto mb-16">
            <div>
                <h1 class="text-xl font-bold">Pourya Dashtegoli Pour</h1>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Product Engineer | AI Engineer | Full-Stack
                </p>
            </div>
            <div class="flex gap-8 items-center">
                <a href="/" class="font-medium hover:underline">Home</a>
                <a href="/blog" class="font-medium hover:underline">Blog</a>
                <button id="themeToggle" onClick$={() => {
                    theme.value = theme.value === 'light' ? 'dark' : 'light';
                    document.querySelector('html')?.classList.toggle('dark');
                }} class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    {theme.value === 'light' ? <LuSun /> : <LuMoon />}
                </button>
            </div>
        </nav>
    );
});