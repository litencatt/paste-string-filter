export interface Regexp {
  name: string
  regexp: string
  enable: boolean
}

export interface Regexps {
  [index: string]: Regexp
}

export interface Items {
  enable: boolean
  filteredStr: string
  regexps: Regexps
}