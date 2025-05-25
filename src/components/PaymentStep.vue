<template>
  <div class="max-w-md mx-auto mt-8 p-6 border rounded bg-white shadow">
    <h2 class="text-2xl font-semibold mb-4">Booking Your Car: {{ carName }}</h2>
    <h3 class="text-lg mb-6">Step 2: Select Payment Option</h3>
    <form @submit.prevent="emitGoToConfirmation" class="space-y-4">
      <label class="flex items-center space-x-3">
        <input
          type="radio"
          value="Netbanking"
          v-model="booking.paymentMethod"
          required
          class="form-radio text-red-600"
        />
        <span>Netbanking</span>
      </label>
      <label class="flex items-center space-x-3">
        <input
          type="radio"
          value="Cash on Delivery"
          v-model="booking.paymentMethod"
          class="form-radio text-red-600"
        />
        <span>Cash on Delivery</span>
      </label>
      <button
        type="submit"
        class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors"
      >
        Confirm Booking
      </button>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(['carName', 'booking']);
const emit = defineEmits(['navigate']);
function emitGoToConfirmation() {
  emit('navigate', 'confirmation');
}
</script>
