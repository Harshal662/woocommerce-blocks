(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[27],{19:function(e,t,o){"use strict";var n=o(0),c=o(7),a=o.n(c);t.a=e=>{let t,{label:o,screenReaderLabel:c,wrapperElement:r,wrapperProps:s={}}=e;const p=null!=o,l=null!=c;return!p&&l?(t=r||"span",s={...s,className:a()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,c)):(t=r||n.Fragment,p&&l&&o!==c?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},o),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,s,o))}},288:function(e,t,o){"use strict";var n=o(13),c=o.n(n),a=o(0),r=o(90),s=o(7),p=o.n(s),l=o(140);o(289),t.a=e=>{let{className:t,showSpinner:o=!1,children:n,variant:s="contained",...i}=e;const u=p()("wc-block-components-button",t,s,{"wc-block-components-button--loading":o});return Object(a.createElement)(r.a,c()({className:u},i),o&&Object(a.createElement)(l.a,null),Object(a.createElement)("span",{className:"wc-block-components-button__text"},n))}},289:function(e,t){},302:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var n=o(1),c=o(5),a=o(3),r=o(22),s=o(36);const p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:o}=Object(s.a)(),{createErrorNotice:p}=Object(c.useDispatch)("core/notices"),{createNotice:l}=Object(c.useDispatch)("core/notices"),{setValidationErrors:i}=Object(c.useDispatch)(a.VALIDATION_STORE_KEY),{applyCoupon:u,removeCoupon:b,isApplyingCoupon:d,isRemovingCoupon:m}=Object(c.useSelect)((e,t)=>{let{dispatch:o}=t;const n=e(a.CART_STORE_KEY),c=o(a.CART_STORE_KEY);return{applyCoupon:c.applyCoupon,removeCoupon:c.removeCoupon,isApplyingCoupon:n.isApplyingCoupon(),isRemovingCoupon:n.isRemovingCoupon(),receiveApplyingCoupon:c.receiveApplyingCoupon}},[p,l]),O=t=>{u(t).then(o=>{!0===o&&l("info",Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been applied to your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(e=>{i({coupon:{message:Object(r.decodeEntities)(e.message),hidden:!1}}),receiveApplyingCoupon("")})},g=t=>{b(t).then(o=>{!0===o&&l("info",Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been removed from your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(t=>{p(t.message,{id:"coupon-form",context:e}),receiveApplyingCoupon("")})};return{appliedCoupons:t,isLoading:o,applyCoupon:O,removeCoupon:g,isApplyingCoupon:d,isRemovingCoupon:m}}},352:function(e,t){},413:function(e,t,o){"use strict";var n=o(0),c=o(1),a=o(288),r=o(19),s=o(141),p=o(15),l=o(9),i=o(5),u=o(3);o(352),t.a=Object(p.withInstanceId)(e=>{let{instanceId:t,isLoading:o=!1,initialOpen:p=!1,onSubmit:b=(()=>{})}=e;const[d,m]=Object(n.useState)(""),O=Object(n.useRef)(!1),g="wc-block-components-totals-coupon__input-"+t,{validationError:E,validationErrorId:j}=Object(i.useSelect)(e=>{const t=e(u.VALIDATION_STORE_KEY);return{validationError:t.getValidationError("coupon"),validationErrorId:t.getValidationErrorId(g)}});return Object(n.useEffect)(()=>{O.current!==o&&(o||!d||E||m(""),O.current=o)},[o,d,E]),Object(n.createElement)(l.Panel,{className:"wc-block-components-totals-coupon",hasBorder:!1,initialOpen:p,title:Object(n.createElement)(r.a,{label:Object(c.__)("Coupon code","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Apply a coupon code","woo-gutenberg-products-block"),htmlFor:g})},Object(n.createElement)(s.a,{screenReaderLabel:Object(c.__)("Applying coupon…","woo-gutenberg-products-block"),isLoading:o,showSpinner:!1},Object(n.createElement)("div",{className:"wc-block-components-totals-coupon__content"},Object(n.createElement)("form",{className:"wc-block-components-totals-coupon__form"},Object(n.createElement)(l.ValidatedTextInput,{id:g,errorId:"coupon",className:"wc-block-components-totals-coupon__input",label:Object(c.__)("Enter code","woo-gutenberg-products-block"),value:d,ariaDescribedBy:j,onChange:e=>{m(e)},focusOnMount:!0,showError:!1}),Object(n.createElement)(a.a,{className:"wc-block-components-totals-coupon__button",disabled:o||!d,showSpinner:o,onClick:e=>{e.preventDefault(),b(d)},type:"submit"},Object(c.__)("Apply","woo-gutenberg-products-block"))),Object(n.createElement)(l.ValidationInputError,{propertyName:"coupon",elementId:g}))))})},485:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(413),a=o(302),r=o(2),s=o(9);t.default=e=>{let{className:t}=e;const o=Object(r.getSetting)("couponsEnabled",!0),{applyCoupon:p,isApplyingCoupon:l}=Object(a.a)("wc/cart");return o?Object(n.createElement)(s.TotalsWrapper,{className:t},Object(n.createElement)(c.a,{onSubmit:p,isLoading:l})):null}}}]);