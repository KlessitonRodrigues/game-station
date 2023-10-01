(()=>{var e,t,i,n={365:(e,t,i)=>{"use strict";var n=i(893),s=i(745),o=i(655),a=i(250);const r=e=>e.check?e.true||e.children:e.false;var c=i(86);const l=c.ZP.div((e=>c.iv`
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      background-image: ${e.gradient};
      background-size: 400% 400%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    `)),h=c.ZP.img((e=>c.iv`
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-size: cover;
      filter: brightness(0.5) blur(${e.blur?"60px":"0"});
    `)),d=e=>{const{img:t,gradient:i,blurBg:s}=e;return(0,n.jsx)(l,Object.assign({gradient:t?"":i},{children:(0,n.jsx)(r,Object.assign({check:!!t},{children:(0,n.jsx)(h,{src:t,blur:s})}))}))};var f=i(294);const g={axis0Pos:"LeftStickRight",axis0Neg:"LeftStickLeft",axis1Pos:"LeftStickDown",axis1Neg:"LeftStickUp",axis2Pos:"RightStickRight",axis2Neg:"RightStickLeft",axis3Pos:"RightStickDown",axis3Neg:"RightStickUp",button0:"ButtonA",button1:"ButtonB",button2:"ButtonX",button3:"ButtonY",button4:"ButtonLeft",button5:"ButtonRight",button6:"TriggerLeft",button7:"TriggerRight",button8:"ButtonSelect",button9:"ButtonStart",button10:"LeftStick",button11:"RightStick",button12:"ArrowUp",button13:"ArrowDown",button14:"ArrowLeft",button15:"ArrowRight",button16:"ButtonHome"},m=[],x=e=>{console.log("Disconnected",e.gamepad.id),m.forEach((e=>clearInterval(e)))},p=(0,f.createContext)((()=>{})),u=e=>{const[t,i]=(0,f.useState)([]),s=(0,f.useCallback)(((e,i)=>t.includes(e)&&i&&i()),[t]);return(0,f.useEffect)((()=>{window.addEventListener("gamepadconnected",(e=>((e,t)=>{console.log("Connected",e.gamepad.id),m.push(((e,t)=>{const i={time:0,buttons:[""]};return setInterval((()=>{const{timestamp:n,axes:s,buttons:o}=navigator.getGamepads()[e],a=[];if(n===i.time)return i.time=n;i.time=n,s.forEach(((e,t)=>{if(1!==e&&-1!==e)return!1;const i=`axis${t}${e>0?"Pos":"Neg"}`;g[i]&&a.push(g[i])})),o.forEach(((e,t)=>{if(0===e.value)return!1;const i=`button${t}`;g[i]&&a.push(g[i])})),a.toString()!==i.buttons.toString()&&(i.buttons=a,a.length&&t&&t(a))}),33)})(e.gamepad.index,t))})(e,i))),window.addEventListener("gamepaddisconnected",x)}),[]),(0,n.jsx)(p.Provider,Object.assign({value:s},{children:e.children}))},j=()=>(0,f.useContext)(p);var y=i(640);const b="games_db",v=i.n(y)()({readDB:()=>JSON.parse(window.localStorage.getItem(b)||"{}"),saveDB:e=>(e.updatedAt=(new Date).toISOString(),window.localStorage.setItem(b,JSON.stringify(e)),e)});var w;v.data.testData();const k={gradientBg:null===(w=v.settings.read())||void 0===w?void 0:w.bgOption,imgBg:""},z=(0,f.createContext)([k,()=>{}]),O=e=>(0,n.jsx)(z.Provider,Object.assign({value:(0,f.useState)(k)},{children:e.children})),S=()=>(0,f.useContext)(z),$="games/list/bar",W=(0,f.createContext)([$,()=>{}]),P=e=>(0,n.jsx)(W.Provider,Object.assign({value:(0,f.useState)($)},{children:e.children})),I=()=>(0,f.useContext)(W),M=(0,c.vJ)((({theme:e})=>c.iv`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      user-select: none;
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
      width: 0;
      height: 0;
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
  `)),A="#880e4f",C="#c51162",F="#8e24aa",Z="#aa00ff",N="#6200ea",B="#0091ea",L="#00b8d4",U="#7cb342",E="#64dd17",D="#e0e0e0",G="#bdbdbd",R="#9e9e9e",T="#757575",_="#616161",H="#424242",X="#141414",Y={size:e=>.2*e+"rem",colors:{main:"#039be5",mainBg:"#0C66E4",bg1:D+"55",bg2:D+"33",bg3:D+"22",bg4:D+"11",text1:"#fafafa",text2:"#eeeeee",text3:D,text4:G,gray:G,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:U,white:D,black:X},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.8rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.3rem",small:"0.4rem",medium:"0.5rem",large:"0.75rem",veryLarge:"1rem",full:"50%"},devices:{mobileS:"(max-width: 320px)",mobileM:"(max-width: 425px)",mobileL:"(max-width: 480px)",tablet:"(max-width: 768px)",laptopS:"(max-width: 900px)",laptopM:"(max-width: 1024px)",laptopL:"(max-width: 1280px)",desktopS:"(max-width: 1440px)",desktopM:"(max-width: 1980px)",desktopL:"(max-width: 2560px)"}},q=(Object.assign(Object.assign({},Y),{colors:Object.assign(Object.assign({},Y.colors),{bg1:X,bg2:H+"44",bg3:_+"44",bg4:T+"44",text1:D,text2:G,text3:R,text4:_,gray:T,white:D})}),{indigo:`linear-gradient(150deg, #2962ff, ${X} 80%)`,blue:`linear-gradient(150deg, ${B}, ${X} 80%)`,green:`linear-gradient(150deg, ${E}, ${X} 80%)`,deepPurple:`linear-gradient(150deg, ${N}, ${X} 80%)`,purple:`linear-gradient(150deg, ${Z}, ${X} 80%)`,pink:`linear-gradient(150deg, ${C}, ${X} 80%)`,red:`linear-gradient(150deg, #d32f2f, ${X} 80%)`,blueAndPurple:`linear-gradient(150deg, ${L}, ${F} 70%)`,blueAndPink:`linear-gradient(150deg, ${L}, ${C} 80%)`,greenAndPink:`linear-gradient(150deg, ${E}, ${A} 80%)`,blueAndBrown:`linear-gradient(150deg, ${B}, #5d4037 75%)`,purpleAndGreen:`linear-gradient(150deg, ${N}, ${U} 80%)`});var J=i(155),K=i(352);const V={games:(0,n.jsx)(J.uWr,{}),apps:(0,n.jsx)(K.v$D,{}),music:(0,n.jsx)(K.JUP,{}),midia:(0,n.jsx)(K.SD9,{}),web:(0,n.jsx)(K.lct,{}),news:(0,n.jsx)(K.lBz,{}),theme:(0,n.jsx)(K.zCJ,{}),settings:(0,n.jsx)(K.NY,{}),user:(0,n.jsx)(K.sFD,{}),battery:(0,n.jsx)(K.e8c,{}),gamepad:(0,n.jsx)(J.uWr,{}),search:(0,n.jsx)(K.Qcu,{}),folder:(0,n.jsx)(K.G2V,{}),file:(0,n.jsx)(K.UfY,{}),image:(0,n.jsx)(K.RXd,{}),usb:(0,n.jsx)(K.rAw,{}),controls:(0,n.jsx)(K.KzI,{}),edit:(0,n.jsx)(K.ISo,{}),spinner:(0,n.jsx)(K.H4p,{}),"arrow-left":(0,n.jsx)(K.jW7,{}),"arrow-right":(0,n.jsx)(K.jfD,{})},Q=c.ZP.span((e=>c.iv`
      display: inline-flex;
      font-size: ${e.theme.size(e.size||8)};
    `)),ee=e=>{const{type:t,size:i,style:s}=e;return(0,n.jsx)(Q,Object.assign({size:i,style:s},{children:V[t]}))},te=()=>{const[e,t]=(0,f.useState)(!1),[i,n]=(0,f.useState)(0),[s,o]=(0,f.useState)(0),[a,r]=(0,f.useState)(!1);return{focus:i,active:e,option:s,loading:a,setUI:(0,f.useCallback)(((i,s)=>{"active"===i&&"boolean"==typeof s&&t(s),"focus"===i&&"number"==typeof s&&!e&&s>=0&&n(s),"option"===i&&"number"==typeof s&&s>=0&&o(s),"loading"===i&&"boolean"==typeof s&&r(s)}),[e,i,s,a])}},ie=[{name:"games",route:"games/list/bar"},{name:"apps",route:"apps"},{name:"music",route:"music"},{name:"midia",route:"midia"},{name:"web",route:"web"},{name:"settings",route:"settings"}],ne=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
    max-width: ${e.size(500)};
    display: flex;
    align-items: center;
    padding: ${e.size(4)};
    margin: ${e.size(2)} auto;
  `)),se=c.ZP.div((()=>c.iv`
    display: flex;
    align-items: center;
  `)),oe=c.ZP.div((({theme:e})=>c.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
  `)),ae=c.ZP.div((()=>c.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `)),re=c.ZP.span((({theme:e})=>c.iv`
    padding: 0 ${e.size(2)};
    font-size: ${e.fontSize.h1};
    text-transform: capitalize;
  `)),ce=c.ZP.label((e=>c.iv`
    display: flex;
    position: relative;
    align-items: center;
    color: ${e.theme.colors.text3};
    transition: 0.3s ease-out;
    cursor: pointer;

    :hover {
      color: ${e.theme.colors.text1};
    }

    ${e.selected&&c.iv`
      margin-left: ${e.theme.size(15)};
      margin-right: ${e.theme.size(15)};
    `}

    ${re} {
      width: 0;
      ${!e.selected&&"opacity: 0;"}
      ${e.selected&&`width: ${e.theme.size(25)};`}
    }
  `)),le=()=>{const e=j(),[t,i]=I(),{option:s,setUI:o}=te();return(0,f.useEffect)((()=>{e("ButtonLeft",(()=>o("option",s-1))),e("ButtonRight",(()=>s<ie.length-1&&o("option",s+1)))}),[e]),(0,f.useEffect)((()=>{const e=ie[s].route;i(e)}),[s]),(0,n.jsxs)(ne,{children:[(0,n.jsx)(se,{children:(0,n.jsx)(ee,{type:"user",size:7})}),(0,n.jsx)(ae,{children:ie.map(((e,t)=>(0,n.jsxs)(ce,Object.assign({selected:s===t,onClick:()=>o("option",t)},{children:[(0,n.jsx)(ee,{type:e.name,size:13}),(0,n.jsx)(re,{children:e.name})]}),e.name)))}),(0,n.jsx)(oe,{children:(0,n.jsx)(ee,{type:"gamepad",size:7})})]})},he=c.ZP.div((e=>c.iv`
    width: 100%;
    max-width: ${e.theme.size(500)};
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: ${e.theme.size(20)};
  `)),de=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
  `)),fe=e=>(0,n.jsx)(he,{children:(0,n.jsx)(de,{children:e.children})}),ge=()=>(0,n.jsx)(fe,{}),me=c.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,xe=c.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`,pe=(c.F4`
   from {opacity: 0}
   to {opacity: 1}
`,c.F4`
   to {transform: rotateZ(360deg);}
`),ue=me,je=xe,ye=pe,be=c.ZP.div((()=>c.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000b;
    backdrop-filter: blur(10px);
  `)),ve=c.ZP.div((({theme:e})=>c.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${ye} 1s infinite linear;
  `)),we=c.ZP.p((({theme:e})=>c.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${je} 0.5s ease-out;
  `)),ke=c.ZP.p((({theme:e})=>c.iv`
    color: ${e.colors.text4};
    font-size: ${e.fontSize.verySmall};
    animation: ${je} 0.5s ease-out;
  `)),ze=()=>(0,n.jsxs)(be,{children:[(0,n.jsx)(ve,{children:(0,n.jsx)(ee,{type:"spinner",size:12})}),(0,n.jsx)(we,{children:"Optimizing Images"}),(0,n.jsx)(ke,{children:"Will happening once only"})]}),Oe={method:"GET",mode:"cors",headers:{}};var Se=i(160),$e=i.n(Se),We=function(e,t,i,n){return new(i||(i=Promise))((function(s,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,r)}c((n=n.apply(e,t||[])).next())}))};const Pe=e=>new Promise(((t,i)=>{fetch(e,Oe).then((e=>We(void 0,void 0,void 0,(function*(){const t=yield e.blob(),i=yield(n=t,new Promise(((e,t)=>{new($e())({file:n,quality:.2,mimeType:"image/jpeg",width:1920,height:1080,convertSize:1/0,loose:!0,redressOrientation:!0,success:t=>{const i=(n.size/1024).toFixed(2),s=(t.size/1024).toFixed(2),o=((n.size-t.size)/n.size*100).toFixed(2)+"%";console.log(`Image compressor: ${i} Kb -> ${s} Kb, ratio: ${o}`),e(t)},error:e=>{console.error(e),t(e)}})})));var n;const s=new FileReader;return s.readAsDataURL(i),yield new Promise((e=>s.onload=()=>e(s.result)))})))).then(t).catch(i)})),Ie=e=>We(void 0,void 0,void 0,(function*(){const t="image_cache",i=localStorage.getItem(t)||"[]",n=JSON.parse(i),s=n.find((t=>t.url===e));if(s)return s.data;const o=yield Pe(e);return n.push({url:e,data:o}),localStorage.setItem(t,JSON.stringify(n)),o})),Me=e=>{const{content:t}=e;return(0,n.jsx)("div",Object.assign({style:{display:"block",width:"1.8rem"}},{children:(0,n.jsxs)("svg",Object.assign({width:"100%",height:"100%",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,n.jsx)("circle",{id:"Oval",fill:"none",cx:"31",cy:"31",r:"27.841",style:{strokeWidth:"4px",stroke:"#999"},transform:"matrix(0.910153, 0, 0, 0.89304, 3.448403, 3.713665)"}),(0,n.jsx)("text",Object.assign({style:{fill:"#DDD",fontFamily:"FreeSans",fontSize:"32.4528px",fontWeight:"bold",whiteSpace:"pre"},transform:"matrix(1.478571, 0, 0, 1.232558, -10.114382, -9.312138",x:"19.5",y:"44"},{children:t}))]}))}))},Ae=c.ZP.div((e=>c.iv`
      position: fixed;
      bottom: ${e.theme.size(6)};
      left: 50%;
      display: flex;
      gap: ${e.theme.size(4)};
      translate: -50%;
    `)),Ce=c.ZP.div((e=>c.iv`
      display: flex;
      align-items: center;
      gap: ${e.theme.size(1)};
    `)),Fe=c.ZP.div((e=>c.iv`
      font-size: ${e.theme.fontSize.label};
      padding-bottom: ${e.theme.size(.75)};
      color: ${e.theme.colors.text3};
    `)),Ze=e=>{const{buttons:t}=e,i=(0,f.useMemo)((()=>null==t?void 0:t.map((e=>(0,n.jsxs)(Ce,{children:[(0,n.jsx)(Me,{content:e.content}),(0,n.jsx)(Fe,{children:e.label})]},e.label)))),[]);return(0,n.jsx)(Ae,{children:i})},Ne={GameListBar:[{content:"A",label:"Start"},{content:"X",label:"Grid View"},{content:"Y",label:"Add Game"}],GameListGrid:[{content:"A",label:"Start"},{content:"X",label:"List View"},{content:"Y",label:"Add Game"}],GameDetailsForm:[{content:"A",label:"Edit"},{content:"X",label:"Save"},{content:"Y",label:"Game List"}]},Be=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  `)),Le=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
    display: flex;
    gap: ${e.size(2)};
    height: ${e.size(120)};
    animation: ${je} 0.2s ease-out;
  `)),Ue=c.ZP.img((e=>c.iv`
      display: block;
      height: 100%;
      margin: 0 10px;
      width: ${e.theme.size(90)};
      min-width: ${e.theme.size(90)};
      max-width: ${e.theme.size(90)};
      border-radius: ${e.theme.radius.large};
      box-shadow: ${e.theme.shadow.high};
      border: 2px solid ${e.theme.colors.gray};
    `)),Ee=c.ZP.div((()=>c.iv`
    display: flex;
    flex-direction: column;
  `)),De=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
  `)),Ge=c.ZP.div((({theme:e})=>c.iv`
    color: ${e.colors.text1};
    font-size: ${e.size(14)};
  `)),Re=c.ZP.div((({theme:e})=>c.iv`
    color: ${e.colors.text3};
    font-size: ${e.fontSize.h4};
  `)),Te=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  `)),_e=c.ZP.img((e=>c.iv`
      display: block;
      height: ${e.theme.size(60)};
      width: ${e.theme.size(50)};
      min-width: ${e.theme.size(50)};
      max-width: ${e.theme.size(50)};
      margin-right: ${e.theme.size(4)};
      background-color: transparent;
      border-radius: ${e.theme.radius.large};
      font-size: ${e.theme.size(10)};
      border: 2px solid ${e.theme.colors.bg1};
      transition: 0.3s;
      filter: brightness(0.9);

      &.cove-item:nth-child(-n + ${e.focus+1}) {
        width: 0;
        min-width: 0;
        margin: 0;
        border: none;
        opacity: 0;
        overflow: hidden;
      }
    `)),He=e=>{const{active:t,gameList:i,gameIndex:s,onChangeGame:o,onStartGame:a,onActiveGame:r}=e,c=j(),l=(0,f.useMemo)((()=>i[s]),[s,i]);(0,f.useEffect)((()=>{c("ArrowLeft",(()=>o(s-1))),c("ArrowRight",(()=>o(s+1))),c("ButtonStart",(()=>a(s)))}),[c]);const h=(0,f.useMemo)((()=>i.map((e=>(0,n.jsx)(_e,{className:"cove-item",focus:s,src:e.cover},e.name)))),[i.length,s]);return(0,n.jsxs)(Be,{children:[(0,n.jsxs)(Le,{children:[(0,n.jsx)(Ue,{src:null==l?void 0:l.cover}),(0,n.jsxs)(Ee,{children:[(0,n.jsxs)(De,{children:[(0,n.jsx)(Ge,{children:null==l?void 0:l.name}),(0,n.jsx)(Re,{children:null==l?void 0:l.publisher})]}),(0,n.jsx)(Te,{children:h})]})]}),(0,n.jsx)(Ze,{buttons:Ne.GameListBar})]})},Xe=c.ZP.div((()=>c.iv`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `)),Ye=c.ZP.div((e=>c.iv`
      height: 100%;
      display: grid;
      align-content: flex-start;
      justify-items: center;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: ${e.theme.size(6)};
      scroll-behavior: smooth;
      overflow-y: auto;
    `)),qe=c.ZP.div((e=>c.iv`
    position: relative;
    width: ${e.theme.size(90)};
    height: ${e.theme.size(120)};
    background-color: transparent;
    border-radius: ${e.theme.radius.large};
    font-size: ${e.theme.size(10)};
    transition: opacity 0.2s;
    overflow: hidden;
    border: 2px solid transparent;
    ${e.focus&&`border: 2px solid ${e.theme.colors.gray};`}
  `)),Je=c.ZP.img((()=>c.iv`
    width: 100%;
    height: 100%;
  `)),Ke=c.ZP.div((e=>c.iv`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000a;
    padding: ${e.theme.size(4)};
    transition: 0.3s;
  `)),Ve=c.ZP.div((e=>c.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.theme.size(2)};
  `)),Qe=c.ZP.h3((e=>c.iv`
    color: ${e.theme.colors.text1};
  `)),et=c.ZP.p((e=>c.iv`
    font-size: ${e.theme.fontSize.small};
    color: ${e.theme.colors.text3};
  `)),tt=c.ZP.p((e=>c.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e.theme.size(2)};
    font-size: ${e.theme.fontSize.h3};
    width: 100%;
  `)),it=e=>{const{active:t,gameList:i,gameIndex:s,onChangeGame:o,onActiveGame:a}=e,c=j();(0,f.useEffect)((()=>{const e=(s+1)%4;c("ArrowLeft",(()=>1!==e&&o(s-1))),c("ArrowRight",(()=>0!==e&&o(s+1))),c("ArrowUp",(()=>o(s-4))),c("ArrowDown",(()=>o(s+4))),c("ButtonA",(()=>a(s)))}),[c]);const l=(0,f.useMemo)((()=>(e=>{const{active:t,gameList:i,gameIndex:s,onChangeGame:o,onActiveGame:a}=e;return i.map(((e,i)=>(0,n.jsxs)(qe,Object.assign({focus:s===i,onClick:()=>i===s?a(i):o(i),ref:e=>e&&s===i&&e.scrollIntoView({block:"center"})},{children:[(0,n.jsx)(Je,{src:e.cover}),(0,n.jsx)(r,Object.assign({check:t&&s===i},{children:(0,n.jsxs)(Ke,{children:[(0,n.jsxs)(Ve,{children:[(0,n.jsx)(Qe,{children:e.name}),(0,n.jsx)(et,{children:e.publisher})]}),(0,n.jsx)(tt,{children:"Start"})]})}))]}),e.name)))})(e)),[t,s,i]);return(0,n.jsxs)(Xe,{children:[(0,n.jsx)(Ye,{children:l}),(0,n.jsx)(Ze,{buttons:Ne.GameListGrid})]})},nt=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
  `)),st=e=>{const{mode:t}=e,{focus:i,active:s,loading:o,setUI:a}=te(),[c,l]=S(),[h,d]=(0,f.useState)([]);return(0,f.useEffect)((()=>{const e=v.games.read();a("loading",!0),(e=>We(void 0,void 0,void 0,(function*(){for(const t of e)try{t.background=yield Ie(t.background),t.cover=yield Ie(t.cover)}catch(e){console.error(e);continue}return e})))(e).then(d).finally((()=>a("loading",!1)))}),[]),(0,f.useEffect)((()=>{var e;const t=null===(e=h[i])||void 0===e?void 0:e.background;l(Object.assign(Object.assign({},c),{imgBg:t}))}),[i,h]),(0,n.jsxs)(nt,{children:[(0,n.jsx)(r,Object.assign({check:"list"===t},{children:(0,n.jsx)(He,{active:s,gameList:h,gameIndex:i,onChangeGame:e=>e<h.length&&a("focus",e),onActiveGame:()=>a("active",!s),onStartGame:()=>{}})})),(0,n.jsx)(r,Object.assign({check:"grid"===t},{children:(0,n.jsx)(it,{active:s,gameList:h,gameIndex:i,onChangeGame:e=>e<h.length&&a("focus",e),onActiveGame:()=>a("active",!s),onStartGame:()=>{}})})),o&&(0,n.jsx)(ze,{})]})},ot=c.ZP.div((e=>c.iv`
      width: 75%;
      margin: 0 auto;
      padding: ${e.theme.size(4)};
      margin-bottom: ${e.theme.size(4)};
      color: ${e.theme.colors.text3};
      background-color: ${e.theme.colors.bg4};
      border-radius: ${e.theme.radius.medium};
      transition: 0.3s;

      ${e.focus&&c.iv`
        background-color: ${e.theme.colors.bg2};
        color: ${e.theme.colors.text1};
      `}

      ${e.active&&c.iv`
        background-color: ${e.theme.colors.bg2};
        color: ${e.theme.colors.text1};
        ${ct} {
          opacity: 0;
        }
        ${lt} {
          max-height: ${e.theme.size(120)};
        }
      `}
    `)),at=c.ZP.div((e=>c.iv`
      display: flex;
      align-items: center;
      gap: ${e.theme.size(4)};
    `)),rt=c.ZP.div((e=>c.iv`
      font-size: ${e.theme.fontSize.h4};
      font-weight: bold;
    `)),ct=c.ZP.div((()=>c.iv`
    transition: 0.3s;
    width: 100%;
  `)),lt=c.ZP.div((()=>c.iv`
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s;
  `)),ht=e=>{const{focus:t,active:i,title:s,value:o,children:a}=e;return(0,n.jsxs)(ot,Object.assign({active:i,focus:t},{children:[(0,n.jsxs)(at,{children:[(0,n.jsx)(rt,{children:s}),(0,n.jsx)(ct,{children:null==o?void 0:o.substring(0,60)})]}),(0,n.jsx)(lt,{children:a})]}))},dt=c.ZP.div((({theme:e})=>c.iv`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.size(2)};
    width: 100%;
  `)),ft=c.ZP.div((({theme:e,bg:t,selected:i})=>c.iv`
    width: ${e.size(16)};
    height: ${e.size(16)};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.medium};
    background: ${t};
    ${i&&` border: 2px solid ${e.colors.white};`}
  `)),gt=Object.keys(q),mt=e=>{const{active:t,value:i,onChange:s}=e,o=j(),{option:a,setUI:r}=te();return(0,f.useEffect)((()=>{t&&(o("ArrowLeft",(()=>r("option",a-1))),o("ArrowRight",(()=>a<11&&r("option",a+1))),o("ButtonA",(()=>s(gt[a]))))}),[o]),(0,n.jsx)(dt,{children:Object.values(q).map(((e,t)=>(0,n.jsx)(ft,{selected:a===t,bg:e},e)))})},xt=(()=>{const e=window.require;return window.require=null,{isActive:!!e,resolvePath:t=>{try{return e("path").resolve(t)}catch(e){return console.error(e),""}},fetchHTML:t=>new Promise(((i,n)=>{try{e("http").get(t,(e=>{let t="";e.on("data",(e=>t+=e)),e.on("end",(()=>i(t)))}))}catch(e){n(e)}})),exec:t=>{try{return e("child_process").execSync(t).toString()}catch(e){return console.log(e),""}},listDir:t=>{try{const i=e("fs"),n=e("path");return i.readdirSync(n.resolve(t)).filter((e=>!e.startsWith(".")))}catch(e){return console.error(e),[]}}}})(),pt=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
  `)),ut=c.ZP.div((({theme:e})=>c.iv`
    padding: ${e.size(1)} 0;
    font-size: ${e.fontSize.small};
  `)),jt=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
  `)),yt=c.ZP.div((({theme:e,active:t})=>c.iv`
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${e.size(.5)} 0;
    opacity: ${t?1:.6};
  `)),bt=c.ZP.div((({theme:e})=>c.iv`
    margin-left: ${e.size(2)};
  `)),vt=e=>{const{active:t,onChange:i}=e,s=j(),{focus:o,setUI:a}=te(),[r,c]=(0,f.useState)("/"),[l,h]=(0,f.useState)([]);(0,f.useEffect)((()=>{t&&(s("ArrowUp",(()=>a("focus",o-1))),s("ArrowDown",(()=>a("focus",o+1))),s("ArrowRight",(()=>{c(xt.resolvePath(r+"/"+l[o])),a("focus",0)})),s("ArrowLeft",(()=>{c(xt.resolvePath(r+"/..")),a("focus",0)})),s("ButtonA",(()=>i(r+"/"+l[o]))))}),[s]),(0,f.useEffect)((()=>{const e=xt.resolvePath(r),t=xt.listDir(e);h(t)}),[r]);const d=(0,f.useMemo)((()=>l.map(((e,t)=>{const{isFile:i,isExe:s}=(e=>({isFile:e.includes("."),isExe:e.includes(".exe")}))(e);return(0,n.jsxs)(yt,Object.assign({active:o===t},{children:[(0,n.jsx)(ee,{type:i?"file":"folder"}),(0,n.jsx)(bt,{children:e})]}),e+t)}))),[l,o]);return(0,n.jsxs)(pt,{children:[(0,n.jsx)(ut,{children:r}),(0,n.jsx)(jt,{children:d})]})};var wt=function(e,t,i,n){return new(i||(i=Promise))((function(s,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,r)}c((n=n.apply(e,t||[])).next())}))};const kt=e=>wt(void 0,void 0,void 0,(function*(){const t=e.split(" ").join("+");return(yield xt.fetchHTML(`http://www.bing.com/images/search?q=${t}`)).replace(/&quot;/g,'"').match(/"murl":".*?"/gm).join(",").match(/"https:\/\/.*?"/gm).map((e=>e.replace(/\"/g,"")))})),zt=c.ZP.div((({theme:e})=>c.iv`
    width: ${e.size(200)};
    max-width: ${e.size(200)};
    height: ${e.size(100)};
    max-height: ${e.size(100)};
    overflow: hidden;
    display: flex;
    justify-content: center;
  `)),Ot=c.ZP.img((({theme:e})=>c.iv`
    max-width: 100%;
    max-height: 100%;
    border-radius: ${e.radius.large};
    box-shadow: ${e.shadow.high};
  `));const St=e=>{const{active:t,value:i,onChange:s}=e,o=j(),{option:a,setUI:r}=te(),[c,l]=(0,f.useState)(""),[h,d]=(0,f.useState)([]),[g,m]=(0,f.useState)("");return(0,f.useEffect)((()=>{t&&(o("ArrowLeft",(()=>r("option",a-1))),o("ArrowRight",(()=>{a<h.length&&r("option",a+1)})))}),[o]),(0,f.useEffect)((()=>{var e,n,s,o;t&&i.length>=3&&i!==c&&(e=void 0,n=void 0,s=void 0,o=function*(){const e=yield(t=i,wt(void 0,void 0,void 0,(function*(){const e=`${t.toLowerCase()}`;return yield kt(e)})));var t;d(e),l(i)},new(s||(s=Promise))((function(t,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function r(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof s?i:new s((function(e){e(i)}))).then(a,r)}c((o=o.apply(e,n||[])).next())}))).catch(console.error)}),[t,i]),(0,f.useEffect)((()=>{s&&s(h[a]),Pe(h[a]).then(m)}),[a,h.length]),(0,n.jsx)(zt,{children:(0,n.jsx)(Ot,{src:g})})},$t=()=>{const e="#999",t="#fff";return(0,n.jsxs)("svg",Object.assign({id:"keyboard-svg",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",x:"0",y:"0",version:"1.1",viewBox:"0 0 646 266"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M549.776 10.265c23.412-.001 46.285-.019 69.158.008 8.147.01 10.876 2.988 10.912 11.79.03 7.36.042 14.72-.002 22.08-.053 8.415-2.885 11.567-10.555 11.581-23.07.04-46.14.045-69.211-.005-7.138-.015-10.15-3.171-10.227-10.605-.08-7.99-.067-15.982-.003-23.972.057-7.381 2.356-9.977 9.928-10.877zM564.485 94.538c0-7.936-.08-15.295.024-22.652.107-7.613 3.04-10.94 9.839-10.98a3814.14 3814.14 0 0146.009.002c6.507.039 9.311 2.993 9.416 9.871.131 8.617.138 17.24-.008 25.857-.11 6.543-2.948 9.63-9.018 9.675-15.529.116-31.061.114-46.59.005-6.639-.047-9.044-3.018-9.672-11.778zM614.541 212.454c2.895.004 5.234-.138 7.551.041 4.774.367 7.562 3.245 7.654 8.426.169 9.453.167 18.914.006 28.368-.094 5.499-3.015 8.553-8.085 8.601-12.418.116-24.839.127-37.257-.004-5.279-.056-8.157-3.29-8.233-9.076-.118-9.035-.116-18.073-.002-27.108.077-6.094 2.974-9.157 8.693-9.218 9.701-.103 19.404-.029 29.673-.03zM35.875 257.947c-6.096-.659-8.749-4.112-8.751-10.097-.002-8.411-.082-16.823.026-25.232.086-6.742 3.114-10.048 9.336-10.104 11.649-.105 23.3-.106 34.949 0 6.183.056 9.231 3.404 9.316 10.135.107 8.409.113 16.822-.002 25.231-.091 6.675-3.176 9.99-9.406 10.046-11.649.103-23.3.029-35.468.021z",opacity:"1"}),(0,n.jsxs)("g",Object.assign({className:"key-item key-esc"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M53.86 55.863c-6.008-.001-11.453.088-16.894-.025-6.571-.136-9.725-3.478-9.787-10.368-.075-8.42-.101-16.844.011-25.263.084-6.282 3.242-9.699 9.049-9.786 7.969-.12 15.942-.118 23.911.001 5.377.08 8.787 3.501 8.933 9.336.22 8.836.203 17.687.009 26.524-.129 5.903-3.37 9.194-8.837 9.552-1.937.126-3.887.026-6.395.029z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"36.024",y:"39.041",fill:t,fontFamily:"Inter",fontSize:"14",fontWeight:"500"},{children:"Esc"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-1"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M73.825 46.405c-.005-8.752-.044-16.936.006-25.12.046-7.529 2.98-10.815 9.766-10.88 7.557-.072 15.114-.079 22.671.003 6.08.067 9.372 3.423 9.5 9.971.163 8.39.139 16.788.01 25.179-.103 6.656-3.241 10.136-9.31 10.263-7.748.161-15.502.147-23.251.002-5.286-.099-8.865-2.659-9.392-9.418z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"89.129",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"1"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-q"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M97.162 96.934c-.004-8.752-.043-16.936.007-25.119.045-7.53 2.979-10.815 9.766-10.881a1112.43 1112.43 0 0122.67.004c6.08.066 9.373 3.423 9.501 9.97.163 8.39.139 16.788.009 25.179-.102 6.656-3.24 10.136-9.31 10.263-7.747.162-15.502.147-23.25.002-5.286-.099-8.865-2.659-9.393-9.418z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500",transform:"translate(2.547 8.395)"},{children:(0,n.jsx)("tspan",Object.assign({x:"106.769",y:"82.527"},{children:"Q"}))}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-6"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M307.704 47.433c-.023-9.369-.094-18.184-.006-26.998.067-6.607 3.215-10.025 9.303-10.104a943.832 943.832 0 0123.255-.003c5.77.066 9.2 3.389 9.346 9.487a565.67 565.67 0 01.002 26.44c-.133 5.862-3.389 9.324-8.843 9.464-7.941.203-15.891.129-23.835.03-4.792-.06-8.102-2.439-9.222-8.316z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"320.994",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"6"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-4"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M255.789 28.171c0 6.088.078 11.563-.021 17.035-.128 7.078-3.19 10.512-9.63 10.624a638.68 638.68 0 01-22.744-.002c-6.421-.116-9.528-3.616-9.582-10.583-.062-8.21-.079-16.421.006-24.631.07-6.694 3.163-10.109 9.264-10.2 7.191-.107 14.385-.041 21.578-.023 8.321.021 11.067 3.022 11.127 12.113.012 1.684.002 3.368.002 5.667z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"226.673",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"4"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-2"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M122.358 52.346c-.844-2.352-1.768-4.309-1.806-6.287-.164-8.604-.152-17.215-.044-25.821.078-6.267 3.232-9.724 8.981-9.815a796.38 796.38 0 0123.845-.005c5.656.079 8.959 3.547 9.086 9.781a640.58 640.58 0 01.002 25.822c-.124 6.221-3.359 9.665-9.15 9.794-7.752.174-15.52.293-23.257-.098-2.481-.126-4.888-1.942-7.657-3.371z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"134.429",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"2"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-3"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M167.888 50.627c-.404-10.935-.768-21.412-.629-31.88.063-4.751 3.026-8.015 7.362-8.203 8.903-.385 17.837-.366 26.743-.033 5.092.191 7.548 4.13 7.688 9.286.24 8.81.208 17.636.02 26.448-.126 5.896-3.342 9.41-8.765 9.552-8.137.212-16.307.44-24.41-.165-2.672-.199-6.628-1.32-8.009-5.005z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"181.234",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"3"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-5"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M266.201 10.754c9.383-.236 18.297-.394 27.21-.328 5.377.04 8.818 3.46 8.964 9.249.227 9.019.267 18.058-.019 27.074-.178 5.634-3.403 8.904-8.616 9.044-8.136.218-16.284.221-24.42.005-5.666-.151-8.772-3.83-8.841-10.04-.088-7.976.172-15.961-.094-23.927-.165-4.958 1.306-8.565 5.816-11.077z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"273.981",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"5"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-7"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M362.592 55.853c-6.526-.992-9.073-4.756-8.874-11.33.241-7.966-.007-15.948.078-23.922.071-6.67 3.161-10.103 9.228-10.185a802.456 802.456 0 0123.835.009c5.335.086 8.699 3.531 8.841 9.387.214 8.808.204 17.631.007 26.439-.137 6.115-3.482 9.461-9.346 9.573-7.749.147-15.502.036-23.769.029z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"368.602",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"7"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-8"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M431.574 10.388c7.876.334 10.758 3.351 10.834 11.043.079 7.971.105 15.946-.01 23.916-.102 6.988-3.239 10.38-9.7 10.485-7.554.123-15.112.133-22.665-.003-6.405-.116-9.528-3.609-9.583-10.524a1414.36 1414.36 0 01.003-24.546c.066-6.999 3.14-10.282 9.661-10.353 6.973-.077 13.948-.018 21.46-.018z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"414.259",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"8"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-w"},{children:[(0,n.jsx)("text",Object.assign({y:"91.629",x:"153.248",style:{whiteSpace:"pre"},fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"W"})),(0,n.jsx)("path",{d:"M 143.816 73.843 C 143.92 63.585 146.349 60.937 155.168 60.92 C 162.141 60.906 169.115 60.864 176.089 60.934 C 182.227 60.996 185.62 64.288 185.757 70.714 C 185.94 79.31 185.928 87.918 185.761 96.515 C 185.64 102.741 182.417 106.214 176.654 106.342 C 168.715 106.519 160.767 106.531 152.829 106.336 C 147.109 106.195 143.926 102.585 143.842 96.459 C 143.741 89.119 143.817 81.775 143.816 73.843 Z",fill:"none",stroke:e,strokeWidth:"2",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-9"},{children:[(0,n.jsx)("path",{d:"M 447.092 30.631 C 447.092 10.387 447.092 10.387 465.195 10.387 C 470.055 10.387 474.915 10.313 479.773 10.409 C 485.513 10.521 488.894 13.877 489.028 20.052 C 489.219 28.888 489.249 37.739 489.009 46.572 C 488.854 52.235 485.731 55.613 480.503 55.78 C 472.346 56.04 464.174 56.008 456.015 55.8 C 450.314 55.655 447.221 51.992 447.112 45.777 C 447.026 40.937 447.093 36.094 447.092 30.631 Z",fill:"none",stroke:e,strokeWidth:"2",opacity:"1"}),(0,n.jsx)("text",Object.assign({y:"41.432",x:"460.856",style:{whiteSpace:"pre"},fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"9"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-0"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M509.048 55.863c-2.701-.006-4.868.23-6.972-.067-5.014-.709-8.284-3.478-8.309-9.41-.036-8.843-.11-17.687.026-26.527.09-5.85 3.343-9.337 8.777-9.43 8.163-.14 16.33-.085 24.495-.018 5.473.045 8.35 3.621 8.566 9.069.359 9.036.272 18.107.036 27.152-.15 5.76-3.56 9.027-9.145 9.19-5.634.166-11.275.04-17.474.041z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"507.609",y:"41.432",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"0"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-enter"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M590.168 111.534c10.301 0 20.02-.068 29.737.024 6.881.066 9.828 3.329 9.903 10.876.079 7.998.095 15.998-.006 23.995-.09 7.153-3.081 10.525-9.62 10.544-27.017.078-54.033.079-81.049-.001-6.545-.019-9.506-3.38-9.597-10.56-.099-7.787-.062-15.576-.014-23.364.051-8.368 2.856-11.476 10.5-11.499 16.521-.049 33.041-.015 50.146-.015z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"564.474",y:"139.078",fill:t,fontFamily:"Inter",fontSize:"14",fontWeight:"500"},{children:"Enter"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-shift-r"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M516.024 162.065c34.491-.001 68.455-.01 102.419.005 8.75.003 11.355 2.871 11.38 12.437.019 7.356.061 14.713-.013 22.068-.078 7.556-3.008 10.92-9.834 10.932-34.74.061-69.481.066-104.221-.006-6.509-.014-9.463-3.404-9.549-10.587-.096-7.985-.082-15.974-.005-23.96.069-7.313 2.308-9.855 9.823-10.889z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"552.346",y:"189.517",fill:t,fontFamily:"Inter",fontSize:"14",fontWeight:"500"},{children:"Shift"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-shift-l"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M27.168 185.964c.001-5.251-.071-9.879.02-14.502.122-6.213 2.882-9.434 8.492-9.449 27.764-.076 55.528-.076 83.293 0 5.591.015 8.418 3.259 8.485 9.457.096 8.829.1 17.662-.001 26.492-.074 6.405-2.987 9.455-9.08 9.466-27.376.049-54.752.052-82.128-.001-6.3-.013-8.984-3.119-9.072-10.115-.045-3.574-.008-7.149-.009-11.348z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"60.433",y:"189.517",fill:t,fontFamily:"Inter",fontSize:"14",fontWeight:"500"},{children:"Shift"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-capslk"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M33.884 111.597c20.503-.105 40.506-.17 60.508-.126 6.628.015 9.655 3.26 9.738 10.324.096 8.2.103 16.405-.002 24.605-.091 7.154-3.094 10.468-9.622 10.493-19.226.074-38.452.074-57.678 0-6.58-.025-9.56-3.31-9.638-10.433-.088-7.991.115-15.987-.07-23.974-.121-5.26 1.593-8.958 6.764-10.889z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"41.626",y:"139.622",fill:t,fontFamily:"Inter",fontSize:"14",fontWeight:"500"},{children:"CapsLk"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-space"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M133.937 212.506c120.591 0 240.319-.001 360.042.002 14.764.001 18.433 2.665 18.449 13.35.008 6.313.01 12.625 0 18.937-.02 10.352-3.818 13.178-17.817 13.18-50.32.01-100.638.004-150.957.004-80.106 0-160.21.003-240.316-.003-14.176-.001-17.988-2.773-18.011-13.037-.015-6.943-.058-13.887.013-20.83.083-8.256 4.463-11.52 15.629-11.588 10.699-.065 21.4-.014 32.968-.015z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"288.244",y:"241.428",fill:t,fontFamily:"Inter",fontSize:"14",fontWeight:"500"},{children:"Space"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-tab"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M43.568 106.393c-2.898-.004-5.231.085-7.555-.028-5.547-.269-8.694-3.472-8.802-9.409a761.508 761.508 0 01-.005-26.482c.101-6.008 3.184-9.456 8.683-9.503a2968.38 2968.38 0 0147.746-.005c5.53.043 8.686 3.449 8.795 9.39.162 8.825.16 17.658.003 26.482-.111 6.211-3.313 9.472-9.284 9.52-13.003.104-26.008.034-39.581.035z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"47.476",y:"89.113",fill:t,fontFamily:"Inter",fontSize:"14",fontWeight:"500"},{children:"Tab"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-e"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"204.524",y:"91.851",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"E"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M200.261 60.918c7.893-.001 15.256-.06 22.618.019 6.09.065 9.416 3.41 9.543 9.922.167 8.599.176 17.207-.008 25.805-.132 6.164-3.419 9.564-9.241 9.685-7.748.161-15.502.154-23.249.005-6.136-.118-9.354-3.603-9.425-10.055-.092-8.391-.087-16.786-.002-25.178.068-6.656 2.657-9.419 9.764-10.203z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-r"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"250.921",y:"92.065",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"R"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M242.165 62.085c10.392-.7 20.208-.606 30.56.031 2.269.139 5.799 4.708 6.093 7.859.834 8.936.456 18.028.239 27.049-.14 5.8-3.479 9.189-8.985 9.315-7.945.181-15.9.192-23.844-.001-5.958-.144-9.023-3.802-9.077-10.434-.066-8.187-.331-16.398.15-24.552.176-2.989 1.677-8.282 4.864-9.267z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-t"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"297.635",y:"92.065",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"T"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M283.793 86.15c.002-5.675-.103-10.73.034-15.778.159-5.843 3.357-9.322 8.797-9.414 8.162-.139 16.328-.085 24.491-.017 5.474.045 8.343 3.628 8.558 9.074.357 9.035.285 18.105.03 27.148-.159 5.66-3.326 8.996-8.555 9.152-8.158.242-16.33.229-24.489.012-5.683-.152-8.72-3.833-8.852-10.082-.067-3.156-.013-6.315-.014-10.095z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-y"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"343.848",y:"92.065",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"Y"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M371.529 66.274c.419 10.939.942 21.403.715 31.848-.108 4.957-3.476 8.047-8.127 8.18-8.523.245-17.073.402-25.58-.074-5.001-.28-8.102-3.628-8.086-9.532.022-8.607-.074-17.215.029-25.821.08-6.56 3.254-9.863 9.464-9.936 7.559-.088 15.155-.474 22.663.202 3.004.27 6.394.457 8.922 5.133z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-u"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"390.087",y:"92.065",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"U"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M392.408 106.393c-2.701-.007-4.868.23-6.972-.068-5.014-.708-8.284-3.477-8.309-9.41-.037-8.842-.11-17.687.026-26.527.09-5.85 3.342-9.336 8.777-9.429 8.163-.141 16.33-.086 24.495-.019 5.473.045 8.35 3.621 8.566 9.069.359 9.037.272 18.107.036 27.153-.15 5.759-3.56 9.026-9.145 9.19-5.634.165-11.275.039-17.474.041z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-i"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"441.286",y:"92.065",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"I"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M436.802 60.917c6.948 0 13.341-.079 19.731.026 5.678.092 9.04 3.506 9.176 9.67.188 8.595.167 17.2.011 25.796-.114 6.28-3.282 9.792-9.012 9.929-7.937.19-15.883.19-23.82.002-5.966-.142-9.036-3.787-9.1-10.395-.069-7.131-.019-14.263-.017-21.394.004-11.417 2.007-13.605 13.031-13.634z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-o"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"482.332",y:"92.065",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"O"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M512.423 92.235c-.051 11.657-2.388 14.15-12.723 14.157-6.392.004-12.785.071-19.176-.02-6.897-.099-10.023-3.405-10.078-10.628-.063-8.181-.077-16.363.005-24.542.07-6.935 3.189-10.204 9.738-10.268 7.36-.071 14.721-.056 22.081-.005 7.068.048 10.058 3.343 10.139 11.203.067 6.502.014 13.005.014 20.103z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-p"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"531.579",y:"92.065",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"P"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M558.875 68.284c.146 9.556.272 18.581.174 27.604-.075 6.986-3.238 10.37-9.712 10.474-7.557.121-15.119.134-22.675-.005-6.39-.117-9.503-3.626-9.556-10.559-.064-8.185-.076-16.372.004-24.557.068-6.966 3.167-10.241 9.71-10.306 7.365-.074 14.736.181 22.093-.087 4.964-.181 8.155 1.94 9.962 7.436z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-l"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M482.845 151.686c-.403-10.935-.768-21.412-.629-31.88.063-4.751 3.026-8.015 7.362-8.203 8.903-.386 17.837-.367 26.743-.033 5.089.192 7.549 4.129 7.689 9.286.239 8.809.208 17.635.02 26.447-.126 5.895-3.344 9.411-8.766 9.553-8.136.212-16.306.44-24.409-.165-2.672-.199-7.257-2.379-8.01-5.005z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"497.685",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"L"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-k"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M435.436 137.923c.002-6.095-.106-11.572.036-17.04.151-5.837 3.363-9.305 8.812-9.396 8.162-.137 16.328-.091 24.491-.015 5.471.051 8.33 3.644 8.542 9.092.352 9.036.288 18.105.027 27.148-.163 5.659-3.344 8.982-8.573 9.134-8.158.237-16.33.229-24.488.009-5.688-.154-8.698-3.828-8.835-10.101-.06-2.735-.012-5.473-.012-8.831z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"449.222",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"K"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-j"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M424.07 111.571c5.06 2.044 6.805 5.808 6.729 10.983-.115 7.764.028 15.532-.047 23.298-.073 7.499-3.084 10.934-9.788 11.04-7.557.12-15.119.14-22.676-.007-6.363-.124-9.444-3.654-9.496-10.624-.06-7.976-.055-15.953-.003-23.928.051-7.759 2.995-10.847 10.363-10.875 8.14-.032 16.281.024 24.918.113z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"402.977",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"J"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-h"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M376.399 111.478c5.706 1.32 7.708 5.168 7.709 10.61.001 8.185.101 16.372-.032 24.555-.108 6.64-3.26 10.114-9.338 10.238a566.93 566.93 0 01-23.255-.001c-6.104-.125-9.276-3.641-9.343-10.147-.086-8.394-.091-16.79.002-25.184.073-6.594 3.227-10.004 9.329-10.077 8.139-.096 16.28-.019 24.928.006z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"354.377",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"H"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-f"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"263.203",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"F"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M248.916 149.665c-.083-9.569-.152-18.594-.099-27.618.042-7.11 3.065-10.501 9.458-10.577a929.398 929.398 0 0123.257.003c5.699.074 9.066 3.484 9.203 9.647.192 8.6.169 17.212.013 25.814-.113 6.286-3.28 9.796-9.016 9.933-7.943.19-15.892.079-23.838.036-4.345-.024-7.309-2.327-8.978-7.238z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-g"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M331.603 156.359c-9.361.325-18.269.611-27.173.493-5.704-.076-8.878-3.766-8.946-9.919-.095-8.605-.114-17.215.009-25.819.089-6.156 3.339-9.558 9.143-9.638a823.87 823.87 0 0123.842.005c5.346.082 8.757 3.511 8.903 9.323.222 8.811.521 17.676-.186 26.425-.251 3.112-1.145 7.795-5.592 9.13z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"307.663",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"G"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-s"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"169.345",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"S"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M190.774 111.571c5.064 2.041 6.804 5.81 6.728 10.982-.114 7.764.029 15.533-.046 23.298-.073 7.501-3.082 10.935-9.787 11.041-7.557.12-15.12.139-22.676-.007-6.363-.124-9.445-3.654-9.498-10.624-.059-7.975-.054-15.952-.002-23.928.05-7.759 2.995-10.847 10.363-10.875 8.14-.032 16.281.024 24.918.113z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-d"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M243.275 148.784c-.44 5.174-2.899 8.19-7.231 8.19-.109 0-27.048.003-27.319-.095-4.003-1.445-6.064-6.096-6.312-9.1-.739-8.956-.372-18.032-.227-27.058.088-5.506 3.319-9.109 8.333-9.217 8.334-.181 16.713-.552 24.987.228 2.803.264 7.559 3.67 7.639 5.807.443 11.785.767 19.027.13 31.245z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"215.324",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"D"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-a"},{children:[(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"121.397",y:"140.922",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"A"})),(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M108.821 129.211c.003-3.353-.133-6.1.039-8.824.342-5.407 3.133-8.695 8.105-8.853 8.546-.273 17.107-.213 25.657-.027 5.166.113 7.878 3.791 8.077 8.927.351 9.036.264 18.104.043 27.15-.142 5.799-3.507 9.166-9.05 9.287-7.966.174-15.942.196-23.908-.009-5.717-.147-8.841-3.788-8.941-9.984-.092-5.682-.021-11.367-.022-17.667z",opacity:"1"})]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-z"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M174.144 176.131c-.001 7.311.083 14.025-.025 20.735-.114 7.022-3.209 10.442-9.636 10.553-7.552.129-15.109.129-22.661 0-6.468-.111-9.596-3.546-9.653-10.445-.07-8.389-.098-16.782.012-25.17.082-6.255 3.237-9.687 8.988-9.795 6.777-.128 13.558-.035 20.337-.033 10.367.003 12.587 2.387 12.638 14.155z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"145.517",y:"192.359",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"Z"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-x"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M190.795 207.451c-9.466-.213-11.968-2.9-11.982-12.334-.012-7.762-.083-15.526.026-23.287.088-6.261 3.233-9.727 8.967-9.819 7.941-.127 15.886-.109 23.827-.007 5.431.071 8.931 3.382 9.089 9.108.248 9.013.234 18.045.007 27.06-.146 5.757-3.526 9.088-9.053 9.232-6.777.176-13.56.045-20.881.047z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"192.556",y:"192.359",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"X"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-c"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M267.462 178.537c-.001 6.716.12 12.826-.038 18.926-.163 6.305-3.295 9.802-9.066 9.935-7.967.185-15.944.196-23.91-.006-5.725-.145-8.884-3.779-8.953-9.968-.094-8.42-.09-16.843-.003-25.264.07-6.661 3.191-10.071 9.302-10.159 7.192-.103 14.386-.04 21.579-.021 8.302.022 11.02 3.015 11.088 12.157.009 1.263.001 2.526.001 4.4z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"238.755",y:"192.359",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"C"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-b"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M324.629 206.887c-4.509-2.145-6.013-5.517-5.896-10.274.202-8.181-.016-16.374.079-24.56.077-6.588 3.233-9.976 9.356-10.052a925.03 925.03 0 0123.262 0c5.978.075 9.203 3.543 9.314 10.182a734.47 734.47 0 01-.003 25.19c-.111 6.31-3.252 9.934-8.939 10.008-8.905.117-17.813-.169-27.173-.494z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"332.169",y:"192.359",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"B"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-n"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M384.139 161.975c5.046.001 9.518-.072 13.987.021 5.74.119 9.122 3.469 9.256 9.642.192 8.836.221 17.687-.019 26.52-.154 5.663-3.276 9.042-8.503 9.21-8.157.261-16.329.228-24.489.021-5.701-.146-8.832-3.807-8.9-10.021-.09-8.209-.067-16.419-.01-24.628.053-7.477 3.027-10.654 9.94-10.757 2.72-.041 5.442-.007 8.738-.008z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"378.121",y:"192.359",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"N"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-m"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M454.099 187.199c0 19.985-.249 20.252-18.273 20.252-4.665 0-9.333.091-13.995-.024-6.53-.161-9.647-3.517-9.707-10.455-.07-8.209-.076-16.42.002-24.629.067-7.013 3.149-10.285 9.718-10.349 7.58-.074 15.162-.082 22.742.003 6.087.069 9.285 3.446 9.482 10.057.145 4.837.03 9.683.031 15.145z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"423.454",y:"192.359",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"M"}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-comma"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M476.325 207.451c-2.709 0-4.847.027-6.985-.005-7.577-.112-10.535-3.298-10.567-11.448-.031-7.789-.054-15.579.008-23.367.056-7.161 3.047-10.555 9.457-10.632a902.363 902.363 0 0123.326.006c5.689.078 9.014 3.532 9.143 9.764.178 8.626.178 17.264 0 25.89-.129 6.218-3.389 9.565-9.234 9.757-4.855.158-9.718.034-15.148.035z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"476.274",y:"192.359",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:","}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-dot"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M570.186 216.695c.521 11.736 1.271 23.052.683 34.286-.127 2.432-4.97 6.364-7.797 6.532-12.2.728-24.459.431-36.694.261-5.433-.075-8.447-3.604-8.54-9.676a868.153 868.153 0 01-.003-25.871c.093-6.392 3.139-9.757 9.004-9.82 11.848-.128 23.703-.261 35.54.137 2.552.086 5.04 2.409 7.807 4.151z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"541.467",y:"242.903",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"."}))]})),(0,n.jsxs)("g",Object.assign({className:"key-item key-v"},{children:[(0,n.jsx)("path",{fill:"none",stroke:e,strokeWidth:"2",d:"M272.128 184.714c.002-4.835-.097-9.048.03-13.254.178-5.853 3.348-9.348 8.774-9.442 8.162-.142 16.327-.08 24.491-.021 5.474.039 8.362 3.603 8.583 9.047.365 9.034.281 18.103.035 27.147-.153 5.662-3.301 9.018-8.529 9.18-8.157.251-16.33.228-24.488.016-5.693-.148-8.758-3.82-8.879-10.051-.078-3.998-.016-7.999-.017-12.622z",opacity:"1"}),(0,n.jsx)("text",Object.assign({style:{whiteSpace:"pre"},x:"285.352",y:"192.359",fill:t,fontFamily:"Inter",fontSize:"23",fontWeight:"500"},{children:"V"}))]}))]}))},Wt=c.ZP.div((e=>c.iv`
    position: fixed;
    bottom: ${e.theme.size(14)};
    left: 50%;
    translate: -50%;
    width: 100%;
    max-width: ${e.theme.size(260)};
    animation: ${ue} 0.3s ease-out;

    .key-item {
      &:hover path {
        fill: #fff7;
      }
      text {
        // text-transform: lowercase;
      }
    }
  `)),Pt=e=>{const{onKeyPress:t}=e,i=j(),{focus:s,option:o,setUI:a}=te(),r=(0,f.useMemo)((()=>[["esc","1","2","3","4","5","6","7","8","9","0",""],["tab","q","w","e","r","t","y","u","i","o","p",""],["capslk","a","s","d","f","g","h","j","k","l","enter","enter"],["shift-l","shift-l","z","x","c","v","b","n","m","comma","shift-r","shift-r"],["","space","space","space","space","space","space","space","space","space","dot",""]][s||0][o||0]),[o,s]);return(0,f.useEffect)((()=>{i("ArrowUp",(()=>a("focus",s-1))),i("ArrowDown",(()=>a("focus",s+1))),i("ArrowLeft",(()=>a("option",o-1))),i("ArrowRight",(()=>a("option",o+1))),i("ButtonA",(()=>t("space"===r?" ":"esc"===r?"":r)))}),[i]),(0,f.useEffect)((()=>{const e=(t=`#keyboard-svg .key-${r} path`,document.querySelector(t));var t;return e&&(e.style.fill="#fff7"),()=>{e&&(e.style.fill="transparent")}}),[o,s]),(0,n.jsx)(Wt,{children:(0,n.jsx)($t,{})})},It=c.ZP.input((({theme:e})=>c.iv`
    width: 100%;
    padding: ${e.size(2)} ${e.size(1)};
    border: none;
    background-color: transparent;
    color: ${e.colors.text1};
    font-size: ${e.fontSize.h3};
    border-bottom: 2px solid ${e.colors.gray};
  `)),Mt=e=>{const{active:t,value:i,onChange:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(It,{ref:e=>t?null==e?void 0:e.focus():null==e?void 0:e.blur(),value:i,onChange:e=>s(e.target.value),autoFocus:!0}),(0,n.jsx)(r,Object.assign({check:t},{children:(0,n.jsx)(Pt,{onKeyPress:e=>s(i+e)})}))]})},At=c.ZP.div((()=>c.iv``)),Ct=e=>{const{type:t}=e;return(0,n.jsx)(ht,Object.assign({},e,{children:(0,n.jsxs)(At,{children:[(0,n.jsx)(r,{check:"text"===t,true:(0,n.jsx)(Mt,Object.assign({},e))}),(0,n.jsx)(r,{check:"img"===t,true:(0,n.jsx)(St,Object.assign({},e))}),(0,n.jsx)(r,{check:"file"===t,true:(0,n.jsx)(vt,Object.assign({},e))}),(0,n.jsx)(r,{check:"color"===t,true:(0,n.jsx)(mt,Object.assign({},e))})]})}))},Ft=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
  `)),Zt=c.ZP.h2((({theme:e})=>c.iv`
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: ${e.fontSize.h2};
    padding-bottom: ${e.size(2)};
    margin-bottom: ${e.size(8)};
    font-weight: bold;
    border-bottom: 3px solid ${e.colors.bg1};
  `)),Nt={name:"",description:"",cover:"",background:"",publisher:"",rate:"80",addedAt:"",year:"2023",hidden:!1,gamePath:"",gameFile:""},Bt=()=>{const e=j(),{active:t,focus:i,setUI:s}=te(),[o,a]=(0,f.useState)(Nt);return(0,f.useEffect)((()=>{e("ArrowUp",(()=>s("focus",i-1))),e("ArrowDown",(()=>s("focus",i+1))),e("ButtonA",(()=>t||s("active",!0))),e("ButtonB",(()=>!t||s("active",!1))),e("ButtonX",(()=>v.games.create({gameInfo:o})))}),[e]),(0,n.jsxs)(Ft,{children:[(0,n.jsx)(Zt,{children:"Add New Game"}),(0,n.jsx)(Ct,{type:"text",title:"Title",focus:0===i,active:0===i&&t,value:o.name,onChange:e=>a(Object.assign(Object.assign({},o),{name:e}))}),(0,n.jsx)(Ct,{type:"text",title:"Publisher",focus:1===i,active:1===i&&t,value:o.publisher,onChange:e=>a(Object.assign(Object.assign({},o),{publisher:e}))}),(0,n.jsx)(Ct,{type:"img",title:"Cover",focus:2===i,active:2===i&&t,value:o.name+" box art",onChange:e=>a(Object.assign(Object.assign({},o),{cover:e}))}),(0,n.jsx)(Ct,{type:"img",title:"Background",focus:3===i,active:3===i&&t,value:o.name+" background",onChange:e=>a(Object.assign(Object.assign({},o),{background:e}))}),(0,n.jsx)(Ct,{type:"file",title:"Location",focus:4===i,active:4===i&&t,value:o.gamePath,onChange:e=>a(Object.assign(Object.assign({},o),{gameFile:e}))}),(0,n.jsx)(Ze,{buttons:Ne.GameDetailsForm})]})},Lt=()=>{const[e,t]=I(),i=j();return(0,f.useEffect)((()=>{i("ButtonY",(()=>{t("games/add"===e?"games/list/bar":"games/add")})),i("ButtonX",(()=>{t("games/list/bar"===e?"games/list/grid":"games/list/bar")}))}),[i]),(0,n.jsxs)(fe,{children:[(0,n.jsx)(r,{check:"games/list/bar"===e,true:(0,n.jsx)(st,{mode:"list"})}),(0,n.jsx)(r,{check:"games/list/grid"===e,true:(0,n.jsx)(st,{mode:"grid"})}),(0,n.jsx)(r,{check:"games/add"===e,true:(0,n.jsx)(Bt,{})})]})},Ut=()=>{const e=j(),[t,i]=(0,f.useState)(0);return(0,f.useEffect)((()=>{e("ArrowUp",(()=>t>0&&i(t-1))),e("ArrowDown",(()=>t<1&&i(t+1)))}),[e]),(0,n.jsx)(fe,{children:(0,n.jsx)("div",{children:"Settings"})})},Et=()=>{const e=j(),{active:t,focus:i,setUI:s}=te(),[o,a]=(0,f.useState)({});return(0,f.useEffect)((()=>{e("ArrowUp",(()=>s("focus",i-1))),e("ArrowDown",(()=>s("focus",i+1))),e("ButtonA",(()=>s("active",!t))),e("ButtonX",(()=>{}))}),[e]),(0,n.jsxs)(Ft,{children:[(0,n.jsx)(Zt,{children:"Theme Settings"}),(0,n.jsx)(Ct,{focus:0===i,title:"Title",type:"color",active:0===i&&t,value:"",onChange:e=>a(Object.assign(Object.assign({},o),{name:e}))})]})},Dt=()=>(0,n.jsx)(fe,{children:(0,n.jsx)(Et,{})}),Gt=()=>{const[e]=I(),[t]=S();return(0,n.jsxs)(c.f6,Object.assign({theme:Y},{children:[(0,n.jsx)(M,{}),(0,n.jsxs)(u,{children:[(0,n.jsx)(le,{}),(0,n.jsxs)(a.Z5,Object.assign({location:{pathname:"/"+e,hash:"",search:""}},{children:[(0,n.jsx)(a.AW,{path:"games/list/bar",element:(0,n.jsx)(Lt,{})}),(0,n.jsx)(a.AW,{path:"games/list/grid",element:(0,n.jsx)(Lt,{})}),(0,n.jsx)(a.AW,{path:"games/add",element:(0,n.jsx)(Lt,{})}),(0,n.jsx)(a.AW,{path:"apps",element:(0,n.jsx)(Lt,{})}),(0,n.jsx)(a.AW,{path:"music",element:(0,n.jsx)(Lt,{})}),(0,n.jsx)(a.AW,{path:"midia",element:(0,n.jsx)(Lt,{})}),(0,n.jsx)(a.AW,{path:"web",element:(0,n.jsx)(Lt,{})}),(0,n.jsx)(a.AW,{path:"theme",element:(0,n.jsx)(Dt,{})}),(0,n.jsx)(a.AW,{path:"controls",element:(0,n.jsx)(ge,{})}),(0,n.jsx)(a.AW,{path:"settings",element:(0,n.jsx)(Ut,{})})]}))]}),(0,n.jsx)(d,{gradient:q[t.gradientBg],img:t.imgBg,layer:-2,blurBg:!e.includes("games/list/bar")})]}))};(0,s.s)(document.getElementById("root")).render((0,n.jsx)((()=>(0,n.jsx)(O,{children:(0,n.jsx)(P,{children:(0,n.jsx)(c.LC,Object.assign({enableVendorPrefixes:!0},{children:(0,n.jsx)(o.VK,{children:(0,n.jsx)(Gt,{})})}))})})),{}))},160:e=>{window,e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var n=window,s=/^image\//,o=/\.\w+$/,a={},r={file:null,quality:.8,convertSize:2048e3,loose:!0,redressOrientation:!0},c=function(e){return"function"==typeof e},l=function(e){return s.test(e)};function h(e){e=Object.assign({},r,e),this.options=e,this.file=e.file,this.image=null,this.ParsedOrientationInfo=null,this.init()}var d=h.prototype;for(var f in t.default=h,d.init=function(){var e=this,t=this.file,i=this.options;t&&l(t.type)?(l(i.mimeType)||(i.mimeType=t.type),a.file2Image(t,(function(n){c(e.beforeCompress)&&(e.image=n,t.width=n.naturalWidth,t.height=n.naturalHeight,e.beforeCompress(t)),"image/jpeg"===t.type&&i.redressOrientation?e.getParsedOrientationInfo((function(t){e.parsedOrientationInfo=t,e.rendCanvas()})):(e.parsedOrientationInfo={rotate:0,scaleX:1,scaleY:1},e.rendCanvas())}),e.error)):e.error("请上传图片文件!")},d.rendCanvas=function(){var e=this,t=this.options,i=this.image,n=this.getExpectedEdge(),s=n.dWidth,o=n.dHeight,r=n.width,c=n.height,l=a.image2Canvas(i,s,o,e.beforeDraw.bind(e),e.afterDraw.bind(e),r,c);a.canvas2Blob(l,(function(t){t&&(t.width=l.width,t.height=l.height),e.success(t)}),t.quality,t.mimeType)},d.beforeCompress=function(){c(this.options.beforeCompress)&&this.options.beforeCompress(this.file)},d.getExpectedEdge=function(){var e,t=this.image,i=this.parsedOrientationInfo.rotate,n=this.options,s=t.naturalWidth,o=t.naturalHeight,a=Math.abs(i)%180==90;a&&(e=o,o=s,s=e);var r=s/o,c=Math.max(n.maxWidth,0)||1/0,l=Math.max(n.maxHeight,0)||1/0,h=Math.max(n.minWidth,0)||0,d=Math.max(n.minHeight,0)||0,f=Math.max(n.width,0)||s,g=Math.max(n.height,0)||o;c<1/0&&l<1/0?l*r>c?l=c/r:c=l*r:c<1/0?l=c/r:l<1/0&&(c=l*r),h>0&&d>0?d*r>h?d=h/r:h=d*r:h>0?d=h/r:d>0&&(h=d*r),g*r>f?g=f/r:f=g*r;var m=f=Math.floor(Math.min(Math.max(f,h),c)),x=g=Math.floor(Math.min(Math.max(g,d),l));return a&&(e=x,x=m,m=e),{dWidth:m,dHeight:x,width:f,height:g}},d.getParsedOrientationInfo=function(e){var t=this;this.getOrientation((function(i){c(e)&&e(t.parseOrientation(i))}))},d.getOrientation=function(e){var t=this;a.file2ArrayBuffer(this.file,(function(i){c(e)&&e(t.resetAndGetOrientation(i))}))},d.resetAndGetOrientation=function(e){var t,i=new DataView(e);try{var n,s,o,r;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var c=i.byteLength,l=2;l+1<c;){if(255===i.getUint8(l)&&225===i.getUint8(l+1)){s=l;break}l+=1}if(s){var h=s+4,d=s+10;if("Exif"===a.getStringFromCharCode(i,h,4)){var f=i.getUint16(d);if(((n=18761===f)||19789===f)&&42===i.getUint16(d+2,n)){var g=i.getUint32(d+4,n);g>=8&&(o=d+g)}}}if(o)for(c=i.getUint16(o,n),r=0;r<c;r+=1)if(l=o+12*r+2,274===i.getUint16(l,n)){l+=8,t=i.getUint16(l,n),i.setUint16(l,1,n);break}}catch(e){console.error(e),t=1}return t},d.parseOrientation=function(e){var t=0,i=1,n=1;switch(e){case 2:i=-1;break;case 3:t=-180;break;case 4:n=-1;break;case 5:t=90,n=-1;break;case 6:t=90;break;case 7:t=90,i=-1;break;case 8:t=-90}return{rotate:t,scaleX:i,scaleY:n}},d.beforeDraw=function(e,t){var i=this.parsedOrientationInfo,n=i.rotate,s=i.scaleX,o=i.scaleY,a=this.file,r=this.options,l="transparent",h=t.width,d=t.height;switch(a.size>r.convertSize&&"image/png"===r.mimeType&&(l="#fff",r.mimeType="image/jpeg"),e.fillStyle=l,e.fillRect(0,0,h,d),c(r.beforeDraw)&&r.beforeDraw.call(this,e,t),e.save(),n){case 90:e.translate(h,0);break;case-90:e.translate(0,d);break;case-180:e.translate(h,d)}e.rotate(n*Math.PI/180),e.scale(s,o)},d.afterDraw=function(e,t){var i=this.options;c(i.afterDraw)&&i.afterDraw.call(this,e,t)},d.error=function(e){var t=this.options;if(!c(t.error))throw new Error(e);t.error.call(this,e)},d.success=function(e){var t,i,n=this.options,s=this.file,a=this.image,r=this.getExpectedEdge(),h=a.naturalHeight,d=a.naturalWidth;if(e&&e.size)if(!n.loose&&e.size>s.size&&!(r.width>d||r.height>h))console.warn("当前设置的是非宽松模式，压缩结果大于源图片，输出源图片"),e=s;else{var f=new Date;e.lastModified=f.getTime(),e.lastModifiedDate=f,e.name=s.name,e.name&&e.type!==s.type&&(e.name=e.name.replace(o,(t=e.type,"jpeg"===(i=l(t)?t.substr(6):"")&&(i="jpg"),"."+i)))}else console.warn("图片压缩出了点意外，输出源图片"),e=s;c(n.success)&&n.success.call(this,e)},a.file2DataUrl=function(e,t,i){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){c(i)&&i("读取文件失败！")},n.readAsDataURL(e)},a.file2ArrayBuffer=function(e,t,i){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.onerror=function(){c(i)&&i("读取文件失败！")},n.readAsArrayBuffer(e)},a.getStringFromCharCode=function(e,t,i){var n,s="";for(i+=t,n=t;n<i;n+=1)s+=String.fromCharCode(e.getUint8(n));return s},a.file2Image=function(e,t,i){var s=new Image,o=n.URL||n.webkitURL;if(n.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(n.navigator.userAgent)&&(s.crossOrigin="anonymous"),s.alt=e.name,s.onerror=function(){c(i)&&i("图片加载错误！")},o){var a=o.createObjectURL(e);s.onload=function(){t(s),o.revokeObjectURL(a)},s.src=a}else this.file2DataUrl(e,(function(e){s.onload=function(){t(s)},s.src=e}),i)},a.url2Image=function(e,t,i){var n=new Image;n.src=e,n.onload=function(){t(n)},n.onerror=function(){c(i)&&i("图片加载错误！")}},a.image2Canvas=function(e,t,i,n,s,o,a){var r=document.createElement("canvas"),l=r.getContext("2d");return r.width=o||e.naturalWidth,r.height=a||e.naturalHeight,c(n)&&n(l,r),l.save(),l.drawImage(e,0,0,t,i),l.restore(),c(s)&&s(l,r),r},a.canvas2DataUrl=function(e,t,i){return e.toDataURL(i||"image/jpeg",t)},a.dataUrl2Image=function(e,t,i){var n=new Image;n.onload=function(){t(n)},n.error=function(){c(i)&&i("图片加载错误！")},n.src=e},a.dataUrl2Blob=function(e,t){for(var i=e.split(",")[1],n=e.match(/^data:(.*?)(;base64)?,/)[1],s=atob(i),o=i.length,a=new Uint8Array(o),r=0;r<o;r++)a[r]=s.charCodeAt(r);return new Blob([a],{type:t||n})},a.blob2DataUrl=function(e,t,i){this.file2DataUrl(e,t,i)},a.blob2Image=function(e,t,i){this.file2Image(e,t,i)},a.canvas2Blob=function(e,t,i,n){var s=this;HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,i){var n=this.toDataURL(t,i);e(s.dataUrl2Blob(n))}}),e.toBlob((function(e){t(e)}),n||"image/jpeg",i||.8)},a.upload=function(e,t,i){var n=new XMLHttpRequest,s=new FormData;s.append("file",t),n.onreadystatechange=function(){if(4!==n.readyState||200!==n.status)throw new Error(n);i&&i(n.responseText)},n.open("POST",e,!0),n.send(s)},a)a.hasOwnProperty(f)&&(h[f]=a[f])}]).default}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,e=[],o.O=(t,i,n,s)=>{if(!i){var a=1/0;for(h=0;h<e.length;h++){for(var[i,n,s]=e[h],r=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](i[c])))?i.splice(c--,1):(r=!1,s<a&&(a=s));if(r){e.splice(h--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[i,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var s=Object.create(null);o.r(s);var a={};t=t||[null,i({}),i([]),i(i)];for(var r=2&n&&e;"object"==typeof r&&!~t.indexOf(r);r=i(r))Object.getOwnPropertyNames(r).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,o.d(s,a),s},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,s,[a,r,c]=i,l=0;if(a.some((t=>0!==e[t]))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(c)var h=c(o)}for(t&&t(i);l<a.length;l++)s=a[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(h)},i=self.webpackChunkapp_desktop=self.webpackChunkapp_desktop||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),o.nc=void 0;var a=o.O(void 0,[977],(()=>o(365)));a=o.O(a)})();