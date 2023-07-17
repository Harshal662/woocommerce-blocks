this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-categories"]=function(e){function t(t){for(var r,a,l=t[0],s=t[1],i=t[2],p=0,b=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);b.length;)b.shift()();return n.push.apply(n,i||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,l=1;l<o.length;l++){var s=o[l];0!==c[s]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},c={24:0},n=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;return n.push([489,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},187:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r=o(21);const c=e=>{if(Object(r.b)(e)){const t=e.getEditedPostType();return"wp_template"===t||"wp_template_part"===t}return!1}},2:function(e,t){e.exports=window.wp.components},21:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return n}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}const n=e=>0===Object.keys(e).length},353:function(e,t){},368:function(e){e.exports=JSON.parse('{"name":"woocommerce/product-categories","title":"Product Categories List","category":"woocommerce","description":"Show all product categories as a list or dropdown.","keywords":["WooCommerce"],"supports":{"align":["wide","full"],"html":false,"color":{"background":false,"link":true},"typography":{"fontSize":true,"lineHeight":true}},"attributes":{"align":{"type":"string"},"hasCount":{"type":"boolean","default":true},"hasImage":{"type":"boolean","default":false},"hasEmpty":{"type":"boolean","default":false},"isDropdown":{"type":"boolean","default":false},"isHierarchical":{"type":"boolean","default":true},"showChildrenOnly":{"type":"boolean","default":false}},"example":{"attributes":{"hasCount":true,"hasImage":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},489:function(e,t,o){e.exports=o(540)},490:function(e,t){},5:function(e,t){e.exports=window.wp.blockEditor},540:function(e,t,o){"use strict";o.r(t);var r=o(6),c=o.n(r),n=o(0),a=o(8),l=o(74),s=o(606),i=(o(353),o(368)),u=(o(490),o(5)),p=o(1),b=o(60),d=o.n(b),g=o(187),h=o(21),w=o(7),m=o(2);const f=()=>Object(n.createElement)(m.Placeholder,{icon:Object(n.createElement)(l.a,{icon:s.a}),label:Object(p.__)("Product Categories List","woo-gutenberg-products-block"),className:"wc-block-product-categories"},Object(p.__)("This block displays the product categories for your store. To use it you first need to create a product and assign it to a category.","woo-gutenberg-products-block"));var O=e=>{let{attributes:t,setAttributes:o,name:r}=e;const c=Object(w.useSelect)("core/edit-site"),a=Object(w.useSelect)("core/edit-widgets"),l=Object(g.a)(c),s=(e=>{if(Object(h.b)(e)){const t=e.getWidgetAreas();return Array.isArray(t)&&t.length>0}return!1})(a),i=Object(u.useBlockProps)({className:"wc-block-product-categories"});return Object(n.createElement)("div",i,(()=>{const{hasCount:e,hasImage:r,hasEmpty:c,isDropdown:a,isHierarchical:i,showChildrenOnly:b}=t;return Object(n.createElement)(u.InspectorControls,{key:"inspector"},Object(n.createElement)(m.PanelBody,{title:Object(p.__)("List Settings","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(m.__experimentalToggleGroupControl,{label:Object(p.__)("Display style","woo-gutenberg-products-block"),value:a?"dropdown":"list",onChange:e=>o({isDropdown:"dropdown"===e})},Object(n.createElement)(m.__experimentalToggleGroupControlOption,{value:"list",label:Object(p.__)("List","woo-gutenberg-products-block")}),Object(n.createElement)(m.__experimentalToggleGroupControlOption,{value:"dropdown",label:Object(p.__)("Dropdown","woo-gutenberg-products-block")}))),Object(n.createElement)(m.PanelBody,{title:Object(p.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(m.ToggleControl,{label:Object(p.__)("Show product count","woo-gutenberg-products-block"),checked:e,onChange:()=>o({hasCount:!e})}),!a&&Object(n.createElement)(m.ToggleControl,{label:Object(p.__)("Show category images","woo-gutenberg-products-block"),help:r?Object(p.__)("Category images are visible.","woo-gutenberg-products-block"):Object(p.__)("Category images are hidden.","woo-gutenberg-products-block"),checked:r,onChange:()=>o({hasImage:!r})}),Object(n.createElement)(m.ToggleControl,{label:Object(p.__)("Show hierarchy","woo-gutenberg-products-block"),checked:i,onChange:()=>o({isHierarchical:!i})}),Object(n.createElement)(m.ToggleControl,{label:Object(p.__)("Show empty categories","woo-gutenberg-products-block"),checked:c,onChange:()=>o({hasEmpty:!c})}),(l||s)&&Object(n.createElement)(m.ToggleControl,{label:Object(p.__)("Only show children of current category","woo-gutenberg-products-block"),help:Object(p.__)("This will affect product category pages","woo-gutenberg-products-block"),checked:b,onChange:()=>o({showChildrenOnly:!b})})))})(),Object(n.createElement)(m.Disabled,null,Object(n.createElement)(d.a,{block:r,attributes:t,EmptyResponsePlaceholder:f})))};Object(a.registerBlockType)(i,{icon:{src:Object(n.createElement)(l.a,{icon:s.a,className:"wc-block-editor-components-block-icon"})},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:o}=e;return"woocommerce_product_categories"===t&&!(null==o||!o.raw)},transform:e=>{let{instance:t}=e;return Object(a.createBlock)("woocommerce/product-categories",{hasCount:!!t.raw.count,hasEmpty:!t.raw.hide_empty,isDropdown:!!t.raw.dropdown,isHierarchical:!!t.raw.hierarchical})}}]},deprecated:[{attributes:{hasCount:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-has-count"},hasEmpty:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-has-empty"},isDropdown:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-is-dropdown"},isHierarchical:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-is-hierarchical"}},migrate:e=>e,save(e){const{hasCount:t,hasEmpty:o,isDropdown:r,isHierarchical:a}=e.attributes,l={};return t&&(l["data-has-count"]=!0),o&&(l["data-has-empty"]=!0),r&&(l["data-is-dropdown"]=!0),a&&(l["data-is-hierarchical"]=!0),Object(n.createElement)("div",c()({className:"is-loading"},l),r?Object(n.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}):Object(n.createElement)("ul",{"aria-hidden":!0},Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"wc-block-product-categories__placeholder"}))))}}],edit:e=>{const t=Object(u.useBlockProps)();return Object(n.createElement)("div",t,Object(n.createElement)(O,e))},save:()=>null})},60:function(e,t){e.exports=window.wp.serverSideRender},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.wp.blocks}});