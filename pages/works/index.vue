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
        <h1 class="text-4xl md:text-5xl font-bold text-navy mb-2" style="line-height: 1.3">設計專案</h1>
        <div class="w-8 h-1 bg-teal rounded-full mb-4" />
        <p class="text-sm text-gray-500 leading-loose max-w-lg">
          三件代表性專案，記錄從問題定義到最終設計的完整思考過程。
        </p>
      </div>
    </section>

    <!-- ── Work cards ─────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pb-28">

      <!-- Row 1: two cards side by side -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <NuxtLink
          v-for="(work, idx) in works.slice(0, 2)"
          :key="work.to"
          :to="work.to"
          v-reveal="{ delay: idx * 100 }"
          class="work-card group flex flex-col rounded-2xl overflow-hidden"
          style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.05); transition: box-shadow 0.3s, transform 0.3s"
        >
          <!-- Cover image -->
          <div
            class="w-full flex items-center justify-center"
            :style="`background: ${work.gradient}; min-height: 240px;`"
          >
            <span class="text-white/30 text-sm">Cover Image</span>
          </div>

          <!-- Text area -->
          <div class="flex flex-col px-6 py-7 flex-1">
            <span class="text-xs font-semibold tracking-widest uppercase mb-3" style="color: #2A9D8F">{{ work.type }}</span>
            <h2 class="text-xl font-bold text-navy group-hover:text-teal transition-colors mb-2" style="line-height: 1.4">{{ work.title }}</h2>
            <p class="text-sm text-gray-500 leading-loose mb-5">{{ work.description }}</p>
            <div class="flex gap-2 flex-wrap mb-5">
              <span
                v-for="tag in work.tags"
                :key="tag"
                class="text-xs font-medium px-2.5 py-1 rounded-full"
                style="background: #F3F5F7; color: #6E7987"
              >{{ tag }}</span>
            </div>
            <span class="inline-flex items-center gap-1.5 text-sm font-medium mt-auto" style="color: #2A9D8F">
              查看案例
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Row 2: third card, left-aligned, same width as one column above -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          :to="works[2].to"
          v-reveal="{ delay: 200 }"
          class="work-card group flex flex-col rounded-2xl overflow-hidden"
          style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.05); transition: box-shadow 0.3s, transform 0.3s"
        >
          <!-- Cover image -->
          <div class="w-full overflow-hidden" style="min-height: 240px;">
            <img src="/images/Hero3.png" alt="Cohealing" class="w-full h-full object-cover" style="min-height: 240px;" />
          </div>

          <!-- Text area -->
          <div class="flex flex-col px-6 py-7 flex-1">
            <span class="text-xs font-semibold tracking-widest uppercase mb-3" style="color: #2A9D8F">{{ works[2].type }}</span>
            <h2 class="text-xl font-bold text-navy group-hover:text-teal transition-colors mb-2" style="line-height: 1.4">{{ works[2].title }}</h2>
            <p class="text-sm text-gray-500 leading-loose mb-5">{{ works[2].description }}</p>
            <div class="flex gap-2 flex-wrap mb-5">
              <span
                v-for="tag in works[2].tags"
                :key="tag"
                class="text-xs font-medium px-2.5 py-1 rounded-full"
                style="background: #F3F5F7; color: #6E7987"
              >{{ tag }}</span>
            </div>
            <span class="inline-flex items-center gap-1.5 text-sm font-medium mt-auto" style="color: #2A9D8F">
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
    to: '/works/designops',
    type: '設計系統 / DesignOps',
    title: 'DesignOps System',
    description: '以 Figma MCP + Claude Code 為核心，建立讓 AI 可以正確讀取並執行的設計系統基礎建設。',
    tags: ['設計系統', '視覺數據化', 'DesignOps', 'AI 協作'],
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2A9D8F 100%)',
  },
  {
    to: '/works/filo',
    type: 'AI-native 產品 / Generative UI',
    title: 'Filo',
    description: '從產品概念到部署上線，完整實踐 AI 協作的開發流程——透過 AI 互動讓介面根據使用者行為動態回應（Generative UI）。',
    tags: ['AI 協作', '產品設計', '全端開發', 'AI Workflow'],
    gradient: 'linear-gradient(135deg, #2A4A6B 0%, #2A9D8F 100%)',
  },
  {
    to: '/works/cohealing',
    type: '產品策略 / 0-to-1',
    title: 'Cohealing',
    description: '從品牌定位到產品規劃，一個真實創業場景的完整策略決策過程。',
    tags: ['產品策略', '0-to-1', '品牌定位', 'UIUX 設計'],
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
