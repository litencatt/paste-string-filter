import { storageWrapper } from './storageWrapper'
import type { Items, Regexp } from './interface'

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
  // @ts-ignore
  const items = (await storageWrapper.get(['enable', 'filteredStr', 'regexps'])) as Items
  if (!items.hasOwnProperty('enable')) {
    console.log('enable is not set.')
    return
  }

  const enable = items['enable']
  if (!enable) {
    console.log('Filter is disable now.')
    return
  }

  const filteredStr = items['filteredStr']
  items['regexps'].forEach((item: Regexp) => {
    if (item.regexp == '') {
      return
    }
    let regexp = new RegExp(item.regexp, 'g')
    paste = paste.replace(regexp, filteredStr)
  })
  elem.value = orignal.slice(0, selectionStart) + paste + orignal.slice(selectionEnd)

  event.preventDefault()
}
