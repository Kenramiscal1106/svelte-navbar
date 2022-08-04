const I=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const n of u)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(u){const n={};return u.integrity&&(n.integrity=u.integrity),u.referrerpolicy&&(n.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?n.credentials="include":u.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(u){if(u.ep)return;u.ep=!0;const n=t(u);fetch(u.href,n)}};I();function d(){}function k(e){return e()}function E(){return Object.create(null)}function v(e){e.forEach(k)}function B(e){return typeof e=="function"}function C(e,i){return e!=e?i==i:e!==i||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function L(e,i){e.appendChild(i)}function T(e,i,t){e.insertBefore(i,t||null)}function $(e){e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function K(){return z(" ")}function Y(e,i,t){t==null?e.removeAttribute(i):e.getAttribute(i)!==t&&e.setAttribute(i,t)}function G(e){return Array.from(e.childNodes)}function J(e,i,t,a){t===null?e.style.removeProperty(i):e.style.setProperty(i,t,a?"important":"")}function O(e,i,t){e.classList[t?"add":"remove"](i)}let f;function p(e){f=e}function U(){if(!f)throw new Error("Function called outside component initialization");return f}function W(e){U().$$.on_mount.push(e)}const c=[],M=[],h=[],P=[],X=Promise.resolve();let y=!1;function Z(){y||(y=!0,X.then(V))}function x(e){h.push(e)}const b=new Set;let q=0;function V(){const e=f;do{for(;q<c.length;){const i=c[q];q++,p(i),ee(i.$$)}for(p(null),c.length=0,q=0;M.length;)M.pop()();for(let i=0;i<h.length;i+=1){const t=h[i];b.has(t)||(b.add(t),t())}h.length=0}while(c.length);for(;P.length;)P.pop()();y=!1,b.clear(),p(e)}function ee(e){if(e.fragment!==null){e.update(),v(e.before_update);const i=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,i),e.after_update.forEach(x)}}const g=new Set;let ie;function j(e,i){e&&e.i&&(g.delete(e),e.i(i))}function te(e,i,t,a){if(e&&e.o){if(g.has(e))return;g.add(e),ie.c.push(()=>{g.delete(e),a&&(t&&e.d(1),a())}),e.o(i)}else a&&a()}function ae(e){e&&e.c()}function D(e,i,t,a){const{fragment:u,on_mount:n,on_destroy:s,after_update:m}=e.$$;u&&u.m(i,t),a||x(()=>{const l=n.map(k).filter(B);s?s.push(...l):v(l),e.$$.on_mount=[]}),m.forEach(x)}function H(e,i){const t=e.$$;t.fragment!==null&&(v(t.on_destroy),t.fragment&&t.fragment.d(i),t.on_destroy=t.fragment=null,t.ctx=[])}function ue(e,i){e.$$.dirty[0]===-1&&(c.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[i/31|0]|=1<<i%31}function R(e,i,t,a,u,n,s,m=[-1]){const l=f;p(e);const r=e.$$={fragment:null,ctx:null,props:n,update:d,not_equal:u,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(l?l.$$.context:[])),callbacks:E(),dirty:m,skip_bound:!1,root:i.target||l.$$.root};s&&s(r.root);let A=!1;if(r.ctx=t?t(e,i.props||{},(o,w,...S)=>{const N=S.length?S[0]:w;return r.ctx&&u(r.ctx[o],r.ctx[o]=N)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](N),A&&ue(e,o)),w}):[],r.update(),A=!0,v(r.before_update),r.fragment=a?a(r.ctx):!1,i.target){if(i.hydrate){const o=G(i.target);r.fragment&&r.fragment.l(o),o.forEach($)}else r.fragment&&r.fragment.c();i.intro&&j(e.$$.fragment),D(e,i.target,i.anchor,i.customElement),V()}p(l)}class F{$destroy(){H(this,1),this.$destroy=d}$on(i,t){const a=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return a.push(t),()=>{const u=a.indexOf(t);u!==-1&&a.splice(u,1)}}$set(i){this.$$set&&!Q(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function ne(e){let i;return{c(){i=_("nav"),i.innerHTML=`<ul class="svelte-15uli9r"><li class="svelte-15uli9r"><a href="#test" class="svelte-15uli9r">Home</a></li> 
    <li class="svelte-15uli9r"><a href="#test" class="svelte-15uli9r">About</a></li> 
    <li class="svelte-15uli9r"><a href="#test" class="svelte-15uli9r">Contact</a></li></ul>`,Y(i,"class","svelte-15uli9r"),O(i,"sticky",e[0])},m(t,a){T(t,i,a)},p(t,[a]){a&1&&O(i,"sticky",t[0])},i:d,o:d,d(t){t&&$(i)}}}function se(e,i,t){let a=!1;return W(()=>{window.addEventListener("scroll",()=>{if(window.scrollY>100){t(0,a=!0);return}t(0,a=!1)})}),[a]}class re extends F{constructor(i){super(),R(this,i,se,ne,C,{})}}function oe(e){let i,t,a,u,n;return t=new re({}),{c(){i=_("main"),ae(t.$$.fragment),a=K(),u=_("div"),u.innerHTML=`<h1>Hello, world</h1> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat
      nobis, quod nesciunt ex perferendis autem iure magni numquam voluptate?</p> 
    <p>Fugit, in temporibus, laboriosam esse error debitis, dolorem placeat sint
      corrupti et illo modi ab quod blanditiis odit reprehenderit veniam?</p> 
    <p>Suscipit consectetur minima qui tempora quo ad ipsam ab rerum, hic
      eligendi cumque perspiciatis eveniet ducimus repudiandae distinctio
      perferendis sit!</p> 
    <p>Ad nesciunt nam accusamus. Voluptatum, soluta expedita repellendus sint
      possimus aspernatur ducimus, consequatur magni quos atque tempore
      praesentium? Aliquam, officia!</p> 
    <p>Aperiam eaque illum veritatis fugit, facere expedita ad dolores omnis
      voluptas cupiditate soluta, ratione at harum perspiciatis repellat
      corrupti eum.</p> 
    <p>Aperiam eaque illum veritatis fugit, facere expedita ad dolores omnis
      voluptas cupiditate soluta, ratione at harum perspiciatis repellat
      corrupti eum.</p> 
    <p>Aperiam eaque illum veritatis fugit, facere expedita ad dolores omnis
      voluptas cupiditate soluta, ratione at harum perspiciatis repellat
      corrupti eum.</p> 
    <p>Aperiam eaque illum veritatis fugit, facere expedita ad dolores omnis
      voluptas cupiditate soluta, ratione at harum perspiciatis repellat
      corrupti eum.</p> 
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
      doloribus at corrupti accusamus adipisci. Animi eius illo laborum fugit in
      excepturi pariatur assumenda minima nemo ipsa, nisi cum cupiditate, illum
      alias? Sint dolore rem maiores officiis quod quae veritatis ea, hic,
      beatae, sit aliquam cumque ad laudantium totam ipsa a.</p> 
    <p>Voluptatem dicta numquam eius quos libero? Aspernatur, sunt accusantium
      tempore, iusto alias, dolor deleniti necessitatibus rerum sequi at ipsa?
      Sequi laudantium, natus nesciunt quam iure et itaque maiores optio ducimus
      libero, laboriosam officiis saepe. Perspiciatis, nostrum assumenda
      inventore dolore sapiente fugiat optio reprehenderit, quidem atque facilis
      sit cumque animi unde.</p> 
    <p>Velit doloribus mollitia laboriosam qui. Autem exercitationem pariatur,
      vitae similique blanditiis corrupti rem, fugit expedita cumque molestiae
      reprehenderit incidunt? Molestiae ducimus distinctio minima autem dolore
      impedit in consectetur numquam corporis adipisci maiores rem maxime dicta,
      accusamus a, quasi doloribus animi et laboriosam officiis! Tempore error
      quisquam eligendi ab debitis tempora!</p> 
    <p>Sed minus tempore, excepturi animi, atque suscipit eligendi numquam libero
      vitae inventore harum fugiat nam voluptate laborum quam praesentium modi.
      Sit, reiciendis possimus! Dolor voluptatibus ullam eos nulla nam commodi
      quas nesciunt, explicabo cupiditate eaque dignissimos quisquam, laudantium
      ipsa maiores incidunt ipsam natus. Rem quos iusto magnam tempore, optio
      maxime!</p> 
    <p>Rerum, debitis. Saepe praesentium reprehenderit ex sint quos quia alias
      illum nobis aliquam laudantium, repellat amet ratione odio, aliquid culpa
      incidunt nulla error ullam, cupiditate autem officiis enim? Sapiente est
      recusandae molestias totam accusamus explicabo, quam minus perferendis
      dolor non distinctio earum sequi id illo voluptatum nostrum, blanditiis,
      eius accusantium!</p> 
    <p>Ipsa, consequatur quam adipisci nisi saepe error ipsum provident, sunt
      eaque cum sit, modi repudiandae vel nemo officia. Deserunt, fugit, nulla
      minima enim, hic eaque ipsam vitae aliquam dignissimos necessitatibus
      laboriosam libero saepe expedita quo id voluptatum aspernatur unde
      similique delectus incidunt quia! Reprehenderit aut ratione ad sequi
      nesciunt? Quas!</p> 
    <p>Neque fugit quae ratione quod unde molestiae, totam dignissimos mollitia
      tempora illo beatae blanditiis aspernatur voluptatibus earum? Voluptates
      iste repellat magnam corporis eos repellendus accusantium pariatur
      quaerat, optio nemo quos et est dolore hic ratione aliquid laudantium
      sapiente animi minima consequatur tenetur nesciunt voluptas. Sunt
      doloremque ipsum facilis assumenda consectetur.</p> 
    <p>Dignissimos, quo molestiae? Voluptas optio molestias dicta, aperiam saepe
      facere minima cumque atque ipsam laudantium pariatur, quas veritatis
      laboriosam, ratione asperiores tenetur odit possimus ipsa nesciunt nemo
      fugiat? Non quibusdam, sequi possimus nam maxime iste consequuntur,
      reiciendis provident vitae corporis reprehenderit, iusto dignissimos!
      Accusamus tenetur et, iure laborum enim perferendis?</p> 
    <p>Adipisci ex nihil aliquam deleniti quia, rem praesentium, voluptate
      dignissimos, perferendis nisi voluptas? Temporibus placeat sit optio,
      velit quibusdam incidunt quisquam id doloremque, voluptate repudiandae,
      maiores quasi qui impedit. Quos libero optio dignissimos facere numquam
      facilis id ea tenetur eius eum incidunt nihil tempore, voluptatibus
      consequuntur corporis? Assumenda, eveniet nam.</p> 
    <p>Nemo consectetur ut similique doloremque possimus. Nulla quia
      reprehenderit asperiores est repellat deserunt? Repellat deleniti,
      reprehenderit commodi natus, earum ea et culpa architecto quisquam sint
      sunt modi molestiae, vero quos. Cumque, soluta quae placeat nemo sint
      optio facere saepe tempore ipsum cum explicabo dolor fuga mollitia
      voluptates? Explicabo, maxime. Magni.</p>`,J(u,"margin-top","75px")},m(s,m){T(s,i,m),D(t,i,null),L(i,a),L(i,u),n=!0},p:d,i(s){n||(j(t.$$.fragment,s),n=!0)},o(s){te(t.$$.fragment,s),n=!1},d(s){s&&$(i),H(t)}}}class le extends F{constructor(i){super(),R(this,i,null,oe,C,{})}}new le({target:document.getElementById("app")});
