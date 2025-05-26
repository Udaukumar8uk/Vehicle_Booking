<template>
  <div class="p-8 text-center bg-gray-50">
    <h2 class="text-3xl mb-8 text-gray-800 font-semibold">Choose Your Car Brand</h2>
    <div class="flex justify-center gap-8 flex-wrap">
      <div
        v-for="car in cars"
        :key="car.name"
        @click="goToCarPage(car)"
        :class="[
          'bg-white rounded-xl shadow-md p-4 w-56 transition-transform duration-200',
          car.route ? 'cursor-pointer hover:-translate-y-1 hover:shadow-lg' : 'cursor-default'
        ]"
      >
        <img
          :src="car.image"
          :alt="car.name"
          class="w-full h-36 object-cover rounded-lg"
        />
        <h3 class="mt-3 text-lg font-medium text-gray-700">{{ car.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const cars = [
  {
    name: 'Mahindra',
    image: '/mahindra.jpg',
    route: '/mahindra'
  },
  {
    name: 'Tata',
    image: '/tata.jpg'
  },
  {
    name: 'Maruti Suzuki',
    image: '/maruti.jpg'
  },
  {
    name: 'Hyundai',
    image: '/hyundai.jpg'
  }
]

function goToCarPage(car) {
  if (car.route) {
    router.push(car.route)
  }
}
</script>
