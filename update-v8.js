(()=>{
const prev=window.mudEnhanceHtml;
const CSS=`
#mud-experience>.mud-eyebrow,#mud-experience>.mud-heading,#mud-experience>.mud-try{display:none!important}
#mud-gallery{margin-top:6px}
#mud-gallery .mg-intro{max-width:720px;margin:14px 0 8px;line-height:1.9;opacity:.85}
#mud-gallery .mg-group{margin:34px 0 14px;font-size:22px;font-weight:700;display:flex;align-items:center;gap:12px}
#mud-gallery .mg-group:after{content:"";flex:1;height:1px;background:currentColor;opacity:.18}
#mud-gallery .mg-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
#mud-gallery .mg-card{display:block;padding:0;margin:0;border:1px solid rgba(201,162,74,.45);border-radius:22px;overflow:hidden;background:#fff;cursor:zoom-in;box-shadow:0 10px 30px rgba(0,0,0,.28);transition:transform .2s ease,box-shadow .2s ease;aspect-ratio:9/16}
#mud-gallery .mg-card:hover,#mud-gallery .mg-card:focus-visible{transform:translateY(-4px);box-shadow:0 16px 38px rgba(0,0,0,.38);outline:2px solid #c9a24a;outline-offset:2px}
#mud-gallery .mg-card img{display:block;width:100%;height:100%;object-fit:contain}
.mud-theme.is-light #mud-gallery .mg-card{border-color:rgba(20,80,70,.28);box-shadow:0 10px 26px rgba(30,60,50,.14)}
#mg-lightbox{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.88);display:none;align-items:center;justify-content:center;padding:18px;cursor:zoom-out}
#mg-lightbox.on{display:flex}
#mg-lightbox img{max-width:100%;max-height:100%;border-radius:16px;background:#fff}
#mg-lightbox button{position:absolute;top:14px;inset-inline-start:14px;width:44px;height:44px;border-radius:50%;border:0;font-size:24px;cursor:pointer;background:#fff;color:#111}
@media(max-width:1000px){#mud-gallery .mg-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:640px){#mud-gallery .mg-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}#mud-gallery .mg-card{border-radius:16px}#mud-gallery .mg-group{font-size:19px}}
`;
function runtime(){
  const T={
    ar:{eye:"لقطات من التطبيق",h:"شوف مُدَّكر من جوّه.",intro:"لقطات حقيقية من التطبيق، وعلى كل واحدة اسم الميزة وسطر يشرحها. اضغط على أي صورة لتكبيرها.",close:"إغلاق",
      g:["الشاشة الرئيسية","القرآن والاستماع","الختمة والصلاة والقبلة","الأذكار والتسبيح والمكتبة","الإعدادات"]},
    en:{eye:"App screenshots",h:"See inside Muddakir.",intro:"Real screenshots from the app, each with the feature name and a short line explaining it. Tap any image to enlarge it.",close:"Close",
      g:["Home","Quran and listening","Khatma, prayer times and Qibla","Adhkar, tasbeeh and library","Settings"]}
  };
  const GROUPS=[[1,20],[4,9,10,12,5,11,21],[2,3,7],[6,8,13,14,15,16,17,18],[19]];
  const ALT={1:"الشاشة الرئيسية: يومك الإيماني في مكان واحد",2:"الختمة: تابع ختمتك كل يوم",3:"مواقيت الصلاة",4:"المصحف: اقرأ المصحف",5:"التلاوات: استمع للتلاوات",6:"أذكار الصباح",7:"اتجاه القبلة",8:"السبحة: سبّح بسهولة",9:"اقرأ واستمع",10:"فهرس السور",11:"مكتبة التلاوات",12:"وضع القراءة الداكن",13:"الأحاديث النبوية",14:"المكتبة الإسلامية",15:"تفاصيل الكتاب",16:"الأدعية",17:"أسئلة دينية",18:"أسماء الله الحسنى",19:"الإعدادات",20:"أقسام التطبيق والإذاعة",21:"مشغل التلاوة: تكرار وتخطٍّ وسرعة"};
  const pad=n=>(n<10?"0":"")+n;
  function lang(){const t=document.querySelector(".mud-theme");return t&&t.classList.contains("is-rtl")?"ar":(document.documentElement.lang==="en"?"en":"ar")}
  function box(){let b=document.getElementById("mg-lightbox");if(b)return b;b=document.createElement("div");b.id="mg-lightbox";b.innerHTML='<button type="button" aria-label="Close">×</button><img alt="">';b.addEventListener("click",()=>b.classList.remove("on"));document.body.appendChild(b);document.addEventListener("keydown",e=>{if(e.key==="Escape")b.classList.remove("on")});return b}
  function build(sec,l){
    const t=T[l];const g=document.createElement("div");g.id="mud-gallery";g.dataset.lang=l;
    let h='<p class="mud-eyebrow">'+t.eye+'</p><h2 class="mud-heading">'+t.h+'</h2><p class="mg-intro">'+t.intro+'</p>';
    GROUPS.forEach((ids,gi)=>{h+='<h3 class="mg-group">'+t.g[gi]+'</h3><div class="mg-grid">'+ids.map(i=>'<button type="button" class="mg-card" data-i="'+i+'"><img src="'+(window.__G&&window.__G[i]||'')+'" alt="'+ALT[i]+'" lang="ar" width="720" height="1280" decoding="async"></button>').join("")+'</div>'});
    g.innerHTML=h;
    g.addEventListener("click",e=>{const c=e.target.closest(".mg-card");if(!c)return;const b=box();const im=b.querySelector("img");im.src=c.querySelector("img").src;im.alt=c.querySelector("img").alt;b.classList.add("on")});
    sec.appendChild(g);
  }
  let pend=false;
  function ensure(){pend=false;const sec=document.getElementById("mud-experience");if(!sec)return;const l=lang();let g=document.getElementById("mud-gallery");if(g&&g.dataset.lang===l&&g.parentNode===sec)return;if(g)g.remove();build(sec,l)}
  function sched(){if(!pend){pend=true;requestAnimationFrame(ensure)}}
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:["class","lang"]});
  document.addEventListener("DOMContentLoaded",sched);sched();
}
window.mudEnhanceHtml=function(h){h=prev?prev(h):h;const A='useState("ar"),[l,e]=ft.default.useState(!0)';const B='useState("ar"),[l,e0]=ft.default.useState(()=>{try{return localStorage.getItem("mud-theme")==="dark"}catch(x){return!1}}),e=s=>e0(p=>{let v=typeof s==="function"?s(p):s;try{localStorage.setItem("mud-theme",v?"dark":"light")}catch(x){}return v})';if(h.indexOf(A)>-1)h=h.replace(A,()=>B);const add='<style>'+CSS+'</style><script>('+runtime.toString()+')()<\/script></head>';return h.replace("</head>",()=>add)};
})();
