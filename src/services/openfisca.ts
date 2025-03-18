export const calculate = async (payload: string) => {
  const response = await fetch('http://localhost:5000/calculate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload
  })

  return await response.json()
}
