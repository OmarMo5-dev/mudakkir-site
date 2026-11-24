(()=>{
const prev=window.mudEnhanceHtml;
const CSS=`
#mud-experience>.mud-eyebrow,#mud-experience>.mud-heading,#mud-experience>.mud-try{display:none!important}
#mud-gallery{margin-top:6px}
#mud-gallery .tr-intro{max-width:720px;margin:14px 0 8px;line-height:1.9;color:var(--mud-ink-2)}
#mud-gallery .tr-sec{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:48px;align-items:center;margin:44px 0;padding:36px 40px;border-radius:30px;background:var(--mud-card);border:1px solid var(--mud-hairline)}
#mud-gallery .tr-sec:nth-of-type(even) .tr-txt{order:2}
#mud-gallery .tr-eye{margin:0 0 10px;font-size:13px;font-weight:700;letter-spacing:.06em;color:var(--mud-gold)}
#mud-gallery .tr-h{margin:0 0 14px;font-size:30px;line-height:1.35;color:var(--mud-ink)}
#mud-gallery .tr-p{margin:0 0 18px;line-height:1.95;color:var(--mud-ink-2);max-width:34em}
#mud-gallery .tr-ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}
#mud-gallery .tr-ul li{display:flex;align-items:center;gap:12px;color:var(--mud-ink);line-height:1.6}
#mud-gallery .tr-ul li:before{content:"";flex:0 0 22px;height:22px;border-radius:50%;background:var(--mud-teal-soft,rgba(13,107,92,.14)) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a8842c' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12.5l4 4 8-9'/%3E%3C/svg%3E") center/14px no-repeat}
#mud-gallery .tr-ph{position:relative;height:560px;direction:ltr;display:block}
#mud-gallery .tr-ph .tr-f{position:absolute;width:224px;padding:6px;border-radius:34px;background:var(--v9-bez,#14201b);box-shadow:0 26px 54px var(--v9-shadow,rgba(43,36,18,.28)),inset 0 0 0 2px rgba(255,255,255,.08)}
#mud-gallery .tr-ph .tr-f img{display:block;width:100%;height:auto;border-radius:28px;background:#fff}
#mud-gallery .tr-ph .tr-a{left:calc(50% - 214px);top:0;z-index:2;transform:rotate(-3deg)}
#mud-gallery .tr-ph .tr-b{left:calc(50% - 10px);top:58px;z-index:1;transform:rotate(3deg)}
@media(max-width:900px){#mud-gallery .tr-sec{grid-template-columns:1fr;gap:26px;padding:26px 20px;margin:28px 0}#mud-gallery .tr-sec:nth-of-type(even) .tr-txt{order:0}#mud-gallery .tr-h{font-size:24px}#mud-gallery .tr-ph{height:470px}#mud-gallery .tr-ph .tr-f{width:188px;border-radius:30px}#mud-gallery .tr-ph .tr-f img{border-radius:24px}#mud-gallery .tr-ph .tr-a{left:calc(50% - 180px)}#mud-gallery .tr-ph .tr-b{left:calc(50% - 8px);top:50px}}
@media(max-width:400px){#mud-gallery .tr-ph .tr-f{width:164px}#mud-gallery .tr-ph .tr-a{left:calc(50% - 160px)}#mud-gallery .tr-ph{height:420px}}
`;
function runtime(){
  const T={
    ar:{eye:"جولة في التطبيق",h:"جولة في التطبيق.",intro:"لقطات حقيقية من مُدَّكر، مع شرح لما تراه في كل شاشة. غيّر الوضع من الأعلى لتراها بالوضع الفاتح أو الداكن."},
    en:{eye:"App tour",h:"A tour of the app.",intro:"Real screens from Muddakir, with a short note on what each one shows. Switch the theme at the top to see them in light or dark mode."}
  };
  const S=[
   {k:["home1","home2"],ar:["الرئيسية والإعدادات","كل أقسامك من شاشة واحدة","تفتح الأقسام من الرئيسية، وتتابع إذاعة القرآن الكريم، وتضبط شكل التطبيق من الإعدادات.",["شريط أقسام التطبيق في الرئيسية","إذاعة القرآن الكريم على الرئيسية","وضع فاتح ووضع داكن"]],
     en:["Home and settings","All your sections on one screen","Open any section from Home, follow the Quran radio, and set up the app from Settings.",["A row of app sections on Home","Quran radio on Home","Light and dark modes"]],alt:["الرئيسية","الإعدادات"]},
   {k:["pray1","pray2"],ar:["الصلاة والختمة","مواقيت الصلاة وختمتك اليومية","تعرف الصلاة القادمة وموعدها، وتتابع تقدمك في ختمة القرآن يومًا بيوم.",["الصلاة القادمة والوقت المتبقي","جدول الختمة بالأيام","ورد يومي تحدده بنفسك"]],
     en:["Prayer and Khatma","Prayer times and your daily Khatma","See the next prayer and its time, and follow your Quran Khatma day by day.",["Next prayer and time remaining","A day-by-day Khatma calendar","A daily portion you set yourself"]],alt:["مواقيت الصلاة","جدول الختمة"]},
   {k:["qur1","qur2"],ar:["القرآن الكريم","المصحف والتلاوات","اقرأ من المصحف الشريف، وانتقل بين السور بسهولة، واستمع من المكتبة الصوتية.",["فهرس السور مع البحث","متابعة القراءة من آخر موضع","المكتبة الصوتية للتلاوات"]],
     en:["The Quran","Mushaf and recitations","Read the Mushaf, jump between surahs, and listen from the audio library.",["Surah index with search","Continue reading where you stopped","An audio library of recitations"]],alt:["المصحف الشريف","المكتبة الصوتية"]},
   {k:["adh1","adh2"],ar:["الأذكار","أذكار لكل وقت","اختر القسم الذي تريده واقرأ الذكر بخط واضح، مع عدّاد يساعدك على إتمامه.",["أقسام متنوعة للأذكار","نص كبير مريح للقراءة","عدّاد لكل ذكر"]],
     en:["Adhkar","Adhkar for every time of day","Pick a section and read each dhikr in clear text, with a counter to help you finish it.",["Many adhkar sections","Large, comfortable text","A counter for each dhikr"]],alt:["أقسام الأذكار","قراءة الذكر"]},
   {k:["had1","had2"],ar:["الأحاديث والمكتبة","الأحاديث النبوية والكتب","اقرأ الأحاديث من كتب الحديث، وتصفح الكتب في المكتبة الإسلامية.",["البخاري ومسلم والأربعون النووية ورياض الصالحين","قراءة بخط واضح","مكتبة إسلامية بكتب للقراءة"]],
     en:["Hadith and library","Hadith and books","Read hadith from the main collections and browse books in the Islamic library.",["Bukhari, Muslim, the Forty Nawawi and Riyad as-Salihin","Clear reading text","An Islamic library of books to read"]],alt:["الأحاديث","المكتبة الإسلامية"]},
   {k:["tas1","tas2"],ar:["السبحة والأدعية","سبّح وادعُ بسهولة","عدّاد للتسبيح، وأدعية مصنفة في أقسام تصل إليها بسرعة.",["سبحة بعدّاد","أدعية مصنفة","اختيار الذكر الذي تريده"]],
     en:["Tasbeeh and duas","Count tasbeeh and find duas","A tasbeeh counter, and duas sorted into sections you can reach quickly.",["A tasbeeh counter","Duas sorted by topic","Choose the dhikr you want"]],alt:["السبحة","الأدعية"]},
   {k:["asm1","asm2"],ar:["أسماء الله والأسئلة","تعلّم واختبر نفسك","اقرأ شرح أسماء الله الحسنى، ثم جرّب أسئلة دينية وشاهد نتيجتك.",["شرح كل اسم من أسماء الله الحسنى","أسئلة دينية للاختبار","نتيجة وتقييم في النهاية"]],
     en:["Names of Allah and quiz","Learn, then test yourself","Read the meaning of the Names of Allah, then try religious questions and see your result.",["Meaning of each Name of Allah","Religious quiz questions","A score at the end"]],alt:["أسماء الله الحسنى","الأسئلة"]}
  ];
  function lang(){const t=document.querySelector(".mud-theme");return t&&t.classList.contains("is-rtl")?"ar":(document.documentElement.lang==="en"?"en":"ar")}
  function dark(){return !!document.querySelector(".mud-theme.is-dark")}
  function sync(){const d=dark()?1:0;document.querySelectorAll("img[data-tr]").forEach(i=>{const p=window.__TR&&window.__TR[i.dataset.tr];if(p&&p[d]&&i.getAttribute("src")!==p[d])i.src=p[d]})}
  function build(sec,l){
    const t=T[l];const g=document.createElement("div");g.id="mud-gallery";g.dataset.lang=l;
    let h='<p class="mud-eyebrow">'+t.eye+'</p><h2 class="mud-heading">'+t.h+'</h2><p class="tr-intro">'+t.intro+'</p>';
    S.forEach(s=>{const c=s[l];const a=s.alt;
      h+='<section class="tr-sec"><div class="tr-txt"><p class="tr-eye">'+c[0]+'</p><h3 class="tr-h">'+c[1]+'</h3><p class="tr-p">'+c[2]+'</p><ul class="tr-ul">'+c[3].map(x=>'<li>'+x+'</li>').join("")+'</ul></div><div class="tr-ph"><div class="tr-f tr-a"><img data-tr="'+s.k[0]+'" alt="'+a[0]+'" lang="ar" width="440" height="971" loading="lazy" decoding="async"></div><div class="tr-f tr-b"><img data-tr="'+s.k[1]+'" alt="'+a[1]+'" lang="ar" width="440" height="971" loading="lazy" decoding="async"></div></div></section>'});
    g.innerHTML=h;sec.appendChild(g);sync();
  }
  let pend=false;
  function ensure(){pend=false;const sec=document.getElementById("mud-experience");if(!sec)return;const l=lang();let g=document.getElementById("mud-gallery");if(g&&g.dataset.lang===l&&g.parentNode===sec){sync();return}if(g)g.remove();build(sec,l)}
  function sched(){if(!pend){pend=true;requestAnimationFrame(ensure)}}
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:["class","lang"]});
  document.addEventListener("DOMContentLoaded",sched);sched();
}
window.mudEnhanceHtml=function(h){h=prev?prev(h):h;const A='useState("ar"),[l,e]=ft.default.useState(!0)';const B='useState("ar"),[l,e0]=ft.default.useState(()=>{try{return localStorage.getItem("mud-theme")==="dark"}catch(x){return!1}}),e=s=>e0(p=>{let v=typeof s==="function"?s(p):s;try{localStorage.setItem("mud-theme",v?"dark":"light")}catch(x){}return v})';if(h.indexOf(A)>-1)h=h.replace(A,()=>B);const add='<style>'+CSS+'</style><script>('+runtime.toString()+')()<\/script></head>';return h.replace("</head>",()=>add)};
})();
