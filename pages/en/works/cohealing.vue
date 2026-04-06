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
         Context
    ───────────────────────────────────────────── -->
    <section id="case-study" class="py-20" style="background: #f9fafb">
      <div class="max-w-2xl mx-auto px-6 text-center">
        <h2 v-reveal class="text-3xl font-bold text-navy mb-2" style="line-height: 1.6; letter-spacing: 0.05em">
          Context
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
         Core Challenges
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
         Key Design Decisions
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
                        <span class="font-semibold flex-shrink-0" style="color: #2A9D8F">{{ step.label }}:</span>
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
         Product — Carousel
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
         Design — Carousel
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
         Brand — Carousel
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
         Reflection
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
            <span class="text-sm md:text-base font-semibold" style="color: rgba(255,255,255,0.7)">Reflection</span>
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
        <NuxtLink to="/en/works" class="flex items-center gap-2 text-sm text-gray-400 hover:text-navy transition-colors font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          All Works
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
  title:     'A Marketplace for Holistic Practitioners',
  brandName: 'Cohealing',

  meta: [
    { label: 'Role',          value: 'Product Designer + Strategist' },
    { label: 'Timeline',      value: 'Oct 2023 — Jan 2025' },
    { label: 'Type',          value: '0-to-1 Product Design' },
    { label: 'Collaboration', value: '3-Person Founding Team' },
  ],

  background: {
    body: 'Despite the rapid growth in the wellness market, practitioners often struggle with business operations while excelling at healing. Existing solutions are often fragmented personal sites or closed content platforms, lacking a practitioner-centric matching mechanism.',
    highlightTitle: "Cohealing's mission is to be the silent partner for practitioners",
    highlightSub: 'Helping them be discovered and helping students find the right match.',
  },

  challenges: {
    title: 'Three Core Challenges',
    subtitle: 'The project faced challenges at three levels, each directly influencing subsequent product decisions.',
    items: [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`,
        title: '1. Market Validation: The Chicken-and-Egg Problem',
        body: 'How to balance practitioner supply with seeker demand without seed users, avoiding the "ghost town" effect.',
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>`,
        title: '2. Resource Constraints: A Part-time Trio',
        body: 'With a part-time team and limited dev capacity, every resource had to be precisely allocated to the critical path.',
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>`,
        title: '3. The Trust Deficit: A Fragmented Industry',
        body: 'How to convey professionalism and safety through UI to build brand credibility in a subjective industry.',
      },
    ],
  },

  decisions: {
    title: 'Key Design Decisions',
    groups: [
      {
        badge: 'Market Anchoring & Value Re-engineering',
        items: [
          {
            title: 'Business Model Pivot',
            steps: [
              { label: 'Initial Hypothesis', body: 'A content-driven platform with exclusive practitioners and centralized scheduling.' },
              { label: 'Problem Found', body: 'Required ongoing practitioner costs and high commission pressure—not viable for a zero-budget team.' },
              { label: 'The Pivot', body: 'Shifted to a Marketplace model—providing tools and exposure for practitioners to operate autonomously.' },
            ],
          },
          {
            title: 'Interview-Driven Prioritization',
            steps: [
              { label: 'Research Method', body: 'Deep interviews with 10+ practitioners using a 15-question framework focused on operations and pain points.' },
              { label: 'Core Finding', body: 'All interviewees pointed to the same pain point: Exposure. They just want to focus on teaching—marketing, booking, and payments are all burdens.' },
              { label: 'Decision Impact', body: 'Redefined the core platform value—not just a course platform, but a "digital assistant" for practitioners. Feature prioritization was re-ordered accordingly.' },
            ],
          },
        ],
      },
      {
        badge: 'Reflection & Risk Assessment',
        items: [
          {
            title: 'MVP Scope Misjudgment (Reflection)',
            steps: [
              { label: 'The Error', body: 'Simultaneous development of discovery features and a full payment system significantly delayed the MVP.' },
              { label: 'The Cost', body: 'Tackling high-risk financial compliance too early (payments, refunds, AML), ignoring the principle of validating the first layer of exposure needs first.' },
              { label: 'Learning', body: 'Should have validated matching and exposure needs before tackling complex financial compliance. The interview data already indicated this order—it was not faithfully reflected in execution.' },
            ],
          },
          {
            title: 'Stop-loss & Risk Assessment',
            steps: [
              { label: 'Risk Assessment', body: 'Faced with rising fraud risks and limited resources for compliance, we could not effectively counter the rapidly evolving fraud landscape.' },
              { label: 'Collective Decision', body: 'After evaluating with the engineering team, we reached a consensus to halt development.' },
              { label: 'Philosophy', body: 'This was a responsible call—halting is the right choice when user protection cannot be guaranteed.' },
            ],
          },
        ],
      },
    ],
  },

  product: {
    title: 'Strategy Precedes Design',
    body: 'Every product decision is grounded—from brand positioning and user interviews to market landscape mapping.',
    slides: [
      { label: 'Brand Strategy Framework', image: '/images/work3/product/brand-strategy.png', caption: 'Anchoring company positioning via a brand framework—from Mission, Vision, and Core Values to STP market segmentation—to align product direction with brand values.' },
      { label: 'User Interview Architecture', image: '/images/work3/product/user-interviews.png', caption: 'Ensuring every development step is grounded in real user needs and clear business logic.' },
      { label: 'Product-Market Landscape', image: '/images/work3/product/market-map.png', imageMobile: '/images/work3/product/market-map-m.png', caption: 'A holistic strategic foundation covering both B2B and B2C segments.' },
    ],
  },

  design: {
    title: 'User-Centric Design',
    body: 'Dual-sided design centered on user needs—empowering practitioners to manage their business and helping students easily find the right course.',
    slides: [
      { label: 'B2C Landing Page',    image: '/images/work3/design/toc.png',             caption: 'Brand gateway for students to explore practitioners and wellness courses.' },
      { label: 'B2B Landing Page',    image: '/images/work3/design/tob.png',             caption: 'Recruitment page explaining the platform\'s value proposition and onboarding process.' },
      { label: 'Design Architecture', image: '/images/work3/design/designStructure.svg', imageMobile: '/images/work3/design/designStructure-m.png', caption: 'A comprehensive Figma architecture covering all functional pages for both parties.' },
      { label: 'Student Interface',   image: '/images/work3/design/student.png', imageMobile: '/images/work3/design/student-m.png', caption: 'Core flow for students to browse practitioners, filter courses, and complete bookings.' },
      { label: 'Practitioner Interface', image: '/images/work3/design/healers.png', imageMobile: '/images/work3/design/healers-m.png', caption: 'Backend tools for practitioners to manage course schedules and booking status.' },
    ],
  },

  brand: {
    title: 'Visual Identity Design',
    body: 'From brand identity to social media assets, the visual language spans digital and physical touchpoints, communicating the platform\'s core values.',
    slides: [
      { label: 'Visual Identity & Logo', image: '/images/work3/brand/logo.png', caption: 'Using droplets and the globe as core imagery to symbolize healing and flow.' },
      { label: 'Business Cards',         image: '/images/work3/brand/card.png', imageMobile: '/images/work3/brand/card-m.png', caption: 'Establishing a consistent visual language across digital and physical touchpoints.' },
      { label: 'Social Media Templates', image: '/images/work3/brand/ig.png',   imageMobile: '/images/work3/brand/ig-m.png',   caption: 'Creating a soothing atmosphere across social media platforms.' },
    ],
  },

  reflection: {
    body: 'This is a project that spanned 1.5 years but was ultimately never launched. A designer\'s value in a 0-to-1 project is helping the team see clearly if "the problem is worth solving."',
    quote: '0-to-1 is not about finishing features; it\'s about knowing exactly what hypothesis you are validating at this very step."',
  },

  prev: { to: '/en/works/filo', title: 'Filo' },
  next: null,
}
</script>

<style scoped>
.work-page {
  background: #FFFEFD;
}
</style>
