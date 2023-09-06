import{o as we,t as ye}from"../chunks/scheduler.0a807b82.js";import{S as Ge,a as Je,I as M,g as Ce,f as Me,b as _e,c as le,s as ee,i as ve,d as F,e as J,P as Ve,h as Xe}from"../chunks/singletons.eef7bf97.js";function Ze(t,r){return t==="/"||r==="ignore"?t:r==="never"?t.endsWith("/")?t.slice(0,-1):t:r==="always"&&!t.endsWith("/")?t+"/":t}function Qe(t){return t.split("%25").map(decodeURI).join("%25")}function et(t){for(const r in t)t[r]=decodeURIComponent(t[r]);return t}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(t,r){const u=new URL(t);for(const s of tt)Object.defineProperty(u,s,{get(){return r(),t[s]},enumerable:!0,configurable:!0});return at(u),u}function at(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(t){return t.replace(/\/$/,"")+rt}function it(...t){let r=5381;for(const u of t)if(typeof u=="string"){let s=u.length;for(;s;)r=r*33^u.charCodeAt(--s)}else if(ArrayBuffer.isView(u)){const s=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let d=s.length;for(;d;)r=r*33^s[--d]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}const fe=window.fetch;window.fetch=(t,r)=>((t instanceof Request?t.method:(r==null?void 0:r.method)||"GET")!=="GET"&&ne.delete(ke(t)),fe(t,r));const ne=new Map;function st(t,r){const u=ke(t,r),s=document.querySelector(u);if(s!=null&&s.textContent){const{body:d,...f}=JSON.parse(s.textContent),E=s.getAttribute("data-ttl");return E&&ne.set(u,{body:d,init:f,ttl:1e3*Number(E)}),Promise.resolve(new Response(d,f))}return fe(t,r)}function ct(t,r,u){if(ne.size>0){const s=ke(t,u),d=ne.get(s);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(d.body,d.init);ne.delete(s)}}return fe(r,u)}function ke(t,r){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(r!=null&&r.headers||r!=null&&r.body){const d=[];r.headers&&d.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&d.push(r.body),s+=`[data-hash="${it(...d)}"]`}return s}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(t){const r=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${dt(t).map(s=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(d)return r.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return r.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const E=s.split(/\[(.+?)\](?!\])/);return"/"+E.map((w,p)=>{if(p%2){if(w.startsWith("x+"))return be(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return be(String.fromCharCode(...w.slice(2).split("-").map(U=>parseInt(U,16))));const g=lt.exec(w);if(!g)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,x,k,N]=g;return r.push({name:k,matcher:N,optional:!!D,rest:!!x,chained:x?p===1&&E[0]==="":!1}),x?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return be(w)}).join("")}).join("")}/?$`),params:r}}function ut(t){return!/^\([^)]+\)$/.test(t)}function dt(t){return t.slice(1).split("/").filter(ut)}function pt(t,r,u){const s={},d=t.slice(1);let f=0;for(let E=0;E<r.length;E+=1){const l=r[E];let w=d[E-f];if(l.chained&&l.rest&&f&&(w=d.slice(E-f,E+1).filter(p=>p).join("/"),f=0),w===void 0){l.rest&&(s[l.name]="");continue}if(!l.matcher||u[l.matcher](w)){s[l.name]=w;const p=r[E+1],g=d[E+1];p&&!p.rest&&p.optional&&g&&l.chained&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return s}function be(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:t,server_loads:r,dictionary:u,matchers:s}){const d=new Set(r);return Object.entries(u).map(([l,[w,p,g]])=>{const{pattern:D,params:x}=ft(l),k={id:l,exec:N=>{const U=D.exec(N);if(U)return pt(U,x,s)},errors:[1,...g||[]].map(N=>t[N]),layouts:[0,...p||[]].map(E),leaf:f(w)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const w=l<0;return w&&(l=~l),[w,t[l]]}function E(l){return l===void 0?l:[d.has(l),t[l]]}}function Ke(t){try{return JSON.parse(sessionStorage[t])}catch{}}function qe(t,r){const u=JSON.stringify(r);try{sessionStorage[t]=u}catch{}}const gt=-1,mt=-2,wt=-3,yt=-4,_t=-5,vt=-6;function bt(t,r){if(typeof t=="number")return d(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const u=t,s=Array(u.length);function d(f,E=!1){if(f===gt)return;if(f===wt)return NaN;if(f===yt)return 1/0;if(f===_t)return-1/0;if(f===vt)return-0;if(E)throw new Error("Invalid input");if(f in s)return s[f];const l=u[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],p=r==null?void 0:r[w];if(p)return s[f]=p(d(l[1]));switch(w){case"Date":s[f]=new Date(l[1]);break;case"Set":const g=new Set;s[f]=g;for(let k=1;k<l.length;k+=1)g.add(d(l[k]));break;case"Map":const D=new Map;s[f]=D;for(let k=1;k<l.length;k+=2)D.set(d(l[k]),d(l[k+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const x=Object.create(null);s[f]=x;for(let k=1;k<l.length;k+=2)x[l[k]]=d(l[k+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);s[f]=w;for(let p=0;p<l.length;p+=1){const g=l[p];g!==mt&&(w[p]=d(g))}}else{const w={};s[f]=w;for(const p in l){const g=l[p];w[p]=d(g)}}return s[f]}return d(0)}function Et(t){return t.filter(r=>r!=null)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const St=new Set([...ze]);[...St];async function kt(t){var r;for(const u in t)if(typeof((r=t[u])==null?void 0:r.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([s,d])=>[s,await d])));return t}class te{constructor(r,u){this.status=r,typeof u=="string"?this.body={message:u}:u?this.body=u:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class Fe{constructor(r,u){this.status=r,this.location=u}}const Rt="x-sveltekit-invalidated",At="x-sveltekit-trailing-slash",K=Ke(Ge)??{},Q=Ke(Je)??{};function Ee(t){K[t]=ee()}function It(t,r){var $e;const u=ht(t),s=t.nodes[0],d=t.nodes[1];s(),d();const f=document.documentElement,E=[],l=[];let w=null;const p={before_navigate:[],on_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},D=!1,x=!1,k=!0,N=!1,U=!1,H=!1,B=!1,V,T=($e=history.state)==null?void 0:$e[M];T||(T=Date.now(),history.replaceState({...history.state,[M]:T},"",location.href));const ue=K[T];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let q,ae,W;async function Re(){if(W=W||Promise.resolve(),await W,!W)return;W=null;const e=new URL(location.href),i=X(e,!0);w=null;const n=ae={},o=i&&await he(i);if(n===ae&&o){if(o.type==="redirect")return re(new URL(o.location,e).href,{},[e.pathname],n);o.props.page!==void 0&&(q=o.props.page),V.$set(o.props)}}function Ae(e){l.some(i=>i==null?void 0:i.snapshot)&&(Q[e]=l.map(i=>{var n;return(n=i==null?void 0:i.snapshot)==null?void 0:n.capture()}))}function Ie(e){var i;(i=Q[e])==null||i.forEach((n,o)=>{var a,c;(c=(a=l[o])==null?void 0:a.snapshot)==null||c.restore(n)})}function Le(){Ee(T),qe(Ge,K),Ae(T),qe(Je,Q)}async function re(e,{noScroll:i=!1,replaceState:n=!1,keepFocus:o=!1,state:a={},invalidateAll:c=!1},h,v){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:i?ee():null,keepfocus:o,redirect_chain:h,details:{state:a,replaceState:n},nav_token:v,accepted:()=>{c&&(B=!0)},blocked:()=>{},type:"goto"})}async function Pe(e){return w={id:e.id,promise:he(e).then(i=>(i.type==="loaded"&&i.state.error&&(w=null),i))},w.promise}async function oe(...e){const n=u.filter(o=>e.some(a=>o.exec(a))).map(o=>Promise.all([...o.layouts,o.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(n)}function Oe(e){var o;g=e.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=e.props.page,V=new t.root({target:r,props:{...e.props,stores:F,components:l},hydrate:!0}),Ie(T);const n={from:null,to:{params:g.params,route:{id:((o=g.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};p.after_navigate.forEach(a=>a(n)),x=!0}async function Y({url:e,params:i,branch:n,status:o,error:a,route:c,form:h}){let v="never";for(const y of n)(y==null?void 0:y.slash)!==void 0&&(v=y.slash);e.pathname=Ze(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:i,branch:n,error:a,route:c},props:{constructors:Et(n).map(y=>y.node.component)}};h!==void 0&&(b.props.form=h);let _={},L=!q,A=0;for(let y=0;y<Math.max(n.length,g.branch.length);y+=1){const m=n[y],O=g.branch[y];(m==null?void 0:m.data)!==(O==null?void 0:O.data)&&(L=!0),m&&(_={..._,...m.data},L&&(b.props[`data_${A}`]=_),A+=1)}return(!g.url||e.href!==g.url.href||g.error!==a||h!==void 0&&h!==q.form||L)&&(b.props.page={error:a,params:i,route:{id:(c==null?void 0:c.id)??null},status:o,url:new URL(e),form:h??null,data:L?_:q.data}),b}async function de({loader:e,parent:i,url:n,params:o,route:a,server_data_node:c}){var _,L,A;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((_=b.universal)!=null&&_.load){let P=function(...m){for(const O of m){const{href:j}=new URL(O,n);v.dependencies.add(j)}};const y={route:new Proxy(a,{get:(m,O)=>(v.route=!0,m[O])}),params:new Proxy(o,{get:(m,O)=>(v.params.add(O),m[O])}),data:(c==null?void 0:c.data)??null,url:nt(n,()=>{v.url=!0}),async fetch(m,O){let j;m instanceof Request?(j=m.url,O={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...O}):j=m;const C=new URL(j,n);return P(C.href),C.origin===n.origin&&(j=C.href.slice(n.origin.length)),x?ct(j,C.href,O):st(j,O)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,i()}};h=await b.universal.load.call(null,y)??null,h=h?await kt(h):null}return{node:b,loader:e,server:c,universal:(L=b.universal)!=null&&L.load?{type:"data",data:h,uses:v}:null,data:h??(c==null?void 0:c.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Ue(e,i,n,o,a){if(B)return!0;if(!o)return!1;if(o.parent&&e||o.route&&i||o.url&&n)return!0;for(const c of o.params)if(a[c]!==g.params[c])return!0;for(const c of o.dependencies)if(E.some(h=>h(new URL(c))))return!0;return!1}function pe(e,i){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?i??null:null}async function he({id:e,invalidating:i,url:n,params:o,route:a}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:c,layouts:h,leaf:v}=a,b=[...h,v];c.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let _=null;const L=g.url?e!==g.url.pathname+g.url.search:!1,A=g.route?a.id!==g.route.id:!1;let P=!1;const y=b.map((S,I)=>{var G;const R=g.branch[I],$=!!(S!=null&&S[0])&&((R==null?void 0:R.loader)!==S[1]||Ue(P,A,L,(G=R.server)==null?void 0:G.uses,o));return $&&(P=!0),$});if(y.some(Boolean)){try{_=await He(n,y)}catch(S){return ie({status:S instanceof te?S.status:500,error:await Z(S,{url:n,params:o,route:{id:a.id}}),url:n,route:a})}if(_.type==="redirect")return _}const m=_==null?void 0:_.nodes;let O=!1;const j=b.map(async(S,I)=>{var ge;if(!S)return;const R=g.branch[I],$=m==null?void 0:m[I];if((!$||$.type==="skip")&&S[1]===(R==null?void 0:R.loader)&&!Ue(O,A,L,(ge=R.universal)==null?void 0:ge.uses,o))return R;if(O=!0,($==null?void 0:$.type)==="error")throw $;return de({loader:S[1],url:n,params:o,route:a,parent:async()=>{var De;const Te={};for(let me=0;me<I;me+=1)Object.assign(Te,(De=await j[me])==null?void 0:De.data);return Te},server_data_node:pe($===void 0&&S[0]?{type:"skip"}:$??null,S[0]?R==null?void 0:R.server:void 0)})});for(const S of j)S.catch(()=>{});const C=[];for(let S=0;S<b.length;S+=1)if(b[S])try{C.push(await j[S])}catch(I){if(I instanceof Fe)return{type:"redirect",location:I.location};let R=500,$;if(m!=null&&m.includes(I))R=I.status??R,$=I.error;else if(I instanceof te)R=I.status,$=I.body;else{if(await F.updated.check())return await z(n);$=await Z(I,{params:o,url:n,route:{id:a.id}})}const G=await xe(S,C,c);return G?await Y({url:n,params:o,branch:C.slice(0,G.idx).concat(G.node),status:R,error:$,route:a}):await je(n,{id:a.id},$,R)}else C.push(void 0);return await Y({url:n,params:o,branch:C,status:200,error:null,route:a,form:i?void 0:null})}async function xe(e,i,n){for(;e--;)if(n[e]){let o=e;for(;!i[o];)o-=1;try{return{idx:o+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:i,url:n,route:o}){const a={};let c=null;if(t.server_loads[0]===0)try{const _=await He(n,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;c=_.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||D)&&await z(n)}const v=await de({loader:s,url:n,params:a,route:o,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),b={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:n,params:a,branch:[v,b],status:e,error:i,route:null})}function X(e,i){if(ve(e,J))return;const n=se(e);for(const o of u){const a=o.exec(n);if(a)return{id:e.pathname+e.search,invalidating:i,route:o,params:et(a),url:e}}}function se(e){return Qe(e.pathname.slice(J.length)||"/")}function Ne({url:e,type:i,intent:n,delta:o}){let a=!1;const c=Be(g,n,e,i);o!==void 0&&(c.navigation.delta=o);const h={...c.navigation,cancel:()=>{a=!0,c.reject(new Error("navigation was cancelled"))}};return U||p.before_navigate.forEach(v=>v(h)),a?null:c}async function ce({url:e,scroll:i,keepfocus:n,redirect_chain:o,details:a,type:c,delta:h,nav_token:v={},accepted:b,blocked:_}){var j,C,S;const L=X(e,!1),A=Ne({url:e,type:c,delta:h,intent:L});if(!A){_();return}const P=T;b(),U=!0,x&&F.navigating.set(A.navigation),ae=v;let y=L&&await he(L);if(!y){if(ve(e,J))return await z(e);y=await je(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(L==null?void 0:L.url)||e,ae!==v)return A.reject(new Error("navigation was aborted")),!1;if(y.type==="redirect")if(o.length>10||o.includes(e.pathname))y=await ie({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(y.location,e).href,{},[...o,e.pathname],v),!1;else((j=y.props.page)==null?void 0:j.status)>=400&&await F.updated.check()&&await z(e);if(E.length=0,B=!1,N=!0,Ee(P),Ae(P),(C=y.props.page)!=null&&C.url&&y.props.page.url.pathname!==e.pathname&&(e.pathname=(S=y.props.page)==null?void 0:S.url.pathname),a){const I=a.replaceState?0:1;if(a.state[M]=T+=I,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let R=T+1;for(;Q[R]||K[R];)delete Q[R],delete K[R],R+=1}}if(w=null,x){g=y.state,y.props.page&&(y.props.page.url=e);const I=(await Promise.all(p.on_navigate.map(R=>R(A.navigation)))).filter(R=>typeof R=="function");if(I.length>0){let R=function(){p.after_navigate=p.after_navigate.filter($=>!I.includes($))};I.push(R),p.after_navigate.push(...I)}V.$set(y.props)}else Oe(y);const{activeElement:m}=document;if(await ye(),k){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));i?scrollTo(i.x,i.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==m&&document.activeElement!==document.body;!n&&!O&&Se(),k=!0,y.props.page&&(q=y.props.page),U=!1,c==="popstate"&&Ie(T),A.fulfil(void 0),p.after_navigate.forEach(I=>I(A.navigation)),F.navigating.set(null),N=!1}async function je(e,i,n,o){return e.origin===location.origin&&e.pathname===location.pathname&&!D?await ie({status:o,error:n,url:e,route:i}):await z(e)}function z(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const h=c.target;clearTimeout(e),e=setTimeout(()=>{o(h,2)},20)});function i(c){o(c.composedPath()[0],1)}f.addEventListener("mousedown",i),f.addEventListener("touchstart",i,{passive:!0});const n=new IntersectionObserver(c=>{for(const h of c)h.isIntersecting&&(oe(se(new URL(h.target.href))),n.unobserve(h.target))},{threshold:0});function o(c,h){const v=Me(c,f);if(!v)return;const{url:b,external:_,download:L}=_e(v,J);if(_||L)return;const A=le(v);if(!A.reload)if(h<=A.preload_data){const P=X(b,!1);P&&Pe(P)}else h<=A.preload_code&&oe(se(b))}function a(){n.disconnect();for(const c of f.querySelectorAll("a")){const{url:h,external:v,download:b}=_e(c,J);if(v||b)continue;const _=le(c);_.reload||(_.preload_code===Ve.viewport&&n.observe(c),_.preload_code===Ve.eager&&oe(se(h)))}}p.after_navigate.push(a),a()}function Z(e,i){return e instanceof te?e.body:t.hooks.handleError({error:e,event:i})??{message:i.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{we(()=>(p.after_navigate.push(e),()=>{const i=p.after_navigate.indexOf(e);p.after_navigate.splice(i,1)}))},before_navigate:e=>{we(()=>(p.before_navigate.push(e),()=>{const i=p.before_navigate.indexOf(e);p.before_navigate.splice(i,1)}))},on_navigate:e=>{we(()=>(p.on_navigate.push(e),()=>{const i=p.on_navigate.indexOf(e);p.on_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(N||!x)&&(k=!1)},goto:(e,i={})=>re(e,i,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:i}=new URL(e,location.href);E.push(n=>n.href===i)}return Re()},invalidate_all:()=>(B=!0,Re()),preload_data:async e=>{const i=new URL(e,Ce(document)),n=X(i,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Pe(n)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const i=new URL(location.href),{branch:n,route:o}=g;if(!o)return;const a=await xe(g.branch.length,n,o.errors);if(a){const c=await Y({url:i,params:g.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:o});g=c.state,V.$set(c.props),ye().then(Se)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(V.$set({form:null,page:{...q,form:e.data,status:e.status}}),await ye(),V.$set({form:e.data}),e.type==="success"&&Se())},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let o=!1;if(Le(),!U){const a=Be(g,void 0,null,"leave"),c={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation was cancelled"))}};p.before_navigate.forEach(h=>h(c))}o?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(i=navigator.connection)!=null&&i.saveData||Ye(),f.addEventListener("click",n=>{var P;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const o=Me(n.composedPath()[0],f);if(!o)return;const{url:a,external:c,target:h,download:v}=_e(o,J);if(!a)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const b=le(o);if(!(o instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(c||b.reload){Ne({url:a,type:"link"})?U=!0:n.preventDefault();return}const[L,A]=a.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(g.url.hash===a.hash){n.preventDefault(),(P=o.ownerDocument.getElementById(A))==null||P.scrollIntoView();return}if(H=!0,Ee(T),e(a),!b.replace_state)return;H=!1,n.preventDefault()}ce({url:a,scroll:b.noscroll?ee():null,keepfocus:b.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),f.addEventListener("submit",n=>{if(n.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||o.method)!=="get")return;const h=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||o.action);if(ve(h,J))return;const v=n.target,{keep_focus:b,noscroll:_,reload:L,replace_state:A}=le(v);if(L)return;n.preventDefault(),n.stopPropagation();const P=new FormData(v),y=a==null?void 0:a.getAttribute("name");y&&P.append(y,(a==null?void 0:a.getAttribute("value"))??""),h.search=new URLSearchParams(P).toString(),ce({url:h,scroll:_?ee():null,keepfocus:b??!1,redirect_chain:[],details:{state:{},replaceState:A??h.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var o;if((o=n.state)!=null&&o[M]){if(n.state[M]===T)return;const a=K[n.state[M]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){K[T]=ee(),T=n.state[M],scrollTo(a.x,a.y);return}const c=n.state[M]-T;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=n.state[M]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[M]:++T},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&F.navigating.set(null)});function e(n){g.url=n,F.page.set({...q,url:n}),F.page.notify()}},_hydrate:async({status:e=200,error:i,node_ids:n,params:o,route:a,data:c,form:h})=>{D=!0;const v=new URL(location.href);({params:o={},route:a={id:null}}=X(v,!1)||{});let b;try{const _=n.map(async(P,y)=>{const m=c[y];return m!=null&&m.uses&&(m.uses=We(m.uses)),de({loader:t.nodes[P],url:v,params:o,route:a,parent:async()=>{const O={};for(let j=0;j<y;j+=1)Object.assign(O,(await _[j]).data);return O},server_data_node:pe(m)})}),L=await Promise.all(_),A=u.find(({id:P})=>P===a.id);if(A){const P=A.layouts;for(let y=0;y<P.length;y++)P[y]||L.splice(y,0,void 0)}b=await Y({url:v,params:o,branch:L,status:e,error:i,form:h,route:A??null})}catch(_){if(_ instanceof Fe){await z(new URL(_.location,location.href));return}b=await ie({status:_ instanceof te?_.status:500,error:await Z(_,{url:v,params:o,route:a}),url:v,route:a})}Oe(b)}}}async function He(t,r){const u=new URL(t);u.pathname=ot(t.pathname),t.pathname.endsWith("/")&&u.searchParams.append(At,"1"),u.searchParams.append(Rt,r.map(d=>d?"1":"0").join(""));const s=await fe(u.href);if(!s.ok)throw new te(s.status,await s.json());return new Promise(async d=>{var g;const f=new Map,E=s.body.getReader(),l=new TextDecoder;function w(D){return bt(D,{Promise:x=>new Promise((k,N)=>{f.set(x,{fulfil:k,reject:N})})})}let p="";for(;;){const{done:D,value:x}=await E.read();if(D&&!p)break;for(p+=!x&&p?`
`:l.decode(x);;){const k=p.indexOf(`
`);if(k===-1)break;const N=JSON.parse(p.slice(0,k));if(p=p.slice(k+1),N.type==="redirect")return d(N);if(N.type==="data")(g=N.nodes)==null||g.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=We(U.uses),U.data=w(U.data))}),d(N);else if(N.type==="chunk"){const{id:U,data:H,error:B}=N,V=f.get(U);f.delete(U),B?V.reject(w(B)):V.fulfil(w(H))}}}})}function We(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Se(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const r=document.body,u=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),u!==null?r.setAttribute("tabindex",u):r.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const d=[];for(let f=0;f<s.rangeCount;f+=1)d.push(s.getRangeAt(f));setTimeout(()=>{if(s.rangeCount===d.length){for(let f=0;f<s.rangeCount;f+=1){const E=d[f],l=s.getRangeAt(f);if(E.commonAncestorContainer!==l.commonAncestorContainer||E.startContainer!==l.startContainer||E.endContainer!==l.endContainer||E.startOffset!==l.startOffset||E.endOffset!==l.endOffset)return}s.removeAllRanges()}})}}}function Be(t,r,u,s){var w,p;let d,f;const E=new Promise((g,D)=>{d=g,f=D});return E.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((w=t.route)==null?void 0:w.id)??null},url:t.url},to:u&&{params:(r==null?void 0:r.params)??null,route:{id:((p=r==null?void 0:r.route)==null?void 0:p.id)??null},url:u},willUnload:!r,type:s,complete:E},fulfil:d,reject:f}}async function Ot(t,r,u){const s=It(t,r);Xe({client:s}),u?await s._hydrate(u):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Ot as start};
