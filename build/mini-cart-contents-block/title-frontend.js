(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[68,69,70],{114:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(26),s=n(20);const a=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(s.a)(t)?t:{}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(57),s=n(20),a=n(114);const r=t=>{const e=Object(s.a)(t)?t:{},n=Object(a.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(20),s=n(26),a=n(114);const r=t=>{const e=Object(c.a)(t)?t:{},n=Object(a.a)(e.style),r=Object(c.a)(n.typography)?n.typography:{},l=Object(s.a)(r.fontFamily)?r.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:l,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,fontStyle:r.fontStyle,fontWeight:r.fontWeight,letterSpacing:r.letterSpacing,lineHeight:r.lineHeight,textDecoration:r.textDecoration,textTransform:r.textTransform}}}},289:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(57),s=n(20),a=n(114);const r=t=>{if("function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(s.a)(t)?t:{},n=Object(a.a)(e.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var c=n(20);const s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return t.includes("is-style-outline")?"outlined":t.includes("is-style-fill")?"contained":e},a=t=>t.some(t=>Array.isArray(t)?a(t):Object(c.a)(t)&&null!==t.key)},414:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(43),a=n(4),r=n.n(a),l=n(1),o=n(281),i=n(287),u=n(289);e.default=t=>{const{cartItemsCount:e}=Object(s.a)(),n=Object(o.a)(t),a=Object(i.a)(t),f=Object(u.a)(t);return Object(c.createElement)("span",{className:r()(t.className,n.className,a.className),style:{...n.style,...a.style,...f.style}},Object(l.sprintf)(
/* translators: %d is the count of items in the cart. */
Object(l._n)("(%d item)","(%d items)",e,"woo-gutenberg-products-block"),e))}},416:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(281),a=n(287),r=n(289),l=n(4),o=n.n(l),i=n(1);const u=Object(i.__)("Your cart","woo-gutenberg-products-block");e.default=t=>{const e=Object(s.a)(t),n=Object(a.a)(t),l=Object(r.a)(t);return Object(c.createElement)("span",{className:o()(t.className,e.className,n.className),style:{...e.style,...n.style,...l.style}},t.label||u)}},492:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(43),a=n(4),r=n.n(a),l=n(414),o=n(416),i=n(291);e.default=t=>{let{children:e,className:n}=t;const{cartIsLoading:a}=Object(s.a)();if(a)return null;const u=Object(i.b)(e);return Object(c.createElement)("h2",{className:r()(n,"wc-block-mini-cart__title")},u?e:Object(c.createElement)(c.Fragment,null,Object(c.createElement)(o.default,null),Object(c.createElement)(l.default,null)))}}}]);