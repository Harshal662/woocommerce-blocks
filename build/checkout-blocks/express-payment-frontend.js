(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[39],{102:function(e,t){},114:function(e,t,c){"use strict";var s=c(0),n=c(1),a=c(6),o=c.n(a),r=(c(193),c(87));t.a=e=>{let{children:t,className:c,screenReaderLabel:a,showSpinner:l=!1,isLoading:i=!0}=e;return Object(s.createElement)("div",{className:o()(c,{"wc-block-components-loading-mask":i})},i&&l&&Object(s.createElement)(r.a,null),Object(s.createElement)("div",{className:o()({"wc-block-components-loading-mask__children":i}),"aria-hidden":i},t),i&&Object(s.createElement)("span",{className:"screen-reader-text"},a||Object(n.__)("Loading…","woo-gutenberg-products-block")))}},193:function(e,t){},266:function(e,t,c){"use strict";var s=c(10),n=c.n(s),a=c(0),o=c(6),r=c.n(o);c(267),t.a=e=>{let{children:t,className:c,headingLevel:s,...o}=e;const l=r()("wc-block-components-title",c),i="h"+s;return Object(a.createElement)(i,n()({className:l},o),t)}},267:function(e,t){},513:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(32),a=c(1),o=c(40),r=c(34),l=c(7),i=c(266),m=c(114),b=c(2),p=c(3),u=c(5),d=c(383);c(382);var E=()=>{const{isCalculating:e,isProcessing:t,isAfterProcessing:c,isBeforeProcessing:n,isComplete:E,hasError:O}=Object(u.useSelect)(e=>{const t=e(p.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isBeforeProcessing:t.isBeforeProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}}),{availableExpressPaymentMethods:g,expressPaymentMethodsInitialized:h,isExpressPaymentMethodActive:j}=Object(u.useSelect)(e=>{const t=e(p.PAYMENT_STORE_KEY);return{availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive()}}),{isEditor:k}=Object(o.a)();if(!h||h&&0===Object.keys(g).length)return k||b.CURRENT_USER_IS_ADMIN?Object(s.createElement)(l.StoreNoticesContainer,{context:r.d.EXPRESS_PAYMENTS}):null;const P=t||c||n||E&&!O;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(m.a,{isLoading:e||P||j},Object(s.createElement)("div",{className:"wc-block-components-express-payment wc-block-components-express-payment--checkout"},Object(s.createElement)("div",{className:"wc-block-components-express-payment__title-container"},Object(s.createElement)(i.a,{className:"wc-block-components-express-payment__title",headingLevel:"2"},Object(a.__)("Express checkout","woo-gutenberg-products-block"))),Object(s.createElement)("div",{className:"wc-block-components-express-payment__content"},Object(s.createElement)(l.StoreNoticesContainer,{context:r.d.EXPRESS_PAYMENTS}),Object(s.createElement)(d.a,null)))),Object(s.createElement)("div",{className:"wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--checkout"},Object(a.__)("Or continue below","woo-gutenberg-products-block")))};t.default=e=>{let{className:t}=e;const{cartNeedsPayment:c}=Object(n.a)();return c?Object(s.createElement)("div",{className:t},Object(s.createElement)(E,null)):null}},87:function(e,t,c){"use strict";var s=c(0);c(102),t.a=()=>Object(s.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})}}]);