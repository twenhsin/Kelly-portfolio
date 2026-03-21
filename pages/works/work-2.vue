<template>
  <div class="work-page">

    <!-- ─────────────────────────────────────────────
         Hero — two column, white bg
    ───────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pt-16 md:pt-28 pb-16">
      <div class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">

        <!-- Left: copy -->
        <div v-reveal class="flex-1 min-w-0">
          <!-- Badge -->
          <span
            class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
            style="background: rgba(42,157,143,0.15); color: #2A9D8F; border-radius: 999px; white-space: nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Case Study
          </span>

          <!-- Title -->
          <h1
            class="text-3xl md:text-5xl font-bold text-navy mb-3"
            style="line-height: 1.25"
          >
            {{ project.title }}
          </h1>

          <!-- Brand name -->
          <p
            class="text-4xl md:text-6xl font-black mb-8"
            style="color: #2A9D8F; line-height: 1.1"
          >
            {{ project.brandName }}
          </p>

          <!-- Meta grid 2×2 -->
          <div class="grid grid-cols-2 gap-x-10 gap-y-5 mb-10">
            <div v-for="meta in project.meta" :key="meta.label">
              <span class="block text-xs font-semibold tracking-widest uppercase mb-1" style="color: #9CA3AF">{{ meta.label }}</span>
              <a
                v-if="meta.link"
                :href="`https://${meta.value}`"
                target="_blank"
                rel="noopener"
                class="text-sm font-medium underline underline-offset-2"
                style="color: #2A9D8F"
              >{{ meta.value }}</a>
              <span v-else class="text-sm font-medium text-navy">{{ meta.value }}</span>
            </div>
          </div>

          <!-- CTA -->
          <a
            href="#case-study"
            class="inline-flex items-center gap-2 text-sm font-semibold"
            style="color: #2A9D8F"
          >
            View Case Study
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <!-- Right: product screenshot -->
        <div v-reveal="{ delay: 150 }" class="flex-1 min-w-0 w-full">
          <div
            class="w-full rounded-2xl overflow-hidden"
            style="background: #0F1117; min-height: 400px; display: flex; align-items: center; justify-content: center;"
          >
            <!-- Replace with actual screenshot -->
            <!-- <img src="/images/works/work-2-hero.png" alt="Filo app screenshot" class="w-full object-cover" /> -->
            <span class="text-gray-600 text-sm">Product Screenshot</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Process Section (repeatable)
    ───────────────────────────────────────────── -->
    <section
      v-for="(section, idx) in project.sections.filter(s => !s.phases && !s.outcomes)"
      :key="idx"
      class="py-16"
      :style="section.bg ? `background: ${section.bg}` : ''"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div v-reveal :class="section.center ? 'text-center' : ''">
          <div v-if="!section.hideLabel" class="flex items-center gap-2 mb-3">
            <div class="w-1 h-4 rounded-full bg-teal" />
            <span class="text-xs font-semibold tracking-widest uppercase" style="color: #2A9D8F">{{ section.label }}</span>
          </div>
          <h2 class="text-2xl font-bold text-navy mb-4" style="line-height: 1.5">
            {{ section.title }}
          </h2>
          <p
            class="text-sm text-gray-600 leading-loose mb-10"
            :class="section.center ? 'mx-auto max-w-xl' : 'max-w-3xl'"
          >
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

        <!-- Optional: key points (3-col grid) -->
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

        <!-- Optional: goal cards (centered title + icon cards) -->
        <div
          v-if="section.goalCards"
          v-reveal="{ delay: 100 }"
          class="grid sm:grid-cols-3 gap-5 mt-10"
        >
          <div
            v-for="card in section.goalCards"
            :key="card.title"
            class="rounded-2xl p-6 sm:p-8 bg-white flex flex-row sm:flex-col items-start sm:items-center gap-4 sm:gap-0 text-left sm:text-center"
            style="border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 2px 16px rgba(0,0,0,0.04)"
          >
            <div
              class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center sm:mb-6"
              style="background: rgba(42,157,143,0.12)"
            >
              <span class="text-xl" style="color: #2A9D8F" v-html="card.icon" />
            </div>
            <div>
              <h4 class="text-base font-bold text-navy mb-2 sm:mb-3">{{ card.title }}</h4>
              <p class="text-sm text-gray-500 leading-loose">{{ card.body }}</p>
            </div>
          </div>
        </div>

        <!-- Optional: highlight cards (2-col, one accent) -->
        <div
          v-if="section.highlights"
          v-reveal="{ delay: 100 }"
          class="grid sm:grid-cols-2 gap-5 mt-10"
        >
          <div
            v-for="card in section.highlights"
            :key="card.title"
            class="rounded-2xl p-6"
            :style="card.accent
              ? 'background: #2A9D8F; color: #fff'
              : 'background: #fff; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 2px 12px rgba(0,0,0,0.05)'"
          >
            <div class="flex items-center gap-2 mb-3">
              <span class="text-base">{{ card.icon }}</span>
              <h4
                class="text-sm font-bold"
                :style="card.accent ? 'color: #fff' : 'color: #2A9D8F'"
              >{{ card.title }}</h4>
            </div>
            <p
              class="text-sm leading-loose"
              :style="card.accent ? 'color: rgba(255,255,255,0.85)' : 'color: #4B5563'"
            >{{ card.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Phases Section (設計開發歷程)
    ───────────────────────────────────────────── -->
    <template v-for="(section, idx) in project.sections" :key="'phase-' + idx">
      <section
        v-if="section.phases"
        class="py-16"
        :style="section.bg ? `background: ${section.bg}` : ''"
      >
        <div class="max-w-6xl mx-auto px-6">
          <!-- Section heading -->
          <div v-reveal class="mb-12">
            <h2 class="text-2xl font-bold text-navy" style="line-height: 1.5">{{ section.title }}</h2>
          </div>

          <!-- Phase cards -->
          <div class="flex flex-col gap-8">
            <div
              v-for="(phase, pi) in section.phases"
              :key="pi"
              v-reveal="{ delay: pi * 100 }"
            >

              <!-- ── Layout A: left label + right card (Phase 1 style) ── -->
              <div v-if="phase.steps" class="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <!-- Left col: full on mobile, ~32% on desktop -->
                <div class="w-full md:w-[32%] md:flex-shrink-0">
                  <div class="text-6xl font-black mb-2 leading-none" style="color: rgba(42,157,143,0.22)">
                    {{ String(pi + 1).padStart(2, '0') }}
                  </div>
                  <h3 class="text-base font-bold text-navy mb-4">{{ phase.title }}</h3>
                  <div v-if="phase.tags" class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in phase.tags"
                      :key="tag"
                      class="text-xs px-3 py-1 rounded-full font-medium"
                      style="background: rgba(42,157,143,0.1); color: #2A9D8F"
                    >{{ tag }}</span>
                  </div>
                </div>

                <!-- Right: white card (~68%) -->
                <div
                  class="rounded-2xl p-6 min-w-0"
                  style="flex: 1; background: #fff; border: 1px solid rgba(0,0,0,0.07); box-shadow: 0 2px 16px rgba(0,0,0,0.05)"
                >
                  <!-- Description: full width at top -->
                  <p class="text-sm text-gray-600 leading-loose mb-6">{{ phase.body }}</p>

                  <!-- Steps + KEY DISCOVERY: stacked on mobile, side by side on desktop -->
                  <div class="flex flex-col md:flex-row gap-5 items-start">
                    <!-- Steps col (60%) -->
                    <div class="min-w-0 flex flex-col gap-4" style="flex: 6">
                      <div v-for="(step, si) in phase.steps" :key="si" class="flex gap-3 items-start">
                        <span
                          class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                          style="background: #2A9D8F"
                        >{{ si + 1 }}</span>
                        <div>
                          <div class="text-sm font-bold text-navy">{{ step.title }}</div>
                          <div class="text-xs text-gray-500 leading-relaxed mt-0.5">{{ step.sub }}</div>
                        </div>
                      </div>
                    </div>

                    <!-- KEY DISCOVERY col (30% on desktop, full on mobile) -->
                    <div
                      v-if="phase.discovery"
                      class="w-full rounded-xl p-4 md:w-auto"
                      style="flex: 4; background: rgba(42,157,143,0.08); border: 1px solid rgba(42,157,143,0.15)"
                    >
                      <div class="text-xs font-bold tracking-widest uppercase mb-2" style="color: #2A9D8F">Key Discovery</div>
                      <p class="text-xs text-gray-600 leading-relaxed">{{ phase.discovery }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ── Layout B: left card + right label (Phase 2 style, mirrored) ── -->
              <div v-else-if="!phase.accent" class="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-start">

                <!-- Left: white card (~68%) -->
                <div
                  class="rounded-2xl p-6 min-w-0"
                  style="flex: 1; background: #fff; border: 1px solid rgba(0,0,0,0.07); box-shadow: 0 2px 16px rgba(0,0,0,0.05)"
                >
                  <!-- Top row: text + center icon -->
                  <div class="flex gap-6 mb-6">
                    <div class="flex-1 min-w-0">
                      <p v-if="phase.leftBody" class="text-sm text-gray-600 leading-loose">{{ phase.leftBody }}</p>
                      <p v-if="phase.highlightText" class="text-sm text-gray-600 leading-loose mt-1">
                        <span v-html="phase.highlightText" />
                      </p>
                    </div>
                    <div
                      v-if="phase.centerIcon"
                      class="flex-shrink-0 flex flex-col items-center justify-center rounded-2xl"
                      style="background: rgba(42,157,143,0.08); width: 120px; height: 120px"
                    >
                      <span style="color: #2A9D8F" v-html="phase.centerIcon" />
                      <span class="text-xs font-semibold text-center text-gray-500 mt-2">{{ phase.centerLabel }}</span>
                    </div>
                  </div>

                  <!-- Flow steps -->
                  <div
                    v-if="phase.flow"
                    class="flex items-center mb-6 rounded-xl px-5 py-4"
                    style="background: #f9fafb"
                  >
                    <template v-for="(step, si) in phase.flow" :key="si">
                      <div class="flex-1 text-center">
                        <div class="text-xs text-gray-400 mb-1">{{ step.label }}</div>
                        <div class="text-sm font-bold text-navy">{{ step.value }}</div>
                      </div>
                      <svg v-if="si < phase.flow.length - 1" class="w-4 h-4 flex-shrink-0 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </template>
                  </div>

                  <!-- Bottom KEY DISCOVERY -->
                  <div v-if="phase.discoveryBottom" class="rounded-xl p-5" style="background: rgba(42,157,143,0.08); border: 1px solid rgba(42,157,143,0.15)">
                    <div class="text-xs font-bold tracking-widest uppercase mb-2" style="color: #2A9D8F">Key Discovery</div>
                    <p class="text-sm text-navy font-semibold mb-1">{{ phase.discoveryBottom.title }}</p>
                    <p class="text-sm text-gray-600 leading-loose">{{ phase.discoveryBottom.body }}</p>
                  </div>
                </div>

                <!-- Right: no card (~32%) -->
                <div class="w-full md:w-[32%] md:flex-shrink-0">
                  <div class="text-6xl font-black mb-2 leading-none" style="color: rgba(42,157,143,0.22)">
                    {{ String(pi + 1).padStart(2, '0') }}
                  </div>
                  <h3 class="text-base font-bold text-navy mb-3">{{ phase.rightCol?.title }}</h3>
                  <p class="text-sm text-gray-600 leading-loose">{{ phase.rightCol?.body }}</p>
                </div>

              </div>

              <!-- ── Layout C: accent card (Phase 3 style) ── -->
              <div
                v-else
                class="rounded-2xl p-8"
                style="background: rgba(42,157,143,0.08); border: 1px solid rgba(42,157,143,0.15)"
              >
                <h3 class="text-xl font-bold text-navy mb-4">{{ phase.title }}</h3>
                <p class="text-sm text-gray-600 leading-loose mb-6">{{ phase.leftBody }}</p>
                <div v-if="phase.comparison" class="grid sm:grid-cols-2 gap-6">
                  <div v-for="col in phase.comparison" :key="col.label">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="text-base">{{ col.icon }}</span>
                      <span class="text-sm font-semibold" :style="col.accent ? 'color: #2A9D8F' : 'color: #1B2A4A'">{{ col.label }}</span>
                    </div>
                    <p class="text-sm text-gray-600 leading-loose">{{ col.body }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- ─────────────────────────────────────────────
         Outcomes Section (成果與洞察)
    ───────────────────────────────────────────── -->
    <template v-for="(section, idx) in project.sections" :key="'outcome-' + idx">
      <section v-if="section.outcomes" class="py-16" :style="section.bg ? `background: ${section.bg}` : ''">
        <div class="max-w-6xl mx-auto px-6">
          <!-- Centered heading -->
          <div v-reveal class="text-center mb-12">
            <h2 class="text-2xl font-bold text-navy">{{ section.title }}</h2>
          </div>

          <!-- Two columns -->
          <div v-reveal="{ delay: 100 }" class="grid md:grid-cols-2 gap-6">
            <!-- Left: 最終結果 (light card) -->
            <div class="rounded-2xl p-8" style="background: #f9fafb; border: 1px solid rgba(0,0,0,0.06)">
              <div class="flex items-center gap-2 mb-6">
                <div class="w-1 h-5 rounded-full" style="background: #2A9D8F" />
                <h3 class="text-base font-bold text-navy">{{ section.outcomes.left.title }}</h3>
              </div>
              <div class="flex flex-col gap-5">
                <div v-for="item in section.outcomes.left.items" :key="item.title" class="flex gap-3 items-start">
                  <svg class="w-4 h-4 flex-shrink-0 mt-0.5" style="color: #2A9D8F" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div class="text-sm font-bold text-navy mb-1">{{ item.title }}</div>
                    <p class="text-sm text-gray-600 leading-loose">{{ item.body }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: 實踐洞察 (teal accent card) -->
            <div class="rounded-2xl p-8" style="background: #2A9D8F">
              <div class="flex items-center gap-2 mb-6">
                <div class="w-1 h-5 rounded-full" style="background: rgba(255,255,255,0.6)" />
                <h3 class="text-base font-bold text-white">{{ section.outcomes.right.title }}</h3>
              </div>
              <div class="mb-6">
                <div class="text-sm font-bold text-white mb-2">{{ section.outcomes.right.insight.title }}</div>
                <p class="text-sm leading-loose" style="color: rgba(255,255,255,0.85)">{{ section.outcomes.right.insight.body }}</p>
              </div>
              <p class="text-base font-bold text-white leading-relaxed">{{ section.outcomes.right.closing }}</p>
            </div>
          </div>
        </div>
      </section>
    </template>

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
// ── Project data ─────────────────────────────────────────────────────────
// Replace the placeholder content below with actual project details.
const project = {
  title: '與 AI 對話的財務日誌',
  brandName: 'Filo',
  subtitle: '',
  tags: [],

  meta: [
    { label: '角色', value: 'Lead UI/UX Designer' },
    { label: '開發週期', value: '3 週' },
    { label: '類型', value: '個人專案／AI-native PWA' },
    { label: '產品連結', value: 'flow-budget-app.vercel.app', link: true },
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
      label: '專案核心',
      hideLabel: true,
      bg: '#f9fafb',
      title: '專案核心',
      body: '這件作品的核心目標不是驗證產品市場可行性，而是實踐一個問題的答案：設計師如何透過 AI 協作工具，逐步建立 AI workflow，主導一個產品從零到一？',
      highlights: [
        {
          icon: '⚠',
          title: '核心聚焦',
          body: '為了讓精力集中在 AI 協作流程與 AI 功能導入的實踐，有意識地縮小產品規劃範圍——不進行用戶訪談、市場調查等標準產品開發步驟，以個人真實需求快速定案產品方向。',
          accent: false,
        },
        {
          icon: '⚡',
          title: '產品核心方向',
          body: '記帳 App 讓人放棄的原因不是功能不夠，而是認知與操作負擔太高。設計核心：降低輸入摩擦力，把決定的責任從用戶轉移給系統。',
          accent: true,
        },
      ],
    },
    {
      label: '核心挑戰與目標',
      hideLabel: true,
      center: true,
      title: '核心挑戰與目標',
      body: '當 AI 開始重塑產品開發與用戶互動，設計師的職能核心也必須跟著重新定義——三個方向，三個實踐。',
      goalCards: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
          title: '流程建立',
          body: '建立一套可重複執行的 AI 協作開發流程',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>`,
          title: 'AI 功能導入',
          body: '把 AI 功能真正整合進產品核心，讓 AI 成為產品的結構性支撐，而非附加功能。',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>`,
          title: '可持續的設計架構',
          body: '在快速建立 MVP 之後，找到讓產品可持續發展的設計架構',
        },
      ],
    },
    {
      label: '設計開發歷程',
      hideLabel: true,
      bg: '#f9fafb',
      title: '設計開發歷程',
      phases: [
        {
          title: 'Phase 1: 快速建立 MVP',
          tags: ['AI 協作執行', '高擬真 Prototype', '完整前後端'],
          steps: [
            { title: 'Google Stitch → Figma', sub: '生成視覺方向，萃取設計語言，調整主畫面' },
            { title: 'Claude + Claude Code', sub: '以截圖加口述指令協作開發，設計師負責決策與檢視' },
            { title: 'Testable Prototype', sub: '部署上線，完整前後端架構，真實可運行' },
          ],
          body: '以 AI 輔助工作流程取代傳統設計開發模式——從視覺探索到協作開發，快速交付一個真實可運行的 Prototype。',
          discovery: '以文字加截圖取代 Figma MCP，直接在 Claude Code 中推進，速度更快，也讓 UI 調整直接在建置過程中落地。',
        },
        {
          title: 'Phase 2: 設計系統化',
          leftBody: '從 Claude Code 已生成的 UI 反向提取設計規律，整理進 Figma，匯出',
          highlightText: '<span style="color:#2A9D8F;font-weight:600">tokens.json</span> 讓設計與開發發對齊，也讓專案具備持續擴充的基礎。',
          centerIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm8-8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" /></svg>`,
          centerLabel: 'Rules & Tokens',
          rightCol: {
            title: 'Phase 2: 設計系統化',
            body: '為專案建立可持續開發與維護的結構。',
          },
          flow: [
            { label: 'Capture', value: 'Claude UI' },
            { label: 'Organize', value: 'Figma' },
            { label: 'Standardize', value: 'Rules Engine' },
          ],
          discoveryBottom: {
            title: 'AI 驅動的 TOKEN 自動化流程',
            body: '以往手動整理 TSF 耗費大量時間。這次透過 Claude Code 生成介面的同時產出 tokens.json，匯入 TSF 微調後直接導出。省去了繁重的設定工作，設計系統的同步效率大幅提升。',
          },
        },
        {
          accent: true,
          title: 'Generative UI 的實踐',
          leftBody: '從「預定義元件」轉向「定義生成規則」。由設計師設定情境與系統約束，讓 AI 根據用戶意圖動態調用介面，實現設計語言一致性與介面的靈活性共存的體驗。',
          comparison: [
            {
              icon: '⏱',
              label: '傳統思維',
              accent: false,
              body: '為開發者建立靜態函式庫和像素級精確規格。',
            },
            {
              icon: '✦',
              label: 'AI-First 時代',
              accent: true,
              body: '為人工智慧解釋和部署定義系統約束和語義邏輯。',
            },
          ],
        },
      ],
    },
    {
      label: '成果與洞察',
      title: '成果與洞察',
      bg: '#fff',
      outcomes: {
        left: {
          title: '最終結果',
          items: [
            {
              title: '產品層面',
              body: '從概念到可上線的全端 PWA，在保留傳統操作習慣的同時，深度整合 AI 語音、文字與拍照掃描功能。透過 AI 自動分類、自然語言查詢與 Generative UI，為不同使用習慣的用戶提供過渡至 AI 驅動記帳的可能性。',
            },
            {
              title: '設計系統層面',
              body: '從 Claude Code 已生成的介面反向提取設計規律，透過 tokens.json 在 Figma 與 Claude Code 之間雙向對齊——設計決策得以被記錄、複用，形成可持續擴充與維護的設計系統。',
            },
            {
              title: '工作流程層面',
              body: '從視覺與功能探索到開發交付，建立了一套以 AI 協作為核心的完整工作循環。這套流程不限制於此專案，可直接沿用於下一個 0-1 產品的快速啟動。',
            },
          ],
        },
        right: {
          title: '實踐洞察',
          insight: {
            title: '思維複利',
            body: '真正的效率不僅在於速度，更在於專案間的「知識流動」。從快速工程和代幣管理中學到的經驗教訓能夠帶來累積優勢。',
          },
          closing: '當 AI 釋放了生產力，設計師的價值便回歸到「定義規則」，「系統建構」與「專業判斷」：我們不只是在完成專案，是在建構一套能夠演進的邏輯系統。',
        },
      },
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

  prev: { to: '/works/work-1', title: 'Work 01' },
  next: { to: '/works/work-3', title: 'Work 03' },
}
</script>

<style scoped>
.work-page {
  background: #FFFEFD;
}
</style>
