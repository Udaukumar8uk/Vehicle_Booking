<template>
  <div class="max-w-md mx-auto mt-20 bg-white p-10 rounded-2xl shadow-lg text-center">
    <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
    <div>
      <p v-if="isLogin" class="text-gray-600">
        Don’t have an account?
        <button class="text-blue-500 underline hover:text-blue-700 ml-1" @click="goToSignup">
          Sign up
        </button>
      </p>
      <p v-else class="text-gray-600">
        Already have an account?
        <button class="text-blue-500 underline hover:text-blue-700 ml-1" @click="goToLogin">
          Login
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  isLogin: { type: Boolean, default: true }
})

const emit = defineEmits(['navigate'])

function goToSignup() {
  emit('navigate', 'signup')
}

function goToLogin() {
  emit('navigate', 'login')
}
</script>

