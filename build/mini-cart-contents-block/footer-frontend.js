(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[64,60,61],{203:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(78);const c=(e,t)=>function(n){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const o=a.a.addEventCallback(e,n,c);return t(o),()=>{t(a.a.removeEventCallback(e,o.id))}}},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};Object.create,Object.create},256:function(e,t,n){"use strict";function a(e){return e.toLowerCase()}n.d(t,"a",(function(){return r}));var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function r(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?c:n,l=t.stripRegexp,i=void 0===l?o:l,u=t.transform,d=void 0===u?a:u,m=t.delimiter,b=void 0===m?" ":m,y=s(s(e,r,"$1\0$2"),i,"\0"),p=0,v=y.length;"\0"===y.charAt(p);)p++;for(;"\0"===y.charAt(v-1);)v--;return y.slice(p,v).split("\0").map(d).join(b)}function s(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(255),c=n(256);function o(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(c.a)(e,Object(a.a)({delimiter:"."},t))}(e,Object(a.a)({delimiter:"-"},t))}},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(6),c=n.n(a),o=n(27),r=n(36),s=n(264),l=n(100);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={};return Object(l.getCSSRules)(e,{selector:""}).forEach(e=>{t[e.key]=e.value}),t}function u(e,t){return e&&t?`has-${Object(s.a)(t)}-${e}`:""}const d=e=>{const t=(e=>{const t=Object(o.a)(e)?e:{style:{}};let n=t.style;return Object(r.a)(n)&&(n=JSON.parse(n)||{}),Object(o.a)(n)||(n={}),{...t,style:n}})(e),n=function(e){var t,n,a,r,s,l,d;const{backgroundColor:m,textColor:b,gradient:y,style:p}=e,v=u("background-color",m),f=u("color",b),g=function(e){if(e)return`has-${e}-gradient-background`}(y),h=g||(null==p||null===(t=p.color)||void 0===t?void 0:t.gradient);return{className:c()(f,g,{[v]:!h&&!!v,"has-text-color":b||(null==p||null===(n=p.color)||void 0===n?void 0:n.text),"has-background":m||(null==p||null===(a=p.color)||void 0===a?void 0:a.background)||y||(null==p||null===(r=p.color)||void 0===r?void 0:r.gradient),"has-link-color":Object(o.a)(null==p||null===(s=p.elements)||void 0===s?void 0:s.link)?null==p||null===(l=p.elements)||void 0===l||null===(d=l.link)||void 0===d?void 0:d.color:void 0}),style:i({color:(null==p?void 0:p.color)||{}})}}(t),a=function(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:a}=e,o=n?u("border-color",n):"";return c()({"has-border-color":n||(null==a||null===(t=a.border)||void 0===t?void 0:t.color),borderColorClass:o})}(e),style:i({border:n})}}(t),s=function(e){var t;return{className:void 0,style:i({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),l=(e=>{const t=Object(o.a)(e.style.typography)?e.style.typography:{},n=Object(r.a)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:n,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:c()(l.className,n.className,a.className,s.className),style:{...l.style,...n.style,...a.style,...s.style}}}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a=n(27);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return e.includes("is-style-outline")?"outlined":e.includes("is-style-fill")?"contained":t},o=e=>e.some(e=>Array.isArray(e)?o(e):Object(a.a)(e)&&null!==e.key)},286:function(e,t){},292:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var a=n(45),c=n(17),o=n(5),r=n(3);const s=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:n,availablePaymentMethods:s,availableExpressPaymentMethods:l}=Object(o.useSelect)(e=>{const t=e(r.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),i=Object.values(s).map(e=>{let{name:t}=e;return t}),u=Object.values(l).map(e=>{let{name:t}=e;return t}),d=Object(c.getPaymentMethods)(),m=Object(c.getExpressPaymentMethods)(),b=Object.keys(d).reduce((e,t)=>(i.includes(t)&&(e[t]=d[t]),e),{}),y=Object.keys(m).reduce((e,t)=>(u.includes(t)&&(e[t]=m[t]),e),{}),p=Object(a.a)(b),v=Object(a.a)(y);return{paymentMethods:e?v:p,isInitialized:e?n:t}},l=()=>s(!1),i=()=>s(!0)},307:function(e,t,n){"use strict";var a=n(9),c=n.n(a),o=n(0),r=n(6),s=n.n(r);const l=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var i=e=>{let{id:t,src:n=null,alt:a=""}=e;return n?Object(o.createElement)("img",{className:l(t),src:n,alt:a}):null},u=n(20);const d=[{id:"alipay",alt:"Alipay",src:u.n+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:u.n+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:u.n+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:u.n+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:u.n+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:u.n+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:u.n+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:u.n+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:u.n+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:u.n+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:u.n+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:u.n+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:u.n+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:u.n+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:u.n+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:u.n+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:u.n+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:u.n+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:u.n+"payment-methods/wechat.svg"}];var m=n(36);n(286),t.a=e=>{let{icons:t=[],align:n="center",className:a}=e;const r=(e=>{const t={};return e.forEach(e=>{let n={};"string"==typeof e&&(n={id:e,alt:e,src:null}),"object"==typeof e&&(n={id:e.id||"",alt:e.alt||"",src:e.src||null}),n.id&&Object(m.a)(n.id)&&!t[n.id]&&(t[n.id]=n)}),Object.values(t)})(t);if(0===r.length)return null;const l=s()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===n,"wc-block-components-payment-method-icons--align-right":"right"===n},a);return Object(o.createElement)("div",{className:l},r.map(e=>{const t={...e,...(n=e.id,d.find(e=>e.id===n)||{})};var n;return Object(o.createElement)(i,c()({key:"payment-method-icon-"+e.id},t))}))}},394:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(20),o=n(114),r=n(6),s=n.n(r),l=n(265),i=n(1);const u=Object(i.__)("View my cart","woo-gutenberg-products-block");var d=n(272);t.default=e=>{let{className:t,cartButtonLabel:n,style:r}=e;const i=Object(l.a)({style:r});return c.c?Object(a.createElement)(o.a,{className:s()(t,i.className,"wc-block-mini-cart__footer-cart"),style:i.style,href:c.c,variant:Object(d.a)(t,"outlined")},n||u):null}},395:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(20),o=n(114),r=n(6),s=n.n(r),l=n(265),i=n(1);const u=Object(i.__)("Go to checkout","woo-gutenberg-products-block");var d=n(272);t.default=e=>{let{className:t,checkoutButtonLabel:n,style:r}=e;const i=Object(l.a)({style:r});return c.d?Object(a.createElement)(o.a,{className:s()(t,i.className,"wc-block-mini-cart__footer-checkout"),variant:Object(d.a)(t,"contained"),style:i.style,href:c.d},n||u):null}},423:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=e=>Object.values(e).reduce((e,t)=>(null!==t.icons&&(e=e.concat(t.icons)),e),[])},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),c=n(18),o=n.n(c);function r(e){const t=Object(a.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},479:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n(7),r=n(29),s=n(292),l=n(32),i=n(307),u=n(423),d=n(2),m=n(89),b=n(6),y=n.n(b),p=n(394),v=n(395),f=n(272);const g=()=>{const{paymentMethods:e}=Object(s.b)();return Object(a.createElement)(i.a,{icons:Object(u.a)(e)})};t.default=e=>{let{children:t,className:n,cartButtonLabel:s,checkoutButtonLabel:i}=e;const{cartTotals:u}=Object(l.a)(),b=Object(d.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(u.total_items,10)+parseInt(u.total_items_tax,10):parseInt(u.total_items,10),h=Object(f.b)(t);return Object(a.createElement)("div",{className:y()(n,"wc-block-mini-cart__footer")},Object(a.createElement)(o.TotalsItem,{className:"wc-block-mini-cart__footer-subtotal",currency:Object(r.getCurrencyFromPriceResponse)(u),label:Object(c.__)("Subtotal","woo-gutenberg-products-block"),value:b,description:Object(c.__)("Shipping, taxes, and discounts calculated at checkout.","woo-gutenberg-products-block")}),Object(a.createElement)("div",{className:"wc-block-mini-cart__footer-actions"},h?t:Object(a.createElement)(a.Fragment,null,Object(a.createElement)(p.default,{cartButtonLabel:s}),Object(a.createElement)(v.default,{checkoutButtonLabel:i}))),Object(a.createElement)(m.a,null,Object(a.createElement)(g,null)))}},78:function(e,t,n){"use strict";let a;function c(){return Math.floor(Math.random()*Date.now()).toString()}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(a||(a={}));const o={addEventCallback:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:c(),type:a.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:n}},removeEventCallback:(e,t)=>({id:t,type:a.REMOVE_EVENT_CALLBACK,eventType:e})},r={},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,{type:t,eventType:n,id:c,callback:o,priority:s}=arguments.length>1?arguments[1]:void 0;const l=e.hasOwnProperty(n)?new Map(e[n]):new Map;switch(t){case a.ADD_EVENT_CALLBACK:return l.set(c,{priority:s,callback:o}),{...e,[n]:l};case a.REMOVE_EVENT_CALLBACK:return l.delete(c),{...e,[n]:l}}}},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m}));var a=n(0),c=n(5),o=n(3),r=n(16),s=n.n(r),l=n(78),i=n(203);const u=Object(a.createContext)({onPaymentProcessing:()=>()=>()=>{},onPaymentSetup:()=>()=>()=>{}}),d=()=>Object(a.useContext)(u),m=e=>{let{children:t}=e;const{isProcessing:n,isIdle:r,isCalculating:d,hasError:m}=Object(c.useSelect)(e=>{const t=e(o.CHECKOUT_STORE_KEY);return{isProcessing:t.isProcessing(),isIdle:t.isIdle(),hasError:t.hasError(),isCalculating:t.isCalculating()}}),{isPaymentReady:b}=Object(c.useSelect)(e=>{const t=e(o.PAYMENT_STORE_KEY);return{isPaymentProcessing:t.isPaymentProcessing(),isPaymentReady:t.isPaymentReady()}}),{setValidationErrors:y}=Object(c.useDispatch)(o.VALIDATION_STORE_KEY),[p,v]=Object(a.useReducer)(l.b,{}),{onPaymentSetup:f}=(e=>Object(a.useMemo)(()=>({onPaymentSetup:Object(i.a)("payment_setup",e)}),[e]))(v),g=Object(a.useRef)(p);Object(a.useEffect)(()=>{g.current=p},[p]);const{__internalSetPaymentProcessing:h,__internalSetPaymentIdle:O,__internalEmitPaymentProcessingEvent:j}=Object(c.useDispatch)(o.PAYMENT_STORE_KEY);Object(a.useEffect)(()=>{!n||m||d||(h(),j(g.current,y))},[n,m,d,h,j,y]),Object(a.useEffect)(()=>{r&&!b&&O()},[r,b,O]),Object(a.useEffect)(()=>{m&&b&&O()},[m,b,O]);const E={onPaymentProcessing:Object(a.useMemo)(()=>function(){return s()("onPaymentProcessing",{alternative:"onPaymentSetup",plugin:"WooCommerce Blocks"}),f(...arguments)},[f]),onPaymentSetup:f};return Object(a.createElement)(u.Provider,{value:E},t)}}}]);