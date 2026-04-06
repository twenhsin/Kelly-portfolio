<template>
  <div class="work-page">

    <!-- ─────────────────────────────────────────────
         Hero — two column, white bg
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
          <h1 class="text-3xl md:text-5xl font-bold text-navy mb-3" style="line-height: 1.25">
            {{ project.title }}
          </h1>

          <!-- Brand name -->
          <p class="text-4xl md:text-6xl font-black mb-8" style="color: #2A9D8F; line-height: 1.1">
            {{ project.brandName }}
          </p>

          <!-- Meta grid 2×2 -->
          <div class="grid grid-cols-2 gap-x-10 gap-y-5 mb-10">
            <div v-for="meta in project.meta" :key="meta.label">
              <span class="block text-sm font-semibold tracking-widest uppercase mb-1" style="color: #9CA3AF">{{ meta.label }}</span>
              <span class="text-base font-medium text-navy">{{ meta.value }}</span>
            </div>
          </div>

        </div>

        <!-- Right: hero image -->
        <div v-reveal="{ delay: 150 }" class="flex-1 min-w-0 w-full">
          <div class="w-full rounded-2xl overflow-hidden">
            <img src="/images/Hero3.png" alt="CoHealing Hero" class="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         專案背景
    ───────────────────────────────────────────── -->
    <section id="case-study" class="py-20" style="background: #f9fafb">
      <div class="max-w-2xl mx-auto px-6 text-center">
        <h2 v-reveal class="text-3xl font-bold text-navy mb-2" style="line-height: 1.6; letter-spacing: 0.05em">
          專案背景
        </h2>
        <div class="w-8 h-1 bg-teal rounded-full mx-auto mb-8" />
        <p v-reveal="{ delay: 80 }" class="text-base text-gray-600 leading-loose mb-10">
          {{ project.background.body }}
        </p>
        <!-- Highlight callout -->
        <div v-reveal="{ delay: 150 }" class="text-center">
          <p class="text-sm font-bold text-navy mb-1">{{ project.background.highlightTitle }}</p>
          <p class="text-sm text-gray-500 leading-loose">{{ project.background.highlightSub }}</p>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         核心挑戰
    ───────────────────────────────────────────── -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div v-reveal class="text-center mb-12">
          <h2 class="text-3xl font-bold text-navy mb-2">{{ project.challenges.title }}</h2>
          <div class="w-8 h-1 bg-teal rounded-full mx-auto mb-4" />
          <p class="text-sm text-gray-500 leading-loose">{{ project.challenges.subtitle }}</p>
        </div>

        <div v-reveal="{ delay: 100 }" class="grid sm:grid-cols-3 gap-5">
          <div
            v-for="card in project.challenges.items"
            :key="card.title"
            class="rounded-2xl p-8 sm:p-10 bg-white flex flex-col items-center text-center"
            style="border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 2px 16px rgba(0,0,0,0.04)"
          >
            <div
              class="w-14 h-14 rounded-full flex items-center justify-center mb-6"
              style="background: rgba(42,157,143,0.12)"
            >
              <span class="text-xl" style="color: #2A9D8F" v-html="card.icon" />
            </div>
            <h4 class="text-base font-bold text-navy mb-3">{{ card.title }}</h4>
            <p class="text-sm text-gray-500 leading-loose">{{ card.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         關鍵決策
    ───────────────────────────────────────────── -->
    <section class="py-20" style="background: #f9fafb">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Heading -->
        <div v-reveal class="mb-16 text-center">
          <h2 class="text-3xl font-bold text-navy mb-2">{{ project.decisions.title }}</h2>
          <div class="w-8 h-1 bg-teal rounded-full mx-auto" />
        </div>

        <!-- Groups -->
        <div class="flex flex-col gap-14">
          <div v-for="(group, gi) in project.decisions.groups" :key="gi">
            <!-- Group badge -->
            <div v-reveal class="mb-6 flex justify-center">
              <span
                class="inline-flex items-center gap-1.5"
                style="background: rgba(42,157,143,0.12); color: #2A9D8F; border-radius: 999px; padding: 4px 12px; font-size: 13px; font-weight: 600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                {{ group.badge }}
              </span>
            </div>
            <!-- Cards -->
            <div class="grid md:grid-cols-2 gap-6">
              <div
                v-for="(d, i) in group.items"
                :key="d.title"
                v-reveal="{ delay: i * 80 }"
                class="rounded-2xl p-7"
                :style="`background: ${gi === 1 ? '#2a9d8f14' : '#fff'}; border: 1px solid rgba(0,0,0,0.07); box-shadow: 0 2px 16px rgba(0,0,0,0.04)`"
              >
                <div class="text-6xl font-black mb-2 leading-none" style="color: rgba(42,157,143,0.18)">
                  {{ String(gi * 2 + i + 1).padStart(2, '0') }}
                </div>
                <h3 class="text-base font-bold text-navy mb-2">{{ d.title }}</h3>
                <ul class="flex flex-col gap-3 mt-4">
                  <li
                    v-for="step in d.steps"
                    :key="typeof step === 'string' ? step : step.label"
                    class="text-sm leading-loose"
                  >
                    <!-- labeled format: { label, body } -->
                    <template v-if="typeof step === 'object'">
                      <span class="flex gap-1">
                        <span class="font-semibold flex-shrink-0" style="color: #2A9D8F">{{ step.label }}：</span>
                        <span class="text-gray-600">{{ step.body }}</span>
                      </span>
                    </template>
                    <!-- plain bullet format -->
                    <span v-else class="flex gap-2 items-start text-gray-600">
                      <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style="background: #2A9D8F" />
                      {{ step }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         產品 — Carousel
    ───────────────────────────────────────────── -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div v-reveal class="mb-10 text-center">
          <h2 class="text-3xl font-bold text-navy mb-2">{{ project.product.title }}</h2>
          <div class="w-8 h-1 bg-teal rounded-full mx-auto mb-3" />
          <p class="text-base text-gray-600 leading-loose max-w-2xl mx-auto">{{ project.product.body }}</p>
        </div>

        <!-- Carousel -->
        <div v-reveal="{ delay: 100 }">
          <CarouselBlock :slides="project.product.slides" :state="productCarousel" bg="#0F1117" />
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         設計 — Carousel
    ───────────────────────────────────────────── -->
    <section class="py-20" style="background: #f9fafb">
      <div class="max-w-6xl mx-auto px-6">
        <div v-reveal class="mb-10 text-center">
          <h2 class="text-3xl font-bold text-navy mb-2">{{ project.design.title }}</h2>
          <div class="w-8 h-1 bg-teal rounded-full mx-auto mb-3" />
          <p class="text-base text-gray-600 leading-loose max-w-2xl mx-auto">{{ project.design.body }}</p>
        </div>

        <div v-reveal="{ delay: 100 }">
          <CarouselBlock :slides="project.design.slides" :state="designCarousel" bg="#f0ede8" />
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         品牌 — Carousel
    ───────────────────────────────────────────── -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div v-reveal class="mb-10 text-center">
          <h2 class="text-3xl font-bold text-navy mb-2">{{ project.brand.title }}</h2>
          <div class="w-8 h-1 bg-teal rounded-full mx-auto mb-3" />
          <p class="text-base text-gray-600 leading-loose max-w-2xl mx-auto">{{ project.brand.body }}</p>
        </div>

        <div v-reveal="{ delay: 100 }">
          <CarouselBlock :slides="project.brand.slides" :state="brandCarousel" bg="#2A9D8F" />
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         反思
    ───────────────────────────────────────────── -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div
          v-reveal
          class="rounded-2xl p-10 md:p-14"
          style="background: #2A9D8F"
        >
          <!-- Label -->
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-4 rounded-full" style="background: rgba(255,255,255,0.5)" />
            <span class="text-sm md:text-base font-semibold" style="color: rgba(255,255,255,0.7)">反思</span>
          </div>

          <!-- Large quote mark -->
          <div class="text-8xl font-black leading-none mb-2 select-none" style="color: rgba(255,255,255,0.25); font-family: Georgia, serif; line-height: 0.8">
            "
          </div>

          <!-- Body -->
          <p class="text-sm md:text-base leading-loose text-white mb-8 max-w-3xl" style="color: rgba(255,255,255,0.9)">
            {{ project.reflection.body }}
          </p>

          <!-- Italic quote -->
          <blockquote
            class="border-l-2 pl-5 italic leading-loose"
            style="font-size: 24px; border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.85)"
          >
            {{ project.reflection.quote }}
          </blockquote>
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
            :to="(project.next as any).to"
            class="flex items-center gap-2 text-sm text-gray-400 hover:text-navy transition-colors font-medium"
          >
            {{ (project.next as any).title }}
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
import { ref, defineComponent, h } from 'vue'

// ── Carousel composable ───────────────────────────────────────────────────
function useCarousel(count: number) {
  const active = ref(0)
  let _startX = 0

  function go(i: number) {
    active.value = ((i % count) + count) % count
  }
  function onPointerDown(e: PointerEvent) {
    _startX = e.clientX
  }
  function onPointerUp(e: PointerEvent) {
    const dx = _startX - e.clientX
    if (Math.abs(dx) > 40) dx > 0 ? go(active.value + 1) : go(active.value - 1)
  }

  return { active, go, onPointerDown, onPointerUp }
}

// ── Carousel block component ──────────────────────────────────────────────
const CarouselBlock = defineComponent({
  props: {
    slides: { type: Array as () => { label: string; caption: string; image?: string; imageMobile?: string }[], required: true },
    state: { type: Object as () => ReturnType<typeof useCarousel>, required: true },
    bg: { type: String, default: '#e8edf3' },
  },
  setup(props) {
    return () => {
      const { active, go, onPointerDown, onPointerUp } = props.state
      const slides = props.slides

      return h('div', { class: 'carousel-root select-none' }, [
        // ── Slide viewport ─────────────────────────────────────────────
        h('div', {
          class: 'carousel-viewport',
          onPointerdown: onPointerDown,
          onPointerup: onPointerUp,
          style: 'position: relative; overflow: hidden; border-radius: 16px; cursor: grab; user-select: none;',
        }, [
          // Track
          h('div', {
            class: 'carousel-track',
            style: `display: flex; transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); transform: translateX(-${active.value * 100}%);`,
          }, slides.map((slide, i) =>
            h('div', {
              key: i,
              style: `flex-shrink: 0; width: 100%; min-height: 400px; background: ${props.bg}; display: flex; align-items: center; justify-content: center; overflow: hidden;`,
            }, slide.image
              ? slide.image.endsWith('.pdf')
                ? [h('embed', { src: slide.image, type: 'application/pdf', style: 'width: 100%; height: 100%; min-height: 400px; pointer-events: none;' })]
                : slide.imageMobile
                  ? [h('picture', { style: 'width: 100%; height: 100%; display: block;' }, [
                      h('source', { media: '(max-width: 1023px)', srcset: slide.imageMobile }),
                      h('img', { src: slide.image, alt: slide.label, style: 'width: 100%; height: 100%; object-fit: cover; pointer-events: none;' }),
                    ])]
                  : [h('img', { src: slide.image, alt: slide.label, style: 'width: 100%; height: 100%; object-fit: cover; pointer-events: none;' })]
              : [h('span', { style: 'color: rgba(255,255,255,0.4); font-size: 14px; font-weight: 500; pointer-events: none;' }, `Slide ${i + 1} — ${slide.label}`)]
            )
          )),

          // Prev arrow
          h('button', {
            onClick: () => go(active.value - 1),
            class: 'carousel-arrow carousel-arrow-left',
            style: 'position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; border-radius: 50%; background: transparent; border: 1.5px solid #2A9D8F; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #2A9D8F; transition: background 0.2s;',
            onMouseover: (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.background = 'rgba(42,157,143,0.1)' },
            onMouseout: (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.background = 'transparent' },
          }, [
            h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2.5' }, [
              h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19l-7-7 7-7' }),
            ]),
          ]),

          // Next arrow
          h('button', {
            onClick: () => go(active.value + 1),
            style: 'position: absolute; right: 14px; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; border-radius: 50%; background: transparent; border: 1.5px solid #2A9D8F; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #2A9D8F; transition: background 0.2s;',
            onMouseover: (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.background = 'rgba(42,157,143,0.1)' },
            onMouseout: (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.background = 'transparent' },
          }, [
            h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2.5' }, [
              h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 5l7 7-7 7' }),
            ]),
          ]),

        ]),

        // ── Caption ─────────────────────────────────────────────────────
        h('p', {
          style: 'margin-top: 14px; font-size: 13px; color: #6B7280; line-height: 1.7; min-height: 2.4em; transition: opacity 0.2s; text-align: center;',
        }, slides[active.value].caption),

        // ── Tab pills ───────────────────────────────────────────────────
        h('div', {
          class: 'carousel-tabs',
          style: 'display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; justify-content: center;',
        }, slides.map((slide, i) =>
          h('button', {
            key: i,
            onClick: () => go(i),
            style: `padding: 5px 14px; border-radius: 999px; font-size: 12px; font-weight: 600; border: 1px solid ${active.value === i ? '#2A9D8F' : 'rgba(0,0,0,0.1)'}; background: ${active.value === i ? 'rgba(42,157,143,0.12)' : '#fff'}; color: ${active.value === i ? '#2A9D8F' : '#6B7280'}; cursor: pointer; transition: all 0.2s; white-space: nowrap;`,
          }, slide.label)
        )),
      ])
    }
  },
})

// ── Carousel instances ────────────────────────────────────────────────────
const productCarousel = useCarousel(3)
const designCarousel  = useCarousel(5)
const brandCarousel   = useCarousel(3)

// ── Project data ──────────────────────────────────────────────────────────
const project = {
  title:     '身心靈療癒師媒合平台',
  brandName: 'CoHealing',

  meta: [
    { label: '角色',   value: 'Product Designer + Strategist' },
    { label: '時間',   value: '2023.10 — 2025.01' },
    { label: '類型',   value: '0-to-1 產品設計' },
    { label: '協作',   value: '3 人創始團隊' },
  ],

  background: {
    body: '隨著身心靈需求爆發，市場雖快速成長，療癒師卻普遍陷入「擅長療癒、不擅長經營」的困境。現有平台多為分散的個人網站或封閉式內容平台，缺乏真正以療癒師為中心的媒合機制。',
    highlightTitle: 'CoHealing 的核心使命，是成為療癒師背後的助手',
    highlightSub: '讓他們被找到，讓學員找到對的人。',
  },

  challenges: {
    title: '三大核心挑戰',
    subtitle: '這個專案面臨三個層次的挑戰，每一個都直接影響了後續的產品決策',
    items: [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`,
        title: '市場驗證｜雙邊市場的啟動難題',
        body: '在沒有任何種子用戶的情況下，如何平衡「療癒師數量」與「尋求者流量」，避免空城效應導致的用戶流失。',
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>`,
        title: '資源限制：三人兼職',
        body: '團隊成員均為兼職狀態，開發能能有限。如何將每一分資源都精準投放在能產生最大價值的關鍵路徑上。',
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>`,
        title: '信任問題：身心靈領域魚龍混雜',
        body: '身心靈服務難以量化且主觀。如何透過 UI 傳遞「專業感」與「安全性」，建立起平台品牌的公信力。',
      },
    ],
  },

  decisions: {
    title: '四個關鍵設計決策',
    groups: [
      {
        badge: '市場定錨與核心價值重構',
        items: [
          {
            title: '商業模式轉向',
            steps: [
              { label: '原始假設', body: '簽約師資、由平台統籌排課的依附式內容平台' },
              { label: '發現問題', body: '需持續負擔師資成本，抽成壓力高，對零資金團隊不可行' },
              { label: '轉向決策', body: '改為 Marketplace 模式——提供工具與曝光，療癒師自主營運，學員自行選課。平台價值在聚合而非持有內容' },
            ],
          },
          {
            title: '訪談驅動功能優先級',
            steps: [
              { label: '研究方法', body: '深度訪談十多位療癒師，設計 15 題訪談架構聚焦經營狀況與痛點' },
              { label: '核心發現', body: '所有受訪者指向同一痛點——曝光。他們只想專注授課，行銷、預約、收款每一件都是負擔' },
              { label: '決策影響', body: '重新定義平台核心價值——不只是課程平台，更是療癒師的數位助手。功能優先級從這裡重新排序' },
            ],
          },
        ],
      },
      {
        badge: '反思與風險判斷',
        items: [
          {
            title: 'MVP 範疇的判斷失誤',
            steps: [
              { label: '錯誤決策', body: '第一階段同時開發曝光功能與完整金流系統，導致 MVP 上線時程大幅延後' },
              { label: '付出代價', body: '過早處理高風險的金流（涉及支付、退款與洗錢防制），忽略了應先驗證「第一層曝光需求」的原則。' },
              { label: '正確順序', body: '應先驗證媒合與曝光需求，確認市場反應後再進入金流環節。訪談數據已指向這個順序，執行時沒有忠實反映。' },
            ],
          },
          {
            title: '停損與風險評估',
            steps: [
              { label: '風險評估', body: '台灣詐騙洗錢案例激增，平台作為金流中介，在人力與資源有限，無法在策略與技術上有效對抗演化迅速的詐騙手法。' },
              { label: '共識決定', body: '與工程師評估後達成共識——停止執行開發。' },
              { label: '核心思維', body: '這不是放棄，是負責任的判斷。在無力保護用戶的前提下，果斷停止是當前最合適的選擇' },
            ],
          },
        ],
      },
    ],
  },

  product: {
    title: '從研究到產品',
    body: '每一個產品決策都有依據——從品牌定位、用戶訪談到市場版圖，策略先於設計。',
    slides: [
      { label: '品牌策略框架', image: '/images/work3/product/brand-strategy.png', caption: '以品牌策略框架定錨公司定位——從 Mission、Vision、Core Value 到 STP 市場區隔，確保產品方向與品牌主張一致。' },
      { label: '用戶訪談架構', image: '/images/work3/product/user-interviews.png', caption: '從訪談到策略梳理，確保產品開發的每一步都建立在真實的用戶需求及清晰的商業邏輯之上。' },
      { label: '產品市場版圖', image: '/images/work3/product/market-map.png', imageMobile: '/images/work3/product/market-map-m.png', caption: '透過策略框架整理產品市場版圖，從 C 端到 B 端的完整思考基礎' },
    ],
  },

  design: {
    title: '以使用者為核心的設計決策',
    body: '以用戶需求為核心的雙端設計——讓療癒師專注管理，讓學員輕鬆找到對的課程。',
    slides: [
      { label: 'To C 官網',   image: '/images/work3/design/toc.png',             caption: '面向學員的品牌入口，傳遞平台價值主張，引導學員探索療癒師與課程。' },
      { label: 'To B 官網',   image: '/images/work3/design/tob.png',             caption: '面向療癒師的招募頁面，清楚說明加入平台的價值與流程。' },
      { label: '設計架構',    image: '/images/work3/design/designStructure.svg', imageMobile: '/images/work3/design/designStructure-m.png', caption: '雙端介面的完整 Figma 架構，涵蓋學員與療癒師的所有功能頁面。' },
      { label: '學員介面',    image: '/images/work3/design/student.png', imageMobile: '/images/work3/design/student-m.png', caption: '學員瀏覽療癒師、篩選課程、完成預約的核心操作流程。' },
      { label: '療癒師介面',  image: '/images/work3/design/healers.png', imageMobile: '/images/work3/design/healers-m.png', caption: '療癒師管理課程排程、掌握訂課狀態的後台工具。' },
    ],
  },

  brand: {
    title: '品牌識別設計',
    body: '從品牌識別到社群素材，視覺語言貫穿線上線下，傳遞平台的核心價值與溫度。',
    slides: [
      { label: 'Logo 設計',       image: '/images/work3/brand/logo.png', caption: '以水滴與世界為核心意象，象徵療癒與流動，簡潔傳遞平台品牌精神。' },
      { label: '名片 & 印刷品',   image: '/images/work3/brand/card.png', imageMobile: '/images/work3/brand/card-m.png', caption: '品牌識別延伸至實體名片，建立線上線下一致的視覺語言。' },
      { label: 'IG 模板',         image: '/images/work3/brand/ig.png',   imageMobile: '/images/work3/brand/ig-m.png',   caption: '社群素材延伸品牌核心價值，在數位平台建立療癒氛圍。' },
    ],
  },

  reflection: {
    body: '這是一個做了一年半、最終沒有上線的產品。在這段時間裡，我們驗證了很多假設、推翻了更多假設。它讓我深刻理解到：設計師在 0-to-1 專案中的價值，不只是把畫面做好看，而是幫助團隊看清楚「我們在解決什麼問題」以及「這個問題值不值得被解決」。',
    quote: '0 to 1 不是把功能做完，不是解剖自己；現在這一步，到底在驗證什麼。"',
  },

  prev: { to: '/works/filo', title: 'Filo' },
  next: null,
}
</script>

<style scoped>
.work-page {
  background: #FFFEFD;
}
</style>
