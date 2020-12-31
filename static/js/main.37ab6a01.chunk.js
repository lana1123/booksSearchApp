(this["webpackJsonpbook-search"]=this["webpackJsonpbook-search"]||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),r=a.n(c),o=a(14),i=a.n(o),s=(a(61),a(12)),l=a(119),b=(a(62),a(43)),j=a.n(b),d=function(e){var t=e.alert;return Object(n.jsx)("div",{class:"alert",children:Object(n.jsx)("h4",{children:t})})},p=a(127),h=a(29),u=a(128),x=a(121),O=a(124),m=a(122),g=a(129),f=a(123),k=a(31),v=a(30),y=a(33),w=a.n(y),S=a.p+"static/media/no_image.73ac92f9.png",C=a(44),N=a.n(C),B=Object(l.a)((function(e){return{root:{height:"100%",width:"265px",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"20px 5px 10px 5px"},image:{margin:"0 28px"},avatar:{backgroundColor:v.a[500]},categories:{color:"black",textAlign:"center",width:"11rem"},title:{fontWeight:"bold",display:"-webkit-box",lineHeight:"18px",maxHeight:"41px",boxOrient:"vertical",lineClamp:3,wordBreak:"break-all",overflow:"hidden"},authors:{color:"grey",fontSize:14,padding:"0 3px"}}})),P=function(e){var t=e.book,a=e.handleCardFlip,c=e.isFlipped,o=B(),i=r.a.useState(!1),l=Object(s.a)(i,2),b=l[0],j=(l[1],t.volumeInfo),d=j.title,p=j.authors,h=j.categories,v=j.description,y=j.language,C=j.infoLink,P=t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:S;return Object(n.jsx)("div",{className:"book-container",children:Object(n.jsxs)(N.a,{isFlipped:c,flipDirection:"vertical",containerStyle:{display:"flex",margin:"0 0 40px 0",minHeight:"360px"},children:[Object(n.jsxs)(u.a,{className:o.root,children:[Object(n.jsx)("a",{href:C,target:"_blank",children:Object(n.jsx)("img",{src:P,alt:d,className:o.image})}),Object(n.jsx)(x.a,{titleTypographyProps:{variant:"p"},className:o.title,title:d}),Object(n.jsx)(k.a,{className:o.authors,children:p&&p.length>1?p.join(", "):p}),Object(n.jsxs)(m.a,{disableSpacing:!0,children:[Object(n.jsx)(g.a,{"aria-label":"recipe",className:o.avatar,children:y.toUpperCase()}),Object(n.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",className:o.categories,children:null!==h&&void 0!==h?h:"No categories"}),Object(n.jsx)(f.a,{onClick:a,"aria-expanded":b,"aria-label":"show more",children:Object(n.jsx)(w.a,{})})]})]}),Object(n.jsx)(u.a,{className:o.root,children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(k.a,{paragraph:!0,children:"Description:"}),Object(n.jsx)(k.a,{variant:"body2",children:v?v.length>=320?v.slice(0,375)+"...":v:"No description available"}),Object(n.jsx)(f.a,{onClick:a,"aria-expanded":b,"aria-label":"show more",children:Object(n.jsx)(w.a,{})})]})})]})})},A=function(e){var t=e.books,a=e.page,r=Object(c.useState)(Array(8).fill(!1)),o=Object(s.a)(r,2),i=o[0],l=o[1],b=Object(c.useState)(!1),j=Object(s.a)(b,2),d=j[0],p=j[1],u=8*(a-1),x=t.slice(u,u+8);return Object(n.jsx)("div",{className:"book-list",children:x.map((function(e,t){return Object(n.jsx)(P,{book:e,page:a,handleCardFlip:function(){return function(e){var t=Object(h.a)(i);console.log(t),t[e]?(t.fill(!1),p(!d)):(t.fill(!1),t[e]=!0),l(t)}(t)},isFlipped:i[t]},e.id)}))})},D=a(93),I=a(125),z=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}},container:{backgroundColor:"white"}}})),F=function(e){var t=e.totalPages,a=e.handleClick,c=z(),r=Object(h.a)(Array(t).keys()).map((function(e){return e+1}));return Object(n.jsx)(I.a,{variant:"contained",classes:{root:c.container},children:r.map((function(e){return Object(n.jsx)(D.a,{onClick:function(){return a(e)},children:e},e)}))})},H=a(126),_=Object(l.a)((function(e){return{root:{color:"white",backgroundColor:"rgba(52, 52, 52, 0.8)","&&&:before":{borderBottom:"none"},"&&:after":{borderBottom:"none"}},spinner:{color:"white"},search:{color:"white",backgroundColor:"grey",padding:"0 10px",borderRadius:"5px","&&&:before":{borderBottom:"none"},"&&:after":{borderBottom:"none"}}}})),L=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)([]),i=Object(s.a)(o,2),l=i[0],b=i[1],h=Object(c.useState)(""),u=Object(s.a)(h,2),x=u[0],O=u[1],m=Object(c.useState)(1),g=Object(s.a)(m,2),f=g[0],k=g[1],v=Object(c.useState)(0),y=Object(s.a)(v,2),w=y[0],S=y[1],C=Object(c.useState)(!1),N=Object(s.a)(C,2),B=N[0],P=N[1],D=_();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Book Search App"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){""!==a?(P(!0),j.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(a,"&maxResults=").concat("40","&key=").concat("AIzaSyBhPHCczWmAU6Rr_Oz_KUXDHPwozYSDa_o")).then((function(e){if(0===e.data.totalItems)return P(!1),O("No search results. Please try again with another keyword");b(e.data.items),S(Math.ceil(e.data.items.length/8))})).then((function(t){r(""),O(""),e.target.reset(),P(!1)})).catch((function(e){return P(!0),O(e.response.data.error.message)}))):O("Please fill in the search box")}(e)},children:[""!==x&&Object(n.jsx)(d,{alert:x}),Object(n.jsx)(p.a,{type:"text",placeholder:"Enter book title",autoComplete:"off",onChange:function(e){r(e.target.value)},name:"query",classes:{root:D.root}}),Object(n.jsx)(p.a,{type:"submit",value:"search",classes:{root:D.search}})]}),Object(n.jsx)("div",{className:"spinner-container",children:B&&Object(n.jsx)("div",{className:"spinner",children:Object(n.jsx)(H.a,{classes:{root:D.spinner}})})}),!B&&w>1&&Object(n.jsxs)("p",{className:"pageNumber",children:["Page ",f]}),!B&&Object(n.jsx)(A,{books:l,page:f}),Object(n.jsx)(F,{totalPages:w,handleClick:function(e){k(e)}})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.37ab6a01.chunk.js.map