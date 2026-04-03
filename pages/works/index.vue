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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(work, idx) in works"
          :key="work.to"
          :to="work.to"
          v-reveal="{ delay: idx * 100 }"
          class="work-card group flex flex-col rounded-2xl overflow-hidden"
          style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.05); transition: box-shadow 0.3s, transform 0.3s"
        >
          <!-- Cover image -->
          <div class="w-full overflow-hidden" style="min-height: 240px;">
            <img v-if="work.cover" :src="work.cover" :alt="work.title" class="w-full h-full object-cover" style="min-height: 240px;" />
            <div v-else class="w-full h-full flex items-center justify-center" :style="`background: ${work.gradient}; min-height: 240px;`">
              <span class="text-white/30 text-sm">Cover Image</span>
            </div>
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
    </section>

  </div>
</template>

<script setup lang="ts">
const works = [
  {
    to: '/works/designops',
    type: 'DesignOps / 規格同步',
    title: 'DesignOps System',
    description: '消除設計與開發端的規格斷層，透過自動化同步讓設計規格與開發環境保持一致。',
    tags: ['視覺數據化', 'Design Tokens', 'Design-to-Code', 'Single Source of Truth'],
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2A9D8F 100%)',
    cover: '/images/work1/hero.png',
  },
  {
    to: '/works/filo',
    type: 'AI-NATIVE 產品 / Code-to-Design 工作流',
    title: 'Filo',
    description: '打造內建 Generative UI 的 AI-native 產品，建立 Code-to-Design 雙向同步工作流，實現代碼即設計，同步完成高保真原型驗證。',
    tags: ['Generative UI', '快速原型', 'AI Workflow', '雙向同步'],
    gradient: 'linear-gradient(135deg, #2A4A6B 0%, #2A9D8F 100%)',
    cover: '',
  },
  {
    to: '/works/cohealing',
    type: '產品策略 / 0-to-1',
    title: 'Cohealing',
    description: '從品牌定位到產品規劃，完成 0-to-1 的完整設計交付。',
    tags: ['產品策略', '品牌定位', '0-to-1', 'UIUX 設計'],
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #3D6B8F 100%)',
    cover: '/images/Hero3.png',
  },
]
</script>

<style scoped>
.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1) !important;
}
</style>
