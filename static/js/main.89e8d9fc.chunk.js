(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(4),o=n.n(c),s=n(2),r=n(1),a=(n(9),n(0)),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=[].concat(i),e=Object(r.useState)(!1),n=Object(s.a)(e,2),c=n[0],o=n[1],u=Object(r.useState)(!1),l=Object(s.a)(u,2),b=l[0],j=l[1],h=Object(r.useState)(""),d=Object(s.a)(h,2),m=d[0],O=d[1],f=t;switch(m){case"name":f.sort((function(t,e){return t.localeCompare(e)}));break;case"length":f.sort((function(t,e){return t.length-e.length}))}return b&&f.reverse(),Object(a.jsxs)("div",{className:"container",children:[!c&&Object(a.jsx)("button",{type:"button",className:"button",onClick:function(){o((function(t){return!t}))},children:"Start"}),c&&Object(a.jsxs)("div",{children:[Object(a.jsx)("ul",{className:"container__list",children:f.map((function(t){return Object(a.jsx)("li",{children:t},t)}))}),Object(a.jsxs)("div",{className:"buttonContainer",children:[Object(a.jsx)("button",{type:"button",className:"button",onClick:function(){j((function(t){return!t}))},children:"Reverse"}),Object(a.jsx)("button",{type:"button",className:"button",onClick:function(){O("name")},children:"Sort by name"}),Object(a.jsx)("button",{type:"button",className:"button",onClick:function(){O("length")},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:"button",onClick:function(){j(!1),O("")},children:"Reset"})]})]})]})};o.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.89e8d9fc.chunk.js.map