<template>
  <NuxtLink
    :to="to"
    class="group flex flex-col gap-6 cursor-pointer items-center md:gap-10"
    :class="reverse ? 'md:flex-row-reverse' : 'md:flex-row'"
  >
    <!-- Cover image -->
    <div class="w-full md:w-1/2 shrink-0 aspect-[4/3] rounded-2xl overflow-hidden" :style="image ? {} : { background: gradient }">
      <img v-if="image" :src="image" alt="" class="w-full h-full object-cover" />
    </div>

    <!-- Content -->
    <div class="flex-1 flex flex-col gap-4 px-4 md:px-16">
      <span class="text-xs text-teal font-medium tracking-wide uppercase">{{ type }}</span>

      <h3 class="text-xl font-bold text-navy leading-snug transition-all duration-300 group-hover:text-2xl">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-500 leading-relaxed">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs px-3 py-1 rounded-full"
          style="background: #F3F5F7; color: #6E7987"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, default: '#' },
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, default: () => [] },
  gradient: { type: String, default: 'linear-gradient(135deg, #f4a97f, #e8856a)' },
  image: { type: String, default: '' },
  reverse: { type: Boolean, default: false },
})
</script>
