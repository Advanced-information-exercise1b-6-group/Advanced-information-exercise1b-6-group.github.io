(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{5687:function(e,t,n){Promise.resolve().then(n.bind(n,7890))},9645:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});var r=n(7437),l=n(6463),u=n(2265);let s=[{label:"メニュー検索",onClick:e=>e.push("/menu/select-genre")},{label:"Home",onClick:e=>e.push("/home")},{label:"戻る",onClick:e=>e.back()}],a=[{label:"メニュー検索",onClick:e=>e.push("/menu/select-genre")},{label:"Home",onClick:e=>e.push("/home")},{label:"MyPage",onClick:e=>e.push("/mypage")}];function i(e){var t;let n=null!==(t=e.buttons)&&void 0!==t?t:e.isHome?a:s;return(0,r.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,r.jsx)("main",{className:"flex flex-grow flex-shrink flex-col p-10 pt-14 overflow-y-scroll",children:(0,r.jsx)(u.Suspense,{children:e.children})}),0!=n.length&&(0,r.jsx)(c,{buttons:n,className:"flex-shrink-0"})]})}function c(e){let{className:t,buttons:n}=e,u=(0,l.useRouter)();return(0,r.jsx)("footer",{className:"w-full h-[20vw] bg-amber-600 flex flex-row ".concat(t),children:n.map(e=>{let{label:t,onClick:n}=e;return(0,r.jsx)("button",{className:"w-1 flex-grow h-full border-black border-2 border-l-0 first:border-l-2",onClick:()=>n(u),children:t},t)})})}},7890:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7437),l=n(2265),u=n(9645),s=n(6463),a=n(7200),i=n(3770),c=n(8585);function o(){return(0,r.jsx)(u.P,{children:(0,r.jsx)(h,{})})}function h(){let e=(0,i.v$)(),t=(0,l.useId)(),n=(0,s.useRouter)(),[u,o]=(0,l.useState)(e.sex),[h,d]=(0,l.useState)(e.height),[f,x]=(0,l.useState)(e.weight),[m,g]=(0,l.useState)(3),b=null;null==h?b="身長を入力してください":h<100?b="身長が小さすぎます":h>=1e3&&(b="身長が大きすぎます");let p=null;return null==f?p="体重を入力してください":f<10?p="体重が小さすぎます":f>=100&&(p="体重が大きすぎます"),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"text-xl",children:"身体情報変更"}),(0,r.jsx)("hr",{className:"border-amber-700"}),"性別",(0,r.jsxs)("div",{className:"flex gap-5 mx-auto",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"sex",checked:"man"==u,onChange:e=>o("man")}),"男性"]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"sex",checked:"woman"==u,onChange:e=>o("woman")}),"女性"]})]}),null==u&&(0,r.jsx)("div",{className:"text-red-500",children:"性別を選択してください"}),(0,r.jsx)("label",{htmlFor:"".concat(t,"-height"),children:"身長"}),(0,r.jsxs)("div",{className:"flex ml-20",children:[(0,r.jsx)(c.Y,{id:"".concat(t,"-height"),name:"height",className:"flex-grow",value:h,setValue:d}),"cm"]}),null!=b&&(0,r.jsx)("div",{className:"text-red-500",children:b}),(0,r.jsx)("label",{htmlFor:"".concat(t,"-weight"),children:"体重"}),(0,r.jsxs)("div",{className:"flex ml-20",children:[(0,r.jsx)(c.Y,{id:"".concat(t,"-weight"),name:"weight",className:"flex-grow",value:f,setValue:x}),"kg"]}),null!=p&&(0,r.jsx)("div",{className:"text-red-500",children:p}),(0,r.jsx)("label",{htmlFor:"".concat(t,"-weight"),children:"運動量"}),(0,r.jsx)("div",{className:"flex ml-20",children:(0,r.jsxs)("select",{name:"load",className:"flex-grow bg-white",value:String(m),onChange:e=>g(parseInt(e.target.value)),children:[(0,r.jsx)("option",{value:1,children:"すごく少ない"}),(0,r.jsx)("option",{value:2,children:"少ない"}),(0,r.jsx)("option",{value:3,children:"ふつう"}),(0,r.jsx)("option",{value:4,children:"多い"}),(0,r.jsx)("option",{value:5,children:"すごく多い"})]})}),(0,r.jsx)("button",{className:"mt-2 bg-gray-200 border-2 border-black disabled:bg-gray-300 disabled:border-gray-500 disabled:text-gray-500",onClick:()=>{if(null==h)throw Error("身長がnullです");if(null==f)throw Error("体重がnullです");let t={...e};t.sex=u,t.height=h,t.weight=f,t.load=m,(0,a.A)(t),n.back()},disabled:!!(b||p),children:"確定"})]})}},7858:function(e,t,n){"use strict";function r(e){return JSON.parse(localStorage.getItem("eatenData")||"[]").filter(t=>t.date===e)}n.d(t,{u:function(){return r}})},8585:function(e,t,n){"use strict";n.d(t,{Y:function(){return u},y:function(){return s}});var r=n(7437),l=n(2265);function u(e){let{value:t,setValue:n,...u}=e,[s,a]=(0,l.useState)("");(0,l.useEffect)(()=>{null!=t&&a(String(t))},[t]),(0,l.useEffect)(()=>{if(""==s)n(null);else{let e=parseInt(s);isNaN(e)||n(e)}},[s,n]);let i=(0,l.useCallback)(e=>{a([...e.target.value].filter(e=>null!=e.match(/[0-9]/)).join(""))},[]);return(0,r.jsx)("input",{...u,value:s,pattern:"[0-9]+",inputMode:"numeric",onChange:i})}function s(e){let{thisValue:t,value:n,setValue:l,...u}=e;return(0,r.jsx)("input",{...u,type:"checkbox",checked:n.includes(t),onChange:e=>{e.target.checked?l(e=>[...new Set([...e,t])]):l(e=>e.filter(e=>e!=t))}})}},3770:function(e,t,n){"use strict";n.d(t,{Hb:function(){return o},uN:function(){return c},v$:function(){return h}});var r=n(2265),l=n(7200),u=n(6463);n(5592);var s=n(7858),a=n(7549);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],[n,l]=(0,r.useState)();if(void 0!==n&&t.length==n.dependencies.length&&t.every((e,t)=>Object.is(e,n.dependencies[t])))return n.value;let u=e();return l({value:u,dependencies:t}),u}function c(){return o((0,a.i5)())}function o(e){return i(()=>(0,s.u)(e),[e])}function h(){let e=(0,u.useRouter)();return i(()=>{let t=(0,l.i)();if(null!=t)return t;throw setTimeout(()=>{e.replace("/setup/enter")},0),new Promise(()=>{})})}},7200:function(e,t,n){"use strict";n.d(t,{A:function(){return l},i:function(){return u}});let r="userDatabase";function l(e){!function(e){if(e.height<=0)throw Error("身長は半角数字にしてください.");if(e.weight<=0)throw Error("体重は半角数字にしてください.");if(e.load<1||e.load>5)throw Error("運動量は1から5の半角数字にしてください.");if(!Array.isArray(e.stores)||0===e.stores.length)throw Error("コンビニを選択してください.");if(!Array.isArray(e.allergens))throw Error("アレルギーを選択してください.");if(e.price<0)throw Error("価格は半角数字にしてください.")}(e),localStorage.setItem(r,JSON.stringify(e))}function u(){return function(){let e=localStorage.getItem(r);return e?JSON.parse(e):null}()}},7549:function(e,t,n){"use strict";function r(){return l(new Date)}function l(e){return"".concat(e.getFullYear(),"-").concat((e.getMonth()+1).toString(10).padStart(2,"0"),"-").concat(e.getDate().toString(10).padStart(2,"0"))}function u(e){let[t,n,r]=e.split("-").map(Number);return[t,n,r]}n.d(t,{RD:function(){return u},bW:function(){return l},i5:function(){return r}})},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})}},function(e){e.O(0,[971,23,744],function(){return e(e.s=5687)}),_N_E=e.O()}]);