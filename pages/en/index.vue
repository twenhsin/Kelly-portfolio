<template>
  <div>
    <!-- ───────────────────────────────────────────
         Hero Section
    ─────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col-reverse md:flex-row items-center gap-12">
      <!-- Left: copy -->
      <div v-reveal class="flex-1 flex flex-col gap-6">
        <span class="text-sm font-semibold tracking-widest uppercase" style="color: #2A9D8F">
          AI Collaboration Designer
        </span>

        <h1 class="text-4xl md:text-5xl font-bold text-navy" style="line-height: 1.4">
          Designing with strategy. Collaborating with AI.
        </h1>

        <p class="text-lg text-gray-500 leading-relaxed">
          From art to product, execution to strategy—bringing cross-functional expertise into the AI era.
        </p>

        <div class="flex gap-4">
          <button
            class="flex-1 px-6 py-3 rounded-lg bg-teal text-white font-medium hover:opacity-90 transition-opacity text-center"
            @click="showContact = true"
          >
            Contact Me
          </button>
          <NuxtLink
            to="/works"
            class="flex-1 px-6 py-3 rounded-lg border border-navy text-navy font-medium hover:bg-navy hover:text-white transition-colors text-center"
          >
            Works
          </NuxtLink>
        </div>
      </div>

      <!-- Right: illustration -->
      <div v-reveal="{ delay: 200 }" class="flex-1 flex justify-center">
        <img
          src="/images/HeroImage.png"
          alt="Designer illustration"
          class="w-full max-w-sm object-contain"
        />
      </div>
    </section>

    <!-- ───────────────────────────────────────────
         Skills Section
    ─────────────────────────────────────────── -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Heading -->
        <div v-reveal class="mb-10">
          <h2 class="text-3xl font-bold text-navy mb-2">Capabilities</h2>
          <div class="w-8 h-1 bg-teal rounded-full" />
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <SkillCard
            v-reveal="{ delay: 0 }"
            title="Systems & Workflows"
            description="Establishing DesignOps, Token architectures, and component standards to build a shared language and automated foundation for design and engineering."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 150 }"
            title="AI Collaboration"
            description="Crafting repeatable design workflows where humans make the decisions and AI handles the execution."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 300 }"
            title="Product Thinking"
            description="Defining problems before pixels—ensuring design decisions serve product goals and user needs."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 21h5M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.8A6 6 0 0 1 6 9a6 6 0 0 1 6-6z" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 450 }"
            title="Cross-role Communication"
            description="Speaking Design to engineers and Product Logic to PMs—bridging gaps and accelerating decision-making."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4l-4 4-1-4z" />
              </svg>
            </template>
          </SkillCard>
        </div>
      </div>
    </section>

    <!-- ───────────────────────────────────────────
         Projects Section
    ─────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pt-20 pb-40">
      <!-- Heading -->
      <div v-reveal class="mb-12">
        <h2 class="text-3xl font-bold text-navy mb-2">Works</h2>
        <div class="w-8 h-1 bg-teal rounded-full" />
      </div>

      <!-- Cards list -->
      <div class="flex flex-col gap-16">
        <ProjectCard
          v-reveal
          to="/works/designops"
          type="Automated Architecture / DesignOps"
          title="DesignOps System"
          description="Bridging the gap between design and engineering through automated synchronization and consistent design specs."
          :tags="['Visual Datafication', 'Design Tokens', 'Design-to-Code', 'Single Source of Truth']"
          image="/images/work1/hero.png"
          gradient="linear-gradient(135deg, #c9a27e, #b5845a)"
        />
        <ProjectCard
          v-reveal
          to="/works/filo"
          type="AI-Native Product / Workflow Innovation"
          title="Filo"
          description="Building an AI-native product with Generative UI and a Code-to-Design workflow, enabling &quot;Design as Code&quot; with instant high-fidelity prototyping."
          :tags="['Generative UI', 'Rapid Prototyping', 'AI Workflow', 'Two-way Sync']"
          gradient="linear-gradient(135deg, #f4a97f, #e8856a)"
          image="/images/work2/cover.png"
          :reverse="true"
        />
        <ProjectCard
          v-reveal
          to="/works/cohealing"
          type="Product Strategy / 0-to-1"
          title="Cohealing"
          description="From brand positioning to product planning—delivering a complete 0-to-1 design roadmap."
          :tags="['Product Strategy', 'Brand Positioning', '0-to-1', 'UI/UX Design']"
          gradient="linear-gradient(135deg, #e8c97a, #d4a840)"
          image="/images/Hero3.png"
        />
      </div>

      <!-- Bottom CTA -->
      <div class="flex justify-center mt-32">
        <div class="group/cta inline-flex flex-col items-center">
          <NuxtLink
            to="/works"
            class="relative z-10 px-8 py-3 rounded-lg bg-teal text-white font-medium transition-colors duration-200 hover:bg-[#1E7B6E]"
          >
            View All Works
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const showContact = useState('showContact', () => false)
</script>

<style scoped>
.blink-eye {
  animation: blink 3s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

.blink-eye:nth-child(3) {
  animation-delay: 0.08s;
}

@keyframes blink {
  0%, 90%, 100% { ry: 2.5px; }
  93%, 97%      { ry: 0.2px; }
}

.wag-tail {
  animation: wag 1.2s ease-in-out infinite;
  transform-origin: top center;
}

@keyframes wag {
  0%, 100% { transform: rotate(-18deg); }
  50%      { transform: rotate(18deg); }
}

</style>
