<template>
  <button
    class="bg-blue-500 text-white px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-blue-600 transition"
    :type="type"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, default: 'button' }
})
</script>


