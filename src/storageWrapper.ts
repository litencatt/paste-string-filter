import { cStorage } from './chromeStorage'
import { lStorage } from './localStorage'

function getStorageObject() {
  return window.location.href.includes('localhost') ? lStorage : cStorage
}
export const storageWrapper = getStorageObject()
