<template>
  <div class="p-8 text-center">
    <h2 class="text-2xl font-semibold mb-8">Mahindra Models</h2>
    <div class="flex justify-center gap-8 flex-wrap mt-4">
      <router-link
        v-for="model in mahindraModels"
        :key="model.name"
        :to="`/mahindra/${model.id}`"
        class="bg-white-100 p-4 w-56 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-105 text-inherit no-underline cursor-pointer"
      >
        <img
          :src="model.image"
          :alt="model.name"
          class="w-full h-36 object-cover rounded-md mb-2"
        />
        <h3 class="text-lg font-medium text-white-800">{{ model.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const mahindraModels = [
  { id: '100', name: 'Mahindra 100', image: '/mahindra100.jpg' },
  { id: '200', name: 'Mahindra 200', image: '/mahindra200.jpg' },
  { id: '300', name: 'Mahindra Thar', image: '/thar.jpg' },
  { id: '400', name: 'Mahindra Scorpio', image: '/scorpio.jpg' },
]
</script>
