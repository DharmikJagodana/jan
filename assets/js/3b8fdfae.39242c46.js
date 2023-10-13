"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"GPU vs CPU What's the Difference?"},l=void 0,p={unversionedId:"hardware/overview/cpu-vs-gpu",id:"hardware/overview/cpu-vs-gpu",title:"GPU vs CPU What's the Difference?",description:"CPU vs. GPU",source:"@site/docs/hardware/overview/cpu-vs-gpu.md",sourceDirName:"hardware/overview",slug:"/hardware/overview/cpu-vs-gpu",permalink:"/hardware/overview/cpu-vs-gpu",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/hardware/overview/cpu-vs-gpu.md",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1697188651,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{title:"GPU vs CPU What's the Difference?"}},i={},c=[{value:"CPU vs. GPU",id:"cpu-vs-gpu",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cpu-vs-gpu"},"CPU vs. GPU"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"CPU"),(0,a.kt)("th",{parentName:"tr",align:null},"GPU"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"Generalized component that handles main processing functions of a server"),(0,a.kt)("td",{parentName:"tr",align:null},"Specialized component that excels at parallel computing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Processing")),(0,a.kt)("td",{parentName:"tr",align:null},"Designed for serial instruction processing"),(0,a.kt)("td",{parentName:"tr",align:null},"Designed for parallel instruction processing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Design")),(0,a.kt)("td",{parentName:"tr",align:null},"Fewer, more powerful cores"),(0,a.kt)("td",{parentName:"tr",align:null},"More cores than CPUs, but less powerful than CPU cores")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Best suited for")),(0,a.kt)("td",{parentName:"tr",align:null},"General-purpose computing applications"),(0,a.kt)("td",{parentName:"tr",align:null},"High-performance computing applications")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/964896173401976932/1157998193741660222/CPU-vs-GPU-rendering.png?ex=651aa55b&is=651953db&hm=a22c80ed108a0d25106a20aa25236f7d0fa74167a50788194470f57ce7f4a6ca&=&width=807&height=426",alt:"CPU VS GPU"})))}d.isMDXComponent=!0}}]);