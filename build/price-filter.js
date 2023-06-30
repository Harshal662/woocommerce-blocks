this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,a=t[0],l=t[1],s=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={20:0,1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;return o.push([482,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},11:function(e,t){e.exports=window.wp.compose},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)({}),o=()=>{const{wrapper:e}=Object(r.useContext)(c);return t=>{e&&e.current&&(e.current.hidden=!t)}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(9),c=n(7),o=n(0),i=n(46);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:l={},shouldSelect:s=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const u=Object(o.useRef)({results:[],isLoading:!0}),b=Object(i.a)(l),p=Object(i.a)(a),d=(()=>{const[,e]=Object(o.useState)();return Object(o.useCallback)(t=>{e(()=>{throw t})},[])})(),m=Object(c.useSelect)(e=>{if(!s)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,b,p],i=c.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");d(i)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,n,p,b,s]);return null!==m&&(u.current=m),u.current}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),c=n(1),o=n(8),i=n(7),a=n(2),l=n(5);const s=e=>{let{clientId:t,setAttributes:n,filterType:s,attributes:u}=e;const{replaceBlock:b}=Object(i.useDispatch)("core/block-editor"),{heading:p,headingLevel:d}=u;if(Object(i.useSelect)(e=>{const{getBlockParentsByBlockName:n}=e("core/block-editor");return n(t,"woocommerce/filter-wrapper").length>0},[t])||!s)return null;const m=[Object(r.createElement)(a.Button,{key:"convert",onClick:()=>{const e=[Object(o.createBlock)("woocommerce/"+s,{...u,heading:""})];p&&""!==p&&e.unshift(Object(o.createBlock)("core/heading",{content:p,level:null!=d?d:2})),b(t,Object(o.createBlock)("woocommerce/filter-wrapper",{heading:p,filterType:s},[...e])),n({heading:"",lock:{remove:!0}})},variant:"primary"},Object(c.__)("Upgrade block","woo-gutenberg-products-block"))];return Object(r.createElement)(l.Warning,{actions:m},Object(c.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woo-gutenberg-products-block"))}},132:function(e,t,n){"use strict";var r=n(0),c=n(5),o=n(11),i=n(1);n(182),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:a,instanceId:l}=e;const s="h"+n;return Object(r.createElement)(s,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+l},Object(i.__)("Block title","woo-gutenberg-products-block")),Object(r.createElement)(c.PlainText,{id:"block-title-"+l,className:"wc-block-editor-components-title",value:a,onChange:o,style:{backgroundColor:"transparent"}}))})},133:function(e,t,n){"use strict";var r=n(0);n(183),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},135:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),a=n(31);n(186),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:l=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{className:i()("wc-block-components-filter-reset-button",t),onClick:o},Object(r.createElement)(a.a,{label:n,screenReaderLabel:l}))}},136:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),a=n(31);n(187),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
l=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:s,screenReaderLabel:u=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{type:"submit",className:i()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:s},Object(r.createElement)(a.a,{label:l,screenReaderLabel:u}))}},15:function(e,t){e.exports=window.wp.url},151:function(e,t){},18:function(e,t,n){"use strict";n.d(t,"p",(function(){return o})),n.d(t,"n",(function(){return i})),n.d(t,"m",(function(){return a})),n.d(t,"o",(function(){return l})),n.d(t,"k",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"h",(function(){return b})),n.d(t,"l",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return w})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return k}));var r,c=n(3);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",a=o.pluginUrl+"build/",l=o.buildPhase,s=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=c.STORE_PAGES.checkout.id,b=(c.STORE_PAGES.checkout.permalink,c.STORE_PAGES.privacy.permalink),p=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),d=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),m=c.STORE_PAGES.cart.permalink,f=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("localPickupEnabled",!1)),g=Object(c.getSetting)("countries",{}),O=Object(c.getSetting)("countryData",{}),j=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowBilling).map(e=>[e,g[e]||""])),w=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowBilling).map(e=>[e,O[e].states||[]])),_=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowShipping).map(e=>[e,g[e]||""])),h=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowShipping).map(e=>[e,O[e].states||[]])),k=Object.fromEntries(Object.keys(O).map(e=>[e,O[e].locale||[]]))},182:function(e,t){},183:function(e,t){},186:function(e,t){},187:function(e,t){},2:function(e,t){e.exports=window.wp.components},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}const o=e=>0===Object.keys(e).length},22:function(e,t){e.exports=window.wc.priceFormat},25:function(e,t){e.exports=window.wp.isShallowEqual},252:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return b}));var r=n(15),c=n(3),o=n(88);const i=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",l="filter_";function s(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function u(e){i?window.location.href=e:window.history.replaceState({},"",e)}const b=e=>{const t=Object(r.getQueryArgs)(e);return Object(r.addQueryArgs)(e,t)}},27:function(e,t){e.exports=window.React},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),c=n(266),o=n(21),i=n(125),a=n(101),l=n(46),s=n(58),u=n(116),b=n(50);const p=e=>{let{queryAttribute:t,queryPrices:n,queryStock:p,queryRating:d,queryState:m,productIds:f,isEditor:g=!1}=e,O=Object(b.a)();O+="-collection-data";const[j]=Object(s.a)(O),[w,_]=Object(s.b)("calculate_attribute_counts",[],O),[h,k]=Object(s.b)("calculate_price_range",null,O),[y,E]=Object(s.b)("calculate_stock_status_counts",null,O),[v,S]=Object(s.b)("calculate_rating_counts",null,O),x=Object(l.a)(t||{}),C=Object(l.a)(n),N=Object(l.a)(p),F=Object(l.a)(d);Object(r.useEffect)(()=>{"object"==typeof x&&Object.keys(x).length&&(w.find(e=>Object(o.c)(x,"taxonomy")&&e.taxonomy===x.taxonomy)||_([...w,x]))},[x,w,_]),Object(r.useEffect)(()=>{h!==C&&void 0!==C&&k(C)},[C,k,h]),Object(r.useEffect)(()=>{y!==N&&void 0!==N&&E(N)},[N,E,y]),Object(r.useEffect)(()=>{v!==F&&void 0!==F&&S(F)},[F,S,v]);const[T,R]=Object(r.useState)(g),[P]=Object(c.a)(T,200);T||R(!0);const U=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(a.a)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}})).asc(["taxonomy","query_type"])),t})(j),[j]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...m,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(i.a)(f)&&{include:f},...U},shouldSelect:P})}},3:function(e,t){e.exports=window.wc.wcSettings},31:function(e,t,n){"use strict";var r=n(0),c=n(4),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:i,wrapperProps:a={}}=e;const l=null!=n,s=null!=c;return!l&&s?(t=i||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(r.createElement)(t,a,c)):(t=i||r.Fragment,l&&s&&n!==c?Object(r.createElement)(t,a,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,a,n))}},322:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},39:function(e,t,n){"use strict";var r=n(6),c=n.n(r),o=n(0),i=n(143),a=n(4),l=n.n(a);n(151);const s=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{var t;let{className:n,value:r,currency:a,onValueChange:u,displayType:b="text",...p}=e;const d="string"==typeof r?parseInt(r,10):r;if(!Number.isFinite(d))return null;const m=d/10**a.minorUnit;if(!Number.isFinite(m))return null;const f=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",n),g=null!==(t=p.decimalScale)&&void 0!==t?t:null==a?void 0:a.minorUnit,O={...p,...s(a),decimalScale:g,value:void 0,currency:void 0,onValueChange:void 0},j=u?e=>{const t=+e.value*10**a.minorUnit;u(t)}:()=>{};return Object(o.createElement)(i.a,c()({className:f,displayType:b},O,{value:m,onValueChange:j}))}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(25),o=n.n(c);function i(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},482:function(e,t,n){e.exports=n(523)},483:function(e,t){},484:function(e,t){},485:function(e,t){},5:function(e,t){e.exports=window.wp.blockEditor},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},523:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),o=n(0),i=n(8),a=n(4),l=n.n(a),s=n(74),u=n(574),b=n(5),p=n(1),d=n(3),m=n(18),f=n(132),g=n(251),O=n(2),j=n(99),w=n(58),_=n(281),h=n(39),k=n(21),y=n(113);n(485);const E=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const a=e=>Number.isFinite(e);return a(o)||(o=t||0),a(i)||(i=n||r),a(t)&&t>o&&(o=t),a(n)&&n<=o&&(o=n-r),a(t)&&t>=i&&(i=t+r),a(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]};var v=n(136);const S=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},x=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var C=n(135),N=e=>{let{minPrice:t,maxPrice:n,minConstraint:r,maxConstraint:i,onChange:a,step:s,currency:u,showInputFields:b=!0,showFilterButton:d=!1,inlineInput:m=!0,isLoading:f=!1,isUpdating:g=!1,isEditor:O=!1,onSubmit:j=(()=>{})}=e;const w=Object(o.useRef)(null),_=Object(o.useRef)(null),N=s||10**u.minorUnit,[F,T]=Object(o.useState)(t),[R,P]=Object(o.useState)(n),U=Object(o.useRef)(null),[A,B]=Object(o.useState)(0);Object(o.useEffect)(()=>{T(t)},[t]),Object(o.useEffect)(()=>{P(n)},[n]),Object(o.useLayoutEffect)(()=>{var e;m&&U.current&&B(null===(e=U.current)||void 0===e?void 0:e.offsetWidth)},[m,B]);const I=Object(o.useMemo)(()=>isFinite(r)&&isFinite(i),[r,i]),L=Object(o.useMemo)(()=>isFinite(t)&&isFinite(n)&&I?{"--low":(t-r)/(i-r)*100+"%","--high":(n-r)/(i-r)*100+"%"}:{"--low":"0%","--high":"100%"},[t,n,r,i,I]),M=Object(o.useCallback)(e=>{if(f||!I||!w.current||!_.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=w.current.offsetWidth,c=+w.current.value,o=_.current.offsetWidth,a=+_.current.value,l=r*(c/i),s=o*(a/i);Math.abs(n-l)>Math.abs(n-s)?(w.current.style.zIndex="20",_.current.style.zIndex="21"):(w.current.style.zIndex="21",_.current.style.zIndex="20")},[f,i,I]),D=Object(o.useCallback)(e=>{const c=e.target.classList.contains("wc-block-price-filter__range-input--min"),o=+e.target.value,l=c?[Math.round(o/N)*N,n]:[t,Math.round(o/N)*N],s=E(l,r,i,N,c);a(s)},[a,t,n,r,i,N]),V=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(F>=R){const e=E([0,R],null,null,N,t);return a([parseInt(e[0],10),parseInt(e[1],10)])}const n=E([F,R],null,null,N,t);a(n)},[a,N,F,R]),q=Object(y.a)(j,600),G=l()("wc-block-price-filter","wc-block-components-price-slider",b&&"wc-block-price-filter--has-input-fields",b&&"wc-block-components-price-slider--has-input-fields",d&&"wc-block-price-filter--has-filter-button",d&&"wc-block-components-price-slider--has-filter-button",!I&&"is-disabled",(m||A<=300)&&"wc-block-components-price-slider--is-input-inline"),W=Object(k.b)(w.current)?w.current.ownerDocument.activeElement:void 0,Q=W&&W===w.current?N:1,Y=W&&W===_.current?N:1,K=String(F/10**u.minorUnit),z=String(R/10**u.minorUnit),J=m&&A>300,$=Object(o.createElement)("div",{className:l()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":f&&g}),onMouseMove:M,onFocus:M},I&&Object(o.createElement)("div",{"aria-hidden":b},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:L}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(p.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":K,value:Number.isFinite(t)?t:r,onChange:D,step:Q,min:r,max:i,ref:w,disabled:f&&!I,tabIndex:b?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(p.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":z,value:Number.isFinite(n)?n:i,onChange:D,step:Y,min:r,max:i,ref:_,disabled:f,tabIndex:b?-1:0}))),X=e=>`wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,H={currency:u,decimalScale:0},Z={...H,displayType:"input",allowNegative:!1,disabled:f||!I,onBlur:V};return Object(o.createElement)("div",{className:G,ref:U},(!J||!b)&&$,b&&Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},g?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(h.a,c()({},Z,{className:X("min"),"aria-label":Object(p.__)("Filter products by minimum price","woo-gutenberg-products-block"),isAllowed:x({minConstraint:r,minorUnit:u.minorUnit,currentMaxValue:R}),onValueChange:e=>{e!==F&&T(e)},value:F})),J&&$,g?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(h.a,c()({},Z,{className:X("max"),"aria-label":Object(p.__)("Filter products by maximum price","woo-gutenberg-products-block"),isAllowed:S({maxConstraint:i,minorUnit:u.minorUnit}),onValueChange:e=>{e!==R&&P(e)},value:R}))),!b&&!g&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(o.createElement)(h.a,c()({},H,{value:t})),Object(o.createElement)(h.a,c()({},H,{value:n}))),Object(o.createElement)("div",{className:"wc-block-components-price-slider__actions"},(O||!g&&(t!==r||n!==i))&&Object(o.createElement)(C.a,{onClick:()=>{a([r,i]),q()},screenReaderLabel:Object(p.__)("Reset price filter","woo-gutenberg-products-block")}),d&&Object(o.createElement)(v.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:g,disabled:f||!I,onClick:j,screenReaderLabel:Object(p.__)("Apply price filter","woo-gutenberg-products-block")})))},F=n(133),T=n(22),R=n(15),P=n(252),U=n(88),A=n(108);const B=(e,t,n)=>{const r=10*10**t;let c=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?c=Math.ceil(o/r)*r:"ROUND_DOWN"===n&&(c=Math.floor(o/r)*r));const i=Object(j.a)(c,Number.isFinite);return Number.isFinite(c)?c:i};n(484);var I=n(110);function L(e,t){return Number(e)*10**t}var M=e=>{let{attributes:t,isEditor:n=!1}=e;const r=Object(I.a)(),c=Object(d.getSettingWithCoercion)("has_filterable_products",!1,U.a),i=Object(d.getSettingWithCoercion)("is_rendering_php_template",!1,U.a),a=n?[]:Object(d.getSettingWithCoercion)("product_ids",[],Array.isArray),[l,s]=Object(o.useState)(!1),u=Object(P.d)("min_price"),b=Object(P.d)("max_price"),[p]=Object(w.a)(),{results:m,isLoading:f}=Object(_.a)({queryPrices:!0,queryState:p,productIds:a,isEditor:n}),g=Object(T.getCurrencyFromPriceResponse)(Object(k.c)(m,"price_range")?m.price_range:void 0),[O,h]=Object(w.b)("min_price"),[E,v]=Object(w.b)("max_price"),[S,x]=Object(o.useState)(L(u,g.minorUnit)||null),[C,M]=Object(o.useState)(L(b,g.minorUnit)||null),{minConstraint:D,maxConstraint:V}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:B(t||"",r,"ROUND_DOWN"),maxConstraint:B(n||"",r,"ROUND_UP")}})({minPrice:Object(k.c)(m,"price_range")&&Object(k.c)(m.price_range,"min_price")&&Object(A.a)(m.price_range.min_price)?m.price_range.min_price:void 0,maxPrice:Object(k.c)(m,"price_range")&&Object(k.c)(m.price_range,"max_price")&&Object(A.a)(m.price_range.max_price)?m.price_range.max_price:void 0,minorUnit:g.minorUnit});Object(o.useEffect)(()=>{l||(h(L(u,g.minorUnit)),v(L(b,g.minorUnit)),s(!0))},[g.minorUnit,l,b,u,v,h]);const[q,G]=Object(o.useState)(f),W=Object(o.useCallback)((e,t)=>{const n=t>=Number(V)?void 0:t,r=e<=Number(D)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=Object(R.removeQueryArgs)(e,...Object.keys(t));return Object(R.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**g.minorUnit,max_price:n/10**g.minorUnit});window.location.href!==e&&Object(P.c)(e)}h(r),v(n)},[D,V,h,v,g.minorUnit]),Q=Object(y.a)(W,500),Y=Object(o.useCallback)(e=>{G(!0),e[0]!==S&&x(e[0]),e[1]!==C&&M(e[1]),i&&l&&!t.showFilterButton&&Q(e[0],e[1])},[S,C,x,M,i,l,Q,t.showFilterButton]);Object(o.useEffect)(()=>{t.showFilterButton||i||Q(S,C)},[S,C,t.showFilterButton,Q,i]);const K=Object(j.a)(O),z=Object(j.a)(E),J=Object(j.a)(D),$=Object(j.a)(V);if(Object(o.useEffect)(()=>{(!Number.isFinite(S)||O!==K&&O!==S||D!==J&&D!==S)&&x(Number.isFinite(O)?O:D),(!Number.isFinite(C)||E!==z&&E!==C||V!==$&&V!==C)&&M(Number.isFinite(E)?E:V)},[S,C,O,E,D,V,J,$,K,z]),!c)return r(!1),null;if(!f&&(null===D||null===V||D===V))return r(!1),null;const X="h"+t.headingLevel;r(!0),!f&&q&&G(!1);const H=Object(o.createElement)(X,{className:"wc-block-price-filter__title"},t.heading),Z=f&&q?Object(o.createElement)(F.a,null,H):H;return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&Z,Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(N,{minConstraint:D,maxConstraint:V,minPrice:S,maxPrice:C,currency:g,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:Y,onSubmit:()=>W(S,C),isLoading:f,isUpdating:q,isEditor:n})))},D=(n(483),n(131)),V=n(322);const q={heading:{type:"string",default:Object(p.__)("Filter by price","woo-gutenberg-products-block")}};Object(i.registerBlockType)(V,{icon:{src:Object(o.createElement)(s.a,{icon:u.a,className:"wc-block-editor-components-block-icon"})},attributes:{...V.attributes,...q},edit:function(e){let{attributes:t,setAttributes:n,clientId:r}=e;const{heading:c,headingLevel:i,showInputFields:a,inlineInput:l,showFilterButton:j}=t,w=Object(b.useBlockProps)();return Object(o.createElement)("div",w,0===m.p.productCount?Object(o.createElement)(O.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(s.a,{icon:u.a}),label:Object(p.__)("Filter by Price","woo-gutenberg-products-block"),instructions:Object(p.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(p.__)("To filter your products by price you first need to assign prices to your products.","woo-gutenberg-products-block")),Object(o.createElement)(O.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(d.getAdminLink)("post-new.php?post_type=product")},Object(p.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(s.a,{icon:g.a})),Object(o.createElement)(O.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(p.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(b.InspectorControls,{key:"inspector"},Object(o.createElement)(O.PanelBody,{title:Object(p.__)("Settings","woo-gutenberg-products-block")},Object(o.createElement)(O.__experimentalToggleGroupControl,{label:Object(p.__)("Price Range Selector","woo-gutenberg-products-block"),value:a?"editable":"text",onChange:e=>n({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},Object(o.createElement)(O.__experimentalToggleGroupControlOption,{value:"editable",label:Object(p.__)("Editable","woo-gutenberg-products-block")}),Object(o.createElement)(O.__experimentalToggleGroupControlOption,{value:"text",label:Object(p.__)("Text","woo-gutenberg-products-block")})),a&&Object(o.createElement)(O.ToggleControl,{label:Object(p.__)("Inline input fields","woo-gutenberg-products-block"),checked:l,onChange:()=>n({inlineInput:!l}),help:Object(p.__)("Show input fields inline with the slider.","woo-gutenberg-products-block")}),Object(o.createElement)(O.ToggleControl,{label:Object(p.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:Object(p.__)("Products will update when the button is clicked.","woo-gutenberg-products-block"),checked:j,onChange:()=>n({showFilterButton:!j})}))),Object(o.createElement)(D.a,{attributes:t,clientId:r,setAttributes:n,filterType:"price-filter"}),c&&Object(o.createElement)(f.a,{className:"wc-block-price-filter__title",headingLevel:i,heading:c,onChange:e=>n({heading:e})}),Object(o.createElement)(O.Disabled,null,Object(o.createElement)(M,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n,showInputFields:r,showFilterButton:i,heading:a,headingLevel:s}=t,u={"data-showinputfields":r,"data-showfilterbutton":i,"data-heading":a,"data-heading-level":s};return Object(o.createElement)("div",c()({},b.useBlockProps.save({className:l()("is-loading",n)}),u),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n(9),c=n(7),o=n(0),i=n(25),a=n.n(i),l=n(46),s=n(99),u=n(50);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(u.a)();n=n||i;const a=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:l}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{l(n,e,t)},[n,e,l])]},d=(e,t)=>{const n=Object(u.a)();t=t||n;const[r,c]=b(t),i=Object(l.a)(r),p=Object(l.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,p)||(c(Object.assign({},i,p)),m.current=!0)},[i,p,d,c]),m.current?[r,c]:[e,c]}},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.wp.blocks},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},9:function(e,t){e.exports=window.wc.wcBlocksData},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}}});