(()=>{
const prev=window.mudEnhanceHtml;
const star=(c,o)=>"<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120' fill='none' stroke='"+c+"' stroke-opacity='"+o+"' stroke-width='1'><rect x='30' y='30' width='60' height='60'/><rect x='30' y='30' width='60' height='60' transform='rotate(45 60 60)'/><circle cx='60' cy='60' r='16'/><path d='M0 0L30 30M120 0L90 30M0 120L30 90M120 120L90 90'/><circle cx='0' cy='0' r='6'/><circle cx='120' cy='0' r='6'/><circle cx='0' cy='120' r='6'/><circle cx='120' cy='120' r='6'/></svg>";
const url=s=>'url("data:image/svg+xml,'+encodeURIComponent(s)+'")';
const divider=(c)=>url("<svg xmlns='http://www.w3.org/2000/svg' width='260' height='28' viewBox='0 0 260 28' fill='none' stroke='"+c+"' stroke-width='1.2'><path d='M0 14H104M156 14H260' stroke-opacity='.55'/><g transform='translate(130 14)'><rect x='-8' y='-8' width='16' height='16'/><rect x='-8' y='-8' width='16' height='16' transform='rotate(45)'/><circle r='2.4' fill='"+c+"'/></g><circle cx='96' cy='14' r='2' fill='"+c+"'/><circle cx='164' cy='14' r='2' fill='"+c+"'/></svg>");
const CSS=`
html,body{overflow-x:clip}
.mud-theme{position:relative;isolation:isolate;overflow-x:clip}
.mud-theme::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;background-image:${url(star('#a8842c','.3'))};background-size:120px 120px;background-position:center top;-webkit-mask-image:radial-gradient(ellipse 120% 90% at 50% 40%,#000 25%,rgba(0,0,0,.45) 100%);mask-image:radial-gradient(ellipse 120% 90% at 50% 40%,#000 25%,rgba(0,0,0,.45) 100%)}
.mud-theme.is-dark::before{background-image:${url(star('#cba550','.17'))}}
.mud-theme::after{content:"";position:absolute;left:0;right:0;top:0;height:900px;z-index:-1;pointer-events:none;background:radial-gradient(ellipse 55% 60% at 30% 38%,rgba(15,110,90,.16),transparent 70%),radial-gradient(ellipse 40% 45% at 78% 30%,rgba(203,165,80,.14),transparent 70%)}
.mud-theme.is-dark::after{background:radial-gradient(ellipse 55% 60% at 30% 38%,rgba(32,150,125,.22),transparent 70%),radial-gradient(ellipse 40% 45% at 78% 30%,rgba(203,165,80,.12),transparent 70%)}
#mud-top{overflow:visible!important;position:relative}
@media(min-width:821px){#mud-top{overflow-x:visible!important}}
#v9-stage{overflow:visible!important;z-index:1}
#v9-stage::before{content:"";position:absolute;left:50%;top:50%;width:112%;aspect-ratio:1;max-width:760px;transform:translate(-50%,-50%);border-radius:50%;pointer-events:none;background:repeating-conic-gradient(var(--v9-gold) 0 .7deg,transparent .7deg 7.5deg);-webkit-mask-image:radial-gradient(circle,transparent 62%,#000 63%,#000 70%,transparent 71%);mask-image:radial-gradient(circle,transparent 62%,#000 63%,#000 70%,transparent 71%);opacity:.5;animation:v12spin 160s linear infinite reverse}
#v9-stage::after{content:"";position:absolute;left:50%;top:50%;width:90%;aspect-ratio:1;max-width:620px;transform:translate(-50%,-50%);border-radius:50%;pointer-events:none;z-index:-1;background:radial-gradient(circle,rgba(203,165,80,.22),rgba(203,165,80,0) 68%)}
@keyframes v12spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
@media(prefers-reduced-motion:reduce){#v9-stage::before{animation:none}}
#v9-stage .v9-ring{opacity:.9;stroke-width:.8}
.v9-ph{box-shadow:0 34px 70px var(--v9-shadow),0 0 0 1px rgba(203,165,80,.25),inset 0 0 0 2px rgba(255,255,255,.08)}
.mud-section{position:relative}
.mud-section+.mud-section::before,#mud-webdemo::before{content:"";display:block;width:260px;height:28px;margin:0 auto 34px;background:${divider('#a8842c')} center/contain no-repeat;opacity:.9}
.mud-theme.is-dark .mud-section+.mud-section::before,.mud-theme.is-dark #mud-webdemo::before{background-image:${divider('#cba550')}}
#mud-webdemo::before{grid-column:1/-1;margin-bottom:6px}
.mud-theme .mud-eyebrow{position:relative}
@media(min-width:821px) and (max-width:1099px){#v9-stage{flex:0 1 400px;height:520px}#v9-stage .v9-ring{width:420px;height:420px;margin:-210px 0 0 -210px}.v9-ph{width:172px;border-radius:28px;padding:5px}.v9-ph img{border-radius:23px}.v9-l{transform:translateX(-104px) rotateY(22deg) rotateZ(-5deg) scale(.9)}.v9-r{transform:translateX(104px) rotateY(-22deg) rotateZ(5deg) scale(.9)}}
@media(min-width:1100px){.mud-site{max-width:1280px}#v9-stage{height:700px;flex-basis:640px}#v9-stage .v9-ring{width:640px;height:640px;margin:-320px 0 0 -320px}.v9-ph{width:268px;border-radius:38px;padding:7px}.v9-ph img{border-radius:31px}.v9-l{transform:translateX(-178px) rotateY(22deg) rotateZ(-5deg) scale(.92)}.v9-r{transform:translateX(178px) rotateY(-22deg) rotateZ(5deg) scale(.92)}.v9-c{transform:translateY(-8px) scale(1.06)}}
@media(min-width:1500px){#v9-stage{height:760px;flex-basis:700px}#v9-stage .v9-ring{width:700px;height:700px;margin:-350px 0 0 -350px}.v9-ph{width:290px}.v9-l{transform:translateX(-196px) rotateY(22deg) rotateZ(-5deg) scale(.92)}.v9-r{transform:translateX(196px) rotateY(-22deg) rotateZ(5deg) scale(.92)}}
`;
window.mudEnhanceHtml=function(h){h=prev?prev(h):h;return h.replace("</head>",()=>"<style>"+CSS+"</style></head>")};
})();
