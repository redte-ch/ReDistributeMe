<script lang="ts">
  import { onMount } from 'svelte'
  import situation from '@/situations/calculateIncomeTax.json'
  import type { Situation } from '@/models/Situation.ts'

  export let data: number
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
    data = result.persons.Thomas.income_tax['2025-03']
  })
</script>

<main class="flex h-screen items-center justify-center">
  <section
    class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm"
  >
    <h1 class="px-4 py-5 font-semibold text-gray-900 sm:px-6">
      RedistributeMe
    </h1>
    <p class="px-4 py-5 sm:p-6">
      Income tax:
      <span>
        {#if data}{data}{:else}calculating...{/if}
      </span>
    </p>
  </section>
</main>
