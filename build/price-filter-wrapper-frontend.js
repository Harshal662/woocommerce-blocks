(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[71,75],{116:function(e,t,n){"use strict";var r=n(0);n(195),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},117:function(e,t,n){"use strict";var r=n(0),c=n(1),i=n(6),o=n.n(i),a=n(26);n(196),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:i,screenReaderLabel:l=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{className:o()("wc-block-components-filter-reset-button",t),onClick:i},Object(r.createElement)(a.a,{label:n,screenReaderLabel:l}))}},118:function(e,t,n){"use strict";var r=n(0),c=n(1),i=n(6),o=n.n(i),a=n(26);n(197),t.a=e=>{let{className:t,isLoading:n,disabled:i,label:
/* translators: Submit button text for filters. */
l=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:s,screenReaderLabel:u=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{type:"submit",className:o()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:i,onClick:s},Object(r.createElement)(a.a,{label:l,screenReaderLabel:u}))}},195:function(e,t){},196:function(e,t){},197:function(e,t){},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),c=n(126),i=n(27),o=n(200),a=n(84),l=n(45),s=n(62),u=n(95),b=n(35);const d=e=>{let{queryAttribute:t,queryPrices:n,queryStock:d,queryRating:m,queryState:p,productIds:f,isEditor:O=!1}=e,j=Object(b.a)();j+="-collection-data";const[g]=Object(s.a)(j),[_,v]=Object(s.b)("calculate_attribute_counts",[],j),[y,h]=Object(s.b)("calculate_price_range",null,j),[w,k]=Object(s.b)("calculate_stock_status_counts",null,j),[E,N]=Object(s.b)("calculate_rating_counts",null,j),x=Object(l.a)(t||{}),C=Object(l.a)(n),S=Object(l.a)(d),F=Object(l.a)(m);Object(r.useEffect)(()=>{"object"==typeof x&&Object.keys(x).length&&(_.find(e=>Object(i.b)(x,"taxonomy")&&e.taxonomy===x.taxonomy)||v([..._,x]))},[x,_,v]),Object(r.useEffect)(()=>{y!==C&&void 0!==C&&h(C)},[C,h,y]),Object(r.useEffect)(()=>{w!==S&&void 0!==S&&k(S)},[S,k,w]),Object(r.useEffect)(()=>{E!==F&&void 0!==F&&N(F)},[F,N,E]);const[R,U]=Object(r.useState)(O),[L]=Object(c.a)(R,200);R||U(!0);const I=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(a.a)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}})).asc(["taxonomy","query_type"])),t})(g),[g]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.a)(f)&&{include:f},...I},shouldSelect:L})}},257:function(e,t,n){"use strict";var r=n(10),c=n.n(r),i=n(0),o=n(270),a=n(6),l=n.n(a);n(260);const s=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{var t;let{className:n,value:r,currency:a,onValueChange:u,displayType:b="text",...d}=e;const m="string"==typeof r?parseInt(r,10):r;if(!Number.isFinite(m))return null;const p=m/10**a.minorUnit;if(!Number.isFinite(p))return null;const f=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",n),O=null!==(t=d.decimalScale)&&void 0!==t?t:null==a?void 0:a.minorUnit,j={...d,...s(a),decimalScale:O,value:void 0,currency:void 0,onValueChange:void 0},g=u?e=>{const t=+e.value*10**a.minorUnit;u(t)}:()=>{};return Object(i.createElement)(o.a,c()({className:f,displayType:b},j,{value:p,onValueChange:g}))}},26:function(e,t,n){"use strict";var r=n(0),c=n(6),i=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:o,wrapperProps:a={}}=e;const l=null!=n,s=null!=c;return!l&&s?(t=o||"span",a={...a,className:i()(a.className,"screen-reader-text")},Object(r.createElement)(t,a,c)):(t=o||r.Fragment,l&&s&&n!==c?Object(r.createElement)(t,a,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,a,n))}},260:function(e,t){},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(6),c=n.n(r),i=n(27),o=n(36),a=n(264),l=n(100);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={};return Object(l.getCSSRules)(e,{selector:""}).forEach(e=>{t[e.key]=e.value}),t}function u(e,t){return e&&t?`has-${Object(a.a)(t)}-${e}`:""}const b=e=>{const t=(e=>{const t=Object(i.a)(e)?e:{style:{}};let n=t.style;return Object(o.a)(n)&&(n=JSON.parse(n)||{}),Object(i.a)(n)||(n={}),{...t,style:n}})(e),n=function(e){var t,n,r,o,a,l,b;const{backgroundColor:d,textColor:m,gradient:p,style:f}=e,O=u("background-color",d),j=u("color",m),g=function(e){if(e)return`has-${e}-gradient-background`}(p),_=g||(null==f||null===(t=f.color)||void 0===t?void 0:t.gradient);return{className:c()(j,g,{[O]:!_&&!!O,"has-text-color":m||(null==f||null===(n=f.color)||void 0===n?void 0:n.text),"has-background":d||(null==f||null===(r=f.color)||void 0===r?void 0:r.background)||p||(null==f||null===(o=f.color)||void 0===o?void 0:o.gradient),"has-link-color":Object(i.a)(null==f||null===(a=f.elements)||void 0===a?void 0:a.link)?null==f||null===(l=f.elements)||void 0===l||null===(b=l.link)||void 0===b?void 0:b.color:void 0}),style:s({color:(null==f?void 0:f.color)||{}})}}(t),r=function(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:r}=e,i=n?u("border-color",n):"";return c()({"has-border-color":n||(null==r||null===(t=r.border)||void 0===t?void 0:t.color),borderColorClass:i})}(e),style:s({border:n})}}(t),a=function(e){var t;return{className:void 0,style:s({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),l=(e=>{const t=Object(i.a)(e.style.typography)?e.style.typography:{},n=Object(o.a)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:n,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:c()(l.className,n.className,r.className,a.className),style:{...l.style,...n.style,...r.style,...a.style}}}},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);const c=Object(r.createContext)("page"),i=()=>Object(r.useContext)(c);c.Provider},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},440:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},441:function(e,t){},442:function(e,t){},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=n(18),i=n.n(c);function o(e){const t=Object(r.useRef)(e);return i()(e,t.current)||(t.current=e),t.current}},486:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(6),i=n.n(c),o=n(265),a=n(36),l=n(67),s=n(62),u=n(248),b=n(10),d=n.n(b),m=n(1),p=n(257),f=n(27),O=n(88);n(442);const j=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[i,o]=e;const a=e=>Number.isFinite(e);return a(i)||(i=t||0),a(o)||(o=n||r),a(t)&&t>i&&(i=t),a(n)&&n<=i&&(i=n-r),a(t)&&t>=o&&(o=t+r),a(n)&&n<o&&(o=n),!c&&i>=o&&(i=o-r),c&&o<=i&&(o=i+r),[i,o]};var g=n(118);const _=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},v=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var y=n(117),h=e=>{let{minPrice:t,maxPrice:n,minConstraint:c,maxConstraint:o,onChange:a,step:l,currency:s,showInputFields:u=!0,showFilterButton:b=!1,inlineInput:h=!0,isLoading:w=!1,isUpdating:k=!1,isEditor:E=!1,onSubmit:N=(()=>{})}=e;const x=Object(r.useRef)(null),C=Object(r.useRef)(null),S=l||10**s.minorUnit,[F,R]=Object(r.useState)(t),[U,L]=Object(r.useState)(n),I=Object(r.useRef)(null),[T,A]=Object(r.useState)(0);Object(r.useEffect)(()=>{R(t)},[t]),Object(r.useEffect)(()=>{L(n)},[n]),Object(r.useLayoutEffect)(()=>{var e;h&&I.current&&A(null===(e=I.current)||void 0===e?void 0:e.offsetWidth)},[h,A]);const P=Object(r.useMemo)(()=>isFinite(c)&&isFinite(o),[c,o]),V=Object(r.useMemo)(()=>isFinite(t)&&isFinite(n)&&P?{"--low":(t-c)/(o-c)*100+"%","--high":(n-c)/(o-c)*100+"%"}:{"--low":"0%","--high":"100%"},[t,n,c,o,P]),B=Object(r.useCallback)(e=>{if(w||!P||!x.current||!C.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=x.current.offsetWidth,c=+x.current.value,i=C.current.offsetWidth,a=+C.current.value,l=r*(c/o),s=i*(a/o);Math.abs(n-l)>Math.abs(n-s)?(x.current.style.zIndex="20",C.current.style.zIndex="21"):(x.current.style.zIndex="21",C.current.style.zIndex="20")},[w,o,P]),W=Object(r.useCallback)(e=>{const r=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=+e.target.value,l=r?[Math.round(i/S)*S,n]:[t,Math.round(i/S)*S],s=j(l,c,o,S,r);a(s)},[a,t,n,c,o,S]),q=Object(r.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(F>=U){const e=j([0,U],null,null,S,t);return a([parseInt(e[0],10),parseInt(e[1],10)])}const n=j([F,U],null,null,S,t);a(n)},[a,S,F,U]),M=Object(O.a)(N,600),Q=i()("wc-block-price-filter","wc-block-components-price-slider",u&&"wc-block-price-filter--has-input-fields",u&&"wc-block-components-price-slider--has-input-fields",b&&"wc-block-price-filter--has-filter-button",b&&"wc-block-components-price-slider--has-filter-button",!P&&"is-disabled",(h||T<=300)&&"wc-block-components-price-slider--is-input-inline"),D=Object(f.a)(x.current)?x.current.ownerDocument.activeElement:void 0,z=D&&D===x.current?S:1,Y=D&&D===C.current?S:1,$=String(F/10**s.minorUnit),K=String(U/10**s.minorUnit),J=h&&T>300,H=Object(r.createElement)("div",{className:i()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":w&&k}),onMouseMove:B,onFocus:B},P&&Object(r.createElement)("div",{"aria-hidden":u},Object(r.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:V}),Object(r.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(m.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":$,value:Number.isFinite(t)?t:c,onChange:W,step:z,min:c,max:o,ref:x,disabled:w&&!P,tabIndex:u?-1:0}),Object(r.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(m.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":K,value:Number.isFinite(n)?n:o,onChange:W,step:Y,min:c,max:o,ref:C,disabled:w,tabIndex:u?-1:0}))),X=e=>`wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,G={currency:s,decimalScale:0},Z={...G,displayType:"input",allowNegative:!1,disabled:w||!P,onBlur:q};return Object(r.createElement)("div",{className:Q,ref:I},(!J||!u)&&H,u&&Object(r.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},k?Object(r.createElement)("div",{className:"input-loading"}):Object(r.createElement)(p.a,d()({},Z,{className:X("min"),"aria-label":Object(m.__)("Filter products by minimum price","woo-gutenberg-products-block"),isAllowed:v({minConstraint:c,minorUnit:s.minorUnit,currentMaxValue:U}),onValueChange:e=>{e!==F&&R(e)},value:F})),J&&H,k?Object(r.createElement)("div",{className:"input-loading"}):Object(r.createElement)(p.a,d()({},Z,{className:X("max"),"aria-label":Object(m.__)("Filter products by maximum price","woo-gutenberg-products-block"),isAllowed:_({maxConstraint:o,minorUnit:s.minorUnit}),onValueChange:e=>{e!==U&&L(e)},value:U}))),!u&&!k&&Number.isFinite(t)&&Number.isFinite(n)&&Object(r.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(r.createElement)(p.a,d()({},G,{value:t})),Object(r.createElement)(p.a,d()({},G,{value:n}))),Object(r.createElement)("div",{className:"wc-block-components-price-slider__actions"},(E||!k&&(t!==c||n!==o))&&Object(r.createElement)(y.a,{onClick:()=>{a([c,o]),M()},screenReaderLabel:Object(m.__)("Reset price filter","woo-gutenberg-products-block")}),b&&Object(r.createElement)(g.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:k,disabled:w||!P,onClick:N,screenReaderLabel:Object(m.__)("Apply price filter","woo-gutenberg-products-block")})))},w=n(116),k=n(30),E=n(2),N=n(19),x=n(98),C=n(89);const S=(e,t,n)=>{const r=10*10**t;let c=null;const i=parseFloat(e);isNaN(i)||("ROUND_UP"===n?c=Math.ceil(i/r)*r:"ROUND_DOWN"===n&&(c=Math.floor(i/r)*r));const o=Object(l.a)(c,Number.isFinite);return Number.isFinite(c)?c:o};n(441);var F=n(61);function R(e,t){return Number(e)*10**t}var U=e=>{let{attributes:t,isEditor:n=!1}=e;const c=Object(F.b)(),i=Object(E.getSettingWithCoercion)("has_filterable_products",!1,C.a),o=Object(E.getSettingWithCoercion)("is_rendering_php_template",!1,C.a),b=n?[]:Object(E.getSettingWithCoercion)("product_ids",[],Array.isArray),[d,m]=Object(r.useState)(!1),p=Object(x.d)("min_price"),j=Object(x.d)("max_price"),[g]=Object(s.a)(),{results:_,isLoading:v}=Object(u.a)({queryPrices:!0,queryState:g,productIds:b,isEditor:n}),y=Object(k.getCurrencyFromPriceResponse)(Object(f.b)(_,"price_range")?_.price_range:void 0),[U,L]=Object(s.b)("min_price"),[I,T]=Object(s.b)("max_price"),[A,P]=Object(r.useState)(R(p,y.minorUnit)||null),[V,B]=Object(r.useState)(R(j,y.minorUnit)||null),{minConstraint:W,maxConstraint:q}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:S(t||"",r,"ROUND_DOWN"),maxConstraint:S(n||"",r,"ROUND_UP")}})({minPrice:Object(f.b)(_,"price_range")&&Object(f.b)(_.price_range,"min_price")&&Object(a.a)(_.price_range.min_price)?_.price_range.min_price:void 0,maxPrice:Object(f.b)(_,"price_range")&&Object(f.b)(_.price_range,"max_price")&&Object(a.a)(_.price_range.max_price)?_.price_range.max_price:void 0,minorUnit:y.minorUnit});Object(r.useEffect)(()=>{d||(L(R(p,y.minorUnit)),T(R(j,y.minorUnit)),m(!0))},[y.minorUnit,d,j,p,T,L]);const[M,Q]=Object(r.useState)(v),D=Object(r.useCallback)((e,t)=>{const n=t>=Number(q)?void 0:t,r=e<=Number(W)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=Object(N.removeQueryArgs)(e,...Object.keys(t));return Object(N.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**y.minorUnit,max_price:n/10**y.minorUnit});window.location.href!==e&&Object(x.c)(e)}L(r),T(n)},[W,q,L,T,y.minorUnit]),z=Object(O.a)(D,500),Y=Object(r.useCallback)(e=>{Q(!0),e[0]!==A&&P(e[0]),e[1]!==V&&B(e[1]),o&&d&&!t.showFilterButton&&z(e[0],e[1])},[A,V,P,B,o,d,z,t.showFilterButton]);Object(r.useEffect)(()=>{t.showFilterButton||o||z(A,V)},[A,V,t.showFilterButton,z,o]);const $=Object(l.a)(U),K=Object(l.a)(I),J=Object(l.a)(W),H=Object(l.a)(q);if(Object(r.useEffect)(()=>{(!Number.isFinite(A)||U!==$&&U!==A||W!==J&&W!==A)&&P(Number.isFinite(U)?U:W),(!Number.isFinite(V)||I!==K&&I!==V||q!==H&&q!==V)&&B(Number.isFinite(I)?I:q)},[A,V,U,I,W,q,J,H,$,K]),!i)return c(!1),null;if(!v&&(null===W||null===q||W===q))return c(!1),null;const X="h"+t.headingLevel;c(!0),!v&&M&&Q(!1);const G=Object(r.createElement)(X,{className:"wc-block-price-filter__title"},t.heading),Z=v&&M?Object(r.createElement)(w.a,null,G):G;return Object(r.createElement)(r.Fragment,null,!n&&t.heading&&Z,Object(r.createElement)("div",{className:"wc-block-price-slider"},Object(r.createElement)(h,{minConstraint:W,maxConstraint:q,minPrice:A,maxPrice:V,currency:y,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:Y,onSubmit:()=>D(A,V),isLoading:v,isUpdating:M,isEditor:n})))},L=n(440);t.default=e=>{const t=Object(o.a)(e),n=(c=e,{heading:Object(a.a)(null==c?void 0:c.heading)?c.heading:"",headingLevel:Object(a.a)(null==c?void 0:c.headingLevel)&&parseInt(c.headingLevel,10)||L.attributes.headingLevel.default,showFilterButton:"true"===(null==c?void 0:c.showFilterButton),showInputFields:"false"!==(null==c?void 0:c.showInputFields),inlineInput:"true"===(null==c?void 0:c.inlineInput)});var c;return Object(r.createElement)("div",{className:i()(Object(a.a)(e.className)?e.className:"",t.className),style:t.style},Object(r.createElement)(U,{isEditor:!1,attributes:n}))}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m}));var r=n(3),c=n(5),i=n(0),o=n(18),a=n.n(o),l=n(45),s=n(67),u=n(35);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:o}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(i.useCallback)(t=>{o(e,t)},[e,o])]},d=(e,t,n)=>{const o=Object(u.a)();n=n||o;const a=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:l}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[a,Object(i.useCallback)(t=>{l(n,e,t)},[n,e,l])]},m=(e,t)=>{const n=Object(u.a)();t=t||n;const[r,c]=b(t),o=Object(l.a)(r),d=Object(l.a)(e),m=Object(s.a)(d),p=Object(i.useRef)(!1);return Object(i.useEffect)(()=>{a()(m,d)||(c(Object.assign({},o,d)),p.current=!0)},[o,d,m,c]),p.current?[r,c]:[e,c]}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),c=n(5),i=n(0),o=n(45);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:l={},shouldSelect:s=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const u=Object(i.useRef)({results:[],isLoading:!0}),b=Object(o.a)(l),d=Object(o.a)(a),m=(()=>{const[,e]=Object(i.useState)();return Object(i.useCallback)(t=>{e(()=>{throw t})},[])})(),p=Object(c.useSelect)(e=>{if(!s)return null;const c=e(r.COLLECTIONS_STORE_KEY),i=[t,n,b,d],o=c.getCollectionError(...i);if(o){if(!(o instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(o)}return{results:c.getCollection(...i),isLoading:!c.hasFinishedResolution("getCollection",i)}},[t,n,d,b,s]);return null!==p&&(u.current=p),u.current}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return b}));var r=n(19),c=n(2),i=n(89);const o=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,i.a),a="query_type_",l="filter_";function s(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function u(e){o?window.location.href=e:window.history.replaceState({},"",e)}const b=e=>{const t=Object(r.getQueryArgs)(e);return Object(r.addQueryArgs)(e,t)}}}]);