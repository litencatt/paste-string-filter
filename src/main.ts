import { storageWrapper } from './storageWrapper'
import type { Items, Combination } from './interface'

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
  const items = (await storageWrapper.get(['filteredStr', 'combinations'])) as Items

  const filteredStr = items['filteredStr']
  items['combinations'].forEach((c: Combination) => {
    if (c.regexp == '' || !c.enable) {
      return
    }
    // ここに渡ってくるregexpはエスケープされた文字列でなければならない
    // e.g c.regexp = '[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+'
    const regexp = new RegExp(c.regexp, 'g')
    paste = paste.replace(regexp, filteredStr)
  })
  elem.value = orignal.slice(0, selectionStart) + paste + orignal.slice(selectionEnd)

  event.preventDefault()
}
