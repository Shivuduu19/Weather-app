(()=>{"use strict";const t=async function(t){const e=`http://api.openweathermap.org/geo/1.0/direct?q=${t}&appid=8c5e8b09e1cb051feaffc91ff767b8f5`;return(await fetch(e,{mode:"cors"}).then((function(t){return t.json()})).then((t=>t)))[0]},e=async function(t){const e=`https://api.openweathermap.org/data/2.5/weather?lat=${t.lat}&lon=${t.lon}&exclude={minutely}&appid=8c5e8b09e1cb051feaffc91ff767b8f5&units=metric`,n=await fetch(e,{mode:"cors"});return await n.json()};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===n(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function i(t){r(1,arguments);var e=a(t),n=e.getUTCDay(),o=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-o),e.setUTCHours(0,0,0,0),e}function u(t){r(1,arguments);var e=a(t),n=e.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var u=i(o),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var d=i(s);return e.getTime()>=u.getTime()?n+1:e.getTime()>=d.getTime()?n:n-1}var s={};function d(){return s}function c(t,e){var n,i,u,s,c,l,h,f;r(1,arguments);var m=d(),g=o(null!==(n=null!==(i=null!==(u=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(c=e.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==u?u:m.weekStartsOn)&&void 0!==i?i:null===(h=m.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=a(t),v=w.getUTCDay(),b=(v<g?7:0)+v-g;return w.setUTCDate(w.getUTCDate()-b),w.setUTCHours(0,0,0,0),w}function l(t,e){var n,i,u,s,l,h,f,m;r(1,arguments);var g=a(t),w=g.getUTCFullYear(),v=d(),b=o(null!==(n=null!==(i=null!==(u=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(l=e.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==u?u:v.firstWeekContainsDate)&&void 0!==i?i:null===(f=v.locale)||void 0===f||null===(m=f.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(w+1,0,b),y.setUTCHours(0,0,0,0);var p=c(y,e),T=new Date(0);T.setUTCFullYear(w,0,b),T.setUTCHours(0,0,0,0);var C=c(T,e);return g.getTime()>=p.getTime()?w+1:g.getTime()>=C.getTime()?w:w-1}function h(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const f=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return h("yy"===e?r%100:r,e.length)},m=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):h(n+1,2)},g=function(t,e){return h(t.getUTCDate(),e.length)},w=function(t,e){return h(t.getUTCHours()%12||12,e.length)},v=function(t,e){return h(t.getUTCHours(),e.length)},b=function(t,e){return h(t.getUTCMinutes(),e.length)},y=function(t,e){return h(t.getUTCSeconds(),e.length)},p=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return h(Math.floor(r*Math.pow(10,n-3)),e.length)};var T={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return f(t,e)},Y:function(t,e,n,r){var a=l(t,r),o=a>0?a:1-a;return"YY"===e?h(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):h(o,e.length)},R:function(t,e){return h(u(t),e.length)},u:function(t,e){return h(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return h(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return h(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return m(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return h(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){var u=function(t,e){r(1,arguments);var n=a(t),i=c(n,e).getTime()-function(t,e){var n,a,i,u,s,h,f,m;r(1,arguments);var g=d(),w=o(null!==(n=null!==(a=null!==(i=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(h=s.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==a?a:null===(f=g.locale)||void 0===f||null===(m=f.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1),v=l(t,e),b=new Date(0);return b.setUTCFullYear(v,0,w),b.setUTCHours(0,0,0,0),c(b,e)}(n,e).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===e?n.ordinalNumber(u,{unit:"week"}):h(u,e.length)},I:function(t,e,n){var o=function(t){r(1,arguments);var e=a(t),n=i(e).getTime()-function(t){r(1,arguments);var e=u(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),i(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(o,{unit:"week"}):h(o,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):g(t,e)},D:function(t,e,n){var o=function(t){r(1,arguments);var e=a(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var o=n-e.getTime();return Math.floor(o/864e5)+1}(t);return"Do"===e?n.ordinalNumber(o,{unit:"dayOfYear"}):h(o,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return h(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return h(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return h(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y(t,e)},S:function(t,e){return p(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return M(a);case"XXXX":case"XX":return D(a);default:return D(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return M(a);case"xxxx":case"xx":return D(a);default:return D(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+C(a,":");default:return"GMT"+D(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+C(a,":");default:return"GMT"+D(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return h(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return h((r._originalDate||t).getTime(),e.length)}};function C(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+h(o,2)}function M(t,e){return t%60==0?(t>0?"-":"+")+h(Math.abs(t)/60,2):D(t,e)}function D(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+h(Math.floor(a/60),2)+n+h(a%60,2)}const k=T;var S=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},U={p:x,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return S(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",S(a,e)).replace("{{time}}",x(o,e))}};const P=U;var W=["D","DD"],E=["YY","YYYY"];function Y(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function N(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var O,j={date:N({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:N({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:N({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},F={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function H(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return i=t.valueCallback?t.valueCallback(d):d,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const L={code:"en-US",formatDistance:function(t,e,n){var r,a=q[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:j,formatRelative:function(t,e,n,r){return F[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:H({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:H({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:H({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:H({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:H({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(O={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(O.matchPattern);if(!n)return null;var r=n[0],a=t.match(O.parsePattern);if(!a)return null;var o=O.valueCallback?O.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,B=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,G=/''/g,X=/[a-zA-Z]/;function R(t,e,i){var u,s,c,l,h,f,m,g,w,v,b,y,p,T,C,M,D,S;r(2,arguments);var x=String(e),U=d(),q=null!==(u=null!==(s=null==i?void 0:i.locale)&&void 0!==s?s:U.locale)&&void 0!==u?u:L,N=o(null!==(c=null!==(l=null!==(h=null!==(f=null==i?void 0:i.firstWeekContainsDate)&&void 0!==f?f:null==i||null===(m=i.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==h?h:U.firstWeekContainsDate)&&void 0!==l?l:null===(w=U.locale)||void 0===w||null===(v=w.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==c?c:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var O=o(null!==(b=null!==(y=null!==(p=null!==(T=null==i?void 0:i.weekStartsOn)&&void 0!==T?T:null==i||null===(C=i.locale)||void 0===C||null===(M=C.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==p?p:U.weekStartsOn)&&void 0!==y?y:null===(D=U.locale)||void 0===D||null===(S=D.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==b?b:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!q.localize)throw new RangeError("locale must contain localize property");if(!q.formatLong)throw new RangeError("locale must contain formatLong property");var j=a(t);if(!function(t){if(r(1,arguments),!function(t){return r(1,arguments),t instanceof Date||"object"===n(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=a(t);return!isNaN(Number(e))}(j))throw new RangeError("Invalid time value");var F=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(j),H=function(t,e){return r(2,arguments),function(t,e){r(2,arguments);var n=a(t).getTime(),i=o(e);return new Date(n+i)}(t,-o(e))}(j,F),z={firstWeekContainsDate:N,weekStartsOn:O,locale:q,_originalDate:j};return x.match(B).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,P[e])(t,q.formatLong):t})).join("").match(A).map((function(n){if("''"===n)return"'";var r,a,o=n[0];if("'"===o)return(a=(r=n).match(Q))?a[1].replace(G,"'"):r;var u,s=k[o];if(s)return null!=i&&i.useAdditionalWeekYearTokens||(u=n,-1===E.indexOf(u))||Y(n,e,String(t)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==W.indexOf(t)}(n)||Y(n,e,String(t)),s(H,n,q.localize,z);if(o.match(X))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return n})).join("")}const I=document.getElementById("search-form"),J=document.getElementById("search-input"),$=document.getElementById("search-btn");I.addEventListener("submit",(t=>t.preventDefault())),$.addEventListener("click",(async()=>{if(""===J.value)return;const n=await t(J.value),r=await e(n);!function(t,e){if(!e)return;console.log(e);const n=document.querySelector(".card-location"),r=document.querySelector(".card-day"),o=document.querySelector(".card-date"),i=document.querySelector(".card-time"),u=document.querySelector(".card-temp"),s=document.querySelector(".card-desc"),d=R(a(new Date,e.timezone),"EEEE~do MMM R~p"),[c,l,h]=d.split("~");n.innerText=`${t} ${e.sys.country}`,n.setAttribute("data-lat",e.coord.lat),n.setAttribute("data-lon",e.coord.lon),r.innerText=c,o.innerText=l,i.innerText=h,u.innerText=e.main.temp+" C",s.innerText=e.weather[0].description}(J.value,r)}))})();