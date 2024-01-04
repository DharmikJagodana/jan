"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3055],{51994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(85893),r=t(11151);const i={title:"Chats",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},s=void 0,o={id:"docs/engineering/chats",title:"Chats",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/docs/engineering/chats.md",sourceDirName:"docs/engineering",slug:"/docs/engineering/chats",permalink:"/docs/engineering/chats",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/docs/engineering/chats.md",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1704346542,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{title:"Chats",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"docsSidebar",previous:{title:"Assistants",permalink:"/docs/engineering/assistants"},next:{title:"Engine",permalink:"/docs/engineering/engine"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This is currently under development."})}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["In Jan, ",(0,a.jsx)(n.code,{children:"chats"})," are LLM responses in the form of OpenAI compatible ",(0,a.jsx)(n.code,{children:"chat completion objects"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Models take a list of messages and return a model-generated response as output."}),"\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/chat",children:"OpenAI Chat API"})," compatible endpoint at ",(0,a.jsx)(n.code,{children:"localhost:1337/v1/chats"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,a.jsxs)(n.p,{children:["Chats are stateless, thus are not saved in ",(0,a.jsx)(n.code,{children:"janroot"}),". Any content and relevant metadata from calling this endpoint is extracted and persisted through ",(0,a.jsx)(n.a,{href:"/specs/messages",children:"Messages"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,a.jsxs)(n.p,{children:["Jan's Chat API is compatible with ",(0,a.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/chat",children:"OpenAI's Chat API"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://jan.ai/api-reference/#tag/Chat-Completion",children:"Jan Chat API"})]}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(n.p,{children:["Under the hood, the ",(0,a.jsx)(n.code,{children:"/chat"})," endpoint simply reroutes an existing endpoint from ",(0,a.jsx)(n.a,{href:"https://nitro.jan.ai",children:"Nitro server"}),". Nitro is a lightweight & local inference server, written in C++ and embedded into the Jan app. See ",(0,a.jsx)(n.a,{href:"https://nitro.jan.ai/docs",children:"Nitro documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(67294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);