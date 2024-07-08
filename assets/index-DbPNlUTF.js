import{D as A,j as e,L as u,p as d,E as g,F as b,G as B,r as L,a as y,I as z,u as F,o as P,J as G,s as E,K as C,M as R,h as k,H as W,N as D}from"./index-C2mn7hxx.js";import{a as T,p as I}from"./Product-CRFMiIwB.js";import{B as _}from"./Button-C_YtmuGB.js";import{I as M}from"./InputNumber-CUcksjAC.js";const K="categories",V={getCategories:()=>A.get(K)},f=2;function H({queryConfig:s,pageSize:t}){const r=Number(s.page),l=()=>{let n=!1,x=!1;const a=h=>x?null:(x=!0,e.jsx("span",{className:"bg-white rounded-none px-3 py-2 shadow-sm mx-2 border",children:"..."},h)),p=h=>n?null:(n=!0,e.jsx("span",{className:"bg-white rounded-none px-3 py-2 shadow-sm mx-2 border",children:"..."},h));return Array(t).fill(0).map((h,o)=>{const i=o+1;return r<=f*2+1&&i>r+f&&i<t-f+1?p(o):i<r-f&&i>f?a(o):i>r+f&&i<t-f+1?p(o):e.jsx(u,{to:{pathname:d.home,search:g({...s,page:i.toString()}).toString()},className:b("mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm",{"border-cyan-500":i===r,"border-transparent":i!==r}),children:i},o)})};return e.jsxs("div",{className:"flex flex-wrap mt-6 justify-center",children:[r===1?e.jsx("span",{className:"cursor-not-allowed bg-white/60 rounded-none px-3 py-2 shadow-sm mx-2 border",children:"Prev"}):e.jsx(u,{to:{pathname:d.home,search:g({...s,page:(r-1).toString()}).toString()},className:"cursor-pointer bg-white rounded-none px-3 py-2 shadow-sm mx-2 border",children:"Prev"}),l(),r===t?e.jsx("span",{className:"cursor-not-allowed bg-white/60 rounded-none px-3 py-2 shadow-sm mx-2 border",children:"Next"}):e.jsx(u,{to:{pathname:d.home,search:g({...s,page:(r+1).toString()}).toString()},className:"cursor-pointer bg-white rounded-none px-3 py-2 shadow-sm mx-2 border",children:"Next"})]})}function Q(s){var j;const{type:t,onChange:r,className:l,classNameInput:n="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",classNameError:x="mt-1 text-red-400 min-h-[1.25rem] text-sm",value:a="",...p}=s,{field:h,fieldState:o}=B(s),[i,v]=L.useState(h.value),m=w=>{const N=w.target.value;(t==="number"&&(/^\d+$/.test(N)||N==="")||t!=="number")&&(v(N),h.onChange(w),r&&r(w))};return e.jsxs("div",{className:l,children:[e.jsx("input",{className:n,...p,...h,value:a||i,onChange:m}),e.jsx("div",{className:x,children:(j=o.error)==null?void 0:j.message})]})}function $({queryConfig:s}){const t=y(),r=l=>{t({pathname:d.home,search:g({...s,rating_filter:String(l)}).toString()})};return e.jsx("ul",{className:"my-3",children:Array(5).fill(0).map((l,n)=>e.jsx("li",{className:"py-1 pl-2",children:e.jsxs("div",{className:"flex items-center text-sm cursor-pointer",tabIndex:0,role:"button","aria-hidden":"true",onClick:()=>r(5-n),children:[Array(5).fill(0).map((x,a)=>a<5-n?e.jsxs("svg",{viewBox:"0 0 9.5 8",className:"w-4 h-4 mr-1",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"ratingStarGradient",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[e.jsx("stop",{offset:0,stopColor:"#ffca11"}),e.jsx("stop",{offset:1,stopColor:"#ffad27"})]}),e.jsx("polygon",{id:"ratingStar",points:"14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"})]}),e.jsx("g",{fill:"url(#ratingStarGradient)",fillRule:"evenodd",stroke:"none",strokeWidth:1,children:e.jsx("g",{transform:"translate(-876 -1270)",children:e.jsx("g",{transform:"translate(155 992)",children:e.jsx("g",{transform:"translate(600 29)",children:e.jsx("g",{transform:"translate(10 239)",children:e.jsx("g",{transform:"translate(101 10)",children:e.jsx("use",{stroke:"#ffa727",strokeWidth:".5",xlinkHref:"#ratingStar"})})})})})})})]},a):e.jsxs("svg",{viewBox:"0 0 30 30",className:"w-4 h-4 mr-1",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"star__hollow",x1:"50%",x2:"50%",y1:"0%",y2:"99.0177926%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFD211"}),e.jsx("stop",{offset:"100%",stopColor:"#FFAD27"})]})}),e.jsx("path",{fill:"none",fillRule:"evenodd",stroke:"url(#star__hollow)",strokeWidth:2,d:"M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"})]},a)),n!==0&&e.jsx("span",{children:"Trở lên"})]})},n))})}const J=E.pick(["price_min","price_max"]);function O({queryConfig:s,categories:t}){var v;const{category:r}=s,l=y(),{t:n}=z("home"),{control:x,handleSubmit:a,trigger:p,formState:{errors:h}}=F({defaultValues:{price_min:"",price_max:""},resolver:P(J),shouldFocusError:!1}),o=a(m=>{l({pathname:d.home,search:g({...s,price_max:m.price_max,price_min:m.price_min}).toString()})}),i=()=>{l({pathname:d.home,search:g(C(s,["price_max","price_min","category","rating_filter"])).toString()})};return e.jsxs("div",{className:"py-4",children:[e.jsxs(u,{to:d.home,className:b("flex items-center font-bold capitalize",{"text-orange":!r}),children:[e.jsx("svg",{viewBox:"0 0 12 10",className:"w-3 h-4 mr-3 fill-current",children:e.jsx("g",{fillRule:"evenodd",stroke:"none",strokeWidth:1,children:e.jsx("g",{transform:"translate(-373 -208)",children:e.jsx("g",{transform:"translate(155 191)",children:e.jsxs("g",{transform:"translate(218 17)",children:[e.jsx("path",{d:"m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"}),e.jsx("path",{d:"m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"}),e.jsx("path",{d:"m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"})]})})})})}),n("aside filter.all categories")]}),e.jsx("div",{className:"bg-gray-300 h-[1px] my-4"}),e.jsx("ul",{children:t.map(m=>{const j=r===m._id;return e.jsx("li",{className:"py-2 pl-2",children:e.jsxs(u,{to:{pathname:d.home,search:g({...s,category:m._id}).toString()},className:b("relative px-2",{"text-orange font-semibold":j}),children:[j&&e.jsx("svg",{viewBox:"0 0 4 7",className:"fill-orange w-2 h-2 absolute top-1 left-[-10px]",children:e.jsx("polygon",{points:"4 3.5 0 0 0 7"})}),m.name]})},m._id)})}),e.jsxs(u,{to:d.home,className:"flex items-center font-bold mt-4 uppercase",children:[e.jsx("svg",{enableBackground:"new 0 0 15 15",viewBox:"0 0 15 15",x:0,y:0,className:"w-3 h-4 fill-current mr-3 stroke-current",children:e.jsx("g",{children:e.jsx("polyline",{fill:"none",points:"5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10})})}),n("aside filter.filter search")]}),e.jsx("div",{className:"bg-gray-300 h-[1px] my-4"}),e.jsxs("div",{className:"my-5",children:[e.jsx("div",{children:"Khoảng giá"}),e.jsxs("form",{className:"mt-2",onSubmit:o,children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx(Q,{control:x,name:"price_min",type:"number",className:"grow",classNameInput:"p-1 w-full outline-none border border-gray-300 hover:border-gray-500 rounded-sm shadow-sm",placeholder:"₫ TỪ",classNameError:"hidden",onChange:()=>{p("price_max")}}),e.jsx("div",{className:"mx-2 mt-2 shrink-0",children:"-"}),e.jsx(G,{control:x,name:"price_max",render:({field:m})=>e.jsx(M,{...m,type:"text",className:"grow",classNameInput:"p-1 w-full outline-none border border-gray-300 hover:border-gray-500 rounded-sm shadow-sm",placeholder:"₫ ĐẾN",classNameError:"hidden",onChange:j=>{m.onChange(j),p("price_min")}})})]}),e.jsx("div",{className:"mt-1 text-red-400 text-center min-h-[1.25rem] text-sm",children:(v=h.price_max)==null?void 0:v.message}),e.jsx(_,{className:"w-full p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 flex justify-center items-center",children:"Áp dụng"})]})]}),e.jsx("div",{className:"bg-gray-300 h-[1px] my-4"}),e.jsx($,{queryConfig:s}),e.jsx("div",{className:"bg-gray-300 h-[1px] my-4"}),e.jsx(_,{onClick:i,className:"w-full p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 flex justify-center items-center",children:"Xoá tất cả"})]})}const c={createdAt:"createdAt",view:"view",sold:"sold",price:"price"},S={asc:"asc",desc:"desc"};function U({queryConfig:s,pageSize:t}){const r=Number(s.page),{sort_by:l=c.createdAt,order:n}=s,x=y(),a=o=>l===o,p=o=>{x({pathname:d.home,search:g(C({...s,sort_by:o},["order"])).toString()})},h=o=>{x({pathname:d.home,search:g({...s,sort_by:c.price,order:o}).toString()})};return e.jsx("div",{className:"bg-gray-300/40 py-4 px-3",children:e.jsxs("div",{className:"flex flex-wrap justify-between gap-2 items-center",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("div",{children:"Sắp xếp theo"}),e.jsx("button",{onClick:()=>p(c.view),className:b("h-8 px-4 capitalize text-sm text-center",{"bg-orange text-white hover:bg-orange/80":a(c.view),"bg-white text-black hover:bg-slate-100":!a(c.view)}),children:"Phổ biến"}),e.jsx("button",{onClick:()=>p(c.createdAt),className:b("h-8 px-4 capitalize text-sm text-center",{"bg-orange text-white hover:bg-orange/80":a(c.createdAt),"bg-white text-black hover:bg-slate-100":!a(c.createdAt)}),children:"Mới nhất"}),e.jsx("button",{onClick:()=>p(c.sold),className:b("h-8 px-4 capitalize text-sm text-center",{"bg-orange text-white hover:bg-orange/80":a(c.sold),"bg-white text-black hover:bg-slate-100":!a(c.sold)}),children:"Bán chạy"}),e.jsxs("select",{className:b("h-8 px-4 capitalize text-sm text-center outline-none",{"bg-orange text-white hover:bg-orange/80":a(c.price),"bg-white text-black hover:bg-slate-100":!a(c.price)}),value:n||"",onChange:o=>h(o.target.value),children:[e.jsx("option",{className:"bg-white text-black",value:"",disabled:!0,children:"Giá"}),e.jsx("option",{className:"bg-white text-black",value:S.asc,children:"Giá: Thấp đến cao"}),e.jsx("option",{className:"bg-white text-black",value:S.desc,children:"Giá: Cao đến thấp"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-orange",children:r}),e.jsxs("span",{children:["/",t]})]}),e.jsxs("div",{className:"ml-2 flex items-center",children:[r===1?e.jsx("span",{className:"flex h-8 w-9 px-3 items-center justify-center rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed shadow",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})})}):e.jsx(u,{to:{pathname:d.home,search:g({...s,page:(r-1).toString()}).toString()},className:"flex h-8 w-9 px-3 items-center justify-center rounded-tl-sm rounded-bl-sm bg-white hover:bg-slate-100 cursor-pointer shadow",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})})}),r===t?e.jsx("span",{className:"flex h-8 w-9 px-3 items-center justify-center rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed shadow",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})})}):e.jsx(u,{to:{pathname:d.home,search:g({...s,page:(r+1).toString()}).toString()},className:"flex h-8 w-9 px-3 items-center justify-center rounded-tl-sm rounded-bl-sm bg-white hover:bg-slate-100 cursor-pointer shadow",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})})})]})]})]})})}function se(){var l;const s=R(),{data:t}=k({queryKey:["products",s],queryFn:()=>I.getProductList(s),placeholderData:D,staleTime:3*60*1e3}),{data:r}=k({queryKey:["categories"],queryFn:()=>V.getCategories()});return e.jsxs("div",{className:"bg-gray-200 py-6",children:[e.jsxs(W,{children:[e.jsx("title",{children:"Trang chủ | Shopee Clone"}),e.jsx("meta",{name:"description",content:"Trang chủ của Shopee Clone"})]}),e.jsx("div",{className:"container",children:t&&e.jsxs("div",{className:"grid grid-cols-12 gap-6",children:[e.jsx("div",{className:"col-span-3",children:e.jsx(O,{queryConfig:s,categories:(r==null?void 0:r.data.data)||[]})}),e.jsxs("div",{className:"col-span-9",children:[e.jsx(U,{queryConfig:s,pageSize:t.data.data.pagination.page_size}),e.jsx("div",{className:"mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3",children:(l=t.data.data.products)==null?void 0:l.map(n=>e.jsx("div",{className:"col-span-1",children:e.jsx(T,{product:n})},n._id))}),e.jsx(H,{queryConfig:s,pageSize:t.data.data.pagination.page_size})]})]})})]})}export{se as default};