;(async () => {
  await import(chrome.runtime.getURL('dist/main.js'))
})()
