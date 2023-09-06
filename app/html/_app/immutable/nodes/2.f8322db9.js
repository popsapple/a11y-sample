import{s as I,e as G,i as x,d as m,A as dt,b as pt,B as _t,t as mt,C as rt,q as Q,D as ct,f as b,a as j,g as y,h as et,E,c as $,j as g,x as C,F as J,y as D,G as ft,p as vt,H as U}from"../chunks/scheduler.0a807b82.js";import{S as z,i as N,g as nt,t as V,c as st,a as B,b as F,d as W,m as X,e as K}from"../chunks/index.5c65ad96.js";import{d as ht,r as gt,w as bt}from"../chunks/index.58da416a.js";function Z(r,t){const e={},i={},l={$$scope:1};let a=r.length;for(;a--;){const c=r[a],n=t[a];if(n){for(const s in c)s in n||(i[s]=1);for(const s in n)l[s]||(e[s]=n[s],l[s]=1);r[a]=n}else for(const s in c)l[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function tt(r){return typeof r=="object"&&r!==null?r:{}}function yt(r,t){if(r instanceof RegExp)return{keys:!1,pattern:r};var e,i,l,a,c=[],n="",s=r.split("/");for(s[0]||s.shift();l=s.shift();)e=l[0],e==="*"?(c.push("wild"),n+="/(.*)"):e===":"?(i=l.indexOf("?",1),a=l.indexOf(".",1),c.push(l.substring(1,~i?i:~a?a:l.length)),n+=~i&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(n+=(~i?"?":"")+"\\"+l.substring(a))):n+="/"+l;return{keys:c,pattern:new RegExp("^"+n+(t?"(?=$|/)":"/?$"),"i")}}function wt(r){let t,e,i;const l=[r[2]];var a=r[0];function c(n,s){let o={};if(s!==void 0&&s&4)o=Z(l,[tt(n[2])]);else for(let f=0;f<l.length;f+=1)o=ct(o,l[f]);return{props:o}}return a&&(t=Q(a,c(r)),t.$on("routeEvent",r[7])),{c(){t&&F(t.$$.fragment),e=G()},l(n){t&&W(t.$$.fragment,n),e=G()},m(n,s){t&&X(t,n,s),x(n,e,s),i=!0},p(n,s){if(s&1&&a!==(a=n[0])){if(t){nt();const o=t;V(o.$$.fragment,1,0,()=>{K(o,1)}),st()}a?(t=Q(a,c(n,s)),t.$on("routeEvent",n[7]),F(t.$$.fragment),B(t.$$.fragment,1),X(t,e.parentNode,e)):t=null}else if(a){const o=s&4?Z(l,[tt(n[2])]):{};t.$set(o)}},i(n){i||(t&&B(t.$$.fragment,n),i=!0)},o(n){t&&V(t.$$.fragment,n),i=!1},d(n){n&&m(e),t&&K(t,n)}}}function xt(r){let t,e,i;const l=[{params:r[1]},r[2]];var a=r[0];function c(n,s){let o={};if(s!==void 0&&s&6)o=Z(l,[s&2&&{params:n[1]},s&4&&tt(n[2])]);else for(let f=0;f<l.length;f+=1)o=ct(o,l[f]);return{props:o}}return a&&(t=Q(a,c(r)),t.$on("routeEvent",r[6])),{c(){t&&F(t.$$.fragment),e=G()},l(n){t&&W(t.$$.fragment,n),e=G()},m(n,s){t&&X(t,n,s),x(n,e,s),i=!0},p(n,s){if(s&1&&a!==(a=n[0])){if(t){nt();const o=t;V(o.$$.fragment,1,0,()=>{K(o,1)}),st()}a?(t=Q(a,c(n,s)),t.$on("routeEvent",n[6]),F(t.$$.fragment),B(t.$$.fragment,1),X(t,e.parentNode,e)):t=null}else if(a){const o=s&6?Z(l,[s&2&&{params:n[1]},s&4&&tt(n[2])]):{};t.$set(o)}},i(n){i||(t&&B(t.$$.fragment,n),i=!0)},o(n){t&&V(t.$$.fragment,n),i=!1},d(n){n&&m(e),t&&K(t,n)}}}function Ct(r){let t,e,i,l;const a=[xt,wt],c=[];function n(s,o){return s[1]?0:1}return t=n(r),e=c[t]=a[t](r),{c(){e.c(),i=G()},l(s){e.l(s),i=G()},m(s,o){c[t].m(s,o),x(s,i,o),l=!0},p(s,[o]){let f=t;t=n(s),t===f?c[t].p(s,o):(nt(),V(c[f],1,1,()=>{c[f]=null}),st(),e=c[t],e?e.p(s,o):(e=c[t]=a[t](s),e.c()),B(e,1),e.m(i.parentNode,i))},i(s){l||(B(e),l=!0)},o(s){V(e),l=!1},d(s){s&&m(i),c[t].d(s)}}}function it(){const r=window.location.href.indexOf("#/");let t=r>-1?window.location.href.substr(r+1):"/";const e=t.indexOf("?");let i="";return e>-1&&(i=t.substr(e+1),t=t.substr(0,e)),{location:t,querystring:i}}const lt=gt(null,function(t){t(it());const e=()=>{t(it())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}});ht(lt,r=>r.location);ht(lt,r=>r.querystring);const at=bt(void 0);function Y(r,t){if(t=ut(t),!r||!r.tagName||r.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return ot(r,t),{update(e){e=ut(e),ot(r,e)}}}function kt(r){r?window.scrollTo(r.__svelte_spa_router_scrollX,r.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function ot(r,t){let e=t.href||r.getAttribute("href");if(e&&e.charAt(0)=="/")e="#"+e;else if(!e||e.length<2||e.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+e);r.setAttribute("href",e),r.addEventListener("click",i=>{i.preventDefault(),t.disabled||Lt(i.currentTarget.getAttribute("href"))})}function ut(r){return r&&typeof r=="string"?{href:r}:r||{}}function Lt(r){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=r}function Et(r,t,e){let{routes:i={}}=t,{prefix:l=""}=t,{restoreScrollState:a=!1}=t;class c{constructor(p,h){if(!h||typeof h!="function"&&(typeof h!="object"||h._sveltesparouter!==!0))throw Error("Invalid component object");if(!p||typeof p=="string"&&(p.length<1||p.charAt(0)!="/"&&p.charAt(0)!="*")||typeof p=="object"&&!(p instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:L,keys:A}=yt(p);this.path=p,typeof h=="object"&&h._sveltesparouter===!0?(this.component=h.component,this.conditions=h.conditions||[],this.userData=h.userData,this.props=h.props||{}):(this.component=()=>Promise.resolve(h),this.conditions=[],this.props={}),this._pattern=L,this._keys=A}match(p){if(l){if(typeof l=="string")if(p.startsWith(l))p=p.substr(l.length)||"/";else return null;else if(l instanceof RegExp){const O=p.match(l);if(O&&O[0])p=p.substr(O[0].length)||"/";else return null}}const h=this._pattern.exec(p);if(h===null)return null;if(this._keys===!1)return h;const L={};let A=0;for(;A<this._keys.length;){try{L[this._keys[A]]=decodeURIComponent(h[A+1]||"")||null}catch{L[this._keys[A]]=null}A++}return L}async checkConditions(p){for(let h=0;h<this.conditions.length;h++)if(!await this.conditions[h](p))return!1;return!0}}const n=[];i instanceof Map?i.forEach((d,p)=>{n.push(new c(p,d))}):Object.keys(i).forEach(d=>{n.push(new c(d,i[d]))});let s=null,o=null,f={};const _=dt();async function u(d,p){await mt(),_(d,p)}let v=null,k=null;a&&(k=d=>{d.state&&(d.state.__svelte_spa_router_scrollY||d.state.__svelte_spa_router_scrollX)?v=d.state:v=null},window.addEventListener("popstate",k),pt(()=>{kt(v)}));let P=null,q=null;const M=lt.subscribe(async d=>{P=d;let p=0;for(;p<n.length;){const h=n[p].match(d.location);if(!h){p++;continue}const L={route:n[p].path,location:d.location,querystring:d.querystring,userData:n[p].userData,params:h&&typeof h=="object"&&Object.keys(h).length?h:null};if(!await n[p].checkConditions(L)){e(0,s=null),q=null,u("conditionsFailed",L);return}u("routeLoading",Object.assign({},L));const A=n[p].component;if(q!=A){A.loading?(e(0,s=A.loading),q=A,e(1,o=A.loadingParams),e(2,f={}),u("routeLoaded",Object.assign({},L,{component:s,name:s.name,params:o}))):(e(0,s=null),q=null);const O=await A();if(d!=P)return;e(0,s=O&&O.default||O),q=A}h&&typeof h=="object"&&Object.keys(h).length?e(1,o=h):e(1,o=null),e(2,f=n[p].props),u("routeLoaded",Object.assign({},L,{component:s,name:s.name,params:o})).then(()=>{at.set(o)});return}e(0,s=null),q=null,at.set(void 0)});_t(()=>{M(),k&&window.removeEventListener("popstate",k)});function R(d){rt.call(this,r,d)}function S(d){rt.call(this,r,d)}return r.$$set=d=>{"routes"in d&&e(3,i=d.routes),"prefix"in d&&e(4,l=d.prefix),"restoreScrollState"in d&&e(5,a=d.restoreScrollState)},r.$$.update=()=>{r.$$.dirty&32&&(history.scrollRestoration=a?"manual":"auto")},[s,o,f,i,l,a,R,S]}class At extends z{constructor(t){super(),N(this,t,Et,Ct,I,{routes:3,prefix:4,restoreScrollState:5})}}class Tt extends z{constructor(t){super(),N(this,t,null,null,I,{})}}function jt(r){let t,e,i="애국가1절 바로가기",l,a,c="애국가2절 바로가기",n,s,o="애국가3절 바로가기",f,_,u="애국가4절 바로가기",v,k,P="닫기",q,M,R,S,d="Alt + 화살표 아래버튼 누를시에 바로가기 메뉴가 열립니다",p,h,L='<section id="section1">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세</section> <section id="section2">남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세</section> <section id="section3">가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편 단심일세</section> <section id="section4">이 기상과 이 마음으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세</section>',A,O;return{c(){t=b("nav"),e=b("a"),e.textContent=i,l=j(),a=b("a"),a.textContent=c,n=j(),s=b("a"),s.textContent=o,f=j(),_=b("a"),_.textContent=u,v=j(),k=b("button"),k.textContent=P,R=j(),S=b("section"),S.textContent=d,p=j(),h=b("main"),h.innerHTML=L,this.h()},l(T){t=y(T,"NAV",{tabindex:!0,"aria-hidden":!0,class:!0});var w=et(t);e=y(w,"A",{href:!0,"data-svelte-h":!0}),E(e)!=="svelte-2mz6f1"&&(e.textContent=i),l=$(w),a=y(w,"A",{href:!0,"data-svelte-h":!0}),E(a)!=="svelte-1eqr9wh"&&(a.textContent=c),n=$(w),s=y(w,"A",{href:!0,"data-svelte-h":!0}),E(s)!=="svelte-3l00xp"&&(s.textContent=o),f=$(w),_=y(w,"A",{href:!0,"data-svelte-h":!0}),E(_)!=="svelte-14gmogx"&&(_.textContent=u),v=$(w),k=y(w,"BUTTON",{name:!0,"data-svelte-h":!0}),E(k)!=="svelte-gzdh71"&&(k.textContent=P),w.forEach(m),R=$(T),S=y(T,"SECTION",{role:!0,"data-svelte-h":!0}),E(S)!=="svelte-18eepe5"&&(S.textContent=d),p=$(T),h=y(T,"MAIN",{id:!0,"data-svelte-h":!0}),E(h)!=="svelte-15815cn"&&(h.innerHTML=L),this.h()},h(){g(e,"href","#section1"),g(a,"href","#section2"),g(s,"href","#section3"),g(_,"href","#section4"),g(k,"name","닫기"),g(t,"tabindex",q=r[1]==!1?-1:0),g(t,"aria-hidden",M=r[1]==!1?"true":"false"),g(t,"class","svelte-1clrdq4"),g(S,"role","tooltip"),g(h,"id","howtomove")},m(T,w){x(T,t,w),C(t,e),C(t,l),C(t,a),C(t,n),C(t,s),C(t,f),C(t,_),C(t,v),C(t,k),r[6](t),x(T,R,w),x(T,S,w),x(T,p,w),x(T,h,w),A||(O=[J(window,"keydown",r[2]),J(window,"keyup",r[3]),J(k,"click",r[4]),J(k,"keydown",r[5])],A=!0)},p(T,[w]){w&2&&q!==(q=T[1]==!1?-1:0)&&g(t,"tabindex",q),w&2&&M!==(M=T[1]==!1?"true":"false")&&g(t,"aria-hidden",M)},i:D,o:D,d(T){T&&(m(t),m(R),m(S),m(p),m(h)),r[6](null),A=!1,ft(O)}}}function $t(r,t,e){let i,l=!1,a=!1;function c(_){_.key.toUpperCase()==="ALT"&&(a=!0),a&&(_.keyCode===40&&(e(1,l=!0),i&&i.focus()),console.log("event",l))}function n(_){if(_===null){e(1,l=!1);return}_.key.toUpperCase()==="ALT"&&(a=!1)}const s=()=>n(null),o=()=>n(null);function f(_){vt[_?"unshift":"push"](()=>{i=_,e(0,i)})}return[i,l,c,n,s,o,f]}class Ht extends z{constructor(t){super(),N(this,t,$t,jt,I,{})}}class qt extends z{constructor(t){super(),N(this,t,null,null,I,{})}}function Mt(r){let t,e='<h1 class="svelte-sfob2l">초등 비바샘</h1>',i,l,a='<a href="https://e.vivasam.com/main">교과자료</a> <a href="https://e.vivasam.com/main">평가자료</a> <a href="https://e.vivasam.com/main">체험활동</a>',c,n,s='<article><h2 class="svelte-sfob2l">이 달의 비바샘 추천</h2> <p>차시별 자료와 추천 자료등을 통해 컨텐츠들을 즐겨보세요!</p></article> <article><h2 class="svelte-sfob2l">샘 퀴즈 계기 자료</h2> <p>샘 퀴즈 계기 자료등을 통해 컨텐츠들을 즐겨보세요!</p></article> <article><h2 class="svelte-sfob2l">수업 연구소</h2> <p>연구소 자료 등을 통해 컨텐츠들을 즐겨보세요!</p></article> <aside class="quick svelte-sfob2l"><form><label for="id">아이디</label><input type="text" id="id"/> <label for="password">패스워드</label><input type="password" id="password"/> <input type="submit"/></form></aside>',o,f,_='<address class="svelte-sfob2l">서울특별시 구로구 디지털로33길 48 대륭포스트타워 7차 20층</address>';return{c(){t=b("header"),t.innerHTML=e,i=j(),l=b("div"),l.innerHTML=a,c=j(),n=b("main"),n.innerHTML=s,o=j(),f=b("footer"),f.innerHTML=_,this.h()},l(u){t=y(u,"HEADER",{"data-svelte-h":!0}),E(t)!=="svelte-1r53y4e"&&(t.innerHTML=e),i=$(u),l=y(u,"DIV",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-126fkq9"&&(l.innerHTML=a),c=$(u),n=y(u,"MAIN",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-ervmoh"&&(n.innerHTML=s),o=$(u),f=y(u,"FOOTER",{class:!0,"data-svelte-h":!0}),E(f)!=="svelte-j728m7"&&(f.innerHTML=_),this.h()},h(){g(l,"class","nav"),g(n,"class","svelte-sfob2l"),g(f,"class","svelte-sfob2l")},m(u,v){x(u,t,v),x(u,i,v),x(u,l,v),x(u,c,v),x(u,n,v),x(u,o,v),x(u,f,v)},p:D,i:D,o:D,d(u){u&&(m(t),m(i),m(l),m(c),m(n),m(o),m(f))}}}class Ot extends z{constructor(t){super(),N(this,t,null,Mt,I,{})}}function St(r){let t,e='<strong class="h1 svelte-11jdz0q">초등 비바샘</strong>',i,l,a='<a href="https://e.vivasam.com/main">교과자료</a> <a href="https://e.vivasam.com/main">평가자료</a> <a href="https://e.vivasam.com/main">체험활동</a>',c,n,s='<div><strong class="h2 svelte-11jdz0q">이 달의 비바샘 추천</strong> <p>차시별 자료와 추천 자료등을 통해 컨텐츠들을 즐겨보세요!</p></div> <div><strong class="h2 svelte-11jdz0q">샘 퀴즈 계기 자료</strong> <p>샘 퀴즈 계기 자료등을 통해 컨텐츠들을 즐겨보세요!</p></div> <div><strong class="h2 svelte-11jdz0q">수업 연구소</strong> <p>연구소 자료 등을 통해 컨텐츠들을 즐겨보세요!</p></div> <div class="quick svelte-11jdz0q"><form><span class="label">아이디</span><input type="text" id="id"/> <span class="label">패스워드</span><input type="password" id="password"/> <input type="submit"/></form></div>',o,f,_='<strong class="svelte-11jdz0q">서울특별시 구로구 디지털로33길 48 대륭포스트타워 7차 20층</strong>';return{c(){t=b("div"),t.innerHTML=e,i=j(),l=b("div"),l.innerHTML=a,c=j(),n=b("div"),n.innerHTML=s,o=j(),f=b("div"),f.innerHTML=_,this.h()},l(u){t=y(u,"DIV",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-ira54u"&&(t.innerHTML=e),i=$(u),l=y(u,"DIV",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-126fkq9"&&(l.innerHTML=a),c=$(u),n=y(u,"DIV",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-rn7czu"&&(n.innerHTML=s),o=$(u),f=y(u,"DIV",{class:!0,"data-svelte-h":!0}),E(f)!=="svelte-1cj10yp"&&(f.innerHTML=_),this.h()},h(){g(t,"class","header"),g(l,"class","nav"),g(n,"class","main svelte-11jdz0q"),g(f,"class","footer svelte-11jdz0q")},m(u,v){x(u,t,v),x(u,i,v),x(u,l,v),x(u,c,v),x(u,n,v),x(u,o,v),x(u,f,v)},p:D,i:D,o:D,d(u){u&&(m(t),m(i),m(l),m(c),m(n),m(o),m(f))}}}class Dt extends z{constructor(t){super(),N(this,t,null,St,I,{})}}class It extends z{constructor(t){super(),N(this,t,null,null,I,{})}}class zt extends z{constructor(t){super(),N(this,t,null,null,I,{})}}function Nt(r){let t,e,i="Home",l,a,c="Layout",n,s,o="badlayout",f,_,u="form",v,k,P="sections",q,M,R="image",S,d,p="list",h,L,A="table",O,T;return{c(){t=b("nav"),e=b("a"),e.textContent=i,l=j(),a=b("a"),a.textContent=c,n=j(),s=b("a"),s.textContent=o,f=j(),_=b("a"),_.textContent=u,v=j(),k=b("a"),k.textContent=P,q=j(),M=b("a"),M.textContent=R,S=j(),d=b("a"),d.textContent=p,h=j(),L=b("a"),L.textContent=A,this.h()},l(w){t=y(w,"NAV",{});var H=et(t);e=y(H,"A",{href:!0,"data-svelte-h":!0}),E(e)!=="svelte-1v8tfjr"&&(e.textContent=i),l=$(H),a=y(H,"A",{href:!0,"data-svelte-h":!0}),E(a)!=="svelte-atdu2i"&&(a.textContent=c),n=$(H),s=y(H,"A",{href:!0,"data-svelte-h":!0}),E(s)!=="svelte-1dg7koo"&&(s.textContent=o),f=$(H),_=y(H,"A",{href:!0,"data-svelte-h":!0}),E(_)!=="svelte-f4kbze"&&(_.textContent=u),v=$(H),k=y(H,"A",{href:!0,"data-svelte-h":!0}),E(k)!=="svelte-1wxs9di"&&(k.textContent=P),q=$(H),M=y(H,"A",{href:!0,"data-svelte-h":!0}),E(M)!=="svelte-1oiyp0c"&&(M.textContent=R),S=$(H),d=y(H,"A",{href:!0,"data-svelte-h":!0}),E(d)!=="svelte-zk10py"&&(d.textContent=p),h=$(H),L=y(H,"A",{href:!0,"data-svelte-h":!0}),E(L)!=="svelte-bh0xi4"&&(L.textContent=A),H.forEach(m),this.h()},h(){g(e,"href","/"),g(a,"href","/layout"),g(s,"href","/badlayout"),g(_,"href","/form"),g(k,"href","/sections"),g(M,"href","/image"),g(d,"href","/list"),g(L,"href","/table")},m(w,H){x(w,t,H),C(t,e),C(t,l),C(t,a),C(t,n),C(t,s),C(t,f),C(t,_),C(t,v),C(t,k),C(t,q),C(t,M),C(t,S),C(t,d),C(t,h),C(t,L),O||(T=[U(Y.call(null,e)),U(Y.call(null,a)),U(Y.call(null,s)),U(Y.call(null,_)),U(Y.call(null,k)),U(Y.call(null,M)),U(Y.call(null,d)),U(Y.call(null,L))],O=!0)},p:D,i:D,o:D,d(w){w&&m(t),O=!1,ft(T)}}}class Rt extends z{constructor(t){super(),N(this,t,null,Nt,I,{})}}function Vt(r){let t,e,i;return e=new Rt({}),{c(){t=b("body"),F(e.$$.fragment)},l(l){t=y(l,"BODY",{});var a=et(t);W(e.$$.fragment,a),a.forEach(m)},m(l,a){x(l,t,a),X(e,t,null),i=!0},p:D,i(l){i||(B(e.$$.fragment,l),i=!0)},o(l){V(e.$$.fragment,l),i=!1},d(l){l&&m(t),K(e)}}}class Bt extends z{constructor(t){super(),N(this,t,null,Vt,I,{})}}function Pt(r){let t,e;return t=new At({props:{routes:{"/":Bt,"/layout":Ot,"/badlayout":Dt,"/form":Tt,"/sections":Ht,"/image":qt,"/list":It,"/table":zt}}}),{c(){F(t.$$.fragment)},l(i){W(t.$$.fragment,i)},m(i,l){X(t,i,l),e=!0},p:D,i(i){e||(B(t.$$.fragment,i),e=!0)},o(i){V(t.$$.fragment,i),e=!1},d(i){K(t,i)}}}class Ut extends z{constructor(t){super(),N(this,t,null,Pt,I,{})}}function Yt(r){let t,e,i;return e=new Ut({}),{c(){t=b("body"),F(e.$$.fragment)},l(l){t=y(l,"BODY",{});var a=et(t);W(e.$$.fragment,a),a.forEach(m)},m(l,a){x(l,t,a),X(e,t,null),i=!0},p:D,i(l){i||(B(e.$$.fragment,l),i=!0)},o(l){V(e.$$.fragment,l),i=!1},d(l){l&&m(t),K(e)}}}class Gt extends z{constructor(t){super(),N(this,t,null,Yt,I,{})}}export{Gt as component};
