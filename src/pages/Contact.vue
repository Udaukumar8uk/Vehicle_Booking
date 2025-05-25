<template>
  <div class="contact max-w-lg mx-auto p-8 bg-gray-100 rounded-lg">
    <h1 class="text-3xl font-semibold mb-4">Contact Us</h1>
    <p class="mb-6 text-gray-700">
      Have questions, feedback, or need support? We're here to help!
    </p>

    <form @submit.prevent="submitForm" class="space-y-5">
      <div>
        <label for="name" class="block mb-1 font-medium">Name:</label>
        <input
          id="name"
          v-model="form.name"
          required
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label for="email" class="block mb-1 font-medium">Email:</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label for="message" class="block mb-1 font-medium">Message:</label>
        <textarea
          id="message"
          rows="5"
          v-model="form.message"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

function submitForm() {
  alert(`Thanks, ${form.name}! We'll get back to you soon.`);
  form.name = '';
  form.email = '';
  form.message = '';
}
</script>
