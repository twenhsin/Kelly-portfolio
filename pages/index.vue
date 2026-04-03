<template>
  <div>
    <!-- ───────────────────────────────────────────
         Hero Section
    ─────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col-reverse md:flex-row items-center gap-12">
      <!-- Left: copy -->
      <div v-reveal class="flex-1 flex flex-col gap-6">
        <span class="text-xs font-semibold tracking-widest uppercase" style="color: #2A9D8F">
          AI 協作設計師
        </span>

        <h1 class="text-4xl md:text-5xl font-bold text-navy" style="line-height: 1.4">
          用策略與系統思維解決產品問題，定義設計師與 AI 協作的工作方式。
        </h1>

        <p class="text-base text-gray-500 leading-relaxed max-w-md">
          從藝術到產品、從執行到策略，我把跨團隊經驗帶入 AI 時代。
        </p>

        <div class="flex gap-4">
          <button
            class="flex-1 px-6 py-3 rounded-lg bg-teal text-white font-medium hover:opacity-90 transition-opacity text-center"
            @click="showContact = true"
          >
            與我聯繫
          </button>
          <NuxtLink
            to="/works"
            class="flex-1 px-6 py-3 rounded-lg border border-navy text-navy font-medium hover:bg-navy hover:text-white transition-colors text-center"
          >
            設計專案
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
          <h2 class="text-2xl font-bold text-navy mb-2">專業能力</h2>
          <div class="w-8 h-1 bg-teal rounded-full" />
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <SkillCard
            v-reveal="{ delay: 0 }"
            title="系統與流程"
            description="建立 DesignOps、Token 架構與元件規範，讓設計與開發擁有共同語言與自動化基礎。"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 150 }"
            title="AI 協作"
            description="建立「人決策、AI 執行」的可重複的設計工作流程。"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 300 }"
            title="產品思維"
            description="在介面前先定義問題，讓設計決策服務於產品目標與使用者需求。"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 21h5M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.8A6 6 0 0 1 6 9a6 6 0 0 1 6-6z" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 450 }"
            title="跨角色溝通"
            description="用設計語言對工程師，用產品邏輯對 PM，縮短溝通落差並加速決策。"
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
        <h2 class="text-2xl font-bold text-navy mb-2">設計專案</h2>
        <div class="w-8 h-1 bg-teal rounded-full" />
      </div>

      <!-- Cards list -->
      <div class="flex flex-col gap-16">
        <ProjectCard
          v-reveal
          to="/works/designops"
          type="DesignOps / 規格同步"
          title="DesignOps System"
          description="消除設計與開發端的規格斷層，透過自動化同步讓設計規格與開發環境保持一致。"
          :tags="['視覺數據化', 'Design Tokens', 'Design-to-Code', 'Single Source of Truth']"
          gradient="linear-gradient(135deg, #c9a27e, #b5845a)"
        />
        <ProjectCard
          v-reveal
          to="/works/filo"
          type="AI-NATIVE 產品 / Code-to-Design 工作流"
          title="Filo"
          description="打造內建 Generative UI 的 AI-native 產品，建立 Code-to-Design 雙向同步工作流，實現代碼即設計，同步完成高保真原型驗證。"
          :tags="['Generative UI', '快速原型', 'AI Workflow', '雙向同步']"
          gradient="linear-gradient(135deg, #f4a97f, #e8856a)"
          :reverse="true"
        />
        <ProjectCard
          v-reveal
          to="/works/cohealing"
          type="產品策略 / 0-to-1"
          title="Cohealing"
          description="從品牌定位到產品規劃，完成 0-to-1 的完整設計交付。"
          :tags="['產品策略', '品牌定位', '0-to-1', 'UIUX 設計']"
          gradient="linear-gradient(135deg, #e8c97a, #d4a840)"
          image="/images/Hero3.png"
        />
      </div>

      <!-- Bottom CTA -->
      <div class="flex justify-center mt-32">
        <div class="group/cta inline-flex flex-col items-center">
          <!-- Wide oval blinking face, bottom half hidden behind button -->
          <div class="w-32 -mb-[15px] z-0 opacity-0 translate-y-4 group-hover/cta:opacity-100 group-hover/cta:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
            <svg viewBox="0 0 88 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Cat ears (behind face) -->
              <path d="M 14,22 L 17,10 Q 19,5 22,10 L 27,22 Z" fill="#DCAF79" stroke="#814F2B" stroke-width="0.8" stroke-linejoin="round" stroke-linecap="round" />
              <path d="M 61,22 L 66,10 Q 69,5 72,10 L 74,22 Z" fill="#DCAF79" stroke="#814F2B" stroke-width="0.8" stroke-linejoin="round" stroke-linecap="round" />
              <!-- Face oval (covers ear bases) -->
              <ellipse cx="44" cy="50" rx="43" ry="40" fill="#DCAF79" stroke="#814F2B" stroke-width="0.8" />
              <!-- Eyes -->
              <ellipse class="blink-eye" cx="30" cy="23" rx="2.4" ry="3.2" fill="#5F5148" />
              <ellipse class="blink-eye" cx="58" cy="23" rx="2.4" ry="3.2" fill="#5F5148" />
              <!-- Whiskers left -->
              <line x1="8" y1="27" x2="37" y2="27" stroke="#814F2B" stroke-width="0.8" stroke-linecap="round" />
              <line x1="8" y1="30" x2="37" y2="30" stroke="#814F2B" stroke-width="0.8" stroke-linecap="round" />
              <line x1="8" y1="33" x2="37" y2="33" stroke="#814F2B" stroke-width="0.8" stroke-linecap="round" />
              <!-- Whiskers right -->
              <line x1="51" y1="27" x2="80" y2="27" stroke="#814F2B" stroke-width="0.8" stroke-linecap="round" />
              <line x1="51" y1="30" x2="80" y2="30" stroke="#814F2B" stroke-width="0.8" stroke-linecap="round" />
              <line x1="51" y1="33" x2="80" y2="33" stroke="#814F2B" stroke-width="0.8" stroke-linecap="round" />
              <!-- Nose -->
              <polygon points="42,28 46,28 44,31" fill="#5F5148" />
              <!-- Cat mouth: philtrum + two curves -->
              <path d="M44,31 L44,34 M44,34 Q40,39 38,37 M44,34 Q48,39 50,37" stroke="#5F5148" stroke-width="1.2" stroke-linecap="round" fill="none" />
            </svg>
          </div>

          <NuxtLink
            to="/works"
            class="relative z-10 px-8 py-3 rounded-lg bg-teal text-white font-medium transition-colors duration-200 hover:bg-[#1E7B6E]"
          >
            查看所有作品
          </NuxtLink>

          <!-- Cat tail -->
          <div class="opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 pointer-events-none -mt-2">
            <img class="wag-tail block" src="/images/tail.svg" alt="" width="41" height="60" />
          </div>
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
