import{S as t,i as e,s as n,e as a,a as r,b as s,c,d as o,f as l,g as i,h as u,j as d,k as h,l as f,m as v,r as p,n as g,t as m,o as $,p as x,q as b,u as y,v as E,w as T,x as w,y as I,z as P,A as D,B as N}from"./vendor.js";import{s as A}from"./storage.js";function S(t,e,n){const a=t.slice();return a[6]=e[n],a[7]=e,a[8]=n,a}function j(t){let e,n=t[0],s=[];for(let a=0;a<n.length;a+=1)s[a]=k(S(t,n,a));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=a()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=a()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);r(t,e,n)},p(t,a){if(1&a){let r;for(n=t[0],r=0;r<n.length;r+=1){const c=S(t,n,r);s[r]?s[r].p(c,a):(s[r]=k(c),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}},d(t){g(s,t),t&&i(e)}}}function k(t){let e,n,a,g,m,$,x,b,y;function E(){t[2].call(a,t[7],t[8])}function T(){t[3].call($,t[7],t[8])}return{c(){e=s("tr"),n=s("td"),a=s("input"),g=c(),m=s("td"),$=s("input"),x=c(),this.h()},l(t){e=o(t,"TR",{});var r=l(e);n=o(r,"TD",{class:!0});var s=l(n);a=o(s,"INPUT",{class:!0,id:!0}),s.forEach(i),g=u(r),m=o(r,"TD",{class:!0});var c=l(m);$=o(c,"INPUT",{class:!0,id:!0}),c.forEach(i),x=u(r),r.forEach(i),this.h()},h(){d(a,"class","px-2 py-1 border border-gray-300\trounded"),d(a,"id","name"),d(n,"class","border border-gray-300\tpx-2 py-1"),d($,"class","px-2 py-1 border border-gray-300\trounded"),d($,"id","regexp"),d(m,"class","border border-gray-300\tpx-2 py-1")},m(s,c){r(s,e,c),h(e,n),h(n,a),f(a,t[6].name),h(e,g),h(e,m),h(m,$),f($,t[6].regexp),h(e,x),b||(y=[v(a,"input",E),v($,"input",T)],b=!0)},p(e,n){t=e,1&n&&a.value!==t[6].name&&f(a,t[6].name),1&n&&$.value!==t[6].regexp&&f($,t[6].regexp)},d(t){t&&i(e),b=!1,p(y)}}}function B(t){let e,n,a,f,p,g,b,y,E,T,w,I,P,D,N,A,S,k,B,V,H=t[0]&&j(t);return{c(){e=s("div"),n=s("span"),a=m("Patterns"),f=c(),p=s("table"),g=s("thead"),b=s("tr"),y=s("th"),E=m("Name"),T=c(),w=s("th"),I=m("Regexp"),P=c(),D=s("tbody"),H&&H.c(),N=c(),A=s("div"),S=s("button"),k=m("Save"),this.h()},l(t){e=o(t,"DIV",{class:!0});var r=l(e);n=o(r,"SPAN",{class:!0});var s=l(n);a=$(s,"Patterns"),s.forEach(i),f=u(r),p=o(r,"TABLE",{class:!0});var c=l(p);g=o(c,"THEAD",{});var d=l(g);b=o(d,"TR",{});var h=l(b);y=o(h,"TH",{class:!0});var v=l(y);E=$(v,"Name"),v.forEach(i),T=u(h),w=o(h,"TH",{class:!0});var m=l(w);I=$(m,"Regexp"),m.forEach(i),h.forEach(i),d.forEach(i),P=u(c),D=o(c,"TBODY",{});var x=l(D);H&&H.l(x),x.forEach(i),c.forEach(i),N=u(r),A=o(r,"DIV",{class:!0});var j=l(A);S=o(j,"BUTTON",{class:!0});var B=l(S);k=$(B,"Save"),B.forEach(i),j.forEach(i),r.forEach(i),this.h()},h(){d(n,"class","title text-base m-1"),d(y,"class","border border-gray-300 text-left px-2"),d(w,"class","border border-gray-300 text-left px-2"),d(p,"class","table-fixed"),d(S,"class","px-2 py-1 bg-blue-400 text-white rounded hover:bg-blue-500"),d(A,"class","my-1 item-right "),d(e,"class","container")},m(s,c){r(s,e,c),h(e,n),h(n,a),h(e,f),h(e,p),h(p,g),h(g,b),h(b,y),h(y,E),h(b,T),h(b,w),h(w,I),h(p,P),h(p,D),H&&H.m(D,null),h(e,N),h(e,A),h(A,S),h(S,k),B||(V=v(S,"click",t[1]),B=!0)},p(t,[e]){t[0]?H?H.p(t,e):(H=j(t),H.c(),H.m(D,null)):H&&(H.d(1),H=null)},i:x,o:x,d(t){t&&i(e),H&&H.d(),B=!1,V()}}}function V(t,e,n){var a=this&&this.__awaiter||function(t,e,n,a){return new(n||(n=Promise))((function(r,s){function c(t){try{l(a.next(t))}catch(e){s(e)}}function o(t){try{l(a.throw(t))}catch(e){s(e)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,o)}l((a=a.apply(t,e||[])).next())}))};let r;return b((()=>a(void 0,void 0,void 0,(function*(){n(0,r=yield a(void 0,void 0,void 0,(function*(){return(yield A.get(["regexps"])).regexps})))})))),[r,()=>a(void 0,void 0,void 0,(function*(){yield A.set({regexps:r})})),function(t,e){t[e].name=this.value,n(0,r)},function(t,e){t[e].regexp=this.value,n(0,r)}]}class H extends t{constructor(t){super(),e(this,t,V,B,n,{})}}const q=t=>({}),R=t=>({});function U(t){let e,n,a,f,v;const p=t[1].title,g=y(p,t,t[0],R),x=g||function(t){let e;return{c(){e=m("Section")},l(t){e=$(t,"Section")},m(t,n){r(t,e,n)},d(t){t&&i(e)}}}(),b=t[1].default,I=y(b,t,t[0],null);return{c(){e=s("div"),n=s("h2"),x&&x.c(),a=c(),f=s("div"),I&&I.c(),this.h()},l(t){e=o(t,"DIV",{class:!0});var r=l(e);n=o(r,"H2",{class:!0});var s=l(n);x&&x.l(s),s.forEach(i),a=u(r),f=o(r,"DIV",{class:!0});var c=l(f);I&&I.l(c),c.forEach(i),r.forEach(i),this.h()},h(){d(n,"class","title svelte-1ujnqgc"),d(f,"class","content svelte-1ujnqgc"),d(e,"class","container svelte-1ujnqgc")},m(t,s){r(t,e,s),h(e,n),x&&x.m(n,null),h(e,a),h(e,f),I&&I.m(f,null),v=!0},p(t,[e]){g&&g.p&&(!v||1&e)&&E(g,p,t,t[0],v?e:-1,q,R),I&&I.p&&(!v||1&e)&&E(I,b,t,t[0],v?e:-1,null,null)},i(t){v||(T(x,t),T(I,t),v=!0)},o(t){w(x,t),w(I,t),v=!1},d(t){t&&i(e),x&&x.d(t),I&&I.d(t)}}}function _(t,e,n){let{$$slots:a={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,a]}class L extends t{constructor(t){super(),e(this,t,_,U,n,{})}}function F(t){let e,n,a,c,u;return{c(){e=s("label"),n=s("input"),a=m(" Enabled"),this.h()},l(t){e=o(t,"LABEL",{});var r=l(e);n=o(r,"INPUT",{type:!0,name:!0}),a=$(r," Enabled"),r.forEach(i),this.h()},h(){n.checked=t[0],d(n,"type","checkbox"),d(n,"name","status"),n.value="enabled"},m(s,o){r(s,e,o),h(e,n),h(e,a),c||(u=v(n,"change",t[1]),c=!0)},p(t,e){1&e&&(n.checked=t[0])},d(t){t&&i(e),c=!1,u()}}}function O(t){let e,n;return{c(){e=s("span"),n=m("Feature"),this.h()},l(t){e=o(t,"SPAN",{slot:!0});var a=l(e);n=$(a,"Feature"),a.forEach(i),this.h()},h(){d(e,"slot","title")},m(t,a){r(t,e,a),h(e,n)},d(t){t&&i(e)}}}function z(t){let e,n;return e=new L({props:{$$slots:{title:[O],default:[F]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,a){D(e,t,a),n=!0},p(t,[n]){const a={};33&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function M(t,e,n){var a=this&&this.__awaiter||function(t,e,n,a){return new(n||(n=Promise))((function(r,s){function c(t){try{l(a.next(t))}catch(e){s(e)}}function o(t){try{l(a.throw(t))}catch(e){s(e)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,o)}l((a=a.apply(t,e||[])).next())}))};const r=()=>a(void 0,void 0,void 0,(function*(){return(yield A.get(["enable"])).enable}));let s;return b((()=>a(void 0,void 0,void 0,(function*(){n(0,s=yield r())})))),[s,t=>a(void 0,void 0,void 0,(function*(){const e=t.currentTarget.checked;var c;yield(c=e,a(void 0,void 0,void 0,(function*(){A.set({enable:c})}))),n(0,s=yield r())}))]}class Y extends t{constructor(t){super(),e(this,t,M,z,n,{})}}function C(t){let e,n,a,f,v,p,g,b,y,E;return p=new Y({}),y=new H({}),{c(){e=s("main"),n=s("h1"),a=m("📝 Paste string filter"),f=c(),v=s("div"),I(p.$$.fragment),g=c(),b=s("div"),I(y.$$.fragment),this.h()},l(t){e=o(t,"MAIN",{});var r=l(e);n=o(r,"H1",{class:!0});var s=l(n);a=$(s,"📝 Paste string filter"),s.forEach(i),f=u(r),v=o(r,"DIV",{class:!0});var c=l(v);P(p.$$.fragment,c),c.forEach(i),g=u(r),b=o(r,"DIV",{});var d=l(b);P(y.$$.fragment,d),d.forEach(i),r.forEach(i),this.h()},h(){d(n,"class","title svelte-p7rcof"),d(v,"class","mb-1 svelte-p7rcof")},m(t,s){r(t,e,s),h(e,n),h(n,a),h(e,f),h(e,v),D(p,v,null),h(e,g),h(e,b),D(y,b,null),E=!0},p:x,i(t){E||(T(p.$$.fragment,t),T(y.$$.fragment,t),E=!0)},o(t){w(p.$$.fragment,t),w(y.$$.fragment,t),E=!1},d(t){t&&i(e),N(p),N(y)}}}new class extends t{constructor(t){super(),e(this,t,null,C,n,{})}}({target:document.getElementById("app")});
