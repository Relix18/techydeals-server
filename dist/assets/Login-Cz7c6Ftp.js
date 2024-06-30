import{r as m,v as w,a as y,s as v,w as b,x as N,j as e,N as S,y as k,L as c}from"./index-DVX61_pb.js";import{u as E}from"./index.esm-BtqeSDTU.js";import{I as F,a as C}from"./index-CvDghxeo.js";const q=()=>{const[a,x]=m.useState({password1:!1}),i=w(),r=y(v),[g,{data:l,isSuccess:n,error:u,isError:f}]=b();m.useEffect(()=>{n&&i(N(l.user))},[n,l,i]);const h=t=>{x(d=>({...d,[t]:!d[t]}))},{register:o,handleSubmit:p,formState:{errors:s}}=E(),j=t=>{g(t)};return e.jsxs(e.Fragment,{children:[(r==null?void 0:r.verified)&&e.jsx(S,{to:"/",replace:!0}),e.jsxs("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("h1",{className:"mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 flex items-center justify-center gap-5",children:[e.jsx("div",{className:"rounded-full h-10 w-10 overflow-hidden",children:e.jsx("img",{src:k})}),"TechyDeals"]}),e.jsx("h2",{className:"mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})]}),e.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("form",{className:"space-y-6",onSubmit:p(j),children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{id:"email",name:"email",type:"email",...o("email",{required:"email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"}),s.email&&e.jsx("div",{className:"text-red-500",children:s.email.message})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"}),e.jsx("div",{className:"text-sm",children:e.jsx(c,{to:"/forget-password",className:"font-semibold text-green-600 hover:text-green-500",children:"Forgot password?"})})]}),e.jsxs("div",{className:"mt-2 relative",children:[e.jsx("input",{id:"password",name:"password",type:a.password1?"text":"password",autoComplete:"current-password",...o("password",{required:"Please enter your password"}),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"}),e.jsx("div",{className:"absolute top-0 right-0 h-full w-10 flex items-center justify-center",onClick:()=>h("password1"),children:a.password1?e.jsx(F,{}):e.jsx(C,{})}),s.password&&e.jsx("div",{className:"text-red-500",children:s.password.message})]})]}),f&&e.jsx("div",{className:"bg-red-200 text-red-800 py-1.5 px-2 rounded",children:u.data.message}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex w-full justify-center uppercase rounded-md bg-green-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",children:"Sign in"})})]}),e.jsxs("p",{className:"mt-10 text-center text-sm text-gray-500",children:["New Customer?"," ",e.jsx(c,{to:"/signup",className:"font-semibold leading-6 text-green-600 hover:text-green-500",children:"Register"})]})]})]})]})};export{q as default};
