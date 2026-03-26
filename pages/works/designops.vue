<template>
  <div class="work-page">

    <!-- ─────────────────────────────────────────────
         1. Hero — two column, white bg
    ───────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pt-16 md:pt-28 pb-16">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">

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
              <span class="text-sm font-medium text-navy">{{ meta.value }}</span>
            </div>
          </div>
        </div>

        <!-- Right: hero visual -->
        <div v-reveal="{ delay: 150 }" class="flex-1 min-w-0 w-full">
          <div
            class="w-full rounded-2xl overflow-hidden"
            style="background: #0F1117; min-height: 400px; display: flex; align-items: center; justify-content: center;"
          >
            <span class="text-gray-600 text-sm">Hero Visual Placeholder</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         2 & 3. 專案核心 / 核心挑戰與目標 (general sections)
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
          <h2 class="text-2xl font-bold text-navy mb-2" style="line-height: 1.5">
            {{ section.title }}
          </h2>
          <div class="w-8 h-1 bg-teal rounded-full mb-4" :class="section.center ? 'mx-auto' : ''" />
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
            <h4 class="text-base font-bold text-navy mb-2">{{ point.title }}</h4>
            <p class="text-sm text-gray-600 leading-relaxed">{{ point.body }}</p>
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
                class="text-base font-bold"
                :style="card.accent ? 'color: #fff' : 'color: #2A9D8F'"
              >{{ card.title }}</h4>
            </div>
            <p
              v-if="card.body"
              class="text-sm leading-loose"
              :style="card.accent ? 'color: rgba(255,255,255,0.85)' : 'color: #4B5563'"
            >{{ card.body }}</p>
            <ul v-if="card.items" class="flex flex-col gap-2.5 mt-1">
              <li
                v-for="(item, i) in card.items"
                :key="i"
                class="flex gap-2.5 items-start text-sm leading-relaxed"
                :style="card.accent ? 'color: rgba(255,255,255,0.85)' : 'color: #4B5563'"
              >
                <span
                  class="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                  :style="card.accent ? 'background: rgba(255,255,255,0.5)' : 'background: #2A9D8F'"
                />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         4. 過程 — Phases Section
    ───────────────────────────────────────────── -->
    <template v-for="(section, idx) in project.sections" :key="'phase-' + idx">
      <section
        v-if="section.phases"
        class="py-16"
        :style="section.bg ? `background: ${section.bg}` : ''"
      >
        <div class="max-w-6xl mx-auto px-6">
          <div v-reveal class="mb-12">
            <div v-if="!section.hideLabel" class="flex items-center gap-2 mb-3">
              <div class="w-1 h-4 rounded-full" style="background: #2A9D8F" />
              <span class="text-xs font-semibold tracking-widest uppercase" style="color: #2A9D8F">{{ section.label }}</span>
            </div>
            <h2 class="text-2xl font-bold text-navy mb-2" style="line-height: 1.5">{{ section.title }}</h2>
            <div class="w-8 h-1 bg-teal rounded-full" />
            <p v-if="section.body" class="text-sm text-gray-600 leading-loose mt-3 max-w-3xl">{{ section.body }}</p>
          </div>

          <!-- Phase cards -->
          <div class="flex flex-col gap-24">
            <div
              v-for="(phase, pi) in section.phases"
              :key="pi"
              v-reveal="{ delay: pi * 100 }"
            >
              <!-- Phase layout: supports normal (label-left) and mirror (card-left) -->
              <div
                class="flex gap-6 md:gap-16 items-start"
                :class="phase.mirror ? 'flex-col md:flex-row' : 'flex-col md:flex-row'"
              >
                <!-- Label col — shown first normally, shown last when mirror -->
                <div
                  class="w-full md:w-[32%] md:flex-shrink-0"
                  :class="phase.mirror ? 'md:order-2' : 'md:order-1'"
                >
                  <div class="text-6xl font-black mb-2 leading-none" style="color: rgba(42,157,143,0.22)">
                    {{ String(pi + 1).padStart(2, '0') }}
                  </div>
                  <h3 class="text-xl font-bold text-navy mb-2">{{ phase.title }}</h3>
                  <p v-if="phase.sideBody" class="text-sm text-gray-600 leading-loose">{{ phase.sideBody }}</p>
                </div>

                <!-- Card col -->
                <div
                  class="flex-1 min-w-0 flex flex-col gap-4"
                  :class="phase.mirror ? 'md:order-1' : 'md:order-2'"
                >
                  <!-- White outer card -->
                  <div
                    class="rounded-2xl p-6 flex flex-col gap-6"
                    style="background: #fff; border: 1px solid rgba(0,0,0,0.07); box-shadow: 0 2px 16px rgba(0,0,0,0.05)"
                  >
                    <template v-for="(sub, si) in phase.card.sections" :key="si">
                    <hr v-if="si > 0" style="border: none; border-top: 1px dashed #E4E7EC" />
                    <div class="flex flex-col gap-3">
                      <!-- Sub-section header -->
                      <div class="flex items-center gap-2">
                        <div class="w-1 h-3.5 rounded-full flex-shrink-0" style="background: #2A9D8F" />
                        <h4 class="text-base font-bold text-navy">{{ sub.title }}</h4>
                      </div>
                      <!-- Body -->
                      <p v-if="sub.body" class="text-sm text-gray-600 leading-loose">{{ sub.body }}</p>
                      <!-- Token layers (horizontal arrows) -->
                      <div v-if="sub.layers" class="flex flex-col sm:flex-row items-stretch gap-0">
                        <template v-for="(layer, li) in sub.layers" :key="li">
                          <div
                            class="flex-1 rounded-xl px-4 py-3"
                            style="border: 1px solid rgba(42,157,143,0.15); background: rgba(42,157,143,0.04)"
                          >
                            <div class="text-xs font-bold text-navy mb-0.5">{{ layer.name }}</div>
                            <div class="text-xs text-gray-500 leading-relaxed">{{ layer.desc }}</div>
                          </div>
                          <div
                            v-if="li < sub.layers.length - 1"
                            class="flex items-center justify-center px-2 py-2 sm:py-0 flex-shrink-0"
                            style="color: #2A9D8F"
                          >
                            <svg class="hidden sm:block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <svg class="sm:hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </template>
                      </div>
                      <!-- Inner card -->
                      <div
                        v-if="sub.innerCard"
                        class="rounded-xl p-4"
                        :style="`background: ${sub.innerCard.bg}; border: 1px solid ${sub.innerCard.border}`"
                      >
                        <p class="text-sm text-gray-600 leading-loose">{{ sub.innerCard.body }}</p>
                      </div>
                    </div>
                    </template>
                  </div>

                  <!-- Accent card below white card -->
                  <div
                    v-if="phase.card.accentCard"
                    class="rounded-xl px-5 py-4"
                    style="background: rgba(42,157,143,0.08); border: 1px solid rgba(42,157,143,0.2)"
                  >
                    <div class="text-base font-bold mb-2" style="color: #2A9D8F">{{ phase.card.accentCard.title }}</div>
                    <p class="text-sm text-gray-600 leading-relaxed">{{ phase.card.accentCard.body }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- ─────────────────────────────────────────────
         5. 成果與反思 — Outcomes Section
    ───────────────────────────────────────────── -->
    <template v-for="(section, idx) in project.sections" :key="'outcome-' + idx">
      <section v-if="section.outcomes" class="py-16" :style="section.bg ? `background: ${section.bg}` : ''">
        <div class="max-w-6xl mx-auto px-6">
          <div v-reveal class="text-center mb-12">
            <h2 class="text-2xl font-bold text-navy mb-2">{{ section.title }}</h2>
            <div class="w-8 h-1 bg-teal rounded-full mx-auto" />
          </div>

          <!-- Top: 最終結果 -->
          <div v-reveal="{ delay: 100 }" class="rounded-2xl p-8 mb-6" style="background: #fff; border: 1px solid rgba(0,0,0,0.06)">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-1 h-5 rounded-full" style="background: #2A9D8F" />
              <h3 class="text-base font-bold text-navy">{{ section.outcomes.left.title }}</h3>
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div v-for="item in section.outcomes.left.items" :key="item.title" class="flex gap-3 items-start">
                <svg class="w-4 h-4 flex-shrink-0 mt-0.5" style="color: #2A9D8F" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div class="text-base font-bold text-navy mb-1">{{ item.title }}</div>
                  <p class="text-sm text-gray-600 leading-loose">{{ item.body }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom: 反思 (teal accent card) -->
          <div v-reveal="{ delay: 150 }" class="rounded-2xl p-8" style="background: #2A9D8F">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-1 h-4 rounded-full" style="background: rgba(255,255,255,0.5)" />
              <span class="text-sm md:text-base font-semibold" style="color: rgba(255,255,255,0.7)">{{ section.outcomes.right.title }}</span>
            </div>
            <div class="text-8xl font-black leading-none mb-2 select-none" style="color: rgba(255,255,255,0.25); font-family: Georgia, serif; line-height: 0.8">"</div>
            <p class="text-sm md:text-base leading-loose mb-8 max-w-3xl" style="color: rgba(255,255,255,0.9)">{{ section.outcomes.right.insight.body }}</p>
            <blockquote
              class="border-l-2 pl-5 italic leading-loose"
              style="font-size: 24px; border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.85)"
            >{{ section.outcomes.right.closing }}</blockquote>
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

<script setup>
// ── Project data ─────────────────────────────────────────────────────────
// Replace placeholder content below with actual project details.
const project = {
  title: '設計系統新工作流 - 建立設計師、工程師與 AI 的共同語言',
  brandName: 'DesignOps System',

  meta: [
    { label: '角色', value: '設計師 × DesignOps 架構師' },
    { label: '類型', value: '個人實踐專案' },
    { label: '技術', value: 'Figma TSF・Figma MCP・Claude Code' },
    { label: '專案目標', value: '建立設計師、工程師與 AI 的共同語言' },
  ],

  sections: [
    // ── 2. 問題背景 ──────────────────────────────────────────────────────
    {
      label: '問題背景',
      hideLabel: true,
      center: true,
      bg: '#f9fafb',
      title: '問題背景',
      body: '針對「設計系統難以落地」的職場痛點的觀察，提出一套視覺數據化的解決方案。',
      highlights: [
        {
          icon: '⚠',
          title: '問題根源',
          accent: false,
          items: [
            '無規則的代價——設計師與工程師各做各的，視覺一致性崩解',
            '即使有設計系統，也不一定被有效使用',
            '設計系統修改時，工程師需要花大量時間手動對照調整',
          ],
        },
        {
          icon: '⚡',
          title: '解決方向',
          accent: true,
          items: [
            'Token 系統作為共同語言——結構化設計規則，讓設計師、工程師都有明確依據',
            '自動化更新機制——token 變動時自動同步，大幅降低工程師的調整成本',
            '視覺數據化——讓 AI 也能正確讀取並執行設計規則，成為三者之間真正的共同語言',
          ],
        },
      ],
    },

    // ── 3. 核心挑戰與目標 ─────────────────────────────────────────────
    {
      label: '核心挑戰與目標',
      hideLabel: true,
      center: true,
      title: '核心挑戰與目標',
      body: '設計系統的價值不在於它有多完整，而在於它能不能真正運作——被正確建立、被有效使用、被持續維護。三個階段，三個層次的解法。',
      goalCards: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
          title: '如何建立',
          body: '以 TSF 三層 token 架構建立可複用且結構化的設計規則，成為設計師、工程師與 AI 能讀懂的共同語言。',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
          title: '如何有效被使用',
          body: '視覺數據化讓 AI 正確讀取設計意圖（Figma MCP + Claude Code），tokens.json 讓工程師無需反覆查詢設計規範，直接依據結構化規則進行視覺佈局開發。',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
          title: '如何持續維護與更新',
          body: 'token 變動時透過 generate-config.js 自動同步，hardcode 掃描確保規則被確實執行。設計規則不只是單向輸出——程式端的調整也可以回推更新設計端，形成雙向維護的完整循環。',
        },
      ],
    },

    // ── 4. 過程 ──────────────────────────────────────────────────────────
    {
      label: '設計過程',
      hideLabel: true,
      bg: '#f9fafb',
      title: '過程',
      phases: [
        // ── 01 視覺數據化 ──────────────────────────────────────────────
        {
          title: '視覺數據化',
          sideBody: '讓 AI 讀懂設計決策',
          card: {
            sections: [
              {
                title: 'Token 架構建立',
                body: '以 Token Studio for Figma（TSF）建立三層分離架構：',
                layers: [
                  { name: 'Core', desc: '所有原始數值（色票、間距、字體等）' },
                  { name: 'Semantic', desc: '定義用途，數值引用 core token' },
                  { name: 'Component', desc: '元件層，引用 semantic' },
                ],
              },
              {
                title: 'Figma 結構設定',
                body: '在 Figma 裡進行元件的命名、frame 的結構、auto layout 的設定。設計師在此階段進行視覺數據化，作為 AI 讀取設計意圖的依據。',
                innerCard: {
                  bg: '#F9FAFB',
                  border: '#E4E7EC',
                  body: '設計師的設定決策，直接影響 AI 的執行品質。',
                },
              },
              {
                title: 'AI 協作——從設計到程式碼',
                body: '透過 Figma MCP，讓 Claude Code 直接讀取 Figma 上的設計資料，加上部分文字說明為輔助，進行視覺 UI 開發。',
              },
            ],
            accentCard: {
              title: '複用邏輯',
              body: '換品牌只改 core，換主題只改 dark/light 對應關係，元件層完全不動。',
            },
          },
        },
        // ── 02 前端設計系統自動化與品質控管 ───────────────────────────
        {
          title: '前端設計系統自動化與品質控管',
          sideBody: '自動化更新，確保規則被確實執行',
          mirror: true,
          card: {
            sections: [
              {
                title: '技術基礎',
                body: 'TSF 輸出 tokens.json → generate-config.js 自動生成 token.css 和 tailwind.config.cjs',
              },
              {
                title: '隨時更新',
                body: '設計端任何 token 變動，重新提交 tokens.json 並啟動腳本，前端視覺即時同步更新——無需工程師手動對照調整。',
              },
              {
                title: 'Hardcode 數值掃描',
                body: '建立自動掃描機制，確認元件正確引用 token 而非直接寫死數值——確保設計系統的規則真正被執行，而不只是存在於文件裡。',
              },
            ],
          },
        },
        // ── 03 兩層交付 ────────────────────────────────────────────────
        {
          title: '兩層交付',
          sideBody: '落實 DesignOps——Machine-readable 與 Human-readable 的雙重設計',
          card: {
            sections: [
              {
                title: 'Machine-readable',
                body: '以 tokens.json 結構化設計規則，讓程式與 AI 開發工具直接調用，實現自動化同步。',
              },
              {
                title: 'Human-readable',
                body: '提供具備脈絡的指引文件，作為設計師、工程師與 AI 在決策協作時的邏輯依據。',
              },
            ],
          },
        },
      ],
    },

    // ── 5. 成果與反思 ─────────────────────────────────────────────────
    {
      label: '成果與反思',
      title: '成果與洞察',
      bg: '#fff',
      outcomes: {
        left: {
          title: '最終成果',
          items: [
            {
              title: '自動化帶來高效的專案開發',
              body: 'token 變動自動同步、hardcode 掃描自動檢查——設計系統的維護從人工追蹤變成自動化流程，大幅提升專案開發效率。',
            },
            {
              title: '系統化帶來的專案統一',
              body: '三層 token 架構讓設計規則結構化，設計師、工程師與 AI 有共同依據——專案視覺一致性不再依賴個人習慣，而是由系統保證。',
            },
            {
              title: '視覺數據化奠定 AI 協作的基礎',
              body: '這套架構讓設計意圖可以被 AI 正確讀取並執行，成為後續產品開發的可擴充基礎。',
            },
          ],
        },
        right: {
          title: '實踐洞察',
          insight: {
            body: '這件作品最重要的收穫不是學會了一個工具，而是理解了一件事：設計師的視覺決策可以被數據化，數據化之後才能被系統化，系統化之後才能被設計師、工程師與 AI 正確有效執行。',
          },
          closing: '設計系統不是一份文件，而是一套讓所有人說同一種語言的規則——包括 AI。',
        },
      },
    },
  ],

  prev: null,
  next: { to: '/works/filo', title: 'Filo' },
}
</script>

<style scoped>
.work-page {
  background: #FFFEFD;
}
</style>
