export const lStorage = {
  get: async (keys: string[] | null) => {
    return Promise.resolve().then(() => {
      let items: any = {}
      if (keys == null) {
        Object.keys(localStorage).forEach((key) => {
          items[key] = localStorage.getItem(key)
        })
      } else {
        keys.forEach((key) => {
          if (key === 'combinations') {
            let tmp = localStorage.getItem(key)
            if (tmp != null) {
              items[key] = JSON.parse(tmp)
            }
          } else {
            items[key] = localStorage.getItem(key)
          }
        })
      }
      return items
    })
  },
  set: async (items: any) => {
    return Promise.resolve().then(() => {
      Object.keys(items).forEach((key) => {
        localStorage.setItem(key, JSON.stringify(items[key]))
      })
    })
  },
}
