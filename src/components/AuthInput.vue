<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full px-3 py-2 mb-4 rounded border border-gray-300 text-base transition-colors duration-300 focus:outline-none focus:border-gray-800"
  />
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: { type: String, required: true },
})
</script>
