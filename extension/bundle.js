(()=>{var t={9662:(t,e,r)=>{var n=r(614),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},9670:(t,e,r)=>{var n=r(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),a=function(t){return function(e,r,a){var c,u=n(e),s=i(u),f=o(a,s);if(t&&r!=r){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(1702),i=r(8361),a=r(7908),c=r(6244),u=r(5417),s=o([].push),f=function(t){var e=1==t,r=2==t,o=3==t,f=4==t,l=6==t,p=7==t,v=5==t||l;return function(d,y,h,g){for(var b,m,x=a(d),w=i(x),S=n(y,h),O=c(w),E=0,L=g||u,j=e?L(d,O):r||p?L(d,0):void 0;O>E;E++)if((v||E in w)&&(m=S(b=w[E],E,x),t))if(e)j[E]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:s(j,b)}else switch(t){case 4:return!1;case 7:s(j,b)}return l?-1:o||f?f:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},206:(t,e,r)=>{var n=r(1702);t.exports=n([].slice)},7475:(t,e,r)=>{var n=r(3157),o=r(4411),i=r(111),a=r(5112)("species"),c=Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,(o(e)&&(e===c||n(e.prototype))||i(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?c:e}},5417:(t,e,r)=>{var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(1694),o=r(614),i=r(4326),a=r(5112)("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?r:u?i(e):"Object"==(n=i(e))&&o(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e,r){for(var c=o(e),u=a.f,s=i.f,f=0;f<c.length;f++){var l=c[f];n(t,l)||r&&n(r,l)||u(t,l,s(e,l))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:(t,e,r)=>{var n=r(614),o=r(3070),i=r(6339),a=r(3072);t.exports=function(t,e,r,c){c||(c={});var u=c.enumerable,s=void 0!==c.name?c.name:e;if(n(r)&&i(r,s,c),c.global)u?t[e]=r:a(e,r);else{try{c.unsafe?t[e]&&(u=!0):delete t[e]}catch(t){}u?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(8052),c=r(3072),u=r(9920),s=r(4705);t.exports=function(t,e){var r,f,l,p,v,d=t.target,y=t.global,h=t.stat;if(r=y?n:h?n[d]||c(d,{}):(n[d]||{}).prototype)for(f in e){if(p=e[f],l=t.dontCallGetSet?(v=o(r,f))&&v.value:r[f],!s(y?f:d+(h?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(r,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9974:(t,e,r)=>{var n=r(1702),o=r(9662),i=r(4374),a=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.bind,a=o.call,c=n&&i.bind(a,a);t.exports=n?function(t){return t&&c(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},7571:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(4326),a=Object,c=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):a(t)}:a},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(8536),c=r(7854),u=r(1702),s=r(111),f=r(8880),l=r(2597),p=r(5465),v=r(6200),d=r(3501),y="Object already initialized",h=c.TypeError,g=c.WeakMap;if(a||p.state){var b=p.state||(p.state=new g),m=u(b.get),x=u(b.has),w=u(b.set);n=function(t,e){if(x(b,t))throw new h(y);return e.facade=t,w(b,t,e),e},o=function(t){return m(b,t)||{}},i=function(t){return x(b,t)}}else{var S=v("state");d[S]=!0,n=function(t,e){if(l(t,S))throw new h(y);return e.facade=t,f(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw h("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),a=r(648),c=r(5005),u=r(2788),s=function(){},f=[],l=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),d=!p.exec(s),y=function(t){if(!i(t))return!1;try{return l(s,f,t),!0}catch(t){return!1}},h=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(p,u(t))}catch(t){return!0}};h.sham=!0,t.exports=!l||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?h:y},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,a=function(t,e){var r=u[c(t)];return r==f||r!=s&&(o(e)?n(e):!!e)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(5005),o=r(614),i=r(7976),a=r(3307),c=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&i(e.prototype,c(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},6339:(t,e,r)=>{var n=r(7293),o=r(614),i=r(2597),a=r(9781),c=r(6530).CONFIGURABLE,u=r(2788),s=r(9909),f=s.enforce,l=s.get,p=Object.defineProperty,v=a&&!n((function(){return 8!==p((function(){}),"length",{value:8}).length})),d=String(String).split("String"),y=t.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!i(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&r&&i(r,"arity")&&t.length!==r.arity&&p(t,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return i(n,"source")||(n.source=d.join("string"==typeof e?e:"")),t};Function.prototype.toString=y((function(){return o(this)&&l(this).source||u(this)}),"toString")},4758:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2788),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(3353),a=r(9670),c=r(4948),u=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";e.f=n?i?function(t,e,r){if(a(t),e=c(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&v in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:p in r?r.configurable:n.configurable,enumerable:l in r?r.enumerable:n.enumerable,writable:!1})}return s(t,e,r)}:s:function(t,e,r){if(a(t),e=c(e),a(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),a=r(9114),c=r(5656),u=r(4948),s=r(2597),f=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=c(t),e=u(e),f)try{return l(t,e)}catch(t){}if(s(t,e))return a(!o(i.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),a=r(1318).indexOf,c=r(3501),u=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,f=[];for(r in n)!o(c,r)&&o(n,r)&&u(f,r);for(;e.length>s;)o(n,r=e[s++])&&(~a(f,r)||u(f,r));return f}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,e,r)=>{var n=r(6916),o=r(614),i=r(111),a=TypeError;t.exports=function(t,e){var r,c;if("string"===e&&o(r=t.toString)&&!i(c=n(r,t)))return c;if(o(r=t.valueOf)&&!i(c=n(r,t)))return c;if("string"!==e&&o(r=t.toString)&&!i(c=n(r,t)))return c;throw a("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),a=r(5181),c=r(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(c(t)),r=a.f;return r?u(e,r(t)):e}},4488:t=>{var e=TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},7152:(t,e,r)=>{var n=r(7854),o=r(2104),i=r(614),a=r(8113),c=r(206),u=r(8053),s=/MSIE .\./.test(a),f=n.Function,l=function(t){return s?function(e,r){var n=u(arguments.length,1)>2,a=i(e)?e:f(e),s=n?c(arguments,2):void 0;return t(n?function(){o(a,this,s)}:a,r)}:t};t.exports={setTimeout:l(n.setTimeout),setInterval:l(n.setInterval)}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.24.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:(t,e,r)=>{var n=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,e,r)=>{var n=r(6916),o=r(111),i=r(2190),a=r(7571),c=r(2140),u=r(5112),s=TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var r,u=a(t,f);if(u){if(void 0===e&&(e="default"),r=n(u,t,e),!o(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:t=>{var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:t=>{var e=TypeError;t.exports=function(t,r){if(t<r)throw e("Not enough arguments");return t}},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),a=r(9711),c=r(133),u=r(3307),s=o("wks"),f=n.Symbol,l=f&&f.for,p=u?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var e="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=u&&l?l(e):p(e)}return s[t]}},9554:(t,e,r)=>{"use strict";var n=r(2109),o=r(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},1539:(t,e,r)=>{var n=r(1694),o=r(8052),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),a=r(8533),c=r(8880),u=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var s in o)o[s]&&u(n[s]&&n[s].prototype);u(i)},6815:(t,e,r)=>{var n=r(2109),o=r(7854),i=r(7152).setInterval;n({global:!0,bind:!0,forced:o.setInterval!==i},{setInterval:i})},8417:(t,e,r)=>{var n=r(2109),o=r(7854),i=r(7152).setTimeout;n({global:!0,bind:!0,forced:o.setTimeout!==i},{setTimeout:i})},2564:(t,e,r)=>{r(6815),r(8417)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";r(2564),r(9554),r(1539),r(4747);function t(e,r){var n=document.createElement(r.tagName);for(var o in r.style)n.style[o]=r.style[o];if("string"==typeof r.children){var i=document.createTextNode(r.children);n.appendChild(i)}else r.children&&r.children.forEach((function(e){t(n,e)}));return e.appendChild(n),n}const e=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,o={tagName:"div",children:[{tagName:"p",children:e,style:{margin:"10px"}}],style:{position:"fixed",top:"10vh",left:"50vw",textAlign:"center",transform:"translateX(-50%)",zIndex:"9999"}};switch(r){case"danger":o.style.background="red",o.style.color="white";break;case"success":o.style.background="green",o.style.color="white"}var i=t(document.body,o);setTimeout((function(){i.remove()}),n)};function n(t){t.remove()}var o,i=!1,a=null,c=null;function u(t){var r;("Alt"!==t.key||i||(t.preventDefault(),i=!0,v(),f(!0)),"KeyP"===t.code&&t.altKey&&i)&&(t.preventDefault(),c&&n(c),"VIDEO"===(null===(r=o)||void 0===r?void 0:r.tagName)?(o.requestPictureInPicture(),o=null,i=!1,e("Video is in Picture-in-Picture mode","success"),f(!1)):e("Only video can be in Picture-in-Picture mode","danger"))}function s(t){"Alt"===t.key&&i&&(f(!1),i=!1,setTimeout((function(){c&&n(c)})),o=null)}function f(t){t?(window.addEventListener("DOMMouseScroll",l,!1),window.addEventListener("wheel",l,{passive:!1}),window.addEventListener("mousewheel",l,{passive:!1})):(window.removeEventListener("DOMMouseScroll",l),window.removeEventListener("wheel",l),window.removeEventListener("mousewheel",l))}function l(t){t.preventDefault()}function p(t){a=t.composedPath?t.composedPath()[0]:t.target,i&&v()}function v(){if(a&&a!==o){o=a,c&&n(c);var e=o.getBoundingClientRect();r=e.width,i=e.height,u=e.top,s=e.left,f=o.tagName,l="VIDEO"===f.toLocaleUpperCase()?"green":"red",p={tagName:"div",style:{border:"2px solid ".concat(l),position:"fixed",background:"none",borderRadius:"2px",padding:"0",margin:"0",width:"".concat(r-2,"px"),height:"".concat(i-2,"px"),top:"".concat(u-1,"px"),left:"".concat(s-1,"px"),pointerEvents:"none",zIndex:"9999",boxSizing:"content-box"},children:[{tagName:"span",style:{background:l,position:"fixed",display:"inline-block",color:"#fff",padding:"2px 4px",fontSize:"10px",transform:u<20?"":"translateY(calc(-100% + 2px))",top:"".concat(u<0?-1:u-1,"px"),left:"".concat(s-1,"px")},children:f}]},c=t(document.body,p)}var r,i,u,s,f,l,p}({start:function(){document.body?(e("extension start","success"),window.addEventListener("keydown",u),window.addEventListener("keyup",s),window.addEventListener("mousemove",p)):e("Unable to initialise, document.body does not exist.","danger")}}).start()})()})();