<template>
  <div class="p-relative border-sm rounded h-100">
    <div class="text-subtitle-2 bg-surface ml-2 px-2" style="position: absolute; margin-top: -0.75em; float: left">
      {{ title }}
    </div>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
	title?: string
}

const { title } = defineProps<Props>()
</script>
