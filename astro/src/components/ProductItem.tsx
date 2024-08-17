import { component$ } from "@builder.io/qwik";

interface Props {
    project: string;
    company: string;
    startYear: string;
    endYear: string;
    title: string;
    subtitle: string;
}

export default component$<Props>((props) => {
    return (
        <article class=" w-full max-w-lg p-4 rounded-2xl overflow-hidden flex flex-col justify-between items-start
                        border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
            <div class="relative w-full min-h-52">
                <img alt="" src={`./img/project-card-${props.project}.jpg`}
                    class="w-full h-full rounded-2xl object-cover absolute top-0 right-0" />
                <img alt="" src={`./img/${props.company}-logo-white.png`} class="relative z-1 w-1/2 h-full m-auto object-contain" />
            </div>
            <div class="max-w-lg">
                <div class="flex flex-col gap-x-4 my-4">
                    <div><time>{props.startYear}</time> - <time>{props.endYear}</time></div>
                    <p class="relative inline-flex items-center text-sm font-semibold text-blue-500 dark:text-blue-400">
                        {props.company}
                    </p>
                </div>
                <div class="relative">
                    <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                        <a href={`./products/project-${props.company}-bfm.html`}>
                            <span class="absolute inset-0"></span>
                            {props.title}
                        </a>
                    </h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">
                        {props.subtitle}
                    </p>
                </div>
            </div>
        </article>
    );
});