import{O as m,v as a,h as u,j as s,L as i,p as d,E as x,F as h,m as g,n as c,t as j}from"./index-C2mn7hxx.js";const p=[{status:a.all,name:"Tất cả"},{status:a.waitForConfirmation,name:"Chờ xác nhận"},{status:a.waitForGetting,name:"Chờ lấy hàng"},{status:a.inProgress,name:"Đang giao"},{status:a.delivered,name:"Đã giao"},{status:a.cancelled,name:"Đã huỷ"}];function N(){const l=m(),t=Number(l.status)||a.all,{data:r}=u({queryKey:["purchase",t],queryFn:()=>j.getPurchases({status:t})}),n=r==null?void 0:r.data.data,o=p.map(e=>s.jsx(i,{to:{pathname:d.historyPurchase,search:x({status:String(e.status)}).toString()},className:h("flex flex-1 items-center justify-center border-b-2 bg-white py-4 text-center",{"text-orange border-b-orange":t===e.status,"border-b-black/90 text-gray-900":t!==e.status}),children:e.name},e.status));return s.jsx("div",{children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("div",{className:"min-w-[700px]",children:[s.jsx("div",{className:"sticky top-0 flex rounded-t-sm shadow-sm",children:o}),s.jsx("div",{children:n==null?void 0:n.map(e=>s.jsxs("div",{className:"mt-4 rounded-sm border-black/10 bg-white p-6 text-gray-800 shadow-sm",children:[s.jsxs(i,{to:`${d.home}${g({name:e.product.name,id:e.product._id})}`,className:"flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("img",{className:"h-20 w-20 object-cover",src:e.product.image,alt:e.product.name})}),s.jsxs("div",{className:"ml-3 flex-grow overflow-hidden",children:[s.jsx("div",{className:"truncate",children:e.product.name}),s.jsxs("div",{className:"mt-3",children:["x",e.buy_count]})]}),s.jsxs("div",{className:"ml-3 flex-shrink-0",children:[s.jsxs("span",{className:"truncate text-gray-500 line-through",children:["₫",c(e.product.price_before_discount)]}),s.jsxs("span",{className:"ml-2 truncate text-orange",children:["₫",c(e.product.price)]})]})]}),s.jsx("div",{className:"flex justify-end",children:s.jsxs("div",{children:[s.jsx("span",{children:"Tổng giá tiền"}),s.jsxs("span",{className:"ml-4 text-xl text-orange",children:["₫",c(e.product.price*e.buy_count)]})]})})]},e._id))})]})})})}export{N as default};