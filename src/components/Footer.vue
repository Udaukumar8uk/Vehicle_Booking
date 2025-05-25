
<script setup>
function logout() {
  localStorage.removeItem('loggedIn')
  window.location.href = '/login' // or use replace to avoid back navigation
}
</script>

<template>
  <div class="flex justify-center items-center p-4">
    <button
      @click="logout"
      class="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
    >
      Logout
    </button>
  </div>
</template>