function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");const u=document.querySelector(".form");u.addEventListener("input",(function(e){a[e.target.name]=Number(e.target.value)})),u.addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:o,amount:r}=a;if(n<=0||o<=0||r<=0)return void e(i).Report.warning("Oops...","Typed number must be greater than 0","Got it!");for(let t=0;t<r;t+=1)l(t+1,n+o*t).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}));const a={};function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}
//# sourceMappingURL=03-promises.b7681985.js.map
