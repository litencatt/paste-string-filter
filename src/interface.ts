export interface Regexp {
  name: string
  regexp: string
  enable: boolean
}

export interface Items {
  enable: boolean
  filteredStr: string
  regexps: Regexp[]
}