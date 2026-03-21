<template>
  <div style="background: #FFFEFD; min-height: 100vh">

    <!-- ── Page heading ───────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pt-28 pb-12">
      <div v-reveal>
        <span
          class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
          style="background: rgba(42,157,143,0.15); color: #2A9D8F; white-space: nowrap"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0l-4-4m4 4l-4 4" />
          </svg>
          Works
        </span>
        <h1 class="text-4xl md:text-5xl font-bold text-navy mb-4" style="line-height: 1.3">設計作品</h1>
        <p class="text-sm text-gray-500 leading-loose max-w-lg">
          三件代表性專案，記錄從問題定義到最終設計的完整思考過程。
        </p>
      </div>
    </section>

    <!-- ── Work cards ─────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pb-28">
      <div class="flex flex-col gap-8">

        <NuxtLink
          v-for="(work, idx) in works"
          :key="work.to"
          :to="work.to"
          v-reveal="{ delay: idx * 120 }"
          class="work-card group rounded-2xl overflow-hidden flex flex-col md:flex-row"
          style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.05); transition: box-shadow 0.3s, transform 0.3s"
        >
          <!-- Thumbnail -->
          <div
            class="flex-shrink-0 flex items-center justify-center"
            :style="`background: ${work.gradient}; min-height: 260px; width: 100%; max-width: 420px`"
          >
            <!-- Replace with <img :src="work.image" …> when ready -->
            <span class="text-white/40 text-sm">Cover Image</span>
          </div>

          <!-- Info -->
          <div class="flex flex-col justify-center px-10 py-10 flex-1">
            <!-- Tags -->
            <div class="flex gap-2 flex-wrap mb-4">
              <span
                v-for="tag in work.tags"
                :key="tag"
                class="text-xs font-medium px-2.5 py-1 rounded-full transition-colors"
                style="background: rgba(42,157,143,0.1); color: #2A9D8F"
              >{{ tag }}</span>
            </div>

            <!-- Number + Title -->
            <div class="flex items-baseline gap-3 mb-3">
              <span class="text-xs font-bold tracking-widest text-gray-300">{{ String(idx + 1).padStart(2, '0') }}</span>
              <h2 class="text-xl md:text-2xl font-bold text-navy group-hover:text-teal transition-colors" style="line-height: 1.4">
                {{ work.title }}
              </h2>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-500 leading-loose mb-6 max-w-md">{{ work.description }}</p>

            <!-- CTA -->
            <span class="inline-flex items-center gap-1.5 text-sm font-medium" style="color: #2A9D8F">
              查看案例
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </NuxtLink>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const works = [
  {
    to: '/works/work-1',
    title: '專案一標題 Project Title',
    description: '一句話說明這個專案解決了什麼問題，或帶來了什麼改變。',
    tags: ['UX Research', 'Product Design'],
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2A9D8F 100%)',
  },
  {
    to: '/works/work-2',
    title: '專案二標題 Project Title',
    description: '一句話說明這個專案解決了什麼問題，或帶來了什麼改變。',
    tags: ['UI Design', 'Design System'],
    gradient: 'linear-gradient(135deg, #2A4A6B 0%, #2A9D8F 100%)',
  },
  {
    to: '/works/work-3',
    title: '專案三標題 Project Title',
    description: '一句話說明這個專案解決了什麼問題，或帶來了什麼改變。',
    tags: ['Prototyping', 'User Testing'],
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #3D6B8F 100%)',
  },
]
</script>

<style scoped>
.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1) !important;
}
</style>
