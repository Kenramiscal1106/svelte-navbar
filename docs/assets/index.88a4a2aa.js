const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const n of u)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(u){const n={};return u.integrity&&(n.integrity=u.integrity),u.referrerpolicy&&(n.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?n.credentials="include":u.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(u){if(u.ep)return;u.ep=!0;const n=i(u);fetch(u.href,n)}};I();function d(){}function k(e){return e()}function E(){return Object.create(null)}function v(e){e.forEach(k)}function B(e){return typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function L(e,t){e.appendChild(t)}function T(e,t,i){e.insertBefore(t,i||null)}function $(e){e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function K(){return z(" ")}function Y(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function G(e){return Array.from(e.childNodes)}function J(e,t,i,a){i===null?e.style.removeProperty(t):e.style.setProperty(t,i,a?"important":"")}function O(e,t,i){e.classList[i?"add":"remove"](t)}let f;function p(e){f=e}function U(){if(!f)throw new Error("Function called outside component initialization");return f}function W(e){U().$$.on_mount.push(e)}const m=[],M=[],h=[],P=[],X=Promise.resolve();let y=!1;function Z(){y||(y=!0,X.then(V))}function x(e){h.push(e)}const b=new Set;let q=0;function V(){const e=f;do{for(;q<m.length;){const t=m[q];q++,p(t),ee(t.$$)}for(p(null),m.length=0,q=0;M.length;)M.pop()();for(let t=0;t<h.length;t+=1){const i=h[t];b.has(i)||(b.add(i),i())}h.length=0}while(m.length);for(;P.length;)P.pop()();y=!1,b.clear(),p(e)}function ee(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const g=new Set;let te;function j(e,t){e&&e.i&&(g.delete(e),e.i(t))}function ie(e,t,i,a){if(e&&e.o){if(g.has(e))return;g.add(e),te.c.push(()=>{g.delete(e),a&&(i&&e.d(1),a())}),e.o(t)}else a&&a()}function ae(e){e&&e.c()}function D(e,t,i,a){const{fragment:u,on_mount:n,on_destroy:s,after_update:c}=e.$$;u&&u.m(t,i),a||x(()=>{const l=n.map(k).filter(B);s?s.push(...l):v(l),e.$$.on_mount=[]}),c.forEach(x)}function H(e,t){const i=e.$$;i.fragment!==null&&(v(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(m.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,i,a,u,n,s,c=[-1]){const l=f;p(e);const r=e.$$={fragment:null,ctx:null,props:n,update:d,not_equal:u,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:E(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};s&&s(r.root);let w=!1;if(r.ctx=i?i(e,t.props||{},(o,A,...S)=>{const N=S.length?S[0]:A;return r.ctx&&u(r.ctx[o],r.ctx[o]=N)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](N),w&&ue(e,o)),A}):[],r.update(),w=!0,v(r.before_update),r.fragment=a?a(r.ctx):!1,t.target){if(t.hydrate){const o=G(t.target);r.fragment&&r.fragment.l(o),o.forEach($)}else r.fragment&&r.fragment.c();t.intro&&j(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),V()}p(l)}class F{$destroy(){H(this,1),this.$destroy=d}$on(t,i){const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(i),()=>{const u=a.indexOf(i);u!==-1&&a.splice(u,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ne(e){let t;return{c(){t=_("nav"),t.innerHTML=`<ul class="svelte-1ycptew"><li class="svelte-1ycptew"><a href="#test" class="svelte-1ycptew">Home</a></li> 
    <li class="svelte-1ycptew"><a href="#test" class="svelte-1ycptew">About</a></li> 
    <li class="svelte-1ycptew"><a href="#test" class="svelte-1ycptew">Contact</a></li></ul>`,Y(t,"class","svelte-1ycptew"),O(t,"sticky",e[0])},m(i,a){T(i,t,a)},p(i,[a]){a&1&&O(t,"sticky",i[0])},i:d,o:d,d(i){i&&$(t)}}}function se(e,t,i){let a=!1;return W(()=>{window.addEventListener("scroll",()=>{if(window.scrollY>0){i(0,a=!0);return}i(0,a=!1)})}),[a]}class re extends F{constructor(t){super(),R(this,t,se,ne,C,{})}}function oe(e){let t,i,a,u,n;return i=new re({}),{c(){t=_("main"),ae(i.$$.fragment),a=K(),u=_("div"),u.innerHTML=`<h1>Hello, world</h1> 
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
      voluptates? Explicabo, maxime. Magni.</p>`,J(u,"margin-top","75px")},m(s,c){T(s,t,c),D(i,t,null),L(t,a),L(t,u),n=!0},p:d,i(s){n||(j(i.$$.fragment,s),n=!0)},o(s){ie(i.$$.fragment,s),n=!1},d(s){s&&$(t),H(i)}}}class le extends F{constructor(t){super(),R(this,t,null,oe,C,{})}}new le({target:document.getElementById("app")});
