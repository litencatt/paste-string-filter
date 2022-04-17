chrome.runtime.onInstalled.addListener(() => {
  const filteredStr = '(filtered)'
  const combinations = [
    {
      name: 'mail',
      regexp: '[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+',
      enable: true,
    },
  ]
  chrome.storage.local.set({
    combinations,
    filteredStr,
  })
})
