this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["active-filters"]=function(e){function t(t){for(var n,l,a=t[0],i=t[1],s=t[2],b=0,p=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&p.push(c[l][0]),c[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},c={5:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return o.push([409,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},102:function(e,t,r){"use strict";var n=r(0),c=r(7),o=r(1),l=r(3),a=r(11);function i(e){let{level:t}=e;const r={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return r.hasOwnProperty(t)?Object(n.createElement)(a.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(a.Path,{d:r[t]})):null}class s extends n.Component{createLevelControl(e,t,r){const c=e===t;return{icon:Object(n.createElement)(i,{level:e}),title:Object(o.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(o.__)("Heading %d","woo-gutenberg-products-block"),e),isActive:c,onClick:()=>r(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:r,selectedLevel:o,onChange:a}=this.props;return Object(n.createElement)(l.ToolbarGroup,{isCollapsed:e,icon:Object(n.createElement)(i,{level:o}),controls:Object(c.range)(t,r).map(e=>this.createLevelControl(e,o,a))})}}t.a=s},11:function(e,t){e.exports=window.wp.primitives},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(12);function c(e,t){const r=Object(n.useRef)();return Object(n.useEffect)(()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)},[e,t]),r.current}},12:function(e,t){e.exports=window.React},124:function(e,t,r){"use strict";var n=r(0),c=r(5),o=r(10),l=r(1);r(165),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:r,onChange:o,heading:a,instanceId:i}=e;const s="h"+r;return Object(n.createElement)(s,{className:t},Object(n.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+i},Object(l.__)("Block title","woo-gutenberg-products-block")),Object(n.createElement)(c.PlainText,{id:"block-title-"+i,className:"wc-block-editor-components-title",value:a,onChange:o}))})},125:function(e,t,r){"use strict";var n=r(0);r(166),t.a=e=>{let{children:t}=e;return Object(n.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},129:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0);const c=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},13:function(e,t){e.exports=window.wp.htmlEntities},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(17),c=r(9),o=r(0),l=r(51),a=r(129);const i=e=>{const{namespace:t,resourceName:r,resourceValues:i=[],query:s={},shouldSelect:u=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(l.a)(s),d=Object(l.a)(i),m=Object(a.a)(),f=Object(c.useSelect)(e=>{if(!u)return null;const c=e(n.COLLECTIONS_STORE_KEY),o=[t,r,p,d],l=c.getCollectionError(...o);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(l)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,r,d,p,u]);return null!==f&&(b.current=f),b.current}},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},15:function(e,t){e.exports=window.wp.url},165:function(e,t){},166:function(e,t){},17:function(e,t){e.exports=window.wc.wcBlocksData},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o}));var n=r(7);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const o=e.filter(e=>e.attribute===r.taxonomy),l=o.length?o[0]:null;if(!(l&&l.slug&&Array.isArray(l.slug)&&l.slug.includes(c)))return;const a=l.slug.filter(e=>e!==c),i=e.filter(e=>e.attribute!==r.taxonomy);a.length>0&&(l.slug=a.sort(),i.push(l)),t(Object(n.sortBy)(i,"attribute"))},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in";if(!r||!r.taxonomy)return[];const l=e.filter(e=>e.attribute!==r.taxonomy);return 0===c.length?t(l):(l.push({attribute:r.taxonomy,operator:o,slug:c.map(e=>{let{slug:t}=e;return t}).sort()}),t(Object(n.sortBy)(l,"attribute"))),l}},196:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}));var n=r(2);const c=Object(n.getSetting)("attributes",[]).reduce((e,t)=>{const r=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;var n;return r&&r.id&&e.push(r),e},[]),o=e=>{if(e)return c.find(t=>t.id===e)},l=e=>{if(e)return c.find(t=>t.taxonomy===e)}},24:function(e,t){e.exports=window.wp.isShallowEqual},247:function(e,t,r){"use strict";var n=r(6),c=r.n(n),o=r(0),l=r(4),a=r.n(l),i=r(1),s=r(119),u=r(536);r(196);var b=e=>{let{text:t,screenReaderText:r="",element:n="li",className:l="",radius:i="small",children:s=null,...u}=e;const b=n,p=a()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+i),d=Boolean(r&&r!==t);return Object(o.createElement)(b,c()({className:p},u),Object(o.createElement)("span",{"aria-hidden":d,className:"wc-block-components-chip__text"},t),d&&Object(o.createElement)("span",{className:"screen-reader-text"},r),s)};t.a=e=>{let{ariaLabel:t="",className:r="",disabled:n=!1,onRemove:l=(()=>{}),removeOnAnyClick:p=!1,text:d,screenReaderText:m="",...f}=e;const g=p?"span":"button";if(!t){const e=m&&"string"==typeof m?m:d;t="string"!=typeof e?
/* translators: Remove chip. */
Object(i.__)("Remove","woo-gutenberg-products-block"):Object(i.sprintf)(
/* translators: %s text of the chip to remove. */
Object(i.__)('Remove "%s"',"woo-gutenberg-products-block"),e)}const O={"aria-label":t,disabled:n,onClick:l,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||l()}},j=p?O:{},v=p?{"aria-hidden":!0}:O;return Object(o.createElement)(b,c()({},f,j,{className:a()(r,"is-removable"),element:p?"button":f.element,screenReaderText:m,text:d}),Object(o.createElement)(g,c()({className:"wc-block-components-chip__remove"},v),Object(o.createElement)(s.a,{className:"wc-block-components-chip__remove-icon",icon:u.a,size:16})))}},26:function(e,t){e.exports=window.wc.priceFormat},267:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return u}));var n=r(15),c=r(2),o=r(143);const l=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",i="filter_";function s(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function u(e){l?window.location.href=e:window.history.replaceState({},"",e)}},29:function(e,t,r){"use strict";var n=r(0),c=r(4),o=r.n(c);t.a=e=>{let t,{label:r,screenReaderLabel:c,wrapperElement:l,wrapperProps:a={}}=e;const i=null!=r,s=null!=c;return!i&&s?(t=l||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(n.createElement)(t,a,c)):(t=l||n.Fragment,i&&s&&r!==c?Object(n.createElement)(t,a,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,a,r))}},3:function(e,t){e.exports=window.wp.components},300:function(e){e.exports=JSON.parse('{"name":"woocommerce/active-filters","version":"1.0.0","title":"Active Product Filters","description":"Display the currently active product filters.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false}},"attributes":{"displayStyle":{"type":"string","default":"list"},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},33:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return n(e)&&t in e}},402:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(33);const c=e=>Object(n.b)(e,"count")&&Object(n.b)(e,"description")&&Object(n.b)(e,"id")&&Object(n.b)(e,"name")&&Object(n.b)(e,"parent")&&Object(n.b)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,o=e=>Array.isArray(e)&&e.every(c),l=e=>Object(n.b)(e,"attribute")&&Object(n.b)(e,"operator")&&Object(n.b)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every(e=>"string"==typeof e),a=e=>Array.isArray(e)&&e.every(l)},409:function(e,t,r){e.exports=r(469)},410:function(e,t){},411:function(e,t){},469:function(e,t,r){"use strict";r.r(t);var n=r(6),c=r.n(n),o=r(0),l=r(1),a=r(8),i=r(11),s=Object(o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(o.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(o.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),u=r(119),b=r(4),p=r.n(b),d=r(5),m=r(102),f=r(124),g=r(3),O=r(77),j=r(2),v=r(29),y=r(143),h=r(33),w=r(402),_=r(267),k=r(125);r(411);var E=r(219),S=r(26),x=r(247),C=r(15),N=r(536);const A=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?Object(l.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(l.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),Object(S.formatPrice)(e),Object(S.formatPrice)(t)):Number.isFinite(e)?Object(l.sprintf)(
/* translators: %s min price */
Object(l.__)("From %s","woo-gutenberg-products-block"),Object(S.formatPrice)(e)):Object(l.sprintf)(
/* translators: %s max price */
Object(l.__)("Up to %s","woo-gutenberg-products-block"),Object(S.formatPrice)(t)),L=e=>{let{type:t,name:r,prefix:n="",removeCallback:c=(()=>null),showLabel:a=!0,displayStyle:i}=e;const s=n?Object(o.createElement)(o.Fragment,null,n," ",r):r,b=Object(l.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(l.__)("Remove %s filter","woo-gutenberg-products-block"),r);return Object(o.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},a&&Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===i?Object(o.createElement)(x.a,{element:"span",text:s,onRemove:c,radius:"large",ariaLabel:b}):Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-name"},Object(o.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:c},Object(o.createElement)(u.a,{className:"wc-block-components-chip__remove-icon",icon:N.a,size:16}),Object(o.createElement)(v.a,{screenReaderLabel:b})),s))},R=function(){if(!window)return;const e=window.location.href,t=Object(C.getQueryArgs)(e),r=Object(C.removeQueryArgs)(e,...Object.keys(t));for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];c.forEach(e=>{if("string"==typeof e)return delete t[e];if("object"==typeof e){const r=Object.keys(e)[0],n=t[r].toString().split(",");t[r]=n.filter(t=>t!==e[r]).join(",")}});const l=Object.fromEntries(Object.entries(t).filter(e=>{let[,t]=e;return t})),a=Object(C.addQueryArgs)(r,l);Object(_.c)(a)},T=["min_price","max_price","rating_filter","filter_","query_type_"],H=e=>{let t=!1;for(let r=0;T.length>r;r++){const n=T[r];if(n===e.substring(0,n.length)){t=!0;break}}return t};var V=r(130),F=r(13),P=r(179),z=e=>{let{attributeObject:t,slugs:r=[],operator:n="in",displayStyle:c,isLoadingCallback:a}=e;const{results:i,isLoading:s}=Object(V.a)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[t.id]}),[u,b]=Object(O.b)("attributes",[]);if(Object(o.useEffect)(()=>{a(s)},[s,a]),!Array.isArray(i)||!Object(w.b)(i)||!Object(w.a)(u))return null;const p=t.label,d=Object(j.getSettingWithCoercion)("is_rendering_php_template",!1,y.a);return Object(o.createElement)("li",null,Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-type"},p,":"),Object(o.createElement)("ul",null,r.map((e,r)=>{const a=i.find(t=>t.slug===e);if(!a)return null;let m="";return r>0&&"and"===n&&(m=Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},Object(l.__)("All","woo-gutenberg-products-block"))),L({type:p,name:Object(F.decodeEntities)(a.name||e),prefix:m,isLoading:s,removeCallback:()=>{const r=u.find(e=>{let{attribute:r}=e;return r==="pa_"+t.name});1===(null==r?void 0:r.slug.length)?R("query_type_"+t.name,"filter_"+t.name):R({["filter_"+t.name]:e}),d||Object(P.a)(u,b,t,e)},showLabel:!1,displayStyle:c})})))},M=e=>{let{displayStyle:t,isLoading:r}=e;return r?Object(o.createElement)(o.Fragment,null,[...Array("list"===t?2:3)].map((e,r)=>Object(o.createElement)("li",{className:"list"===t?"show-loading-state-list":"show-loading-state-chips",key:r},Object(o.createElement)("span",{className:"show-loading-state__inner"})))):null},B=e=>{let{attributes:t,isEditor:r=!1}=e;const n=function(){const e=Object(o.useRef)(!1);return Object(o.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),Object(o.useCallback)(()=>e.current,[])}()(),c=Object(j.getSettingWithCoercion)("is_rendering_php_template",!1,y.a),[a,i]=Object(o.useState)(!0),s=(()=>{if(!window)return!1;const e=window.location.href,t=Object(C.getQueryArgs)(e),r=Object.keys(t);let n=!1;for(let e=0;r.length>e;e++){const t=r[e];if(H(t)){n=!0;break}}return n})()&&!r&&a,[u,b]=Object(O.b)("attributes",[]),[d,m]=Object(O.b)("stock_status",[]),[f,g]=Object(O.b)("min_price"),[S,x]=Object(O.b)("max_price"),N=Object(j.getSetting)("stockStatusOptions",[]),T=Object(j.getSetting)("attributes",[]),V=Object(o.useMemo)(()=>{return!s&&0!==d.length&&(e=d,Array.isArray(e)&&e.every(e=>["instock","outofstock","onbackorder"].includes(e)))&&(e=>Object(h.a)(e)&&Object.keys(e).every(e=>["instock","outofstock","onbackorder"].includes(e)))(N)?d.map(e=>L({type:Object(l.__)("Stock Status","woo-gutenberg-products-block"),name:N[e],removeCallback:()=>{if(R({filter_stock_status:e}),!c){const t=d.filter(t=>t!==e);m(t)}},displayStyle:t.displayStyle})):null;var e},[s,N,d,m,t.displayStyle,c]),F=Object(o.useMemo)(()=>s||!Number.isFinite(f)&&!Number.isFinite(S)?null:L({type:Object(l.__)("Price","woo-gutenberg-products-block"),name:A(f,S),removeCallback:()=>{R("max_price","min_price"),c||(g(void 0),x(void 0))},displayStyle:t.displayStyle}),[s,f,S,t.displayStyle,g,x,c]),P=Object(o.useMemo)(()=>!Object(w.a)(u)&&n||!u.length&&!(e=>{if(!window)return!1;const t=e.map(e=>"filter_"+e.attribute_name),r=window.location.href,n=Object(C.getQueryArgs)(r),c=Object.keys(n);let o=!1;for(let e=0;c.length>e;e++){const r=c[e];if(t.includes(r)){o=!0;break}}return o})(T)?(i(!1),null):u.map(e=>{const r=Object(E.b)(e.attribute);return r?Object(o.createElement)(z,{attributeObject:r,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator,isLoadingCallback:i}):(i(!1),null)}),[n,i,u,t.displayStyle]),[B,Q]=Object(O.b)("ratings");Object(o.useEffect)(()=>{var e;if(!c)return;if(B.length&&B.length>0)return;const t=null===(e=Object(_.d)("rating_filter"))||void 0===e?void 0:e.toString();t&&Q(t.split(","))},[c,B,Q]);const D=Object(o.useMemo)(()=>{return!s&&0!==B.length&&(e=B,Array.isArray(e)&&e.every(e=>["1","2","3","4","5"].includes(e)))?B.map(e=>L({type:Object(l.__)("Rating","woo-gutenberg-products-block"),name:Object(l.sprintf)(
/* translators: %s is referring to the average rating value */
Object(l.__)("Rated %s out of 5","woo-gutenberg-products-block"),e),removeCallback:()=>{if(c)return R({rating_filter:e});const t=B.filter(t=>t!==e);Q(t)},displayStyle:t.displayStyle})):null;var e},[s,B,Q,t.displayStyle,c]);if(!s&&!(u.length>0||d.length>0||B.length>0||Number.isFinite(f)||Number.isFinite(S))&&!r)return null;const Y="h"+t.headingLevel,G=Object(o.createElement)(Y,{className:"wc-block-active-filters__title"},t.heading),K=s?Object(o.createElement)(k.a,null,G):G;if(!Object(j.getSettingWithCoercion)("has_filterable_products",!1,y.a))return null;const W=p()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle,"wc-block-active-filters--loading":s});return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&K,Object(o.createElement)("div",{className:"wc-block-active-filters"},Object(o.createElement)("ul",{className:W},r?Object(o.createElement)(o.Fragment,null,L({type:Object(l.__)("Size","woo-gutenberg-products-block"),name:Object(l.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),L({type:Object(l.__)("Color","woo-gutenberg-products-block"),name:Object(l.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(M,{isLoading:s,displayStyle:t.displayStyle}),F,V,P,D)),s?Object(o.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):Object(o.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{(()=>{if(!window)return;const e=window.location.href,t=Object(C.getQueryArgs)(e),r=Object(C.removeQueryArgs)(e,...Object.keys(t)),n=Object.fromEntries(Object.keys(t).filter(e=>!H(e)).map(e=>[e,t[e]])),c=Object(C.addQueryArgs)(r,n);Object(_.c)(c)})(),c||(g(void 0),x(void 0),b([]),m([]))}},Object(o.createElement)(v.a,{label:Object(l.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:Object(l.__)("Clear All Filters","woo-gutenberg-products-block")}))))};r(410);var Q=Object(g.withSpokenMessages)(e=>{let{attributes:t,setAttributes:r}=e;const{className:n,displayStyle:c,heading:a,headingLevel:i}=t,s=Object(d.useBlockProps)({className:n});return Object(o.createElement)("div",s,Object(o.createElement)(d.InspectorControls,{key:"inspector"},Object(o.createElement)(g.PanelBody,{title:Object(l.__)("Display Settings","woo-gutenberg-products-block")},Object(o.createElement)(g.__experimentalToggleGroupControl,{label:Object(l.__)("Display Style","woo-gutenberg-products-block"),value:c,onChange:e=>r({displayStyle:e}),className:"wc-block-active-filter__style-toggle"},Object(o.createElement)(g.__experimentalToggleGroupControlOption,{value:"list",label:Object(l.__)("List","woo-gutenberg-products-block")}),Object(o.createElement)(g.__experimentalToggleGroupControlOption,{value:"chips",label:Object(l.__)("Chips","woo-gutenberg-products-block")})),Object(o.createElement)("p",null,Object(l.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(m.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:i,onChange:e=>r({headingLevel:e})}))),Object(o.createElement)(f.a,{className:"wc-block-active-filters__title",headingLevel:i,heading:a,onChange:e=>r({heading:e})}),Object(o.createElement)(g.Disabled,null,Object(o.createElement)(B,{attributes:t,isEditor:!0})))}),D=r(300);const Y={heading:{type:"string",default:Object(l.__)("Active filters","woo-gutenberg-products-block")}};Object(a.registerBlockType)(D,{title:Object(l.__)("Active Product Filters","woo-gutenberg-products-block"),description:Object(l.__)("Display the currently active product filters.","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(u.a,{icon:s,className:"wc-block-editor-components-block-icon"})},attributes:{...D.attributes,...Y},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:r}=e;return"woocommerce_layered_nav_filters"===t&&!(null==r||!r.raw)},transform:e=>{var t;let{instance:r}=e;return Object(a.createBlock)("woocommerce/active-filters",{displayStyle:"list",heading:(null==r||null===(t=r.raw)||void 0===t?void 0:t.title)||Object(l.__)("Active filters","woo-gutenberg-products-block"),headingLevel:3})}}]},edit:Q,save(e){let{attributes:t}=e;const{className:r,displayStyle:n,heading:l,headingLevel:a}=t,i={"data-display-style":n,"data-heading":l,"data-heading-level":a};return Object(o.createElement)("div",c()({},d.useBlockProps.save({className:p()("is-loading",r)}),i),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-product-filters__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0),c=r(24),o=r.n(c);function l(e){const t=Object(n.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},53:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);const c=Object(n.createContext)("page"),o=()=>Object(n.useContext)(c);c.Provider},7:function(e,t){e.exports=window.lodash},77:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return d}));var n=r(17),c=r(9),o=r(0),l=r(24),a=r.n(l),i=r(51),s=r(115),u=r(53);const b=e=>{const t=Object(u.a)();e=e||t;const r=Object(c.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[r,Object(o.useCallback)(t=>{l(e,t)},[e,l])]},p=(e,t,r)=>{const l=Object(u.a)();r=r||l;const a=Object(c.useSelect)(c=>c(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t),[r,e]),{setQueryValue:i}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{i(r,e,t)},[r,e,i])]},d=(e,t)=>{const r=Object(u.a)();t=t||r;const[n,c]=b(t),l=Object(i.a)(n),p=Object(i.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,p)||(c(Object.assign({},l,p)),m.current=!0)},[l,p,d,c]),m.current?[n,c]:[e,c]}},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.wp.data}});