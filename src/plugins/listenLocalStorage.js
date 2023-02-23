export default function listenStroage () {
  const orainSetItem = localStorage.setItem
  localStorage.setItem = function (key, val) {
    let setEvent = new Event('setItemEvent') //  重写注册setItem
    setEvent.key = key
    setEvent.newValue = val
    window.dispatchEvent(setEvent) // 派发setItem
    orainSetItem.apply(this, arguments)
  }
}