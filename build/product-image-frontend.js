(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[74,75,77],{25:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));const o=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return o(e)&&t in e}},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};Object.create,Object.create},255:function(e,t,n){"use strict";function o(e){return e.toLowerCase()}n.d(t,"a",(function(){return l}));var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function l(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,l=void 0===n?c:n,i=t.stripRegexp,s=void 0===i?r:i,u=t.transform,d=void 0===u?o:u,b=t.delimiter,f=void 0===b?" ":b,g=a(a(e,l,"$1\0$2"),s,"\0"),m=0,p=g.length;"\0"===g.charAt(m);)m++;for(;"\0"===g.charAt(p-1);)p--;return g.slice(m,p).split("\0").map(d).join(f)}function a(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(254),c=n(255);function r(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(c.a)(e,Object(o.a)({delimiter:"."},t))}(e,Object(o.a)({delimiter:"-"},t))}},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n(6),c=n.n(o),r=n(25),l=n(34);const a=e=>Object(l.a)(e)?JSON.parse(e)||{}:Object(r.a)(e)?e:{};var i=n(263),s=n(100);function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={};return Object(s.getCSSRules)(e,{selector:""}).forEach(e=>{t[e.key]=e.value}),t}function d(e,t){return e&&t?`has-${Object(i.a)(t)}-${e}`:""}const b=e=>{const t=Object(r.a)(e)?e:{style:{}},n=a(t.style),o=function(e){var t,n,o,l,a,i,s;const{backgroundColor:b,textColor:f,gradient:g,style:m}=e,p=d("background-color",b),v=d("color",f),y=function(e){if(e)return`has-${e}-gradient-background`}(g),O=y||(null==m||null===(t=m.color)||void 0===t?void 0:t.gradient);return{className:c()(v,y,{[p]:!O&&!!p,"has-text-color":f||(null==m||null===(n=m.color)||void 0===n?void 0:n.text),"has-background":b||(null==m||null===(o=m.color)||void 0===o?void 0:o.background)||g||(null==m||null===(l=m.color)||void 0===l?void 0:l.gradient),"has-link-color":Object(r.a)(null==m||null===(a=m.elements)||void 0===a?void 0:a.link)?null==m||null===(i=m.elements)||void 0===i||null===(s=i.link)||void 0===s?void 0:s.color:void 0})||void 0,style:u({color:(null==m?void 0:m.color)||{}})}}({...t,style:n}),i=function(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:o}=e,r=n?d("border-color",n):"";return c()({"has-border-color":n||(null==o||null===(t=o.border)||void 0===t?void 0:t.color),borderColorClass:r})}(e)||void 0,style:u({border:n})}}({...t,style:n}),s=function(e){const{style:t}=e;return{className:void 0,style:u({spacing:(null==t?void 0:t.spacing)||{}})}}({...t,style:n}),b=(e=>{const t=a(e.style),n=Object(r.a)(t.typography)?t.typography:{},o=Object(l.a)(n.fontFamily)?n.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:o,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:n.fontSize,fontStyle:n.fontStyle,fontWeight:n.fontWeight,letterSpacing:n.letterSpacing,lineHeight:n.lineHeight,textDecoration:n.textDecoration,textTransform:n.textTransform}}})(t);return{className:c()(b.className,o.className,i.className,s.className),style:{...b.style,...o.style,...i.style,...s.style}}}},313:function(e,t,n){"use strict";n.r(t),n.d(t,"Block",(function(){return d}));var o=n(0),c=n(1),r=n(6),l=n.n(r),a=n(24),i=n(46),s=n(264),u=n(113);n(314);const d=e=>{const{className:t,align:n}=e,r=Object(s.a)(e),{parentClassName:u}=Object(i.useInnerBlockLayoutContext)(),{product:d}=Object(i.useProductDataContext)();if(!d.id||!d.on_sale)return null;const b="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(o.createElement)("div",{className:l()("wc-block-components-product-sale-badge",t,b,{[u+"__product-onsale"]:u},r.className),style:r.style},Object(o.createElement)(a.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(u.withProductDataContext)(d)},314:function(e,t){},315:function(e,t,n){"use strict";let o;n.d(t,"a",(function(){return o})),function(e){e.SINGLE="single",e.THUMBNAIL="thumbnail"}(o||(o={}))},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o=n(9),c=n.n(o),r=n(0),l=n(1),a=n(6),i=n.n(a),s=n(2),u=n(46),d=n(264),b=n(113),f=n(53),g=n(313),m=(n(340),n(315));const p=()=>Object(r.createElement)("img",{src:s.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),v=e=>{let{image:t,loaded:n,showFullSize:o,fallbackAlt:l}=e;const{thumbnail:a,src:i,srcset:s,sizes:u,alt:d}=t||{},b={alt:d||l,hidden:!n,src:a,...o&&{src:i,srcSet:s,sizes:u}};return Object(r.createElement)(r.Fragment,null,b.src&&Object(r.createElement)("img",c()({"data-testid":"product-image"},b)),!t&&Object(r.createElement)(p,null))},y=e=>{const{className:t,imageSizing:n=m.a.SINGLE,showProductLink:o=!0,showSaleBadge:a,saleBadgeAlign:s="right",...b}=e,y=Object(d.a)(e),{parentClassName:O}=Object(u.useInnerBlockLayoutContext)(),{product:j,isLoading:h}=Object(u.useProductDataContext)(),{dispatchStoreEvent:k}=Object(f.a)();if(!j.id)return Object(r.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[O+"__product-image"]:O},y.className),style:y.style},Object(r.createElement)(p,null));const w=!!j.images.length,N=w?j.images[0]:null,S=o?"a":r.Fragment,E=Object(l.sprintf)(
/* translators: %s is referring to the product name */
Object(l.__)("Link to %s","woo-gutenberg-products-block"),j.name),C={href:j.permalink,...!w&&{"aria-label":E},onClick:()=>{k("product-view-link",{product:j})}};return Object(r.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[O+"__product-image"]:O},y.className),style:y.style},Object(r.createElement)(S,o&&C,!!a&&Object(r.createElement)(g.default,c()({align:s},b)),Object(r.createElement)(v,{fallbackAlt:j.name,image:N,loaded:!h,showFullSize:n!==m.a.THUMBNAIL})))};t.b=Object(b.withProductDataContext)(y)},340:function(e,t){},522:function(e,t,n){"use strict";n.r(t);var o=n(113),c=n(339),r={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:n(315).a.SINGLE},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1},isDescendentOfSingleProductBlock:{type:"boolean",default:!1}};t.default=Object(o.withFilteredAttributes)(r)(c.b)}}]);