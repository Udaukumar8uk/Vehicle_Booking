<template>
  <div class="booking-container">
    <component
      :is="currentStepComponent"
      :carName="carName"
      :booking="booking"
      @navigate="navigateStep"
    />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddressStep from '../components/AddressStep.vue'
import PaymentStep from '../components/PaymentStep.vue'
import ConfirmationStep from '../components/ConfirmationStep.vue'

const route = useRoute()
const router = useRouter()
const carName = computed(() => route.params.carName || 'Car')
const currentStep = computed(() => route.query.step || 'address')

const booking = reactive({
  address: {
    name: '',
    street: '',
    city: '',
    zip: ''
  },
  paymentMethod: ''
})

const stepsMap = {
  address: AddressStep,
  payment: PaymentStep,
  confirmation: ConfirmationStep
}

const currentStepComponent = computed(() => stepsMap[currentStep.value] || AddressStep)

function navigateStep(nextStep) {
  router.push({
    path: `/book/${carName.value}`,
    query: { step: nextStep }
  })
}
</script>


