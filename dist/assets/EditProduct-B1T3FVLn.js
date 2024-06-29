import{r as n,a6 as L,k as A,o as E,am as G,_ as M,j as e,p as z}from"./index-BN7wecl2.js";import{S as D,F as I,a as R}from"./index-DXNthoMs.js";import{u as U,C as f}from"./index.esm-CjBHLhwe.js";import{c as y}from"./clsx-B-dksMZM.js";const Q=()=>{const[i,o]=n.useState([]),[u,c]=n.useState(null),[x,N]=n.useState(!1),{data:g}=L(),h=A(),{data:r}=E(h.id),[v,{error:w,isLoading:P,isSuccess:p}]=G(),{register:d,handleSubmit:k,reset:b,control:j,setValue:t}=U();console.log(w),n.useEffect(()=>{t("name",r&&r.product.name),t("price",r&&r.product.price),t("description",r&&r.product.description),t("discountPercentage",r&&r.product.discountPercentage),t("newArrival",r==null?void 0:r.product.newArrival),t("stock",r==null?void 0:r.product.stock),t("category",r==null?void 0:r.product.category)},[r,t]),n.useEffect(()=>{const s=[];i&&i.forEach(a=>{s.push(a)}),t("images",s)},[i,t]),n.useEffect(()=>{p&&M.success("Product Updated")},[p]);const q=s=>{const a=s.target.files[0];if(a){const l=new FileReader;l.onloadend=()=>{c(l.result),t("thumbnail",l.result)},l.readAsDataURL(a)}else c(null)},C=s=>{const a=Array.from(s.target.files);o([]),a.forEach(l=>{const m=new FileReader;m.onload=()=>{m.readyState===2&&o(S=>[...S,m.result])},m.readAsDataURL(l)})},F=s=>{const a={product:s,id:h.id};console.log(s),v(a),b(),o([]),c(null)};return e.jsxs("div",{id:"editProduct",className:"flex bg-gray-100",children:[e.jsx(D,{}),e.jsx("div",{id:"toggleBtn",className:" md:hidden z-50 absolute right-5 top-5 w-10 h-10 rounded-full text-white flex items-center justify-center bg-green-500",onClick:()=>N(!x),children:e.jsx(I,{className:"text-xl"})}),e.jsx(R,{isOpen:x}),P?e.jsx(z,{}):e.jsx(e.Fragment,{children:!x&&e.jsx("div",{className:"w-screen px-2 py-10",children:e.jsxs("form",{noValidate:!0,onSubmit:k(s=>{F(s),b(),o([]),c(null)}),className:"relative border  border-gray-100 space-y-3 w-full mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10",children:[e.jsx("h1",{className:"mb-6 text-xl font-semibold lg:text-2xl",children:"Create New Product"}),e.jsxs("div",{children:[e.jsx("label",{className:"",children:" Name "}),e.jsx("input",{type:"text",placeholder:"Product Name",id:"name",className:"mt-2  focus:border-none focus:ring-green-500 h-12 w-full rounded-md bg-gray-100 px-3 border-gray-300",...d("name",{required:"name is required"})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"",children:" Description "}),e.jsx("textarea",{placeholder:"Product Description",id:"description",...d("description",{required:"description is required"}),className:"mt-2 h-32 w-full rounded-md focus:border-none focus:ring-green-500 bg-gray-100 px-3 border-gray-300 resize-none"})]}),e.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"",children:" Category "}),e.jsx("select",{id:"category",...d("category",{required:"category is required"}),className:"mt-2 h-12 flex w-full rounded-md focus:border-none focus:ring-green-500 select-none border p-2 px-3 bg-gray-100 border-gray-300 text-gray-700 ring-green-400 ",children:g==null?void 0:g.categories.map(s=>e.jsx("option",{value:s.value,children:s.label}))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"",children:" Price (in Rupee) "}),e.jsx("input",{type:"number",placeholder:"Price",id:"price",...d("price",{required:"price is required"}),className:"mt-2 h-12 w-full rounded-md focus:border-none focus:ring-green-500 bg-gray-100 px-3 border-gray-300"})]})]}),e.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"",children:" Discount Percentage "}),e.jsx("input",{type:"tel",maxLength:2,placeholder:"Discount Percentage",className:"mt-2 h-12 w-full rounded-md focus:border-none focus:ring-green-500 bg-gray-100 px-3 border-gray-300",id:"discountPercentage",...d("discountPercentage",{required:"discount is required"})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"",children:" Stock "}),e.jsx("input",{type:"number",id:"stock",placeholder:"Stock",...d("stock",{required:"stock is required"}),className:"mt-2 h-12 w-full rounded-md focus:border-none focus:ring-green-500 bg-gray-100 px-3 border-gray-300"})]})]}),e.jsxs("div",{className:"main-col",children:[e.jsx("div",{className:"select",children:e.jsx(f,{control:j,name:"thumbnail",rules:{required:"Thumbnail is required"},render:({field:s})=>e.jsx("div",{className:"file",children:e.jsxs("div",{id:"image-preview",className:y("max-w-lg p-6 mb-4 bg-gray-100  rounded-lg items-center mx-auto text-center cursor-pointer",!u&&"border-dashed border-2 border-gray-400"),children:[e.jsx("input",{id:"upload",type:"file",className:"hidden",name:"thumbnail",accept:"image/*",onChange:a=>{s.onChange(a),q(a)}}),e.jsx("label",{htmlFor:"upload",className:"cursor-pointer",children:u?e.jsx("img",{src:u,className:"max-h-48 rounded-lg mx-auto"}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-8 h-8 text-gray-700 mx-auto mb-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})}),e.jsx("h5",{className:"mb-2 text-xl font-bold tracking-tight text-gray-700",children:"Upload Thumbnail"}),e.jsxs("p",{className:"font-normal text-sm text-gray-400 md:px-6",children:["Choose photo size should be less than"," ",e.jsx("b",{className:"text-gray-600",children:"2mb"})]}),e.jsxs("p",{className:"font-normal text-sm text-gray-400 md:px-6",children:["and should be in"," ",e.jsx("b",{className:"text-gray-600",children:"JPG, PNG, or GIF"})," ","format."]}),e.jsx("span",{id:"filename",className:"text-gray-500 bg-gray-200 z-50"})]})})]})})})}),e.jsx("div",{className:"select",children:e.jsx(f,{control:j,name:"images",rules:{required:"Images is required"},render:({field:s})=>e.jsx("div",{className:"file",children:e.jsxs("div",{id:"image-preview",className:y("max-w-lg overflow-auto p-6 mb-4 bg-gray-100  rounded-lg items-center mx-auto text-center cursor-pointer",i.length===0&&"border-dashed border-2 border-gray-400"),children:[e.jsx("input",{id:"images",accept:"image/*",type:"file",name:"images",className:"hidden",multiple:!0,onChange:a=>{s.onChange(a),C(a)}}),e.jsxs("label",{htmlFor:"images",className:"cursor-pointer",children:[e.jsx("div",{className:"flex",children:i.map((a,l)=>e.jsx("img",{className:"max-h-48 rounded-lg mx-auto",src:a,alt:"avatar"},l))}),i.length===0&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-8 h-8 text-gray-700 mx-auto mb-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})}),e.jsx("h5",{className:"mb-2 text-xl font-bold tracking-tight text-gray-700",children:"Upload Images (Multiple)"}),e.jsxs("p",{className:"font-normal text-sm text-gray-400 md:px-6",children:["Choose photo size should be less than"," ",e.jsx("b",{className:"text-gray-600",children:"2mb"})]}),e.jsxs("p",{className:"font-normal text-sm text-gray-400 md:px-6",children:["and should be in"," ",e.jsx("b",{className:"text-gray-600",children:"JPG, PNG, or GIF"})," ","format."]}),e.jsx("span",{id:"filename",className:"text-gray-500 bg-gray-200 z-50"})]})]})]})})})})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"mt-5 w-full rounded-md bg-green-600 p-2 text-center font-semibold text-white",children:"Create"})})]})})})]})};export{Q as default};
