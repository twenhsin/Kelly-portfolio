<template>
  <div style="overflow-x: hidden">
    <!-- ─────────────────────────────────────────────
         Section 1 — MY STORY
    ───────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-20">
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
            每個轉折都是一次重新定義——<br>
            設計如此，<br>
            工作方式亦然。
          </h1>
        </div>

        <!-- Right: paragraph with teal bg + corner decorations (~45%) -->
        <div v-reveal="{ delay: 200 }" class="story-box story-desc-block">
          <p class="text-sm text-gray-600 leading-loose mb-4">
            法國當代藝術碩士訓練出我的思辨底子——視覺是思維的具象，不是目的本身。
          </p>
          <p class="text-sm text-gray-600 leading-loose mb-4">
            踏入產品設計後，我更在意的是功能規劃、流程架構與策略判斷——介面是結果，不是起點。
          </p>
          <p class="text-sm text-gray-600 leading-loose mb-4">
            歷經接案、新創、中大型公司與跨國團隊，從網頁設計、UIUX、產品設計到兼任 PM——這條路讓我同時懂得設計語言、產品邏輯與團隊協作。
          </p>
          <p class="text-sm text-gray-600 leading-loose">
            面對 AI 時代，我選擇主動定義新的工作方式：不只會用工具，而是建立人與 AI 協作的流程，讓設計決策走得更遠。
          </p>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────
         Section 2 — 設計主張
    ───────────────────────────────────────────── -->
    <section class="bg-gray-50 py-20" style="position: relative; z-index: 0">
      <div class="max-w-6xl mx-auto px-6">
        <div v-reveal class="mb-10">
          <h2 class="text-2xl font-bold text-navy mb-2">設計主張</h2>
          <div class="w-8 h-1 bg-teal rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            v-reveal
            title="關於設計思維"
            description="視覺是思維的具象——先定義問題，再定義解法，介面是呈現產品價值。"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 150 }"
            title="關於系統與流程"
            description="好的設計系統讓實踐有依據，迭代有基礎。AI 執行，人做決策，讓協作更有效率。"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </template>
          </SkillCard>

          <SkillCard
            v-reveal="{ delay: 300 }"
            title="關於團隊協作"
            description="跨角色溝通是設計工作的核心之一——讓設計決策被理解，才能真正落地。"
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
         Section 3 — 工作與學習歷程
    ───────────────────────────────────────────── -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-6">
        <h2 v-reveal class="text-2xl font-bold text-navy text-center mb-16">工作與學習歷程</h2>

        <!-- Fixed-height scrollable timeline (no scrollbar) -->
        <div v-reveal="{ delay: 150 }" class="timeline-scroll" style="height: 70vh; overflow-y: auto;">
          <div class="relative py-4 px-2">

            <!-- Desktop: center vertical line -->
            <div class="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <!-- Mobile: left vertical line aligned to icon center (icon offset = 18px = half of w-9) -->
            <div class="absolute md:hidden top-0 bottom-0 w-px bg-gray-200" style="left: 1.125rem" />

            <!-- Timeline items -->
            <div
              v-for="(item, i) in timeline"
              :key="i"
              class="mb-10 last:mb-0"
            >
              <!-- ── Mobile layout: icon left, card right ── -->
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

              <!-- ── Desktop layout: left-right alternating ── -->
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
    title: 'UI/UX 設計師',
    company: 'Kylab',
    period: '2024／02 － 現在',
    description: '作為唯一網頁設計師，獨立主導官網與多語系前端開發，深化 Vue／Nuxt 獨立開發能力。',
    fullDescription: '作為團隊唯一的網頁設計師，獨立主導公司官網與多語系前端開發。在需求尚未明確時主動規劃工作進程，向企劃取得對應資訊，並主導不同官網的視覺風格定義。收購案後快速掌握 Docsify 平台運作，獨立完成內容調整與版面優化。同時自主規劃會員後台管理架構，深化 Vue／Nuxt 獨立開發能力。',
  },
  {
    type: 'work',
    side: 'left',
    title: '資深 UI/UX 設計師（設計主管）',
    company: 'Maxity',
    period: '2021／10 － 2024／02',
    description: '帶領最多 13 人設計團隊，主導 NFT 慈善平台與區塊鏈 App 產品設計，建立設計評核機制。',
    fullDescription: '帶領最多達 13 人的設計團隊，負責 NFT 慈善募款平台與區塊鏈步行 App 的產品設計。在團隊對官網結構與內容尚無概念時，主動提供框架與內容建議供團隊參考調整。全程參與功能流程規劃，製作各階段 Prototype 供測試，並根據用戶回饋謹慎評估優化需求，持續降低操作難度。向 PM 提出流程改善建議，提升平台使用流暢度與互動直覺性。團隊管理上，建立以成長目標為導向的評核機制；在成員無法如期完成任務時主動承擔，確保專案進程不中斷。',
  },
  {
    type: 'work',
    side: 'right',
    title: '產品設計師',
    company: 'TXI Partners',
    period: '2020／07 － 2021／10',
    description: '負責 AR/VR 教育平台全程產品設計，PM 空窗期主動承擔規劃職責，獨立主導所有產品設計。',
    fullDescription: '負責 AR/VR 結合 3D 技術的線上教育平台產品設計，涵蓋企業版與補習班版，並根據 3D 模型條件設計對應的互動介面。與 PO/PM 共同討論功能規劃與產品方向，共同定案。PM 空窗期間主動承擔 PM 職責，獨立規劃功能流程、開發進程與設計規格。所有產品均由我主導規劃設計，包含公司官網，並於接案期間額外負責客戶 Logo 與官網設計。',
  },
  {
    type: 'work',
    side: 'left',
    title: '資深 UI/UX 設計師',
    company: 'MyCoach',
    period: '2018／04 － 2019／12',
    description: '為法國新創公司設計多項運動管理平台，建立 Template 系統大幅縮短提案時程。',
    fullDescription: '任職於法國新創公司，負責多項運動管理平台（WebApp + App）的 UI/UX 設計，涵蓋足球、籃球等多個運動領域。將既有平台視覺與結構優化後建立 Template 系統，使團隊在與新運動夥伴洽談合作時，能快速提供可操作的 Prototype，大幅縮短提案時程。根據各運動項目不同的功能需求，靈活調整 Template 落地執行，並針對各運動項目設計專屬場地、人物與器具等視覺元件。同時負責公司官網、社群媒體視覺與活動行銷素材設計。以高執行速度與穩定的視覺品質獲得團隊高度認可。',
  },
  {
    type: 'work',
    side: 'right',
    title: '產品設計師',
    company: 'Freelance',
    period: '2016／04 － 2018／04',
    description: '主導 English4Taiwan 教學平台產品規劃與設計，協助建立外包開發團隊並執行 QA 測試。',
    fullDescription: '主導 English4Taiwan 線上英語教學平台的產品規劃與設計，涵蓋產品方向定義、功能架構、流程規劃與 UI/UX 設計。協助客戶尋找並確立穩定的前後端外包開發團隊，並執行開發後的 QA 測試。同時主動向客戶提出將線上直播教學轉型為影片錄製模式的產品方向建議，以解決時差問題與師資人力不足的瓶頸。',
  },
  {
    type: 'work',
    side: 'left',
    title: 'UI 設計師',
    company: 'TutorABC',
    period: '2016／03 － 2016／09',
    description: '負責 TutorABC、TutorJr、VIPABC 等多品牌官網與平台 UI 設計。',
    fullDescription: '負責大型線上英語教育平台的官網與平台 UI 設計，涵蓋 TutorABC、TutorJr、VIPABC、iTutorGroup 等多個品牌。與 UX 團隊協作規劃流程與介面配置，依據 CIS 規範執行視覺設計。',
  },
  {
    type: 'work',
    side: 'right',
    title: '網頁設計師',
    company: 'Freelance',
    period: '2014／09 － 2016／02',
    description: '承接 iHealth Care 美國醫療平台官網與 App 設計，獨立完成 UI 設計與前端切版。',
    fullDescription: '承接美國醫療平台 iHealth Care 的官網與 App 設計專案。官網由我獨立完成 UI 設計與 RWD 前端切版；App 介面設計完成後提交工程師進行開發。',
  },
  {
    type: 'work',
    side: 'left',
    title: '網頁設計師',
    company: '大智廣告設計',
    period: '2013／03 － 2014／08',
    description: '為全家、渣打、中國信託、家樂福等大型品牌執行網站與 App UI 設計及前端切版。',
    fullDescription: '任職於接案公司，與安捷達設計公司合作，為全家、渣打銀行、中國信託、家樂福等大型品牌執行網站與 App UI 設計及前端切版，並製作網站廣告視覺素材。',
  },
  {
    type: 'work',
    side: 'right',
    title: '網頁設計師',
    company: 'Freelance',
    period: '2012／02 － 2013／01',
    description: '參與中華電信 MOD 介面切版，並協助接案公司執行官網 UI 設計與前端切版。',
    fullDescription: '先後參與銘島設計公司與中華電信 MOD 合作專案，負責介面切版；後於傳聲筒科技公司協助設計接案官網，執行 UI 設計與前端切版。',
  },
  {
    type: 'education',
    side: 'left',
    title: '當代藝術創作 碩士',
    company: '法國尼斯 Villa Arson 國立高等藝術學院',
    period: '2007 － 2010',
    description: '',
  },
  {
    type: 'education',
    side: 'right',
    title: '當代藝術創作 學士',
    company: '法國勒亞法市立美術學院',
    period: '2005 － 2007',
    description: '',
  },
  {
    type: 'education',
    side: 'left',
    title: '美勞教育系 學士',
    company: '台中師範學院',
    period: '1999 － 2003',
    description: '',
  },
]
</script>

<style scoped>
/* MY STORY layout */
.story-layout {
  position: relative;
}

.story-title-block {
  width: 60%;
}

/* Description block: absolute on desktop, normal flow on mobile */
.story-desc-block {
  position: relative;
  z-index: 2;
  margin-top: 2rem;
}

@media (min-width: 1024px) {
  .story-layout {
    min-height: 80vh;
    overflow: visible;
  }

  .story-desc-block {
    position: absolute;
    right: calc(8% + 80px);
    top: calc(50% - 120px);
    transform: translateY(-50%);
    width: calc(45% + 32px);
    margin-top: 0;
  }
}

/* MY STORY right block */
.story-box {
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
