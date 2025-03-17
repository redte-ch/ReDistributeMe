<script lang="ts">
  import { onMount } from 'svelte'
  import type { Situation } from '@/models/Situation.ts'
  import situation from '@/situations/calculateIncomeTax.json'

  export let data: string = 'Calculating...'
  const payload: string = JSON.stringify(situation)

  onMount(async () => {
    const response = await fetch(
      'https://api.demo.openfisca.org/latest/calculate',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      }
    )

    const result: Situation = await response.json()
    data = JSON.stringify(result, null, 2)
  })
</script>

<main>
  <section>
    <h1>Calculate Income Tax</h1>
    <pre>{data}</pre>
  </section>
</main>
