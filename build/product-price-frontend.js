(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[73],{110:function(e,t,c){"use strict";var r=c(13),n=c.n(r),a=c(0),l=c(145),i=c(5),o=c.n(i);c(211);const s=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{var t;let{className:c,value:r,currency:i,onValueChange:u,displayType:p="text",...m}=e;const d="string"==typeof r?parseInt(r,10):r;if(!Number.isFinite(d))return null;const b=d/10**i.minorUnit;if(!Number.isFinite(b))return null;const y=o()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",c),f=null!==(t=m.decimalScale)&&void 0!==t?t:null==i?void 0:i.minorUnit,g={...m,...s(i),decimalScale:f,value:void 0,currency:void 0,onValueChange:void 0},O=u?e=>{const t=+e.value*10**i.minorUnit;u(t)}:()=>{};return Object(a.createElement)(l.a,n()({className:y,displayType:p},g,{value:b,onValueChange:O}))}},111:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var r=c(26),n=c(20);const a=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(n.a)(e)?e:{}},20:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return n}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function n(e,t){return r(e)&&t in e}},211:function(e,t){},282:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var r=c(57),n=c(20),a=c(111);const l=e=>{const t=Object(n.a)(e)?e:{},c=Object(a.a)(t.style);return Object(r.__experimentalUseColorProps)({...t,style:c})}},287:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var r=c(20),n=c(26),a=c(111);const l=e=>{const t=Object(r.a)(e)?e:{},c=Object(a.a)(t.style),l=Object(r.a)(c.typography)?c.typography:{},i=Object(n.a)(l.fontFamily)?l.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:i,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:l.fontSize,fontStyle:l.fontStyle,fontWeight:l.fontWeight,letterSpacing:l.letterSpacing,lineHeight:l.lineHeight,textDecoration:l.textDecoration,textTransform:l.textTransform}}}},298:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var r=c(57),n=c(20),a=c(111);const l=e=>{if("function"!=typeof r.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(n.a)(e)?e:{},c=Object(a.a)(t.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...t,style:c})}},299:function(e,t,c){"use strict";var r=c(0),n=c(1),a=c(110),l=c(5),i=c.n(l),o=c(41);c(300);const s=e=>{let{currency:t,maxPrice:c,minPrice:l,priceClassName:s,priceStyle:u={}}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(n.__)("Price between %1$s and %2$s","woo-gutenberg-products-block"),Object(o.formatPrice)(l),Object(o.formatPrice)(c))),Object(r.createElement)("span",{"aria-hidden":!0},Object(r.createElement)(a.a,{className:i()("wc-block-components-product-price__value",s),currency:t,value:l,style:u})," — ",Object(r.createElement)(a.a,{className:i()("wc-block-components-product-price__value",s),currency:t,value:c,style:u})))},u=e=>{let{currency:t,regularPriceClassName:c,regularPriceStyle:l,regularPrice:o,priceClassName:s,priceStyle:u,price:p}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.__)("Previous price:","woo-gutenberg-products-block")),Object(r.createElement)(a.a,{currency:t,renderText:e=>Object(r.createElement)("del",{className:i()("wc-block-components-product-price__regular",c),style:l},e),value:o}),Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.__)("Discounted price:","woo-gutenberg-products-block")),Object(r.createElement)(a.a,{currency:t,renderText:e=>Object(r.createElement)("ins",{className:i()("wc-block-components-product-price__value","is-discounted",s),style:u},e),value:p}))};t.a=e=>{let{align:t,className:c,currency:n,format:l="<price/>",maxPrice:o,minPrice:p,price:m,priceClassName:d,priceStyle:b,regularPrice:y,regularPriceClassName:f,regularPriceStyle:g,spacingStyle:O}=e;const j=i()(c,"price","wc-block-components-product-price",{["wc-block-components-product-price--align-"+t]:t});l.includes("<price/>")||(l="<price/>",console.error("Price formats need to include the `<price/>` tag."));const _=y&&m!==y;let v=Object(r.createElement)("span",{className:i()("wc-block-components-product-price__value",d)});return _?v=Object(r.createElement)(u,{currency:n,price:m,priceClassName:d,priceStyle:b,regularPrice:y,regularPriceClassName:f,regularPriceStyle:g}):void 0!==p&&void 0!==o?v=Object(r.createElement)(s,{currency:n,maxPrice:o,minPrice:p,priceClassName:d,priceStyle:b}):m&&(v=Object(r.createElement)(a.a,{className:i()("wc-block-components-product-price__value",d),currency:n,value:m,style:b})),Object(r.createElement)("span",{className:j,style:O},Object(r.createInterpolateElement)(l,{price:v}))}},300:function(e,t){},356:function(e,t){},394:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return d}));var r=c(0),n=c(5),a=c.n(n),l=c(299),i=c(41),o=c(58),s=c(282),u=c(298),p=c(287),m=c(142);c(356);const d=e=>{var t,c;const{className:n,textAlign:m,isDescendentOfSingleProductTemplate:d}=e,{parentClassName:b}=Object(o.useInnerBlockLayoutContext)(),{product:y}=Object(o.useProductDataContext)(),f=Object(s.a)(e),g=Object(u.a)(e),O=Object(p.a)(e),j=a()("wc-block-components-product-price",n,f.className,{[b+"__product-price"]:b},O.className);if(!y.id&&!d)return Object(r.createElement)(l.a,{align:m,className:j});const _={...f.style,...O.style},v={...g.style},S=y.prices,N=d?Object(i.getCurrencyFromPriceResponse)():Object(i.getCurrencyFromPriceResponse)(S),P=S.price!==S.regular_price,x=a()({[b+"__product-price__value"]:b,[b+"__product-price__value--on-sale"]:P});return Object(r.createElement)(l.a,{align:m,className:j,regularPriceStyle:_,priceStyle:_,priceClassName:x,currency:N,price:d?"5000":S.price,minPrice:null==S||null===(t=S.price_range)||void 0===t?void 0:t.min_amount,maxPrice:null==S||null===(c=S.price_range)||void 0===c?void 0:c.max_amount,regularPrice:d?"5000":S.regular_price,regularPriceClassName:a()({[b+"__product-price__regular"]:b}),spacingStyle:v})};t.default=e=>e.isDescendentOfSingleProductTemplate?Object(r.createElement)(d,e):Object(m.withProductDataContext)(d)(e)}}]);