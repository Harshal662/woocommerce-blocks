(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[25,31],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var c=r(5),n=r(55),a=r(33),s=r(99);const o=e=>{if(!Object(n.b)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},r=Object(s.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:r})}},143:function(e,t,r){"use strict";r.r(t),r.d(t,"Block",(function(){return m}));var c=r(0),n=r(1),a=r(4),s=r.n(a),o=r(28),i=r(23),l=r(134),d=r(100),u=r(87),b=r(133),p=r(42);r(259);const m=e=>{const{className:t,align:r}=e,{parentClassName:a}=Object(i.useInnerBlockLayoutContext)(),{product:p}=Object(i.useProductDataContext)(),m=Object(l.a)(e),_=Object(d.a)(e),g=Object(u.a)(e),O=Object(b.a)(e);if(!p.id||!p.on_sale)return null;const E="string"==typeof r?"wc-block-components-product-sale-badge--align-"+r:"";return Object(c.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,E,{[a+"__product-onsale"]:a},_.className,m.className),style:{..._.style,...m.style,...g.style,...O.style}},Object(c.createElement)(o.a,{label:Object(n.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(n.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(p.withProductDataContext)(m)},197:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var c=r(6),n=r.n(c),a=r(0),s=r(1),o=r(4),i=r.n(o),l=r(2),d=r(23),u=r(87),b=r(134),p=r(133),m=r(42),_=r(70),g=r(143);r(262);const O=()=>Object(a.createElement)("img",{src:l.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),E=e=>{let{image:t,loaded:r,showFullSize:c,fallbackAlt:s}=e;const{thumbnail:o,src:i,srcset:l,sizes:d,alt:u}=t||{},b={alt:u||s,hidden:!r,src:o,...c&&{src:i,srcSet:l,sizes:d}};return Object(a.createElement)(a.Fragment,null,b.src&&Object(a.createElement)("img",n()({"data-testid":"product-image"},b)),!t&&Object(a.createElement)(O,null))},f=e=>{const{className:t,imageSizing:r="full-size",showProductLink:c=!0,showSaleBadge:n,saleBadgeAlign:o="right"}=e,{parentClassName:l}=Object(d.useInnerBlockLayoutContext)(),{product:m,isLoading:f}=Object(d.useProductDataContext)(),{dispatchStoreEvent:h}=Object(_.a)(),j=Object(u.a)(e),w=Object(b.a)(e),C=Object(p.a)(e);if(!m.id)return Object(a.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[l+"__product-image"]:l},w.className),style:{...j.style,...w.style,...C.style}},Object(a.createElement)(O,null));const y=!!m.images.length,v=y?m.images[0]:null,S=c?"a":a.Fragment,R=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woo-gutenberg-products-block"),m.name),k={href:m.permalink,...!y&&{"aria-label":R},onClick:()=>{h("product-view-link",{product:m})}};return Object(a.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[l+"__product-image"]:l},w.className),style:{...j.style,...w.style,...C.style}},Object(a.createElement)(S,c&&k,!!n&&Object(a.createElement)(g.default,{align:o,product:m}),Object(a.createElement)(E,{fallbackAlt:m.name,image:v,loaded:!f,showFullSize:"cropped"!==r})))};t.b=Object(m.withProductDataContext)(f)},257:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));const c=window.CustomEvent||null,n=(e,t)=>{let{bubbles:r=!1,cancelable:n=!1,element:a,detail:s={}}=t;if(!c)return;a||(a=document.body);const o=new c(e,{bubbles:r,cancelable:n,detail:s});a.dispatchEvent(o)},a=e=>{let{preserveCartData:t=!1}=e;n("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:t}})},s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const a=()=>{n(t,{bubbles:r,cancelable:c})};return jQuery(document).on(e,a),()=>jQuery(document).off(e,a)}},258:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(93),n=(r(17),r(2));const a=e=>{const t=Object.keys(n.defaultAddressFields),r=Object(c.a)(t,{},e.country),a=Object.assign({},e);return r.forEach(t=>{let{key:r="",hidden:c=!1}=t;c&&((e,t)=>e in t)(r,e)&&(a[r]="")}),a}},259:function(e,t){},262:function(e,t){},28:function(e,t,r){"use strict";var c=r(0),n=r(4),a=r.n(n);t.a=e=>{let t,{label:r,screenReaderLabel:n,wrapperElement:s,wrapperProps:o={}}=e;const i=null!=r,l=null!=n;return!i&&l?(t=s||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(c.createElement)(t,o,n)):(t=s||c.Fragment,i&&l&&r!==n?Object(c.createElement)(t,o,Object(c.createElement)("span",{"aria-hidden":"true"},r),Object(c.createElement)("span",{className:"screen-reader-text"},n)):Object(c.createElement)(t,o,r))}},312:function(e,t,r){"use strict";t.a={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1}}},41:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var c=r(8),n=r(0),a=r(10),s=r(7),o=r(15),i=r(258),l=r(80),d=r(257);const u=e=>{const t=e.detail;t&&t.preserveCartData||Object(s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore()},b=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},p=()=>{Object(n.useEffect)(()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),0===window.wcBlocksStoreCartListeners.count){const e=Object(d.a)("added_to_cart","wc-blocks_added_to_cart"),t=Object(d.a)("removed_from_cart","wc-blocks_removed_from_cart");document.body.addEventListener("wc-blocks_added_to_cart",u),document.body.addEventListener("wc-blocks_removed_from_cart",u),window.wcBlocksStoreCartListeners.count=0,window.wcBlocksStoreCartListeners.remove=()=>{e(),t(),document.body.removeEventListener("wc-blocks_added_to_cart",u),document.body.removeEventListener("wc-blocks_removed_from_cart",u)}}window.wcBlocksStoreCartListeners.count++})(),b),[])},m={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},_={...m,email:""},g={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:a.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},O=e=>Object.fromEntries(Object.entries(e).map(e=>{let[t,r]=e;return[t,Object(o.decodeEntities)(r)]})),E={cartCoupons:a.EMPTY_CART_COUPONS,cartItems:a.EMPTY_CART_ITEMS,cartFees:a.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:a.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:a.EMPTY_CART_ITEM_ERRORS,cartTotals:g,cartIsLoading:!0,cartErrors:a.EMPTY_CART_ERRORS,billingAddress:_,shippingAddress:m,shippingRates:a.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentRequirements:a.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},extensions:a.EMPTY_EXTENSIONS},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0};const{isEditor:t,previewData:r}=Object(l.b)(),o=null==r?void 0:r.previewCart,{shouldSelect:d}=e,u=Object(n.useRef)();p();const b=Object(s.useSelect)((e,r)=>{let{dispatch:c}=r;if(!d)return E;if(t)return{cartCoupons:o.coupons,cartItems:o.items,crossSellsProducts:o.cross_sells,cartFees:o.fees,cartItemsCount:o.items_count,cartItemsWeight:o.items_weight,cartNeedsPayment:o.needs_payment,cartNeedsShipping:o.needs_shipping,cartItemErrors:a.EMPTY_CART_ITEM_ERRORS,cartTotals:o.totals,cartIsLoading:!1,cartErrors:a.EMPTY_CART_ERRORS,billingData:_,billingAddress:_,shippingAddress:m,extensions:a.EMPTY_EXTENSIONS,shippingRates:o.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:o.has_calculated_shipping,paymentRequirements:o.paymentRequirements,receiveCart:"function"==typeof(null==o?void 0:o.receiveCart)?o.receiveCart:()=>{}};const n=e(a.CART_STORE_KEY),s=n.getCartData(),l=n.getCartErrors(),u=n.getCartTotals(),b=!n.hasFinishedResolution("getCartData"),p=n.isCustomerDataUpdating(),{receiveCart:g}=c(a.CART_STORE_KEY),f=O(s.billingAddress),h=s.needsShipping?O(s.shippingAddress):f,j=s.fees.length>0?s.fees.map(e=>O(e)):a.EMPTY_CART_FEES;return{cartCoupons:s.coupons.length>0?s.coupons.map(e=>({...e,label:e.code})):a.EMPTY_CART_COUPONS,cartItems:s.items,crossSellsProducts:s.crossSells,cartFees:j,cartItemsCount:s.itemsCount,cartItemsWeight:s.itemsWeight,cartNeedsPayment:s.needsPayment,cartNeedsShipping:s.needsShipping,cartItemErrors:s.errors,cartTotals:u,cartIsLoading:b,cartErrors:l,billingData:Object(i.a)(f),billingAddress:Object(i.a)(f),shippingAddress:Object(i.a)(h),extensions:s.extensions,shippingRates:s.shippingRates,isLoadingRates:p,cartHasCalculatedShipping:s.hasCalculatedShipping,paymentRequirements:s.paymentRequirements,receiveCart:g}},[d]);return u.current&&Object(c.isEqual)(u.current,b)||(u.current=b),u.current}},560:function(e,t,r){"use strict";r.r(t);var c=r(42),n=r(197),a=r(312);t.default=Object(c.withFilteredAttributes)(a.a)(n.b)},70:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var c=r(45),n=r(0),a=r(41);const s=()=>{const e=Object(a.a)(),t=Object(n.useRef)(e);return Object(n.useEffect)(()=>{t.current=e},[e]),{dispatchStoreEvent:Object(n.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(c.doAction)("experimental__woocommerce_blocks-"+e,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:Object(n.useCallback)((function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(c.doAction)("experimental__woocommerce_blocks-checkout-"+e,{...r,storeCart:t.current})}catch(e){console.error(e)}}),[])}}},80:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return o}));var c=r(0),n=r(7);const a=Object(c.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>{}}),s=()=>Object(c.useContext)(a),o=e=>{let{children:t,currentPostId:r=0,currentView:s="",previewData:o={}}=e;const i=Object(n.useSelect)(e=>r||e("core/editor").getCurrentPostId(),[r]),l=Object(c.useCallback)(e=>e in o?o[e]:{},[o]),d={isEditor:!0,currentPostId:i,currentView:s,previewData:o,getPreviewData:l};return Object(c.createElement)(a.Provider,{value:d},t)}},93:function(e,t,r){"use strict";var c=r(2),n=r(1),a=r(149),s=r(83);const o=Object(c.getSetting)("countryLocale",{}),i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=Object(n.sprintf)(
/* translators: %s Field label. */
Object(n.__)("%s (optional)","woo-gutenberg-products-block"),e.label)),e.priority&&(Object(a.a)(e.priority)&&(t.index=e.priority),Object(s.a)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},l=Object.entries(o).map(e=>{let[t,r]=e;return[t,Object.entries(r).map(e=>{let[t,r]=e;return[t,i(r)]}).reduce((e,t)=>{let[r,c]=t;return e[r]=c,e},{})]}).reduce((e,t)=>{let[r,c]=t;return e[r]=c,e},{});t.a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const n=r&&void 0!==l[r]?l[r]:{};return e.map(e=>({key:e,...c.defaultAddressFields[e]||{},...n[e]||{},...t[e]||{}})).sort((e,t)=>e.index-t.index)}}}]);