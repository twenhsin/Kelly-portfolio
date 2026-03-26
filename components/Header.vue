<template>
  <div>
  <header class="fixed top-0 left-0 w-full z-50 border-b border-gray-100 backdrop-blur-md" style="background-color: rgba(255, 254, 253, 0.5)">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/images/Logo.svg" alt="Tsai Wen Hsin" class="h-7" />
        <span class="text-sm font-bold tracking-widest text-navy uppercase">Tsai Wen Hsin</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-navy hover:text-teal transition-colors"
          active-class="text-teal"
        >
          {{ link.label }}
        </NuxtLink>
        <button
          class="text-sm font-medium text-navy hover:text-teal transition-colors"
          @click="showContact = true"
        >
          與我聯繫
        </button>
        <NuxtLink
          to="/works"
          class="px-4 py-2 rounded-lg bg-navy text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          設計專案
        </NuxtLink>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        @click="menuOpen = true"
        aria-label="開啟選單"
      >
        <span class="block w-5 h-0.5 bg-navy rounded-full" />
        <span class="block w-5 h-0.5 bg-navy rounded-full" />
        <span class="block w-3.5 h-0.5 bg-navy rounded-full self-start" />
      </button>
    </div>
  </header>

  <!-- Mobile fullscreen overlay -->
  <Transition name="menu-fade">
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-[100] flex flex-col"
      style="background: rgba(255, 254, 253, 0.8); backdrop-filter: blur(12px)"
    >
      <!-- Top bar -->
      <div class="flex items-center justify-between px-6 h-16 border-b border-gray-100">
        <NuxtLink to="/" class="flex items-center gap-2" @click="menuOpen = false">
          <img src="/images/Logo.svg" alt="Tsai Wen Hsin" class="h-7" />
          <span class="text-sm font-bold tracking-widest text-navy uppercase">Tsai Wen Hsin</span>
        </NuxtLink>
        <button
          class="w-10 h-10 flex items-center justify-center text-navy text-xl"
          @click="menuOpen = false"
          aria-label="關閉選單"
        >✕</button>
      </div>

      <!-- Links -->
      <nav class="flex flex-col items-center justify-start pt-12 flex-1 gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-xl font-medium text-navy hover:text-teal transition-colors"
          active-class="text-teal"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <button
          class="text-xl font-medium text-navy hover:text-teal transition-colors"
          @click="showContact = true; menuOpen = false"
        >
          與我聯繫
        </button>
        <NuxtLink
          to="/works"
          class="mt-2 px-8 py-3 rounded-lg bg-navy text-white text-base font-medium hover:opacity-90 transition-opacity"
          @click="menuOpen = false"
        >
          設計專案
        </NuxtLink>
      </nav>
    </div>
  </Transition>
  </div>
</template>

<script setup>
const menuOpen = ref(false)
const router = useRouter()
router.afterEach(() => { menuOpen.value = false })

const showContact = useState('showContact', () => false)

const navLinks = [
  { label: '關於我', to: '/about' },
]
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
</style>
