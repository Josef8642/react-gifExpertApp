(this.webpackJsonpgidexpertapp=this.webpackJsonpgidexpertapp||[]).push([[0],{446:function(e,t,n){},447:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(132),r=n.n(a),i=n(30),s=n(135),o=(n(140),n(1)),u=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],u=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"AddCategory"}),Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[r].concat(Object(s.a)(e))})),u("")},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})]})},j=n(83),d=n(53),l=n.n(d),b=n(134),p=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,c,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=BDp6dyWwV7bQNEeTSeRUEnqVIKtNxQjl"),c=fetch(n),e.next=4,c;case 4:return e.next=6,e.sent.json();case 6:return a=e.sent,r=a.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){e.id;var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"imagenes animate__animated animate__zoomIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},m=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){console.log(e),p(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),2e3)}))}),[e]),a}(t),a=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{children:[" ",t,"  "]}),r?Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"cargando"}):Object(o.jsx)("p",{children:" melo caramelo"}),Object(o.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(c.createElement)(O,Object(j.a)(Object(j.a)({},e),{},{key:e.id}))}))})]})},h=function(){var e=Object(c.useState)(["One Piece"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:a}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(m,{category:e},e)}))})]})})};n(446);r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[447,1,2]]]);
//# sourceMappingURL=main.6b2244f2.chunk.js.map