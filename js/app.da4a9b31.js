(function(t){function e(e){for(var r,o,u=e[0],s=e[1],l=e[2],f=0,d=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5359:function(t,e,n){"use strict";n("8d65")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column vh-100"},[n("main",[n("main-area")],1),n("footer",{staticClass:"mt-auto"},[n("footer-area")],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("h1",{staticClass:"text-primary mt-4"},[t._v("OOP Agents Visualizer")]),n("help-box"),n("read-files-box"),n("input-viewer"),n("map-canvas")],1)},u=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.helpmodal",modifiers:{helpmodal:!0}}],attrs:{variant:"light"}},[n("b-icon-exclamation-triangle"),t._v(" 注意事項と使い方")],1),n("b-modal",{attrs:{id:"helpmodal",title:"注意事項と使い方",size:"lg","ok-only":""}},[n("h5",[t._v("注意事項")]),n("ul",[n("li",[t._v("本ツールは非公式かつ利用は自己責任です。ツールの不具合で成績が悪くなっても責任は取れません")]),n("li",[t._v("もし不具合を見つけた場合、フッターのリンクからGitHubでIssueを開いていただけると幸いです")]),n("li",[t._v("例外処理は未実装のため、無効なファイルなどを選択した場合、特にエラーは出ませんが操作不能になります")]),n("li",[t._v("本ツールの処理はクライアントで完結しており、使用したファイルが外部に送信されることはありません")]),n("li",[t._v("本ツールは予告なく公開終了する可能性があります")]),n("li",[t._v("拡張実装には対応しておりません")])]),n("h5",[t._v("使い方")]),n("ol",[n("li",[t._v("入力ファイルと出力ファイルを選択し、「読み込み」ボタンを押してください")]),n("li",[t._v(" 各自のプログラムの動作を検証する場合、出力を"),n("a",{attrs:{href:"https://qiita.com/progrhyme/items/e99be732c2e62d4a7641",target:"_blank",rel:"noopener"}},[t._v("ファイルにリダイレクト")]),t._v("すると良いでしょう ")]),n("li",[t._v("キャンバスに格子状のマップが表示されていることを確認してください")]),n("li",[t._v("各エージェントの色が見にくいときは、再度「読み込む」ボタンを押してください")]),n("li",[t._v("「Next」ボタンで次のサイクルに、「Prev」ボタンで前のサイクルに遷移します")]),n("li",[t._v("エージェントの現在の状態が円の中に数字で表示されます。向きは矢印で表示されます")]),n("li",[t._v("表示が重なっている場合があるので注意してください(気が向いたら修正予定)")])])])],1)},l=[],c=n("2877"),f={},d=Object(c["a"])(f,s,l,!1,null,null,null),v=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3"},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.loadFiles(e)}}},[n("b-form-row",[n("b-col",{attrs:{cols:"12",md:"6"}},[n("b-form-group",{attrs:{label:"入力ファイル","label-for":"form_inputFile"}},[n("b-form-file",{attrs:{state:Boolean(t.inputFile),id:"form_inputFile",placeholder:"ファイルを選択 or ドラッグ&ドロップ","drop-placeholder":"ドラッグ&ドロップしてください",required:""},model:{value:t.inputFile,callback:function(e){t.inputFile=e},expression:"inputFile"}})],1)],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("b-form-group",{attrs:{label:"出力ファイル","label-for":"form_outputFile"}},[n("b-form-file",{attrs:{state:Boolean(t.outputFile),id:"form_outputFile",placeholder:"ファイルを選択 or ドラッグ&ドロップ","drop-placeholder":"ドラッグ&ドロップしてください",required:""},model:{value:t.outputFile,callback:function(e){t.outputFile=e},expression:"outputFile"}})],1)],1),n("b-col",{attrs:{cols:"12"}},[n("b-button",{attrs:{type:"submit",variant:"primary"}},[n("b-icon-arrow-down-circle"),t._v(" 読み込む")],1)],1)],1)],1)],1)},m=[],_=(n("96cf"),n("1da1")),b={data:function(){return{inputFile:null,outputFile:null}},methods:{loadFiles:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("resetCycle");case 2:return e.next=4,t.parseInputFile();case 4:return e.next=6,t.parseOutputFile();case 6:case"end":return e.stop()}}),e)})))()},parseInputFile:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.inputFile.text();case 2:return n=e.sent,e.next=5,t.$store.dispatch("input/scan",n);case 5:case"end":return e.stop()}}),e)})))()},parseOutputFile:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.outputFile.text();case 2:return n=e.sent,r=t.$store.state.input.T,a=t.$store.state.input.A,e.next=7,t.$store.dispatch("output/scan",{text:n,T:r,A:a});case 7:case"end":return e.stop()}}),e)})))()}}},h=b,g=Object(c["a"])(h,p,m,!1,null,null,null),x=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-secondary mt-4"},[t._v("入力")]),t.$store.state.input.S?n("div",[n("dl",[n("dt",[t._v("(M, N) 最大座標")]),n("dd",[t._v("("+t._s(t.$store.state.input.M)+", "+t._s(t.$store.state.input.N)+")")]),n("dt",[t._v("A エージェント数")]),n("dd",[t._v(t._s(t.$store.state.input.A))]),n("dt",[t._v("T サイクル数")]),n("dd",[t._v(t._s(t.$store.state.input.T))]),n("dt",[t._v("I 仕様7での状態更新値")]),n("dd",[t._v(t._s(t.$store.state.input.I))]),n("dt",[t._v("S 仕様7の選択方法")]),n("dd",[t._v(t._s(t.$store.state.input.S))]),n("dt",[t._v("P 仕様7のパラメータ")]),null!==t.$store.state.input.PNames?n("dd",t._l(t.$store.state.input.PNames,(function(e){return n("span",{key:e,staticClass:"mr-3"},[t._v(t._s(e))])})),0):t._e(),null!==t.$store.state.input.PCoordinates?n("dd",t._l(t.$store.state.input.PCoordinates,(function(e){return n("span",{key:e.x+"_"+e.y,staticClass:"mr-3"},[t._v("("+t._s(e.x)+", "+t._s(e.y)+")")])})),0):t._e(),n("dt",[t._v("agents")]),n("dd",[n("table",{staticClass:"table"},[n("tbody",[t._m(0),t._l(t.$store.state.input.agents,(function(e){return n("tr",{key:e.name},[n("td",{style:"color: "+e.color+";"},[t._v(t._s(e.name))]),n("td",[t._v("("+t._s(e.location.x)+", "+t._s(e.location.y)+")")]),n("td",[t._v(t._s(e.i))]),n("td",[t._v(t._s(e.s))]),n("td",[t._v(t._s(e.t))]),n("td",[t._v(t._s(e.p))]),n("td",t._l(e.targets,(function(e){return n("span",{key:e.x+"_"+e.y},[t._v("("+t._s(e.x)+", "+t._s(e.y)+")")])})),0)])}))],2)])])])]):t._e()])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("n")]),n("th",[t._v("(x, y)")]),n("th",[t._v("i")]),n("th",[t._v("s")]),n("th",[t._v("t")]),n("th",[t._v("p")]),n("th",[t._v("...")])])}],N={},w=Object(c["a"])(N,y,C,!1,null,null,null),$=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.input.M?n("div",[n("h2",{staticClass:"text-secondary mt-4"},[t._v("出力の視覚化")]),n("v-stage",{attrs:{config:t.configKonva}},[n("v-layer",[t._l(t.$store.state.input.M+1,(function(e){return n("v-line",{key:"xLine_"+e,attrs:{config:t.xLineConfig(e)}})})),t._l(t.$store.state.input.N+1,(function(e){return n("v-line",{key:"yLine_"+e,attrs:{config:t.yLineConfig(e)}})})),t._l(t.agents,(function(e){return t._l(e.targets,(function(r){return n("v-circle",{key:"target_"+e.name+"_"+r.x+"_"+r.y,attrs:{config:t.targetConfig(e,r)}})}))})),t._l(t.agents,(function(e){return n("v-circle",{key:"circle_"+e.name,attrs:{config:t.agentCircleConfig(e)}})})),t._l(t.agents,(function(e){return n("v-text",{key:"text_"+e.name,attrs:{config:t.agentTextConfig(e)}})})),t._l(t.agents,(function(e){return[e.d?n("v-text",{key:"arrow_"+e.name,attrs:{config:t.agentArrowConfig(e)}}):t._e()]}))],2)],1),n("div",{staticClass:"text-center mb-3"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"dark",disabled:t.$store.state.currentCycle<=0},on:{click:t.goPrev}},[n("b-icon-caret-left-square"),t._v(" Prev")],1),n("b-button",{attrs:{variant:"info",disabled:t.$store.state.currentCycle>=t.$store.state.input.T},on:{click:t.goNext}},[t._v("Next "),n("b-icon-caret-right-square")],1),n("br"),t._v(" Cycle "+t._s(t.$store.state.currentCycle)+" / "+t._s(t.$store.state.input.T)+" ")],1)],1):t._e()},P=[],A=60,O=50,F={computed:{agents:function(){return this.$store.getters.currentAgents},canvasWidth:function(){return this.$store.state.input.M?this.$store.state.input.M*O+2*A:0},canvasHeight:function(){return this.$store.state.input.N?this.$store.state.input.N*O+2*A:0},configKonva:function(){return{width:this.canvasWidth,height:this.canvasHeight}},xLineConfig:function(){return function(t){return t--,{points:[t*O+A,A,t*O+A,this.canvasHeight-A],stroke:"#cccccc"}}},yLineConfig:function(){return function(t){return t--,{points:[A,t*O+A,this.canvasWidth-A,t*O+A],stroke:"#cccccc"}}},targetConfig:function(){return function(t,e){return{x:A+e.x*O,y:A+e.y*O,radius:4,stroke:t.color}}},agentCircleConfig:function(){return function(t){return{x:A+t.location.x*O,y:A+t.location.y*O,radius:10,fill:t.color}}},agentTextConfig:function(){return function(t){return{x:A+t.location.x*O-10,y:A+t.location.y*O-10,width:20,height:20,fontFamily:"Noto Sans JP",fontSize:10,align:"center",verticalAlign:"middle",text:t.i,fill:"white"}}},agentArrowConfig:function(){return function(t){var e,n=-10,r=-10;switch(t.d){case"N":r-=20,e="↑";break;case"S":r+=20,e="↓";break;case"E":n+=20,e="→";break;case"W":n-=20,e="←";break}return{x:A+t.location.x*O+n,y:A+t.location.y*O+r,text:e,width:20,height:20,fontFamily:"Noto Sans JP",fontSize:10,fontStyle:"bold",align:"center",verticalAlign:"middle",fill:t.color}}}},methods:{goNext:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("nextCycle");case 2:case"end":return e.stop()}}),e)})))()},goPrev:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("prevCycle");case 2:case"end":return e.stop()}}),e)})))()}}},j=F,S=(n("5359"),Object(c["a"])(j,k,P,!1,null,null,null)),T=S.exports,M={components:{HelpBox:v,ReadFilesBox:x,InputViewer:$,MapCanvas:T}},R=M,E=Object(c["a"])(R,o,u,!1,null,null,null),I=E.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light py-3"},[n("div",{staticClass:"text-center"},[n("small",[t._v("© 2021 ASAKURA Kazuki")]),n("br"),n("small",[n("a",{attrs:{href:"https://github.com/Arthur1/agents-visualizer",target:"_blank",rel:"noopener"}},[t._v("https://github.com/Arthur1/agents-visualizer")])])])])}],q={},H=Object(c["a"])(q,z,L,!1,null,null,null),B=H.exports,J={name:"App",components:{MainArea:I,FooterArea:B}},K=J,W=Object(c["a"])(K,a,i,!1,null,null,null),V=W.exports,D=n("5f5b"),G=n("b1e0"),U=n("7591"),Q=n.n(U),X=(n("d81d"),n("b0c0"),n("2f62")),Y=(n("4de4"),n("a9e3"),n("d3b7"),n("ac1f"),n("1276"),n("ddb0"),n("fd9b")),Z=n.n(Y),tt={namespaced:!0,state:{M:null,N:null,A:null,T:null,I:null,agents:null,S:null,PNames:null,PCoordinates:null},mutations:{setM:function(t,e){t.M=e},setN:function(t,e){t.N=e},setA:function(t,e){t.A=e},setT:function(t,e){t.T=e},setI:function(t,e){t.I=e},initAgents:function(t){t.agents=[]},addAgent:function(t,e){t.agents.push(e)},setS:function(t,e){t.S=e},initPNames:function(t){t.PNames=[]},addPNames:function(t,e){t.PNames.push(e)},initPCoordinates:function(t){t.PCoordinates=[]},addPCoordinates:function(t,e){t.PCoordinates.push(e)}},actions:{scan:function(t,e){var n=t.commit,r=t.state,a=e.split(/\s+/).filter((function(t){return t})).values();n("setM",Number(a.next().value)),n("setN",Number(a.next().value)),n("setA",Number(a.next().value)),n("setT",Number(a.next().value)),n("setI",Number(a.next().value)),n("initAgents");for(var i=0;i<r.A;i++){for(var o={name:a.next().value,location:{x:Number(a.next().value),y:Number(a.next().value)},i:Number(a.next().value),s:Number(a.next().value),t:Number(a.next().value),p:Number(a.next().value),targets:[],color:Z()({luminosity:"dark"})},u=0;u<o.p;u++)o.targets.push({x:Number(a.next().value),y:Number(a.next().value)});n("addAgent",o)}switch(n("setS",Number(a.next().value)),r.S){case 1:n("initPNames");while(1){var s=a.next();if(s.done)break;n("addPNames",s.value)}break;case 2:n("initPCoordinates");while(1){var l=a.next();if(l.done)break;n("addPCoordinates",{x:Number(l.value),y:Number(a.next().value)})}break}}}},et={namespaced:!0,state:{cycles:null},mutations:{initCycles:function(t){t.cycles=[]},addCycle:function(t,e){t.cycles.push(e)}},actions:{scan:function(t,e){var n=t.commit,r=e.text.split(/\s+/).filter((function(t){return t})).values();n("initCycles");for(var a=0;a<e.T;a++){r.next();for(var i={id:Number(r.next().value),agents:{}},o=0;o<e.A;o++){var u={name:r.next().value,location:{x:Number(r.next().value),y:Number(r.next().value)},i:Number(r.next().value),d:r.next().value};i.agents[u.name]=u}n("addCycle",i)}}}};r["default"].use(X["a"]);var nt=new X["a"].Store({modules:{input:tt,output:et},state:{currentCycle:0},mutations:{incrementCurrentCycle:function(t){t.currentCycle++},decrimentCurrentCycle:function(t){t.currentCycle--},resetCurrentCycle:function(t){t.currentCycle=0}},actions:{resetCycle:function(t){var e=t.commit;e("resetCurrentCycle")},nextCycle:function(t){var e=t.state,n=t.commit;e.currentCycle<e.input.T&&n("incrementCurrentCycle")},prevCycle:function(t){var e=t.state,n=t.commit;e.currentCycle>0&&n("decrimentCurrentCycle")}},getters:{currentAgents:function(t){return null===t.input.agents?[]:0===t.currentCycle?t.input.agents:t.input.agents.map((function(e){var n=t.output.cycles[t.currentCycle-1].agents[e.name];return{name:e.name,color:e.color,targets:e.targets,location:n.location,i:n.i,d:n.d}}))}}}),rt=nt;n("7e7d");r["default"].config.productionTip=!1,r["default"].use(Q.a),r["default"].use(D["a"]),r["default"].use(G["a"]),new r["default"]({render:function(t){return t(V)},store:rt}).$mount("#app")},"7e7d":function(t,e,n){},"8d65":function(t,e,n){}});
//# sourceMappingURL=app.da4a9b31.js.map