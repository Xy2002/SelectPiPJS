(()=>{var t={9662:(t,r,e)=>{var n=e(614),o=e(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},9670:(t,r,e)=>{var n=e(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},8533:(t,r,e)=>{"use strict";var n=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,r,e)=>{var n=e(5656),o=e(1400),i=e(6244),a=function(t){return function(r,e,a){var c,u=n(r),s=i(u),f=o(a,s);if(t&&e!=e){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(1702),i=e(8361),a=e(7908),c=e(6244),u=e(5417),s=o([].push),f=function(t){var r=1==t,e=2==t,o=3==t,f=4==t,p=6==t,l=7==t,v=5==t||p;return function(y,d,g,h){for(var b,x,m=a(y),S=i(m),w=n(d,g),O=c(S),j=0,E=h||u,L=r?E(y,O):e||l?E(y,0):void 0;O>j;j++)if((v||j in S)&&(x=w(b=S[j],j,m),t))if(r)L[j]=x;else if(x)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:s(L,b)}else switch(t){case 4:return!1;case 7:s(L,b)}return p?-1:o||f?f:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9341:(t,r,e)=>{"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){return 1},1)}))}},206:(t,r,e)=>{var n=e(1702);t.exports=n([].slice)},7475:(t,r,e)=>{var n=e(3157),o=e(4411),i=e(111),a=e(5112)("species"),c=Array;t.exports=function(t){var r;return n(t)&&(r=t.constructor,(o(r)&&(r===c||n(r.prototype))||i(r)&&null===(r=r[a]))&&(r=void 0)),void 0===r?c:r}},5417:(t,r,e)=>{var n=e(7475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},4326:(t,r,e)=>{var n=e(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,r,e)=>{var n=e(1694),o=e(614),i=e(4326),a=e(5112)("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=c(t),a))?e:u?i(r):"Object"==(n=i(r))&&o(r.callee)?"Arguments":n}},9920:(t,r,e)=>{var n=e(2597),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,r,e){for(var c=o(r),u=a.f,s=i.f,f=0;f<c.length;f++){var p=c[f];n(t,p)||e&&n(e,p)||u(t,p,s(r,p))}}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},8052:(t,r,e)=>{var n=e(614),o=e(3070),i=e(6339),a=e(3072);t.exports=function(t,r,e,c){c||(c={});var u=c.enumerable,s=void 0!==c.name?c.name:r;if(n(e)&&i(e,s,c),c.global)u?t[r]=e:a(r,e);else{try{c.unsafe?t[r]&&(u=!0):delete t[r]}catch(t){}u?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:(t,r,e)=>{var n=e(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,r,e)=>{var n=e(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),a=e(8113),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),a=e(8052),c=e(3072),u=e(9920),s=e(4705);t.exports=function(t,r){var e,f,p,l,v,y=t.target,d=t.global,g=t.stat;if(e=d?n:g?n[y]||c(y,{}):(n[y]||{}).prototype)for(f in r){if(l=r[f],p=t.dontCallGetSet?(v=o(e,f))&&v.value:e[f],!s(d?f:y+(g?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;u(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(e,f,l,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9974:(t,r,e)=>{var n=e(1702),o=e(9662),i=e(4374),a=n(n.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?a(t,r):function(){return t.apply(r,arguments)}}},4374:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,r,e)=>{var n=e(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,r,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},1702:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.bind,a=o.call,c=n&&i.bind(a,a);t.exports=n?function(t){return t&&c(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},7571:(t,r,e)=>{var n=e(9662);t.exports=function(t,r){var e=t[r];return null==e?void 0:n(e)}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(t,r,e)=>{var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:t=>{t.exports={}},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(4326),a=Object,c=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):a(t)}:a},2788:(t,r,e)=>{var n=e(1702),o=e(614),i=e(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,r,e)=>{var n,o,i,a=e(8536),c=e(7854),u=e(1702),s=e(111),f=e(8880),p=e(2597),l=e(5465),v=e(6200),y=e(3501),d="Object already initialized",g=c.TypeError,h=c.WeakMap;if(a||l.state){var b=l.state||(l.state=new h),x=u(b.get),m=u(b.has),S=u(b.set);n=function(t,r){if(m(b,t))throw new g(d);return r.facade=t,S(b,t,r),r},o=function(t){return x(b,t)||{}},i=function(t){return m(b,t)}}else{var w=v("state");y[w]=!0,n=function(t,r){if(p(t,w))throw new g(d);return r.facade=t,f(t,w,r),r},o=function(t){return p(t,w)?t[w]:{}},i=function(t){return p(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!s(r)||(e=o(r)).type!==t)throw g("Incompatible receiver, "+t+" required");return e}}}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(614),a=e(648),c=e(5005),u=e(2788),s=function(){},f=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=n(l.exec),y=!l.exec(s),d=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},g=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,u(t))}catch(t){return!0}};g.sham=!0,t.exports=!p||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?g:d},4705:(t,r,e)=>{var n=e(7293),o=e(614),i=/#|\.prototype\./,a=function(t,r){var e=u[c(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:(t,r,e)=>{var n=e(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(5005),o=e(614),i=e(7976),a=e(3307),c=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,c(t))}},6244:(t,r,e)=>{var n=e(7466);t.exports=function(t){return n(t.length)}},6339:(t,r,e)=>{var n=e(7293),o=e(614),i=e(2597),a=e(9781),c=e(6530).CONFIGURABLE,u=e(2788),s=e(9909),f=s.enforce,p=s.get,l=Object.defineProperty,v=a&&!n((function(){return 8!==l((function(){}),"length",{value:8}).length})),y=String(String).split("String"),d=t.exports=function(t,r,e){"Symbol("===String(r).slice(0,7)&&(r="["+String(r).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!i(t,"name")||c&&t.name!==r)&&(a?l(t,"name",{value:r,configurable:!0}):t.name=r),v&&e&&i(e,"arity")&&t.length!==e.arity&&l(t,"length",{value:e.arity});try{e&&i(e,"constructor")&&e.constructor?a&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return i(n,"source")||(n.source=y.join("string"==typeof r?r:"")),t};Function.prototype.toString=d((function(){return o(this)&&p(this).source||u(this)}),"toString")},4758:t=>{var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},133:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,r,e)=>{var n=e(7854),o=e(614),i=e(2788),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(3353),a=e(9670),c=e(4948),u=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",v="writable";r.f=n?i?function(t,r,e){if(a(t),r=c(r),a(e),"function"==typeof t&&"prototype"===r&&"value"in e&&v in e&&!e.writable){var n=f(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:l in e?e.configurable:n.configurable,enumerable:p in e?e.enumerable:n.enumerable,writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(a(t),r=c(r),a(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw u("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(6916),i=e(5296),a=e(9114),c=e(5656),u=e(4948),s=e(2597),f=e(4664),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=c(t),r=u(r),f)try{return p(t,r)}catch(t){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},7976:(t,r,e)=>{var n=e(1702);t.exports=n({}.isPrototypeOf)},6324:(t,r,e)=>{var n=e(1702),o=e(2597),i=e(5656),a=e(1318).indexOf,c=e(3501),u=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(c,e)&&o(n,e)&&u(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(f,e)||u(f,e));return f}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},288:(t,r,e)=>{"use strict";var n=e(1694),o=e(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,r,e)=>{var n=e(6916),o=e(614),i=e(111),a=TypeError;t.exports=function(t,r){var e,c;if("string"===r&&o(e=t.toString)&&!i(c=n(e,t)))return c;if(o(e=t.valueOf)&&!i(c=n(e,t)))return c;if("string"!==r&&o(e=t.toString)&&!i(c=n(e,t)))return c;throw a("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(1702),i=e(8006),a=e(5181),c=e(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(c(t)),e=a.f;return e?u(r,e(t)):r}},4488:t=>{var r=TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},7152:(t,r,e)=>{var n=e(7854),o=e(2104),i=e(614),a=e(8113),c=e(206),u=e(8053),s=/MSIE .\./.test(a),f=n.Function,p=function(t){return s?function(r,e){var n=u(arguments.length,1)>2,a=i(r)?r:f(r),s=n?c(arguments,2):void 0;return t(n?function(){o(a,this,s)}:a,e)}:t};t.exports={setTimeout:p(n.setTimeout),setInterval:p(n.setInterval)}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.24.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:(t,r,e)=>{var n=e(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9303:(t,r,e)=>{var n=e(4758);t.exports=function(t){var r=+t;return r!=r||0===r?0:n(r)}},7466:(t,r,e)=>{var n=e(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,r,e)=>{var n=e(6916),o=e(111),i=e(2190),a=e(7571),c=e(2140),u=e(5112),s=TypeError,f=u("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,u=a(t,f);if(u){if(void 0===r&&(r="default"),e=n(u,t,r),!o(e)||i(e))return e;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),c(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:(t,r,e)=>{var n=e(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,r,e)=>{var n=e(9781),o=e(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:t=>{var r=TypeError;t.exports=function(t,e){if(t<e)throw r("Not enough arguments");return t}},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(2597),a=e(9711),c=e(133),u=e(3307),s=o("wks"),f=n.Symbol,p=f&&f.for,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var r="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=u&&p?p(r):l(r)}return s[t]}},9554:(t,r,e)=>{"use strict";var n=e(2109),o=e(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},1539:(t,r,e)=>{var n=e(1694),o=e(8052),i=e(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},4747:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8509),a=e(8533),c=e(8880),u=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(r){t.forEach=a}};for(var s in o)o[s]&&u(n[s]&&n[s].prototype);u(i)},6815:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(7152).setInterval;n({global:!0,bind:!0,forced:o.setInterval!==i},{setInterval:i})},8417:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(7152).setTimeout;n({global:!0,bind:!0,forced:o.setTimeout!==i},{setTimeout:i})},2564:(t,r,e)=>{e(6815),e(8417)}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";e(2564),e(9554),e(1539),e(4747);function t(r,e){var n=document.createElement(e.tagName);for(var o in e.style)n.style[o]=e.style[o];if("string"==typeof e.children){var i=document.createTextNode(e.children);n.appendChild(i)}else e.children&&e.children.forEach((function(r){t(n,r)}));return r.appendChild(n),n}const r=function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,o={tagName:"div",children:[{tagName:"p",children:r,style:{margin:"10px"}}],style:{position:"fixed",top:"10vh",left:"50vw",textAlign:"center",transform:"translateX(-50%)",zIndex:"9999"}};switch(e){case"danger":o.style.background="red",o.style.color="white";break;case"success":o.style.background="green",o.style.color="white"}var i=t(document.body,o);setTimeout((function(){i.remove()}),n)};function n(t){t.remove()}var o,i=!1,a=null,c=null;function u(t){var e;("Alt"!==t.key||i||(t.preventDefault(),i=!0,p()),"KeyP"===t.code&&t.altKey&&i)&&(t.preventDefault(),c&&n(c),"VIDEO"===(null===(e=o)||void 0===e?void 0:e.tagName)?(o.requestPictureInPicture(),o=null,i=!1,r("Video is in Picture-in-Picture mode","success")):r("Only video can be in Picture-in-Picture mode","danger"))}function s(t){"Alt"===t.key&&i&&(i=!1,setTimeout((function(){c&&n(c)})),o=null)}function f(t){a=t.composedPath?t.composedPath()[0]:t.target,i&&p()}function p(){if(a&&a!==o){o=a,c&&n(c);var r=o.getBoundingClientRect();e=r.width,i=r.height,u=r.top,s=r.left,f=o.tagName,p="VIDEO"===f.toLocaleUpperCase()?"green":"red",l={tagName:"div",style:{border:"2px solid ".concat(p),position:"fixed",background:"none",borderRadius:"2px",padding:"0",margin:"0",width:"".concat(e-2,"px"),height:"".concat(i-2,"px"),top:"".concat(u-1,"px"),left:"".concat(s-1,"px"),pointerEvents:"none",zIndex:"9999",boxSizing:"content-box"},children:[{tagName:"span",style:{background:p,position:"fixed",display:"inline-block",color:"#fff",padding:"2px 4px",fontSize:"10px",transform:u<20?"":"translateY(calc(-100% + 2px))",top:"".concat(u<0?-1:u-1,"px"),left:"".concat(s-1,"px")},children:f}]},c=t(document.body,l)}var e,i,u,s,f,p,l}({start:function(){document.body?(r("extension start","success"),window.addEventListener("keydown",u),window.addEventListener("keyup",s),window.addEventListener("mousemove",f)):r("Unable to initialise, document.body does not exist.","danger")}}).start()})()})();