import { useState, useEffect } from 'react'
import { calculate } from '@/services/openfisca'
import situation from '@/situations/calculateDisposableIncome.json'

export default function () {
  const [data, setData]: [string, any] = useState('Calculating...')
  const payload: string = JSON.stringify(situation)

  const increment = async () => {
    const salary = JSON.parse(data).persons['Mauko'].salary['2025-03']
    const next = JSON.parse(payload)
    next.persons['Mauko'].salary['2025-03'] = salary + 1000
    const result = await calculate(JSON.stringify(next))
    setData(JSON.stringify(result, null, 2))
  }

  useEffect(() => {
    calculate(payload).then((result) => {
      setData(JSON.stringify(result, null, 2))
    })
  }, [])

  return (
    <main>
      <section>
        <h1>Calculate Disposable Income</h1>
        <pre>{data}</pre>
        <p>
          <button onClick={increment}>+1000 salary</button>
        </p>
      </section>
    </main>
  )
}
