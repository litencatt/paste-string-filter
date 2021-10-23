export interface Combination {
  name: string
  regexp: string
  enable: boolean
}

export interface Items {
  enable: boolean
  filteredStr: string
  combinations: Combination[]
}
