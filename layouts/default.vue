<!-- layouts/default.vue -->
<template>
  <div>
    <!-- 引入 Header 組件 -->
    <Header></Header>

    <!-- 頁面內容 -->
    <main class="pt-16">
      <slot></slot>
    </main>

    <!-- 引入 Footer 組件 -->
    <Footer></Footer>

    <!-- ── Contact Modal ─────────────────────────────── -->
    <Transition name="contact-fade">
      <div
        v-if="showContact"
        class="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        style="background: rgba(0,0,0,0.4); backdrop-filter: blur(8px)"
        @click.self="closeModal"
      >
        <div
          class="relative bg-white w-full max-w-lg rounded-2xl overflow-y-auto"
          style="padding: 32px 48px; max-height: 90vh"
        >
          <!-- Close -->
          <button
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-lg transition-colors"
            style="color: #9CA3AF"
            @mouseenter="e => e.target.style.color = '#1B2A4A'"
            @mouseleave="e => e.target.style.color = '#9CA3AF'"
            @click="closeModal"
            aria-label="關閉"
          >✕</button>

          <div class="flex flex-col gap-6 items-center text-center">
            <div>
              <h2 class="text-xl font-bold text-navy mb-1">Hey, Let's Build Something.</h2>
              <p class="text-sm text-gray-500 leading-loose">{{ isEn ? 'Feel free to reach out anytime.' : '有任何想法或問題，歡迎隨時聯繫。' }}</p>
            </div>

            <div class="flex items-center gap-2 text-sm" style="color: #4B5563">
              <span>📍</span>
              <span>{{ isEn ? 'New Taipei City, Taiwan' : '新北市，台灣' }}</span>
            </div>

            <!-- Contact methods -->
            <div class="flex flex-col gap-5 items-center w-full">
              <!-- Email -->
              <a href="mailto:wenhsin600@gmail.com" class="flex items-center gap-3 group">
                <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(42,157,143,0.12)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="color: #2A9D8F" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span class="text-base font-medium group-hover:underline" style="color: #2A9D8F">wenhsin600@gmail.com</span>
              </a>

              <!-- Telegram -->
              <div class="flex flex-col items-center gap-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(42,157,143,0.12)">
                    <img src="/images/more/tglogo.svg" alt="Telegram" class="w-5 h-5 object-contain" />
                  </div>
                  <span class="text-base font-medium" style="color: #1B2A4A">@TWENHSIN</span>
                </div>
                <img src="/images/more/tg.png" alt="Telegram QR Code" style="width: 120px; height: 120px; object-fit: contain;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const showContact = useState('showContact', () => false)
const route = useRoute()
const isEn = computed(() => route.path.startsWith('/en'))

function closeModal() {
  showContact.value = false
}
</script>

<style scoped>
.contact-fade-enter-active,
.contact-fade-leave-active {
  transition: opacity 0.2s ease;
}
.contact-fade-enter-from,
.contact-fade-leave-to {
  opacity: 0;
}
</style>
