<template>
  <div class="min-h-screen py-16 px-6" style="background: #F5F4F0">
    <div class="max-w-5xl mx-auto">

      <!-- Page Title -->
      <div class="mb-16">
        <h1 class="text-3xl font-bold text-navy mb-2">Design System</h1>
        <p class="text-sm text-gray-400 tracking-wide">內部設計元件參考頁面 · Portfolio 2025</p>
        <div class="mt-4 w-12 h-1 rounded-full bg-teal" />
      </div>

      <!-- ───────────────────────────────────────
           1. 色彩系統
      ─────────────────────────────────────── -->
      <section class="mb-20">
        <ComponentLabel text="1. 色彩系統 Color System" />

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- Navy -->
          <div class="flex flex-col gap-3">
            <div class="h-24 rounded-xl" style="background:#1B2A4A" />
            <div>
              <p class="text-xs font-semibold text-navy">Navy</p>
              <p class="text-xs text-gray-400">#1B2A4A</p>
              <p class="text-xs text-gray-400 mt-0.5">主色 · 文字 · 標題</p>
            </div>
          </div>
          <!-- Teal -->
          <div class="flex flex-col gap-3">
            <div class="h-24 rounded-xl" style="background:#2A9D8F" />
            <div>
              <p class="text-xs font-semibold text-navy">Teal</p>
              <p class="text-xs text-gray-400">#2A9D8F</p>
              <p class="text-xs text-gray-400 mt-0.5">強調色 · CTA · 裝飾</p>
            </div>
          </div>
          <!-- Off-white -->
          <div class="flex flex-col gap-3">
            <div class="h-24 rounded-xl border border-gray-200" style="background:#FFFEFD" />
            <div>
              <p class="text-xs font-semibold text-navy">Off-white</p>
              <p class="text-xs text-gray-400">#FFFEFD</p>
              <p class="text-xs text-gray-400 mt-0.5">Header 背景 · 卡片底色</p>
            </div>
          </div>
          <!-- Background -->
          <div class="flex flex-col gap-3">
            <div class="h-24 rounded-xl border border-gray-200" style="background:#F5F4F0" />
            <div>
              <p class="text-xs font-semibold text-navy">Background</p>
              <p class="text-xs text-gray-400">#F5F4F0</p>
              <p class="text-xs text-gray-400 mt-0.5">頁面背景</p>
            </div>
          </div>
          <!-- Gray-50 -->
          <div class="flex flex-col gap-3">
            <div class="h-24 rounded-xl border border-gray-200" style="background:#F9FAFB" />
            <div>
              <p class="text-xs font-semibold text-navy">Gray-50</p>
              <p class="text-xs text-gray-400">#F9FAFB</p>
              <p class="text-xs text-gray-400 mt-0.5">Section 交替背景</p>
            </div>
          </div>
          <!-- Teal 15% -->
          <div class="flex flex-col gap-3">
            <div class="h-24 rounded-xl border border-gray-200" style="background: rgba(42,157,143,0.15)" />
            <div>
              <p class="text-xs font-semibold text-navy">Teal 15%</p>
              <p class="text-xs text-gray-400">rgba(42,157,143,0.15)</p>
              <p class="text-xs text-gray-400 mt-0.5">Badge 背景 · Tag 底色</p>
            </div>
          </div>
          <!-- Teal 10% -->
          <div class="flex flex-col gap-3">
            <div class="h-24 rounded-xl border border-gray-200" style="background: rgba(42,157,143,0.1)" />
            <div>
              <p class="text-xs font-semibold text-navy">Teal 10%</p>
              <p class="text-xs text-gray-400">rgba(42,157,143,0.1)</p>
              <p class="text-xs text-gray-400 mt-0.5">SkillCard icon 背景</p>
            </div>
          </div>
          <!-- White -->
          <div class="flex flex-col gap-3">
            <div class="h-24 rounded-xl border border-gray-200 bg-white" />
            <div>
              <p class="text-xs font-semibold text-navy">White</p>
              <p class="text-xs text-gray-400">#FFFFFF</p>
              <p class="text-xs text-gray-400 mt-0.5">卡片 · Section 背景</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────────────
           2. 按鈕
      ─────────────────────────────────────── -->
      <section class="mb-20">
        <ComponentLabel text="2. 按鈕 Buttons" />

        <div class="bg-white rounded-2xl p-8 flex flex-wrap items-center gap-6">
          <!-- Solid -->
          <div class="flex flex-col items-start gap-2">
            <button class="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all" style="background:#2A9D8F">
              實心按鈕 Solid
            </button>
            <p class="text-xs text-gray-400">bg-teal · text-white</p>
          </div>

          <!-- Outline -->
          <div class="flex flex-col items-start gap-2">
            <button class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all border-2" style="color:#2A9D8F; border-color:#2A9D8F">
              空心按鈕 Outline
            </button>
            <p class="text-xs text-gray-400">border-teal · text-teal</p>
          </div>

          <!-- Solid Navy -->
          <div class="flex flex-col items-start gap-2">
            <button class="px-6 py-2.5 rounded-full text-sm font-semibold text-white" style="background:#1B2A4A">
              Navy Solid
            </button>
            <p class="text-xs text-gray-400">bg-navy · text-white</p>
          </div>

          <!-- Outline Navy -->
          <div class="flex flex-col items-start gap-2">
            <button class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all border-2" style="color:#1B2A4A; border-color:#1B2A4A">
              Navy Outline
            </button>
            <p class="text-xs text-gray-400">border-navy · text-navy</p>
          </div>

          <!-- Disabled -->
          <div class="flex flex-col items-start gap-2">
            <button class="px-6 py-2.5 rounded-full text-sm font-semibold text-white cursor-not-allowed opacity-40" style="background:#2A9D8F" disabled>
              Disabled
            </button>
            <p class="text-xs text-gray-400">opacity-40 · cursor-not-allowed</p>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────────────
           3. 標籤 Tags
      ─────────────────────────────────────── -->
      <section class="mb-20">
        <ComponentLabel text="3. 標籤 Tags" />

        <div class="bg-white rounded-2xl p-8 flex flex-wrap items-center gap-6">

          <!-- Badge (MY STORY style) -->
          <div class="flex flex-col items-start gap-2">
            <span class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full" style="background: rgba(42,157,143,0.15); color:#2A9D8F">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              My Story
            </span>
            <p class="text-xs text-gray-400">Badge · teal 15% bg + icon</p>
          </div>

          <!-- Capsule tag (淡綠) -->
          <div class="flex flex-col items-start gap-2">
            <span class="text-xs px-3 py-1 rounded-full" style="background: rgba(42,157,143,0.12); color:#2A9D8F">
              Capsule Tag
            </span>
            <p class="text-xs text-gray-400">rounded-full · teal 12%</p>
          </div>

          <!-- Border tag (灰色) -->
          <div class="flex flex-col items-start gap-2">
            <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500">
              Border Tag
            </span>
            <p class="text-xs text-gray-400">rounded-full · border-gray-200</p>
          </div>

          <!-- Dark tag -->
          <div class="flex flex-col items-start gap-2">
            <span class="text-xs px-3 py-1 rounded-full text-white" style="background:#1B2A4A">
              Dark Tag
            </span>
            <p class="text-xs text-gray-400">bg-navy · text-white</p>
          </div>

          <!-- Hover state tag -->
          <div class="flex flex-col items-start gap-2">
            <span class="text-xs px-3 py-1 rounded-full border text-teal" style="border-color:#2A9D8F">
              Hover Tag
            </span>
            <p class="text-xs text-gray-400">hover 狀態 · border-teal · text-teal</p>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────────────
           4. 卡片 Cards
      ─────────────────────────────────────── -->
      <section class="mb-20">
        <ComponentLabel text="4. 卡片 Cards" />

        <!-- 4a. ProjectCard -->
        <div class="mb-4 flex items-center gap-2">
          <div class="w-1 h-4 rounded-full bg-teal" />
          <span class="text-xs font-semibold tracking-widest uppercase text-gray-400">ProjectCard</span>
        </div>
        <div class="bg-white rounded-2xl p-8 mb-8">
          <ProjectCard
            to="#"
            type="Case Study"
            title="Filo — AI 財務日誌產品設計"
            description="從 0 到 1 的 AI 財務日誌產品，透過對話式介面降低財務記錄的心理門檻，讓用戶自然地建立財務習慣。"
            :tags="['Product Design', 'AI UX', 'Mobile App']"
            gradient="linear-gradient(135deg, #2A9D8F 0%, #1B2A4A 100%)"
          />
        </div>

        <!-- 4b. SkillCard -->
        <div class="mb-4 flex items-center gap-2">
          <div class="w-1 h-4 rounded-full bg-teal" />
          <span class="text-xs font-semibold tracking-widest uppercase text-gray-400">SkillCard</span>
        </div>
        <div class="bg-white rounded-2xl p-8 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SkillCard title="關於設計思維" description="視覺是思維的具象——先定義問題，再定義解法，介面是呈現產品價值。">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </template>
            </SkillCard>
            <SkillCard title="關於系統與流程" description="好的設計系統讓實踐有依據，迭代有基礎。AI 執行，人做決策，讓協作更有效率。">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </template>
            </SkillCard>
            <SkillCard title="關於協作與溝通" description="設計師是翻譯者——在需求、商業目標與技術限制之間找到清晰的共識路徑。">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </template>
            </SkillCard>
          </div>
        </div>

        <!-- 4c. 時間軸卡片 -->
        <div class="mb-4 flex items-center gap-2">
          <div class="w-1 h-4 rounded-full bg-teal" />
          <span class="text-xs font-semibold tracking-widest uppercase text-gray-400">Timeline Card（工作經歷）</span>
        </div>
        <div class="bg-white rounded-2xl p-8">
          <div class="flex flex-col gap-4">
            <!-- single card example -->
            <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col gap-2">
              <span class="text-xs text-gray-400 font-medium">2022 — 現在</span>
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-sm font-bold text-navy">Senior Product Designer</h3>
                  <p class="text-xs text-gray-500 mt-0.5">Company Name · 全職</p>
                </div>
                <span class="text-xs px-2.5 py-1 rounded-full shrink-0" style="background: rgba(42,157,143,0.12); color:#2A9D8F">Product</span>
              </div>
              <p class="text-xs text-gray-500 leading-relaxed mt-1">負責產品從 0 到 1 的設計規劃，建立設計系統並協調跨職能團隊溝通。</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col gap-2">
              <span class="text-xs text-gray-400 font-medium">2019 — 2022</span>
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-sm font-bold text-navy">UX Designer</h3>
                  <p class="text-xs text-gray-500 mt-0.5">Another Company · 全職</p>
                </div>
                <span class="text-xs px-2.5 py-1 rounded-full shrink-0" style="background: rgba(42,157,143,0.12); color:#2A9D8F">UX</span>
              </div>
              <p class="text-xs text-gray-500 leading-relaxed mt-1">主導使用者研究、流程優化與介面設計，提升整體轉換率 30%。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────────────
           5. 標題層級 Typography
      ─────────────────────────────────────── -->
      <section class="mb-20">
        <ComponentLabel text="5. 標題層級 Typography" />

        <div class="bg-white rounded-2xl p-8 flex flex-col gap-6">
          <div class="flex items-baseline gap-6 border-b border-gray-100 pb-4">
            <span class="text-xs text-gray-300 w-10 shrink-0">H1</span>
            <h1 class="text-5xl font-bold text-navy">每個轉折都是一次重新定義</h1>
          </div>
          <div class="flex items-baseline gap-6 border-b border-gray-100 pb-4">
            <span class="text-xs text-gray-300 w-10 shrink-0">H2</span>
            <h2 class="text-3xl font-bold text-navy">設計主張與工作方式</h2>
          </div>
          <div class="flex items-baseline gap-6 border-b border-gray-100 pb-4">
            <span class="text-xs text-gray-300 w-10 shrink-0">H3</span>
            <h3 class="text-xl font-bold text-navy">Filo — AI 財務日誌產品設計</h3>
          </div>
          <div class="flex items-baseline gap-6 border-b border-gray-100 pb-4">
            <span class="text-xs text-gray-300 w-10 shrink-0">Body</span>
            <p class="text-sm text-gray-600 leading-relaxed">從法國當代藝術碩士轉入產品設計，我更在意的是功能規劃、流程架構與策略判斷——介面是結果，不是起點。</p>
          </div>
          <div class="flex items-baseline gap-6 border-b border-gray-100 pb-4">
            <span class="text-xs text-gray-300 w-10 shrink-0">Small</span>
            <p class="text-xs text-gray-400 leading-relaxed">輔助說明文字 · tracking-wide · text-xs · text-gray-400</p>
          </div>
          <div class="flex items-baseline gap-6">
            <span class="text-xs text-gray-300 w-10 shrink-0">Label</span>
            <p class="text-xs font-semibold tracking-widest uppercase" style="color:#2A9D8F">Section Label · Uppercase Tracking</p>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────────────
           6. 裝飾元件 Decorative Elements
      ─────────────────────────────────────── -->
      <section class="mb-20">
        <ComponentLabel text="6. 裝飾元件 Decorative Elements" />

        <div class="bg-white rounded-2xl p-8 flex flex-wrap gap-12 items-start">

          <!-- SectionLabel (teal bar + text) -->
          <div class="flex flex-col gap-3">
            <p class="text-xs text-gray-400 mb-1">Section Label</p>
            <div class="flex items-center gap-2">
              <div class="w-1 h-4 rounded-full bg-teal" />
              <span class="text-xs font-semibold tracking-widest uppercase" style="color:#2A9D8F">設計開發歷程</span>
            </div>
            <p class="text-xs text-gray-300">w-1 h-4 rounded-full bg-teal + uppercase text</p>
          </div>

          <!-- Teal 短線裝飾 -->
          <div class="flex flex-col gap-3">
            <p class="text-xs text-gray-400 mb-1">Teal 短線裝飾</p>
            <div>
              <h2 class="text-2xl font-bold text-navy mb-2">設計主張</h2>
              <div class="w-8 h-1 bg-teal rounded-full" />
            </div>
            <p class="text-xs text-gray-300">w-8 h-1 rounded-full bg-teal · 標題下方</p>
          </div>

          <!-- MY STORY Badge -->
          <div class="flex flex-col gap-3">
            <p class="text-xs text-gray-400 mb-1">MY STORY Badge</p>
            <span class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full" style="background: rgba(42,157,143,0.15); color:#2A9D8F">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              My Story
            </span>
            <p class="text-xs text-gray-300">rounded-full · teal 15% bg · icon + uppercase</p>
          </div>

          <!-- L 形裝飾角框 -->
          <div class="flex flex-col gap-3">
            <p class="text-xs text-gray-400 mb-1">L 形裝飾角框</p>
            <div class="relative w-40 h-32 rounded-xl" style="background: rgba(42,157,143,0.08)">
              <!-- top-left -->
              <span class="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 rounded-tl-md" style="border-color:#2A9D8F" />
              <!-- top-right -->
              <span class="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 rounded-tr-md" style="border-color:#2A9D8F" />
              <!-- bottom-left -->
              <span class="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 rounded-bl-md" style="border-color:#2A9D8F" />
              <!-- bottom-right -->
              <span class="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 rounded-br-md" style="border-color:#2A9D8F" />
              <div class="absolute inset-0 flex items-center justify-center">
                <p class="text-xs text-teal font-medium">內容區域</p>
              </div>
            </div>
            <p class="text-xs text-gray-300">absolute 四角 · border-teal · w-5 h-5</p>
          </div>

          <!-- Teal 實色背景卡片 accent -->
          <div class="flex flex-col gap-3">
            <p class="text-xs text-gray-400 mb-1">Teal Accent Card</p>
            <div class="rounded-xl p-4 w-40" style="background:#2A9D8F">
              <p class="text-xs font-semibold text-white mb-1">Key Discovery</p>
              <p class="text-xs text-white opacity-80 leading-relaxed">用戶需要的是一個能理解上下文的財務夥伴。</p>
            </div>
            <p class="text-xs text-gray-300">bg-teal · text-white · rounded-xl</p>
          </div>

        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const ComponentLabel = {
  props: ['text'],
  template: `
    <div class="mb-6">
      <h2 class="text-base font-bold text-navy tracking-wide">{{ text }}</h2>
      <div class="mt-2 w-full h-px bg-gray-200" />
    </div>
  `
}
</script>
