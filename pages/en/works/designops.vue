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
              <span class="block text-sm font-semibold tracking-widest uppercase mb-1" style="color: #9CA3AF">{{ meta.label }}</span>
              <span class="text-base font-medium text-navy">{{ meta.value }}</span>
            </div>
          </div>
        </div>

        <!-- Right: hero visual -->
        <div v-reveal="{ delay: 150 }" class="flex-1 min-w-0 w-full">
          <div class="w-full rounded-2xl overflow-hidden">
            <img src="/images/work1/hero.png" alt="DesignOps System Hero" class="w-full h-auto object-cover" />
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         2 & 3. General sections
    ───────────────────────────────────────────── -->
    <section
      v-for="(section, idx) in project.sections.filter(s => !s.phases && !s.outcomes)"
      :key="idx"
      class="py-[84px]"
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
         4. Process
    ───────────────────────────────────────────── -->
    <section class="py-[84px]" style="background: #f9fafb">
      <div class="max-w-6xl mx-auto px-6">

        <!-- Section heading -->
        <div v-reveal class="mb-12">
          <h2 class="text-3xl font-bold text-navy mb-2">Process</h2>
          <div class="w-8 h-1 rounded-full" style="background: #2A9D8F" />
        </div>

        <!-- Phase 01 -->
        <div v-reveal class="flex flex-col">

          <!-- Header -->
          <div class="text-left md:text-left text-center" style="margin-bottom: 80px">
            <div class="text-6xl font-black mb-2 leading-none" style="color: rgba(42,157,143,0.22)">01</div>
            <h3 class="text-xl font-bold text-navy mb-2">Visual Datafication</h3>
            <p class="text-sm text-gray-600 leading-loose">Teaching AI to Interpret Design Decisions</p>
          </div>

          <!-- Sub 1: Token Architecture -->
          <div class="flex flex-col gap-4" style="margin-bottom: 120px">
            <div class="flex items-center justify-center gap-4">
              <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
              <h4 class="font-bold text-navy" style="font-size: 20px">Token Architecture</h4>
            </div>
            <p class="text-gray-600 leading-loose text-center" style="font-size: 16px">Building a three-tier separation architecture with Token Studio for Figma (TSF):</p>
            <div class="flex flex-col sm:flex-row items-center gap-0" style="margin-top: 56px">
              <!-- Core -->
              <div class="flex-1 flex flex-col items-center">
                <img src="/images/work1/core.png" alt="Core" class="h-auto object-contain" style="max-width: 280px; width: 100%" />
                <div class="text-center" style="margin-top: 24px">
                  <div style="font-size: 20px; font-weight: bold; color: #2A9D8F; margin-bottom: 4px">Core</div>
                  <div style="font-size: 16px" class="text-gray-500 leading-relaxed">Raw values (color palettes, spacing, typography, etc.)</div>
                </div>
              </div>
              <!-- Arrow -->
              <div class="flex items-center justify-center px-3 py-4 sm:py-0 flex-shrink-0 self-center" style="color: #2A9D8F">
                <svg class="hidden sm:block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
                <svg class="sm:hidden w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
              <!-- Semantic -->
              <div class="flex-1 flex flex-col items-center">
                <img src="/images/work1/semantic.png" alt="Semantic" class="h-auto object-contain" style="max-width: 280px; width: 100%" />
                <div class="text-center" style="margin-top: 24px">
                  <div style="font-size: 20px; font-weight: bold; color: #2A9D8F; margin-bottom: 4px">Semantic</div>
                  <div style="font-size: 16px" class="text-gray-500 leading-relaxed">Contextual definitions referencing core tokens.</div>
                </div>
              </div>
              <!-- Arrow -->
              <div class="flex items-center justify-center px-3 py-4 sm:py-0 flex-shrink-0 self-center" style="color: #2A9D8F">
                <svg class="hidden sm:block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
                <svg class="sm:hidden w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
              <!-- Component -->
              <div class="flex-1 flex flex-col items-center">
                <img src="/images/work1/component.png" alt="Component" class="h-auto object-contain" style="max-width: 280px; width: 100%" />
                <div class="text-center" style="margin-top: 24px">
                  <div style="font-size: 20px; font-weight: bold; color: #2A9D8F; margin-bottom: 4px">Component</div>
                  <div style="font-size: 16px" class="text-gray-500 leading-relaxed">Component-level definitions referencing semantic tokens.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sub 2: Figma Structural Optimization -->
          <div class="flex flex-col gap-4" style="margin-bottom: 120px">
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
              <h4 class="font-bold text-navy" style="font-size: 20px">Figma Structural Optimization</h4>
            </div>
            <div class="flex flex-col md:flex-row items-start justify-between" style="gap: 48px">
              <div class="flex flex-col gap-6" style="max-width: 380px">
                <p class="text-gray-600 leading-loose" style="font-size: 16px">Optimizing component naming, frame structures, and auto-layout in Figma. This stage serves as the visual datafication foundation for AI to interpret design intent.</p>
                <div class="rounded-xl p-4" style="background: rgba(42,157,143,0.08)">
                  <p class="text-sm text-gray-600 leading-loose">The designer's configuration decisions directly impact the quality of AI execution.</p>
                </div>
              </div>
              <div class="rounded-xl overflow-hidden w-full md:flex-shrink-0 md:w-1/2 md:max-w-[480px] mx-auto">
                <img src="/images/work1/token-structure.png" alt="Figma Structural Optimization" class="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          <!-- Sub 3: AI Collaboration -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
              <h4 class="font-bold text-navy" style="font-size: 20px">AI Collaboration: From Design to Code</h4>
            </div>
            <p class="text-gray-600 leading-loose" style="font-size: 16px">Utilizing Figma MCP to allow Claude Code to directly access design data from Figma, supplemented by textual prompts to execute UI development.</p>
            <div class="flex justify-center" style="margin-top: 48px">
              <img src="/images/work1/mcp.png" alt="AI Collaboration: From Design to Code" class="rounded-xl object-cover" style="max-width: 640px; width: 100%" />
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         4-2. Process 02
    ───────────────────────────────────────────── -->
    <section class="py-[84px]">
      <div class="max-w-6xl mx-auto px-6">

        <!-- Header: centered -->
        <div v-reveal class="text-center mb-16">
          <div class="text-6xl font-black mb-3 leading-none" style="color: rgba(42,157,143,0.22)">02</div>
          <h3 class="text-xl font-bold text-navy mb-2">Frontend Automation & Quality Control</h3>
          <p class="text-gray-600" style="font-size: 16px">Ensuring Rule Compliance</p>
        </div>

        <!-- Two columns -->
        <div v-reveal class="flex flex-col md:flex-row gap-20 items-center">

          <!-- Left: three cards -->
          <div class="flex flex-col gap-6" style="max-width: 560px">

            <!-- Card 1 -->
            <div class="rounded-xl p-6" style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.04)">
              <div class="flex items-center gap-4 mb-3">
                <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
                <h4 class="font-bold text-navy" style="font-size: 16px">Technical Foundation</h4>
              </div>
              <p class="text-gray-600 leading-loose" style="font-size: 16px">TSF exports <code>tokens.json</code> → <code>generate-config.js</code> automatically generates <code>token.css</code> and <code>tailwind.config.cjs</code>.</p>
            </div>

            <!-- Card 2 -->
            <div class="rounded-xl p-6" style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.04)">
              <div class="flex items-center gap-4 mb-3">
                <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
                <h4 class="font-bold text-navy" style="font-size: 16px">Always Up-to-Date</h4>
              </div>
              <p class="text-gray-600 leading-loose" style="font-size: 16px">Any token change on the design side—resubmit <code>tokens.json</code> and run the script—and the frontend visuals update instantly. No manual adjustments needed from engineers.</p>
            </div>

            <!-- Card 3 -->
            <div class="rounded-xl p-6" style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.04)">
              <div class="flex items-center gap-4 mb-3">
                <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
                <h4 class="font-bold text-navy" style="font-size: 16px">Hardcode Scanning</h4>
              </div>
              <p class="text-gray-600 leading-loose" style="font-size: 16px">An automated scanning script verifies that components correctly reference tokens rather than hardcoding values directly, ensuring the Single Source of Truth (SSOT) is technically enforced.</p>
            </div>

          </div>

          <!-- Right: image -->
          <div class="flex justify-center w-full md:flex-shrink-0 md:justify-end md:w-[40%] md:max-w-[380px] md:self-center">
            <img src="/images/work1/flow-en.png" alt="Frontend Design System Automation Flow" class="w-full h-auto" />
          </div>

        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         4-3. Process 03
    ───────────────────────────────────────────── -->
    <section class="py-[84px]" style="background: #f9fafb">
      <div class="max-w-6xl mx-auto px-6">

        <div v-reveal class="flex flex-col md:flex-row gap-24 items-start">

          <!-- Left: header + image -->
          <div class="flex-1 flex flex-col gap-10">
            <div>
              <div class="text-6xl font-black mb-3 leading-none" style="color: rgba(42,157,143,0.22)">03</div>
              <h3 class="text-xl font-bold text-navy mb-2">Dual-Layer Delivery</h3>
              <p class="text-gray-600" style="font-size: 16px">Implementing DesignOps: Designing for both Machine-readable and Human-readable</p>
            </div>
            <img src="/images/work1/mh-readable.png" alt="Dual-Layer Delivery" class="h-auto" style="max-width: 100%" />
          </div>

          <!-- Right: two cards -->
          <div class="flex-1 flex flex-col gap-6">

            <!-- Card 1 -->
            <div class="rounded-xl p-6" style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.04)">
              <div class="flex items-center gap-4 mb-3">
                <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
                <h4 class="font-bold text-navy" style="font-size: 16px">Machine-readable</h4>
              </div>
              <p class="text-gray-600 leading-loose" style="font-size: 14px"><code>tokens.json</code> structures design rules for direct use by code and AI dev tools, enabling automated synchronization.</p>
            </div>

            <!-- Card 2 -->
            <div class="rounded-xl p-6" style="border: 1px solid rgba(0,0,0,0.07); background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.04)">
              <div class="flex items-center gap-4 mb-3">
                <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
                <h4 class="font-bold text-navy" style="font-size: 16px">Human-readable</h4>
              </div>
              <p class="text-gray-600 leading-loose" style="font-size: 14px">Providing contextual documentation as a logical reference for designers, engineers, and AI in collaborative decision-making.</p>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         5. Outcomes — Outcomes Section
    ───────────────────────────────────────────── -->
    <template v-for="(section, idx) in project.sections" :key="'outcome-' + idx">
      <section v-if="section.outcomes" class="py-[84px]" :style="section.bg ? `background: ${section.bg}` : ''">
        <div class="max-w-6xl mx-auto px-6">
          <div v-reveal class="text-center mb-12">
            <h2 class="text-3xl font-bold text-navy mb-2">{{ section.title }}</h2>
            <div class="w-8 h-1 bg-teal rounded-full mx-auto" />
          </div>

          <!-- Top: Final Outcomes -->
          <div v-reveal="{ delay: 100 }" class="rounded-2xl p-8 mb-6" style="background: #fff; border: 1px solid rgba(0,0,0,0.06)">
            <div class="flex items-center gap-2 mb-3">
              <div class="flex-shrink-0" style="background: #2A9D8F; height: 20px; width: 4px" />
              <h3 class="text-base font-bold text-navy">{{ section.outcomes.left.title }}</h3>
            </div>
            <p class="text-sm text-gray-500 leading-loose mb-6">Achieving automated synchronization between design and engineering, bridging the gap between the two, and reducing delivery and maintenance costs.</p>
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

          <!-- Bottom: Insights (teal accent card) -->
          <div v-reveal="{ delay: 150 }" class="rounded-2xl p-8" style="background: #2A9D8F">
            <div class="flex items-center gap-2 mb-6">
              <div class="flex-shrink-0" style="background: rgba(255,255,255,0.5); height: 20px; width: 4px" />
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
    <section class="max-w-6xl mx-auto px-6 py-[84px]">
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

<script setup>
const project = {
  title: 'Establishing a Shared Language for Design & Engineering',
  brandName: 'DesignOps System',

  meta: [
    { label: 'Role', value: 'Designer × DesignOps Architect' },
    { label: 'Type', value: 'Personal Practice Project' },
    { label: 'Tech', value: 'Figma TSF · Figma MCP · Claude Code' },
    { label: 'Project Goal', value: 'Establishing a unified language for Designers, Engineers, and AI.' },
  ],

  sections: [
    // ── 2. Context ──────────────────────────────────────────────────────
    {
      label: 'Context',
      hideLabel: true,
      center: true,
      bg: '#f9fafb',
      title: 'Context',
      body: 'A visual datafication solution addressing the industry pain point: "The gap between design systems and actual implementation."',
      highlights: [
        {
          icon: '⚠',
          title: 'Root Causes',
          accent: false,
          items: [
            'The cost of lawlessness: Designers and engineers working in silos, making visual consistency difficult to maintain.',
            'Design systems exist but are not effectively utilized in production.',
            'Engineering teams spend excessive time manually cross-checking and adjusting UI during system updates.',
          ],
        },
        {
          icon: '⚡',
          title: 'Solutions',
          accent: true,
          items: [
            'Token system as a shared language: Structuring design rules to provide clear benchmarks for both designers and engineers.',
            'Automated sync mechanism: Instant synchronization upon token changes, significantly reducing engineering overhead.',
            'Visual datafication: Enabling AI to accurately interpret and execute design rules, bridging the gap between humans and machines.',
          ],
        },
      ],
    },

    // ── 3. Core Challenges & Goals ────────────────────────────────────
    {
      label: 'Core Challenges & Goals',
      hideLabel: true,
      center: true,
      title: 'Core Challenges & Goals',
      body: 'The value of a design system lies not in its completeness, but in its operability: how it is built, used, and maintained. A three-tier solution for three stages.',
      goalCards: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
          title: 'How to Build',
          body: 'Establishing reusable and structured design rules using a three-tier TSF token architecture (Decoupling), creating a language intelligible to designers, engineers, and AI.',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
          title: 'How to Use Effectively',
          body: 'Visual datafication enables AI to accurately interpret design intent; `tokens.json` allows engineers to develop UI layouts based on structured rules without constant spec referencing.',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
          title: 'How to Maintain & Update',
          body: 'Automatic sync via `generate-config.js` and hardcode scanning to ensure compliance. Design rules are no longer a one-way street—engineering adjustments can be synced back to design, forming a closed-loop maintenance cycle.',
        },
      ],
    },

    // ── 5. Outcomes & Insights ────────────────────────────────────────
    {
      label: 'Outcomes & Insights',
      title: 'Outcomes & Insights',
      bg: '#fff',
      outcomes: {
        left: {
          title: 'Final Outcomes',
          items: [
            {
              title: 'Automation-Driven Development Efficiency',
              body: 'Token changes auto-sync, hardcode scanning auto-checks—design system maintenance shifts from manual tracking to automated processes, significantly boosting project efficiency.',
            },
            {
              title: 'Systematic Visual Consistency',
              body: 'The three-tier token architecture structures design rules so designers, engineers, and AI share a common reference—visual consistency is guaranteed by the system, not personal habits.',
            },
            {
              title: 'Visual Datafication as the Foundation for AI Collaboration',
              body: 'This architecture enables AI to accurately interpret and execute design intent, forming an extensible foundation for future product development.',
            },
            {
              title: 'System Reusability & Maintenance Optimization',
              body: 'Through structural decoupling of visuals and component logic: when switching brands or themes, only Core Tokens need adjustment—no component code changes required for global updates, maximizing system reuse and minimizing maintenance costs.',
            },
          ],
        },
        right: {
          title: 'Practice Insights',
          insight: {
            body: "The most important takeaway from this project is not mastering a tool, but understanding a principle: a designer's visual decisions can be datafied, datafication enables systematization, and systematization enables designers, engineers, and AI to execute effectively.",
          },
          closing: "A design system is not a document—it's a set of rules that lets everyone speak the same language. Including AI.",
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
