import { useState, useEffect } from 'react'
import type { Situation } from '@/models/Situation'
import situation from '@/situations/calculateDisposableIncome.json'

export default function () {
  const [data, setData]: [string, any] = useState('Calculating...')
  const payload: string = JSON.stringify(situation)

  const fetchData = async () => {
    const response = await fetch(
      'https://api.demo.openfisca.org/latest/calculate',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      }
    )

    const result: Situation = await response.json()
    setData(JSON.stringify(result, null, 2))
  }

  useEffect(() => {
    fetchData().catch(null)
  }, [])

  return (
    <main>
      <section>
        <h1>Calculate Disposable Income</h1>
        <pre>{data}</pre>
      </section>
    </main>
  )
}
