(function(){"use strict";var e={1182:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.$route.name,mode:"horizontal",router:""}},[t("el-menu-item",{attrs:{index:"game",route:"/"}},[e._v("Тывызыкты тывар")]),t("el-menu-item",{attrs:{index:"rezult",route:"/rez"}},[e._v("Оюннун туннели")])],1),t("router-view")],1)},a=[],i={name:"app",components:{}},u=i,s=n(1001),c=(0,s.Z)(u,o,a,!1,null,null,null),l=c.exports,d=n(2631),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("h2",[e._v("Ойнакчыларнын данзызы")]),t("button",{on:{click:function(t){return e.view()}}},[e._v("click")]),t("table",{staticClass:"w3-table w3-striped"},[e._m(0),e._l(e.users,(function(n){return t("tr",{key:n.id},[t("td",[e._v(e._s(n.fname))]),t("td",[e._v(e._s(n.lname))]),t("td",[e._v(e._s(n.defeat))])])}))],2)])},p=[function(){var e=this,t=e._self._c;return t("tr",[t("th",[e._v("Фамилиязы")]),t("th",[e._v("Ады")]),t("th",[e._v("Частырыглары")])])}],m=n(4905),h=n(3546),b=n.n(h),g={name:"HomeView",computed:{users(){return m.h.state.users}},methods:{view(){b().send("VKWebAppGetUserInfo").then((e=>{e.id&&(console.log(e.id),console.log(e.last_name),console.log(e.first_name))})).catch((e=>{console.log(e)}))}}},v=g,y=(0,s.Z)(v,f,p,!1,null,null,null),_=y.exports;r["default"].use(d.ZP);const k=[{path:"/rez",name:"rezult",component:_},{path:"/",name:"game",component:()=>n.e(443).then(n.bind(n,257))}],w=new d.ZP({routes:k});var z=w,C=n(8499),A=n.n(C),O=n(2198);r["default"].use(A(),{locale:O.Z}),r["default"].config.productionTip=!1,b().send("VKWebAppInit"),new r["default"]({router:z,render:e=>e(l)}).$mount("#app")},4905:function(e,t,n){n.d(t,{h:function(){return f}});var r=n(6369),o=n(3822),a=n(7004),i=n(186),u=n.n(i);n(8307);const s={apiKey:"AIzaSyDC4qJty0l_AMa7kN-TP__cGh0cRH9BKok",authDomain:"rusik-magaz17.firebaseapp.com",databaseURL:"https://rusik-magaz17-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"rusik-magaz17",storageBucket:"rusik-magaz17.appspot.com",messagingSenderId:"37682391596",appId:"1:37682391596:web:c2fa73eda7beff2eb0ff89"},c=u().initializeApp(s).firestore(),{TimeStamp:l,GeoPoint:d}=u().firestore;r["default"].use(o.ZP);const f=new o.ZP.Store({state:{zag:[],teachers:[],g40b:[],users:[]},mutations:{...a.nk},actions:{bindZag:(0,a.ye)((({bindFirestoreRef:e})=>e("zag",c.collection("zagadki")))),bindU:(0,a.ye)((({bindFirestoreRef:e})=>e("users",c.collection("zag_users")))),bindTeachers:(0,a.ye)((({bindFirestoreRef:e})=>e("teachers",c.collection("teachers")))),addUser:(0,a.ye)(((e,t)=>c.collection("zag_users").add(t))),saveR:(0,a.ye)(((e,t)=>c.collection("rezult_zagadki").add(t))),delUser:(0,a.ye)(((e,t)=>{c.collection("g40b").doc(t).delete()})),updateG:(0,a.ye)(((e,{id:t,doc:n})=>{c.collection("g40b").doc(t).update(n)})),initFirebase(){u().initializeApp({apiKey:"AIzaSyDC4qJty0l_AMa7kN-TP__cGh0cRH9BKok",authDomain:"rusik-magaz17.firebaseapp.com",databaseURL:"https://rusik-magaz17-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"rusik-magaz17",storageBucket:"rusik-magaz17.appspot.com",messagingSenderId:"37682391596",appId:"1:37682391596:web:c2fa73eda7beff2eb0ff89"})}}});f.dispatch("bindZag"),f.dispatch("bindU"),f.dispatch("bindTeachers")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.21488266.js"}}(),function(){n.miniCssF=function(e){return"css/about.82d2784f.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="hello-world:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1182)}));r=n.O(r)})();
//# sourceMappingURL=app.22c47569.js.map