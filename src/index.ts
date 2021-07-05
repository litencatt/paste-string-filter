import { storage } from './storage'

// Show local storage for this chrome extension
chrome.storage.local.get((result) => {
  console.log(result)
})

document.addEventListener('paste', (event) => {
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

  const mailRegExp = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/
  const filteredStr = '(filtered)'

  storage.get(['enable']).then((items) => {
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

    paste = paste.replace(mailRegExp, filteredStr)
    elem.value = orignal.slice(0, selectionStart) + paste + orignal.slice(selectionEnd)

    event.preventDefault()
  })
})
