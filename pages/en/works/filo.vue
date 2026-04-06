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
              <span class="block text-sm font-semibold tracking-widest uppercase mb-1" style="color: #9CA3AF">{{ meta.label }}</span>
              <a
                v-if="meta.link"
                :href="`https://${meta.value}`"
                target="_blank"
                rel="noopener"
                class="text-base font-medium underline underline-offset-2"
                style="color: #2A9D8F"
              >{{ meta.value }}</a>
              <span v-else class="text-base font-medium text-navy">{{ meta.value }}</span>
            </div>
          </div>

        </div>

        <!-- Right: product screenshot -->
        <div v-reveal="{ delay: 150 }" class="flex-1 min-w-0 w-full">
          <div
            class="w-full rounded-2xl overflow-hidden"
            style="background: #0F1117; min-height: 400px; height: 490px; position: relative;"
          >
            <video
              src="/images/work2/hero_crop.mp4"
              autoplay
              loop
              muted
              playsinline
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"
            />
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
          <h2 class="text-3xl font-bold text-navy mb-2" style="line-height: 1.5">
            {{ section.title }}
          </h2>
          <div class="w-8 h-1 bg-teal rounded-full mb-4" :class="section.center ? 'mx-auto' : ''" />
          <p
            class="text-base text-gray-600 leading-loose mb-10"
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
              class="text-sm leading-loose"
              :style="card.accent ? 'color: rgba(255,255,255,0.85)' : 'color: #4B5563'"
            >{{ card.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Phases Section
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
            <h2 class="text-3xl font-bold text-navy mb-2" style="line-height: 1.5">{{ section.title }}</h2>
            <div class="w-8 h-1 bg-teal rounded-full" />
          </div>

          <!-- Phase cards -->
          <div class="flex flex-col gap-24">
            <div
              v-for="(phase, pi) in section.phases"
              :key="pi"
              v-reveal="{ delay: pi * 100 }"
            >

              <!-- ── Layout A: top row (label + image), bottom row (card) ── -->
              <div v-if="phase.steps" class="flex flex-col gap-8">

                <!-- Top row: left label + right image -->
                <div class="flex flex-col md:flex-row items-start gap-12">
                  <!-- Left: number + title + tags -->
                  <div class="flex-1">
                    <div class="text-6xl font-black mb-2 leading-none" style="color: rgba(42,157,143,0.22)">
                      {{ String(pi + 1).padStart(2, '0') }}
                    </div>
                    <h3 class="text-xl font-bold text-navy mb-4">{{ phase.title }}</h3>
                    <div v-if="phase.tags" class="flex flex-wrap gap-2">
                      <span
                        v-for="tag in phase.tags"
                        :key="tag"
                        class="text-xs px-3 py-1 rounded-full font-medium"
                        style="background: rgba(42,157,143,0.1); color: #2A9D8F"
                      >{{ tag }}</span>
                    </div>
                  </div>
                  <!-- Right: image -->
                  <div class="flex-1">
                    <img src="/images/work2/phase1.png" alt="Phase 1" class="w-full rounded-xl object-contain" />
                  </div>
                </div>

                <!-- Bottom row: full-width card -->
                <div
                  class="rounded-2xl p-6"
                  style="background: #fff; border: 1px solid rgba(0,0,0,0.07); box-shadow: 0 2px 16px rgba(0,0,0,0.05)"
                >
                  <!-- Description -->
                  <p class="text-sm text-gray-600 leading-loose mb-6">{{ phase.body }}</p>

                  <!-- Steps + KEY DISCOVERY -->
                  <div class="flex flex-col md:flex-row gap-5 items-start">
                    <!-- Steps col -->
                    <div class="min-w-0 flex flex-col gap-4" style="flex: 6">
                      <div v-for="(step, si) in phase.steps" :key="si" class="flex gap-3 items-start">
                        <span
                          class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                          style="background: #2A9D8F"
                        >{{ si + 1 }}</span>
                        <div>
                          <div class="text-base font-bold text-navy">{{ step.title }}</div>
                          <div class="text-sm text-gray-500 leading-relaxed mt-0.5">{{ step.sub }}</div>
                        </div>
                      </div>
                    </div>

                    <!-- KEY DISCOVERY col -->
                    <div
                      v-if="phase.discovery"
                      class="w-full rounded-xl p-4 md:w-auto"
                      style="flex: 4; background: rgba(42,157,143,0.08); border: 1px solid rgba(42,157,143,0.15)"
                    >
                      <div class="text-xs font-bold tracking-widest uppercase mb-2" style="color: #2A9D8F">Key Discovery</div>
                      <p class="text-sm text-gray-600 leading-relaxed">{{ phase.discovery }}</p>
                    </div>
                  </div>
                </div>

              </div>

              <!-- ── Layout D: security / standalone section ── -->
              <div
                v-else-if="phase.securitySection"
                class="rounded-2xl p-8"
                style="background: #fff; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 2px 16px rgba(0,0,0,0.04)"
              >
                <!-- Sub-badge -->
                <div v-if="phase.subBadge" class="mb-4">
                  <span
                    class="inline-flex items-center gap-1.5"
                    style="background: rgba(42,157,143,0.12); color: #2A9D8F; border-radius: 999px; padding: 4px 12px; font-size: 13px; font-weight: 600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    {{ phase.subBadge.text }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-navy mb-3">{{ phase.title }}</h3>
                <p class="text-sm text-gray-600 leading-loose mb-8 max-w-3xl">{{ phase.body }}</p>
                <div v-if="phase.points" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div
                    v-for="point in phase.points"
                    :key="point.title"
                    class="rounded-xl p-5"
                    style="background: rgba(42,157,143,0.06); border: 1px solid rgba(42,157,143,0.12)"
                  >
                    <h4 class="text-base font-bold text-navy mb-2">{{ point.title }}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">{{ point.body }}</p>
                  </div>
                </div>
              </div>

              <!-- ── Layout B: left (image + card) + right label (Phase 2 style) ── -->
              <div v-else-if="!phase.accent" class="flex flex-col md:flex-row gap-12 items-start">

                <!-- Left col (flex-3): image + white card -->
                <div class="flex flex-col gap-6 min-w-0" style="flex: 3">
                  <!-- Image -->
                  <img src="/images/work2/phase2.png" alt="Phase 2" class="w-full rounded-xl object-contain" />

                  <!-- White card -->
                  <div
                    class="rounded-2xl p-6"
                    style="background: #fff; border: 1px solid rgba(0,0,0,0.07); box-shadow: 0 2px 16px rgba(0,0,0,0.05)"
                  >
                    <p class="text-sm text-gray-600 leading-loose mb-6">{{ phase.leftBody }}</p>

                    <!-- KEY DISCOVERY -->
                    <div v-if="phase.discoveryBottom" class="rounded-xl p-5" style="background: rgba(42,157,143,0.08); border: 1px solid rgba(42,157,143,0.15)">
                      <div class="text-xs font-bold tracking-widest uppercase mb-2" style="color: #2A9D8F">Key Discovery</div>
                      <p class="text-base text-navy font-semibold mb-1">{{ phase.discoveryBottom.title }}</p>
                      <p class="text-sm text-gray-600 leading-loose">{{ phase.discoveryBottom.body }}</p>
                    </div>
                  </div>
                </div>

                <!-- Right col (flex-1): number + title + body -->
                <div class="min-w-0" style="flex: 1">
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
                <!-- Sub-badge -->
                <div v-if="phase.subBadge" class="mb-4">
                  <span
                    class="inline-flex items-center gap-1.5"
                    style="background: rgba(42,157,143,0.12); color: #2A9D8F; border-radius: 999px; padding: 4px 12px; font-size: 13px; font-weight: 600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                    {{ phase.subBadge.text }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-navy mb-4">{{ phase.title }}</h3>
                <p class="text-sm text-gray-600 leading-loose mb-6">{{ phase.leftBody }}</p>
                <div v-if="phase.comparison" class="grid sm:grid-cols-2 gap-6">
                  <div v-for="col in phase.comparison" :key="col.label">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="text-base">{{ col.icon }}</span>
                      <span class="text-base font-semibold" :style="col.accent ? 'color: #2A9D8F' : 'color: #1B2A4A'">{{ col.label }}</span>
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
         Outcomes Section
    ───────────────────────────────────────────── -->
    <template v-for="(section, idx) in project.sections" :key="'outcome-' + idx">
      <section v-if="section.outcomes" class="py-16" :style="section.bg ? `background: ${section.bg}` : ''">
        <div class="max-w-6xl mx-auto px-6">
          <!-- Centered heading -->
          <div v-reveal class="text-center mb-12">
            <h2 class="text-3xl font-bold text-navy mb-2">{{ section.title }}</h2>
            <div class="w-8 h-1 bg-teal rounded-full mx-auto" />
          </div>

          <!-- Top: Final Outcomes card -->
          <div v-reveal="{ delay: 100 }" class="rounded-2xl p-8 mb-6" style="background: #fff; border: 1px solid rgba(0,0,0,0.06)">

            <!-- Section label with green bar -->
            <div class="flex items-center gap-3 mb-6">
              <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
              <h3 class="font-bold text-navy text-base">{{ section.outcomes.left.title }}</h3>
            </div>

            <!-- Two columns -->
            <div class="flex flex-col md:flex-row gap-10">

              <!-- Left column -->
              <div class="flex-1">
                <div class="font-bold mb-1" style="color: #2A9D8F">AI-Collaborative Workflow</div>
                <p class="text-sm text-gray-500 leading-loose mb-4">Significantly reduced execution time across all project phases.</p>
                <div class="flex flex-col gap-4">
                  <div v-for="item in section.outcomes.left.items.filter(i => i.body)" :key="item.title" class="flex gap-3 items-start">
                    <span class="flex-shrink-0 rounded-full mt-2" style="width: 6px; height: 6px; background: #2A9D8F; margin-top: 7px" />
                    <div>
                      <div class="font-semibold text-navy text-sm mb-0.5">{{ item.title }}</div>
                      <p class="text-sm text-gray-600 leading-loose">{{ item.body }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Divider -->
              <div class="hidden md:block w-px self-stretch" style="background: rgba(0,0,0,0.07)" />

              <!-- Right column -->
              <div class="flex-1">
                <div class="font-bold mb-1" style="color: #2A9D8F">{{ section.outcomes.rightCol.title }}</div>
                <p class="text-sm text-gray-500 leading-loose mb-4">{{ section.outcomes.rightCol.subtitle }}</p>
                <div class="flex flex-col gap-4">
                  <div v-for="item in section.outcomes.rightCol.items" :key="item.title" class="flex gap-3 items-start">
                    <span class="flex-shrink-0 rounded-full" style="width: 6px; height: 6px; background: #2A9D8F; margin-top: 7px" />
                    <div>
                      <div class="font-semibold text-navy text-sm mb-0.5">{{ item.title }}</div>
                      <p class="text-sm text-gray-600 leading-loose">{{ item.body }}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom: Insights (teal accent card) -->
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
const project = {
  title: 'An AI-Powered Financial Journal',
  brandName: 'Filo',
  subtitle: '',
  tags: [],

  meta: [
    { label: 'Role', value: 'Lead UI/UX Designer' },
    { label: 'Timeline', value: '3 Weeks' },
    { label: 'Type', value: 'Personal Project / AI-native PWA' },
    { label: 'Product', value: 'flow-budget-app.vercel.app', link: true },
  ],

  sections: [
    {
      label: 'Project Core',
      hideLabel: true,
      bg: '#f9fafb',
      title: 'Project Core',
      body: 'The primary goal is not market validation, but answering a pivotal question: How can a designer leverage AI collaboration tools to build an AI workflow and lead a product from 0 to 1?',
      highlights: [
        {
          icon: '⚠',
          title: 'Strategic Focus',
          body: 'To focus entirely on AI collaboration and feature integration, I intentionally narrowed the scope—bypassing standard steps like user interviews or market research to fast-track the project.',
          accent: false,
        },
        {
          icon: '⚡',
          title: 'Product Philosophy',
          body: 'People abandon budget apps not due to lack of features, but high cognitive load. The design core: Minimize input friction and shift the burden of decision-making from the user to the system.',
          accent: true,
        },
      ],
    },
    {
      label: 'Core Challenges & Goals',
      hideLabel: true,
      center: true,
      title: 'Core Challenges & Goals',
      body: 'As AI reshapes product development and interaction, the core functions of a designer must be redefined.',
      goalCards: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
          title: 'Workflow Establishment',
          body: 'Establishing a repeatable AI-collaborative development workflow.',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>`,
          title: 'AI Feature Integration',
          body: 'Integrating AI as a structural pillar of the product, rather than just an add-on feature.',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>`,
          title: 'Sustainable Architecture',
          body: 'Discovering a design architecture that supports sustainable growth after the rapid MVP phase.',
        },
      ],
    },
    {
      label: 'Design & Development Journey',
      hideLabel: true,
      bg: '#f9fafb',
      title: 'Design & Development Journey',
      phases: [
        {
          title: 'Phase 1: Rapid MVP Construction',
          steps: [
            { title: 'Google Stitch to Figma', sub: 'Generating visual directions, extracting design language, and refining the hero UI.' },
            { title: 'Claude & Claude Code', sub: 'Collaborative coding via screenshots and voice/text prompts; the designer acts as the decision-maker and reviewer.' },
            { title: 'Testable Prototype', sub: 'Live deployment with full-stack architecture; a real-world functional product.' },
          ],
          body: 'Replacing traditional models with AI-assisted workflows—from visual exploration to collaborative dev, delivering a live, functional prototype.',
          discovery: 'Using text and screenshots instead of Figma MCP accelerated progress within Claude Code, allowing UI refinements to be implemented directly during the build.',
        },
        {
          title: 'Phase 2: Design Systemization',
          leftBody: 'Leveraging a "Code-to-Design" model: pages, components, and tokens.json generated by Claude Code are reverse-extracted into Figma. The exported tokens.json aligns design and development, providing a foundation for sustainable expansion.',
          rightCol: {
            title: 'Phase 2: Design Systemization',
            body: 'Establishing a structure for sustainable development and maintenance.',
          },
          discoveryBottom: {
            title: 'AI-Driven Token Automation',
            body: 'Leveraging a "Code-to-Design" model to eliminate tedious manual setups, drastically improving design system synchronization.',
          },
        },
        {
          accent: true,
          title: 'Implementing Generative UI',
          subBadge: { text: 'A Shift in Design Thinking' },
          leftBody: 'Shifting from "pre-defined components" to "defining generation rules." AI dynamically invokes UI based on user intent, balancing consistency and flexibility.',
          comparison: [
            {
              icon: '⏱',
              label: 'Traditional Paradigm',
              accent: false,
              body: 'Building static libraries and pixel-perfect specs for developers.',
            },
            {
              icon: '✦',
              label: 'AI-First Era',
              accent: true,
              body: 'Defining system constraints and semantic logic for AI to interpret and deploy.',
            },
          ],
        },
        {
          securitySection: true,
          title: 'AI Safety & Guardrails',
          subBadge: { text: 'Designing AI Boundaries' },
          body: 'Integrating AI requires designing its behavioral boundaries to ensure it operates within a defined scope.',
          points: [
            { title: 'Out-of-Scope Rejection', body: 'Rejecting non-financial queries to keep the AI focused on its core utility.' },
            { title: 'Prompt Injection Defense', body: 'Detecting and neutralizing "ignore previous instructions" attacks to prevent unauthorized AI behaviors.' },
            { title: 'Input Length Constraints', body: 'Implementing a 200-character limit to prevent buffer attacks and manage API quota effectively.' },
          ],
        },
      ],
    },
    {
      label: 'Outcomes',
      title: 'Outcomes',
      bg: '#fff',
      outcomes: {
        left: {
          title: 'Final Outcomes',
          items: [
            {
              title: 'AI-Collaborative Workflow',
              subtitle: 'Significantly reduced execution time across all project phases.',
              body: '',
            },
            {
              title: 'Rapid Prototyping (Code-to-Design)',
              body: 'Generating high-fidelity prototypes with functional logic, drastically shortening the concept-to-validation cycle.',
            },
            {
              title: 'Reverse Design Systems',
              body: 'Extracting design patterns from generated code; the design system is built concurrently with development.',
            },
          ],
        },
        rightCol: {
          title: 'AI-Native Product Implementation',
          subtitle: 'Reducing cognitive load and enabling instant financial insights.',
          items: [
            {
              title: 'Multi-modal Input × AI Processing',
              body: 'Integrated Voice, Text, and Photo inputs; AI handles classification and natural language queries, shifting the burden from user to system.',
            },
            {
              title: 'Generative UI in Production',
              body: 'The designer defines generation logic and UI rules; AI performs intent detection and triggers dynamic component mapping in real time.',
            },
          ],
        },
        right: {
          title: 'Insights',
          insight: {
            body: 'True efficiency lies not just in speed, but in the "knowledge flow" between projects.',
          },
          closing: 'As AI liberates productivity, the designer\'s value returns to "Defining Rules," "System Construction," and "Professional Judgment": We are not just finishing projects; we are building logical systems capable of evolution.',
        },
      },
    },
  ],

  prev: { to: '/works/designops', title: 'DesignOps' },
  next: { to: '/works/cohealing', title: 'CoHealing' },
}
</script>

<style scoped>
.work-page {
  background: #FFFEFD;
}
</style>
