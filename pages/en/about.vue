<template>
  <div style="overflow-x: hidden">
    <!-- ─────────────────────────────────────────────
         Section 1 — MY STORY
    ───────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-16 md:pb-64">
      <div class="story-layout">

        <!-- Left: label + title (~60%) -->
        <div v-reveal class="story-title-block">
          <!-- Badge -->
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6" style="background: rgba(42, 157, 143, 0.15); color: #2A9D8F; border-radius: 999px; white-space: nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            My Story
          </span>

          <!-- Title: forced 3-line break -->
          <h1 class="text-4xl md:text-5xl font-bold text-navy text-left" style="line-height: 1.4">
            Every pivot is an act of redefinition—<br>
            in design,<br>
            and in how we work.
          </h1>
        </div>

        <!-- Right: paragraph with teal bg + corner decorations (~45%) -->
        <div class="story-desc-block story-box">
          <p class="text-sm text-gray-600 leading-loose mb-4">
            My MFA in Contemporary Art in France forged my critical thinking: Visuals are the manifestation of thought, not the end goal itself.
          </p>
          <p class="text-sm text-gray-600 leading-loose mb-4">
            In product design, my focus shifted to functional planning, architecture, and strategy—the interface is a result, not the starting point.
          </p>
          <p class="text-sm text-gray-600 leading-loose mb-4">
            From freelancing and startups to multinational corporations, transitioning from Web and UI/UX to Product Design and PM roles—this journey made me fluent in design language, product logic, and team synergy.
          </p>
          <p class="text-sm text-gray-600 leading-loose">
            In the AI era, I choose to proactively define new paradigms: not just using tools, but building human-AI collaborative workflows that push design decisions further.
          </p>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Section 2 — Design Philosophy
    ───────────────────────────────────────────── -->
    <section class="bg-gray-50 py-20" style="position: relative; z-index: 0">
      <div class="max-w-6xl mx-auto px-6">
        <div v-reveal class="mb-10 text-center">
          <h2 class="text-3xl font-bold text-navy mb-2">Design Philosophy</h2>
          <div class="w-8 h-1 bg-teal rounded-full mx-auto" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            v-reveal
            title="On Design Thinking"
            description="Visuals are the manifestation of thought—define the problem before defining the solution; the interface exists to manifest product value."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 150 }"
            title="On Systems & Processes"
            description="A robust design system provides the foundation for implementation and the basis for iteration. With AI executing and humans deciding, collaboration becomes more efficient."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 300 }"
            title="On Team Collaboration"
            description="Cross-functional communication is at the core of design work—only when design decisions are understood can they truly be implemented."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </template>
          </SkillCard>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Section 3 — Experience & Education
    ───────────────────────────────────────────── -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-6">
        <div v-reveal class="text-center mb-16">
          <h2 class="text-3xl font-bold text-navy mb-2">Experience & Education</h2>
          <div class="w-8 h-1 bg-teal rounded-full mx-auto" />
        </div>

        <!-- Fixed-height scrollable timeline (no scrollbar) -->
        <div v-reveal="{ delay: 150 }" class="timeline-scroll" style="height: 70vh; overflow-y: auto;">
          <div class="relative py-4 px-2">

            <!-- Desktop: center vertical line -->
            <div class="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <!-- Mobile: left vertical line aligned to icon center -->
            <div class="absolute md:hidden top-0 bottom-0 w-px bg-gray-200" style="left: 1.125rem" />

            <!-- Timeline items -->
            <div
              v-for="(item, i) in timeline"
              :key="i"
              class="mb-10 last:mb-0"
            >
              <!-- Mobile layout -->
              <div class="flex md:hidden gap-4 items-start">
                <div
                  class="relative z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-white"
                  :class="item.type === 'work' ? 'border border-teal' : 'border border-navy'"
                >
                  <svg v-if="item.type === 'work'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div class="flex-1 timeline-card">
                  <span class="timeline-period-badge inline-block mb-2">{{ item.period }}</span>
                  <h3 class="text-base font-bold text-navy leading-snug mb-1">{{ item.title }}</h3>
                  <p class="text-xs text-teal mb-2">{{ item.company }}</p>
                  <p class="text-sm text-gray-500 leading-relaxed">{{ item.description }}</p>
                  <button v-if="item.type === 'work'" class="more-btn" @click="openModal(item)">more +</button>
                </div>
              </div>

              <!-- Desktop layout: left-right alternating -->
              <div
                class="hidden md:grid items-center"
                style="grid-template-columns: 1fr 4rem 1fr"
              >
                <div class="pr-6">
                  <div v-if="item.side === 'left'" class="timeline-card">
                    <div class="flex items-start justify-between gap-2 mb-1">
                      <h3 class="text-base font-bold text-navy leading-snug">{{ item.title }}</h3>
                      <span class="timeline-period-badge flex-shrink-0">{{ item.period }}</span>
                    </div>
                    <p class="text-xs text-teal mb-2">{{ item.company }}</p>
                    <p class="text-sm text-gray-500 leading-relaxed">{{ item.description }}</p>
                    <button v-if="item.type === 'work'" class="more-btn" @click="openModal(item)">more +</button>
                  </div>
                </div>
                <div class="flex justify-center">
                  <div
                    class="relative z-10 w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center bg-white"
                    :class="item.type === 'work' ? 'border border-teal' : 'border border-navy'"
                  >
                    <svg v-if="item.type === 'work'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                </div>
                <div class="pl-6">
                  <div v-if="item.side === 'right'" class="timeline-card">
                    <div class="flex items-start justify-between gap-2 mb-1">
                      <h3 class="text-base font-bold text-navy leading-snug">{{ item.title }}</h3>
                      <span class="timeline-period-badge flex-shrink-0">{{ item.period }}</span>
                    </div>
                    <p class="text-xs text-teal mb-2">{{ item.company }}</p>
                    <p class="text-sm text-gray-500 leading-relaxed">{{ item.description }}</p>
                    <button v-if="item.type === 'work'" class="more-btn" @click="openModal(item)">more +</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Transition name="modal-fade">
      <div v-if="modalItem" class="modal-overlay" @click.self="closeModal">
        <div class="modal-box">
          <button class="modal-close" @click="closeModal">✕</button>
          <div class="flex items-start justify-between gap-3 mb-2">
            <h3 class="text-lg font-bold text-navy leading-snug">{{ modalItem.title }}</h3>
            <span class="timeline-period-badge flex-shrink-0">{{ modalItem.period }}</span>
          </div>
          <p class="text-sm text-teal mb-4">{{ modalItem.company }}</p>
          <p class="text-sm text-gray-600 leading-relaxed">{{ modalItem.fullDescription }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modalItem = ref(null)
const openModal = (item) => { modalItem.value = item }
const closeModal = () => { modalItem.value = null }

const timeline = [
  {
    type: 'work',
    side: 'right',
    title: 'UI/UX Designer',
    company: 'Kylab',
    period: '2024/02 — Present',
    description: 'As the sole Web Designer, independently leading official website and multi-language frontend development while deepening proficiency in Vue / Nuxt.',
    fullDescription: "Serving as the team's sole Web Designer, I independently lead the design and multi-language frontend development of the corporate website. I proactively plan workflows and gather necessary information from stakeholders when requirements are ambiguous, defining visual styles for various brand sites. Post-acquisition, I rapidly mastered the Docsify platform to complete content adjustments and layout optimizations. Additionally, I autonomously architected the member backend management system, further strengthening my independent development capabilities in Vue and Nuxt.",
  },
  {
    type: 'work',
    side: 'left',
    title: 'Senior UI/UX Designer (Design Lead)',
    company: 'Maxity',
    period: '2021/10 — 2024/02',
    description: 'Led a design team of up to 13 members, spearheading product design for an NFT charity platform and blockchain App while establishing design evaluation mechanisms.',
    fullDescription: 'Managed a design team of up to 13 people, responsible for the product design of an NFT charity fundraising platform and a blockchain-based "Move-to-Earn" App. I proactively provided structural frameworks and content strategic suggestions when the team lacked initial direction. I was fully involved in feature flow planning, creating prototypes at various stages for user testing, and meticulously evaluating optimization needs based on feedback to reduce operational friction. I proposed workflow improvements to PMs to enhance platform fluidity and interaction intuition. In terms of management, I established a growth-oriented evaluation mechanism and personally took on tasks when members faced delays to ensure uninterrupted project progress.',
  },
  {
    type: 'work',
    side: 'right',
    title: 'Product Designer',
    company: 'TXI Partners',
    period: '2020/07 — 2021/10',
    description: 'Responsible for the end-to-end product design of an AR/VR education platform; stepped in as acting PM to lead functional planning and design specifications.',
    fullDescription: 'Led the product design for an online education platform integrating AR/VR and 3D technology, covering both Enterprise and Cram School versions. I designed interactive interfaces tailored to 3D model constraints and collaborated with POs/PMs to define product direction. During a PM vacancy, I proactively assumed PM responsibilities, independently planning functional flows, development milestones, and design specifications. I spearheaded the planning and design of all products, including the corporate website, and handled client branding and web design during agency projects.',
  },
  {
    type: 'work',
    side: 'left',
    title: 'Senior UI/UX Designer',
    company: 'French Startup',
    period: '2018/04 — 2019/12',
    description: 'Designed multiple sports management platforms for a French startup; established a template system that significantly accelerated the proposal phase.',
    fullDescription: 'Based in a French startup, I was responsible for the UI/UX design of multiple sports management platforms (WebApp + App), spanning football, basketball, and other disciplines. I optimized existing visual structures to establish a template system, allowing the team to rapidly provide operable prototypes when negotiating with new sports partners, which significantly shortened the proposal timeline. I flexibly adapted these templates to meet specific functional requirements for different sports and designed exclusive visual assets, including venues, characters, and equipment. I also managed corporate branding, social media visuals, and marketing collateral, earning high recognition for my execution speed and consistent visual quality.',
  },
  {
    type: 'work',
    side: 'right',
    title: 'Product Designer / UI Designer',
    company: '2016 — 2018',
    period: '2016 — 2018',
    description: 'Led the product planning and design for the English4Taiwan platform; also responsible for UI design for TutorABC, TutorJr, and VIPABC.',
    fullDescription: 'Product Designer (Freelance): Led the product planning and design for the English4Taiwan platform. I defined the product roadmap, functional architecture, and UI/UX design while assisting the client in establishing a stable outsourced development team and executing QA testing. I proactively suggested transitioning from live streaming to a video-on-demand model to solve timezone conflicts and teacher shortages.\n\nUI Designer (TutorABC): Responsible for UI design for major online English education brands including TutorABC, TutorJr, and VIPABC. Collaborated with the UX team on flow and interface layout, executing visual designs in strict accordance with CIS standards.',
  },
  {
    type: 'work',
    side: 'left',
    title: 'Web Designer (Freelance)',
    company: 'ITRI & iHealth Care',
    period: '2014/09 — 2016/02',
    description: "Undertook web and App design projects for ITRI's solar industry portal and the U.S. medical platform iHealth Care, independently completing UI design and frontend coding.",
    fullDescription: "Undertook web and App design projects for ITRI's solar industry portal and the U.S. medical platform iHealth Care. I independently completed UI design and RWD frontend coding for the websites, and delivered App interface designs to engineers for development.",
  },
  {
    type: 'work',
    side: 'right',
    title: 'Web Designer',
    company: 'Bigwit Ad Design',
    period: '2013/03 — 2014/08',
    description: 'Collaborated with Ogilvy & Mather to execute website and App UI design and frontend coding for major brands including FamilyMart, Standard Chartered, CTBC Bank, and Carrefour.',
    fullDescription: 'Collaborated with Ogilvy & Mather to execute website and App UI design and frontend coding for major brands including FamilyMart, Standard Chartered, CTBC Bank, and Carrefour. Also produced visual assets for digital advertising.',
  },
  {
    type: 'work',
    side: 'left',
    title: 'Web Designer (Freelance)',
    company: 'Chunghwa Telecom MOD & Various Agencies',
    period: '2012/02 — 2013/01',
    description: 'Participated in the interface coding for Chunghwa Telecom MOD projects in collaboration with Ming Island Design. Later assisted agencies in UI design and frontend coding for various client websites.',
    fullDescription: 'Participated in the interface coding for Chunghwa Telecom MOD projects in collaboration with Ming Island Design. Later assisted agencies in UI design and frontend coding for various client websites.',
  },
  {
    type: 'education',
    side: 'right',
    title: 'MFA in Contemporary Art',
    company: 'Villa Arson National School of Fine Arts, Nice, France',
    period: '2007 — 2010',
    description: '',
  },
  {
    type: 'education',
    side: 'left',
    title: 'BFA in Contemporary Art',
    company: 'Le Havre School of Art & Design, France',
    period: '2005 — 2007',
    description: '',
  },
  {
    type: 'education',
    side: 'right',
    title: 'B.Ed. in Fine Arts Education',
    company: 'National Taichung University of Education, Taiwan',
    period: '1999 — 2003',
    description: '',
  },
]
</script>

<style scoped>
/* MY STORY layout — mobile first */
.story-layout {
  position: relative;
}

.story-title-block {
  width: 100%;
}

.story-desc-block {
  position: relative;
  width: 100%;
  margin-top: 2rem;
}

/* Desktop: absolute overlay on the right */
@media (min-width: 1024px) {
  .story-layout {
    position: relative;
    min-height: 420px;
  }

  .story-title-block {
    width: 100%;
  }

  .story-desc-block {
    position: absolute !important;
    right: calc(20% - 120px);
    top: 40%;
    width: 48%;
    margin-top: 0;
    z-index: 1;
  }
}

/* MY STORY right block */
.story-box {
  position: relative;
  background: rgba(42, 157, 143, 0.08);
  border-radius: 12px;
  padding: 32px;
}
.story-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border-top: 8px solid #2A9D8F;
  border-left: 8px solid #2A9D8F;
  border-radius: 2px 0 0 0;
}
.story-box::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  border-bottom: 8px solid #2A9D8F;
  border-right: 8px solid #2A9D8F;
  border-radius: 0 0 2px 0;
}

/* Timeline cards */
.timeline-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 24px;
}

.timeline-period-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 999px;
  background: rgba(42, 157, 143, 0.15);
  color: #2A9D8F;
  white-space: nowrap;
}

/* More button */
.more-btn {
  margin-top: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #2A9D8F;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}
.more-btn:hover {
  opacity: 0.75;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 24px;
}

.modal-box {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1rem;
  color: #9ca3af;
  cursor: pointer;
  line-height: 1;
}
.modal-close:hover {
  color: #1B2A4A;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Timeline scrollbar */
.timeline-scroll::-webkit-scrollbar {
  display: none;
}
.timeline-scroll {
  scrollbar-width: none;
}
</style>
