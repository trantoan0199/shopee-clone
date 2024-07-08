import{r as m,j as r,P as B,B as E,Q as L,d as U,R as Y,S as M,T as G,g as H,u as q,o as J,A as Q,h as V,b as C,U as W,i as X,H as K,V as Z,J as A,W as ee,X as re,Y as te}from"./index-C2mn7hxx.js";import{u as j}from"./user.api--ZsZSsJx.js";import{B as se}from"./Button-C_YtmuGB.js";import{I as R}from"./Input-Be6M7vZh.js";import{I as ae}from"./InputNumber-CUcksjAC.js";function ne({onChange:t}){const s=m.useRef(null),e=()=>{var i;(i=s.current)==null||i.click()},a=i=>{var n;const o=(n=i.target.files)==null?void 0:n[0];o&&(o.size>=B.maxSizeUploadAvatar||!o.type.includes("image"))?E.error("Dung lượng file tối đa 1 MB. Định dạng:.JPEG, .PNG",{position:"top-center",autoClose:1e3}):t&&t(o)};return r.jsxs(m.Fragment,{children:[r.jsx("input",{type:"file",accept:".jpg, .jpeg, .png",className:"hidden",ref:s,onChange:a,onClick:i=>{i.target.value=null}}),r.jsx("button",{type:"button",onClick:e,className:"flex h-10 item-center justify-center text-center py-2 rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm",children:"Chọn ảnh"})]})}var oe=Math.ceil,ie=Math.max;function ce(t,s,e,a){for(var i=-1,o=ie(oe((s-t)/(e||1)),0),n=Array(o);o--;)n[a?o:++i]=t,t+=e;return n}var de=ce,me=L,le=U,he=Y,xe=M;function fe(t,s,e){if(!xe(e))return!1;var a=typeof s;return(a=="number"?le(e)&&he(s,e.length):a=="string"&&s in e)?me(e[s],t):!1}var pe=fe,ge=/\s/;function ue(t){for(var s=t.length;s--&&ge.test(t.charAt(s)););return s}var be=ue,je=be,ye=/^\s+/;function Ne(t){return t&&t.slice(0,je(t)+1).replace(ye,"")}var we=Ne,_e=we,F=M,Ie=G,S=NaN,Ce=/^[-+]0x[0-9a-f]+$/i,Fe=/^0b[01]+$/i,Se=/^0o[0-7]+$/i,ve=parseInt;function Ee(t){if(typeof t=="number")return t;if(Ie(t))return S;if(F(t)){var s=typeof t.valueOf=="function"?t.valueOf():t;t=F(s)?s+"":s}if(typeof t!="string")return t===0?t:+t;t=_e(t);var e=Fe.test(t);return e||Se.test(t)?ve(t.slice(2),e?2:8):Ce.test(t)?S:+t}var Me=Ee,Ae=Me,v=1/0,Re=17976931348623157e292;function De(t){if(!t)return t===0?t:0;if(t=Ae(t),t===v||t===-v){var s=t<0?-1:1;return s*Re}return t===t?t:0}var Pe=De,Te=de,$e=pe,y=Pe;function ke(t){return function(s,e,a){return a&&typeof a!="number"&&$e(s,e,a)&&(e=a=void 0),s=y(s),e===void 0?(e=s,s=0):e=y(e),a=a===void 0?s<e?1:-1:y(a),Te(s,e,a,t)}}var ze=ke,Oe=ze,Be=Oe(),Le=Be;const N=H(Le);function Ue({errorMessage:t,onChange:s,value:e}){const[a,i]=m.useState({date:(e==null?void 0:e.getDay())||1,month:(e==null?void 0:e.getMonth())||0,year:(e==null?void 0:e.getFullYear())||1990});m.useEffect(()=>{e&&i({date:e.getDay(),month:e.getMonth(),year:e.getFullYear()})},[e]);const o=n=>{const{value:l,name:u}=n.target,d={date:(e==null?void 0:e.getDate())||a.date,month:(e==null?void 0:e.getMonth())||a.month,year:(e==null?void 0:e.getFullYear())||a.year,[u]:Number(l)};i(d),s&&s(new Date(d.year,d.month,d.date))};return r.jsxs("div",{className:"mt-2 flex flex-col flex-wrap sm:flex-row",children:[r.jsx("div",{className:"capitalize truncate pt-3 sm:text-right sm:w-[20%]",children:"Ngày sinh"}),r.jsxs("div",{className:"sm:w-[80%] sm:pl-5",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsxs("select",{name:"date",onChange:o,value:(e==null?void 0:e.getDate())||a.date,className:"h-10 w-[32%] rounded-sm border border-black/10 px-3 cursor-pointer hover:border-orange",children:[r.jsx("option",{disabled:!0,children:"Ngày"}),N(1,32).map(n=>r.jsx("option",{value:n,children:n},n))]}),r.jsxs("select",{name:"month",onChange:o,value:(e==null?void 0:e.getMonth())||a.month,className:"h-10 w-[32%] rounded-sm border border-black/10 px-3 cursor-pointer hover:border-orange",children:[r.jsx("option",{disabled:!0,children:"Tháng"}),N(0,12).map(n=>r.jsx("option",{value:n,children:n+1},n))]}),r.jsxs("select",{name:"year",onChange:o,value:(e==null?void 0:e.getFullYear())||a.year,className:"h-10 w-[32%] rounded-sm border border-black/10 px-3 cursor-pointer hover:border-orange",children:[r.jsx("option",{disabled:!0,children:"Năm"}),N(1990,2024).map(n=>r.jsx("option",{value:n,children:n},n))]})]}),r.jsx("div",{className:"mt-1 text-red-600 min-h-[1.25rem] text-sm",children:t})]})]})}function Ye(){var a;const{register:t,control:s,formState:{errors:e}}=re();return r.jsxs(m.Fragment,{children:[r.jsxs("div",{className:"mt-6 flex flex-col flex-wrap sm:flex-row",children:[r.jsx("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:"Tên"}),r.jsx("div",{className:"sm:w-[80%] sm:pl-5",children:r.jsx(R,{classNameInput:"w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm",register:t,name:"name",placeholder:"Tên",errorMessage:(a=e.name)==null?void 0:a.message})})]}),r.jsxs("div",{className:"mt-2 flex flex-col flex-wrap sm:flex-row",children:[r.jsx("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:"Số điện thoại"}),r.jsx("div",{className:"sm:w-[80%] sm:pl-5",children:r.jsx(A,{control:s,name:"phone",render:({field:i})=>{var o;return r.jsx(ae,{classNameInput:"w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm",placeholder:"Số điện thoại",errorMessage:(o=e.phone)==null?void 0:o.message,...i,onChange:i.onChange})}})})]})]})}const Ge=te.pick(["name","address","avatar","phone","date_of_birth"]);function Xe(){var _;const t=q({defaultValues:{name:"",phone:"",avatar:"",address:"",date_of_birth:new Date(1990,0,1)},resolver:J(Ge)}),{register:s,handleSubmit:e,formState:{errors:a},control:i,watch:o,setError:n,setValue:l}=t,{setProfile:u}=m.useContext(Q),[d,D]=m.useState(),{data:b,refetch:P}=V({queryKey:["profile"],queryFn:j.getProfile}),c=b==null?void 0:b.data.data,w=o("avatar"),T=m.useMemo(()=>d?URL.createObjectURL(d):"",[d]),$=C({mutationFn:j.updateProfile}),k=C({mutationFn:j.uploadAvatar});m.useEffect(()=>{c&&(l("name",c.name),l("address",c.address),l("avatar",c.avatar),l("phone",c.phone),l("date_of_birth",c.date_of_birth?new Date(c.date_of_birth):new Date(1990,0,1)))},[c,l]);const z=e(async h=>{var f,I;try{let p=w;if(d){const g=new FormData;g.append("image",d),p=(await k.mutateAsync(g)).data.data}const x=await $.mutateAsync({...h,date_of_birth:(f=h.date_of_birth)==null?void 0:f.toISOString(),avatar:p});u(x.data.data),W(x.data.data),P(),E.success(x.data.message)}catch(p){if(X(p)){const x=(I=p.response)==null?void 0:I.data.data;x&&Object.keys(x).forEach(g=>{n(g,{message:x[g],type:"Server"})})}}}),O=h=>{D(h)};return r.jsxs("div",{className:"rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20",children:[r.jsxs(K,{children:[r.jsx("title",{children:"Hồ sơ của tôi | Shopee Clone"}),r.jsx("meta",{name:"description",content:"Trang hồ sơ cá nhân của dự án shopee clone"})]}),r.jsxs("div",{className:"border-b border-b-gray-200 py-6",children:[r.jsx("h1",{className:"text-lg font-medium capitalize text-gray-900",children:"Hồ Sơ Của Tôi"}),r.jsx("div",{className:"mt-1 text-sm text-gray-700",children:"Quản lý thông tin hồ sơ để bảo mật tài khoản"})]}),r.jsx(Z,{...t,children:r.jsxs("form",{className:"mt-8 flex flex-col-reverse md:flex-row md:items-start",onSubmit:z,children:[r.jsxs("div",{className:"mt-6 flex-grow md:mt-0 md:pr-12",children:[r.jsxs("div",{className:"flex flex-col flex-wrap sm:flex-row",children:[r.jsx("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:"Email"}),r.jsx("div",{className:"sm:w-[80%] sm:pl-5",children:r.jsx("div",{className:"pt-3 text-gray-700",children:c==null?void 0:c.email})})]}),r.jsx(Ye,{}),r.jsxs("div",{className:"mt-2 flex flex-col flex-wrap sm:flex-row",children:[r.jsx("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:"Địa chỉ"}),r.jsx("div",{className:"sm:w-[80%] sm:pl-5",children:r.jsx(R,{classNameInput:"w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm",register:s,name:"address",placeholder:"Địa chỉ",errorMessage:(_=a.address)==null?void 0:_.message})})]}),r.jsx(A,{control:i,name:"date_of_birth",render:({field:h})=>{var f;return r.jsx(Ue,{errorMessage:(f=a.date_of_birth)==null?void 0:f.message,value:h.value,onChange:h.onChange})}}),r.jsxs("div",{className:"mt-2 flex flex-col flex-wrap sm:flex-row",children:[r.jsx("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right"}),r.jsx("div",{className:"sm:w-[80%] sm:pl-5",children:r.jsx(se,{className:"flex h-9 items-center rounded-sm bg-orange px-5 text-center text-sm text-white hover:bg-orange/80",type:"submit",children:"Lưu"})})]})]}),r.jsx("div",{className:"flex justify-center md:w-72 md:border-l md:border-l-gray-200",children:r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsx("div",{className:"my-5 h-24 w-24",children:r.jsx("img",{src:T||ee(w),alt:"",className:"h-full w-full rounded-full object-cover"})}),r.jsx(ne,{onChange:O}),r.jsxs("div",{className:"mt-3 text-gray-400",children:[r.jsx("div",{children:"Dụng lượng file tối đa 1 MB"}),r.jsx("div",{children:"Định dạng:.JPEG, .PNG"})]})]})})]})})]})}export{Xe as default};