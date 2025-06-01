<template>
  <div class="max-w-md mx-auto p-4 bg-white-100 rounded shadow mt-6">
    <h2 class="text-xl font-bold mb-4">Car Details</h2>
    <p><strong>Name:</strong> {{ car.name }}</p>
    <p><strong>Model:</strong> {{ car.model }}</p>
    <p><strong>Year:</strong> {{ car.year }}</p>
    <p><strong>Price:</strong> {{ car.price }}</p>
    <router-link
      :to="{ path: `/book/${id}`, query: { step: 'address' } }"
      class="mt-4 inline-block bg-red-500 text-white py-2 px-4  rounded hover:bg-blue-700 transition"
    >
      Book Now
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['id']);
const { id } = props;

const car = ref({});

const cars = {
  
  '10': { name: 'Mahindra 100', model: 'XUV100', year: 2022, price: '$10,000' },
  '200': { name: 'Mahindra 200', model: 'XUV200', year: 2023, price: '$12,000' },
  '300': { name: 'Mahindra 300', model: 'XUV300', year: 2024, price: '$14,000' },
  '400': { name: 'Mahindra 400', model: 'XUV400', year: 2024, price: '$16,000' },

  
  '11': { name: 'Tata Nexon', model: 'Nexon XZ', year: 2022, price: '$11,000' },
  '21': { name: 'Tata Harrier', model: 'Harrier XT', year: 2023, price: '$15,000' },
  '31': { name: 'Tata Safari', model: 'Safari LX', year: 2024, price: '$18,000' },


  '12': { name: 'Maruti Swift', model: 'Swift VXi', year: 2021, price: '$8,000' },
  '22': { name: 'Maruti Baleno', model: 'Baleno Alpha', year: 2023, price: '$9,500' },

  
  '13': { name: 'Hyundai Creta', model: 'Creta SX', year: 2022, price: '$13,000' },
  '23': { name: 'Hyundai Venue', model: 'Venue S', year: 2023, price: '$12,000' }
};

onMounted(() => {
  car.value = cars[id] || { name: 'Unknown', model: '-', year: '-', price: '-' };
});
</script>
