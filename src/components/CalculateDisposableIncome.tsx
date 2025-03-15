import { useState, useEffect } from 'react'
import type { Situation } from '@/models/Situation'
import situation from '@/situations/calculateDisposableIncome.json'

export default function () {
  const [data, setData]: [string, any] = useState('loading...')
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
    <main className='flex h-screen items-center justify-center'>
      <section className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm'>
        <h1 className='px-4 py-5 font-semibold text-gray-900 sm:px-6'>
          RedistributeMe
        </h1>
        <pre className='px-4 py-5 sm:p-6'>{data}</pre>
      </section>
    </main>
  )
}
