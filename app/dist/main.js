(()=>{"use strict";var e,t,i,n={85:(e,t,i)=>{var n=i(893),s=i(745),r=i(655),o=i(250),a=i(788);const d=a.ZP.div((({gradient:e,img:t,zIndex:i})=>a.iv`
    z-index: ${i||-1};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: ${e};
    background-size: 400% 400%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;

    ${t&&a.iv`
      background-image: url(${t});
      background-size: cover;
      filter: brightness(0.4);
    `}
  `)),c=a.ZP.div((({blur:e})=>a.iv`
    width: 100%;
    height: 100%;
    transition: backdrop-filter 0.1s;
    ${e&&"backdrop-filter: blur(60px);"}
  `)),l=e=>(0,n.jsx)(d,Object.assign({},e,{children:(0,n.jsx)(c,Object.assign({},e))}));var h=i(294),u=i(640);const g="console_ui_db",x=i.n(u)()({readDB:()=>JSON.parse(window.localStorage.getItem(g)||"{}"),saveDB:e=>(e.updatedAt=(new Date).toISOString(),window.localStorage.setItem(g,JSON.stringify(e)),e)});var m;x.data.testData();const p={gradientBg:null===(m=x.settings.read())||void 0===m?void 0:m.bgOption,imgBg:""},f=(0,h.createContext)([p,()=>{}]),b=e=>(0,n.jsx)(f.Provider,Object.assign({value:(0,h.useState)(p)},{children:e.children})),v=()=>(0,h.useContext)(f),j="games/list/bar",w=(0,h.createContext)([j,()=>{}]),$=e=>(0,n.jsx)(w.Provider,Object.assign({value:(0,h.useState)(j)},{children:e.children})),y=()=>(0,h.useContext)(w),z=(0,a.vJ)((({theme:e})=>a.iv`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: ${e.fontSize.body};
      height: 100vh;
      width: 100vw;
      max-height: 100vh;
      max-width: 100vw;
      overflow: hidden;
    }
    html,
    body {
      font-family: Roboto, sans-serif;
      background-color: transparent;
      color: ${e.colors.text3};
    }
    h1 {
      font-size: ${e.fontSize.h1};
    }
    h2 {
      font-size: ${e.fontSize.h2};
    }
    h3 {
      font-size: ${e.fontSize.h3};
    }
    h4 {
      font-size: ${e.fontSize.h4};
    }
    h5 {
      font-size: ${e.fontSize.h5};
    }
    h6 {
      font-size: ${e.fontSize.h6};
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
    }
    div::-webkit-scrollbar {
      width: ${e.size(2)};
    }
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    div::-webkit-scrollbar-thumb {
      background: ${e.colors.gray};
      border-radius: 2px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: ${e.colors.main};
    }
    #root {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `)),k="#880e4f",P="#c51162",O="#8e24aa",S="#aa00ff",A="#6200ea",Z="#0091ea",B="#00b8d4",C="#7cb342",E="#64dd17",L="#e0e0e0",D="#bdbdbd",R="#9e9e9e",I="#757575",U="#616161",W="#424242",F="#141414",_={size:e=>.2*e+"rem",colors:{main:"#039be5",mainBg:"#0C66E4",bg1:L+"55",bg2:L+"33",bg3:L+"22",bg4:L+"11",text1:"#fafafa",text2:"#eeeeee",text3:L,text4:D,gray:D,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:C,white:L,black:F},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.8rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",full:"50%"},devices:{mobileS:"(max-width: 320px)",mobileM:"(max-width: 425px)",mobileL:"(max-width: 480px)",tablet:"(max-width: 768px)",laptopS:"(max-width: 900px)",laptopM:"(max-width: 1024px)",laptopL:"(max-width: 1280px)",desktopS:"(max-width: 1440px)",desktopM:"(max-width: 1980px)",desktopL:"(max-width: 2560px)"}},G=(Object.assign(Object.assign({},_),{colors:Object.assign(Object.assign({},_.colors),{bg1:F,bg2:W+"44",bg3:U+"44",bg4:I+"44",text1:L,text2:D,text3:R,text4:U,gray:I,white:L})}),{indigo:`linear-gradient(150deg, #2962ff, ${F} 80%)`,blue:`linear-gradient(150deg, ${Z}, ${F} 80%)`,green:`linear-gradient(150deg, ${E}, ${F} 80%)`,deepPurple:`linear-gradient(150deg, ${A}, ${F} 80%)`,purple:`linear-gradient(150deg, ${S}, ${F} 80%)`,pink:`linear-gradient(150deg, ${P}, ${F} 80%)`,red:`linear-gradient(150deg, #d32f2f, ${F} 80%)`,blueAndPurple:`linear-gradient(150deg, ${B}, ${O} 70%)`,blueAndPink:`linear-gradient(150deg, ${B}, ${P} 80%)`,greenAndPink:`linear-gradient(150deg, ${E}, ${k} 80%)`,blueAndBrown:`linear-gradient(150deg, ${Z}, #5d4037 75%)`,purpleAndGreen:`linear-gradient(150deg, ${A}, ${C} 80%)`});var M=i(155),T=i(352);const N={games:(0,n.jsx)(T.gdw,{}),apps:(0,n.jsx)(T.v$D,{}),music:(0,n.jsx)(T.JUP,{}),midia:(0,n.jsx)(T.SD9,{}),web:(0,n.jsx)(T.lct,{}),news:(0,n.jsx)(T.lBz,{}),theme:(0,n.jsx)(T.zCJ,{}),settings:(0,n.jsx)(T.NY,{}),user:(0,n.jsx)(T.sFD,{}),battery:(0,n.jsx)(T.e8c,{}),gamepad:(0,n.jsx)(M.uWr,{}),search:(0,n.jsx)(T.Qcu,{}),folder:(0,n.jsx)(T.G2V,{}),file:(0,n.jsx)(T.UfY,{}),image:(0,n.jsx)(T.RXd,{}),"arrow-left":(0,n.jsx)(T.jW7,{}),"arrow-right":(0,n.jsx)(T.jfD,{}),usb:(0,n.jsx)(T.rAw,{}),controls:(0,n.jsx)(M.uWr,{}),edit:(0,n.jsx)(T.ISo,{})},Y=a.ZP.span((({theme:e,size:t})=>a.iv`
    display: inline-flex;
    font-size: ${e.size(t||8)};
  `)),X=e=>{const{type:t,size:i,style:s}=e;return(0,n.jsx)(Y,Object.assign({size:i,style:s},{children:N[t]}))},J={axis0Pos:"LeftStickRight",axis0Neg:"LeftStickLeft",axis1Pos:"LeftStickDown",axis1Neg:"LeftStickUp",axis2Pos:"RightStickRight",axis2Neg:"RightStickLeft",axis3Pos:"RightStickDown",axis3Neg:"RightStickUp",button0:"ButtonA",button1:"ButtonB",button2:"ButtonX",button3:"ButtonY",button4:"ButtonLeft",button5:"ButtonRight",button6:"TriggerLeft",button7:"TriggerRight",button8:"ButtonSelect",button9:"ButtonStart",button10:"LeftStick",button11:"RightStick",button12:"ArrowUp",button13:"ArrowDown",button14:"ArrowLeft",button15:"ArrowRight",button16:"ButtonHome"},q=[],V=e=>{console.log("Disconnected",e.gamepad.id),q.forEach((e=>clearInterval(e)))},H=(0,h.createContext)((()=>{})),K=e=>{const[t,i]=(0,h.useState)([]),s=(0,h.useCallback)(((e,i)=>{1===t.length&&t.includes(e)&&i&&i()}),[t]);return(0,h.useEffect)((()=>{window.addEventListener("gamepadconnected",(e=>((e,t)=>{console.log("Connected",e.gamepad.id),q.push(((e,t)=>{const i={time:0,buttons:[""]};return setInterval((()=>{const{timestamp:n,axes:s,buttons:r}=navigator.getGamepads()[e],o=[];if(n===i.time)return i.time=n;i.time=n,s.forEach(((e,t)=>{if(1!==e&&-1!==e)return!1;const i=`axis${t}${e>0?"Pos":"Neg"}`;J[i]&&o.push(J[i])})),r.forEach(((e,t)=>{if(0===e.value)return!1;const i=`button${t}`;J[i]&&o.push(J[i])})),i.buttons.toString()!==o.toString()&&(i.buttons=o,t&&t(o))}),33.33)})(e.gamepad.index,t))})(e,i))),window.addEventListener("gamepaddisconnected",V)}),[]),(0,n.jsx)(H.Provider,Object.assign({value:s},{children:e.children}))},Q=()=>(0,h.useContext)(H),ee=[{name:"games",route:"games/list/bar"},{name:"apps",route:"apps"},{name:"music",route:"music"},{name:"midia",route:"midia"},{name:"web",route:"web"},{name:"theme",route:"theme"},{name:"controls",route:"controls"},{name:"settings",route:"settings"}],te=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    max-width: ${e.size(500)};
    display: flex;
    align-items: center;
    padding: ${e.size(4)};
    margin: ${e.size(2)} auto;
  `)),ie=a.ZP.div((()=>a.iv`
    display: flex;
    align-items: center;
  `)),ne=a.ZP.div((({theme:e})=>a.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
  `)),se=a.ZP.div((()=>a.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `)),re=a.ZP.span((({theme:e})=>a.iv`
    padding: 0 ${e.size(2)};
    font-size: ${e.fontSize.h1};
    text-transform: capitalize;
  `)),oe=a.ZP.label((({theme:e,selected:t})=>a.iv`
    display: flex;
    position: relative;
    align-items: center;
    color: ${e.colors.bg1};
    transition: 0.3s ease-out;
    cursor: pointer;

    :hover {
      color: ${e.colors.text2};
    }

    ${t&&a.iv`
      color: ${e.colors.text1};
      margin-left: ${e.size(15)};
      margin-right: ${e.size(15)};
    `}

    ${re} {
      width: 0;
      ${!t&&"opacity: 0;"}
      ${t&&`width: ${e.size(25)};`}
    }
  `)),ae=()=>{const e=Q(),[t,i]=y(),[s,r]=(0,h.useState)(0);return(0,h.useEffect)((()=>{e("ButtonLeft",(()=>r(s-1))),e("ButtonRight",(()=>s<ee.length-1&&r(s+1)))}),[e]),(0,h.useEffect)((()=>{const e=ee[s].route;i(e)}),[s]),(0,n.jsxs)(te,{children:[(0,n.jsx)(ie,{children:(0,n.jsx)(X,{type:"user",size:7})}),(0,n.jsx)(se,{children:ee.map(((e,t)=>(0,n.jsxs)(oe,Object.assign({selected:s===t,onClick:()=>r(t)},{children:[(0,n.jsx)(X,{type:e.name,size:13}),(0,n.jsx)(re,{children:e.name})]}))))}),(0,n.jsx)(ne,{children:(0,n.jsx)(X,{type:"gamepad",size:7})})]})},de=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    max-width: ${e.size(500)};
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
  `)),ce=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
  `)),le=e=>(0,n.jsx)(de,{children:(0,n.jsx)(ce,{children:e.children})}),he=()=>(0,n.jsx)(le,{}),ue=e=>e.check?e.true||e.children:e.false,ge=e=>{const{content:t}=e;return(0,n.jsx)("div",Object.assign({style:{display:"block",width:"1.8rem"}},{children:(0,n.jsxs)("svg",Object.assign({width:"100%",height:"100%",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,n.jsx)("circle",{id:"Oval",fill:"none",cx:"31",cy:"31",r:"27.841",style:{strokeWidth:"4px",stroke:"#999"},transform:"matrix(0.910153, 0, 0, 0.89304, 3.448403, 3.713665)"}),(0,n.jsx)("text",Object.assign({style:{fill:"#DDD",fontFamily:"FreeSans",fontSize:"32.4528px",fontWeight:"bold",whiteSpace:"pre"},transform:"matrix(1.478571, 0, 0, 1.232558, -10.114382, -9.312138",x:"19.5",y:"44"},{children:t}))]}))}))},xe=a.ZP.div((({theme:e})=>a.iv`
    position: fixed;
    bottom: ${e.size(6)};
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: ${e.size(4)};
    height: ${e.size(8)};
  `)),me=a.ZP.div((({theme:e})=>a.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(1)};
  `)),pe=a.ZP.div((({theme:e})=>a.iv`
    font-size: ${e.fontSize.label};
    padding-bottom: ${e.size(.75)};
    color: ${e.colors.text3};
  `)),fe=e=>{const t=(0,h.useMemo)((()=>{var t;return null===(t=e.buttons)||void 0===t?void 0:t.map((e=>(0,n.jsxs)(me,{children:[(0,n.jsx)(ge,{content:e.content}),(0,n.jsx)(pe,{children:e.label})]})))}),[]);return(0,n.jsx)(xe,{children:t})},be=()=>{const[e,t]=(0,h.useState)(!1),[i,n]=(0,h.useState)(0),[s,r]=(0,h.useState)(0),o=(0,h.useCallback)(((i,s)=>{"active"===i&&"boolean"==typeof s&&t(s),"focus"===i&&"number"==typeof s&&!e&&s>=0&&n(s),"option"===i&&"number"==typeof s&&s>=0&&r(s)}),[e,i,s]);return{focus:i,active:e,option:s,setUI:o}},ve=(()=>{const e=window.require;return window.require=null,{isActive:!!e,resolvePath:t=>{try{return e("path").resolve(t)}catch(e){return console.error(e),""}},fetchHTML:t=>new Promise(((i,n)=>{try{e("http").get(t,(e=>{let t="";e.on("data",(e=>t+=e)),e.on("end",(()=>i(t)))}))}catch(e){n(e)}})),exec:t=>{try{return e("child_process").execSync(t).toString()}catch(e){return console.log(e),""}},listDir:t=>{try{const i=e("fs"),n=e("path");return i.readdirSync(n.resolve(t)).filter((e=>!e.startsWith(".")))}catch(e){return console.error(e),[]}}}})(),je=a.ZP.div((()=>a.iv`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  `)),we=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    display: flex;
    gap: ${e.size(8)};
    height: ${e.size(120)};
    margin-bottom: ${e.size(20)};
  `)),$e=a.ZP.div((({theme:e,img:t})=>a.iv`
    height: 100%;
    width: ${e.size(90)};
    min-width: ${e.size(90)};
    max-width: ${e.size(90)};
    background-color: transparent;
    border-radius: ${e.radius.large};
    box-shadow: ${e.shadow.high};
    border: 2px solid ${e.colors.bg1};
    background-image: url(${t});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.1s;
    font-size: ${e.size(20)};
    ${t&&"color: transparent;"}
  `)),ye=a.ZP.div((()=>a.iv`
    display: flex;
    flex-direction: column;
  `)),ze=a.ZP.div((()=>a.iv`
    width: 100%;
    height: 100%;
  `)),ke=a.ZP.div((({theme:e})=>a.iv`
    color: ${e.colors.text1};
    font-size: ${e.size(14)};
  `)),Pe=a.ZP.div((({theme:e})=>a.iv`
    color: ${e.colors.text3};
    font-size: ${e.fontSize.h4};
  `)),Oe=a.ZP.div((()=>a.iv`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  `)),Se=a.ZP.div((({theme:e,focus:t,img:i})=>a.iv`
    height: 100%;
    width: ${e.size(50)};
    max-width: ${e.size(50)};
    margin-right: ${e.size(4)};
    background-color: transparent;
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.high};
    border: 2px solid ${e.colors.bg1};
    background-image: url(${i});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: ${e.size(10)};
    transition: 0.3s;
    ${i&&"color: transparent;"}

    :nth-child(-n + ${t+1}) {
      width: 0;
      margin: 0;
      border: none;
      opacity: 0;
      overflow: hidden;
    }
  `)),Ae=()=>{const[e,t]=v(),i=Q(),{focus:s,setUI:r}=be(),o=(0,h.useMemo)((()=>x.games.read()),[]),a=(0,h.useMemo)((()=>o[s]),[s]);return(0,h.useEffect)((()=>{i("ArrowLeft",(()=>r("focus",s-1))),i("ArrowRight",(()=>s<o.length-1&&r("focus",s+1))),i("ButtonStart",(()=>{ve.exec(`cd ${a.gamePath} && ./${a.gameFile}`)}))}),[i]),(0,h.useEffect)((()=>{t(Object.assign(Object.assign({},e),{imgBg:a.background}))}),[a.background]),(0,n.jsxs)(je,{children:[(0,n.jsxs)(we,{children:[(0,n.jsx)($e,Object.assign({img:null==a?void 0:a.cover},{children:null==a?void 0:a.name})),(0,n.jsxs)(ye,{children:[(0,n.jsxs)(ze,{children:[(0,n.jsx)(ke,{children:null==a?void 0:a.name}),(0,n.jsx)(Pe,{children:null==a?void 0:a.publisher})]}),(0,n.jsx)(Oe,{children:o.map((e=>(0,n.jsx)(Se,Object.assign({img:e.cover,focus:s},{children:e.name}),e.name)))})]})]}),(0,n.jsx)(fe,{buttons:[{type:"rounded",content:"A",label:"Details"},{type:"rounded",content:"Y",label:"Add Game"},{type:"rounded",content:"V",label:"Grid View"}]})]})},Ze=a.ZP.div((()=>a.iv`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  `)),Be=()=>(0,n.jsx)(Ze,{children:(0,n.jsx)(Ae,{})}),Ce=a.ZP.div((({theme:e})=>a.iv`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.size(2)};
    width: 100%;
  `)),Ee=a.ZP.div((({theme:e,bg:t,selected:i})=>a.iv`
    width: ${e.size(16)};
    height: ${e.size(16)};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.medium};
    background: ${t};
    ${i&&` border: 2px solid ${e.colors.white};`}
  `)),Le=Object.keys(G),De=e=>{const{active:t,value:i,onChange:s}=e,r=Q(),{option:o,setUI:a}=be();return(0,h.useEffect)((()=>{t&&(r("ArrowLeft",(()=>a("option",o-1))),r("ArrowRight",(()=>o<11&&a("option",o+1))),r("ButtonA",(()=>s(Le[o]))))}),[r]),(0,n.jsx)(Ce,{children:Object.values(G).map(((e,t)=>(0,n.jsx)(Ee,{selected:o===t,bg:e},e)))})},Re=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
  `)),Ie=a.ZP.div((({theme:e})=>a.iv`
    padding: ${e.size(1)} 0;
    font-size: ${e.fontSize.small};
  `)),Ue=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
  `)),We=a.ZP.div((({theme:e,active:t})=>a.iv`
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${e.size(.5)} 0;
    opacity: ${t?1:.6};
  `)),Fe=a.ZP.div((({theme:e})=>a.iv`
    margin-left: ${e.size(2)};
  `)),_e=e=>{const{active:t,onChange:i}=e,s=Q(),{focus:r,setUI:o}=be(),[a,d]=(0,h.useState)("/"),[c,l]=(0,h.useState)([]);(0,h.useEffect)((()=>{t&&(s("ArrowUp",(()=>o("focus",r-1))),s("ArrowDown",(()=>o("focus",r+1))),s("ArrowRight",(()=>{d(ve.resolvePath(a+"/"+c[r])),o("focus",0)})),s("ArrowLeft",(()=>{d(ve.resolvePath(a+"/..")),o("focus",0)})),s("ButtonA",(()=>i(a+"/"+c[r]))))}),[s]),(0,h.useEffect)((()=>{const e=ve.resolvePath(a),t=ve.listDir(e);l(t)}),[a]);const u=(0,h.useMemo)((()=>c.map(((e,t)=>{const{isFile:i,isExe:s}=(e=>({isFile:e.includes("."),isExe:e.includes(".exe")}))(e);return(0,n.jsxs)(We,Object.assign({active:r===t},{children:[(0,n.jsx)(X,{type:i?"file":"folder"}),(0,n.jsx)(Fe,{children:e})]}),e+t)}))),[c,r]);return(0,n.jsxs)(Re,{children:[(0,n.jsx)(Ie,{children:a}),(0,n.jsx)(Ue,{children:u})]})};var Ge=function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{d(n.next(e))}catch(e){r(e)}}function a(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}d((n=n.apply(e,t||[])).next())}))};const Me=e=>Ge(void 0,void 0,void 0,(function*(){const t=e.split(" ").join("+");return(yield ve.fetchHTML(`http://www.bing.com/images/search?q=${t}`)).replace(/&quot;/g,'"').match(/"murl":".*?"/gm).join(",").match(/"https:\/\/.*?"/gm).map((e=>e.replace(/\"/g,"")))})),Te=a.ZP.div((({theme:e})=>a.iv`
    width: ${e.size(200)};
    max-width: ${e.size(200)};
    height: ${e.size(100)};
    max-height: ${e.size(100)};
    overflow: hidden;
    display: flex;
    justify-content: center;
  `)),Ne=a.ZP.img((({theme:e})=>a.iv`
    max-width: 100%;
    max-height: 100%;
    border-radius: ${e.radius.large};
    box-shadow: ${e.shadow.high};
  `));const Ye=e=>{const{active:t,value:i,onChange:s}=e,r=Q(),{option:o,setUI:a}=be(),[d,c]=(0,h.useState)(""),[l,u]=(0,h.useState)([]);return(0,h.useEffect)((()=>{t&&(r("ArrowLeft",(()=>a("option",o-1))),r("ArrowRight",(()=>{o<l.length&&a("option",o+1)})))}),[r]),(0,h.useEffect)((()=>{var e,n,s,r;t&&i.length>=3&&i!==d&&(e=void 0,n=void 0,s=void 0,r=function*(){const e=yield(t=i,Ge(void 0,void 0,void 0,(function*(){const e=`${t.toLowerCase()}`;return yield Me(e)})));var t;u(e),c(i)},new(s||(s=Promise))((function(t,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var i;e.done?t(e.value):(i=e.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,a)}d((r=r.apply(e,n||[])).next())}))).catch(console.error)}),[t,i]),(0,h.useEffect)((()=>{s&&s(l[o])}),[o,l.length]),(0,n.jsx)(Te,{children:(0,n.jsx)(Ne,{src:l[o]})})},Xe=a.ZP.input((({theme:e})=>a.iv`
    width: 100%;
    padding: ${e.size(2)} ${e.size(1)};
    border: none;
    background-color: transparent;
    color: ${e.colors.text1};
    font-size: ${e.fontSize.h3};
    border-bottom: 2px solid ${e.colors.gray};
    text-transform: capitalize;
  `)),Je=e=>{const{value:t,onChange:i}=e;return(0,n.jsx)(Xe,{autoFocus:!0,value:t,onChange:e=>i(e.target.value)})},qe=(a.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,a.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),Ve=(a.F4`
   from {opacity: 0}
   to {opacity: 1}
`,qe),He=a.ZP.div((()=>a.iv``)),Ke=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(300)};
    max-width: ${e.size(250)};
    margin: 0 auto;
    padding: ${e.size(4)};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${e.radius.large};
    animation: ${Ve} 0.3s ease-out;
  `)),Qe=a.ZP.div((()=>a.iv`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(25px);
    transition: all 0.1s;
  `)),et=a.ZP.h3((({theme:e})=>a.iv`
    font-size: ${e.fontSize.h3};
    font-weight: bold;
  `)),tt=e=>{const{type:t,active:i,title:s}=e;return(0,n.jsx)(ue,Object.assign({check:i},{children:(0,n.jsx)(He,{children:(0,n.jsx)(Qe,{children:(0,n.jsxs)(Ke,{children:[(0,n.jsx)(et,{children:s}),(0,n.jsx)(ue,{check:"text"===t,true:(0,n.jsx)(Je,Object.assign({},e))}),(0,n.jsx)(ue,{check:"img"===t,true:(0,n.jsx)(Ye,Object.assign({},e))}),(0,n.jsx)(ue,{check:"file"===t,true:(0,n.jsx)(_e,Object.assign({},e))}),(0,n.jsx)(ue,{check:"color"===t,true:(0,n.jsx)(De,Object.assign({},e))})]})})})}))},it=a.ZP.div((({theme:e,active:t})=>a.iv`
    width: 75%;
    margin: 0 auto;
    padding: ${e.size(4)};
    margin-bottom: ${e.size(4)};
    color: ${e.colors.text3};
    background-color: ${e.colors.bg4};
    border-radius: ${e.radius.medium};
    transition: 0.5s;

    ${t&&a.iv`
      background-color: ${e.colors.bg2};
      color: ${e.colors.text1};
      ${ot} {
        max-height: ${e.size(120)};
      }
    `}
  `)),nt=a.ZP.div((({theme:e})=>a.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
  `)),st=a.ZP.div((({theme:e})=>a.iv`
    font-size: ${e.fontSize.h4};
    font-weight: bold;
  `)),rt=a.ZP.div((()=>a.iv`
    transition: 0.3s;
    width: 100%;
  `)),ot=a.ZP.div((()=>a.iv`
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s;
  `)),at=e=>{const{active:t,title:i,value:s,children:r}=e;return(0,n.jsxs)(it,Object.assign({active:t},{children:[(0,n.jsxs)(nt,{children:[(0,n.jsx)(st,{children:i}),(0,n.jsx)(rt,{children:null==s?void 0:s.substring(0,60)}),(0,n.jsx)(X,{type:"edit",size:6})]}),(0,n.jsx)(ot,{children:r})]}))},dt=a.ZP.div((()=>a.iv`
    width: 100%;
    height: 100%;
  `)),ct=a.ZP.h2((({theme:e})=>a.iv`
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: ${e.fontSize.h2};
    padding-bottom: ${e.size(2)};
    margin-bottom: ${e.size(8)};
    font-weight: bold;
    border-bottom: 3px solid ${e.colors.bg1};
  `)),lt={name:"",description:"",cover:"",background:"",publisher:"",rate:"80",addedAt:"",year:"2023",hidden:!1,gamePath:"",gameFile:""},ht=()=>{const e=Q(),{active:t,focus:i,setUI:s}=be(),[r,o]=(0,h.useState)(lt);return(0,h.useEffect)((()=>{e("ArrowUp",(()=>s("focus",i-1))),e("ArrowDown",(()=>s("focus",i+1))),e("ButtonA",(()=>s("active",!t))),e("ButtonX",(()=>x.games.create({gameInfo:r})))}),[e]),(0,n.jsxs)(dt,{children:[(0,n.jsx)(ct,{children:"Add New Game"}),(0,n.jsx)(at,Object.assign({active:0===i,title:"Title",value:r.name},{children:(0,n.jsx)(tt,{title:"Game Title",type:"text",active:0===i&&t,value:r.name,onChange:e=>o(Object.assign(Object.assign({},r),{name:e}))})})),(0,n.jsx)(at,Object.assign({active:1===i,title:"Publisher",value:r.publisher},{children:(0,n.jsx)(tt,{title:"Game Publisher",type:"text",active:1===i&&t,value:r.publisher,onChange:e=>o(Object.assign(Object.assign({},r),{publisher:e}))})})),(0,n.jsx)(at,Object.assign({active:2===i,title:"Cover",value:r.cover},{children:(0,n.jsx)(tt,{title:"Game Cover",type:"img",active:2===i&&t,value:r.name+" cover",onChange:e=>o(Object.assign(Object.assign({},r),{cover:e}))})})),(0,n.jsx)(at,Object.assign({active:3===i,title:"Background",value:r.background},{children:(0,n.jsx)(tt,{title:"Game Background",type:"img",active:3===i&&t,value:r.name+" background",onChange:e=>o(Object.assign(Object.assign({},r),{background:e}))})})),(0,n.jsx)(at,Object.assign({active:4===i,title:"Location",value:r.gamePath+r.gameFile},{children:(0,n.jsx)(tt,{title:"Game Path",type:"file",active:4===i&&t,value:r.gamePath,onChange:e=>o(Object.assign(Object.assign({},r),{gameFile:e}))})})),(0,n.jsx)(fe,{buttons:[{type:"rounded",content:"A",label:"Edit"},{type:"rounded",content:"X",label:"Save"}]})]})},ut=()=>{const[e,t]=y(),i=Q();return(0,h.useEffect)((()=>{i("ButtonY",(()=>{if("games/add"===e)return t("games/list/bar");t("games/add")}))}),[i]),(0,n.jsxs)(le,{children:[(0,n.jsx)(ue,{check:"games/list/bar"===e,true:(0,n.jsx)(Be,{})}),(0,n.jsx)(ue,{check:"games/list/grid"===e,true:(0,n.jsx)(Be,{})}),(0,n.jsx)(ue,{check:"games/add"===e,true:(0,n.jsx)(ht,{})})]})},gt=()=>{const e=Q(),[t,i]=(0,h.useState)(0);return(0,h.useEffect)((()=>{e("ArrowUp",(()=>t>0&&i(t-1))),e("ArrowDown",(()=>t<1&&i(t+1)))}),[e]),(0,n.jsx)(le,{children:(0,n.jsx)(at,Object.assign({active:0===t,title:"Start up time",value:""},{children:(0,n.jsx)("div",{children:"Settings"})}))})},xt=()=>{const e=Q(),{active:t,focus:i,setUI:s}=be(),[r,o]=(0,h.useState)({});return(0,h.useEffect)((()=>{e("ArrowUp",(()=>s("focus",i-1))),e("ArrowDown",(()=>s("focus",i+1))),e("ButtonA",(()=>s("active",!t))),e("ButtonX",(()=>{}))}),[e]),(0,n.jsxs)(dt,{children:[(0,n.jsx)(ct,{children:"Theme Settings"}),(0,n.jsx)(at,Object.assign({active:0===i,title:"Title",value:""},{children:(0,n.jsx)(tt,{title:"Game Title",type:"color",active:0===i&&t,value:"",onChange:e=>o(Object.assign(Object.assign({},r),{name:e}))})}))]})},mt=()=>(0,n.jsx)(le,{children:(0,n.jsx)(xt,{})}),pt=()=>{const[e]=y(),[t]=v();return(0,n.jsxs)(a.f6,Object.assign({theme:_},{children:[(0,n.jsx)(z,{}),(0,n.jsx)(ae,{}),(0,n.jsxs)(o.Z5,Object.assign({location:{pathname:"/"+e,hash:"",search:""}},{children:[(0,n.jsx)(o.AW,{path:"games/list/bar",element:(0,n.jsx)(ut,{})}),(0,n.jsx)(o.AW,{path:"games/list/grid",element:(0,n.jsx)(ut,{})}),(0,n.jsx)(o.AW,{path:"games/add",element:(0,n.jsx)(ut,{})}),(0,n.jsx)(o.AW,{path:"apps",element:(0,n.jsx)(ut,{})}),(0,n.jsx)(o.AW,{path:"music",element:(0,n.jsx)(ut,{})}),(0,n.jsx)(o.AW,{path:"midia",element:(0,n.jsx)(ut,{})}),(0,n.jsx)(o.AW,{path:"web",element:(0,n.jsx)(ut,{})}),(0,n.jsx)(o.AW,{path:"theme",element:(0,n.jsx)(mt,{})}),(0,n.jsx)(o.AW,{path:"controls",element:(0,n.jsx)(he,{})}),(0,n.jsx)(o.AW,{path:"settings",element:(0,n.jsx)(gt,{})})]})),(0,n.jsx)(l,{gradient:G[t.gradientBg],img:t.imgBg,zIndex:-2,blur:!e.includes("games/list")})]}))};(0,s.s)(document.getElementById("root")).render((0,n.jsx)((()=>(0,n.jsx)(b,{children:(0,n.jsx)($,{children:(0,n.jsx)(r.VK,{children:(0,n.jsx)(K,{children:(0,n.jsx)(pt,{})})})})})),{}))}},s={};function r(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=(t,i,n,s)=>{if(!i){var o=1/0;for(l=0;l<e.length;l++){for(var[i,n,s]=e[l],a=!0,d=0;d<i.length;d++)(!1&s||o>=s)&&Object.keys(r.O).every((e=>r.O[e](i[d])))?i.splice(d--,1):(a=!1,s<o&&(o=s));if(a){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[i,n,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var s=Object.create(null);r.r(s);var o={};t=t||[null,i({}),i([]),i(i)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,r.d(s,o),s},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var n,s,[o,a,d]=i,c=0;if(o.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(d)var l=d(r)}for(t&&t(i);c<o.length;c++)s=o[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},i=self.webpackChunkapp_desktop=self.webpackChunkapp_desktop||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),r.nc=void 0;var o=r.O(void 0,[431],(()=>r(85)));o=r.O(o)})();