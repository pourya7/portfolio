import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (

    <footer class="dark:bg-gray-800 py-8 mt-16">
      <div class="flex flex-col md:flex-row justify-between items-center container mx-auto">
        <p>&copy; {new Date().getFullYear()} Pourya Da. All Rights Reserved.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/pourya7" target="_blank"
            class="text-blue-500 dark:text-blue-400 hover:text-blue-600">GitHub</a
          >
          <a
            href="https://www.linkedin.com/in/pourya7" target="_blank"
            class="text-blue-500 dark:text-blue-400 hover:text-blue-600">LinkedIn</a
          >
        </div>
      </div>
    </footer>
  );
});