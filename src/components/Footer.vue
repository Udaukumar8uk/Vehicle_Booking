<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function logout() {
  localStorage.removeItem('loggedIn')
  router.push('/login')
}
</script>

<template>
  <div
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20 z-50"
  >
    <button
      @click="logout"
      class="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
    >
      Logout
    </button>
  </div>
</template>
