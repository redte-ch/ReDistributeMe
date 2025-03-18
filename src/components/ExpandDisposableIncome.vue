<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { calculate } from '@/services/openfisca'
import situation from '@/situations/expandDisposableIncome.json'

const payload = JSON.stringify(situation)
const data = ref('Calculating...')

onMounted(async () => {
  const result = await calculate(payload)
  data.value = JSON.stringify(result, null, 2)
})
</script>

<template>
  <main>
    <section>
      <h1>Expand Disposable Income Over Axes</h1>
      <pre>{{ data }}</pre>
    </section>
  </main>
</template>
