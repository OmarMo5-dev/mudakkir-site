(()=>{
const prev=window.mudEnhanceHtml;
const runtime=()=>{
const APP_URL="app/";
const CSS=`
.mud-theme{--v9-gold:#a8842c;--v9-ink:#2b2412;--v9-mut:rgba(43,36,18,.68);--v9-ring:rgba(168,132,44,.34);--v9-bez:#14201b;--v9-shadow:rgba(43,36,18,.28)}
.mud-theme.is-dark{--v9-gold:#cba550;--v9-ink:#f3ecda;--v9-mut:rgba(243,236,218,.72);--v9-ring:rgba(203,165,80,.4);--v9-bez:#05100c;--v9-shadow:rgba(0,0,0,.6)}
#v9-stage{position:relative;height:560px;margin:0;flex:1 1 520px;min-width:0;perspective:1600px;display:flex;align-items:center;justify-content:center;overflow:visible}
#v9-stage .v9-ring{position:absolute;width:500px;height:500px;left:50%;top:50%;margin:-250px 0 0 -250px;animation:v9spin 100s linear infinite;pointer-events:none}
@keyframes v9spin{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){#v9-stage .v9-ring{animation:none}}
.v9-ph{position:absolute;width:210px;border-radius:32px;padding:6px;background:var(--v9-bez);box-shadow:0 26px 54px var(--v9-shadow),inset 0 0 0 2px rgba(255,255,255,.08)}
.v9-ph img{display:block;width:100%;height:auto;border-radius:26px;background:#fff}
.v9-l{transform:translateX(-132px) rotateY(22deg) rotateZ(-5deg) scale(.9);z-index:1}
.v9-r{transform:translateX(132px) rotateY(-22deg) rotateZ(5deg) scale(.9);z-index:1}
.v9-c{transform:translateY(-10px) scale(1.04);z-index:3}
#mud-webdemo{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center}
#mud-webdemo .v9-t{color:var(--v9-ink)}
#mud-webdemo .v9-p{color:var(--v9-mut);max-width:34em;line-height:1.9}
#mud-webdemo ul{color:var(--v9-mut);line-height:1.9;padding-inline-start:20px}
#mud-webdemo .v9-btn{display:inline-block;margin-top:12px;padding:12px 24px;border-radius:14px;background:var(--v9-gold);color:#fff;text-decoration:none;font-weight:700;border:0;cursor:pointer;font:inherit;font-weight:700}
.mud-theme.is-dark #mud-webdemo .v9-btn{color:#1a1608}
.v9-frame{width:340px;height:728px;border-radius:50px;padding:12px;background:var(--v9-bez);box-shadow:0 36px 70px var(--v9-shadow),inset 0 0 0 2px rgba(255,255,255,.08);position:relative}
.v9-screen{position:relative;width:100%;height:100%;border-radius:40px;overflow:hidden;background:#f6fffb}
.v9-screen iframe{position:absolute;left:0;top:0;width:390px;height:844px;border:0;transform:scale(.8205);transform-origin:0 0}
.v9-poster{position:absolute;inset:0;background-size:cover;background-position:center top;display:flex;align-items:flex-end;justify-content:center;padding-bottom:36px}

.v9-poster .v9-btn{position:relative;margin:0}
.v9-m{display:none}
@media(max-width:820px){#mud-top{flex-direction:column;overflow-x:clip}#v9-stage{flex:none;width:100%;height:430px;transform:scale(.72);transform-origin:50% 0;margin:34px 0 -120px}#mud-webdemo{grid-template-columns:1fr}.v9-frame,.v9-d{display:none}.v9-m{display:inline-block}}
`;
const T={ar:{h:"جرّب التطبيق من المتصفح",eye:"نسخة تجريبية على الويب",d:"هذه نسخة الويب التجريبية من تطبيق مُدَّكر نفسه، تعمل داخل إطار هاتف.",m:"هذه نسخة الويب التجريبية من تطبيق مُدَّكر نفسه، وتفتح بملء الشاشة.",l1:"نسخة تجريبية: بعض المزايا (الإشعارات، تشغيل الصوت، الإذاعة) لم تُختبر بعد على الويب.",l2:"أول تحميل حوالي 9 ميجا، ويبدأ بعد الضغط.",start:"ابدأ التجربة",open:"افتح التطبيق",alt:["عداد السبحة","الشاشة الرئيسية","المصحف الشريف"]},
en:{h:"Try the app in your browser",eye:"Web test version",d:"This is the web test version of the Muddakir app itself, running inside a phone frame.",m:"This is the web test version of the Muddakir app itself. It opens full screen.",l1:"Test version: some features (notifications, audio playback, radio) have not been tested on the web yet.",l2:"The first load is about 9 MB and starts after you tap.",start:"Start the demo",open:"Open the app",alt:["Tasbeeh counter","Home screen","Quran reader"]}};
const RING='<svg class="v9-ring" viewBox="-100 -100 200 200" fill="none" stroke="var(--v9-gold)" stroke-width=".6" aria-hidden="true"><circle r="96" stroke="var(--v9-ring)" stroke-width="1"/><circle r="74" stroke="var(--v9-ring)"/><g id="v9s"><rect x="-20" y="-20" width="40" height="40" transform="translate(0,-74)"/><rect x="-20" y="-20" width="40" height="40" transform="translate(0,-74) rotate(45)"/></g>'+[45,90,135,180,225,270,315].map(a=>'<use href="#v9s" transform="rotate('+a+')"/>').join("")+'</svg>';
function lang(){const t=document.querySelector(".mud-theme");return t&&t.classList.contains("is-rtl")?"ar":"en"}
function stage(l){const H=window.__H||{};const t=T[l];const s=document.createElement("div");s.id="v9-stage";s.dataset.lang=l;
 s.innerHTML=RING+'<div class="v9-ph v9-l"><img src="'+H.l+'" alt="'+t.alt[0]+'" width="580" height="1280" decoding="async"></div><div class="v9-ph v9-r"><img src="'+H.r+'" alt="'+t.alt[2]+'" width="580" height="1280" decoding="async"></div><div class="v9-ph v9-c"><img src="'+H.c+'" alt="'+t.alt[1]+'" width="580" height="1280" decoding="async"></div>';return s}
function demo(l){const H=window.__H||{};const t=T[l];const s=document.createElement("section");s.id="mud-webdemo";s.className="mud-section";s.dataset.lang=l;
 s.innerHTML='<div><p class="mud-eyebrow">'+t.eye+'</p><h2 class="mud-heading">'+t.h+'</h2><p class="v9-p v9-d">'+t.d+'</p><p class="v9-p v9-m">'+t.m+'</p><ul><li>'+t.l1+'</li><li>'+t.l2+'</li></ul><a class="v9-btn v9-m" href="'+APP_URL+'">'+t.open+'</a></div><div class="v9-frame"><div class="v9-screen"><div class="v9-poster" style="background-image:url('+H.c+')"><button type="button" class="v9-btn">'+t.start+'</button></div></div></div>';
 s.querySelector(".v9-poster .v9-btn").addEventListener("click",()=>{const f=document.createElement("iframe");f.title="Muddakir";f.src=APP_URL;const sc=s.querySelector(".v9-screen");sc.appendChild(f);s.querySelector(".v9-poster").remove()});return s}
let pend=false;
function ensure(){pend=false;const hero=document.getElementById("mud-top");const exp=document.getElementById("mud-experience");if(!hero||!exp)return;const l=lang();
 let st=document.getElementById("v9-stage");if(!(st&&st.dataset.lang===l&&st.parentNode===hero)){if(st)st.remove();hero.appendChild(stage(l))}
 let d=document.getElementById("mud-webdemo");if(!(d&&d.dataset.lang===l&&d.nextSibling===exp)){const keep=d&&d.querySelector("iframe");if(d&&d.dataset.lang===l&&keep){exp.parentNode.insertBefore(d,exp)}else{if(d)d.remove();exp.parentNode.insertBefore(demo(l),exp)}}}
function sched(){if(!pend){pend=true;requestAnimationFrame(ensure)}}
const st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:["class","lang"]});
document.addEventListener("DOMContentLoaded",sched);sched();
};
window.mudEnhanceHtml=function(h){h=prev?prev(h):h;return h.replace("</head>",()=>'<script>('+runtime.toString()+')()<\/script></head>')};
})();
