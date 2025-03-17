export const calculate = async (payload: string) => {
  const response = await fetch(
    'https://api.demo.openfisca.org/latest/calculate',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: payload
    }
  )

  return await response.json()
}
