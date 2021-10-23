import{s as R}from"./storageWrapper.js";import{c as A,S as q,i as z,s as U,e as oe,a as $,b as p,d as w,t as B,f as o,g as r,h as F,l as E,p as T,j as k,r as V,k as ce,n as Z,o as X,m as Y,u as x,q as ee,v as te,w as N,x as P,y as G,z as H,A as J,B as ue}from"./vendor.js";const W=A`
  border-radius: 0.15rem;
  padding: 0.25rem 0.25rem;
  border: 0.01rem solid #808080;
`,de=A`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #80032D;
  border: none;
  letter-spacing: 0.12rem;
  width: 6rem;
`,fe=A`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #034780;
  border: none;
  letter-spacing: 0.12rem;
  width: 6rem;
`,pe=A`
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  color: white;
  background-color: #270380;
  border: none;
  letter-spacing: 0.12rem;
  margin-right: .5rem;
    width: 6rem;
`,ne=A`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
  margin-bottom: .5rem;
`,I=A`
  margin: 0.25rem 0.5rem 0.25rem 0;
`,me=A`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.5rem;
  margin-top: 2rem;
`,le=A`
  margin: 1.5rem 0;
`;function se(i,t,n){const e=i.slice();return e[12]=t[n],e[13]=t,e[14]=n,e}function ie(i){let t,n=i[0],e=[];for(let l=0;l<n.length;l+=1)e[l]=ae(se(i,n,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=oe()},m(l,a){for(let s=0;s<e.length;s+=1)e[s].m(l,a);$(l,t,a)},p(l,a){if(a&17){n=l[0];let s;for(s=0;s<n.length;s+=1){const d=se(l,n,s);e[s]?e[s].p(d,a):(e[s]=ae(d),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},d(l){ce(e,l),l&&k(t)}}}function ae(i){let t,n,e,l,a,s,d,f,m,u,c,h,C;function L(){i[6].call(e,i[13],i[14])}function _(){i[7].call(s,i[13],i[14])}function v(){return i[8](i[14])}return{c(){t=p("div"),n=p("div"),e=p("input"),l=w(),a=p("div"),s=p("input"),d=w(),f=p("div"),m=p("button"),u=B("DELETE"),c=w(),o(e,"class",W),o(e,"id","name"),o(n,"class",I),o(s,"class",W),o(s,"id","regexp"),o(a,"class",I),o(m,"type","button"),o(m,"class",de),o(f,"class",I),o(t,"class",ne)},m(y,D){$(y,t,D),r(t,n),r(n,e),F(e,i[12].name),r(t,l),r(t,a),r(a,s),F(s,i[12].regexp),r(t,d),r(t,f),r(f,m),r(m,u),r(t,c),h||(C=[E(e,"input",L),E(s,"input",_),E(m,"click",T(v))],h=!0)},p(y,D){i=y,D&1&&e.value!==i[12].name&&F(e,i[12].name),D&1&&s.value!==i[12].regexp&&F(s,i[12].regexp)},d(y){y&&k(t),h=!1,V(C)}}}function _e(i){let t,n,e,l,a,s,d,f,m,u,c,h,C,L,_,v,y,D,K,j,O,M,Q,b=i[0]&&ie(i);return{c(){t=p("div"),n=p("p"),n.textContent="Filtered word",e=w(),l=p("input"),a=w(),s=p("div"),d=p("div"),f=B("Name"),m=w(),u=p("div"),c=B("Regexp"),h=w(),C=p("div"),L=w(),b&&b.c(),_=w(),v=p("div"),y=p("button"),D=B("SAVE"),K=w(),j=p("button"),O=B("ADD"),o(l,"class",W),o(l,"id","filtered"),o(t,"class",le),o(d,"class",I),o(u,"class",I),o(C,"class",I),o(s,"class",ne),o(y,"type","button"),o(y,"class",pe),o(j,"type","button"),o(j,"class",fe),o(v,"class",me)},m(g,S){$(g,t,S),r(t,n),r(t,e),r(t,l),F(l,i[1]),$(g,a,S),$(g,s,S),r(s,d),r(d,f),r(s,m),r(s,u),r(u,c),r(s,h),r(s,C),$(g,L,S),b&&b.m(g,S),$(g,_,S),$(g,v,S),r(v,y),r(y,D),r(v,K),r(v,j),r(j,O),M||(Q=[E(l,"input",i[5]),E(y,"click",T(i[2])),E(j,"click",T(i[3]))],M=!0)},p(g,[S]){S&2&&l.value!==g[1]&&F(l,g[1]),g[0]?b?b.p(g,S):(b=ie(g),b.c(),b.m(_.parentNode,_)):b&&(b.d(1),b=null)},i:Z,o:Z,d(g){g&&k(t),g&&k(a),g&&k(s),g&&k(L),b&&b.d(g),g&&k(_),g&&k(v),M=!1,V(Q)}}}const ge="(filtered)";function he(i,t,n){let e,l;const a=[{name:"mail",regexp:"[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+",enable:!0}],s=async()=>await R.get(["filteredStr","combinations"]),d=async()=>{await R.set({combinations:e,filteredStr:l})},f=async()=>{const _={name:"",regexp:"",enable:!0};e.push(_),await R.set({combinations:e}),u()},m=async _=>{e.splice(_,1),await R.set({combinations:e}),u()},u=function(){const _=window.location.href.includes("localhost")?"http://localhost:3000/dist/":chrome.runtime.getURL("dist/index.html");window.location.href=_};X(async()=>{const _=await s();n(1,l=_.filteredStr||ge),n(0,e=_.combinations||a)});function c(){l=this.value,n(1,l)}function h(_,v){_[v].name=this.value,n(0,e)}function C(_,v){_[v].regexp=this.value,n(0,e)}return[e,l,d,f,m,c,h,C,_=>m(_)]}class be extends q{constructor(t){super();z(this,t,he,_e,U,{})}}const ve=i=>({}),re=i=>({});function $e(i){let t;return{c(){t=B("Section")},m(n,e){$(n,t,e)},d(n){n&&k(t)}}}function we(i){let t,n,e,l,a;const s=i[1].title,d=Y(s,i,i[0],re),f=d||$e(),m=i[1].default,u=Y(m,i,i[0],null);return{c(){t=p("div"),n=p("h2"),f&&f.c(),e=w(),l=p("div"),u&&u.c(),o(n,"class","title svelte-k5egac"),o(l,"class","content"),o(t,"class","container svelte-k5egac")},m(c,h){$(c,t,h),r(t,n),f&&f.m(n,null),r(t,e),r(t,l),u&&u.m(l,null),a=!0},p(c,[h]){d&&d.p&&(!a||h&1)&&x(d,s,c,c[0],a?te(s,c[0],h,ve):ee(c[0]),re),u&&u.p&&(!a||h&1)&&x(u,m,c,c[0],a?te(m,c[0],h,null):ee(c[0]),null)},i(c){a||(N(f,c),N(u,c),a=!0)},o(c){P(f,c),P(u,c),a=!1},d(c){c&&k(t),f&&f.d(c),u&&u.d(c)}}}function ke(i,t,n){let{$$slots:e={},$$scope:l}=t;return i.$$set=a=>{"$$scope"in a&&n(0,l=a.$$scope)},[l,e]}class ye extends q{constructor(t){super();z(this,t,ke,we,U,{})}}function Se(i){let t,n,e,l,a=(i[0]?"Enable":"Disable")+"",s,d,f;return{c(){t=p("div"),n=p("label"),e=p("input"),l=w(),s=B(a),o(e,"class",W),o(e,"type","checkbox"),o(e,"name","status"),o(t,"class",le)},m(m,u){$(m,t,u),r(t,n),r(n,e),e.checked=i[0],r(n,l),r(n,s),d||(f=[E(e,"change",i[2]),E(e,"change",i[1])],d=!0)},p(m,u){u&1&&(e.checked=m[0]),u&1&&a!==(a=(m[0]?"Enable":"Disable")+"")&&ue(s,a)},d(m){m&&k(t),d=!1,V(f)}}}function Ce(i){let t;return{c(){t=p("span"),t.textContent="\u{1F4DD} Paste String Filter",o(t,"slot","title")},m(n,e){$(n,t,e)},d(n){n&&k(t)}}}function Ae(i){let t,n;return t=new ye({props:{$$slots:{title:[Ce],default:[Se]},$$scope:{ctx:i}}}),{c(){G(t.$$.fragment)},m(e,l){H(t,e,l),n=!0},p(e,[l]){const a={};l&33&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ee(i,t,n){let e=!1;const l=async()=>(await R.get(["enable"])).enable==="true",a=async f=>{await R.set({enable:f}),n(0,e=f)},s=async()=>{await a(e)};X(async()=>{n(0,e=await l())});function d(){e=this.checked,n(0,e)}return[e,s,d]}class De extends q{constructor(t){super();z(this,t,Ee,Ae,U,{})}}function Be(i){let t,n,e,l,a;return n=new De({}),l=new be({}),{c(){t=p("main"),G(n.$$.fragment),e=w(),G(l.$$.fragment)},m(s,d){$(s,t,d),H(n,t,null),r(t,e),H(l,t,null),a=!0},p:Z,i(s){a||(N(n.$$.fragment,s),N(l.$$.fragment,s),a=!0)},o(s){P(n.$$.fragment,s),P(l.$$.fragment,s),a=!1},d(s){s&&k(t),J(n),J(l)}}}class Le extends q{constructor(t){super();z(this,t,null,Be,U,{})}}new Le({target:document.getElementById("app")});
