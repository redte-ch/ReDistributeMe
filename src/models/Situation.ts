export type Situation = {
  persons: {
    [key: string]: {
      [key: string]: {
        [key: string]: number
      }
    }
  }
}
