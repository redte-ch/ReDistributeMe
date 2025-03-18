<script lang="ts">
  import { onMount } from 'svelte'
  import { calculate } from '@/services/openfisca'
  import situation from '@/situations/calculateIncomeTax.json'

  let payload: string = JSON.stringify(situation, null, 2)
  let data: string = 'Calculating...'

  onMount(async () => {
    data = JSON.stringify(await calculate(payload), null, 2)
  })
</script>

<main>
  <section>
    <h1>Calculate Income Tax</h1>
    <textarea bind:value={payload} rows="15" />
    <pre>{data}</pre>
    <p><button on:click={recalculate}>Recalculate</button></p>
  </section>
</main>
