<template>
  <footer class="border-t border-gray-100 py-10">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
      <!-- Left: logo + copyright -->
      <div class="flex flex-col gap-3">
        <NuxtLink to="/">
          <img src="/images/Logo.svg" alt="Tsai Wen Hsin" class="h-7" />
        </NuxtLink>
        <p class="text-xs text-gray-400">© 2026 Tsai Wen Hsin</p>
      </div>

      <!-- Right: contact + social -->
      <div class="flex flex-col sm:flex-row gap-8 sm:gap-16">
        <div class="flex flex-col gap-2">
          <span class="text-sm font-semibold text-navy">Contact</span>
          <a
            href="mailto:wenhsin600@gmail.com"
            class="text-sm text-gray-500 hover:text-teal transition-colors"
          >
            wenhsin600@gmail.com
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <span class="text-sm font-semibold text-navy">Social</span>
          <div class="flex gap-4">
            <a href="#" class="text-sm text-gray-500 hover:text-teal transition-colors">LinkedIn</a>
            <a href="#" class="text-sm text-gray-500 hover:text-teal transition-colors">Dribbble</a>
            <a href="#" class="text-sm text-gray-500 hover:text-teal transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
