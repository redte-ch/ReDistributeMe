export type CalculateResult = {
  persons: {
    [key: string]: {
      income_tax: {
        [key: string]: number
      }
    }
  }
}
