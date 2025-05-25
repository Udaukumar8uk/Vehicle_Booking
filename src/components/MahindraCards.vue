<template>
  <div class="flex justify-center gap-6 flex-wrap p-8">
    <router-link
      v-for="car in cars"
      :key="car.id"
      :to="`/mahindra/${car.id}`"
      class="no-underline text-inherit"
    >
      <div
        class="bg-gray-50 px-4 py-5 w-52 rounded-xl shadow-md text-center cursor-pointer transform transition-transform duration-200 hover:scale-105"
      >
        <h3 class="text-lg font-semibold text-gray-800">{{ car.name }}</h3>
        <p class="text-sm text-gray-600">{{ car.model }}</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
const cars = [
  { id: '100', name: 'Mahindra 100', model: 'XUV100' },
  { id: '200', name: 'Mahindra 200', model: 'XUV200' },
  { id: '300', name: 'Mahindra 300', model: 'XUV300' },
  { id: '400', name: 'Mahindra 400', model: 'XUV400' }
];
</script>
