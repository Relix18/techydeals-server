import{C as m,r as d,_ as c,j as e,t as x,y as u,L as g}from"./index-JNa5NbPl.js";import{u as f}from"./index.esm-CpjHtoQ6.js";const p=()=>{const{register:i,handleSubmit:a,formState:{errors:s}}=f(),[l,{isLoading:r,isSuccess:t}]=m();d.useEffect(()=>{t&&c.success("Password reset link sent to your email")},[t]);const n=o=>{l(o)};return e.jsx(e.Fragment,{children:r?e.jsx(x,{}):e.jsxs("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("h1",{className:"mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 flex items-center justify-center gap-5",children:[e.jsx("div",{className:"rounded-full h-10 w-10 overflow-hidden",children:e.jsx("img",{src:u})}),"TechyDeals"]}),e.jsx("h2",{className:"mt-10 text-center text-lg leading-9 tracking-tight text-gray-900",children:"We will send you an email to reset your password."})]}),e.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("form",{className:"space-y-6",onSubmit:a(n),children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",...i("email",{required:"email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"}),s.email&&e.jsx("div",{className:"text-red-500",children:s.email.message})]})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",children:"Submit"})})]}),e.jsxs("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Go back to?"," ",e.jsx(g,{to:"/login",className:"font-semibold leading-6 text-green-600 hover:text-green-500",children:"Login"})]})]})]})})};export{p as default};
