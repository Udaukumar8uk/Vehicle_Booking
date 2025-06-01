<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const cars = [
  { name: 'Mahindra', image: '/mahindra.jpg', brand: 'mahindra' },
  { name: 'Tata', image: '/tata.jpg', brand: 'tata' },
  { name: 'Maruti Suzuki', image: '/maruti.jpg', brand: 'maruti' },
  { name: 'Hyundai', image: '/hyundai.jpg', brand: 'hyundai' },
];

function goToCarPage(car) {
  router.push({
    path: '/car-brands/cars',
    state: { brand: car.brand } 
  });
}
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Choose a Car Brand</h2>

    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="car in cars"
        :key="car.name"
        @click="goToCarPage(car)"
        class="cursor-pointer bg-white rounded-xl shadow p-4 w-48 hover:shadow-md hover:-translate-y-1 transition"
      >
        <img
          :src="car.image"
          :alt="car.name"
          class="w-full h-28 object-cover rounded-lg"
        />
        <h3 class="mt-2 text-md font-semibold text-gray-700 text-center">{{ car.name }}</h3>
      </div>
    </div>
  </div>
</template>
