(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[27,34],{101:function(e,t,r){"use strict";var n=r(3),c=r(1),a=r(137),s=r(107),o=r(18);const i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=Object(c.sprintf)(
/* translators: %s Field label. */
Object(c.__)("%s (optional)","woo-gutenberg-products-block"),e.label)),e.priority&&(Object(a.a)(e.priority)&&(t.index=e.priority),Object(s.a)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},l=Object.entries(o.f).map(e=>{let[t,r]=e;return[t,Object.entries(r).map(e=>{let[t,r]=e;return[t,i(r)]}).reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{})]}).reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{});t.a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const c=r&&void 0!==l[r]?l[r]:{};return e.map(e=>({key:e,...n.defaultAddressFields[e]||{},...c[e]||{},...t[e]||{}})).sort((e,t)=>e.index-t.index)}},153:function(e,t,r){"use strict";r.r(t),r.d(t,"Block",(function(){return u}));var n=r(0),c=r(1),a=r(4),s=r.n(a),o=r(31),i=r(26),l=r(88),d=r(53);r(269);const u=e=>{const{className:t,align:r}=e,a=Object(l.a)(e),{parentClassName:d}=Object(i.useInnerBlockLayoutContext)(),{product:u}=Object(i.useProductDataContext)();if(!u.id||!u.on_sale)return null;const p="string"==typeof r?"wc-block-components-product-sale-badge--align-"+r:"";return Object(n.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,p,{[d+"__product-onsale"]:d},a.className),style:a.style},Object(n.createElement)(o.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(d.withProductDataContext)(u)},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(6),c=r.n(n),a=r(0),s=r(1),o=r(4),i=r.n(o),l=r(3),d=r(26),u=r(88),p=r(53),b=r(91),m=r(153),_=(r(272),r(57));const g=()=>Object(a.createElement)("img",{src:l.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),E=e=>{let{image:t,loaded:r,showFullSize:n,fallbackAlt:s}=e;const{thumbnail:o,src:i,srcset:l,sizes:d,alt:u}=t||{},p={alt:u||s,hidden:!r,src:o,...n&&{src:i,srcSet:l,sizes:d}};return Object(a.createElement)(a.Fragment,null,p.src&&Object(a.createElement)("img",c()({"data-testid":"product-image"},p)),!t&&Object(a.createElement)(g,null))},f=e=>{const{className:t,imageSizing:r=_.a.SINGLE,showProductLink:n=!0,showSaleBadge:o,saleBadgeAlign:l="right",...p}=e,f=Object(u.a)(e),{parentClassName:w}=Object(d.useInnerBlockLayoutContext)(),{product:h,isLoading:O}=Object(d.useProductDataContext)(),{dispatchStoreEvent:v}=Object(b.a)();if(!h.id)return Object(a.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[w+"__product-image"]:w},f.className),style:f.style},Object(a.createElement)(g,null));const C=!!h.images.length,j=C?h.images[0]:null,y=n?"a":a.Fragment,S=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woo-gutenberg-products-block"),h.name),R={href:h.permalink,...!C&&{"aria-label":S},onClick:()=>{v("product-view-link",{product:h})}};return Object(a.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[w+"__product-image"]:w},f.className),style:f.style},Object(a.createElement)(y,n&&R,!!o&&Object(a.createElement)(m.default,c()({align:l},p)),Object(a.createElement)(E,{fallbackAlt:h.name,image:j,loaded:!O,showFullSize:r!==_.a.THUMBNAIL})))};t.b=Object(p.withProductDataContext)(f)},267:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));const n=window.CustomEvent||null,c=(e,t)=>{let{bubbles:r=!1,cancelable:c=!1,element:a,detail:s={}}=t;if(!n)return;a||(a=document.body);const o=new n(e,{bubbles:r,cancelable:c,detail:s});a.dispatchEvent(o)},a=e=>{let{preserveCartData:t=!1}=e;c("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:t}})},s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const a=()=>{c(t,{bubbles:r,cancelable:n})};return jQuery(document).on(e,a),()=>jQuery(document).off(e,a)}},268:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l}));var n=r(101),c=(r(15),r(3)),a=r(16),s=r(18);const o=e=>{const t=Object.keys(c.defaultAddressFields),r=Object(n.a)(t,{},e.country),a=Object.assign({},e);return r.forEach(t=>{let{key:r="",hidden:n=!1}=t;n&&((e,t)=>e in t)(r,e)&&(a[r]="")}),a},i=e=>{if(0===Object.values(e).length)return null;const t="string"==typeof s.i[e.country]?Object(a.decodeEntities)(s.i[e.country]):"",r="object"==typeof s.j[e.country]&&"string"==typeof s.j[e.country][e.state]?Object(a.decodeEntities)(s.j[e.country][e.state]):e.state,n=[];n.push(e.postcode.toUpperCase()),n.push(e.city),n.push(r),n.push(t);return n.filter(Boolean).join(", ")||null},l=e=>!!e.city&&!!e.country},269:function(e,t){},272:function(e,t){},31:function(e,t,r){"use strict";var n=r(0),c=r(4),a=r.n(c);t.a=e=>{let t,{label:r,screenReaderLabel:c,wrapperElement:s,wrapperProps:o={}}=e;const i=null!=r,l=null!=c;return!i&&l?(t=s||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(n.createElement)(t,o,c)):(t=s||n.Fragment,i&&l&&r!==c?Object(n.createElement)(t,o,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,o,r))}},338:function(e,t,r){"use strict";const n={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:r(57).a.SINGLE},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1},isDescendentOfSingleProductBlock:{type:"boolean",default:!1}};t.a=n},48:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n=r(108),c=r.n(n),a=r(0),s=r(9),o=r(7),i=r(16),l=r(268),d=r(90);var u=r(267);const p=e=>{const t=null==e?void 0:e.detail;t&&t.preserveCartData||Object(o.dispatch)(s.CART_STORE_KEY).invalidateResolutionForStore()},b=e=>{(null!=e&&e.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&Object(o.dispatch)(s.CART_STORE_KEY).invalidateResolutionForStore()},m=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},_=()=>{Object(a.useEffect)(()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(e=window.wcBlocksStoreCartListeners)||void 0===e?void 0:e.count)>0)return void window.wcBlocksStoreCartListeners.count++;var e;document.body.addEventListener("wc-blocks_added_to_cart",p),document.body.addEventListener("wc-blocks_removed_from_cart",p),window.addEventListener("pageshow",b);const t=Object(u.a)("added_to_cart","wc-blocks_added_to_cart"),r=Object(u.a)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",p),document.body.removeEventListener("wc-blocks_removed_from_cart",p),window.removeEventListener("pageshow",b),t(),r()}})(),m),[])},g={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},E={...g,email:""},f={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:s.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},w=e=>Object.fromEntries(Object.entries(e).map(e=>{let[t,r]=e;return[t,Object(i.decodeEntities)(r)]})),h={cartCoupons:s.EMPTY_CART_COUPONS,cartItems:s.EMPTY_CART_ITEMS,cartFees:s.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:s.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:s.EMPTY_CART_ITEM_ERRORS,cartTotals:f,cartIsLoading:!0,cartErrors:s.EMPTY_CART_ERRORS,billingAddress:E,shippingAddress:g,shippingRates:s.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentMethods:s.EMPTY_PAYMENT_METHODS,paymentRequirements:s.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:s.EMPTY_EXTENSIONS},O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0};const{isEditor:t,previewData:r}=Object(d.b)(),n=null==r?void 0:r.previewCart,{shouldSelect:i}=e,u=Object(a.useRef)();_();const p=Object(o.useSelect)((e,r)=>{let{dispatch:c}=r;if(!i)return h;if(t)return{cartCoupons:n.coupons,cartItems:n.items,crossSellsProducts:n.cross_sells,cartFees:n.fees,cartItemsCount:n.items_count,cartItemsWeight:n.items_weight,cartNeedsPayment:n.needs_payment,cartNeedsShipping:n.needs_shipping,cartItemErrors:s.EMPTY_CART_ITEM_ERRORS,cartTotals:n.totals,cartIsLoading:!1,cartErrors:s.EMPTY_CART_ERRORS,billingData:E,billingAddress:E,shippingAddress:g,extensions:s.EMPTY_EXTENSIONS,shippingRates:n.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:n.has_calculated_shipping,paymentRequirements:n.paymentRequirements,receiveCart:"function"==typeof(null==n?void 0:n.receiveCart)?n.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==n?void 0:n.receiveCartContents)?n.receiveCartContents:()=>{}};const a=e(s.CART_STORE_KEY),o=a.getCartData(),d=a.getCartErrors(),u=a.getCartTotals(),p=!a.hasFinishedResolution("getCartData"),b=a.isCustomerDataUpdating(),{receiveCart:m,receiveCartContents:_}=c(s.CART_STORE_KEY),f=w(o.billingAddress),O=o.needsShipping?w(o.shippingAddress):f,v=o.fees.length>0?o.fees.map(e=>w(e)):s.EMPTY_CART_FEES;return{cartCoupons:o.coupons.length>0?o.coupons.map(e=>({...e,label:e.code})):s.EMPTY_CART_COUPONS,cartItems:o.items,crossSellsProducts:o.crossSells,cartFees:v,cartItemsCount:o.itemsCount,cartItemsWeight:o.itemsWeight,cartNeedsPayment:o.needsPayment,cartNeedsShipping:o.needsShipping,cartItemErrors:o.errors,cartTotals:u,cartIsLoading:p,cartErrors:d,billingData:Object(l.a)(f),billingAddress:Object(l.a)(f),shippingAddress:Object(l.a)(O),extensions:o.extensions,shippingRates:o.shippingRates,isLoadingRates:b,cartHasCalculatedShipping:o.hasCalculatedShipping,paymentRequirements:o.paymentRequirements,receiveCart:m,receiveCartContents:_}},[i]);return u.current&&c()(u.current,p)||(u.current=p),u.current}},614:function(e,t,r){"use strict";r.r(t);var n=r(53),c=r(216),a=r(338);t.default=Object(n.withFilteredAttributes)(a.a)(c.b)},90:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return o}));var n=r(0),c=r(7);const a=Object(n.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),s=()=>Object(n.useContext)(a),o=e=>{let{children:t,currentPostId:r=0,previewData:s={},currentView:o="",isPreview:i=!1}=e;const l=Object(c.useSelect)(e=>r||e("core/editor").getCurrentPostId(),[r]),d=Object(n.useCallback)(e=>s&&e in s?s[e]:{},[s]),u={isEditor:!0,currentPostId:l,currentView:o,previewData:s,getPreviewData:d,isPreview:i};return Object(n.createElement)(a.Provider,{value:u},t)}},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(47),c=r(0),a=r(48);const s=()=>{const e=Object(a.a)(),t=Object(c.useRef)(e);return Object(c.useEffect)(()=>{t.current=e},[e]),{dispatchStoreEvent:Object(c.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-"+e,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:Object(c.useCallback)((function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-checkout-"+e,{...r,storeCart:t.current})}catch(e){console.error(e)}}),[])}}}}]);