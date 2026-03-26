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
          class="relative bg-white w-full max-w-3xl rounded-2xl overflow-y-auto"
          style="padding: 32px; max-height: 90vh"
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

          <div class="flex flex-col md:flex-row gap-10">

            <!-- ── Left col ── -->
            <div class="flex-1 flex flex-col gap-6 min-w-0">
              <div>
                <h2 class="text-xl font-bold text-navy mb-1">Hey, Let's Build Something.</h2>
                <p class="text-sm text-gray-500 leading-loose">有任何想法或問題，歡迎隨時聯繫。</p>
              </div>

              <div class="flex items-center gap-2 text-sm" style="color: #4B5563">
                <span>📍</span>
                <span>新北市，台灣</span>
              </div>

              <!-- Contact methods -->
              <div class="flex flex-col gap-5">
                <!-- Email -->
                <a href="mailto:wenhsin600@gmail.com" class="flex items-center gap-3 group">
                  <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(42,157,143,0.1)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="color: #2A9D8F" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span class="text-sm text-navy group-hover:text-teal transition-colors">wenhsin600@gmail.com</span>
                </a>

                <!-- Telegram -->
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(42,157,143,0.1)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="color: #2A9D8F" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 1 0 24 12 12 12 0 0 0 11.944 0zm3.44 8.29l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                    </svg>
                  </div>
                  <div>
                    <span class="text-sm text-navy block">@username</span>
                    <span class="text-xs" style="color: #9CA3AF">QR Code 圖片佔位</span>
                  </div>
                </div>

                <!-- WhatsApp -->
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(42,157,143,0.1)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="color: #2A9D8F" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                    </svg>
                  </div>
                  <div>
                    <span class="text-sm text-navy block">+886 xxx xxx xxx</span>
                    <span class="text-xs" style="color: #9CA3AF">QR Code 圖片佔位</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- ── Right col: Form ── -->
            <div class="flex-1 min-w-0">
              <div v-if="submitted" class="h-full flex items-center justify-center py-16">
                <div class="text-center">
                  <div class="text-4xl mb-4">✉️</div>
                  <p class="text-base font-bold text-navy">收到了！</p>
                  <p class="text-sm mt-1" style="color: #6B7280">我會盡快回覆你。</p>
                </div>
              </div>

              <form v-else class="flex flex-col gap-4" @submit.prevent="submitForm">
                <div>
                  <label class="block text-xs font-semibold mb-1.5 tracking-widest uppercase" style="color: #9CA3AF">姓名</label>
                  <input
                    v-model="form.name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    class="w-full rounded-lg text-sm text-navy outline-none"
                    style="border: 1px solid #E4E7EC; background: #FAFAFA; padding: 10px 16px"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold mb-1.5 tracking-widest uppercase" style="color: #9CA3AF">Email</label>
                  <input
                    v-model="form.email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    class="w-full rounded-lg text-sm text-navy outline-none"
                    style="border: 1px solid #E4E7EC; background: #FAFAFA; padding: 10px 16px"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold mb-1.5 tracking-widest uppercase" style="color: #9CA3AF">訊息</label>
                  <textarea
                    v-model="form.message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Hello! I'd like to..."
                    class="w-full rounded-lg text-sm text-navy outline-none resize-none"
                    style="border: 1px solid #E4E7EC; background: #FAFAFA; padding: 10px 16px"
                  />
                </div>
                <button
                  type="submit"
                  :disabled="submitting"
                  class="px-6 py-3 rounded-lg text-white text-sm font-medium transition-opacity"
                  style="background: #2A9D8F"
                  :style="submitting ? 'opacity: 0.5' : ''"
                >
                  {{ submitting ? 'Sending...' : 'Ping Me！' }}
                </button>
              </form>
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
import { reactive, ref } from 'vue'

const showContact = useState('showContact', () => false)
const submitted = ref(false)
const submitting = ref(false)
const form = reactive({ name: '', email: '', message: '' })

function closeModal() {
  showContact.value = false
}

async function submitForm() {
  submitting.value = true
  try {
    await fetch('https://formspree.io/f/mykbyraw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    })
    submitted.value = true
  } finally {
    submitting.value = false
  }
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
