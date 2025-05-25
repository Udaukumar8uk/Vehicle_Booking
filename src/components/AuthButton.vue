<template>
<<<<<<< Updated upstream
  <button class="auth-btn" :type="type">
=======
  <button
    class="bg-red-500 text-white px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-blue-600 transition"
    :type="type"
  >
>>>>>>> Stashed changes
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, default: 'button' }
})
</script>

<style scoped>
.auth-btn {
  background-color: #3498db;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.auth-btn:hover {
  background-color: #2980b9;
}
</style>
