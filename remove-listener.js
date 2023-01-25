/**
* Remove listener with AbortController
* listener - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
* AbortController - https://developer.mozilla.org/en-US/docs/Web/API/AbortController
* Can i use: https://caniuse.com/?search=AbortSignal
*/

let controller = new AbortController();
window.addEventListener('click', (event) => { console.log(event) }, { signal: controller.signal })
controller.abort();
