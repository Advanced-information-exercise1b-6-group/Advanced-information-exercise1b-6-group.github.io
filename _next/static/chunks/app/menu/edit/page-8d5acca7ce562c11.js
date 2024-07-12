(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{6715:function(e,r,n){Promise.resolve().then(n.bind(n,218))},9645:function(e,r,n){"use strict";n.d(r,{P:function(){return o}});var t=n(7437),a=n(6463),l=n(2265);let i=[{label:"メニュー検索",onClick:e=>e.push("/menu/select-genre")},{label:"Home",onClick:e=>e.push("/home")},{label:"戻る",onClick:e=>e.back()}],u=[{label:"メニュー検索",onClick:e=>e.push("/menu/select-genre")},{label:"Home",onClick:e=>e.push("/home")},{label:"MyPage",onClick:e=>e.push("/mypage")}];function o(e){var r;let n=null!==(r=e.buttons)&&void 0!==r?r:e.isHome?u:i;return(0,t.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,t.jsx)("main",{className:"flex flex-grow flex-shrink flex-col p-10 pt-14 overflow-y-scroll",children:(0,t.jsx)(l.Suspense,{children:e.children})}),0!=n.length&&(0,t.jsx)(c,{buttons:n,className:"flex-shrink-0"})]})}function c(e){let{className:r,buttons:n}=e,l=(0,a.useRouter)();return(0,t.jsx)("footer",{className:"w-full h-[20vw] bg-amber-600 flex flex-row ".concat(r),children:n.map(e=>{let{label:r,onClick:n}=e;return(0,t.jsx)("button",{className:"w-1 flex-grow h-full border-black border-2 border-l-0 first:border-l-2",onClick:()=>n(l),children:r},r)})})}},218:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var t=n(7437),a=n(6463),l=n(9645),i=n(7549),u=n(2472),o=n(4733);async function c(e,r,n){let t=await (0,o.y)(e,r);switch(n){case"lowLipid":return t.filter(e=>{var r,n,t;let a=!!e.breakfast&&(e.breakfast,!0),l=!!e.lunch&&(e.lunch,!0),i=!!e.dinner&&(e.dinner,!0);return a&&l&&i});case"healthy":return t.filter(e=>{let r=!!e.breakfast&&s(e.breakfast),n=!!e.lunch&&s(e.lunch),t=!!e.dinner&&s(e.dinner);return r&&n&&t});case"lowCarbon":return t.filter(e=>{var r,n,t;let a=!!e.breakfast&&(e.breakfast,!0),l=!!e.lunch&&(e.lunch,!0),i=!!e.dinner&&(e.dinner,!0);return a&&l&&i});default:return t}}function s(e){return"rice"==e.genle}var f=n(7858),d=n(3770);function h(){return(0,t.jsx)(l.P,{children:(0,t.jsx)(m,{})})}function m(){let e=(0,a.useRouter)(),r=(0,a.useSearchParams)(),n=(0,d.v$)(),l=r.get("kind"),o=async r=>{var t,a,o,s;let d=(0,i.i5)(),h=(0,f.u)(d);if(null==n)return;let m=h[0].menu[0].genle,b=(await c(m,n,r))[0];if(null!=l){let e=null!==(a=null===(t=h.find(e=>e.mealKind==l))||void 0===t?void 0:t.additionalEnergy)&&void 0!==a?a:0;(0,u.J)(d,l,[{...b[l],ate:!1}],e)}else for(let e of["breakfast","lunch","dinner"]){let r=null!==(s=null===(o=h.find(r=>r.mealKind==e))||void 0===o?void 0:o.additionalEnergy)&&void 0!==s?s:0;(0,u.J)(d,e,[{...b[e],ate:!1}],r)}e.back()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{className:"text-xl",children:null==l?"メニュー改善":"".concat(b[l],"のメニュー改善")}),(0,t.jsx)("hr",{className:"border-amber-700 mb-2"}),(0,t.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,t.jsx)("button",{className:"border-2 border-black w-40",onClick:()=>o("lowLipid"),children:"低脂質"}),(0,t.jsx)("button",{className:"border-2 border-black w-40",onClick:()=>o("healthy"),children:"ヘルシー"}),(0,t.jsx)("button",{className:"border-2 border-black w-40",onClick:()=>o("lowCarbon"),children:"低炭水化物"})]})]})}let b={breakfast:"朝食",lunch:"昼食",dinner:"夕食"}},7858:function(e,r,n){"use strict";function t(e){return JSON.parse(localStorage.getItem("eatenData")||"[]").filter(r=>r.date===e)}n.d(r,{u:function(){return t}})},2472:function(e,r,n){"use strict";function t(e,r,n,t){let a=JSON.parse(localStorage.getItem("eatenData")||"[]"),l=a.findIndex(n=>n.date===e&&n.mealKind===r);-1!==l&&a.splice(l,1),a.push({date:e,mealKind:r,additionalEnergy:t,menu:n});let i=JSON.stringify(a);return localStorage.setItem("eatenData",i),!0}n.d(r,{J:function(){return t}})},3770:function(e,r,n){"use strict";n.d(r,{Hb:function(){return s},uN:function(){return c},v$:function(){return f}});var t=n(2265),a=n(7200),l=n(6463);n(5592);var i=n(7858),u=n(7549);function o(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],[n,a]=(0,t.useState)();if(void 0!==n&&r.length==n.dependencies.length&&r.every((e,r)=>Object.is(e,n.dependencies[r])))return n.value;let l=e();return a({value:l,dependencies:r}),l}function c(){return s((0,u.i5)())}function s(e){return o(()=>(0,i.u)(e),[e])}function f(){let e=(0,l.useRouter)();return o(()=>{let r=(0,a.i)();if(null!=r)return r;throw setTimeout(()=>{e.replace("/setup/enter")},0),new Promise(()=>{})})}},5113:function(e,r,n){"use strict";function t(e){return function(e){let{sex:r,height:n,weight:t,birthday:a}=e,l=function(e){let r=new Date(e),n=new Date,t=n.getFullYear()-r.getFullYear(),a=n.getMonth()-r.getMonth();return(a<0||0===a&&n.getDate()<r.getDate())&&t--,t}(a);return"man"===r?88.362+13.397*t+4.799*n-5.677*l:447.593+9.247*t+3.098*n-4.33*l}(e)*function(e){switch(e){case 1:return 1.2;case 2:return 1.375;case 3:return 1.55;case 4:return 1.725;case 5:return 1.9;default:throw Error("Invalid exercise load")}}(e.load)}n.d(r,{Rt:function(){return t}})},4733:function(e,r,n){"use strict";n.d(r,{y:function(){return l}});var t=n(5113);async function a(e,r){try{if("mockMenus"in globalThis)return globalThis.mockMenus;let n=await fetch("/api/menus.json?genre=".concat(e,"&store=").concat(r));if(!n.ok)throw Error("Error fetching menu info: ".concat(n.statusText));return await n.json()}catch(e){throw console.error("Failed to retrieve menu information",e),e}}async function l(e,r){let n=(0,t.Rt)(r),a=await i(e,r,"breakfast"),l=await i(e,r,"lunch"),u=await i(e,r,"dinner"),o=[];return a.forEach(e=>{l.forEach(t=>{u.forEach(a=>{if(e.name!==t.name&&e.name!==a.name&&t.name!==a.name){let l=e.energy+t.energy+a.energy,i=e.price+t.price+a.price;l<=n&&i<=r.price&&o.push({breakfast:e,lunch:t,dinner:a,totalCalories:l,totalPrice:i})}})})}),o.sort((e,r)=>r.totalCalories-e.totalCalories),o}async function i(e,r,n){let l=await Promise.all(r.stores.map(r=>a(e,r))).then(e=>e.flatMap(e=>e)),i=(0,t.Rt)(r);return l.filter(t=>{let a=t.genle.includes(e),l="breakfast"===n?t.energy<=3*i/10:"lunch"===n?t.energy<=4*i/10:t.energy<=3*i/10,u=!t.allergens.some(e=>r.allergens.includes(e)),o="breakfast"===n?t.price<=3*r.price/10:t.price<=4*r.price/10,c=t.store.some(e=>r.stores.includes(e));return a&&l&&u&&o&&c})}},7200:function(e,r,n){"use strict";n.d(r,{A:function(){return a},i:function(){return l}});let t="userDatabase";function a(e){!function(e){if(e.height<=0)throw Error("身長は半角数字にしてください.");if(e.weight<=0)throw Error("体重は半角数字にしてください.");if(e.load<1||e.load>5)throw Error("運動量は1から5の半角数字にしてください.");if(!Array.isArray(e.stores)||0===e.stores.length)throw Error("コンビニを選択してください.");if(!Array.isArray(e.allergens))throw Error("アレルギーを選択してください.");if(e.price<0)throw Error("価格は半角数字にしてください.")}(e),localStorage.setItem(t,JSON.stringify(e))}function l(){return function(){let e=localStorage.getItem(t);return e?JSON.parse(e):null}()}},7549:function(e,r,n){"use strict";function t(){return a(new Date)}function a(e){return"".concat(e.getFullYear(),"-").concat((e.getMonth()+1).toString(10).padStart(2,"0"),"-").concat(e.getDate().toString(10).padStart(2,"0"))}function l(e){let[r,n,t]=e.split("-").map(Number);return[r,n,t]}n.d(r,{RD:function(){return l},bW:function(){return a},i5:function(){return t}})},6463:function(e,r,n){"use strict";var t=n(1169);n.o(t,"useRouter")&&n.d(r,{useRouter:function(){return t.useRouter}}),n.o(t,"useSearchParams")&&n.d(r,{useSearchParams:function(){return t.useSearchParams}})}},function(e){e.O(0,[971,23,744],function(){return e(e.s=6715)}),_N_E=e.O()}]);