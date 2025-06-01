<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const router = useRouter();
const models = ref([]);
const brand = ref('');

const allCarModels = {
  mahindra: [
    { id: '10', name: 'Mahindra 100', image: '/mahindra100.jpg' },
    { id: '200', name: 'Mahindra 200', image: '/mahindra200.jpg' },
    { id: '300', name: 'Mahindra Thar', image: '/thar.jpg' },
    { id: '400', name: 'Mahindra Scorpio', image: '/scorpio.jpg' }
  ],
  tata: [
    { id: '10', name: 'Tata Nano', image: '/nano.jpg' },
    { id: '200', name: 'Tata Tiago', image: '/tiago.jpg' },
    { id: '300', name: 'Tata Harrier', image: '/harrier.jpg' },
    { id: '400', name: 'Tata Nexon', image: '/nexon.jpg' }
  ],
  hyundai: [
    { id: '10', name: 'Hyundai i10', image: '/i10.jpg' },
    { id: '200', name: 'Hyundai i20', image: '/i20.jpg' },
    { id: '300', name: 'Hyundai Creta', image: '/creta.jpg' },
    { id: '400', name: 'Hyundai Venue', image: '/venue.jpg' }
  ],
  maruti: [
    { id: '10', name: 'Swift', image: '/swift.jpg' },
    { id: '200', name: 'Baleno', image: '/baleno.jpg' },
    { id: '300', name: 'Alto', image: '/alto.jpg' },
    { id: '400', name: 'Ertiga', image: '/ertiga.jpg' }
  ]
};

onMounted(() => {
  const stateBrand = router.options.history.state?.brand;

  if (!stateBrand || !allCarModels[stateBrand]) {
    
    brand.value = 'mahindra';
  } else {
    brand.value = stateBrand;
  }

  models.value = allCarModels[brand.value];
});
</script>

<template>
  <div class="p-8 text-center">
    <h2 class="text-2xl font-semibold mb-6 capitalize">{{ brand }} Car Models</h2>

    <div class="flex justify-center gap-8 flex-wrap mt-4">
      <router-link
        v-for="model in models"
        :key="model.id"
        :to="`/car-brands/cars/${model.id}`"
        class="bg-white-100 p-4 w-56 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-105 text-inherit no-underline cursor-pointer"
      >
        <img
          :src="model.image"
          :alt="model.name"
          class="w-full h-36 object-cover rounded-md mb-2"
        />
        <h3 class="text-lg font-medium text-gray-800">{{ model.name }}</h3>
      </router-link>
    </div>
  </div>
</template>
