(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[28,35],{132:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(5),c=r(55),a=r(32),s=r(98);const o=e=>{if(!Object(c.b)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},r=Object(s.a)(t.style);return Object(n.__experimentalUseBorderProps)({...t,style:r})}},141:function(e,t,r){"use strict";r.r(t),r.d(t,"Block",(function(){return m}));var n=r(0),c=r(1),a=r(4),s=r.n(a),o=r(30),i=r(22),l=r(132),d=r(99),u=r(88),b=r(112),p=r(44);r(251);const m=e=>{const{className:t,align:r}=e,{parentClassName:a}=Object(i.useInnerBlockLayoutContext)(),{product:p}=Object(i.useProductDataContext)(),m=Object(l.a)(e),_=Object(d.a)(e),g=Object(u.a)(e),E=Object(b.a)(e);if(!p.id||!p.on_sale)return null;const O="string"==typeof r?"wc-block-components-product-sale-badge--align-"+r:"";return Object(n.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,O,{[a+"__product-onsale"]:a},_.className,m.className,g.className),style:{..._.style,...m.style,...g.style,...E.style}},Object(n.createElement)(o.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(p.withProductDataContext)(m)},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(6),c=r.n(n),a=r(0),s=r(1),o=r(4),i=r.n(o),l=r(2),d=r(22),u=r(88),b=r(132),p=r(112),m=r(44),_=r(82),g=r(141);r(254);const E=()=>Object(a.createElement)("img",{src:l.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),O=e=>{let{image:t,loaded:r,showFullSize:n,fallbackAlt:s}=e;const{thumbnail:o,src:i,srcset:l,sizes:d,alt:u}=t||{},b={alt:u||s,hidden:!r,src:o,...n&&{src:i,srcSet:l,sizes:d}};return Object(a.createElement)(a.Fragment,null,b.src&&Object(a.createElement)("img",c()({"data-testid":"product-image"},b)),!t&&Object(a.createElement)(E,null))},f=e=>{const{className:t,imageSizing:r="full-size",showProductLink:n=!0,showSaleBadge:c,saleBadgeAlign:o="right"}=e,{parentClassName:l}=Object(d.useInnerBlockLayoutContext)(),{product:m,isLoading:f}=Object(d.useProductDataContext)(),{dispatchStoreEvent:w}=Object(_.a)(),v=Object(u.a)(e),h=Object(b.a)(e),C=Object(p.a)(e);if(!m.id)return Object(a.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[l+"__product-image"]:l},h.className),style:{...v.style,...h.style,...C.style}},Object(a.createElement)(E,null));const j=!!m.images.length,y=j?m.images[0]:null,S=n?"a":a.Fragment,R=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woo-gutenberg-products-block"),m.name),k={href:m.permalink,...!j&&{"aria-label":R},onClick:()=>{w("product-view-link",{product:m})}};return Object(a.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[l+"__product-image"]:l},h.className),style:{...v.style,...h.style,...C.style}},Object(a.createElement)(S,n&&k,!!c&&Object(a.createElement)(g.default,{align:o,product:m}),Object(a.createElement)(O,{fallbackAlt:m.name,image:y,loaded:!f,showFullSize:"cropped"!==r})))};t.b=Object(m.withProductDataContext)(f)},249:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));const n=window.CustomEvent||null,c=(e,t)=>{let{bubbles:r=!1,cancelable:c=!1,element:a,detail:s={}}=t;if(!n)return;a||(a=document.body);const o=new n(e,{bubbles:r,cancelable:c,detail:s});a.dispatchEvent(o)},a=e=>{let{preserveCartData:t=!1}=e;c("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:t}})},s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const a=()=>{c(t,{bubbles:r,cancelable:n})};return jQuery(document).on(e,a),()=>jQuery(document).off(e,a)}},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(92),c=(r(17),r(2));const a=e=>{const t=Object.keys(c.defaultAddressFields),r=Object(n.a)(t,{},e.country),a=Object.assign({},e);return r.forEach(t=>{let{key:r="",hidden:n=!1}=t;n&&((e,t)=>e in t)(r,e)&&(a[r]="")}),a}},251:function(e,t){},254:function(e,t){},30:function(e,t,r){"use strict";var n=r(0),c=r(4),a=r.n(c);t.a=e=>{let t,{label:r,screenReaderLabel:c,wrapperElement:s,wrapperProps:o={}}=e;const i=null!=r,l=null!=c;return!i&&l?(t=s||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(n.createElement)(t,o,c)):(t=s||n.Fragment,i&&l&&r!==c?Object(n.createElement)(t,o,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,o,r))}},311:function(e,t,r){"use strict";t.a={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1}}},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r(8),c=r(0),a=r(10),s=r(7),o=r(18),i=r(250),l=r(81);var d=r(249);const u=e=>{const t=null==e?void 0:e.detail;t&&t.preserveCartData||Object(s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore()},b=e=>{(null!=e&&e.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&Object(s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore()},p=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},m=()=>{Object(c.useEffect)(()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(e=window.wcBlocksStoreCartListeners)||void 0===e?void 0:e.count)>0)return void window.wcBlocksStoreCartListeners.count++;var e;document.body.addEventListener("wc-blocks_added_to_cart",u),document.body.addEventListener("wc-blocks_removed_from_cart",u),window.addEventListener("pageshow",b);const t=Object(d.a)("added_to_cart","wc-blocks_added_to_cart"),r=Object(d.a)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",u),document.body.removeEventListener("wc-blocks_removed_from_cart",u),window.removeEventListener("pageshow",b),t(),r()}})(),p),[])},_={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},g={..._,email:""},E={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:a.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},O=e=>Object.fromEntries(Object.entries(e).map(e=>{let[t,r]=e;return[t,Object(o.decodeEntities)(r)]})),f={cartCoupons:a.EMPTY_CART_COUPONS,cartItems:a.EMPTY_CART_ITEMS,cartFees:a.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:a.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:a.EMPTY_CART_ITEM_ERRORS,cartTotals:E,cartIsLoading:!0,cartErrors:a.EMPTY_CART_ERRORS,billingAddress:g,shippingAddress:_,shippingRates:a.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentRequirements:a.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:a.EMPTY_EXTENSIONS},w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0};const{isEditor:t,previewData:r}=Object(l.b)(),o=null==r?void 0:r.previewCart,{shouldSelect:d}=e,u=Object(c.useRef)();m();const b=Object(s.useSelect)((e,r)=>{let{dispatch:n}=r;if(!d)return f;if(t)return{cartCoupons:o.coupons,cartItems:o.items,crossSellsProducts:o.cross_sells,cartFees:o.fees,cartItemsCount:o.items_count,cartItemsWeight:o.items_weight,cartNeedsPayment:o.needs_payment,cartNeedsShipping:o.needs_shipping,cartItemErrors:a.EMPTY_CART_ITEM_ERRORS,cartTotals:o.totals,cartIsLoading:!1,cartErrors:a.EMPTY_CART_ERRORS,billingData:g,billingAddress:g,shippingAddress:_,extensions:a.EMPTY_EXTENSIONS,shippingRates:o.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:o.has_calculated_shipping,paymentRequirements:o.paymentRequirements,receiveCart:"function"==typeof(null==o?void 0:o.receiveCart)?o.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==o?void 0:o.receiveCartContents)?o.receiveCartContents:()=>{}};const c=e(a.CART_STORE_KEY),s=c.getCartData(),l=c.getCartErrors(),u=c.getCartTotals(),b=!c.hasFinishedResolution("getCartData"),p=c.isCustomerDataUpdating(),{receiveCart:m,receiveCartContents:E}=n(a.CART_STORE_KEY),w=O(s.billingAddress),v=s.needsShipping?O(s.shippingAddress):w,h=s.fees.length>0?s.fees.map(e=>O(e)):a.EMPTY_CART_FEES;return{cartCoupons:s.coupons.length>0?s.coupons.map(e=>({...e,label:e.code})):a.EMPTY_CART_COUPONS,cartItems:s.items,crossSellsProducts:s.crossSells,cartFees:h,cartItemsCount:s.itemsCount,cartItemsWeight:s.itemsWeight,cartNeedsPayment:s.needsPayment,cartNeedsShipping:s.needsShipping,cartItemErrors:s.errors,cartTotals:u,cartIsLoading:b,cartErrors:l,billingData:Object(i.a)(w),billingAddress:Object(i.a)(w),shippingAddress:Object(i.a)(v),extensions:s.extensions,shippingRates:s.shippingRates,isLoadingRates:p,cartHasCalculatedShipping:s.hasCalculatedShipping,paymentRequirements:s.paymentRequirements,receiveCart:m,receiveCartContents:E}},[d]);return u.current&&Object(n.isEqual)(u.current,b)||(u.current=b),u.current}},586:function(e,t,r){"use strict";r.r(t);var n=r(44),c=r(189),a=r(311);t.default=Object(n.withFilteredAttributes)(a.a)(c.b)},81:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return o}));var n=r(0),c=r(7);const a=Object(n.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),s=()=>Object(n.useContext)(a),o=e=>{let{children:t,currentPostId:r=0,previewData:s={},currentView:o=""}=e;const i=Object(c.useSelect)(e=>r||e("core/editor").getCurrentPostId(),[r]),l=Object(n.useCallback)(e=>s&&e in s?s[e]:{},[s]),d={isEditor:!0,currentPostId:i,currentView:o,previewData:s,getPreviewData:l};return Object(n.createElement)(a.Provider,{value:d},t)}},82:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(43),c=r(0),a=r(42);const s=()=>{const e=Object(a.a)(),t=Object(c.useRef)(e);return Object(c.useEffect)(()=>{t.current=e},[e]),{dispatchStoreEvent:Object(c.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-"+e,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:Object(c.useCallback)((function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-checkout-"+e,{...r,storeCart:t.current})}catch(e){console.error(e)}}),[])}}},92:function(e,t,r){"use strict";var n=r(2),c=r(1),a=r(145),s=r(74);const o=Object(n.getSetting)("countryLocale",{}),i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=Object(c.sprintf)(
/* translators: %s Field label. */
Object(c.__)("%s (optional)","woo-gutenberg-products-block"),e.label)),e.priority&&(Object(a.a)(e.priority)&&(t.index=e.priority),Object(s.a)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},l=Object.entries(o).map(e=>{let[t,r]=e;return[t,Object.entries(r).map(e=>{let[t,r]=e;return[t,i(r)]}).reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{})]}).reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{});t.a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const c=r&&void 0!==l[r]?l[r]:{};return e.map(e=>({key:e,...n.defaultAddressFields[e]||{},...c[e]||{},...t[e]||{}})).sort((e,t)=>e.index-t.index)}}}]);