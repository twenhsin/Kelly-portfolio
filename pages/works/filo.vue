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
                    <!-- Shield icon -->
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
                    <!-- Sparkle icon -->
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
         Outcomes Section (成果與洞察)
    ───────────────────────────────────────────── -->
    <template v-for="(section, idx) in project.sections" :key="'outcome-' + idx">
      <section v-if="section.outcomes" class="py-16" :style="section.bg ? `background: ${section.bg}` : ''">
        <div class="max-w-6xl mx-auto px-6">
          <!-- Centered heading -->
          <div v-reveal class="text-center mb-12">
            <h2 class="text-3xl font-bold text-navy mb-2">{{ section.title }}</h2>
            <div class="w-8 h-1 bg-teal rounded-full mx-auto" />
          </div>

          <!-- Top: 最終結果 card -->
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
                <div class="font-bold mb-1" style="color: #2A9D8F">AI 協作工作流</div>
                <p class="text-sm text-gray-500 leading-loose mb-4">大幅縮短過去每個階段的執行時程</p>
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

          <!-- Bottom: 實踐洞察 (teal accent card) -->
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
      body: '這件作品的核心目標不是驗證產品市場可行性，而是實踐一個問題的答案：設計師如何透過 AI 協作工具，逐步建立 AI workflow，主導一個產品從零到一。',
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
          leftBody: '由 Claude Code 生成的頁面、component 與 tokens.json 反向提取設計規律，導入 Figma。匯出的 tokens.json 讓設計與開發對齊，也讓專案具備持續擴充的基礎。',
          rightCol: {
            title: 'Phase 2: 設計系統化',
            body: '為專案建立可持續開發與維護的結構。',
          },
          discoveryBottom: {
            title: 'AI 驅動的 TOKEN 自動化流程',
            body: '透過 Code to Design 模式，省去過去繁重的設計設定工作，設計系統的同步效率大幅提升。',
          },
        },
        {
          accent: true,
          title: 'Generative UI 的實踐',
          subBadge: { text: '設計思維的轉變' },
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
        {
          securitySection: true,
          title: 'AI 安全防護機制',
          subBadge: { text: 'AI 邊界的意識' },
          body: '導入 AI 功能，不只是定義 AI 能做什麼——同時也要設計 AI 的行為邊界。安全防護機制確保 AI 在明確的使用範圍內運作，保護使用者體驗與系統資源。',
          points: [
            { title: 'off-topic 拒絕', body: '非記帳相關問題直接拒絕回應，確保 AI 在明確的使用範圍內運作。' },
            { title: 'Prompt Injection 防護', body: '偵測並拒絕「忘掉你的指令」類攻擊，防止 AI 被引導執行超出範圍的行為。' },
            { title: '輸入長度限制', body: '前端設定 200 字上限，防止超長輸入攻擊，同時保護 API 額度不被濫用。' },
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
              title: 'AI 協作工作流',
              subtitle: '大幅縮短過去每個階段的執行時程',
              body: '',
            },
            {
              title: '快速原型',
              body: '截圖加口述指令，Code-to-Design 雙向同步，在開發過程中同步產出具備實體邏輯的高保真原型，大幅縮短產品從發想到驗證的週期。',
            },
            {
              title: '反向設計系統',
              body: '從 Code 生成的介面反向萃取設計規律，設計系統在開發完成的同時同步建立。',
            },
          ],
        },
        rightCol: {
          title: 'AI-native 產品實踐',
          subtitle: '降低記帳時間成本，快速獲取帳務資訊',
          items: [
            {
              title: '多元輸入 × AI 處理',
              body: '整合語音、文字、拍照三種輸入，AI 分類並支援自然語言查詢，操作負擔從用戶轉移給系統。',
            },
            {
              title: 'Generative UI 落地',
              body: '設計師定義生成邏輯與 UI 規範，AI 根據用戶進行「意圖偵測 (Intent Detection)」並即時觸發「動態組件映射 (Dynamic Mapping)」',
            },
          ],
        },
        right: {
          title: '實踐洞察',
          insight: {
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

  prev: { to: '/works/designops', title: 'DesignOps' },
  next: { to: '/works/cohealing', title: 'CoHealing' },
}
</script>

<style scoped>
.work-page {
  background: #FFFEFD;
}
</style>
