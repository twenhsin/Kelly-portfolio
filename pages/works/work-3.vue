<template>
  <div class="work-page">

    <!-- ─────────────────────────────────────────────
         Hero — full width cover
    ───────────────────────────────────────────── -->
    <section
      class="w-full flex items-end"
      style="min-height: 560px; background: linear-gradient(135deg, #1B2A4A 0%, #2A4A6B 60%, #2A9D8F 100%);"
    >
      <div class="max-w-6xl mx-auto px-6 pt-32 pb-16 w-full">
        <!-- Tags -->
        <div class="flex gap-2 flex-wrap mb-5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-xs font-medium px-3 py-1 rounded-full"
            style="background: rgba(255,255,255,0.15); color: #fff"
          >{{ tag }}</span>
        </div>

        <!-- Title -->
        <h1
          v-reveal
          class="text-4xl md:text-6xl font-bold text-white mb-6"
          style="line-height: 1.2; max-width: 800px"
        >
          {{ project.title }}
        </h1>

        <!-- Subtitle -->
        <p
          v-reveal="{ delay: 100 }"
          class="text-base md:text-lg max-w-xl mb-10"
          style="color: rgba(255,255,255,0.75); line-height: 1.8"
        >
          {{ project.subtitle }}
        </p>

        <!-- Meta pills -->
        <div v-reveal="{ delay: 200 }" class="flex gap-6 flex-wrap">
          <div v-for="meta in project.meta" :key="meta.label" class="flex flex-col gap-1">
            <span class="text-xs font-semibold tracking-widest uppercase" style="color: rgba(255,255,255,0.5)">{{ meta.label }}</span>
            <span class="text-sm font-medium text-white">{{ meta.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Cover Image
    ───────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 -mt-2">
      <div
        v-reveal
        class="w-full rounded-2xl overflow-hidden"
        style="background: #e8edf3; min-height: 360px; display: flex; align-items: center; justify-content: center;"
      >
        <!-- Replace with actual cover image -->
        <!-- <img src="/images/works/work-2-cover.png" alt="Project cover" class="w-full object-cover" /> -->
        <span class="text-gray-400 text-sm">Cover Image Placeholder</span>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Overview — Problem + Role
    ───────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <!-- Problem -->
        <div v-reveal>
          <SectionLabel icon="problem" text="問題背景" />
          <h2 class="text-2xl font-bold text-navy mb-4" style="line-height: 1.5">
            {{ project.problem.title }}
          </h2>
          <p class="text-sm text-gray-600 leading-loose">
            {{ project.problem.body }}
          </p>
        </div>

        <!-- Role / Timeline / Tools -->
        <div v-reveal="{ delay: 150 }" class="flex flex-col gap-6">
          <div v-for="item in project.sideInfo" :key="item.label">
            <span class="text-xs font-semibold tracking-widest uppercase text-teal block mb-1">{{ item.label }}</span>
            <p class="text-sm text-navy font-medium leading-relaxed">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Divider
    ───────────────────────────────────────────── -->
    <div class="max-w-6xl mx-auto px-6">
      <div class="border-t border-gray-100" />
    </div>

    <!-- ─────────────────────────────────────────────
         Process Section (repeatable)
    ───────────────────────────────────────────── -->
    <section
      v-for="(section, idx) in project.sections"
      :key="idx"
      class="max-w-6xl mx-auto px-6 py-16"
    >
      <div v-reveal>
        <SectionLabel :text="section.label" />
        <h2 class="text-2xl font-bold text-navy mb-4" style="line-height: 1.5">
          {{ section.title }}
        </h2>
        <p class="text-sm text-gray-600 leading-loose max-w-3xl mb-10">
          {{ section.body }}
        </p>
      </div>

      <!-- Optional: image block -->
      <div
        v-if="section.image"
        v-reveal="{ delay: 100 }"
        class="w-full rounded-xl overflow-hidden"
        style="background: #e8edf3; min-height: 280px; display: flex; align-items: center; justify-content: center;"
      >
        <!-- <img :src="section.image" :alt="section.title" class="w-full object-cover" /> -->
        <span class="text-gray-400 text-sm">{{ section.imagePlaceholder ?? 'Image Placeholder' }}</span>
      </div>

      <!-- Optional: key points -->
      <div
        v-if="section.points"
        v-reveal="{ delay: 100 }"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
      >
        <div
          v-for="point in section.points"
          :key="point.title"
          class="rounded-xl p-5"
          style="background: rgba(42,157,143,0.06); border: 1px solid rgba(42,157,143,0.12)"
        >
          <h4 class="text-sm font-bold text-navy mb-2">{{ point.title }}</h4>
          <p class="text-xs text-gray-600 leading-relaxed">{{ point.body }}</p>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Outcome
    ───────────────────────────────────────────── -->
    <section class="py-20" style="background: rgba(42,157,143,0.06)">
      <div class="max-w-6xl mx-auto px-6">
        <div v-reveal class="mb-10">
          <SectionLabel icon="outcome" text="成果與反思" />
          <h2 class="text-2xl font-bold text-navy mb-4">{{ project.outcome.title }}</h2>
          <p class="text-sm text-gray-600 leading-loose max-w-2xl">{{ project.outcome.body }}</p>
        </div>

        <!-- Metrics (optional) -->
        <div v-reveal="{ delay: 100 }" class="grid sm:grid-cols-3 gap-6">
          <div
            v-for="metric in project.outcome.metrics"
            :key="metric.label"
            class="rounded-2xl p-6 bg-white text-center"
            style="box-shadow: 0 2px 16px rgba(0,0,0,0.06)"
          >
            <div class="text-3xl font-bold mb-1" style="color: #2A9D8F">{{ metric.value }}</div>
            <div class="text-xs text-gray-500 font-medium">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Navigation — prev / next
    ───────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <div class="flex justify-between items-center gap-4 flex-wrap">
        <NuxtLink to="/works" class="flex items-center gap-2 text-sm text-gray-400 hover:text-navy transition-colors font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          所有作品
        </NuxtLink>

        <div class="flex gap-6">
          <NuxtLink
            v-if="project.prev"
            :to="project.prev.to"
            class="flex items-center gap-2 text-sm text-gray-400 hover:text-navy transition-colors font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {{ project.prev.title }}
          </NuxtLink>

          <NuxtLink
            v-if="project.next"
            :to="project.next.to"
            class="flex items-center gap-2 text-sm text-gray-400 hover:text-navy transition-colors font-medium"
          >
            {{ project.next.title }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// ── Section Label helper component (inline, local only) ──────────────────
const SectionLabel = defineComponent({
  props: { text: String, icon: String },
  setup(props) {
    return () =>
      h('div', { class: 'flex items-center gap-2 mb-3' }, [
        h('div', { class: 'w-1 h-4 rounded-full bg-teal' }),
        h('span', {
          class: 'text-xs font-semibold tracking-widest uppercase',
          style: 'color: #2A9D8F',
        }, props.text),
      ])
  },
})

// ── Project data ─────────────────────────────────────────────────────────
// Replace the placeholder content below with actual project details.
const project = {
  title: '專案標題 Project Title',
  subtitle: '這是一段簡短的副標題，說明這個專案解決了什麼問題，或帶來了什麼改變。',
  tags: ['UX Research', 'Product Design', 'Prototyping'],

  meta: [
    { label: 'Role', value: 'UI/UX Designer' },
    { label: 'Timeline', value: '2023／03 － 2023／08' },
    { label: 'Tools', value: 'Figma · FigJam · Notion' },
    { label: 'Team', value: '1 Designer · 2 PMs · 4 Engineers' },
  ],

  problem: {
    title: '問題是什麼？Why does this matter?',
    body: '在這裡描述使用者遇到的核心問題、商業背景，以及為什麼這個問題值得被解決。說明痛點的規模與影響範圍，讓讀者理解這件事的重要性。',
  },

  sideInfo: [
    { label: '我的角色', value: 'UI/UX 設計師，負責全程產品規劃、流程設計與介面設計。' },
    { label: '時間', value: '2023／03 － 2023／08（約 6 個月）' },
    { label: '工具', value: 'Figma · FigJam · Notion · Maze' },
  ],

  sections: [
    {
      label: '研究與洞察',
      title: '從用戶研究找到真正的問題',
      body: '描述研究方法（訪談、問卷、競品分析等）以及最重要的洞察結果。避免列清單，用敘事方式說明你發現了什麼、為什麼這個發現重要。',
      image: true,
      imagePlaceholder: 'Research Insights / Affinity Diagram',
    },
    {
      label: '設計過程',
      title: '定義方向，快速迭代',
      body: '說明設計決策的過程：如何從 insight 走到 concept，測試了什麼假設，遇到了哪些取捨，最終如何決定方向。',
      points: [
        { title: '核心設計原則一', body: '說明這個原則背後的思考邏輯與實際影響。' },
        { title: '核心設計原則二', body: '說明這個原則背後的思考邏輯與實際影響。' },
        { title: '核心設計原則三', body: '說明這個原則背後的思考邏輯與實際影響。' },
      ],
    },
    {
      label: '最終設計',
      title: '解決方案的樣貌',
      body: '展示最終設計，說明關鍵功能如何對應到用戶需求與商業目標。可以按照使用流程依序介紹。',
      image: true,
      imagePlaceholder: 'Final Design Screens',
    },
  ],

  outcome: {
    title: '上線後的成果與學到的事',
    body: '說明設計帶來的可量化成果（如果有的話），以及這個專案讓你學到什麼、下次會做什麼不同的選擇。誠實反思比亮眼數字更有說服力。',
    metrics: [
      { value: '—', label: '量化指標一' },
      { value: '—', label: '量化指標二' },
      { value: '—', label: '量化指標三' },
    ],
  },

  prev: { to: '/works/work-2', title: 'Work 02' },
  next: null,
}
</script>

<style scoped>
.work-page {
  background: #FFFEFD;
}
</style>
