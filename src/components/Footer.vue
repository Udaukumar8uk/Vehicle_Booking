<script setup>
function logout() {
  localStorage.removeItem('loggedIn')
  window.location.href = '/login' // or use replace to avoid back navigation
}
</script>

<template>
<<<<<<< Updated upstream
  <div class="footer">
    <button class="logout-btn" @click="logout">Logout</button>
=======
  <div class="flex justify-center items-center p-4">
    <button
      @click="logout"
      class="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
    >
      Logout
    </button>
>>>>>>> Stashed changes
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #eee;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;
  z-index: 1000; /* keep it above other elements */
}

.logout-btn {
  padding: 0.5rem 1rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #c0392b;
}
</style>
