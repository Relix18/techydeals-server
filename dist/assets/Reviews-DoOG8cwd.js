import{r,aw as B,ax as M,j as e,al as _,q as x,o as h}from"./index-DVX61_pb.js";import{S as q,F as E,a as O}from"./index-BaWoEQua.js";import{r as p}from"./index-B4jSva7l.js";import{c as i}from"./clsx-B-dksMZM.js";const Q=()=>{const[c,j]=r.useState(""),{data:s}=B(c),[v]=M(),[N,l]=r.useState(!1),[g,u]=r.useState(null),[m,w]=r.useState(!1),n=r.useMemo(()=>(s==null?void 0:s.reviews)||[],[s]),f=t=>{u(t),l(!0)},C=async()=>{g&&(v({selectedReviewId:g,productId:c}),l(!1),u(null))},P=r.useMemo(()=>[{Header:"ReviewId",accessor:"_id"},{Header:"User",accessor:"name"},{Header:()=>e.jsx("p",{className:"comment",children:"Comment"}),accessor:"comment",Cell:({value:t})=>e.jsx("p",{className:"comment",children:t})},{Header:"Rating",accessor:"rating"},{Header:"Action",accessor:"action",Cell:({row:t})=>e.jsx(e.Fragment,{children:e.jsx(_,{className:"m-1 h-6 w-6 hover:text-green-600 hover:cursor-pointer",onClick:()=>f(t.original._id)})})}],[]),{getTableProps:R,getTableBodyProps:F,headerGroups:S,page:k,previousPage:T,nextPage:H,canNextPage:d,canPreviousPage:o,state:{pageIndex:I},pageCount:b,gotoPage:y,prepareRow:D}=p.useTable({columns:P,data:n},p.useSortBy,p.usePagination);return e.jsxs(e.Fragment,{children:[e.jsx(x,{appear:!0,show:N,as:r.Fragment,children:e.jsxs(h,{as:"div",className:"relative z-10",onClose:()=>l(!1),children:[e.jsx(x.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black/25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e.jsx(x.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(h.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[e.jsx(h.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Are you sure you want to cancel this order?"}),e.jsxs("div",{className:"mt-4 flex w-full justify-center gap-4",children:[e.jsx("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none",onClick:()=>C(),children:"Yes"}),e.jsx("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",onClick:()=>l(!1),children:"No"})]})]})})})})]})}),e.jsxs("div",{id:"reviews",className:"flex bg-gray-100 h-screen",children:[e.jsx(q,{}),e.jsx("div",{id:"toggleBtn",className:" md:hidden z-50 absolute right-5 top-5 w-10 h-10 rounded-full text-white flex items-center justify-center bg-green-500",onClick:()=>w(!m),children:e.jsx(E,{className:"text-xl"})}),e.jsx(O,{isOpen:m}),!m&&e.jsxs("div",{className:"w-screen px-2 py-10",children:[e.jsxs("div",{className:"flex w-full bg-white flex-col space-y-5 rounded-lg border py-10 px-5 mt-2 shadow mx-auto",children:[e.jsxs("div",{className:"flex w-full flex-col space-y-5",children:[e.jsx("div",{className:"mb-2 space-y-3",children:e.jsx("h1",{className:" text-3xl font-bold text-gray-700",children:"Product Reviews"})}),e.jsx("div",{children:e.jsx("div",{children:e.jsx("input",{type:"text",className:"mt-2  focus:border-none focus:ring-green-500 h-12 w-full rounded-md bg-gray-100 px-3 border-gray-300",placeholder:"Product Id",required:!0,value:c,onChange:t=>j(t.target.value)})})})]}),e.jsx("div",{className:" border-t"}),(s==null?void 0:s.reviews.length)===0?e.jsx("h1",{children:"No reviews found"}):e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"min-w-full border-collapse border-spacing-y-2 border-spacing-x-2",...R(),children:[e.jsx("thead",{className:"hidden border-b md:table-header-group",children:S.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(a=>e.jsx("td",{className:"whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3",...a.getHeaderProps(a.getSortByToggleProps()),children:a.render("Header")},a.id))},t.id))}),e.jsxs("tbody",{...F(),className:"bg-white lg:border-gray-300",children:[k.map(t=>(D(t),e.jsx("tr",{className:"",...t.getRowProps(),children:t.cells.map(a=>e.jsx("td",{...a.getCellProps(),className:"whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left md:table-cell",children:a.render("Cell")},a.id))},t.id))),s==null?void 0:s.reviews.map((t,a)=>e.jsxs("tr",{className:"mobile",children:[e.jsx("td",{className:"whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left",children:e.jsxs("div",{className:"mt-1 flex flex-col text-xs font-medium md:hidden",children:[e.jsxs("div",{className:"flex items-center",children:["Id: ",t._id]}),e.jsxs("div",{className:"",children:["Name:",t.name]}),e.jsxs("div",{className:"",children:["Comment: ",t.comment]}),e.jsxs("div",{className:"",children:["Rating: ",t.rating]})]})}),e.jsx("td",{className:"whitespace-no-wrap w-32 text-right text-sm text-gray-600 sm:px-3 lg:text-left md:hidden",children:e.jsx("button",{className:"bg-green-200  py-1.5 px-4 mt-2 rounded-lg text-green-600 text-center text-sm lg:hidden",onClick:()=>f(t._id),children:"Delete"})})]},a))]})]}),n.length===0&&e.jsx("h1",{className:"text-gray-700 text-center",children:"Search for Product Review List"})]})]}),console.log(n),n.length!==0&&e.jsxs("div",{className:"flex w-full justify-center items-center",children:[e.jsx("button",{disabled:!o,className:i("md:py-2 py-1 md:m-2 m-1  px-2 md:px-4 text-sm md:text-base text-gray-700 hover:text-green-600 font-light bg-white shadow-sm rounded-md ",o?"cursor-pointer":"cursor-not-allowed"),onClick:()=>y(0),children:"First"}),e.jsx("button",{className:i("md:py-2 py-1 md:m-2 m-0  px-2 md:px-4 text-sm md:text-base text-gray-700 hover:text-green-600 font-light bg-white shadow-sm rounded-md",o?"cursor-pointer":"cursor-not-allowed"),disabled:!o,onClick:T,children:"Prev"}),e.jsxs("p",{className:"text-sm md:text-base text-gray-700 mx-2",children:[I+1," of ",b]}),e.jsx("button",{className:i("md:py-2 py-1 md:m-2 m-1 px-2 md:px-4 text-sm md:text-base text-gray-700 hover:text-green-600 font-light bg-white shadow-sm rounded-md",d?"cursor-pointer":"cursor-not-allowed"),disabled:!d,onClick:H,children:"Next"}),e.jsx("button",{className:i("md:py-2 py-1 md:m-2 m-0  px-2 md:px-4 text-sm md:text-base text-gray-700 hover:text-green-600 font-light bg-white shadow-sm rounded-md",d?"cursor-pointer":"cursor-not-allowed"),disabled:!d,onClick:()=>y(b-1),children:"Last"})]})]})]})]})};export{Q as default};