(()=>{
const prev=window.mudEnhanceHtml;
const rep=(h,a,b)=>h.includes(a)?h.replace(a,()=>b):h;
window.mudEnhanceHtml=function(h){
h=prev?prev(h):h;
// 1. Remove the APK download button and its note (keep the Google Play "coming soon" badge only)
let i=h.indexOf("function J0({lang:t,className:a,withNote:b}){");
let j=h.indexOf("function MudPlayBadge(");
if(i>-1&&j>i)h=h.slice(0,i)+"function J0({lang:t,className:a}){return(0,d.jsx)(MudPlayBadge,{lang:t,className:a})}"+h.slice(j);
h=h.replace(/\.mud-apk-[\w-]+(?::[\w-]+(?:\([^)]*\))?)?\{[^{}]*\}/g,"");
h=rep(h,"النسخة التجريبية للأندرويد متاحة الآن، ورابط تحميلها في قسم «حالة التطبيق» بهذه الصفحة. إصدار Google Play قريبًا","إصدار Google Play قريبًا");
h=rep(h,"The Android beta is available now, and its download link is in the App status section on this page. The Google Play release is coming soon","The Google Play release is coming soon");
// 2. Remove only the FAQ subtitle (keep eyebrow and all questions)
h=rep(h,'(0,d.jsx)("h2",{className:"mud-heading mud-rv",children:H.faqHeading[t]}),',"");
// 3. Rebuild the numbers section with the figures supplied by Omar
const s0='(0,d.jsxs)("section",{className:"mud-section",children:[(0,d.jsx)("p",{className:"mud-eyebrow mud-rv",children:H.statsEyebrow[t]})';
const s1='s.value))})]}),';
let a=h.indexOf(s0);
if(a>-1){let b=h.indexOf(s1,a);if(b>-1){
const N=`(()=>{const ar=t==="ar",L=(x,y)=>ar?x:y;
const big=[[177,L("كتابًا في المكتبة الإسلامية","books in the Islamic library"),L("في مختلف العلوم الشرعية","across the Islamic sciences")],[158,L("قارئًا في المكتبة الصوتية","reciters in the audio library"),""],[27,L("قصة من قصص الأنبياء","stories of the prophets"),""],[99,L("اسمًا من أسماء الله الحسنى","Names of Allah"),L("مع شرح معنى كل اسم","each with its meaning explained")]];
const hadith=L(["صحيح البخاري","رياض الصالحين","صحيح مسلم","الأربعون النووية"],["Sahih al-Bukhari","Riyad as-Salihin","Sahih Muslim","The Forty Hadith of an-Nawawi"]);
const quiz=L(["التفسير","العقيدة","الحديث","الفقه","التاريخ","اللغة العربية"],["Tafsir","Creed","Hadith","Fiqh","History","Arabic language"]);
return(0,d.jsxs)("section",{className:"mud-section",id:"mud-numbers",children:[(0,d.jsx)("p",{className:"mud-eyebrow mud-rv",children:H.statsEyebrow[t]}),(0,d.jsx)("h2",{className:"mud-heading mud-rv",children:H.statsHeading[t]}),
(0,d.jsx)("div",{className:"mud-n-big",children:big.map((x,g)=>(0,d.jsxs)("div",{className:"mud-n-card mud-rv",style:{transitionDelay:g*90+"ms"},children:[(0,d.jsx)("span",{className:"mud-n-val",children:(0,d.jsx)(Zv,{value:x[0],lang:t})}),(0,d.jsx)("span",{className:"mud-n-lab",children:x[1]}),x[2]?(0,d.jsx)("span",{className:"mud-n-sub",children:x[2]}):null]},x[0]))}),
(0,d.jsxs)("div",{className:"mud-n-rows",children:[
(0,d.jsxs)("div",{className:"mud-n-box mud-rv",children:[(0,d.jsx)("h3",{children:L("كتب الأحاديث","Hadith collections")}),(0,d.jsx)("ul",{children:hadith.map(z=>(0,d.jsx)("li",{children:z},z))})]}),
(0,d.jsxs)("div",{className:"mud-n-box mud-rv",children:[(0,d.jsx)("h3",{children:L("أسئلة دينية متنوعة في مختلف الأقسام","Religious questions across different categories")}),(0,d.jsx)("div",{className:"mud-n-chips",children:quiz.map(z=>(0,d.jsx)("span",{className:"mud-chip",children:z},z))})]}),
(0,d.jsxs)("div",{className:"mud-n-box mud-rv",children:[(0,d.jsx)("h3",{children:L("حصن المسلم","Hisn al-Muslim")}),(0,d.jsx)("p",{children:L("أذكار وأدعية من حصن المسلم داخل التطبيق.","Adhkar and duas from Hisn al-Muslim, inside the app.")})]})
]})]})})(),`;
h=h.slice(0,a)+N+h.slice(b+s1.length);}}
h=h.replace("</head>",()=>'<style>#mud-numbers .mud-n-big{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}#mud-numbers .mud-n-card{background:linear-gradient(160deg,var(--mud-card) 0%,var(--mud-card-2) 100%);border:1px solid var(--mud-hairline);border-radius:20px;padding:28px 18px;text-align:center;display:flex;flex-direction:column;gap:6px;min-width:0}#mud-numbers .mud-n-val{display:block;font-family:var(--ds-font-display);font-size:48px;line-height:1.2;color:var(--mud-gold)}#mud-numbers .mud-n-lab{font-size:15px;font-weight:700;color:var(--mud-ink);line-height:1.6}#mud-numbers .mud-n-sub{font-size:13px;color:var(--mud-ink-2);line-height:1.7}#mud-numbers .mud-n-rows{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:16px}#mud-numbers .mud-n-box{background:var(--mud-card);border:1px solid var(--mud-hairline);border-radius:20px;padding:24px 22px;min-width:0}#mud-numbers .mud-n-box h3{margin:0 0 14px;font-size:17px;line-height:1.6;color:var(--mud-ink)}#mud-numbers .mud-n-box ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}#mud-numbers .mud-n-box li{color:var(--mud-ink-2);font-size:14px;padding-inline-start:16px;position:relative}#mud-numbers .mud-n-box li:before{content:"";position:absolute;inset-inline-start:0;top:.75em;width:6px;height:6px;border-radius:50%;background:var(--mud-gold)}#mud-numbers .mud-n-box p{margin:0;color:var(--mud-ink-2);font-size:14px;line-height:1.9}#mud-numbers .mud-n-chips{display:flex;flex-wrap:wrap;gap:8px}@media(max-width:900px){#mud-numbers .mud-n-big{grid-template-columns:repeat(2,minmax(0,1fr))}#mud-numbers .mud-n-rows{grid-template-columns:1fr}#mud-numbers .mud-n-val{font-size:38px}}</style></head>');
// 4. Demo phone frame: iframe viewport matches the screen area exactly (316x704 inner), no gap, no cropping
h=h.replace("</head>",()=>'<style>.v9-screen iframe{width:390px;height:869px;transform:scale(.81026)}@media(min-width:821px){#mud-top{overflow-x:clip}}@media(min-width:1100px){.mud-site{max-width:1240px}.mud-intro{max-width:640px;font-size:17px}#v9-stage{height:640px;flex-basis:600px}#v9-stage .v9-ring{width:580px;height:580px;margin:-290px 0 0 -290px}.v9-ph{width:248px;border-radius:36px;padding:7px}.v9-ph img{border-radius:29px}.v9-l{transform:translateX(-156px) rotateY(22deg) rotateZ(-5deg) scale(.9)}.v9-r{transform:translateX(156px) rotateY(-22deg) rotateZ(5deg) scale(.9)}.mud-hero-logo{width:124px;height:124px;border-radius:30px}}@media(min-width:1500px){.mud-site{max-width:1360px}.mud-intro{max-width:700px;font-size:18px}#v9-stage{height:700px;flex-basis:660px}#v9-stage .v9-ring{width:640px;height:640px;margin:-320px 0 0 -320px}.v9-ph{width:272px}.v9-l{transform:translateX(-172px) rotateY(22deg) rotateZ(-5deg) scale(.9)}.v9-r{transform:translateX(172px) rotateY(-22deg) rotateZ(5deg) scale(.9)}}</style></head>');
return h};
})();
