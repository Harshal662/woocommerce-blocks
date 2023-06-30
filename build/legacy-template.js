this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["legacy-template"]=function(e){function t(t){for(var c,i,l=t[0],a=t[1],s=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);for(u&&u(t);d.length;)d.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],c=!0,l=1;l<o.length;l++){var a=o[l];0!==r[a]&&(c=!1)}c&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var c={},r={17:0},n=[];function i(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=c,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(o,c,function(t){return e[t]}.bind(null,c));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=a;return n.push([471,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},112:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return s}));var c=o(0),r=o(2),n=o(1),i=o(333),l=o(71);const a="core/post-template",s="woocommerce/product-query/product-template";Object(l.a)(a,{blockDescription:Object(n.__)("Contains the block elements used to render a product, like its name, featured image, rating, and more.","woo-gutenberg-products-block"),blockIcon:Object(c.createElement)(r.Icon,{icon:i.a}),blockTitle:Object(n.__)("Product template","woo-gutenberg-products-block"),variationName:s})},173:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return s}));var c=o(0),r=o(2),n=o(79),i=o(193),l=o(71);const a="core/post-excerpt",s="woocommerce/product-query/product-summary";Object(l.a)(a,{blockDescription:n.a,blockIcon:Object(c.createElement)(r.Icon,{icon:i.a}),blockTitle:n.c,variationName:s})},18:function(e,t,o){"use strict";o.d(t,"p",(function(){return n})),o.d(t,"n",(function(){return i})),o.d(t,"m",(function(){return l})),o.d(t,"o",(function(){return a})),o.d(t,"k",(function(){return s})),o.d(t,"e",(function(){return u})),o.d(t,"h",(function(){return p})),o.d(t,"l",(function(){return d})),o.d(t,"c",(function(){return b})),o.d(t,"d",(function(){return m})),o.d(t,"g",(function(){return g})),o.d(t,"a",(function(){return w})),o.d(t,"b",(function(){return O})),o.d(t,"i",(function(){return j})),o.d(t,"j",(function(){return y})),o.d(t,"f",(function(){return h}));var c,r=o(3);const n=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=n.pluginUrl+"images/",l=n.pluginUrl+"build/",a=n.buildPhase,s=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=r.STORE_PAGES.checkout.id,p=(r.STORE_PAGES.checkout.permalink,r.STORE_PAGES.privacy.permalink),d=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),b=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),m=r.STORE_PAGES.cart.permalink,g=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("localPickupEnabled",!1)),k=Object(r.getSetting)("countries",{}),f=Object(r.getSetting)("countryData",{}),w=Object.fromEntries(Object.keys(f).filter(e=>!0===f[e].allowBilling).map(e=>[e,k[e]||""])),O=Object.fromEntries(Object.keys(f).filter(e=>!0===f[e].allowBilling).map(e=>[e,f[e].states||[]])),j=Object.fromEntries(Object.keys(f).filter(e=>!0===f[e].allowShipping).map(e=>[e,k[e]||""])),y=Object.fromEntries(Object.keys(f).filter(e=>!0===f[e].allowShipping).map(e=>[e,f[e].states||[]])),h=Object.fromEntries(Object.keys(f).map(e=>[e,f[e].locale||[]]))},188:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var c=o(21);const r=e=>{if(Object(c.b)(e)){const t=e.getEditedPostType();return"wp_template"===t||"wp_template_part"===t}return!1}},198:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var c=o(0),r=o(8),n=o(2),i=o(1),l=o(207),a=o(3),s=o(7),u=o(188),p=o(43);const d="woocommerce/product-query",b=["woocommerce/woocommerce//archive-product","woocommerce/woocommerce//taxonomy-product_cat","woocommerce/woocommerce//taxonomy-product_tag","woocommerce/woocommerce//taxonomy-product_attribute","woocommerce/woocommerce//product-search-results"],m=e=>{Object(r.registerBlockVariation)(p.f,{description:Object(i.__)("A block that displays a selection of products in your store.","woo-gutenberg-products-block"),name:d,
/* translators: “Products“ is the name of the block. */
title:Object(i.__)("Products (Beta)","woo-gutenberg-products-block"),isActive:e=>e.namespace===d,icon:Object(c.createElement)(n.Icon,{icon:l.a,className:"wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks"}),attributes:{...e,namespace:d},allowedControls:p.b,innerBlocks:p.d,scope:["inserter"]})};if(Object(a.isWpVersion)("6.1",">=")){let e;Object(s.subscribe)(()=>{const t=e,o=Object(s.select)("core/edit-site");if(e=null==o?void 0:o.getEditedPostId(),t!==e&&Object(u.a)(o)){const t={...p.e,query:{...p.e.query,inherit:b.includes(e)}};Object(r.unregisterBlockVariation)(p.f,d),m(t)}},"core/edit-site");let t=!1;Object(s.subscribe)(()=>{t||(t=!0,m(p.e))},"core/edit-post")}},2:function(e,t){e.exports=window.wp.components},203:function(e,t,o){"use strict";function c(e,t){const{[t]:o,...c}=e;return c}o.d(t,"a",(function(){return c}))},207:function(e,t,o){"use strict";var c=o(0),r=o(10);const n=Object(c.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 19.375L4.5 7.625C4.5 7.55596 4.55596 7.5 4.625 7.5L16.375 7.5C16.444 7.5 16.5 7.55596 16.5 7.625L16.5 19.375C16.5 19.444 16.444 19.5 16.375 19.5L4.625 19.5C4.55596 19.5 4.5 19.444 4.5 19.375ZM4.625 21C3.72754 21 3 20.2725 3 19.375L3 7.625C3 6.72754 3.72754 6 4.625 6L16.375 6C17.2725 6 18 6.72754 18 7.625L18 19.375C18 20.2725 17.2725 21 16.375 21L4.625 21ZM19 3.75L8 3.75L8 2.25L19 2.25C20.5183 2.25 21.75 3.4796 21.75 4.99891L21.75 18L20.25 18L20.25 4.99891C20.25 4.30909 19.6909 3.75 19 3.75Z"}));t.a=n},21:function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return n}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return c(e)&&t in e}const n=e=>0===Object.keys(e).length},254:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));const c=(e,t,o)=>{let c,r=null;const n=function(){for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];r=i,c&&clearTimeout(c),c=setTimeout(()=>{c=null,!o&&r&&e(...r)},t),o&&!c&&e(...i)};return n.flush=()=>{c&&r&&(e(...r),clearTimeout(c),c=null)},n}},3:function(e,t){e.exports=window.wc.wcSettings},367:function(e,t){e.exports=window.wp.notices},43:function(e,t,o){"use strict";o.d(t,"c",(function(){return s})),o.d(t,"f",(function(){return u})),o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return d})),o.d(t,"g",(function(){return b})),o.d(t,"e",(function(){return g})),o.d(t,"d",(function(){return f}));var c=o(3),r=o(203),n=o(88),i=o(82),l=o(112),a=o(57);const s="/wp-admin/edit.php?post_type=product&page=product_attributes",u="core/query",p=["attributes","presets","productSelector","onSale","stockStatus","wooInherit"],d=["taxQuery","search",...p],b=Object(c.getSetting)("stockStatusOptions",[]),m=Object(c.getSetting)("hideOutOfStockItems",!1),g={allowedControls:d,displayLayout:{type:"flex",columns:3},query:{perPage:9,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",author:"",search:"",exclude:[],sticky:"",inherit:!1,__woocommerceAttributes:[],__woocommerceStockStatus:m?Object.keys(Object(r.a)(b,"outofstock")):Object.keys(b)}},k=Object(c.getSettingWithCoercion)("post_template_has_support_for_grid_view",!1,n.a),f=[["core/post-template",{__woocommerceNamespace:l.b,className:"products-block-post-template",...k&&{layout:{type:"grid",columnCount:3}}},[["woocommerce/product-image",{imageSizing:a.a.THUMBNAIL}],["core/post-title",{textAlign:"center",level:3,fontSize:"medium",style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}},isLink:!0,__woocommerceNamespace:i.b}],["woocommerce/product-price",{textAlign:"center",fontSize:"small"}],["woocommerce/product-button",{textAlign:"center",fontSize:"small"}]]],["core/query-pagination",{layout:{type:"flex",justifyContent:"center"}}],["core/query-no-results"]]},471:function(e,t,o){e.exports=o(531)},472:function(e,t){},473:function(e,t){},5:function(e,t){e.exports=window.wp.blockEditor},531:function(e,t,o){"use strict";o.r(t);var c={};o.r(c),o.d(c,"getBlockifiedTemplate",(function(){return N})),o.d(c,"isConversionPossible",(function(){return q})),o.d(c,"getDescription",(function(){return W})),o.d(c,"getButtonLabel",(function(){return R})),o.d(c,"onClickCallback",(function(){return D}));var r={};o.r(r),o.d(r,"getBlockifiedTemplate",(function(){return z})),o.d(r,"isConversionPossible",(function(){return M})),o.d(r,"getDescription",(function(){return V})),o.d(r,"getButtonLabel",(function(){return H})),o.d(r,"onClickCallback",(function(){return U}));var n=o(0),i=o(8),l=o(18),a=o(5),s=o(2),u=o(1),p=o(74),d=o(579),b=o(7),m=o(367),g=o(72),k=o(254);o(472),o(473);const f="woocommerce/legacy-template",w={"single-product":{type:"single-product",title:Object(u.__)("WooCommerce Single Product Block","woo-gutenberg-products-block"),placeholder:"single-product"},"archive-product":{type:"product-catalog",title:Object(u.__)("WooCommerce Product Grid Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_cat":{type:"product-taxonomy",title:Object(u.__)("WooCommerce Product Taxonomy Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_tag":{type:"product-taxonomy",title:Object(u.__)("WooCommerce Product Tag Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_attribute":{type:"product-taxonomy",title:Object(u.__)("WooCommerce Product Attribute Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"product-search-results":{type:"product-search-results",title:Object(u.__)("WooCommerce Product Search Results Block","woo-gutenberg-products-block"),placeholder:"archive-product"}};function O(e,t){const o=Object.keys(t);let c=null;for(let r=0;o.length>r;r++){const n=t[e.substr(0,o[r].length)];if(n){c=n;break}}return c}function j(e,t){return!!O(e,t)}const y=(e,t)=>{var o;const c=((null===(o=Object(i.getBlockType)("core/query-title"))||void 0===o?void 0:o.variations)||[]).find(t=>{let{name:o}=t;return o===e});if(!c)return null;const{attributes:r}=c,n={...r,...t,showPrefix:!1};return Object(i.createBlock)("core/query-title",n)},h=(e,t)=>{var o;const c=((null===(o=Object(i.getBlockType)("core/group"))||void 0===o?void 0:o.variations)||[]).find(e=>{let{name:t}=e;return"group-row"===t});if(!c)return null;const{attributes:r}=c,n={...r,...t,layout:{...r.layout,justifyContent:"space-between"}};return Object(i.createBlock)("core/group",n,e)};var _=o(3),v=o(43),B=o(198);const E=e=>Object(i.createBlock)("core/query",{...v.e,...e,namespace:B.a,query:{...v.e.query,inherit:!0}},Object(i.createBlocksFromInnerBlocksTemplate)(v.d)),S=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[Object(i.createBlock)("woocommerce/breadcrumbs",e),y("archive-title",e),t?Object(i.createBlock)("core/term-description",e):null,Object(i.createBlock)("woocommerce/store-notices",e),h([Object(i.createBlock)("woocommerce/product-results-count"),Object(i.createBlock)("woocommerce/catalog-sorting")],e),E(e)].filter(Boolean)},T=()=>Object(_.isWpVersion)("6.1",">="),C=(e,t)=>t?(e=>Object(u.sprintf)(
/* translators: %s is the template title */
Object(u.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woo-gutenberg-products-block"),e))(e):(e=>Object(u.sprintf)(
/* translators: %s is the template title */
Object(u.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woo-gutenberg-products-block"),e))(e),P=()=>Object(u.__)("Transform into blocks","woo-gutenberg-products-block"),x={getBlockifiedTemplate:S,isConversionPossible:T,getDescription:C,getButtonLabel:P,onClickCallback:e=>{let{clientId:t,attributes:o,getBlocks:c,replaceBlock:r,selectBlock:n}=e;r(t,S(o));const i=c().find(e=>"core/group"===e.name&&e.innerBlocks.some(e=>"woocommerce/store-notices"===e.name));i&&n(i.clientId)}},I={getBlockifiedTemplate:e=>S(e,!0),onClickCallback:e=>{let{clientId:t,attributes:o,getBlocks:c,replaceBlock:r,selectBlock:n}=e;r(t,S(o,!0));const i=c().find(e=>"core/group"===e.name&&e.innerBlocks.some(e=>"woocommerce/store-notices"===e.name));i&&n(i.clientId)},isConversionPossible:T,getDescription:C,getButtonLabel:P};var L=o(82),A=o(173);const N=()=>[Object(i.createBlock)("woocommerce/breadcrumbs"),Object(i.createBlock)("woocommerce/store-notices"),Object(i.createBlock)("core/columns",{align:"wide"},[Object(i.createBlock)("core/column",{type:"constrained",justifyContent:"right",width:"512px"},[Object(i.createBlock)("woocommerce/product-image-gallery")]),Object(i.createBlock)("core/column",{},[Object(i.createBlock)("core/post-title",{__woocommerceNamespace:L.b,level:1}),Object(i.createBlock)("woocommerce/product-rating"),Object(i.createBlock)("woocommerce/product-price",{fontSize:"large"}),Object(i.createBlock)("core/post-excerpt",{__woocommerceNamespace:A.b}),Object(i.createBlock)("woocommerce/add-to-cart-form"),Object(i.createBlock)("woocommerce/product-meta")])]),Object(i.createBlock)("woocommerce/product-details",{align:"wide"}),Object(i.createBlock)("woocommerce/related-products",{align:"wide"})].filter(Boolean),q=()=>Object(_.isWpVersion)("6.1",">="),W=(e,t)=>t?(e=>Object(u.sprintf)(
/* translators: %s is the template title */
Object(u.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woo-gutenberg-products-block"),e))(e):(e=>Object(u.sprintf)(
/* translators: %s is the template title */
Object(u.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woo-gutenberg-products-block"),e))(e),R=()=>Object(u.__)("Transform into blocks","woo-gutenberg-products-block"),D=e=>{let{clientId:t,getBlocks:o,replaceBlock:c,selectBlock:r}=e;c(t,N());const n=o().find(e=>"core/group"===e.name&&e.innerBlocks.some(e=>"woocommerce/breadcrumbs"===e.name));n&&r(n.clientId)},G=e=>{const t=((e,t)=>{const o=[Object(i.createBlock)("core/paragraph",{content:Object(u.__)("No products were found matching your selection.","woo-gutenberg-products-block")}),Object(i.createBlock)("core/search",{buttonPosition:"button-outside",buttonText:Object(u.__)("Search","woo-gutenberg-products-block"),buttonUseIcon:!1,showLabel:!1,placeholder:Object(u.__)("Search products…","woo-gutenberg-products-block"),query:{post_type:"product"}})],c=e.findIndex(e=>"core/query-no-results"===e[0]),r=["core/query-no-results",{...e[c][1]||{},...t},o];return[...v.d.slice(0,c),r,...v.d.slice(c+1)]})(v.d,e);return Object(i.createBlock)("core/query",{...v.e,...e,namespace:B.a,query:{...v.e.query,inherit:!0}},Object(i.createBlocksFromInnerBlocksTemplate)(t))},z=e=>[y("search-title",e),Object(i.createBlock)("woocommerce/store-notices",e),h([Object(i.createBlock)("woocommerce/product-results-count"),Object(i.createBlock)("woocommerce/catalog-sorting")],e),G(e)].filter(Boolean),M=()=>Object(_.isWpVersion)("6.1",">="),V=(e,t)=>t?(e=>Object(u.sprintf)(
/* translators: %s is the template title */
Object(u.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woo-gutenberg-products-block"),e))(e):(e=>Object(u.sprintf)(
/* translators: %s is the template title */
Object(u.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woo-gutenberg-products-block"),e))(e),U=e=>{let{clientId:t,attributes:o,getBlocks:c,replaceBlock:r,selectBlock:n}=e;r(t,z(o));const i=c().find(e=>"core/group"===e.name&&e.innerBlocks.some(e=>"woocommerce/store-notices"===e.name));i&&n(i.clientId)},H=()=>Object(u.__)("Transform into blocks","woo-gutenberg-products-block"),Y={"product-catalog":x,"product-taxonomy":I,"single-product":c,"product-search-results":r,fallback:{isConversionPossible:()=>!1,getBlockifiedTemplate:()=>[],getDescription:()=>"",getButtonLabel:()=>"",onClickCallback:()=>{}}},Z=e=>{var t,o,c,r,k;let{clientId:f,attributes:j,setAttributes:y}=e;const{replaceBlock:h,selectBlock:_,replaceBlocks:v}=Object(b.useDispatch)(a.store),{getBlocks:B,editedPostId:E}=Object(b.useSelect)(e=>({getBlocks:e(a.store).getBlocks,editedPostId:e("core/edit-site").getEditedPostId()}),[]),S=Object(g.useEntityRecord)("postType","wp_template",E),{createInfoNotice:T}=Object(b.useDispatch)(m.store),C=Object(a.useBlockProps)(),P=O(j.template,w),x=null!==(t=null===(o=S.record)||void 0===o||null===(c=o.title.rendered)||void 0===c?void 0:c.toLowerCase())&&void 0!==t?t:j.template,I=null!==(r=null==P?void 0:P.placeholder)&&void 0!==r?r:"fallback",L=null!==(k=null==P?void 0:P.type)&&void 0!==k?k:"fallback";Object(n.useEffect)(()=>{var e;return y({template:j.template,align:null!==(e=j.align)&&void 0!==e?e:"wide"})},[j.align,j.template,y]);const{isConversionPossible:A,getDescription:N,getButtonLabel:q,onClickCallback:W,getBlockifiedTemplate:R}=Y[L],D=A(),G=N(x,D),[z,M]=Object(n.useState)(!1);return Object(n.createElement)("div",C,Object(n.createElement)(s.Placeholder,{className:"wp-block-woocommerce-classic-template__placeholder"},Object(n.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-wireframe"},Object(n.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy"},Object(n.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy__icon-container"},Object(n.createElement)(p.a,{icon:d.a}),Object(n.createElement)("span",null,Object(u.__)("Classic Product Template","woo-gutenberg-products-block"))),Object(n.createElement)("p",null,G),D&&Object(n.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-migration-button-container"},Object(n.createElement)(s.Button,{isPrimary:!0,onClick:()=>{W({clientId:f,getBlocks:B,attributes:j,replaceBlock:h,selectBlock:_}),T(Object(u.__)("Template transformed into blocks!","woo-gutenberg-products-block"),{actions:[{label:Object(u.__)("Undo","woo-gutenberg-products-block"),onClick:()=>{const e=B().reduce((e,t)=>"core/template-part"===t.name?e:[...e,t.clientId],[]);v(e,Object(i.createBlock)("core/group",{layout:{inherit:!0,type:"constrained"}},[Object(i.createBlock)("woocommerce/legacy-template",{template:j.template})]))}}],type:"snackbar"})},onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),text:q()},z&&Object(n.createElement)(s.Popover,{resize:!1,placement:"right-end"},Object(n.createElement)("div",{style:{minWidth:"250px",width:"250px",maxWidth:"250px",minHeight:"300px",height:"300px",maxHeight:"300px",cursor:"pointer"}},Object(n.createElement)(a.BlockPreview,{blocks:R(j),viewportWidth:1200,additionalStyles:[{css:"body { padding: 20px !important; height: fit-content !important; overflow:hidden}"}]})))))),Object(n.createElement)("img",{className:"wp-block-woocommerce-classic-template__placeholder-image",src:`${l.n}template-placeholders/${I}.svg`,alt:x}))))},F=Object(k.a)(()=>{const e=Object(b.select)("core/block-editor").getBlocks().flatMap(e=>[e,...e.innerBlocks]).find(e=>"core/missing"===e.name&&e.attributes.originalName===f);if(e){const t=Object(i.parse)(e.attributes.originalContent);t&&Object(b.dispatch)("core/block-editor").replaceBlock(e.clientId,t)}},100);let J;Object(b.subscribe)(()=>{var e;const t=J,o=Object(b.select)("core/edit-site");J=null==o?void 0:o.getEditedPostId();const c=null===(e=J)||void 0===e?void 0:e.split("//")[1];if(null==c)return;const r=Object(i.getBlockType)(f),l=Boolean(r);return l&&j(c,w)&&F(),t!==J?!l||j(c,w)&&!function(e,t){const o=O(t,w);return(null==e?void 0:e.title)!==(null==o?void 0:o.title)}(r,c)?void(!l&&j(c,w)&&(e=>{let{template:t,inserter:o}=e;Object(i.registerBlockType)(f,{title:t&&w[t]?w[t].title:Object(u.__)("WooCommerce Classic Template","woo-gutenberg-products-block"),icon:Object(n.createElement)(p.a,{icon:d.a,className:"wc-block-editor-components-block-icon"}),category:"woocommerce",apiVersion:2,keywords:[Object(u.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(u.__)("Renders classic WooCommerce PHP templates.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1,multiple:!1,reusable:!1,inserter:o},attributes:{template:{type:"string",default:"any"},align:{type:"string",default:"wide"}},edit:e=>{let{attributes:o,clientId:c,setAttributes:r}=e;const i=null!=t?t:o.template;return Object(n.createElement)(Z,{attributes:{...o,template:i},setAttributes:r,clientId:c})},save:()=>null})})({template:c,inserter:!0})):(Object(i.unregisterBlockType)(f),void(J=void 0)):void 0},"core/blocks-editor")},57:function(e,t,o){"use strict";let c;o.d(t,"a",(function(){return c})),function(e){e.SINGLE="single",e.THUMBNAIL="thumbnail"}(c||(c={}))},62:function(e,t,o){"use strict";o.d(t,"c",(function(){return l})),o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return s}));var c=o(0),r=o(1),n=o(74),i=o(163);const l=Object(r.__)("Product Title","woo-gutenberg-products-block"),a=Object(c.createElement)(n.a,{icon:i.a,className:"wc-block-editor-components-block-icon"}),s=Object(r.__)("Display the title of a product.","woo-gutenberg-products-block")},7:function(e,t){e.exports=window.wp.data},71:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var c=o(8);function r(e,t){let{blockDescription:o,blockIcon:r,blockTitle:n,variationName:i}=t;Object(c.registerBlockVariation)(e,{description:o,name:i,title:n,isActive:e=>e.__woocommerceNamespace===i,icon:{src:r},attributes:{__woocommerceNamespace:i},scope:["block","inserter"]})}},72:function(e,t){e.exports=window.wp.coreData},79:function(e,t,o){"use strict";o.d(t,"c",(function(){return l})),o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return s}));var c=o(0),r=o(1),n=o(74),i=o(193);const l=Object(r.__)("Product Summary","woo-gutenberg-products-block"),a=Object(c.createElement)(n.a,{icon:i.a,className:"wc-block-editor-components-block-icon"}),s=Object(r.__)("Display a short description about a product.","woo-gutenberg-products-block")},8:function(e,t){e.exports=window.wp.blocks},82:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return s}));var c=o(0),r=o(2),n=o(62),i=o(163),l=o(71);const a="core/post-title",s="woocommerce/product-query/product-title";Object(l.a)(a,{blockDescription:n.a,blockIcon:Object(c.createElement)(r.Icon,{icon:i.a}),blockTitle:n.c,variationName:s})},88:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e}});