!function(){var t={582:function(t,n){!function(e){function r(t){if(!(this instanceof r))return new r(t);var n=t.width,e=t.height,a=[[-1,0,1],[-2,0,2],[-1,0,1]],o=[[-1,-2,-1],[0,0,0],[1,2,1]],u=[],i=[];function f(t){return function(e,r,a){return t[4*(n*r+e)+(a=a||0)]}}var c,s,v=f(t.data);for(s=0;s<e;s++)for(c=0;c<n;c++){var p=(v(c,s,0)+v(c,s,1)+v(c,s,2))/3;i.push(p,p,p,255)}for(v=f(i),s=0;s<e;s++)for(c=0;c<n;c++){var l=a[0][0]*v(c-1,s-1)+a[0][1]*v(c,s-1)+a[0][2]*v(c+1,s-1)+a[1][0]*v(c-1,s)+a[1][1]*v(c,s)+a[1][2]*v(c+1,s)+a[2][0]*v(c-1,s+1)+a[2][1]*v(c,s+1)+a[2][2]*v(c+1,s+1),h=o[0][0]*v(c-1,s-1)+o[0][1]*v(c,s-1)+o[0][2]*v(c+1,s-1)+o[1][0]*v(c-1,s)+o[1][1]*v(c,s)+o[1][2]*v(c+1,s)+o[2][0]*v(c-1,s+1)+o[2][1]*v(c,s+1)+o[2][2]*v(c+1,s+1),d=Math.sqrt(l*l+h*h)>>>0;u.push(d,d,d,255)}var g=u;return"function"===typeof Uint8ClampedArray&&(g=new Uint8ClampedArray(u)),g.toImageData=function(){return r.toImageData(g,n,e)},g}function a(t,n,e){return{width:n,height:e,data:t}}r.toImageData=function(t,n,e){if("function"===typeof ImageData&&"[object Uint16Array]"===Object.prototype.toString.call(t))return new ImageData(t,n,e);if("object"===typeof window&&"object"===typeof window.document){var r=document.createElement("canvas");if("function"===typeof r.getContext){var o=r.getContext("2d").createImageData(n,e);return o.data.set(t),o}return new a(t,n,e)}return new a(t,n,e)},t.exports&&(n=t.exports=r),n.Sobel=r,n.FakeImageData=a}()},406:function(t,n,e){"use strict";var r=e(671),a=e(144),o=e(555),u=e(861),i=e(757),f=e.n(i),c=e(703),s=e.n(c),v=e(582),p=e.n(v);function l(){void 0===self.document&&(self.$RefreshReg$=function(){},self.$RefreshSig$=function(){return function(){}})}function h(t){var n=function(t){for(var n=t.height,e=t.width,r=t.creal,a=t.cimag,o=t.factor,u=t.edge,i=Math.floor(o||0),f=e,c=n,v=f/4,l=c/4,h=new Uint8ClampedArray(f*c*4),d=function(){for(var t=[],n=0;n<9;n++){var e=31*n;t[n]=[e,e,255,255],t[n+8]=[0,255,e,255],t[17+n]=[e,0,0,255]}return t}(),g=0,m=0;m<c;m++)for(var y=0;y<f;y++){var w=y/l-2,x=m/v-2,b=0;do{var j=w*w-x*x+r;x=2*w*x+a,w=j,b++}while(w*w+x*x<4&&b<25);var k=d[b];h[g+0]=k[0],h[g+1]=k[1],h[g+2]=k[2],h[g+3]=k[3],g+=4}return s()(h,f,c,i),u?p()(p().FakeImageData(h,f,c)):h}(t);return n}function d(){return(d=(0,u.Z)(f().mark((function t(n,e,r){var a,o,u,i,c;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Math.ceil(n.value/100),t.next=3,r(7);case 3:for(o=t.sent,u=o,i=0;i<n.value;i++)u+=i,i%a===0&&(c=i/n.value*100,e(c));return t.abrupt("return",{result:u});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l(),l();var g=function(){function t(){(0,r.Z)(this,t)}return(0,a.Z)(t,[{key:"calculate",value:function(t){return h(t)}},{key:"expensiveOperation",value:function(t,n,e){return function(t,n,e){return d.apply(this,arguments)}(t,n,e)}}]),t}();(0,o.Jj)(g)}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}e.m=t,e.x=function(){var t=e.O(void 0,[618],(function(){return e(406)}));return t=e.O(t)},function(){var t=[];e.O=function(n,r,a,o){if(!r){var u=1/0;for(s=0;s<t.length;s++){r=t[s][0],a=t[s][1],o=t[s][2];for(var i=!0,f=0;f<r.length;f++)(!1&o||u>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[f])}))?r.splice(f--,1):(i=!1,o<u&&(u=o));if(i){t.splice(s--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[r,a,o]}}(),e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))},e.u=function(t){return"static/js/"+t+".98d3b635.chunk.js"},e.miniCssF=function(t){},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/julia-set/",function(){var t={406:1};e.f.i=function(n,r){t[n]||importScripts(e.p+e.u(n))};var n=self.webpackChunkjulia_set=self.webpackChunkjulia_set||[],r=n.push.bind(n);n.push=function(n){var a=n[0],o=n[1],u=n[2];for(var i in o)e.o(o,i)&&(e.m[i]=o[i]);for(u&&u(e);a.length;)t[a.pop()]=1;r(n)}}(),function(){var t=e.x;e.x=function(){return e.e(618).then(t)}}();e.x()}();
//# sourceMappingURL=406.a5c80eef.chunk.js.map