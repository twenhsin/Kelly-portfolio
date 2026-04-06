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
        <h1 class="text-4xl md:text-5xl font-bold text-navy mb-2" style="line-height: 1.3">Works</h1>
        <div class="w-8 h-1 bg-teal rounded-full mb-4" />
        <p class="text-sm text-gray-500 leading-loose max-w-lg">
          Three representative projects documenting the complete thinking process from problem definition to final design.
        </p>
      </div>
    </section>

    <!-- ── Work cards ─────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pb-12">
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
              View Case
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- More Works -->
    <section class="max-w-6xl mx-auto px-6 pb-28">
      <div class="mt-8">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-5 rounded-full bg-teal" />
          <h2 class="text-xl font-semibold text-navy">More Works</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://www.behance.net/gallery/94549303/Webapp" target="_blank" rel="noopener" class="group block overflow-hidden rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div class="overflow-hidden">
              <img src="/images/more/behance1.png" alt="mycoach Sports Management Platform (Surfing)" class="w-full h-auto group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-4">
              <p class="text-xs text-teal font-semibold tracking-widest uppercase mb-1">Webapp</p>
              <p class="text-base font-semibold text-navy">mycoach Sports Management Platform (Surfing)</p>
            </div>
          </a>

          <a href="https://www.behance.net/gallery/93882131/_" target="_blank" rel="noopener" class="group block overflow-hidden rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div class="overflow-hidden">
              <img src="/images/more/behance2.png" alt="mycoach Sports Management Platform (Football)" class="w-full h-auto group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-4">
              <p class="text-xs text-teal font-semibold tracking-widest uppercase mb-1">Mobile App</p>
              <p class="text-base font-semibold text-navy">mycoach Sports Management Platform (Football)</p>
            </div>
          </a>

          <a href="https://www.behance.net/gallery/56436903/CO-WORKING-SPACE" target="_blank" rel="noopener" class="group block overflow-hidden rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div class="overflow-hidden">
              <img src="/images/more/behance3.png" alt="Chuang Gu Co-working Space" class="w-full h-auto group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-4">
              <p class="text-xs text-teal font-semibold tracking-widest uppercase mb-1">Mobile App</p>
              <p class="text-base font-semibold text-navy">Chuang Gu Co-working Space</p>
            </div>
          </a>
        </div>

        <div class="mt-10 text-center">
          <a
            href="https://www.behance.net/wenhsin600cc8c"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal text-white font-medium transition-colors duration-200 hover:bg-[#1E7B6E]"
          >
            More on Behance
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const works = [
  {
    to: '/works/designops',
    type: 'Automated Architecture / DesignOps',
    title: 'DesignOps System',
    description: 'Bridging the gap between design and engineering through automated synchronization and consistent design specs.',
    tags: ['Visual Datafication', 'Design Tokens', 'Design-to-Code', 'Single Source of Truth'],
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2A9D8F 100%)',
    cover: '/images/work1/hero.png',
  },
  {
    to: '/works/filo',
    type: 'AI-Native Product / Workflow Innovation',
    title: 'Filo',
    description: 'Building an AI-native product with Generative UI and a Code-to-Design workflow, enabling "Design as Code" with instant high-fidelity prototyping.',
    tags: ['Generative UI', 'Rapid Prototyping', 'AI Workflow', 'Two-way Sync'],
    gradient: 'linear-gradient(135deg, #2A4A6B 0%, #2A9D8F 100%)',
    cover: '/images/work2/cover.png',
  },
  {
    to: '/works/cohealing',
    type: 'Product Strategy / 0-to-1',
    title: 'Cohealing',
    description: 'From brand positioning to product planning—delivering a complete 0-to-1 design roadmap.',
    tags: ['Product Strategy', 'Brand Positioning', '0-to-1', 'UI/UX Design'],
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
