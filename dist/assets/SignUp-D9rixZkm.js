import{r as h,y as p,j as e,x as w,L as j}from"./index-BN7wecl2.js";import{u as y}from"./index.esm-CjBHLhwe.js";import{I as n,a as d}from"./index-BSXBz_Il.js";const k=()=>{const[r,m]=h.useState({password1:!1,password2:!1}),[o,{data:c,isSuccess:x}]=p(),l=a=>{m(i=>({...i,[a]:!i[a]}))},{register:t,handleSubmit:g,formState:{errors:s},reset:u}=y(),f=async a=>{await o(a),u()};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("h1",{className:"mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 flex items-center justify-center gap-5",children:[e.jsx("div",{className:"rounded-full h-10 w-10 overflow-hidden",children:e.jsx("img",{src:w,loading:"lazy"})}),"TechyDeals"]}),e.jsx("h2",{className:"mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900",children:"Create an account"})]}),e.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("form",{className:"space-y-6",onSubmit:g(f),children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Name"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{id:"name",name:"name",type:"text",...t("name",{required:"Name is required",minLength:{value:3,message:"Name must be at least 3 characters"}}),autoComplete:"email",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"}),s.name&&e.jsx("p",{className:"text-red-500",children:s.name.message})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{id:"email",name:"email",type:"email",...t("email",{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Invalid email address"}}),autoComplete:"email",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"}),s.email&&e.jsx("p",{className:"text-red-500",children:s.email.message})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"})}),e.jsxs("div",{className:"mt-2 relative",children:[e.jsx("input",{id:"password",name:"password",type:r.password1?"text":"password",...t("password",{required:"password is required",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:"at least 8 characters, must contain uppercase letter, lowercase letter, number and special characters"}}),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"}),e.jsx("div",{className:"absolute top-0 right-0 h-full w-10 flex items-center justify-center",onClick:()=>l("password1"),children:r.password1?e.jsx(n,{}):e.jsx(d,{})})]}),s.password&&e.jsx("p",{className:"text-red-500",children:s.password.message})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Confirm Password"})}),e.jsxs("div",{className:"mt-2 relative",children:[e.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:r.password2?"text":"password",...t("confirmPassword",{required:"confirmPassword is required",validate:(a,i)=>a===i.password||"Passwords don't match"}),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"}),e.jsx("div",{className:"absolute top-0 right-0 h-full w-10 flex items-center justify-center",onClick:()=>l("password2"),children:r.password2?e.jsx(n,{}):e.jsx(d,{})})]}),s.confirmPassword&&e.jsx("p",{className:"text-red-500",children:s.confirmPassword.message})]}),x&&e.jsx("div",{className:"bg-green-300 text-green-800 py-1.5 px-2 rounded",children:c.message}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm uppercase leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",children:"Create"})})]}),e.jsxs("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Already registered?"," ",e.jsx(j,{to:"/login",className:"font-semibold leading-6 text-green-600 hover:text-green-500",children:"Login"})]})]})]})})};export{k as default};
