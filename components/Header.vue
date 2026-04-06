<!-- layouts/default.vue -->
<template>
  <div>
  <header class="fixed top-0 left-0 w-full z-50 border-b border-gray-100 backdrop-blur-md" style="background-color: rgba(255, 254, 253, 0.5)">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink :to="isEn ? '/en' : '/'" class="flex items-center gap-2">
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
          {{ contactLabel }}
        </button>
        <NuxtLink
          :to="worksLink"
          class="px-4 py-2 rounded-lg bg-navy text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {{ worksLabel }}
        </NuxtLink>
        <div class="lang-switch">
          <NuxtLink :to="enPath" :class="['lang-btn', isEn ? 'lang-active' : '']">EN</NuxtLink>
          <NuxtLink :to="zhPath" :class="['lang-btn', !isEn ? 'lang-active' : '']">中文</NuxtLink>
        </div>
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
        <NuxtLink :to="isEn ? '/en' : '/'" class="flex items-center gap-2" @click="menuOpen = false">
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
          {{ contactLabel }}
        </button>
        <NuxtLink
          :to="worksLink"
          class="mt-2 px-8 py-3 rounded-lg bg-navy text-white text-base font-medium hover:opacity-90 transition-opacity"
          @click="menuOpen = false"
        >
          {{ worksLabel }}
        </NuxtLink>
        <div class="lang-switch">
          <NuxtLink :to="enPath" :class="['lang-btn', isEn ? 'lang-active' : '']" @click="menuOpen = false">EN</NuxtLink>
          <NuxtLink :to="zhPath" :class="['lang-btn', !isEn ? 'lang-active' : '']" @click="menuOpen = false">中文</NuxtLink>
        </div>
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

const route = useRoute()
const isEn = computed(() => route.path.startsWith('/en'))

const navLinks = computed(() => isEn.value
  ? [{ label: 'About', to: '/en/about' }]
  : [{ label: '關於我', to: '/about' }]
)

const worksLink = computed(() => isEn.value ? '/en/works' : '/works')
const worksLabel = computed(() => isEn.value ? 'Works' : '設計專案')
const contactLabel = computed(() => isEn.value ? 'Contact Me' : '與我聯繫')

const enPath = computed(() => {
  if (isEn.value) return route.path
  return '/en' + (route.path === '/' ? '' : route.path)
})
const zhPath = computed(() => {
  if (!isEn.value) return route.path
  return route.path.replace(/^\/en/, '') || '/'
})
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

.lang-switch {
  display: flex;
  align-items: center;
  background: #E8EDF2;
  border-radius: 999px;
  padding: 3px;
  gap: 2px;
}

.lang-btn {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  color: #6B7280;
  text-decoration: none;
  transition: all 0.2s;
}

.lang-active {
  background: #1B2A4A;
  color: white;
}
</style>
