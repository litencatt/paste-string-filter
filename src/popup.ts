import { storage } from './storage'

window.addEventListener('load', () => {
  const onOffRadio = document.getElementsByName('onoff')
  const onRadio = document.getElementById('enable') as HTMLInputElement
  const offRadio = document.getElementById('disable') as HTMLInputElement

  let enable = false
  storage.get(['enable']).then((items) => {
    // @ts-ignore
    enable = items['enable']
    if (enable) {
      onRadio.checked = true
    } else {
      offRadio.checked = true
    }
  })

  onOffRadio.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      const el = e.target as HTMLInputElement
      console.log(el.value)
      if (el.value === '0') {
        storage.set({ enable: false })
      } else {
        storage.set({ enable: true })
      }
    })
  })
})
