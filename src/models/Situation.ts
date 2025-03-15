type Person = string
type Household = string
type Role = string
type Variable = string
type Date = string
type Value = number | null

export type Situation = {
  persons: {
    [key: Person]: {
      [key: Variable]: {
        [key: Date]: Value
      }
    }
  }
  households: {
    [key: Household]: {
      [key: Role | Variable]: Person[] | { [key: Date]: Value }
    }
  }
}
