export interface Combination {
  name: string
  regexp: string
  enable?: boolean
}

export interface Items {
  filteredStr: string
  combinations: Combination[]
}
