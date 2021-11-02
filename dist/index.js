import{s as U}from"./storageWrapper.js";import{S as M,i as V,s as Z,c as ee,e as f,a as v,b as d,d as w,f as c,u as te,g as ne,h as le,t as S,j as L,k,l as T,m as q,n as H,o as F,p as J,q as K,r as O,v as fe,w as me,x as z,y as Q,z as ie,A as se,B as re,C as pe}from"./vendor.js";const _e=i=>({}),oe=i=>({});function ge(i){let e;return{c(){e=T("Section")},m(l,t){w(l,e,t)},d(l){l&&k(e)}}}function he(i){let e,l,t,n,r;const s=i[1].title,o=ee(s,i,i[0],oe),a=o||ge(),_=i[1].default,g=ee(_,i,i[0],null);return{c(){e=f("div"),l=f("h2"),a&&a.c(),t=v(),n=f("div"),g&&g.c(),d(l,"class","title svelte-k5egac"),d(n,"class","content"),d(e,"class","container svelte-k5egac")},m(u,h){w(u,e,h),c(e,l),a&&a.m(l,null),c(e,t),c(e,n),g&&g.m(n,null),r=!0},p(u,[h]){o&&o.p&&(!r||h&1)&&te(o,s,u,u[0],r?le(s,u[0],h,_e):ne(u[0]),oe),g&&g.p&&(!r||h&1)&&te(g,_,u,u[0],r?le(_,u[0],h,null):ne(u[0]),null)},i(u){r||(S(a,u),S(g,u),r=!0)},o(u){L(a,u),L(g,u),r=!1},d(u){u&&k(e),a&&a.d(u),g&&g.d(u)}}}function be(i,e,l){let{$$slots:t={},$$scope:n}=e;return i.$$set=r=>{"$$scope"in r&&l(0,n=r.$$scope)},[n,t]}class ve extends M{constructor(e){super();V(this,e,be,he,Z,{})}}function we(i){let e,l,t,n;return{c(){e=f("input"),d(e,"type","checkbox"),d(e,"name","status"),e.checked=l=i[0].enable},m(r,s){w(r,e,s),t||(n=q(e,"change",i[1]),t=!0)},p(r,[s]){s&1&&l!==(l=r[0].enable)&&(e.checked=l)},i:H,o:H,d(r){r&&k(e),t=!1,n()}}}function ke(i,e,l){let{index:t}=e,{combination:n}=e,{handler:r}=e;const s=async o=>{console.log(o.currentTarget.checked),r(o.currentTarget.checked,t)};return i.$$set=o=>{"index"in o&&l(2,t=o.index),"combination"in o&&l(0,n=o.combination),"handler"in o&&l(3,r=o.handler)},[n,s,t,r]}class ye extends M{constructor(e){super();V(this,e,ke,we,Z,{index:2,combination:0,handler:3})}}const X=F`
  border-radius: 0.15rem;
  padding: 0.25rem 0.25rem;
  border: 0.01rem solid #808080;
`,$e=F`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #80032D;
  border: none;
  letter-spacing: 0.12rem;
  width: 6rem;
`,Ce=F`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #034780;
  border: none;
  letter-spacing: 0.12rem;
  width: 6rem;
`,Se=F`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #270380;
  border: none;
  letter-spacing: 0.12rem;
  margin-right: .5rem;
    width: 6rem;
`,ae=F`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
  margin-bottom: .5rem;
`,I=F`
  margin: 0.25rem 0.5rem 0.25rem 0;
`,Ae=F`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.5rem;
  margin-top: 2rem;
`,Be=F`
  margin: 1.5rem 0;
`;function ce(i,e,l){const t=i.slice();return t[13]=e[l],t[14]=e,t[15]=l,t}function ue(i){let e,l,t=i[0],n=[];for(let s=0;s<t.length;s+=1)n[s]=de(ce(i,t,s));const r=s=>L(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=me()},m(s,o){for(let a=0;a<n.length;a+=1)n[a].m(s,o);w(s,e,o),l=!0},p(s,o){if(o&49){t=s[0];let a;for(a=0;a<t.length;a+=1){const _=ce(s,t,a);n[a]?(n[a].p(_,o),S(n[a],1)):(n[a]=de(_),n[a].c(),S(n[a],1),n[a].m(e.parentNode,e))}for(se(),a=t.length;a<n.length;a+=1)r(a);re()}},i(s){if(!l){for(let o=0;o<t.length;o+=1)S(n[o]);l=!0}},o(s){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)L(n[o]);l=!1},d(s){pe(n,s),s&&k(e)}}}function de(i){let e,l,t,n,r,s,o,a,_,g,u,h,A,N,j,m,y;t=new ye({props:{index:i[15],combination:i[13],handler:i[5]}});function P(){i[7].call(s,i[14],i[15])}function B(){i[8].call(_,i[14],i[15])}function D(){return i[9](i[15])}return{c(){e=f("div"),l=f("div"),J(t.$$.fragment),n=v(),r=f("div"),s=f("input"),o=v(),a=f("div"),_=f("input"),g=v(),u=f("div"),h=f("button"),A=T("DELETE"),N=v(),d(l,"class",I),d(s,"class",X),d(s,"id","name"),d(r,"class",I),d(_,"class",X),d(_,"id","regexp"),d(a,"class",I),d(h,"type","button"),d(h,"class",$e),d(u,"class",I),d(e,"class",ae)},m($,R){w($,e,R),c(e,l),K(t,l,null),c(e,n),c(e,r),c(r,s),z(s,i[13].name),c(e,o),c(e,a),c(a,_),z(_,i[13].regexp),c(e,g),c(e,u),c(u,h),c(h,A),c(e,N),j=!0,m||(y=[q(s,"input",P),q(_,"input",B),q(h,"click",Q(D))],m=!0)},p($,R){i=$;const E={};R&1&&(E.combination=i[13]),t.$set(E),R&1&&s.value!==i[13].name&&z(s,i[13].name),R&1&&_.value!==i[13].regexp&&z(_,i[13].regexp)},i($){j||(S(t.$$.fragment,$),j=!0)},o($){L(t.$$.fragment,$),j=!1},d($){$&&k(e),O(t),m=!1,ie(y)}}}function Ee(i){let e,l,t,n,r,s,o,a,_,g,u,h,A,N,j,m,y,P,B,D,$,R,E,Y,W,G,x,b=i[0]&&ue(i);return{c(){e=f("div"),l=f("p"),l.textContent="Filtered word",t=v(),n=f("input"),r=v(),s=f("div"),o=f("div"),a=T("Status"),_=v(),g=f("div"),u=T("Name"),h=v(),A=f("div"),N=T("Regexp"),j=v(),m=f("div"),y=v(),b&&b.c(),P=v(),B=f("div"),D=f("button"),$=T("SAVE"),R=v(),E=f("button"),Y=T("ADD"),d(n,"class",X),d(n,"id","filtered"),d(e,"class",Be),d(o,"class",I),d(g,"class",I),d(A,"class",I),d(m,"class",I),d(s,"class",ae),d(D,"type","button"),d(D,"class",Se),d(E,"type","button"),d(E,"class",Ce),d(B,"class",Ae)},m(p,C){w(p,e,C),c(e,l),c(e,t),c(e,n),z(n,i[1]),w(p,r,C),w(p,s,C),c(s,o),c(o,a),c(s,_),c(s,g),c(g,u),c(s,h),c(s,A),c(A,N),c(s,j),c(s,m),w(p,y,C),b&&b.m(p,C),w(p,P,C),w(p,B,C),c(B,D),c(D,$),c(B,R),c(B,E),c(E,Y),W=!0,G||(x=[q(n,"input",i[6]),q(D,"click",Q(i[2])),q(E,"click",Q(i[3]))],G=!0)},p(p,C){C&2&&n.value!==p[1]&&z(n,p[1]),p[0]?b?(b.p(p,C),C&1&&S(b,1)):(b=ue(p),b.c(),S(b,1),b.m(P.parentNode,P)):b&&(se(),L(b,1,1,()=>{b=null}),re())},i(p){W||(S(b),W=!0)},o(p){L(b),W=!1},d(p){p&&k(e),p&&k(r),p&&k(s),p&&k(y),b&&b.d(p),p&&k(P),p&&k(B),G=!1,ie(x)}}}function Le(i){let e;return{c(){e=f("span"),e.textContent="Paste String Filter",d(e,"slot","title")},m(l,t){w(l,e,t)},d(l){l&&k(e)}}}function je(i){let e,l;return e=new ve({props:{$$slots:{title:[Le],default:[Ee]},$$scope:{ctx:i}}}),{c(){J(e.$$.fragment)},m(t,n){K(e,t,n),l=!0},p(t,[n]){const r={};n&65539&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}const De="(filtered)";function Re(i,e,l){let t,n;const r=[{name:"mail",regexp:"[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+",enable:!0}],s=async()=>await U.get(["filteredStr","combinations"]),o=async()=>{await U.set({combinations:t,filteredStr:n})},a=async()=>{const m={name:"",regexp:"",enable:!0};t.push(m),await U.set({combinations:t}),g()},_=async m=>{t.splice(m,1),await U.set({combinations:t}),g()},g=function(){const m=window.location.href.includes("localhost")?"http://localhost:3000/dist/":chrome.runtime.getURL("dist/index.html");window.location.href=m},u=async(m,y)=>{l(0,t[y].enable=m,t),await U.set({combinations:t})};fe(async()=>{const m=await s();l(1,n=m.filteredStr||De),l(0,t=m.combinations||r)});function h(){n=this.value,l(1,n)}function A(m,y){m[y].name=this.value,l(0,t)}function N(m,y){m[y].regexp=this.value,l(0,t)}return[t,n,o,a,_,u,h,A,N,m=>_(m)]}class Fe extends M{constructor(e){super();V(this,e,Re,je,Z,{})}}function Ie(i){let e,l,t;return l=new Fe({}),{c(){e=f("main"),J(l.$$.fragment)},m(n,r){w(n,e,r),K(l,e,null),t=!0},p:H,i(n){t||(S(l.$$.fragment,n),t=!0)},o(n){L(l.$$.fragment,n),t=!1},d(n){n&&k(e),O(l)}}}class Ne extends M{constructor(e){super();V(this,e,null,Ie,Z,{})}}new Ne({target:document.getElementById("app")});
