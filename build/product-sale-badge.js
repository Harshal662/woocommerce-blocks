(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[34],{119:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var a=c(5),n=c(20),s=c(82);const r=e=>{const t=Object(n.b)(e)?e:{},c=Object(s.a)(t.style);return Object(a.__experimentalUseBorderProps)({...t,style:c})}},146:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return m}));var a=c(0),n=c(1),s=c(4),r=c.n(s),l=c(30),o=c(25),u=c(119),b=c(109),d=c(96),p=c(110),i=c(50);c(264);const m=e=>{const{className:t,align:c}=e,{parentClassName:s}=Object(o.useInnerBlockLayoutContext)(),{product:i}=Object(o.useProductDataContext)(),m=Object(u.a)(e),j=Object(b.a)(e),O=Object(d.a)(e),w=Object(p.a)(e);if(!i.id||!i.on_sale)return null;const g="string"==typeof c?"wc-block-components-product-sale-badge--align-"+c:"";return Object(a.createElement)("div",{className:r()("wc-block-components-product-sale-badge",t,g,{[s+"__product-onsale"]:s},j.className,m.className,O.className),style:{...j.style,...m.style,...O.style,...w.style}},Object(a.createElement)(l.a,{label:Object(n.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(n.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(i.withProductDataContext)(m)},264:function(e,t){},30:function(e,t,c){"use strict";var a=c(0),n=c(4),s=c.n(n);t.a=e=>{let t,{label:c,screenReaderLabel:n,wrapperElement:r,wrapperProps:l={}}=e;const o=null!=c,u=null!=n;return!o&&u?(t=r||"span",l={...l,className:s()(l.className,"screen-reader-text")},Object(a.createElement)(t,l,n)):(t=r||a.Fragment,o&&u&&c!==n?Object(a.createElement)(t,l,Object(a.createElement)("span",{"aria-hidden":"true"},c),Object(a.createElement)("span",{className:"screen-reader-text"},n)):Object(a.createElement)(t,l,c))}}}]);