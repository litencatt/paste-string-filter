import { storage } from './storage'
chrome.storage.local.set(
  {
    filteredStr: '(filtered)',
    regexps: {
      mail: {
        regexp: "[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+",
        enable: true
      },
      password: {
        regexp: "password:.*",
        enable: true
      }
    }
  }
)

// Show local storage for this chrome extension
chrome.storage.local.get((result) => {
  console.log(result)
})

document.addEventListener('paste', pasteStringFilter)

async function pasteStringFilter(event: any) {
  const elem = window.document.activeElement as HTMLInputElement
  if (!elem || !['TEXTAREA'].includes(elem.nodeName)) {
    return false
  }

  const orignal = elem.value
  const selectionStart = elem.selectionStart
  const selectionEnd = elem.selectionEnd
  if (selectionStart === null || selectionEnd === null) {
    return false
  }
  let clipboardData = event.clipboardData
  if (!clipboardData) {
    return false
  }
  let paste = clipboardData.getData('text')

  let items = await storage.get(['enable'])
  // @ts-ignore
  if (!items.hasOwnProperty('enable')) {
    console.log('enable is not set.')
    return
  }
  // @ts-ignore
  const enable = items['enable']
  if (!enable) {
    console.log('Filter is disable now.')
    return
  }

  items = await storage.get('filteredStr')
  // @ts-ignore
  const filteredStr = items['filteredStr']

  items = await storage.get(['regexps'])
  // @ts-ignore
  Object.keys(items['regexps']).forEach((key) => {
    // @ts-ignore
    let regexp = new RegExp(items['regexps'][key].regexp, 'g')
    paste = paste.replace(regexp, filteredStr)
  })
  elem.value = orignal.slice(0, selectionStart) + paste + orignal.slice(selectionEnd)

  event.preventDefault()
}