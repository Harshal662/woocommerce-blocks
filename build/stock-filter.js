this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["stock-filter"]=function(e){function t(t){for(var n,l,s=t[0],a=t[1],i=t[2],b=0,d=[];b<s.length;b++)l=s[b],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,s=1;s<c.length;s++){var a=c[s];0!==o[a]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},o={49:0,1:0},r=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=a;return r.push([491,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wc.wcBlocksData},100:function(e,t){e.exports=window.wp.warning},104:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);const o=Object(n.createContext)({}),r=()=>{const{wrapper:e}=Object(n.useContext)(o);return t=>{e&&e.current&&(e.current.hidden=!t)}}},106:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0);function o(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},11:function(e,t){e.exports=window.wp.primitives},110:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(10),o=c(7),r=c(0),l=c(44);const s=e=>{const{namespace:t,resourceName:c,resourceValues:s=[],query:a={},shouldSelect:i=!0}=e;if(!t||!c)throw new Error("The options object must have valid values for the namespace and the resource properties.");const u=Object(r.useRef)({results:[],isLoading:!0}),b=Object(l.a)(a),d=Object(l.a)(s),p=(()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])})(),f=Object(o.useSelect)(e=>{if(!i)return null;const o=e(n.COLLECTIONS_STORE_KEY),r=[t,c,b,d],l=o.getCollectionError(...r);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");p(l)}return{results:o.getCollection(...r),isLoading:!o.hasFinishedResolution("getCollection",r)}},[t,c,d,b,i]);return null!==f&&(u.current=f),u.current}},115:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(30);c(277),t.a=e=>{let{name:t,count:c}=e;return Object(n.createElement)(n.Fragment,null,t,null!==c&&Number.isFinite(c)&&Object(n.createElement)(r.a,{label:c.toString(),screenReaderLabel:Object(o.sprintf)(
/* translators: %s number of products. */
Object(o._n)("%s product","%s products",c,"woo-gutenberg-products-block"),c),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},119:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(5),o=c(24),r=c(77);const l=e=>{const t=Object(o.b)(e)?e:{},c=Object(r.a)(t.style);return Object(n.__experimentalUseBorderProps)({...t,style:c})}},12:function(e,t){e.exports=window.wp.compose},127:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(0),o=c(1),r=c(8),l=c(7),s=c(2),a=c(5);const i=e=>{let{clientId:t,setAttributes:c,filterType:i,attributes:u}=e;const{replaceBlock:b}=Object(l.useDispatch)("core/block-editor"),{heading:d,headingLevel:p}=u;if(Object(l.useSelect)(e=>{const{getBlockParentsByBlockName:c}=e("core/block-editor");return c(t,"woocommerce/filter-wrapper").length>0},[t])||!i)return null;const f=[Object(n.createElement)(s.Button,{key:"convert",onClick:()=>{const e=[Object(r.createBlock)("woocommerce/"+i,{...u,heading:""})];d&&""!==d&&e.unshift(Object(r.createBlock)("core/heading",{content:d,level:null!=p?p:2})),b(t,Object(r.createBlock)("woocommerce/filter-wrapper",{heading:d,filterType:i},[...e])),c({heading:"",lock:{remove:!0}})},variant:"primary"},Object(o.__)("Upgrade block","woo-gutenberg-products-block"))];return Object(n.createElement)(a.Warning,{actions:f},Object(o.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woo-gutenberg-products-block"))}},128:function(e,t,c){"use strict";var n=c(0),o=c(5),r=c(12),l=c(1);c(171),t.a=Object(r.withInstanceId)(e=>{let{className:t,headingLevel:c,onChange:r,heading:s,instanceId:a}=e;const i="h"+c;return Object(n.createElement)(i,{className:t},Object(n.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(l.__)("Block title","woo-gutenberg-products-block")),Object(n.createElement)(o.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:s,onChange:r,style:{backgroundColor:"transparent"}}))})},129:function(e,t,c){"use strict";var n=c(0);c(172),t.a=e=>{let{children:t}=e;return Object(n.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},13:function(e,t){e.exports=window.wc.blocksCheckout},131:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(4),l=c.n(r),s=c(30);c(175),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
c=Object(o.__)("Reset","woo-gutenberg-products-block"),onClick:r,screenReaderLabel:a=Object(o.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{className:l()("wc-block-components-filter-reset-button",t),onClick:r},Object(n.createElement)(s.a,{label:c,screenReaderLabel:a}))}},132:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(4),l=c.n(r),s=c(30);c(176),t.a=e=>{let{className:t,isLoading:c,disabled:r,label:
/* translators: Submit button text for filters. */
a=Object(o.__)("Apply","woo-gutenberg-products-block"),onClick:i,screenReaderLabel:u=Object(o.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{type:"submit",className:l()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":c},t),disabled:r,onClick:i},Object(n.createElement)(s.a,{label:a,screenReaderLabel:u}))}},133:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},16:function(e,t){e.exports=window.wp.url},160:function(e,t,c){"use strict";var n=c(6),o=c.n(n),r=c(0),l=c(321),s=c(4),a=c.n(s);c(210),t.a=e=>{let{className:t,style:c,suggestions:n,multiple:s=!0,saveTransform:i=(e=>e.trim().replace(/\s/g,"-")),messages:u={},validateInput:b=(e=>n.includes(e)),label:d="",...p}=e;return Object(r.createElement)("div",{className:a()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!s}),style:c},Object(r.createElement)(l.a,o()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:b,saveTransform:i,maxLength:s?void 0:1,suggestions:n,messages:u},p)))}},161:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(4),l=c.n(r),s=c(13);c(211),t.a=e=>{let{className:t,onChange:c,options:r=[],checked:a=[],isLoading:i=!1,isDisabled:u=!1,limit:b=10}=e;const[d,p]=Object(n.useState)(!1),f=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),m=Object(n.useMemo)(()=>{const e=r.length-b;return!d&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{p(!0)},"aria-expanded":!1,"aria-label":Object(o.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(o._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(o.sprintf)(
/* translators: %s number of options to reveal. */
Object(o._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[r,b,d]),O=Object(n.useMemo)(()=>d&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{p(!1)},"aria-expanded":!0,"aria-label":Object(o.__)("Show less options","woo-gutenberg-products-block")},Object(o.__)("Show less","woo-gutenberg-products-block"))),[d]),g=Object(n.useMemo)(()=>{const e=r.length>b+5;return Object(n.createElement)(n.Fragment,null,r.map((t,o)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!d&&o>=b&&{hidden:!0},Object(n.createElement)(s.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:a.includes(t.value),onChange:()=>{c(t.value)},disabled:u})),e&&o===b-1&&m)),e&&O)},[r,c,a,d,b,O,m,u]),j=l()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":i},t);return Object(n.createElement)("ul",{className:j},i?f:g)}},17:function(e,t){e.exports=window.wp.htmlEntities},171:function(e,t){},172:function(e,t){},175:function(e,t){},176:function(e,t){},184:function(e){e.exports=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":true,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},2:function(e,t){e.exports=window.wp.components},210:function(e,t){},211:function(e,t){},24:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return o})),c.d(t,"a",(function(){return r}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function o(e,t){return n(e)&&t in e}const r=e=>0===Object.keys(e).length},245:function(e,t,c){"use strict";c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return a})),c.d(t,"d",(function(){return i})),c.d(t,"c",(function(){return u}));var n=c(16),o=c(3),r=c(133);const l=Object(o.getSettingWithCoercion)("is_rendering_php_template",!1,r.a),s="query_type_",a="filter_";function i(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function u(e){l?window.location.href=e:window.history.replaceState({},"",e)}},26:function(e,t){e.exports=window.wp.isShallowEqual},277:function(e,t){},278:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c(0),o=c(263),r=c(9),l=c(44),s=c(24),a=c(56),i=c(110),u=c(50);const b=e=>{let{queryAttribute:t,queryPrices:c,queryStock:b,queryRating:d,queryState:p,productIds:f,isEditor:m=!1}=e,O=Object(u.a)();O+="-collection-data";const[g]=Object(a.a)(O),[j,w]=Object(a.b)("calculate_attribute_counts",[],O),[k,h]=Object(a.b)("calculate_price_range",null,O),[_,y]=Object(a.b)("calculate_stock_status_counts",null,O),[v,E]=Object(a.b)("calculate_rating_counts",null,O),S=Object(l.a)(t||{}),x=Object(l.a)(c),C=Object(l.a)(b),N=Object(l.a)(d);Object(n.useEffect)(()=>{"object"==typeof S&&Object.keys(S).length&&(j.find(e=>Object(s.c)(S,"taxonomy")&&e.taxonomy===S.taxonomy)||w([...j,S]))},[S,j,w]),Object(n.useEffect)(()=>{k!==x&&void 0!==x&&h(x)},[x,h,k]),Object(n.useEffect)(()=>{_!==C&&void 0!==C&&y(C)},[C,y,_]),Object(n.useEffect)(()=>{v!==N&&void 0!==N&&E(N)},[N,E,v]);const[T,R]=Object(n.useState)(m),[L]=Object(o.a)(T,200);T||R(!0);const A=Object(n.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(r.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:c}=e;return{taxonomy:t,query_type:c}}),["taxonomy","query_type"])),t})(g),[g]);return Object(i.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(r.isEmpty)(f)&&{include:f},...A},shouldSelect:L})}},28:function(e,t){e.exports=window.React},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t,c){"use strict";var n=c(0),o=c(4),r=c.n(o);t.a=e=>{let t,{label:c,screenReaderLabel:o,wrapperElement:l,wrapperProps:s={}}=e;const a=null!=c,i=null!=o;return!a&&i?(t=l||"span",s={...s,className:r()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,o)):(t=l||n.Fragment,a&&i&&c!==o?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,s,c))}},36:function(e,t){e.exports=window.wp.deprecated},44:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(0),o=c(26),r=c.n(o);function l(e){const t=Object(n.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},48:function(e,t){e.exports=window.wp.a11y},491:function(e,t,c){e.exports=c(510)},492:function(e,t){},493:function(e,t){},5:function(e,t){e.exports=window.wp.blockEditor},50:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);const o=Object(n.createContext)("page"),r=()=>Object(n.useContext)(o);o.Provider},510:function(e,t,c){"use strict";c.r(t);var n=c(6),o=c.n(n),r=c(0),l=c(8),s=c(79),a=c(556),i=c(4),u=c.n(i),b=c(5),d=c(1),p=c(128),f=c(2),m=c(48),O=c(564),g=c(119),j=c(44),w=c(106),k=c(56),h=c(278),_=c(3),y=c(161),v=c(132),E=c(131),S=c(129),x=c(115),C=c(160),N=c(26),T=c.n(N),R=c(17),L=c(133),A=c(24),B=c(16),F=c(245),P=c(9);const I=[{value:"preview-1",name:"In Stock",label:Object(r.createElement)(x.a,{name:"In Stock",count:3}),textLabel:"In Stock (3)"},{value:"preview-2",name:"Out of stock",label:Object(r.createElement)(x.a,{name:"Out of stock",count:3}),textLabel:"Out of stock (3)"},{value:"preview-3",name:"On backorder",label:Object(r.createElement)(x.a,{name:"On backorder",count:2}),textLabel:"On backorder (2)"}];c(493);var M=c(66),q=c(184);function D(){return Math.floor(Math.random()*Date.now())}const Q=e=>e.trim().replace(/\s/g,"").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,"");var W=c(104);const Y=F.a+"stock_status";var U=e=>{let{attributes:t,isEditor:c=!1}=e;const n=Object(W.a)(),o=Object(_.getSettingWithCoercion)("is_rendering_php_template",!1,L.a),[l,a]=Object(r.useState)(!1),{outofstock:i,...b}=Object(_.getSetting)("stockStatusOptions",{}),p=c?[]:Object(_.getSettingWithCoercion)("product_ids",[],Array.isArray),f=Object(r.useRef)(Object(_.getSetting)("hideOutOfStockItems",!1)?b:{outofstock:i,...b}),N=Object(r.useMemo)(()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"filter_stock_status";const c=Object(F.d)(t);if(!c)return[];const n=Object(M.a)(c)?c.split(","):c;return Object.keys(e).filter(e=>n.includes(e))}(f.current,Y),[]),[q,U]=Object(r.useState)(N),[V,G]=Object(r.useState)(t.isPreview?I:[]),[K]=Object(r.useState)(Object.entries(f.current).map(e=>{let[t,c]=e;return{slug:t,name:c}}).filter(e=>!!e.name).sort((e,t)=>e.slug.localeCompare(t.slug))),[J]=Object(k.a)(),[$,z]=Object(k.b)("stock_status",N),{results:H,isLoading:Z}=Object(h.a)({queryStock:!0,queryState:J,productIds:p,isEditor:c}),X=Object(r.useCallback)(e=>Object(A.c)(H,"stock_status_counts")&&Array.isArray(H.stock_status_counts)?H.stock_status_counts.find(t=>{let{status:c,count:n}=t;return c===e&&0!==Number(n)}):null,[H]),[ee,te]=Object(r.useState)(D()),ce=Object(g.a)(t);Object(r.useEffect)(()=>{if(Z||t.isPreview)return;const e=K.map(e=>{const c=X(e.slug);if(!(c||q.includes(e.slug)||(n=e.slug,null!=J&&J.stock_status&&J.stock_status.some(e=>{let{status:t=[]}=e;return t.includes(n)}))))return null;var n;const o=c?Number(c.count):0;return{value:e.slug,name:Object(R.decodeEntities)(e.name),label:Object(r.createElement)(x.a,{name:Object(R.decodeEntities)(e.name),count:t.showCounts?o:null}),textLabel:t.showCounts?`${Object(R.decodeEntities)(e.name)} (${o})`:Object(R.decodeEntities)(e.name)}}).filter(e=>!!e);G(e),te(D())},[t.showCounts,t.isPreview,Z,X,q,J.stock_status,K]);const ne="single"!==t.selectType,oe=Object(r.useCallback)(e=>{c||(e&&!o&&z(e),(e=>{if(!window)return;if(0===e.length){const e=Object(B.removeQueryArgs)(window.location.href,Y);return void(e!==window.location.href&&Object(F.c)(e))}const t=Object(B.addQueryArgs)(window.location.href,{[Y]:e.join(",")});t!==window.location.href&&Object(F.c)(t)})(e))},[c,z,o]);Object(r.useEffect)(()=>{t.showFilterButton||oe(q)},[t.showFilterButton,q,oe]);const re=Object(r.useMemo)(()=>$,[$]),le=Object(j.a)(re),se=Object(w.a)(le);Object(r.useEffect)(()=>{T()(se,le)||T()(q,le)||U(le)},[q,le,se]),Object(r.useEffect)(()=>{l||(z(N),a(!0))},[z,l,a,N]);const ae=Object(r.useCallback)(e=>{const t=e=>{const t=V.find(t=>t.value===e);return t?t.name:null},c=e=>{let{filterAdded:c,filterRemoved:n}=e;const o=c?t(c):null,r=n?t(n):null;o?Object(m.speak)(Object(d.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(d.__)("%s filter added.","woo-gutenberg-products-block"),o)):r&&Object(m.speak)(Object(d.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(d.__)("%s filter removed.","woo-gutenberg-products-block"),r))},n=q.includes(e);if(!ne){const t=n?[]:[e];return c(n?{filterRemoved:e}:{filterAdded:e}),void U(t)}if(n){const t=q.filter(t=>t!==e);return c({filterRemoved:e}),void U(t)}const o=[...q,e].sort();c({filterAdded:e}),U(o)},[q,ne,V]);if(!Z&&0===V.length)return n(!1),null;const ie="h"+t.headingLevel,ue=!t.isPreview&&!f.current||0===V.length,be=!t.isPreview&&Z;if(!Object(_.getSettingWithCoercion)("has_filterable_products",!1,L.a))return n(!1),null;const de=ne?!ue&&q.length<V.length:!ue&&0===q.length,pe=Object(r.createElement)(ie,{className:"wc-block-stock-filter__title"},t.heading),fe=ue?Object(r.createElement)(S.a,null,pe):pe;return n(!0),Object(r.createElement)(r.Fragment,null,!c&&t.heading&&fe,Object(r.createElement)("div",{className:u()("wc-block-stock-filter","style-"+t.displayStyle,{"is-loading":ue})},"dropdown"===t.displayStyle?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(C.a,{key:ee,className:u()(ce.className,{"single-selection":!ne,"is-loading":ue}),style:{...ce.style},suggestions:V.filter(e=>!q.includes(e.value)).map(e=>e.value),disabled:ue,placeholder:Object(d.__)("Select stock status","woo-gutenberg-products-block"),onChange:e=>{!ne&&e.length>1&&(e=e.slice(-1)),e=e.map(e=>{const t=V.find(t=>t.value===e);return t?t.value:e});const t=Object(P.difference)(e,q);if(1===t.length)return ae(t[0]);const c=Object(P.difference)(q,e);1===c.length&&ae(c[0])},value:q,displayTransform:e=>{const t=V.find(t=>t.value===e);return t?t.textLabel:e},saveTransform:Q,messages:{added:Object(d.__)("Stock filter added.","woo-gutenberg-products-block"),removed:Object(d.__)("Stock filter removed.","woo-gutenberg-products-block"),remove:Object(d.__)("Remove stock filter.","woo-gutenberg-products-block"),__experimentalInvalid:Object(d.__)("Invalid stock filter.","woo-gutenberg-products-block")}}),de&&Object(r.createElement)(s.a,{icon:O.a,size:30})):Object(r.createElement)(y.a,{className:"wc-block-stock-filter-list",options:V,checked:q,onChange:ae,isLoading:ue,isDisabled:be})),Object(r.createElement)("div",{className:"wc-block-stock-filter__actions"},(q.length>0||c)&&!ue&&Object(r.createElement)(E.a,{onClick:()=>{U([]),oe([])},screenReaderLabel:Object(d.__)("Reset stock filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(r.createElement)(v.a,{className:"wc-block-stock-filter__button",isLoading:ue,disabled:ue||be,onClick:()=>oe(q)})))},V=(c(492),c(127)),G=Object(f.withSpokenMessages)(e=>{let{clientId:t,attributes:c,setAttributes:n}=e;const{className:o,heading:l,headingLevel:s,showCounts:a,showFilterButton:i,selectType:m,displayStyle:O}=c,g=Object(b.useBlockProps)({className:u()("wc-block-stock-filter",o)});return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(b.InspectorControls,{key:"inspector"},Object(r.createElement)(f.PanelBody,{title:Object(d.__)("Display Settings","woo-gutenberg-products-block")},Object(r.createElement)(f.ToggleControl,{label:Object(d.__)("Display product count","woo-gutenberg-products-block"),checked:a,onChange:()=>n({showCounts:!a})}),Object(r.createElement)(f.__experimentalToggleGroupControl,{label:Object(d.__)("Allow selecting multiple options?","woo-gutenberg-products-block"),value:m||"multiple",onChange:e=>n({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},Object(r.createElement)(f.__experimentalToggleGroupControlOption,{value:"multiple",label:Object(d.__)("Multiple","woo-gutenberg-products-block")}),Object(r.createElement)(f.__experimentalToggleGroupControlOption,{value:"single",label:Object(d.__)("Single","woo-gutenberg-products-block")})),Object(r.createElement)(f.__experimentalToggleGroupControl,{label:Object(d.__)("Display Style","woo-gutenberg-products-block"),value:O,onChange:e=>n({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},Object(r.createElement)(f.__experimentalToggleGroupControlOption,{value:"list",label:Object(d.__)("List","woo-gutenberg-products-block")}),Object(r.createElement)(f.__experimentalToggleGroupControlOption,{value:"dropdown",label:Object(d.__)("Dropdown","woo-gutenberg-products-block")})),Object(r.createElement)(f.ToggleControl,{label:Object(d.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:Object(d.__)("Products will update when the button is clicked.","woo-gutenberg-products-block"),checked:i,onChange:e=>n({showFilterButton:e})}))),Object(r.createElement)(V.a,{clientId:t,attributes:c,setAttributes:n,filterType:"stock-filter"}),Object(r.createElement)("div",g,l&&Object(r.createElement)(p.a,{className:"wc-block-stock-filter__title",headingLevel:s,heading:l,onChange:e=>n({heading:e})}),Object(r.createElement)(f.Disabled,null,Object(r.createElement)(U,{attributes:c,isEditor:!0}))))});const K={heading:{type:"string",default:Object(d.__)("Filter by stock status","woo-gutenberg-products-block")}};Object(l.registerBlockType)(q,{icon:{src:Object(r.createElement)(s.a,{icon:a.a,className:"wc-block-editor-components-block-icon"})},attributes:{...q.attributes,...K},edit:G,save(e){let{attributes:t}=e;const{className:c,showCounts:n,heading:l,headingLevel:s,showFilterButton:a}=t,i={"data-show-counts":n,"data-heading":l,"data-heading-level":s};return a&&(i["data-show-filter-button"]=a),Object(r.createElement)("div",o()({},b.useBlockProps.save({className:u()("is-loading",c)}),i),Object(r.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-stock-filter__placeholder"}))}})},54:function(e,t){e.exports=window.wp.keycodes},56:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return d})),c.d(t,"c",(function(){return p}));var n=c(10),o=c(7),r=c(0),l=c(26),s=c.n(l),a=c(44),i=c(106),u=c(50);const b=e=>{const t=Object(u.a)();e=e||t;const c=Object(o.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[c,Object(r.useCallback)(t=>{l(e,t)},[e,l])]},d=(e,t,c)=>{const l=Object(u.a)();c=c||l;const s=Object(o.useSelect)(o=>o(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(c,e,t),[c,e]),{setQueryValue:a}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[s,Object(r.useCallback)(t=>{a(c,e,t)},[c,e,a])]},p=(e,t)=>{const c=Object(u.a)();t=t||c;const[n,o]=b(t),l=Object(a.a)(n),d=Object(a.a)(e),p=Object(i.a)(d),f=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{s()(p,d)||(o(Object.assign({},l,d)),f.current=!0)},[l,d,p,o]),f.current?[n,o]:[e,o]}},66:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},68:function(e,t){e.exports=window.wp.dom},7:function(e,t){e.exports=window.wp.data},77:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(66),o=c(24);const r=e=>Object(n.a)(e)?JSON.parse(e)||{}:Object(o.b)(e)?e:{}},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.lodash}});