<template>
  <div class="bg-white rounded-xl p-6 flex flex-col gap-3">
    <div class="w-10 h-10 flex items-center justify-center rounded-lg" style="background-color: rgba(42, 157, 143, 0.1)">
      <slot name="icon" />
    </div>
    <h3 class="text-base font-semibold text-navy">{{ title }}</h3>
    <p class="text-sm text-gray-500 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>
