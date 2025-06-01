<template>
  <div class="max-w-md mx-auto mt-8 p-6 border rounded bg-white shadow">
    <h2 class="text-2xl font-semibold mb-4">Booking Your Car: {{ carId }}</h2>
    <h3 class="text-lg mb-6">Step 1: Enter Delivery Address</h3>
    <form @submit.prevent="emitGoToPayment" class="space-y-4">
      <div>
        <label class="block mb-1 font-medium">Name:</label>
        <input
          v-model="booking.address.name"
          required
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div>
        <label class="block mb-1 font-medium">Street:</label>
        <input
          v-model="booking.address.street"
          required
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div>
        <label class="block mb-1 font-medium">City:</label>
        <input
          v-model="booking.address.city"
          required
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div>
        <label class="block mb-1 font-medium">Zip Code:</label>
        <input
          v-model="booking.address.zip"
          required
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-red-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Next
      </button>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(['carId', 'booking']);
const emit = defineEmits(['navigate']);
function emitGoToPayment() {
  emit('navigate', 'payment');
}
</script>
