<script lang="ts">
  import { onMount } from 'svelte'
  import { calculate } from "@/services/openfisca"
  import situation from '@/situations/calculateIncomeTax.json'

  const payload: string = JSON.stringify(situation)

  export let data: string = 'Calculating...'

  onMount(async () => {
    data = JSON.stringify(await calculate(payload), null, 2)
  })
</script>

<main>
  <section>
    <h1>Calculate Income Tax</h1>
    <pre>{data}</pre>
  </section>
</main>
