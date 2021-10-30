import{s as I}from"./storageWrapper.js";import{S as z,i as U,s as W,c as H,e as p,a as y,b as c,d as w,f as a,u as J,g as K,h as O,t as N,j as P,k,l as B,m as A,n as Q,o as X,p as Y,q as ie,r as re,v as D,w as R,x as M,y as x,z as oe,A as ae}from"./vendor.js";const ce=s=>({}),ee=s=>({});function ue(s){let e;return{c(){e=B("Section")},m(l,t){w(l,e,t)},d(l){l&&k(e)}}}function de(s){let e,l,t,n,r;const i=s[1].title,_=H(i,s,s[0],ee),m=_||ue(),g=s[1].default,u=H(g,s,s[0],null);return{c(){e=p("div"),l=p("h2"),m&&m.c(),t=y(),n=p("div"),u&&u.c(),c(l,"class","title svelte-k5egac"),c(n,"class","content"),c(e,"class","container svelte-k5egac")},m(o,v){w(o,e,v),a(e,l),m&&m.m(l,null),a(e,t),a(e,n),u&&u.m(n,null),r=!0},p(o,[v]){_&&_.p&&(!r||v&1)&&J(_,i,o,o[0],r?O(i,o[0],v,ce):K(o[0]),ee),u&&u.p&&(!r||v&1)&&J(u,g,o,o[0],r?O(g,o[0],v,null):K(o[0]),null)},i(o){r||(N(m,o),N(u,o),r=!0)},o(o){P(m,o),P(u,o),r=!1},d(o){o&&k(e),m&&m.d(o),u&&u.d(o)}}}function pe(s,e,l){let{$$slots:t={},$$scope:n}=e;return s.$$set=r=>{"$$scope"in r&&l(0,n=r.$$scope)},[n,t]}class fe extends z{constructor(e){super();U(this,e,pe,de,W,{})}}const T=A`
  border-radius: 0.15rem;
  padding: 0.25rem 0.25rem;
  border: 0.01rem solid #808080;
`,me=A`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #80032D;
  border: none;
  letter-spacing: 0.12rem;
  width: 6rem;
`,_e=A`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #034780;
  border: none;
  letter-spacing: 0.12rem;
  width: 6rem;
`,ge=A`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #270380;
  border: none;
  letter-spacing: 0.12rem;
  margin-right: .5rem;
    width: 6rem;
`,te=A`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
  margin-bottom: .5rem;
`,F=A`
  margin: 0.25rem 0.5rem 0.25rem 0;
`,ve=A`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.5rem;
  margin-top: 2rem;
`,he=A`
  margin: 1.5rem 0;
`;function ne(s,e,l){const t=s.slice();return t[12]=e[l],t[13]=e,t[14]=l,t}function le(s){let e,l=s[0],t=[];for(let n=0;n<l.length;n+=1)t[n]=se(ne(s,l,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=re()},m(n,r){for(let i=0;i<t.length;i+=1)t[i].m(n,r);w(n,e,r)},p(n,r){if(r&17){l=n[0];let i;for(i=0;i<l.length;i+=1){const _=ne(n,l,i);t[i]?t[i].p(_,r):(t[i]=se(_),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},d(n){oe(t,n),n&&k(e)}}}function se(s){let e,l,t,n,r,i,_,m,g,u,o,v,C;function L(){s[6].call(t,s[13],s[14])}function d(){s[7].call(i,s[13],s[14])}function b(){return s[8](s[14])}return{c(){e=p("div"),l=p("div"),t=p("input"),n=y(),r=p("div"),i=p("input"),_=y(),m=p("div"),g=p("button"),u=B("DELETE"),o=y(),c(t,"class",T),c(t,"id","name"),c(l,"class",F),c(i,"class",T),c(i,"id","regexp"),c(r,"class",F),c(g,"type","button"),c(g,"class",me),c(m,"class",F),c(e,"class",te)},m($,E){w($,e,E),a(e,l),a(l,t),D(t,s[12].name),a(e,n),a(e,r),a(r,i),D(i,s[12].regexp),a(e,_),a(e,m),a(m,g),a(g,u),a(e,o),v||(C=[R(t,"input",L),R(i,"input",d),R(g,"click",M(b))],v=!0)},p($,E){s=$,E&1&&t.value!==s[12].name&&D(t,s[12].name),E&1&&i.value!==s[12].regexp&&D(i,s[12].regexp)},d($){$&&k(e),v=!1,x(C)}}}function be(s){let e,l,t,n,r,i,_,m,g,u,o,v,C,L,d,b,$,E,V,j,Z,q,G,h=s[0]&&le(s);return{c(){e=p("div"),l=p("p"),l.textContent="Filtered word",t=y(),n=p("input"),r=y(),i=p("div"),_=p("div"),m=B("Name"),g=y(),u=p("div"),o=B("Regexp"),v=y(),C=p("div"),L=y(),h&&h.c(),d=y(),b=p("div"),$=p("button"),E=B("SAVE"),V=y(),j=p("button"),Z=B("ADD"),c(n,"class",T),c(n,"id","filtered"),c(e,"class",he),c(_,"class",F),c(u,"class",F),c(C,"class",F),c(i,"class",te),c($,"type","button"),c($,"class",ge),c(j,"type","button"),c(j,"class",_e),c(b,"class",ve)},m(f,S){w(f,e,S),a(e,l),a(e,t),a(e,n),D(n,s[1]),w(f,r,S),w(f,i,S),a(i,_),a(_,m),a(i,g),a(i,u),a(u,o),a(i,v),a(i,C),w(f,L,S),h&&h.m(f,S),w(f,d,S),w(f,b,S),a(b,$),a($,E),a(b,V),a(b,j),a(j,Z),q||(G=[R(n,"input",s[5]),R($,"click",M(s[2])),R(j,"click",M(s[3]))],q=!0)},p(f,S){S&2&&n.value!==f[1]&&D(n,f[1]),f[0]?h?h.p(f,S):(h=le(f),h.c(),h.m(d.parentNode,d)):h&&(h.d(1),h=null)},d(f){f&&k(e),f&&k(r),f&&k(i),f&&k(L),h&&h.d(f),f&&k(d),f&&k(b),q=!1,x(G)}}}function $e(s){let e;return{c(){e=p("span"),e.textContent="\u{1F4DD} Paste String Filter",c(e,"slot","title")},m(l,t){w(l,e,t)},d(l){l&&k(e)}}}function we(s){let e,l;return e=new fe({props:{$$slots:{title:[$e],default:[be]},$$scope:{ctx:s}}}),{c(){Q(e.$$.fragment)},m(t,n){X(e,t,n),l=!0},p(t,[n]){const r={};n&32771&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}const ke="(filtered)";function ye(s,e,l){let t,n;const r=[{name:"mail",regexp:"[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+",enable:!0}],i=async()=>await I.get(["filteredStr","combinations"]),_=async()=>{await I.set({combinations:t,filteredStr:n})},m=async()=>{const d={name:"",regexp:"",enable:!0};t.push(d),await I.set({combinations:t}),u()},g=async d=>{t.splice(d,1),await I.set({combinations:t}),u()},u=function(){const d=window.location.href.includes("localhost")?"http://localhost:3000/dist/":chrome.runtime.getURL("dist/index.html");window.location.href=d};ie(async()=>{const d=await i();l(1,n=d.filteredStr||ke),l(0,t=d.combinations||r)});function o(){n=this.value,l(1,n)}function v(d,b){d[b].name=this.value,l(0,t)}function C(d,b){d[b].regexp=this.value,l(0,t)}return[t,n,_,m,g,o,v,C,d=>g(d)]}class Se extends z{constructor(e){super();U(this,e,ye,we,W,{})}}function Ce(s){let e,l,t;return l=new Se({}),{c(){e=p("main"),Q(l.$$.fragment)},m(n,r){w(n,e,r),X(l,e,null),t=!0},p:ae,i(n){t||(N(l.$$.fragment,n),t=!0)},o(n){P(l.$$.fragment,n),t=!1},d(n){n&&k(e),Y(l)}}}class Ae extends z{constructor(e){super();U(this,e,null,Ce,W,{})}}new Ae({target:document.getElementById("app")});
