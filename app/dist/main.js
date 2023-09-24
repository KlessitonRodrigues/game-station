(()=>{var e,t,i,n={803:(e,t,i)=>{"use strict";var n=i(893),r=i(745),o=i(655),a=i(250);const s=e=>e.check?e.true||e.children:e.false;var c=i(86);const l=c.ZP.div((e=>c.iv`
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
    `)),d=c.ZP.img((e=>c.iv`
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-size: cover;
      filter: brightness(0.4) blur(${e.blur?"30px":"0"});
    `)),h=e=>{const{img:t,gradient:i,blurBg:r}=e;return(0,n.jsx)(l,Object.assign({gradient:t?"":i},{children:(0,n.jsx)(s,Object.assign({check:!!t},{children:(0,n.jsx)(d,{src:t,blur:r})}))}))};var u=i(294);const g={axis0Pos:"LeftStickRight",axis0Neg:"LeftStickLeft",axis1Pos:"LeftStickDown",axis1Neg:"LeftStickUp",axis2Pos:"RightStickRight",axis2Neg:"RightStickLeft",axis3Pos:"RightStickDown",axis3Neg:"RightStickUp",button0:"ButtonA",button1:"ButtonB",button2:"ButtonX",button3:"ButtonY",button4:"ButtonLeft",button5:"ButtonRight",button6:"TriggerLeft",button7:"TriggerRight",button8:"ButtonSelect",button9:"ButtonStart",button10:"LeftStick",button11:"RightStick",button12:"ArrowUp",button13:"ArrowDown",button14:"ArrowLeft",button15:"ArrowRight",button16:"ButtonHome"},m=[],f=e=>{console.log("Disconnected",e.gamepad.id),m.forEach((e=>clearInterval(e)))},p=(0,u.createContext)((()=>{})),x=e=>{const[t,i]=(0,u.useState)([]),r=(0,u.useCallback)(((e,i)=>t.includes(e)&&i&&i()),[t]);return(0,u.useEffect)((()=>{window.addEventListener("gamepadconnected",(e=>((e,t)=>{console.log("Connected",e.gamepad.id),m.push(((e,t)=>{const i={time:0,buttons:[""]};return setInterval((()=>{const{timestamp:n,axes:r,buttons:o}=navigator.getGamepads()[e],a=[];if(n===i.time)return i.time=n;i.time=n,r.forEach(((e,t)=>{if(1!==e&&-1!==e)return!1;const i=`axis${t}${e>0?"Pos":"Neg"}`;g[i]&&a.push(g[i])})),o.forEach(((e,t)=>{if(0===e.value)return!1;const i=`button${t}`;g[i]&&a.push(g[i])})),a.toString()!==i.buttons.toString()&&(i.buttons=a,a.length&&t&&t(a))}),33)})(e.gamepad.index,t))})(e,i))),window.addEventListener("gamepaddisconnected",f)}),[]),(0,n.jsx)(p.Provider,Object.assign({value:r},{children:e.children}))},v=()=>(0,u.useContext)(p);var b=i(640);const j="games_db",w=i.n(b)()({readDB:()=>JSON.parse(window.localStorage.getItem(j)||"{}"),saveDB:e=>(e.updatedAt=(new Date).toISOString(),window.localStorage.setItem(j,JSON.stringify(e)),e)});var y;w.data.testData();const $={gradientBg:null===(y=w.settings.read())||void 0===y?void 0:y.bgOption,imgBg:""},z=(0,u.createContext)([$,()=>{}]),P=e=>(0,n.jsx)(z.Provider,Object.assign({value:(0,u.useState)($)},{children:e.children})),O=()=>(0,u.useContext)(z),S="games/list/bar",k=(0,u.createContext)([S,()=>{}]),A=e=>(0,n.jsx)(k.Provider,Object.assign({value:(0,u.useState)(S)},{children:e.children})),Z=()=>(0,u.useContext)(k),C=(0,c.vJ)((({theme:e})=>c.iv`
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
  `)),B="#880e4f",L="#c51162",U="#8e24aa",D="#aa00ff",I="#6200ea",E="#0091ea",G="#00b8d4",M="#7cb342",R="#64dd17",F="#e0e0e0",W="#bdbdbd",T="#9e9e9e",_="#757575",H="#616161",N="#424242",X="#141414",Y={size:e=>.2*e+"rem",colors:{main:"#039be5",mainBg:"#0C66E4",bg1:F+"55",bg2:F+"33",bg3:F+"22",bg4:F+"11",text1:"#fafafa",text2:"#eeeeee",text3:F,text4:W,gray:W,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:M,white:F,black:X},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.8rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.8rem",full:"50%"},devices:{mobileS:"(max-width: 320px)",mobileM:"(max-width: 425px)",mobileL:"(max-width: 480px)",tablet:"(max-width: 768px)",laptopS:"(max-width: 900px)",laptopM:"(max-width: 1024px)",laptopL:"(max-width: 1280px)",desktopS:"(max-width: 1440px)",desktopM:"(max-width: 1980px)",desktopL:"(max-width: 2560px)"}},q=(Object.assign(Object.assign({},Y),{colors:Object.assign(Object.assign({},Y.colors),{bg1:X,bg2:N+"44",bg3:H+"44",bg4:_+"44",text1:F,text2:W,text3:T,text4:H,gray:_,white:F})}),{indigo:`linear-gradient(150deg, #2962ff, ${X} 80%)`,blue:`linear-gradient(150deg, ${E}, ${X} 80%)`,green:`linear-gradient(150deg, ${R}, ${X} 80%)`,deepPurple:`linear-gradient(150deg, ${I}, ${X} 80%)`,purple:`linear-gradient(150deg, ${D}, ${X} 80%)`,pink:`linear-gradient(150deg, ${L}, ${X} 80%)`,red:`linear-gradient(150deg, #d32f2f, ${X} 80%)`,blueAndPurple:`linear-gradient(150deg, ${G}, ${U} 70%)`,blueAndPink:`linear-gradient(150deg, ${G}, ${L} 80%)`,greenAndPink:`linear-gradient(150deg, ${R}, ${B} 80%)`,blueAndBrown:`linear-gradient(150deg, ${E}, #5d4037 75%)`,purpleAndGreen:`linear-gradient(150deg, ${I}, ${M} 80%)`});var J=i(155),V=i(352);const K={games:(0,n.jsx)(V.gdw,{}),apps:(0,n.jsx)(V.v$D,{}),music:(0,n.jsx)(V.JUP,{}),midia:(0,n.jsx)(V.SD9,{}),web:(0,n.jsx)(V.lct,{}),news:(0,n.jsx)(V.lBz,{}),theme:(0,n.jsx)(V.zCJ,{}),settings:(0,n.jsx)(V.NY,{}),user:(0,n.jsx)(V.sFD,{}),battery:(0,n.jsx)(V.e8c,{}),gamepad:(0,n.jsx)(J.uWr,{}),search:(0,n.jsx)(V.Qcu,{}),folder:(0,n.jsx)(V.G2V,{}),file:(0,n.jsx)(V.UfY,{}),image:(0,n.jsx)(V.RXd,{}),"arrow-left":(0,n.jsx)(V.jW7,{}),"arrow-right":(0,n.jsx)(V.jfD,{}),usb:(0,n.jsx)(V.rAw,{}),controls:(0,n.jsx)(J.uWr,{}),edit:(0,n.jsx)(V.ISo,{}),spinner:(0,n.jsx)(V.H4p,{})},Q=c.ZP.span((e=>c.iv`
      display: inline-flex;
      font-size: ${e.theme.size(e.size||8)};
    `)),ee=e=>{const{type:t,size:i,style:r}=e;return(0,n.jsx)(Q,Object.assign({size:i,style:r},{children:K[t]}))},te=()=>{const[e,t]=(0,u.useState)(!1),[i,n]=(0,u.useState)(0),[r,o]=(0,u.useState)(0),[a,s]=(0,u.useState)(!1),c=(0,u.useCallback)(((i,r)=>{"active"===i&&"boolean"==typeof r&&t(r),"focus"===i&&"number"==typeof r&&!e&&r>=0&&n(r),"option"===i&&"number"==typeof r&&r>=0&&o(r),"loading"===i&&"boolean"==typeof r&&s(r)}),[e,i,r,a]);return{focus:i,active:e,option:r,loading:a,setUI:c}},ie=[{name:"games",route:"games/list/bar"},{name:"apps",route:"apps"},{name:"music",route:"music"},{name:"midia",route:"midia"},{name:"web",route:"web"},{name:"theme",route:"theme"},{name:"controls",route:"controls"},{name:"settings",route:"settings"}],ne=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
    max-width: ${e.size(500)};
    display: flex;
    align-items: center;
    padding: ${e.size(4)};
    margin: ${e.size(2)} auto;
  `)),re=c.ZP.div((()=>c.iv`
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
  `)),se=c.ZP.span((({theme:e})=>c.iv`
    padding: 0 ${e.size(2)};
    font-size: ${e.fontSize.h1};
    text-transform: capitalize;
  `)),ce=c.ZP.label((e=>c.iv`
    display: flex;
    position: relative;
    align-items: center;
    color: ${e.theme.colors.bg1};
    transition: 0.3s ease-out;
    cursor: pointer;

    :hover {
      color: ${e.theme.colors.text2};
    }

    ${e.selected&&c.iv`
      color: ${e.theme.colors.text1};
      margin-left: ${e.theme.size(15)};
      margin-right: ${e.theme.size(15)};
    `}

    ${se} {
      width: 0;
      ${!e.selected&&"opacity: 0;"}
      ${e.selected&&`width: ${e.theme.size(25)};`}
    }
  `)),le=()=>{const e=v(),[t,i]=Z(),{option:r,setUI:o}=te();return(0,u.useEffect)((()=>{e("ButtonLeft",(()=>o("option",r-1))),e("ButtonRight",(()=>r<ie.length-1&&o("option",r+1)))}),[e]),(0,u.useEffect)((()=>{const e=ie[r].route;i(e)}),[r]),(0,n.jsxs)(ne,{children:[(0,n.jsx)(re,{children:(0,n.jsx)(ee,{type:"user",size:7})}),(0,n.jsx)(ae,{children:ie.map(((e,t)=>(0,n.jsxs)(ce,Object.assign({selected:r===t,onClick:()=>o("option",t)},{children:[(0,n.jsx)(ee,{type:e.name,size:13}),(0,n.jsx)(se,{children:e.name})]}),e.name)))}),(0,n.jsx)(oe,{children:(0,n.jsx)(ee,{type:"gamepad",size:7})})]})},de=c.ZP.div((e=>c.iv`
    width: 100%;
    max-width: ${e.theme.size(500)};
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: ${e.theme.size(20)};
  `)),he=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
  `)),ue=e=>(0,n.jsx)(de,{children:(0,n.jsx)(he,{children:e.children})}),ge=()=>(0,n.jsx)(ue,{}),me=(c.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,c.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),fe=(c.F4`
   from {opacity: 0}
   to {opacity: 1}
`,c.F4`
   to {transform: rotateZ(360deg);}
`),pe=me,xe=fe,ve=c.ZP.div((()=>c.iv`
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
  `)),be=c.ZP.div((({theme:e})=>c.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${xe} 1s infinite linear;
  `)),je=c.ZP.p((({theme:e})=>c.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${pe} 0.5s ease-out;
  `)),we=c.ZP.p((({theme:e})=>c.iv`
    color: ${e.colors.text4};
    font-size: ${e.fontSize.verySmall};
    animation: ${pe} 0.5s ease-out;
  `)),ye=()=>(0,n.jsxs)(ve,{children:[(0,n.jsx)(be,{children:(0,n.jsx)(ee,{type:"spinner",size:12})}),(0,n.jsx)(je,{children:"Optimizing Images"}),(0,n.jsx)(we,{children:"Will happening once only"})]}),$e={method:"GET",mode:"cors",headers:{}};var ze=i(160),Pe=i.n(ze),Oe=function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};const Se=e=>new Promise(((t,i)=>{fetch(e,$e).then((e=>Oe(void 0,void 0,void 0,(function*(){const t=yield e.blob(),i=yield(n=t,new Promise(((e,t)=>{new(Pe())({file:n,quality:.2,mimeType:"image/jpeg",width:1920,height:1080,convertSize:1/0,loose:!0,redressOrientation:!0,success:t=>{const i=(n.size/1024).toFixed(2),r=(t.size/1024).toFixed(2),o=((n.size-t.size)/n.size*100).toFixed(2)+"%";console.log(`Image compressor: ${i} Kb -> ${r} Kb, ratio: ${o}`),e(t)},error:e=>{console.error(e),t(e)}})})));var n;const r=new FileReader;return r.readAsDataURL(i),yield new Promise((e=>r.onload=()=>e(r.result)))})))).then(t).catch(i)})),ke=e=>Oe(void 0,void 0,void 0,(function*(){const t="image_cache",i=localStorage.getItem(t)||"[]",n=JSON.parse(i),r=n.find((t=>t.url===e));if(r)return r.data;const o=yield Se(e);return n.push({url:e,data:o}),localStorage.setItem(t,JSON.stringify(n)),o})),Ae=e=>{const{content:t}=e;return(0,n.jsx)("div",Object.assign({style:{display:"block",width:"1.8rem"}},{children:(0,n.jsxs)("svg",Object.assign({width:"100%",height:"100%",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,n.jsx)("circle",{id:"Oval",fill:"none",cx:"31",cy:"31",r:"27.841",style:{strokeWidth:"4px",stroke:"#999"},transform:"matrix(0.910153, 0, 0, 0.89304, 3.448403, 3.713665)"}),(0,n.jsx)("text",Object.assign({style:{fill:"#DDD",fontFamily:"FreeSans",fontSize:"32.4528px",fontWeight:"bold",whiteSpace:"pre"},transform:"matrix(1.478571, 0, 0, 1.232558, -10.114382, -9.312138",x:"19.5",y:"44"},{children:t}))]}))}))},Ze=c.ZP.div((e=>c.iv`
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
    `)),Be=c.ZP.div((e=>c.iv`
      font-size: ${e.theme.fontSize.label};
      padding-bottom: ${e.theme.size(.75)};
      color: ${e.theme.colors.text3};
    `)),Le=e=>{const{buttons:t}=e,i=(0,u.useMemo)((()=>null==t?void 0:t.map((e=>(0,n.jsxs)(Ce,{children:[(0,n.jsx)(Ae,{content:e.content}),(0,n.jsx)(Be,{children:e.label})]},e.label)))),[]);return(0,n.jsx)(Ze,{children:i})},Ue={GameListBar:[{content:"A",label:"Start"},{content:"X",label:"Grid View"},{content:"Y",label:"Add Game"}],GameListGrid:[{content:"A",label:"Start"},{content:"X",label:"List View"},{content:"Y",label:"Add Game"}],GameDetailsForm:[{content:"A",label:"Edit"},{content:"X",label:"Save"},{content:"Y",label:"Game List"}]},De=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  `)),Ie=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
    display: flex;
    gap: ${e.size(2)};
    height: ${e.size(120)};
    animation: ${pe} 0.2s ease-out;
  `)),Ee=c.ZP.img((e=>c.iv`
      display: block;
      height: 100%;
      margin: 0 10px;
      width: ${e.theme.size(90)};
      min-width: ${e.theme.size(90)};
      max-width: ${e.theme.size(90)};
      border-radius: ${e.theme.radius.large};
      box-shadow: ${e.theme.shadow.high};
      border: 3px solid ${e.theme.colors.bg1};
    `)),Ge=c.ZP.div((()=>c.iv`
    display: flex;
    flex-direction: column;
  `)),Me=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
  `)),Re=c.ZP.div((({theme:e})=>c.iv`
    color: ${e.colors.text1};
    font-size: ${e.size(14)};
  `)),Fe=c.ZP.div((({theme:e})=>c.iv`
    color: ${e.colors.text3};
    font-size: ${e.fontSize.h4};
  `)),We=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  `)),Te=c.ZP.img((e=>c.iv`
      display: block;
      height: ${e.theme.size(60)};
      width: ${e.theme.size(50)};
      min-width: ${e.theme.size(50)};
      max-width: ${e.theme.size(50)};
      margin-right: ${e.theme.size(4)};
      background-color: transparent;
      border-radius: ${e.theme.radius.medium};
      box-shadow: ${e.theme.shadow.high};
      font-size: ${e.theme.size(10)};
      border: 3px solid ${e.theme.colors.bg2};
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
    `)),_e=e=>{const{active:t,gameList:i,gameIndex:r,onChangeGame:o,onStartGame:a,onActiveGame:s}=e,c=v(),l=(0,u.useMemo)((()=>i[r]),[r,i]);(0,u.useEffect)((()=>{c("ArrowLeft",(()=>o(r-1))),c("ArrowRight",(()=>o(r+1))),c("ButtonStart",(()=>a(r)))}),[c]);const d=(0,u.useMemo)((()=>i.map((e=>(0,n.jsx)(Te,{className:"cove-item",focus:r,src:e.cover},e.name)))),[i.length,r]);return(0,n.jsxs)(De,{children:[(0,n.jsxs)(Ie,{children:[(0,n.jsx)(Ee,{src:null==l?void 0:l.cover}),(0,n.jsxs)(Ge,{children:[(0,n.jsxs)(Me,{children:[(0,n.jsx)(Re,{children:null==l?void 0:l.name}),(0,n.jsx)(Fe,{children:null==l?void 0:l.publisher})]}),(0,n.jsx)(We,{children:d})]})]}),(0,n.jsx)(Le,{buttons:Ue.GameListBar})]})},He=c.ZP.div((()=>c.iv`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `)),Ne=c.ZP.div((e=>c.iv`
      height: 100%;
      display: grid;
      align-content: flex-start;
      justify-items: center;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: ${e.theme.size(6)};
      scroll-behavior: smooth;
      overflow-y: auto;
    `)),Xe=c.ZP.div((e=>c.iv`
    position: relative;
    width: ${e.theme.size(80)};
    height: ${e.theme.size(110)};
    background-color: transparent;
    border-radius: ${e.theme.radius.large};
    font-size: ${e.theme.size(10)};
    transition: opacity 0.2s;
    overflow: hidden;
    border: 2px solid transparent;
    ${e.focus&&`border: 2px solid ${e.theme.colors.gray};`}
    ${e.active&&!e.focus&&"opacity: 0.2;"};
    ${e.active&&e.focus&&"opacity: 1;"};

    ${qe} {
      ${e.active&&e.focus&&"opacity: 1;"};
    }
  `)),Ye=c.ZP.img((()=>c.iv`
    width: 100%;
    height: 100%;
  `)),qe=c.ZP.div((e=>c.iv`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0008;
    padding: ${e.theme.size(4)};
    backdrop-filter: blur(15px);
    transition: opacity 0.3s;
  `)),Je=c.ZP.div((e=>c.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.theme.size(2)};
  `)),Ve=c.ZP.h3((e=>c.iv`
    color: ${e.theme.colors.text1};
  `)),Ke=c.ZP.p((e=>c.iv`
    font-size: ${e.theme.fontSize.small};
    color: ${e.theme.colors.text3};
  `)),Qe=c.ZP.p((e=>c.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e.theme.size(2)};
    font-size: ${e.theme.fontSize.h3};
    width: 100%;
  `)),et=e=>{const{active:t,gameList:i,gameIndex:r,onChangeGame:o,onActiveGame:a,onStartGame:s}=e,c=v();(0,u.useEffect)((()=>{const e=(r+1)%4;c("ArrowLeft",(()=>1!==e&&o(r-1))),c("ArrowRight",(()=>0!==e&&o(r+1))),c("ArrowUp",(()=>o(r-4))),c("ArrowDown",(()=>o(r+4))),c("ButtonA",(()=>a(r)))}),[c]);const l=(0,u.useMemo)((()=>(e=>{const{active:t,gameList:i,gameIndex:r,onChangeGame:o,onActiveGame:a}=e;return i.map(((e,i)=>(0,n.jsxs)(Xe,Object.assign({active:t,ref:e=>e&&r===i&&e.scrollIntoView(),focus:r===i,onClick:()=>{i===r?a(i):o(i)}},{children:[(0,n.jsx)(Ye,{src:e.cover}),(0,n.jsxs)(qe,{children:[(0,n.jsxs)(Je,{children:[(0,n.jsx)(Ve,{children:e.name}),(0,n.jsx)(Ke,{children:e.publisher})]}),(0,n.jsxs)(Qe,{children:[(0,n.jsx)(ee,{type:"games"}),"Start"]})]})]}),e.name)))})(e)),[t,r,i]);return(0,n.jsxs)(He,{children:[(0,n.jsx)(Ne,{children:l}),(0,n.jsx)(Le,{buttons:Ue.GameListGrid})]})},tt=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
  `)),it=e=>{const{mode:t}=e,{focus:i,active:r,loading:o,setUI:a}=te(),[c,l]=O(),[d,h]=(0,u.useState)([]);return(0,u.useEffect)((()=>{const e=w.games.read();a("loading",!0),(e=>Oe(void 0,void 0,void 0,(function*(){for(const t of e)try{t.background=yield ke(t.background),t.cover=yield ke(t.cover)}catch(e){console.error(e);continue}return e})))(e).then(h).finally((()=>a("loading",!1)))}),[]),(0,u.useEffect)((()=>{var e;const t=null===(e=d[i])||void 0===e?void 0:e.background;l(Object.assign(Object.assign({},c),{imgBg:t}))}),[i,d]),(0,n.jsxs)(tt,{children:[(0,n.jsx)(s,Object.assign({check:"list"===t},{children:(0,n.jsx)(_e,{active:r,gameList:d,gameIndex:i,onChangeGame:e=>e<d.length&&a("focus",e),onActiveGame:()=>a("active",!r),onStartGame:()=>{}})})),(0,n.jsx)(s,Object.assign({check:"grid"===t},{children:(0,n.jsx)(et,{active:r,gameList:d,gameIndex:i,onChangeGame:e=>e<d.length&&a("focus",e),onActiveGame:()=>a("active",!r),onStartGame:()=>{}})})),o&&(0,n.jsx)(ye,{})]})},nt=c.ZP.div((({theme:e})=>c.iv`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.size(2)};
    width: 100%;
  `)),rt=c.ZP.div((({theme:e,bg:t,selected:i})=>c.iv`
    width: ${e.size(16)};
    height: ${e.size(16)};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.medium};
    background: ${t};
    ${i&&` border: 2px solid ${e.colors.white};`}
  `)),ot=Object.keys(q),at=e=>{const{active:t,value:i,onChange:r}=e,o=v(),{option:a,setUI:s}=te();return(0,u.useEffect)((()=>{t&&(o("ArrowLeft",(()=>s("option",a-1))),o("ArrowRight",(()=>a<11&&s("option",a+1))),o("ButtonA",(()=>r(ot[a]))))}),[o]),(0,n.jsx)(nt,{children:Object.values(q).map(((e,t)=>(0,n.jsx)(rt,{selected:a===t,bg:e},e)))})},st=(()=>{const e=window.require;return window.require=null,{isActive:!!e,resolvePath:t=>{try{return e("path").resolve(t)}catch(e){return console.error(e),""}},fetchHTML:t=>new Promise(((i,n)=>{try{e("http").get(t,(e=>{let t="";e.on("data",(e=>t+=e)),e.on("end",(()=>i(t)))}))}catch(e){n(e)}})),exec:t=>{try{return e("child_process").execSync(t).toString()}catch(e){return console.log(e),""}},listDir:t=>{try{const i=e("fs"),n=e("path");return i.readdirSync(n.resolve(t)).filter((e=>!e.startsWith(".")))}catch(e){return console.error(e),[]}}}})(),ct=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
  `)),lt=c.ZP.div((({theme:e})=>c.iv`
    padding: ${e.size(1)} 0;
    font-size: ${e.fontSize.small};
  `)),dt=c.ZP.div((({theme:e})=>c.iv`
    width: 100%;
  `)),ht=c.ZP.div((({theme:e,active:t})=>c.iv`
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${e.size(.5)} 0;
    opacity: ${t?1:.6};
  `)),ut=c.ZP.div((({theme:e})=>c.iv`
    margin-left: ${e.size(2)};
  `)),gt=e=>{const{active:t,onChange:i}=e,r=v(),{focus:o,setUI:a}=te(),[s,c]=(0,u.useState)("/"),[l,d]=(0,u.useState)([]);(0,u.useEffect)((()=>{t&&(r("ArrowUp",(()=>a("focus",o-1))),r("ArrowDown",(()=>a("focus",o+1))),r("ArrowRight",(()=>{c(st.resolvePath(s+"/"+l[o])),a("focus",0)})),r("ArrowLeft",(()=>{c(st.resolvePath(s+"/..")),a("focus",0)})),r("ButtonA",(()=>i(s+"/"+l[o]))))}),[r]),(0,u.useEffect)((()=>{const e=st.resolvePath(s),t=st.listDir(e);d(t)}),[s]);const h=(0,u.useMemo)((()=>l.map(((e,t)=>{const{isFile:i,isExe:r}=(e=>({isFile:e.includes("."),isExe:e.includes(".exe")}))(e);return(0,n.jsxs)(ht,Object.assign({active:o===t},{children:[(0,n.jsx)(ee,{type:i?"file":"folder"}),(0,n.jsx)(ut,{children:e})]}),e+t)}))),[l,o]);return(0,n.jsxs)(ct,{children:[(0,n.jsx)(lt,{children:s}),(0,n.jsx)(dt,{children:h})]})};var mt=function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};const ft=e=>mt(void 0,void 0,void 0,(function*(){const t=e.split(" ").join("+");return(yield st.fetchHTML(`http://www.bing.com/images/search?q=${t}`)).replace(/&quot;/g,'"').match(/"murl":".*?"/gm).join(",").match(/"https:\/\/.*?"/gm).map((e=>e.replace(/\"/g,"")))})),pt=c.ZP.div((({theme:e})=>c.iv`
    width: ${e.size(200)};
    max-width: ${e.size(200)};
    height: ${e.size(100)};
    max-height: ${e.size(100)};
    overflow: hidden;
    display: flex;
    justify-content: center;
  `)),xt=c.ZP.img((({theme:e})=>c.iv`
    max-width: 100%;
    max-height: 100%;
    border-radius: ${e.radius.large};
    box-shadow: ${e.shadow.high};
  `));const vt=e=>{const{active:t,value:i,onChange:r}=e,o=v(),{option:a,setUI:s}=te(),[c,l]=(0,u.useState)(""),[d,h]=(0,u.useState)([]),[g,m]=(0,u.useState)("");return(0,u.useEffect)((()=>{t&&(o("ArrowLeft",(()=>s("option",a-1))),o("ArrowRight",(()=>{a<d.length&&s("option",a+1)})))}),[o]),(0,u.useEffect)((()=>{var e,n,r,o;t&&i.length>=3&&i!==c&&(e=void 0,n=void 0,r=void 0,o=function*(){const e=yield(t=i,mt(void 0,void 0,void 0,(function*(){const e=`${t.toLowerCase()}`;return yield ft(e)})));var t;h(e),l(i)},new(r||(r=Promise))((function(t,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof r?i:new r((function(e){e(i)}))).then(a,s)}c((o=o.apply(e,n||[])).next())}))).catch(console.error)}),[t,i]),(0,u.useEffect)((()=>{r&&r(d[a]),Se(d[a]).then(m)}),[a,d.length]),(0,n.jsx)(pt,{children:(0,n.jsx)(xt,{src:g})})},bt=c.ZP.input((({theme:e})=>c.iv`
    width: 100%;
    padding: ${e.size(2)} ${e.size(1)};
    border: none;
    background-color: transparent;
    color: ${e.colors.text1};
    font-size: ${e.fontSize.h3};
    border-bottom: 2px solid ${e.colors.gray};
    text-transform: capitalize;
  `)),jt=e=>{const{value:t,onChange:i}=e;return(0,n.jsx)(bt,{autoFocus:!0,value:t,onChange:e=>i(e.target.value)})},wt=c.ZP.div((()=>c.iv``)),yt=c.ZP.div((({theme:e})=>c.iv`
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
    animation: ${pe} 0.3s ease-out;
  `)),$t=c.ZP.div((()=>c.iv`
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
  `)),zt=c.ZP.h3((({theme:e})=>c.iv`
    font-size: ${e.fontSize.h3};
    font-weight: bold;
  `)),Pt=e=>{const{type:t,active:i,title:r}=e;return(0,n.jsx)(s,Object.assign({check:i},{children:(0,n.jsx)(wt,{children:(0,n.jsx)($t,{children:(0,n.jsxs)(yt,{children:[(0,n.jsx)(zt,{children:r}),(0,n.jsx)(s,{check:"text"===t,true:(0,n.jsx)(jt,Object.assign({},e))}),(0,n.jsx)(s,{check:"img"===t,true:(0,n.jsx)(vt,Object.assign({},e))}),(0,n.jsx)(s,{check:"file"===t,true:(0,n.jsx)(gt,Object.assign({},e))}),(0,n.jsx)(s,{check:"color"===t,true:(0,n.jsx)(at,Object.assign({},e))})]})})})}))},Ot=c.ZP.div((({theme:e,active:t})=>c.iv`
    width: 75%;
    margin: 0 auto;
    padding: ${e.size(4)};
    margin-bottom: ${e.size(4)};
    color: ${e.colors.text3};
    background-color: ${e.colors.bg4};
    border-radius: ${e.radius.medium};
    transition: 0.5s;

    ${t&&c.iv`
      background-color: ${e.colors.bg2};
      color: ${e.colors.text1};
      ${Zt} {
        max-height: ${e.size(120)};
      }
    `}
  `)),St=c.ZP.div((({theme:e})=>c.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
  `)),kt=c.ZP.div((({theme:e})=>c.iv`
    font-size: ${e.fontSize.h4};
    font-weight: bold;
  `)),At=c.ZP.div((()=>c.iv`
    transition: 0.3s;
    width: 100%;
  `)),Zt=c.ZP.div((()=>c.iv`
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s;
  `)),Ct=e=>{const{active:t,title:i,value:r,children:o}=e;return(0,n.jsxs)(Ot,Object.assign({active:t},{children:[(0,n.jsxs)(St,{children:[(0,n.jsx)(kt,{children:i}),(0,n.jsx)(At,{children:null==r?void 0:r.substring(0,60)}),(0,n.jsx)(ee,{type:"edit",size:6})]}),(0,n.jsx)(Zt,{children:o})]}))},Bt=c.ZP.div((()=>c.iv`
    width: 100%;
    height: 100%;
  `)),Lt=c.ZP.h2((({theme:e})=>c.iv`
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: ${e.fontSize.h2};
    padding-bottom: ${e.size(2)};
    margin-bottom: ${e.size(8)};
    font-weight: bold;
    border-bottom: 3px solid ${e.colors.bg1};
  `)),Ut={name:"",description:"",cover:"",background:"",publisher:"",rate:"80",addedAt:"",year:"2023",hidden:!1,gamePath:"",gameFile:""},Dt=()=>{const e=v(),{active:t,focus:i,setUI:r}=te(),[o,a]=(0,u.useState)(Ut);return(0,u.useEffect)((()=>{e("ArrowUp",(()=>r("focus",i-1))),e("ArrowDown",(()=>r("focus",i+1))),e("ButtonA",(()=>r("active",!t))),e("ButtonX",(()=>w.games.create({gameInfo:o})))}),[e]),(0,n.jsxs)(Bt,{children:[(0,n.jsx)(Lt,{children:"Add New Game"}),(0,n.jsx)(Ct,Object.assign({active:0===i,title:"Title",value:o.name},{children:(0,n.jsx)(Pt,{title:"Game Title",type:"text",active:0===i&&t,value:o.name,onChange:e=>a(Object.assign(Object.assign({},o),{name:e}))})})),(0,n.jsx)(Ct,Object.assign({active:1===i,title:"Publisher",value:o.publisher},{children:(0,n.jsx)(Pt,{title:"Game Publisher",type:"text",active:1===i&&t,value:o.publisher,onChange:e=>a(Object.assign(Object.assign({},o),{publisher:e}))})})),(0,n.jsx)(Ct,Object.assign({active:2===i,title:"Cover",value:o.cover},{children:(0,n.jsx)(Pt,{title:"Game Cover",type:"img",active:2===i&&t,value:o.name+" box art",onChange:e=>a(Object.assign(Object.assign({},o),{cover:e}))})})),(0,n.jsx)(Ct,Object.assign({active:3===i,title:"Background",value:o.background},{children:(0,n.jsx)(Pt,{title:"Game Background",type:"img",active:3===i&&t,value:o.name+" background",onChange:e=>a(Object.assign(Object.assign({},o),{background:e}))})})),(0,n.jsx)(Ct,Object.assign({active:4===i,title:"Location",value:o.gamePath+o.gameFile},{children:(0,n.jsx)(Pt,{title:"Game Path",type:"file",active:4===i&&t,value:o.gamePath,onChange:e=>a(Object.assign(Object.assign({},o),{gameFile:e}))})})),(0,n.jsx)(Le,{buttons:Ue.GameDetailsForm})]})},It=()=>{const[e,t]=Z(),i=v();return(0,u.useEffect)((()=>{i("ButtonY",(()=>{t("games/add"===e?"games/list/bar":"games/add")})),i("ButtonX",(()=>{t("games/list/bar"===e?"games/list/grid":"games/list/bar")}))}),[i]),(0,n.jsxs)(ue,{children:[(0,n.jsx)(s,{check:"games/list/bar"===e,true:(0,n.jsx)(it,{mode:"list"})}),(0,n.jsx)(s,{check:"games/list/grid"===e,true:(0,n.jsx)(it,{mode:"grid"})}),(0,n.jsx)(s,{check:"games/add"===e,true:(0,n.jsx)(Dt,{})})]})},Et=()=>{const e=v(),[t,i]=(0,u.useState)(0);return(0,u.useEffect)((()=>{e("ArrowUp",(()=>t>0&&i(t-1))),e("ArrowDown",(()=>t<1&&i(t+1)))}),[e]),(0,n.jsx)(ue,{children:(0,n.jsx)(Ct,Object.assign({active:0===t,title:"Start up time",value:""},{children:(0,n.jsx)("div",{children:"Settings"})}))})},Gt=()=>{const e=v(),{active:t,focus:i,setUI:r}=te(),[o,a]=(0,u.useState)({});return(0,u.useEffect)((()=>{e("ArrowUp",(()=>r("focus",i-1))),e("ArrowDown",(()=>r("focus",i+1))),e("ButtonA",(()=>r("active",!t))),e("ButtonX",(()=>{}))}),[e]),(0,n.jsxs)(Bt,{children:[(0,n.jsx)(Lt,{children:"Theme Settings"}),(0,n.jsx)(Ct,Object.assign({active:0===i,title:"Title",value:""},{children:(0,n.jsx)(Pt,{title:"Game Title",type:"color",active:0===i&&t,value:"",onChange:e=>a(Object.assign(Object.assign({},o),{name:e}))})}))]})},Mt=()=>(0,n.jsx)(ue,{children:(0,n.jsx)(Gt,{})}),Rt=()=>{const[e]=Z(),[t]=O();return(0,n.jsxs)(c.f6,Object.assign({theme:Y},{children:[(0,n.jsx)(C,{}),(0,n.jsxs)(x,{children:[(0,n.jsx)(le,{}),(0,n.jsxs)(a.Z5,Object.assign({location:{pathname:"/"+e,hash:"",search:""}},{children:[(0,n.jsx)(a.AW,{path:"games/list/bar",element:(0,n.jsx)(It,{})}),(0,n.jsx)(a.AW,{path:"games/list/grid",element:(0,n.jsx)(It,{})}),(0,n.jsx)(a.AW,{path:"games/add",element:(0,n.jsx)(It,{})}),(0,n.jsx)(a.AW,{path:"apps",element:(0,n.jsx)(It,{})}),(0,n.jsx)(a.AW,{path:"music",element:(0,n.jsx)(It,{})}),(0,n.jsx)(a.AW,{path:"midia",element:(0,n.jsx)(It,{})}),(0,n.jsx)(a.AW,{path:"web",element:(0,n.jsx)(It,{})}),(0,n.jsx)(a.AW,{path:"theme",element:(0,n.jsx)(Mt,{})}),(0,n.jsx)(a.AW,{path:"controls",element:(0,n.jsx)(ge,{})}),(0,n.jsx)(a.AW,{path:"settings",element:(0,n.jsx)(Et,{})})]}))]}),(0,n.jsx)(h,{gradient:q[t.gradientBg],img:t.imgBg,layer:-2,blurBg:!e.includes("games/list/bar")})]}))};(0,r.s)(document.getElementById("root")).render((0,n.jsx)((()=>(0,n.jsx)(P,{children:(0,n.jsx)(A,{children:(0,n.jsx)(c.LC,Object.assign({enableVendorPrefixes:!0},{children:(0,n.jsx)(o.VK,{children:(0,n.jsx)(Rt,{})})}))})})),{}))},160:e=>{window,e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var n=window,r=/^image\//,o=/\.\w+$/,a={},s={file:null,quality:.8,convertSize:2048e3,loose:!0,redressOrientation:!0},c=function(e){return"function"==typeof e},l=function(e){return r.test(e)};function d(e){e=Object.assign({},s,e),this.options=e,this.file=e.file,this.image=null,this.ParsedOrientationInfo=null,this.init()}var h=d.prototype;for(var u in t.default=d,h.init=function(){var e=this,t=this.file,i=this.options;t&&l(t.type)?(l(i.mimeType)||(i.mimeType=t.type),a.file2Image(t,(function(n){c(e.beforeCompress)&&(e.image=n,t.width=n.naturalWidth,t.height=n.naturalHeight,e.beforeCompress(t)),"image/jpeg"===t.type&&i.redressOrientation?e.getParsedOrientationInfo((function(t){e.parsedOrientationInfo=t,e.rendCanvas()})):(e.parsedOrientationInfo={rotate:0,scaleX:1,scaleY:1},e.rendCanvas())}),e.error)):e.error("请上传图片文件!")},h.rendCanvas=function(){var e=this,t=this.options,i=this.image,n=this.getExpectedEdge(),r=n.dWidth,o=n.dHeight,s=n.width,c=n.height,l=a.image2Canvas(i,r,o,e.beforeDraw.bind(e),e.afterDraw.bind(e),s,c);a.canvas2Blob(l,(function(t){t&&(t.width=l.width,t.height=l.height),e.success(t)}),t.quality,t.mimeType)},h.beforeCompress=function(){c(this.options.beforeCompress)&&this.options.beforeCompress(this.file)},h.getExpectedEdge=function(){var e,t=this.image,i=this.parsedOrientationInfo.rotate,n=this.options,r=t.naturalWidth,o=t.naturalHeight,a=Math.abs(i)%180==90;a&&(e=o,o=r,r=e);var s=r/o,c=Math.max(n.maxWidth,0)||1/0,l=Math.max(n.maxHeight,0)||1/0,d=Math.max(n.minWidth,0)||0,h=Math.max(n.minHeight,0)||0,u=Math.max(n.width,0)||r,g=Math.max(n.height,0)||o;c<1/0&&l<1/0?l*s>c?l=c/s:c=l*s:c<1/0?l=c/s:l<1/0&&(c=l*s),d>0&&h>0?h*s>d?h=d/s:d=h*s:d>0?h=d/s:h>0&&(d=h*s),g*s>u?g=u/s:u=g*s;var m=u=Math.floor(Math.min(Math.max(u,d),c)),f=g=Math.floor(Math.min(Math.max(g,h),l));return a&&(e=f,f=m,m=e),{dWidth:m,dHeight:f,width:u,height:g}},h.getParsedOrientationInfo=function(e){var t=this;this.getOrientation((function(i){c(e)&&e(t.parseOrientation(i))}))},h.getOrientation=function(e){var t=this;a.file2ArrayBuffer(this.file,(function(i){c(e)&&e(t.resetAndGetOrientation(i))}))},h.resetAndGetOrientation=function(e){var t,i=new DataView(e);try{var n,r,o,s;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var c=i.byteLength,l=2;l+1<c;){if(255===i.getUint8(l)&&225===i.getUint8(l+1)){r=l;break}l+=1}if(r){var d=r+4,h=r+10;if("Exif"===a.getStringFromCharCode(i,d,4)){var u=i.getUint16(h);if(((n=18761===u)||19789===u)&&42===i.getUint16(h+2,n)){var g=i.getUint32(h+4,n);g>=8&&(o=h+g)}}}if(o)for(c=i.getUint16(o,n),s=0;s<c;s+=1)if(l=o+12*s+2,274===i.getUint16(l,n)){l+=8,t=i.getUint16(l,n),i.setUint16(l,1,n);break}}catch(e){console.error(e),t=1}return t},h.parseOrientation=function(e){var t=0,i=1,n=1;switch(e){case 2:i=-1;break;case 3:t=-180;break;case 4:n=-1;break;case 5:t=90,n=-1;break;case 6:t=90;break;case 7:t=90,i=-1;break;case 8:t=-90}return{rotate:t,scaleX:i,scaleY:n}},h.beforeDraw=function(e,t){var i=this.parsedOrientationInfo,n=i.rotate,r=i.scaleX,o=i.scaleY,a=this.file,s=this.options,l="transparent",d=t.width,h=t.height;switch(a.size>s.convertSize&&"image/png"===s.mimeType&&(l="#fff",s.mimeType="image/jpeg"),e.fillStyle=l,e.fillRect(0,0,d,h),c(s.beforeDraw)&&s.beforeDraw.call(this,e,t),e.save(),n){case 90:e.translate(d,0);break;case-90:e.translate(0,h);break;case-180:e.translate(d,h)}e.rotate(n*Math.PI/180),e.scale(r,o)},h.afterDraw=function(e,t){var i=this.options;c(i.afterDraw)&&i.afterDraw.call(this,e,t)},h.error=function(e){var t=this.options;if(!c(t.error))throw new Error(e);t.error.call(this,e)},h.success=function(e){var t,i,n=this.options,r=this.file,a=this.image,s=this.getExpectedEdge(),d=a.naturalHeight,h=a.naturalWidth;if(e&&e.size)if(!n.loose&&e.size>r.size&&!(s.width>h||s.height>d))console.warn("当前设置的是非宽松模式，压缩结果大于源图片，输出源图片"),e=r;else{var u=new Date;e.lastModified=u.getTime(),e.lastModifiedDate=u,e.name=r.name,e.name&&e.type!==r.type&&(e.name=e.name.replace(o,(t=e.type,"jpeg"===(i=l(t)?t.substr(6):"")&&(i="jpg"),"."+i)))}else console.warn("图片压缩出了点意外，输出源图片"),e=r;c(n.success)&&n.success.call(this,e)},a.file2DataUrl=function(e,t,i){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){c(i)&&i("读取文件失败！")},n.readAsDataURL(e)},a.file2ArrayBuffer=function(e,t,i){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.onerror=function(){c(i)&&i("读取文件失败！")},n.readAsArrayBuffer(e)},a.getStringFromCharCode=function(e,t,i){var n,r="";for(i+=t,n=t;n<i;n+=1)r+=String.fromCharCode(e.getUint8(n));return r},a.file2Image=function(e,t,i){var r=new Image,o=n.URL||n.webkitURL;if(n.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(n.navigator.userAgent)&&(r.crossOrigin="anonymous"),r.alt=e.name,r.onerror=function(){c(i)&&i("图片加载错误！")},o){var a=o.createObjectURL(e);r.onload=function(){t(r),o.revokeObjectURL(a)},r.src=a}else this.file2DataUrl(e,(function(e){r.onload=function(){t(r)},r.src=e}),i)},a.url2Image=function(e,t,i){var n=new Image;n.src=e,n.onload=function(){t(n)},n.onerror=function(){c(i)&&i("图片加载错误！")}},a.image2Canvas=function(e,t,i,n,r,o,a){var s=document.createElement("canvas"),l=s.getContext("2d");return s.width=o||e.naturalWidth,s.height=a||e.naturalHeight,c(n)&&n(l,s),l.save(),l.drawImage(e,0,0,t,i),l.restore(),c(r)&&r(l,s),s},a.canvas2DataUrl=function(e,t,i){return e.toDataURL(i||"image/jpeg",t)},a.dataUrl2Image=function(e,t,i){var n=new Image;n.onload=function(){t(n)},n.error=function(){c(i)&&i("图片加载错误！")},n.src=e},a.dataUrl2Blob=function(e,t){for(var i=e.split(",")[1],n=e.match(/^data:(.*?)(;base64)?,/)[1],r=atob(i),o=i.length,a=new Uint8Array(o),s=0;s<o;s++)a[s]=r.charCodeAt(s);return new Blob([a],{type:t||n})},a.blob2DataUrl=function(e,t,i){this.file2DataUrl(e,t,i)},a.blob2Image=function(e,t,i){this.file2Image(e,t,i)},a.canvas2Blob=function(e,t,i,n){var r=this;HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,i){var n=this.toDataURL(t,i);e(r.dataUrl2Blob(n))}}),e.toBlob((function(e){t(e)}),n||"image/jpeg",i||.8)},a.upload=function(e,t,i){var n=new XMLHttpRequest,r=new FormData;r.append("file",t),n.onreadystatechange=function(){if(4!==n.readyState||200!==n.status)throw new Error(n);i&&i(n.responseText)},n.open("POST",e,!0),n.send(r)},a)a.hasOwnProperty(u)&&(d[u]=a[u])}]).default}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,e=[],o.O=(t,i,n,r)=>{if(!i){var a=1/0;for(d=0;d<e.length;d++){for(var[i,n,r]=e[d],s=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](i[c])))?i.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,n,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var a={};t=t||[null,i({}),i([]),i(i)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=i(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,o.d(r,a),r},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[a,s,c]=i,l=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var d=c(o)}for(t&&t(i);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},i=self.webpackChunkapp_desktop=self.webpackChunkapp_desktop||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),o.nc=void 0;var a=o.O(void 0,[977],(()=>o(803)));a=o.O(a)})();