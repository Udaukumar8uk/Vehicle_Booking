<template>
  <div class="max-w-md mx-auto mt-8 p-6 border rounded bg-gray-50 text-center text-gray-800 shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-blue-700">Your Booked Car: {{ carName }}</h2>
    <h3 class="text-lg mb-2 font-semibold text-green-600">Booking Confirmed!</h3>
    <p class="mb-4 text-gray-600">Your {{ carName }} has been booked successfully.</p>
    <p class="font-semibold text-gray-700">Delivery to:</p>
    <p class="mb-2 text-gray-600">
      {{ booking.address.name }}, {{ booking.address.street }},<br />
      {{ booking.address.city }} - {{ booking.address.zip }}
    </p>
    <p class="mb-6 text-gray-700">Payment Method: <span class="font-medium">{{ booking.paymentMethod }}</span></p>
    <a href="/welcome" class="inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-blue-700 transition">
      Back to Main Menu
    </a>
  </div>
</template>

<script setup>
const props = defineProps(['carName', 'booking']);
</script>
