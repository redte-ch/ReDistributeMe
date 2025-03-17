import { useState, useEffect } from 'react'
import { calculate } from '@/services/openfisca'
import situation from '@/situations/calculateDisposableIncome.json'

export default function () {
  const [data, setData]: [string, any] = useState('Calculating...')
  const payload: string = JSON.stringify(situation)

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
      </section>
    </main>
  )
}
