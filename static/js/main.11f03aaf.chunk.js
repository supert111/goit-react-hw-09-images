(this["webpackJsonpgoit-react-hw-09-image"]=this["webpackJsonpgoit-react-hw-09-image"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1qsym",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1F6_q"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1Nzq2",Modal:"Modal_Modal__1e6s0"}},21:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2zmZp"}},25:function(e,t,a){e.exports={loader_circle:"Loader_loader_circle__1cQ2I"}},26:function(e,t,a){e.exports={Button:"Button_Button__E2Rnr"}},28:function(e,t,a){e.exports={App:"App_App__2TORI"}},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__c35Cz",SearchForm:"Searchbar_SearchForm__1GJ1L",SearchForm_button:"Searchbar_SearchForm_button__1bRru",SearchForm_button_label:"Searchbar_SearchForm_button_label__1TEUd",SearchForm_input:"Searchbar_SearchForm_input__2il8D"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),i=a(12),l=a(4),u=a(5),s=a.n(u),b=a(1);function m(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],o=c[1];return Object(b.jsx)("header",{className:s.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),o("")},className:s.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:s.a.SearchForm_button,children:Object(b.jsx)("span",{className:s.a.SearchForm_button_label,children:"Search"})}),Object(b.jsx)("input",{className:s.a.SearchForm_input,type:"text",value:r,onChange:function(e){o(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var h=a(21),j=a.n(h),d=function(e){var t=e.children;return Object(b.jsx)("div",{className:"second-component",children:Object(b.jsx)("ul",{className:j.a.ImageGallery,children:t})})},_=a(10),O=a.n(_),f=function(e){var t=e.hits,a=e.onClick;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){var t=e.id,n=e.webformatURL;return Object(b.jsx)("li",{onClick:function(){return a(t)},className:O.a.ImageGalleryItem,children:Object(b.jsx)("img",{id:t,src:n,alt:"",className:O.a.ImageGalleryItem_image})},t)}))})},p=a(22),g=a(23),S=a(30),x=a(29),v=(a(36),a(24)),y=a.n(v),I=a(25),F=a.n(I),w=function(e){Object(S.a)(a,e);var t=Object(x.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(b.jsx)(y.a,{className:F.a.loader_circle,type:"ThreeDots",color:"#00BFFF",height:80,width:80})}}]),a}(n.Component),N=a(26),k=a.n(N),C=function(e){var t=e.children,a=e.onClick;return Object(b.jsxs)("button",{type:"button",className:k.a.Button,onClick:a,children:["Load more ",t]})},G=a(11),E=a.n(G),M=document.querySelector("#modal-root");function L(e){var t=e.children,a=e.onClose;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&a()};return Object(r.createPortal)(Object(b.jsx)("div",{className:E.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(b.jsx)("div",{className:E.a.Modal,children:t})}),M)}var T=a(27),q=a.n(T),B="".concat("https://pixabay.com/api/","?key=").concat("20667930-64a6ab52d11330f7fc72003b0"),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return q.a.get("".concat(B,"&q=").concat(e,"&image_type=photo&per_page=").concat(a,"&page=").concat(t)).then((function(e){return e.data.hits}))},A=a(28),z=a.n(A);function D(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),o=Object(l.a)(r,2),u=o[0],s=o[1],h=Object(n.useState)(""),j=Object(l.a)(h,2),_=j[0],O=j[1],p=Object(n.useState)(!1),g=Object(l.a)(p,2),S=g[0],x=g[1],v=Object(n.useState)(null),y=Object(l.a)(v,2),I=y[0],F=y[1],N=Object(n.useState)(!1),k=Object(l.a)(N,2),G=k[0],E=k[1],M=Object(n.useState)(""),T=Object(l.a)(M,2),q=T[0],B=T[1];Object(n.useEffect)((function(){_&&(x(!0),R(_,u).then((function(e){c((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))})).catch((function(e){return F({error:e})})).finally((function(){x(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[_,u]);var A=function(){E((function(e){return{showModal:!e.showModal}}))},D=a.length>0&&!S;return Object(b.jsxs)("div",{className:z.a.App,children:[Object(b.jsx)(m,{onSubmit:function(e){O(e),s(1),c([]),F(null)}}),I&&Object(b.jsx)("h1",{children:"Try entering another request"}),Object(b.jsx)(d,{children:Object(b.jsx)(f,{hits:a,onClick:function(e){var t=a.find((function(t){return t.id===e})).largeImageURL;B(t),A()}})}),S&&Object(b.jsx)(w,{}),D&&Object(b.jsx)(C,{onClick:function(){s((function(e){return e+1})),O(_)}}),G&&Object(b.jsxs)(L,{onClose:A,children:[" ",Object(b.jsx)("img",{src:q,alt:""})," "]})]})}a(75);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.11f03aaf.chunk.js.map