(function(t){function n(n){for(var i,r,o=n[0],c=n[1],u=n[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(n);while(p.length)p.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,o=1;o<e.length;o++){var c=e[o];0!==a[c]&&(i=!1)}i&&(s.splice(n--,1),t=r(r.s=e[0]))}return t}var i={},a={app:0},s=[];function r(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0b39":function(t,n,e){"use strict";var i=e("2279"),a=e.n(i);a.a},1490:function(t,n){(function(){for(var t=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var e=(new Date).getTime(),i=Math.max(0,16-(e-t)),a=window.setTimeout(function(){n(e+i)},i);return t=e+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})})()},2279:function(t,n,e){},2913:function(t,n,e){"use strict";var i=e("5df9"),a=e.n(i);a.a},"2b70":function(t,n,e){},"322c":function(t,n,e){t.exports=e.p+"img/seal.dcbfcd04.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var i=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wedding"},[e("Editor")],1)},s=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"editor",staticClass:"wedding-editor",on:{touchstart:t.onTouchstart,touchend:t.onTouchend}},[t._m(0),e("p",{staticClass:"code"},[t._v("\n    Last login:\n    "),e("span",[t._v(t._s(t.startDate))]),t._v("on Earth\n  ")]),e("pre",[t._v("    "),e("code",{domProps:{innerHTML:t._s(t.highlightedCode)}}),t._v("\n  ")]),!t.canStart&&!t.hasClosed||t.canOpen?t._e():e("div",{staticClass:"editor-open",on:{click:function(n){t.canOpen=!0}}},[e("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}}),e("line",{attrs:{x1:"9",y1:"3",x2:"9",y2:"21"}})])]),e("Executions",{attrs:{canExecute:t.canExecute},on:{onUpdating:t.scrollToBottom,onFinish:function(n){t.canOpen=!0}}}),e("invitation",{attrs:{canOpen:t.canOpen},on:{onClose:function(n){t.canOpen=!1,t.hasClosed=!0},sendBarrage:t.onAfterSending}}),e("Barrage",{attrs:{wish:t.wish,canStart:t.canStart}}),e("audio",{ref:"music-bgm",staticStyle:{display:"none"},attrs:{autoplay:"",src:"https://huiyuanxitong.oss-cn-hangzhou.aliyuncs.com/temp/zmdqd.mp3"}}),t.isPause?e("img",{staticClass:"music-button",attrs:{src:"https://huiyuanxitong.oss-cn-hangzhou.aliyuncs.com/temp/music-off.png"},on:{click:t.musicPlay}}):e("img",{staticClass:"music-button animate__animated animate__heartBeat",attrs:{src:"https://huiyuanxitong.oss-cn-hangzhou.aliyuncs.com/temp/music-on.png"},on:{click:t.musicPlay}})],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"editor-header"},[e("a",{attrs:{href:"javascript:;"}}),e("a",{staticClass:"minimum",attrs:{href:"javascript:;"}}),e("a",{staticClass:"maximum",attrs:{href:"javascript:;"}})])}],c=e("18a0"),u=e.n(c),l=e("bc3a"),d=e.n(l),p=e("c197"),f=e.n(p),m=(e("fa97"),e("1490"),{code:"\n// 我们挑个好日子结婚吧\n// emmm ... 好多话想说\n// 长按可以快进哦\nconst { 😆, 🤗 } = 🌎;\n😆.say('从菁菁校园到浮华社会');\n😆.say('从年少青春到而立之年');\n😆.say('感谢每一个平凡的日子有不平凡的陪伴');\n😆.say('愿未来琴瑟在御，岁月静好');\n🤗.response('❤️❤️❤️');\n🌎.say('我们宴设 2023年5月28日 午宴12:00');\n🌎.say('在 宝龙酒店吉祥如意厅');\nUtils.marry(😆,🤗);\nUtils.generateInvitation(😆,🤗);\n",executions:[{name:"初始化",time:"",duration:0,visible:!1},{name:"解压中",time:"",duration:0,visible:!1},{name:"组装中",time:"",duration:0,visible:!1},{name:"打包中",time:"",duration:0,visible:!1},{name:"微笑🙂",time:"",duration:0,visible:!1},{name:"大笑😄",time:"",duration:0,visible:!1},{name:"编译中...",time:"",visible:!1}],barrages:["66666666","愿你美梦成真","你的邀请函真是美","人美心更美","你是最棒的","哇哇哇","还差女朋友吗","今晚翻你牌","看朕给你打下的江山","你写代码老快了","你的代码真是棒","😗 😙 😚 😋 ","只要代码写得好，单身永远跑不了"]}),h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"executions"},[t._l(t.executions,function(n,i){return e("p",{directives:[{name:"show",rawName:"v-show",value:n.visible,expression:"execution.visible"}],key:i,staticClass:"code"},[e("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),e("span",{staticClass:"time"},[t._v(t._s(n.time))]),t._v("]\n    "),e("span",{staticClass:"task"},[t._v(t._s(n.name))]),void 0!==n.duration?e("span",{staticClass:"duration"},[t._v(t._s(n.duration)+" ms")]):t._e()])}),e("p",{directives:[{name:"show",rawName:"v-show",value:t.isProcessed,expression:"isProcessed"}],staticClass:"code"},[e("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    "+t._s(t.progressBarText)+"\n    "),e("span",{staticClass:"percentage"},[t._v(t._s(t.percentage)+"%")])]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.endExecution.visible,expression:"endExecution.visible"}],staticClass:"code"},[e("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),e("span",{staticClass:"time"},[t._v(t._s(t.endExecution.time))]),t._v("]\n    "),e("span",{staticClass:"task"},[t._v(t._s(t.endExecution.name))])])],2)},v=[],g=(e("a481"),e("ac4d"),e("8a81"),e("ac6a"),e("96cf"),e("1da1")),b=(e("28a5"),{name:"Executions",props:["canExecute"],data:function(){return{executions:m.executions,isProcessed:!1,isFinished:!1,progressBarText:"--------------------------",endExecution:{name:"打开中...",time:"",visible:!1}}},computed:{percentage:function(){var t=this.progressBarText.split("").filter(function(t){return"#"===t}).length,n=this.progressBarText.length;return Math.floor(100*t/n)}},watch:{canExecute:function(t){!0===t&&this.runExecutions()}},updated:function(){this.$emit("onUpdating")},methods:{runExecutions:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var n,e,i,a,s,r,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=!0,e=!1,i=void 0,t.prev=3,a=this.executions[Symbol.iterator]();case 5:if(n=(s=a.next()).done){t.next=12;break}return r=s.value,t.next=9,this.progressivelyRun(r);case 9:n=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](3),e=!0,i=t.t0;case 18:t.prev=18,t.prev=19,n||null==a.return||a.return();case 21:if(t.prev=21,!e){t.next=24;break}throw i;case 24:return t.finish(21);case 25:return t.finish(18);case 26:return t.next=28,this.successProcessing(1e3);case 28:return t.next=30,this.progressivelyRun(this.endExecution).then(function(){setTimeout(function(){o.isFinished=!0,o.$emit("onFinish")},500)});case 30:case"end":return t.stop()}},t,this,[[3,14,18,26],[19,,21,25]])}));return function(){return t.apply(this,arguments)}}(),progressivelyRun:function(t,n){return new Promise(function(e){var i=new Date,a=n||50*Math.random()+250,s=function(){t.time=i.toLocaleTimeString(),t.duration=void 0!==t.duration?a.toFixed(2):void 0,t.visible=!0,e()};setTimeout(s,a)})},successProcessing:function(t){var n=this;return new Promise(function(e){var i,a=null,s=0;n.isProcessed=!0;var r=function r(o){var c;null===a&&(a=o),c=o-a,s%3===0&&(n.progressBarText=n.progressBarText.replace("-","#")),s++,c<t?i=requestAnimationFrame(r):(e(),n.progressBarText=n.progressBarText.replace(/-/g,"#"),cancelAnimationFrame(i))};i=requestAnimationFrame(r)})}}}),w=b,x=(e("6af3"),e("2877")),_=Object(x["a"])(w,h,v,!1,null,null,null);_.options.__file="Executions.vue";var y=_.exports,C=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"wedding-invitation",class:{"invitation-bounce":t.canOpen}},[i("div",{staticClass:"invitation-container",class:{"invitation-down":t.isOpening}},[i("div",{staticClass:"invitation-cover"},[i("div",{staticClass:"cover-content",class:{"invitation-up":t.isOpening}},[t._m(0)]),i("div",{staticClass:"cover-inside-left",class:{opening:t.isOpening}}),i("div",{staticClass:"cover-inside-right",class:{opening:t.isOpening}}),i("img",{staticClass:"cover-inside-seal",class:{"invitation-flight":t.isOpening},attrs:{src:e("322c")},on:{click:t.openInvitation}})])])])},O=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-inside"},[e("img",{staticClass:"content-inside-photo",attrs:{src:"https://dlz734.bvimg.com/20333/a5cff0f7d0264ae2.png"}}),e("img",{staticClass:"content-inside-photo",attrs:{src:"https://dlz734.bvimg.com/20333/4032f09042b94c39.png"}}),e("img",{staticClass:"content-inside-photo",attrs:{src:"https://dlz734.bvimg.com/20333/3a10fb7c78bd0475.png"}}),e("p",[t._v("我们结婚啦！")]),e("p",[e("b",[t._v("周钰致 & 张雯玉")])]),e("p",[t._v("时间：2023年5月28日 午宴12:00")]),e("p",[t._v("地点："),e("b",[t._v("宝龙酒店吉祥如意厅")])]),e("div",{staticClass:"content-inside-bless"},[e("div")])])}],T={props:["canOpen"],data:function(){return{isOpening:!1,wish:"",isFocused:!1,hasEntered:!1}},methods:{openInvitation:function(){this.isOpening=!0},closeInvitation:function(){var t=this;this.isOpening=!1,setTimeout(function(){t.$emit("onClose")},660)},sendBarrage:function(){var t=this;this.$nextTick(function(){t.hasEntered=!0,t.wish&&(t.isOpening=!1,t.$refs.wishInput.blur(),setTimeout(function(){t.$emit("sendBarrage",t.wish)},660))})}}},S=T,k=(e("bddb"),Object(x["a"])(S,C,O,!1,null,null,null));k.options.__file="Invitation.vue";var E=k.exports,F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"barrage",staticClass:"wedding-barrage",style:{opacity:t.canStart?1:0}},[e("div",{domProps:{innerHTML:t._s(t.codeInStyleTag)}}),e("p",{ref:"barrageFirst",staticClass:"code barrage-0",style:{transform:"translate("+t.initialOffset+"px)",top:"10px"}},[e("span",{staticClass:"mine"},[t._v(t._s(t.wish))]),t._l(t.filterBarrage(t.barrages,0),function(n,i){return e("span",{key:i},[t._v(t._s(n))])})],2),e("p",{ref:"barrageSecond",staticClass:"code barrage-1",style:{transform:"translate("+t.initialOffset+"px)",top:"40px"}},t._l(t.filterBarrage(t.barrages,1),function(n,i){return e("span",{key:i},[t._v(t._s(n))])})),e("p",{ref:"barrageThird",staticClass:"code barrage-2",style:{transform:"translate("+t.initialOffset+"px)",top:"70px"}},t._l(t.filterBarrage(t.barrages,2),function(n,i){return e("span",{key:i},[t._v(t._s(n))])})),e("p",{ref:"barrageFourth",staticClass:"code barrage-3",style:{transform:"translate("+t.initialOffset+"px)",top:"100px"}},t._l(t.filterBarrage(t.barrages,3),function(n,i){return e("span",{key:i},[t._v(t._s(n))])})),e("div",{staticClass:"barrage-space"})])},A=[],B={props:["wish","canStart"],data:function(){return{barrages:m.barrages,animationStyle:"",initialOffset:0}},computed:{codeInStyleTag:function(){return"<style>".concat(this.animationStyle,"</style>")}},watch:{canStart:function(t){!0===t&&this.barrageAnimationStart()}},methods:{barrageAnimationStart:function(){var t=this,n=this.getWidth(this.$refs.barrage),e=[this.getWidth(this.$refs.barrageFirst),this.getWidth(this.$refs.barrageSecond),this.getWidth(this.$refs.barrageThird),this.getWidth(this.$refs.barrageFourth)];this.initialOffset=n+15,e.map(function(e,i){t.animationStyle+="\n          .barrage-".concat(i,"{\n            animation: barrage-").concat(i," ").concat(e/40,"s linear infinite;\n            -webkit-animation: barrage-").concat(i," ").concat(e/40,"s linear infinite;\n          }\n          @keyframes barrage-").concat(i," {\n            from {\n              transform:translate3d(").concat(n+15,"px,0,0);\n              -webkit-transform:translate3d(").concat(n+15,"px,0,0);\n            }\n            to {\n              transform:translate3d(-").concat(e+15,"px,0,0);\n              -webkit-transform:translate3d(-").concat(e+15,"px,0,0);\n            }\n          }")})},getWidth:function(t){return window.getComputedStyle(t,null).width.replace("px","")-0},filterBarrage:function(t,n){if(t)return t.filter(function(t,e){if(e%4===n)return t})}}},P=B,$=(e("2913"),Object(x["a"])(P,F,A,!1,null,null,null));$.options.__file="Barrage.vue";var j=$.exports,M={name:"Editor",components:{Executions:y,Invitation:E,Barrage:j},data:function(){return{startDate:"",code:m.code,currentCode:"",isCursorVisible:1,canExecute:!1,canOpen:!1,wish:"",hasClosed:!1,canStart:!1,isPause:!1,v1:6,v2:24}},created:function(){this.startDate=(new Date).toDateString(),this.progressivelyTyping()},updated:function(){this.scrollToBottom()},mounted:function(){var t=(new Date).getTime(),n=this.randomString(10);d.a.get("http://www.fanwd.com/wxapp-fanwd-api/c/wx-js-ticket",{params:{timestamp:t,nonceStr:n,url:location.href}}).then(function(e){u.a.config({appId:"wxf6267e4db38396dc",timestamp:t,nonceStr:n,signature:e.data.data.ticket,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),u.a.ready(function(){u.a.updateAppMessageShareData({title:"周钰致&张雯玉,邀请您~",desc:"我们将于2020年9月20日（周日）午宴12:18举行婚礼，诚邀您的光临",link:location.href,imgUrl:"https://huiyuanxitong.oss-cn-hangzhou.aliyuncs.com/temp/share.png",success:function(){},cancel:function(){}}),u.a.updateTimelineShareData({title:"周钰致&张雯玉,我们结婚啦~",link:location.href,imgUrl:"https://huiyuanxitong.oss-cn-hangzhou.aliyuncs.com/temp/share.png",success:function(){},cancel:function(){}})})}),this.$refs["music-bgm"].play()},computed:{highlightedCode:function(){var t=f.a.highlight(this.currentCode,f.a.languages.javascript),n="".concat(t,'<span style="opacity:').concat(this.isCursorVisible,'"> ▍</span>');return n}},methods:{scrollToBottom:function(){this.$refs.editor.scrollTop=1e5},progressivelyTyping:function(){var t=this;return new Promise(function(n){var e,i=0,a=0,s=function s(){var r=Math.round(Math.random()*t.v1);i%2===0&&r%4===0&&(t.currentCode=t.code.substring(0,a),a++),i%t.v2===0&&(t.isCursorVisible=0===t.isCursorVisible?1:0),i++,a<=t.code.length?e=requestAnimationFrame(s):(n(),t.canExecute=!0,cancelAnimationFrame(e))};e=requestAnimationFrame(s)})},onAfterSending:function(t){var n=this;this.wish=t,this.canOpen=!1,setTimeout(function(){n.canStart=!0},800)},onTouchstart:function(){this.v1=1,this.v2=4},onTouchend:function(){this.v1=6,this.v2=24},randomString:function(t){t=t||32;for(var n="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=n.length,i="",a=0;a<t;a++)i+=n.charAt(Math.floor(Math.random()*e));return i},musicPlay:function(){this.$refs["music-bgm"].paused?(this.isPause=!1,this.$refs["music-bgm"].play()):(this.isPause=!0,this.$refs["music-bgm"].pause())}}},D=M,q=(e("8164"),Object(x["a"])(D,r,o,!1,null,null,null));q.options.__file="Editor.vue";var z=q.exports,I={props:[],components:{Editor:z},name:"Wedding"},W=I,R=(e("0b39"),Object(x["a"])(W,a,s,!1,null,null,null));R.options.__file="Wedding.vue";var U=R.exports,L=e("77ed"),N=e.n(L);new i["a"]({el:"#app",render:function(t){return t(U)}}),i["a"].use(N.a)},"5df9":function(t,n,e){},"6af3":function(t,n,e){"use strict";var i=e("2b70"),a=e.n(i);a.a},8164:function(t,n,e){"use strict";var i=e("b1f4"),a=e.n(i);a.a},b1f4:function(t,n,e){},bddb:function(t,n,e){"use strict";var i=e("d0b9"),a=e.n(i);a.a},d0b9:function(t,n,e){}});
//# sourceMappingURL=app.83bf6bc9.js.map