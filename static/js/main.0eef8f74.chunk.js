(this["webpackJsonpjulia-set"]=this["webpackJsonpjulia-set"]||[]).push([[0],{11:function(e,t,n){!function(n){function r(e){if(!(this instanceof r))return new r(e);var t=e.width,n=e.height,c=[[-1,0,1],[-2,0,2],[-1,0,1]],a=[[-1,-2,-1],[0,0,0],[1,2,1]],u=[],i=[];function o(e){return function(n,r,c){return e[4*(t*r+n)+(c=c||0)]}}var s,f,j=o(e.data);for(f=0;f<n;f++)for(s=0;s<t;s++){var b=(j(s,f,0)+j(s,f,1)+j(s,f,2))/3;i.push(b,b,b,255)}for(j=o(i),f=0;f<n;f++)for(s=0;s<t;s++){var d=c[0][0]*j(s-1,f-1)+c[0][1]*j(s,f-1)+c[0][2]*j(s+1,f-1)+c[1][0]*j(s-1,f)+c[1][1]*j(s,f)+c[1][2]*j(s+1,f)+c[2][0]*j(s-1,f+1)+c[2][1]*j(s,f+1)+c[2][2]*j(s+1,f+1),l=a[0][0]*j(s-1,f-1)+a[0][1]*j(s,f-1)+a[0][2]*j(s+1,f-1)+a[1][0]*j(s-1,f)+a[1][1]*j(s,f)+a[1][2]*j(s+1,f)+a[2][0]*j(s-1,f+1)+a[2][1]*j(s,f+1)+a[2][2]*j(s+1,f+1),h=Math.sqrt(d*d+l*l)>>>0;u.push(h,h,h,255)}var p=u;return"function"===typeof Uint8ClampedArray&&(p=new Uint8ClampedArray(u)),p.toImageData=function(){return r.toImageData(p,t,n)},p}function c(e,t,n){return{width:t,height:n,data:e}}r.toImageData=function(e,t,n){if("function"===typeof ImageData&&"[object Uint16Array]"===Object.prototype.toString.call(e))return new ImageData(e,t,n);if("object"===typeof window&&"object"===typeof window.document){var r=document.createElement("canvas");if("function"===typeof r.getContext){var a=r.getContext("2d").createImageData(t,n);return a.data.set(e),a}return new c(e,t,n)}return new c(e,t,n)},e.exports&&(t=e.exports=r),t.Sobel=r,t.FakeImageData=c}()},14:function(e,t,n){var r,c=n(9).wrap,a=n(23);e.exports=function e(){return this instanceof e?c(a()):r||(r=c(a()))}},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){e.exports=function(){return new Worker(n.p+"d8c8829f7b91d45d3a22.worker.js")}},24:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(12),u=n.n(a),i=(n(19),n(20),n(2));function o(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null);return Object(r.useEffect)((function(){e.current&&(t.current=e.current.getContext("2d"))}),[]),{canvasRef:e,ctxRef:t}}function s(e){var t=function(e,t){var n=Object(r.useRef)(50),c=Object(r.useRef)(50),a=Object(r.useRef)(!1);return Object(r.useEffect)((function(){var r=e.current;return r&&(r.onmousedown=function(e){var r=n.current,u=c.current,i=e.offsetX||0,o=e.offsetY||0;t({x:r,y:u,ex:i,ey:o})&&(a.current=!0,document.body.style.cursor="grabbing")},window.onmousemove=function(e){a.current&&(n.current=e.pageX,c.current=e.pageY)},window.onmouseup=function(e){a.current=!1,document.body.style.cursor="grab"}),function(){r&&(r.onmousedown=null,window.onmousemove=null,window.onmouseup=null)}}),[]),{xRef:n,yRef:c}}(e,(function(e){var t=e.x,n=e.y,r=e.ex,c=e.ey;return Math.sqrt((t-r)*(t-r)+(n-c)*(n-c))<40}));return{xRef:t.xRef,yRef:t.yRef,radius:40}}var f=640;function j(e,t){var n=t.xRef,r=t.yRef,c=t.radius,a=n.current,u=r.current;e.beginPath(),e.arc(a,u,c,0,2*Math.PI),e.fillStyle="yellow",e.fill()}function b(e,t){var n=document.title.split(",");if(e){var r=document.title.split(",");document.title="".concat(r[0]||"",",  FRACTAL ").concat((1e3/t).toFixed(1)," FPS")}else document.title="UI ".concat((1e3/t).toFixed(1)," FPS  ,").concat(n[1]||"")}var d=n(3),l=n.n(d),h=n(4),p=function(e){return new Promise((function(t){setTimeout((function(){t(e)}),e)}))};function O(e){var t=Object(r.useRef)(0),n=Object(r.useRef)(0);Object(r.useEffect)((function(){var r=function(){var c=Object(h.a)(l.a.mark((function c(a){var u;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(void 0===n.current){c.next=4;break}return u=a-n.current,c.next=4,e(u,a);case 4:n.current=a,t.current=requestAnimationFrame(r);case 6:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return t.current=requestAnimationFrame(r),function(){return cancelAnimationFrame(t.current)}}),[])}var v=n(0),x=Object(r.memo)((function(e){var t=o(),n=t.canvasRef;return function(e,t,n,c){Object(r.useRef)(c||0).current=c||0,O(function(){var r=Object(h.a)(l.a.mark((function r(c){var a,u,i,o;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e.current){r.next=3;break}return r.abrupt("return");case 3:if(u=t.current){r.next=6;break}return r.abrupt("return");case 6:return i=a.width,o=a.height,u.clearRect(0,0,i,o),j(u,n),b(!1,c),r.abrupt("return",Promise.resolve());case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}(n,t.ctxRef,s(n),1),Object(v.jsx)("canvas",{ref:n,width:f,height:f,style:{position:"absolute",top:0,left:0,bottom:0}})})),m=n(6),g=n(13),w=n.n(g),y=n(11),k=n.n(y);function R(e){for(var t=e.height,n=e.width,r=e.creal,c=e.cimag,a=e.factor,u=e.edge,i=Math.floor(a||0),o=n,s=t,f=o/4,j=s/4,b=new Uint8ClampedArray(o*s*4),d=function(){for(var e=[],t=0;t<9;t++){var n=31*t;e[t]=[n,n,255,255],e[t+8]=[0,255,n,255],e[17+t]=[n,0,0,255]}return e}(),l=0,h=0;h<s;h++)for(var p=0;p<o;p++){var O=p/j-2,v=h/f-2,x=0;do{var m=O*O-v*v+r;v=2*O*v+c,O=m,x++}while(O*O+v*v<4&&x<25);var g=d[x];b[l+0]=g[0],b[l+1]=g[1],b[l+2]=g[2],b[l+3]=g[3],l+=4}return w()(b,o,s,i),u?k()(k.a.FakeImageData(b,o,s)):b}function S(e){return{creal:.6*Math.sin(e/(3.14*20))-.8,cimag:.156+.4*Math.cos(e/(3.14*40))}}var I=Object(r.memo)((function(e){var t=o(),n=t.canvasRef;return function(e,t,n,c){var a=Object(r.useRef)(0),u=Object(r.useRef)(n||0);u.current=n||0;var i=Object(r.useRef)(c);i.current=c,O(function(){var n=Object(h.a)(l.a.mark((function n(r){var c,o,s,f,j,d,h,p,O;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=e.current){n.next=3;break}return n.abrupt("return");case 3:if(o=t.current){n.next=6;break}return n.abrupt("return");case 6:return s=c.width,f=c.height,j={width:s||960,height:f||540,factor:u.current,edge:i.current},a.current=a.current+1,d=S(a.current),h=Object(m.a)(Object(m.a)({},j),d),p=R(h),O=new ImageData(p,j.width,j.height),o.putImageData(O,0,0),b(!0,r),n.abrupt("return",Promise.resolve());case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}(n,t.ctxRef,e.factor,e.edge),Object(v.jsx)("canvas",{ref:n,width:f,height:f})})),C=n(14),F=n.n(C).a;function A(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=new F;return e.current=t,function(){var n=t;n&&(p(1).then(Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.terminate();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))),e.current=null)}}),[]),e}var M=Object(r.memo)((function(e){var t=o(),n=t.canvasRef;return function(e,t,n,c){var a=Object(r.useRef)(0),u=Object(r.useRef)(n||0);u.current=n||0;var i=Object(r.useRef)(c);i.current=c;var o=A(),s=Object(r.useRef)(!1),f=Object(r.useRef)(null);O(function(){var n=Object(h.a)(l.a.mark((function n(r){var c,j,d,h,p,O,v,x,g,w;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=o.current){n.next=3;break}return n.abrupt("return");case 3:if(j=e.current){n.next=6;break}return n.abrupt("return");case 6:if(d=t.current){n.next=9;break}return n.abrupt("return");case 9:if(h=j.width,p=j.height,O={width:h||960,height:p||540,factor:u.current,edge:i.current},a.current=a.current+1,v=S(a.current),x=Object(m.a)(Object(m.a)({},O),v),s.current){n.next=20;break}return s.current=!0,n.next=18,c.calculate(x);case 18:f.current=n.sent,s.current=!1;case 20:return(g=f.current)&&(w=new ImageData(g,O.width,O.height),d.putImageData(w,0,0)),b(!0,r),n.abrupt("return",Promise.resolve());case 24:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}(n,t.ctxRef,e.factor,e.edge),Object(v.jsx)("canvas",{ref:n,width:f,height:f})})),D=Object(r.memo)((function(){var e,t,n=Object(r.useState)(0),c=Object(i.a)(n,2),a=c[0],u=c[1];e=1,t=function(){u((function(e){return e+1}))},Object(r.useEffect)((function(){var n=setInterval(t,e);return function(){clearInterval(n)}}),[]);var o=function(){var e=new Date;return["".concat(e.getHours(),":").concat(e.getMinutes()),"".concat(e.getSeconds(),",").concat(e.getMilliseconds())]}();return Object(v.jsxs)("header",{className:"App-header",children:[Object(v.jsx)("p",{children:"Julia set"}),Object(v.jsx)("p",{children:a}),Object(v.jsx)("p",{children:o[0]}),Object(v.jsx)("p",{children:o[1]})]})})),P=n(9),E=Object(r.memo)((function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),u=Object(i.a)(a,2),o=u[0],s=u[1],f=A(),j=5e9;return Object(r.useEffect)((function(){var e=f.current;if(e){e.expensiveOperation({value:j},P.proxy((function(e){return c(e)})),P.proxy((function(e){return p(1).then((function(){return 3*e}))}))).then((function(e){return s(e.result.toFixed())}))}}),[]),Object(v.jsxs)("div",{style:{marginTop:16,fontSize:16},children:[Object(v.jsx)("p",{children:"Expensive"}),Object(v.jsx)("p",{children:"Operation"}),Object(v.jsx)("p",{children:"input"}),Object(v.jsx)("p",{children:j}),Object(v.jsx)("p",{children:"done"}),Object(v.jsxs)("p",{children:[Math.ceil(n+1).toFixed()," %"]}),Object(v.jsx)("p",{children:"final result"}),Object(v.jsx)("p",{children:o})]})})),T=function(){var e=Object(r.useMemo)((function(){return Array.from(Array(14).keys())}),[]),t=Object(r.useMemo)((function(){return Array.from(Array(1e4).keys())}),[]),n=Object(r.useState)("main"),c=Object(i.a)(n,2),a=c[0],u=c[1],o=Object(r.useState)(2),s=Object(i.a)(o,2),f=s[0],j=s[1],b=Object(r.useState)(0),d=Object(i.a)(b,2),l=d[0],h=d[1],p=Object(r.useState)(!1),O=Object(i.a)(p,2),m=O[0],g=O[1],w=Object(r.useState)(!1),y=Object(i.a)(w,2),k=y[0],R=y[1],S=Object(r.useState)(""),C=Object(i.a)(S,2),F=C[0],A=C[1];return Object(r.useEffect)((function(){fetch("https://unpkg.com/react@17.0.2/umd/react.development.js").then((function(e){return e.text()})).then((function(e){A(e)}))}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("div",{style:{position:"relative",margin:8},children:["main"===a&&Object(v.jsx)(I,{factor:f,edge:k}),"worker"===a&&Object(v.jsx)(M,{factor:f,edge:k}),Object(v.jsx)(x,{})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(D,{}),Object(v.jsxs)("label",{children:[Object(v.jsx)("p",{children:"Expensive Worker"}),Object(v.jsx)("p",{children:"Operation"}),Object(v.jsx)("input",{name:"expensive",type:"checkbox",checked:m,onChange:function(){return g((function(e){return!e}))}})]}),m&&Object(v.jsx)(E,{})]}),Object(v.jsxs)("div",{style:{width:210},children:[Object(v.jsxs)("div",{style:{marginBottom:40},children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("input",{type:"radio",value:"main",name:"Paint on Main thread",checked:"main"===a,onChange:function(){return u("main")}},"main"),Object(v.jsx)("span",{children:"Paint on Main thread"})]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("input",{type:"radio",value:"worker",name:"Paint on Worker thread",checked:"worker"===a,onChange:function(){return u("worker")}},"worker"),Object(v.jsx)("span",{children:"Paint on Worker thread"})]})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("label",{children:[Object(v.jsx)("span",{children:"Edge (SLOW)"}),Object(v.jsx)("input",{name:"edge",type:"checkbox",checked:k,onChange:function(){return R((function(e){return!e}))}})]})}),Object(v.jsx)("div",{children:e.map((function(e,t){var n=2*e;return Object(v.jsxs)("p",{children:[Object(v.jsx)("input",{type:"radio",value:n,name:"Blur ".concat(n," px"),checked:f===n,onChange:function(){return j(n)}},t),Object(v.jsxs)("span",{children:["Blur ",n," px"]})]},t)}))})]}),Object(v.jsx)("div",{children:Object(v.jsx)("div",{style:{overflowY:"scroll",width:150,height:640},children:t.map((function(e){return Object(v.jsxs)("p",{children:[Object(v.jsx)("input",{type:"radio",value:e,name:"Option ".concat(e),checked:l===e,onChange:function(e){return h(+e.target.value)}},e),Object(v.jsxs)("span",{children:["Option ",e]})]},e)}))})}),Object(v.jsx)("div",{style:{overflowY:"scroll",width:400,height:640},dangerouslySetInnerHTML:{__html:F}})]})};var B=function(){return Object(v.jsx)(T,{})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};u.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root")),L()}},[[24,1,2]]]);
//# sourceMappingURL=main.0eef8f74.chunk.js.map