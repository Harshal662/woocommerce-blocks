(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[20],{496:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(32),r=s(6),o=s.n(r),a=s(1),l=s(292),i=s(34),m=s(7),p=s(115),b=s(5),u=s(3),E=s(383);s(382);var O=()=>{const{paymentMethods:e,isInitialized:t}=Object(l.a)(),{isCalculating:s,isProcessing:n,isAfterProcessing:r,isBeforeProcessing:o,isComplete:O,hasError:g}=Object(b.useSelect)(e=>{const t=e(u.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isBeforeProcessing:t.isBeforeProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}}),j=Object(b.useSelect)(e=>e(u.PAYMENT_STORE_KEY).isExpressPaymentMethodActive());if(!t||t&&0===Object.keys(e).length)return null;const d=n||r||o||O&&!g;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(p.a,{isLoading:s||d||j},Object(c.createElement)("div",{className:"wc-block-components-express-payment wc-block-components-express-payment--cart"},Object(c.createElement)("div",{className:"wc-block-components-express-payment__content"},Object(c.createElement)(m.StoreNoticesContainer,{context:i.d.EXPRESS_PAYMENTS}),Object(c.createElement)(E.a,null)))),Object(c.createElement)("div",{className:"wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--cart"},Object(a.__)("Or","woo-gutenberg-products-block")))};t.default=e=>{let{className:t}=e;const{cartNeedsPayment:s}=Object(n.a)();return s?Object(c.createElement)("div",{className:o()("wc-block-cart__payment-options",t)},Object(c.createElement)(O,null)):null}}}]);