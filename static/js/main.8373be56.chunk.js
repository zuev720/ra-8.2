(this["webpackJsonpra-8.2"]=this["webpackJsonpra-8.2"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),o=(n(9),n(10),n(2));var u=n(0);function i(t){var e=Object(c.useState)(null),n=Object(o.a)(e,2),a=n[0],r=n[1],s=function(){var e=function(t,e){var n=Object(c.useState)({loading:!1,data:null,error:null}),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){s({loading:!0}),fetch(t,e).then((function(t){return t.json()})).then((function(t){"ok"===t.status?s({loading:!1,data:t.status}):s({loading:!1,error:t.status})}))}),[]),[r.loading,r.data,r.error]}(t.URL,{method:"GET"}),n=Object(o.a)(e,3),a=n[0],r=n[1],s=n[2];return Object(u.jsxs)("div",{className:"infoBlock",children:[a&&Object(u.jsx)("p",{children:"...Loading"}),r&&Object(u.jsx)("p",{children:r}),s&&Object(u.jsx)("p",{children:s})]})};return Object(u.jsxs)("div",{className:"RequestInfoBlock",children:[a,Object(u.jsx)("button",{type:"button",className:t.className,onClick:function(){r(Object(u.jsx)(s,{}))},children:t.title})]})}var l=function(){var t="".concat("https://ra-8-backend.herokuapp.com/","data"),e="".concat("https://ra-8-backend.herokuapp.com/","error");return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(i,{className:"buttonSuccess",URL:t,title:"SuccessRequest"}),Object(u.jsx)(i,{className:"buttonError",URL:e,title:"ErrorRequest"})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),j()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8373be56.chunk.js.map