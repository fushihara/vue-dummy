wip

## tampermonkeyで使う方法

html側には`<div id="app"></div>`を準備するだけでok

```
// ==UserScript==
// @name         vueのテスト
// @description  try to take over the world!
// @match        http://127.0.0.1:8080/
// @grant GM_addStyle
// @grant GM_registerMenuCommand
// @require        https://unpkg.com/vue
// @require        https://unpkg.com/@fushihara/vue-dummy@^1.0.0
// ==/UserScript==
const vm = new VueDummy({
    propsData: {
        propTest: "yyy"
    },
    el: '#app'
});
vm.$on("emit-test",()=>{
    console.log("emit-test");
    alert("emit-test");
})

console.log(Vue.version);
```
