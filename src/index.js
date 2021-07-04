import storage from './storage';

// Show local storage for this chrome extension
chrome.storage.local.get(function(result) {
  console.log(result);
})

document.addEventListener('paste', (event) => {
  const elem = window.document.activeElement;
  if (!elem || !["TEXTAREA"].includes(elem.nodeName)) {
    return false;
  }

  const orignal = elem.value;
  const selectionStart = elem.selectionStart;
  const selectionEnd = elem.selectionEnd;

  let clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
  let paste = clipboardData.getData('text');

  const mailRegExp = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
  const replacedStr = "(replaced)";

  storage.get(["enable"]).then((items) => {
    if (!items.hasOwnProperty("enable")) {
      console.log("enable is not set.")
      return;
    }

    const enable = items['enable'];
    if (!enable) {
      console.log("Filter is disable now.")
      return;
    }

    paste = paste.replace(mailRegExp, replacedStr);
    elem.value = orignal.slice(0, selectionStart) + paste + orignal.slice(selectionEnd);
  });

  event.preventDefault();
});
