<template>
  <div>
    <nav class="bg-gray-900 px-8 py-4">
      <ul class="flex gap-6 items-center m-0 p-0 list-none">
        <li>
          <router-link
            to="/car-brands"
            class="text-white font-semibold no-underline hover:bg-blue-700 transition  "
            active-class="border-b-2 border-white"
          >
            CarBrands
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="text-white font-semibold no-underline hover:bg-blue-700 transition "
            active-class="border-b-2 border-white"
          >
            About Us
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="text-white font-semibold no-underline hover:bg-blue-700 transition "
            active-class="border-b-2 border-white"
          >
            Contact
          </router-link>
        </li>
        
      </ul>
    </nav>

    <section class="relative text-center text-white">
      <img
        :src="imageUrl"
        alt="Car Showroom"
        class="w-full max-h-[450px] object-cover brightness-50"
      />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
        <h1 class="text-5xl mb-2 text-red-600 font-bold">Welcome to Car Showroom</h1>
        <p class="text-xl text-gray-200">Book your favorite car online with ease.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const imageUrl = '/car-banner.jpeg' // make sure this image is in public folder

function handleLogout() {
  localStorage.removeItem('loggedIn')
  router.push('/login')
}
</script>
