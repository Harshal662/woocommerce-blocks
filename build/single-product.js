this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["single-product"]=function(e){function t(t){for(var c,a,s=t[0],i=t[1],l=t[2],d=0,m=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],c=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(c=!1)}c&&(n.splice(t--,1),e=a(a.s=r[0]))}return e}var c={},o={47:0},n=[];function a(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,c){r=o[e]=[t,c]}));t.push(r[2]=c);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+""+({1:"product-add-to-cart--product-button--product-image--product-price--product-rating--product-sale-bad--49d3ecb2",2:"product-button--product-image--product-price--product-rating--product-sale-badge--product-sku--prod--5bce0384",3:"product-add-to-cart--product-button--product-image--product-rating--product-title",21:"product-add-to-cart",23:"product-button",27:"product-image",30:"product-price",32:"product-rating",34:"product-sale-badge",36:"product-sku",37:"product-stock-indicator",38:"product-summary",41:"product-title"}[e]||e)+".js?ver="+{1:"1522d978370e66c89316",2:"c07d0736f39af9a95abe",3:"e7b3da38941272d2519e",21:"757d202b4a6a6b115d16",23:"04653853a9cf2863edca",27:"c68686717dc04a34a7c7",30:"709c5ebbf70aa4816781",32:"e287b0bf2f26d73c5374",34:"8b3ce65e259ae5b9170e",36:"dbcdeb64da4c9fc6b4ae",37:"e641a42796f4ba7b0fe5",38:"f1685204798c3ff4fa8f",41:"9ca3af99d0be8e048d35"}[e]}(e);var i=new Error;n=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",i.name="ChunkLoadError",i.type=c,i.request=n,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:s})}),12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=c,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(r,c,function(t){return e[t]}.bind(null,c));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;return n.push([508,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},100:function(e,t){e.exports=window.wp.wordcount},104:function(e,t){e.exports=window.wp.warning},106:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),a=r(1),s=r(252),i=r(37),l=r(98),u=r(11),d=Object(u.createHigherOrderComponent)(e=>{class t extends n.Component{render(){const{selected:t}=this.props,r=null==t;return Array.isArray(t)?Object(n.createElement)(e,this.props):Object(n.createElement)(e,o()({},this.props,{selected:r?[]:[t]}))}}return t.defaultProps={selected:null},t},"withTransformSingleSelectToMultipleSelect"),m=r(213),p=r(23),b=r.n(p),g=r(25),h=r.n(g),O=r(24),w=r(30),j=Object(u.createHigherOrderComponent)(e=>{class t extends n.Component{constructor(){super(...arguments),b()(this,"state",{error:null,loading:!1,variations:{}}),b()(this,"loadVariations",()=>{const{products:e}=this.props,{loading:t,variations:r}=this.state;if(t)return;const c=this.getExpandedProduct();if(!c||r[c])return;const o=e.find(e=>e.id===c);o.variations&&0!==o.variations.length?(this.setState({loading:!0}),Object(O.g)(c).then(e=>{const t=e.map(e=>({...e,parent:c}));this.setState({variations:{...this.state.variations,[c]:t},loading:!1,error:null})}).catch(async e=>{const t=await Object(w.a)(e);this.setState({variations:{...this.state.variations,[c]:null},loading:!1,error:t})})):this.setState({variations:{...this.state.variations,[c]:null},loading:!1,error:null})})}componentDidMount(){const{selected:e,showVariations:t}=this.props;e&&t&&this.loadVariations()}componentDidUpdate(e){const{isLoading:t,selected:r,showVariations:c}=this.props;c&&(!h()(e.selected,r)||e.isLoading&&!t)&&this.loadVariations()}isProductId(e){const{products:t}=this.props;return t.some(t=>t.id===e)}findParentProduct(e){var t;const{products:r}=this.props;return null===(t=r.filter(t=>t.variations&&t.variations.find(t=>{let{id:r}=t;return r===e}))[0])||void 0===t?void 0:t.id}getExpandedProduct(){const{isLoading:e,selected:t,showVariations:r}=this.props;if(!r)return null;let c=t&&t.length?t[0]:null;return c?this.prevSelectedItem=c:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(c=this.prevSelectedItem)),!e&&c?this.isProductId(c)?c:this.findParentProduct(c):null}render(){const{error:t,isLoading:r}=this.props,{error:c,loading:a,variations:s}=this.state;return Object(n.createElement)(e,o()({},this.props,{error:c||t,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:s,variationsLoading:a}))}}return b()(t,"defaultProps",{selected:[],showVariations:!1}),t},"withProductVariations"),f=r(36),E=r(4),k=r.n(E),v=r(68);r(151);const _={list:Object(a.__)("Products","woo-gutenberg-products-block"),noItems:Object(a.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(a.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(a.__)("Product search results updated.","woo-gutenberg-products-block")},y=e=>{let{expandedProduct:t,error:r,instanceId:c,isCompact:u,isLoading:d,onChange:m,onSearch:p,products:b,renderItem:g,selected:h,showVariations:O,variations:w,variationsLoading:j}=e;if(r)return Object(n.createElement)(f.a,{error:r});const E=[...b,...w&&w[t]?w[t]:[]];return Object(n.createElement)(l.a,{className:"woocommerce-products",list:E,isCompact:u,isLoading:d,isSingle:!0,selected:E.filter(e=>{let{id:t}=e;return h.includes(t)}),onChange:m,renderItem:g||(O?e=>{const{item:t,search:r,depth:l=0,isSelected:u,onSelect:m}=e,p=t.variations&&Array.isArray(t.variations)?t.variations.length:0,b=k()("woocommerce-search-product__item","woocommerce-search-list__item","depth-"+l,"has-count",{"is-searching":r.length>0,"is-skip-level":0===l&&0!==t.parent,"is-variable":p>0});if(!t.breadcrumbs.length)return Object(n.createElement)(v.a,o()({},e,{className:k()(b,{"is-selected":u}),isSelected:u,item:t,onSelect:()=>()=>{m(t)()},isLoading:d||j,countLabel:t.variations.length>0?Object(a.sprintf)(
/* translators: %1$d is the number of variations of a product product. */
Object(a.__)("%1$d variations","woo-gutenberg-products-block"),t.variations.length):null,name:"products-"+c,"aria-label":Object(a.sprintf)(
/* translators: %1$s is the product name, %2$d is the number of variations of that product. */
Object(a._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",t.variations.length,"woo-gutenberg-products-block"),t.name,t.variations.length)}));const g=Object(s.a)(t.variation)?e:{...e,item:{...e.item,name:t.variation},"aria-label":`${t.breadcrumbs[0]}: ${t.variation}`};return Object(n.createElement)(i.a,o()({},g,{className:b,name:"variations-"+c}))}:null),onSearch:p,messages:_,isHierarchical:!0})};y.defaultProps={isCompact:!1,expandedProduct:null,selected:[],showVariations:!1},t.a=d(Object(m.a)(j(Object(u.withInstanceId)(y))))},11:function(e,t){e.exports=window.wp.compose},12:function(e,t){e.exports=window.wc.blocksCheckout},124:function(e,t){e.exports=window.wp.styleEngine},127:function(e,t){},14:function(e,t){e.exports=window.wp.apiFetch},143:function(e,t,r){"use strict";var c=r(23),o=r.n(c),n=r(0),a=r(1),s=r(18),i=e=>{let{imageUrl:t=s.n+"/block-error.svg",header:r=Object(a.__)("Oops!","woo-gutenberg-products-block"),text:c=Object(a.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:o,errorMessagePrefix:i=Object(a.__)("Error:","woo-gutenberg-products-block"),button:l,showErrorBlock:u=!0}=e;return u?Object(n.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&Object(n.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),Object(n.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&Object(n.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),c&&Object(n.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},c),o&&Object(n.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},i?i+" ":"",o),l&&Object(n.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},l))):null};r(228);class l extends n.Component{constructor(){super(...arguments),o()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(n.createElement)(n.Fragment,null,Object(n.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,showErrorBlock:c=!0,text:o,errorMessagePrefix:a,renderError:s,button:l}=this.props,{errorMessage:u,hasError:d}=this.state;return d?"function"==typeof s?s({errorMessage:u}):Object(n.createElement)(i,{showErrorBlock:c,errorMessage:r?u:null,header:e,imageUrl:t,text:o,errorMessagePrefix:a,button:l}):this.props.children}}t.a=l},15:function(e,t){e.exports=window.wp.url},151:function(e,t){},155:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(74),a=r(250),s=r(3),i=r(5),l=r(26);t.a=e=>{const t=(Object(l.useProductDataContext)().product||{}).id||e.productId||0;return t?Object(c.createElement)(i.InspectorControls,null,Object(c.createElement)("div",{className:"wc-block-single-product__edit-card"},Object(c.createElement)("div",{className:"wc-block-single-product__edit-card-title"},Object(c.createElement)("a",{href:`${s.ADMIN_URL}post.php?post=${t}&action=edit`,target:"_blank",rel:"noopener noreferrer"},Object(o.__)("Edit this product's details","woo-gutenberg-products-block"),Object(c.createElement)(n.a,{icon:a.a,size:16}))),Object(c.createElement)("div",{className:"wc-block-single-product__edit-card-description"},Object(o.__)("Edit details such as title, price, description and more.","woo-gutenberg-products-block")))):null}},157:function(e){e.exports=JSON.parse('{"name":"woocommerce/single-product","version":"1.0.0","icon":"info","title":"Single Product","description":"Display a single product.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":["wide","full"]},"attributes":{"isPreview":{"type":"boolean","default":false},"productId":{"type":"number"}},"example":{"attributes":{"isPreview":true}},"usesContext":["postId","postType","queryId"],"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},16:function(e,t){e.exports=window.wp.htmlEntities},17:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return u}));var c=r(0),o=r(1),n=r(55);const a={clear:Object(o.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:Object(o.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:Object(o.__)("No results for %s","woo-gutenberg-products-block"),search:Object(o.__)("Search for items","woo-gutenberg-products-block"),selected:e=>Object(o.sprintf)(
/* translators: Number of items selected from list. */
Object(o._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:Object(o.__)("Search results updated.","woo-gutenberg-products-block")},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const r=e.reduce((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e},{}),c=Object(n.a)(t,"id"),o=["0"],a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=a(c[e.parent]);return[...t,e.name]},s=e=>e.map(e=>{const t=r[e.id];return o.push(""+e.id),{...e,breadcrumbs:a(c[e.parent]),children:t&&t.length?s(t):[]}}),i=s(r[0]||[]);return Object.entries(r).forEach(e=>{let[t,r]=e;o.includes(t)||i.push(...s(r||[]))}),i},i=(e,t,r)=>{if(!t)return r?s(e):e;const c=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),o=e.map(e=>!!c.test(e.name)&&e).filter(Boolean);return r?s(o,e):o},l=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map((e,t)=>r.test(e)?Object(c.createElement)("strong",{key:t},e):Object(c.createElement)(c.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var c=r(0),o=r(2),n=r(79),a=r(192),s=r(71);const i="core/post-excerpt",l="woocommerce/product-query/product-summary";Object(s.a)(i,{blockDescription:n.a,blockIcon:Object(c.createElement)(o.Icon,{icon:a.a}),blockTitle:n.c,variationName:l})},18:function(e,t,r){"use strict";r.d(t,"p",(function(){return n})),r.d(t,"n",(function(){return a})),r.d(t,"m",(function(){return s})),r.d(t,"o",(function(){return i})),r.d(t,"k",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"h",(function(){return d})),r.d(t,"l",(function(){return m})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"g",(function(){return g})),r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return j})),r.d(t,"i",(function(){return f})),r.d(t,"j",(function(){return E})),r.d(t,"f",(function(){return k}));var c,o=r(3);const n=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=n.pluginUrl+"images/",s=n.pluginUrl+"build/",i=n.buildPhase,l=null===(c=o.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=o.STORE_PAGES.checkout.id,d=(o.STORE_PAGES.checkout.permalink,o.STORE_PAGES.privacy.permalink),m=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),p=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),b=o.STORE_PAGES.cart.permalink,g=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("localPickupEnabled",!1)),h=Object(o.getSetting)("countries",{}),O=Object(o.getSetting)("countryData",{}),w=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowBilling).map(e=>[e,h[e]||""])),j=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowBilling).map(e=>[e,O[e].states||[]])),f=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowShipping).map(e=>[e,h[e]||""])),E=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowShipping).map(e=>[e,O[e].states||[]])),k=Object.fromEntries(Object.keys(O).map(e=>[e,O[e].locale||[]]))},2:function(e,t){e.exports=window.wp.components},213:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),a=r(18),s=r(24),i=r(113),l=r(30);t.a=e=>t=>{let{selected:r,...c}=t;const[u,d]=Object(n.useState)(!0),[m,p]=Object(n.useState)(null),[b,g]=Object(n.useState)([]),h=a.p.productCount>100,O=async e=>{const t=await Object(l.a)(e);p(t),d(!1)},w=Object(n.useRef)(r);Object(n.useEffect)(()=>{Object(s.h)({selected:w.current}).then(e=>{g(e),d(!1)}).catch(O)},[w]);const j=Object(i.a)(e=>{Object(s.h)({selected:r,search:e}).then(e=>{g(e),d(!1)}).catch(O)},400),f=Object(n.useCallback)(e=>{d(!0),j(e)},[d,j]);return Object(n.createElement)(e,o()({},c,{selected:r,error:m,products:b,isLoading:u,onSearch:h?f:null}))}},22:function(e,t){e.exports=window.wc.priceFormat},228:function(e,t){},24:function(e,t,r){"use strict";r.d(t,"h",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"f",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return g})),r.d(t,"g",(function(){return h})),r.d(t,"a",(function(){return O}));var c=r(15),o=r(14),n=r.n(o),a=r(3),s=r(18);const i=(e,t)=>{const r=new Map;return e.filter(e=>{const c=t(e);return!r.has(c)&&(r.set(c,e),!0)})},l=e=>{let{selected:t=[],search:r="",queryArgs:o={}}=e;const a=(e=>{let{selected:t=[],search:r="",queryArgs:o={}}=e;const n=s.p.productCount>100,a={per_page:n?100:0,catalog_visibility:"any",search:r,orderby:"title",order:"asc"},i=[Object(c.addQueryArgs)("/wc/store/v1/products",{...a,...o})];return n&&t.length&&i.push(Object(c.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),i})({selected:t,search:r,queryArgs:o});return Promise.all(a.map(e=>n()({path:e}))).then(e=>{const t=e.flat();return i(t,e=>e.id).map(e=>({...e,parent:0}))}).catch(e=>{throw e})},u=e=>n()({path:"/wc/store/v1/products/"+e}),d=()=>n()({path:"wc/store/v1/products/attributes"}),m=e=>n()({path:`wc/store/v1/products/attributes/${e}/terms`}),p=e=>{let{selected:t=[],search:r}=e;const o=(e=>{let{selected:t=[],search:r}=e;const o=Object(a.getSetting)("limitTags",!1),n=[Object(c.addQueryArgs)("wc/store/v1/products/tags",{per_page:o?100:0,orderby:o?"count":"name",order:o?"desc":"asc",search:r})];return o&&t.length&&n.push(Object(c.addQueryArgs)("wc/store/v1/products/tags",{include:t})),n})({selected:t,search:r});return Promise.all(o.map(e=>n()({path:e}))).then(e=>{const t=e.flat();return i(t,e=>e.id)})},b=e=>n()({path:Object(c.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),g=e=>n()({path:"wc/store/v1/products/categories/"+e}),h=e=>n()({path:Object(c.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),O=(e,t)=>{if(!e.title.raw)return e.slug;const r=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(r?"":" - "+e.slug)}},25:function(e,t){e.exports=window.wp.isShallowEqual},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));const c=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length},26:function(e,t){e.exports=window.wc.wcBlocksSharedContext},27:function(e,t){e.exports=window.React},29:function(e,t){e.exports=window.lodash},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));const c=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}}},33:function(e,t){e.exports=window.wp.escapeHtml},351:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(23),a=r.n(n),s=r(0),i=r(11),l=r(24),u=r(30);const d=Object(i.createHigherOrderComponent)(e=>class extends s.Component{constructor(){super(...arguments),a()(this,"state",{error:null,loading:!1,product:"preview"===this.props.attributes.productId?this.props.attributes.previewProduct:null}),a()(this,"loadProduct",()=>{const{productId:e}=this.props.attributes;"preview"!==e&&(e?(this.setState({loading:!0}),Object(l.e)(e).then(e=>{this.setState({product:e,loading:!1,error:null})}).catch(async e=>{const t=await Object(u.a)(e);this.setState({product:null,loading:!1,error:t})})):this.setState({product:null,loading:!1,error:null}))})}componentDidMount(){this.loadProduct()}componentDidUpdate(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}render(){const{error:t,loading:r,product:c}=this.state;return Object(s.createElement)(e,o()({},this.props,{error:t,getProduct:this.loadProduct,isLoading:r,product:c}))}},"withProduct");t.a=d},36:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(33);t.a=e=>{let{error:t}=e;return Object(c.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:r}=e;return t?"general"===r?Object(c.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(c.createElement)("br",null),Object(c.createElement)("code",null,Object(n.escapeHTML)(t))):"api"===r?Object(c.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(c.createElement)("br",null),Object(c.createElement)("code",null,Object(n.escapeHTML)(t))):t:Object(o.__)("An error has prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var c=r(6),o=r.n(c),n=r(0),a=r(4),s=r.n(a),i=r(2);function l(e,t,r){const c=new Set(t.map(e=>e[r]));return e.filter(e=>!c.has(e[r]))}var u=r(16),d=r(17);const m=e=>{let{label:t}=e;return Object(n.createElement)("span",{className:"woocommerce-search-list__item-count"},t)},p=e=>{const{item:t,search:r}=e,c=t.breadcrumbs&&t.breadcrumbs.length;return Object(n.createElement)("span",{className:"woocommerce-search-list__item-label"},c?Object(n.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(d.b)(t.breadcrumbs)):null,Object(n.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(d.d)(Object(u.decodeEntities)(t.name),r)))},b=e=>{var t,r;let{countLabel:c,className:a,depth:u=0,controlId:b="",item:g,isSelected:h,isSingle:O,onSelect:w,search:j="",selected:f,useExpandedPanelId:E,...k}=e;const[v,_]=E,y=null!=c&&void 0!==g.count&&null!==g.count,S=!(null===(t=g.breadcrumbs)||void 0===t||!t.length),P=!(null===(r=g.children)||void 0===r||!r.length),x=v===g.id,N=s()(["woocommerce-search-list__item","depth-"+u,a],{"has-breadcrumbs":S,"has-children":P,"has-count":y,"is-expanded":x,"is-radio-button":O}),C=k.name||"search-list-item-"+b,I=`${C}-${g.id}`,B=Object(n.useCallback)(()=>{_(x?-1:Number(g.id))},[x,g.id,_]);return P?Object(n.createElement)("div",{className:N,onClick:B,onKeyDown:e=>"Enter"===e.key||" "===e.key?B():null,role:"treeitem",tabIndex:0},O?Object(n.createElement)(n.Fragment,null,Object(n.createElement)("input",o()({type:"radio",id:I,name:C,value:g.value,onChange:w(g),onClick:e=>e.stopPropagation(),checked:h,className:"woocommerce-search-list__item-input"},k)),Object(n.createElement)(p,{item:g,search:j}),y?Object(n.createElement)(m,{label:c||g.count}):null):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.CheckboxControl,o()({className:"woocommerce-search-list__item-input",checked:h},!h&&g.children.some(e=>f.find(t=>t.id===e.id))?{indeterminate:!0}:{},{label:Object(d.d)(g.name,j),onChange:()=>{h?w(l(f,g.children,"id"))():w(function(e,t,r){const c=l(t,e,"id");return[...e,...c]}(f,g.children))()},onClick:e=>e.stopPropagation()})),y?Object(n.createElement)(m,{label:c||g.count}):null)):Object(n.createElement)("label",{htmlFor:I,className:N},O?Object(n.createElement)("input",o()({type:"radio",id:I,name:C,value:g.value,onChange:w(g),checked:h,className:"woocommerce-search-list__item-input"},k)):Object(n.createElement)("input",o()({type:"checkbox",id:I,name:C,value:g.value,onChange:w(g),checked:h,className:"woocommerce-search-list__item-input"},k)),Object(n.createElement)(p,{item:g,search:j}),y?Object(n.createElement)(m,{label:c||g.count}):null)};t.b=b},38:function(e,t){e.exports=window.wp.deprecated},41:function(e,t){e.exports=window.wc.wcBlocksRegistry},47:function(e,t){e.exports=window.wp.hooks},5:function(e,t){e.exports=window.wp.blockEditor},508:function(e,t,r){e.exports=r(524)},509:function(e,t){},524:function(e,t,r){"use strict";r.r(t);var c=r(8),o=r(0),n=r(74),a=r(608),s=r(556),i=r(157),l=r(82),u=r(172),d=r(57);const m=Object(o.createElement)(n.a,{icon:a.a,className:"wc-block-editor-components-block-icon"}),p=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1,isDescendentOfSingleProductBlock:!0,imageSizing:d.a.SINGLE}]]],["core/column",{},[["core/post-title",{headingLevel:2,isLink:!0,__woocommerceNamespace:l.b}],["woocommerce/product-rating",{isDescendentOfSingleProductBlock:!0}],["woocommerce/product-price",{isDescendentOfSingleProductBlock:!0}],["core/post-excerpt",{__woocommerceNamespace:u.b}],["woocommerce/add-to-cart-form"],["woocommerce/product-meta"]]]]]],b=["core/columns","core/column",...Object.keys(Object(s.a)(i.name))];var g=r(1),h=r(2),O=r(351),w=r(143),j=r(155);const f=Object(o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 230 100"},Object(o.createElement)("path",{fill:"#E1E3E6",d:"M76 0h11v6H76zm0 11h88v11H76zm0 16h28v6H76zm0 17h154v28H76zm0 39h22v17H76zm28 0h44v17h-44zM0 0h66v66H0z",style:{width:"100%"}}));var E=r(5),k=r(81),v=(r(509),r(106)),_=e=>{let{attributes:t,setAttributes:r}=e;return Object(o.createElement)(v.a,{selected:t.productId||0,showVariations:!0,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e[0]?e[0].id:0;r({productId:t})}})},y=e=>{let{isEditing:t,setIsEditing:r}=e;return Object(o.createElement)(E.BlockControls,null,Object(o.createElement)(h.ToolbarGroup,{controls:[{icon:"edit",title:Object(g.__)("Edit selected product","woo-gutenberg-products-block"),onClick:()=>r(!t),isActive:t}]}))},S=r(7),P=r(26);const x=e=>e.map(e=>{let[t,r={},o=[]]=e;const n=o?x(o):[];return Object(c.createBlock)(t,r,n)});var N=r(609),C=e=>{let{isLoading:t,product:r,clientId:c}=e;const n=".wc-block-editor-single-product .wc-block-editor-layout",{replaceInnerBlocks:a}=Object(S.useDispatch)("core/block-editor"),s=Object(o.useCallback)(()=>{a(c,x(p),!1)},[c,a]);return Object(o.createElement)(P.InnerBlockLayoutContextProvider,{parentName:i.name,parentClassName:n},Object(o.createElement)(P.ProductDataContextProvider,{product:r,isLoading:t},Object(o.createElement)(E.InspectorControls,null,Object(o.createElement)(h.PanelBody,{title:Object(g.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(h.Button,{label:Object(g.__)("Reset layout to default","woo-gutenberg-products-block"),onClick:s,isTertiary:!0,className:"wc-block-editor-single-product__reset-layout",icon:N.a},Object(g.__)("Reset layout","woo-gutenberg-products-block")))),Object(o.createElement)("div",{className:n},Object(o.createElement)(E.BlockContextProvider,{value:{postId:null==r?void 0:r.id,postType:"product"}},Object(o.createElement)(E.InnerBlocks,{template:p,allowedBlocks:b,templateLock:!1})))))},I=Object(O.a)(e=>{let{attributes:t,setAttributes:r,error:c,getProduct:n,product:a,isLoading:s,clientId:l}=e;const{productId:u,isPreview:d}=t,[p,b]=Object(o.useState)(!u),O=Object(E.useBlockProps)();return d?f:c?Object(o.createElement)(k.a,{className:"wc-block-editor-single-product-error",error:c,isLoading:s,onRetry:n}):Object(o.createElement)("div",O,Object(o.createElement)(w.a,{header:Object(g.__)("Single Product Block Error","woo-gutenberg-products-block")},Object(o.createElement)(y,{setIsEditing:b,isEditing:p}),p?Object(o.createElement)(h.Placeholder,{icon:m,label:i.title,className:"wc-block-editor-single-product"},i.description,Object(o.createElement)("div",{className:"wc-block-editor-single-product__selection"},Object(o.createElement)(_,{attributes:t,setAttributes:r}),Object(o.createElement)(h.Button,{isSecondary:!0,onClick:()=>{b(!1)}},Object(g.__)("Done","woo-gutenberg-products-block")))):Object(o.createElement)("div",null,Object(o.createElement)(E.InspectorControls,null,Object(o.createElement)(h.PanelBody,{title:Object(g.__)("Product","woo-gutenberg-products-block"),initialOpen:!1},Object(o.createElement)(_,{attributes:t,setAttributes:r}))),Object(o.createElement)(j.a,{productId:u}),Object(o.createElement)(C,{clientId:l,product:a,isLoading:s}))))});Object(c.registerBlockType)(i,{icon:m,edit:I,save:()=>{const e=E.useBlockProps.save();return Object(o.createElement)("div",e,Object(o.createElement)(E.InnerBlocks.Content,null))}})},53:function(e,t){e.exports=window.wc.wcBlocksSharedHocs},55:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));const c=(e,t)=>e.reduce((e,r)=>(e[String(t?r[t]:r)]=r,e),{})},556:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(41),o=r(0),n=r(18);r.p=n.m,Object(c.registerBlockComponent)({blockName:"woocommerce/product-price",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(30)]).then(r.bind(null,230)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-image",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(27)]).then(r.bind(null,614)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-title",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(41)]).then(r.bind(null,615)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-rating",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(32)]).then(r.bind(null,231)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-button",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(23)]).then(r.bind(null,232)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-summary",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(38)]).then(r.bind(null,346)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(34)]).then(r.bind(null,152)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-sku",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(36)]).then(r.bind(null,347)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(37)]).then(r.bind(null,348)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(3),r.e(21)]).then(r.bind(null,616)))});const a=e=>Object(c.getRegisteredBlockComponents)(e)},57:function(e,t,r){"use strict";let c;r.d(t,"a",(function(){return c})),function(e){e.SINGLE="single",e.THUMBNAIL="thumbnail"}(c||(c={}))},62:function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l}));var c=r(0),o=r(1),n=r(74),a=r(162);const s=Object(o.__)("Product Title","woo-gutenberg-products-block"),i=Object(c.createElement)(n.a,{icon:a.a,className:"wc-block-editor-components-block-icon"}),l=Object(o.__)("Display the title of a product.","woo-gutenberg-products-block")},67:function(e,t){e.exports=window.wp.autop},68:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),a=r(2),s=r(37),i=r(4),l=r.n(i);t.a=e=>{let{className:t,item:r,isSelected:c,isLoading:i,onSelect:u,disabled:d,...m}=e;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,o()({},m,{key:r.id,className:t,isSelected:c,item:r,onSelect:u,disabled:d})),c&&i&&Object(n.createElement)("div",{key:"loading",className:l()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(n.createElement)(a.Spinner,null)))}},7:function(e,t){e.exports=window.wp.data},71:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var c=r(8);function o(e,t){let{blockDescription:r,blockIcon:o,blockTitle:n,variationName:a}=t;Object(c.registerBlockVariation)(e,{description:r,name:a,title:n,isActive:e=>e.__woocommerceNamespace===a,icon:{src:o},attributes:{__woocommerceNamespace:a},scope:["block","inserter"]})}},75:function(e,t){e.exports=window.wp.dom},79:function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l}));var c=r(0),o=r(1),n=r(74),a=r(192);const s=Object(o.__)("Product Summary","woo-gutenberg-products-block"),i=Object(c.createElement)(n.a,{icon:a.a,className:"wc-block-editor-components-block-icon"}),l=Object(o.__)("Display a short description about a product.","woo-gutenberg-products-block")},8:function(e,t){e.exports=window.wp.blocks},81:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(74),a=r(208),s=r(4),i=r.n(s),l=r(2),u=r(36);r(127),t.a=e=>{let{className:t,error:r,isLoading:s=!1,onRetry:d}=e;return Object(c.createElement)(l.Placeholder,{icon:Object(c.createElement)(n.a,{icon:a.a}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:i()("wc-block-api-error",t)},Object(c.createElement)(u.a,{error:r}),d&&Object(c.createElement)(c.Fragment,null,s?Object(c.createElement)(l.Spinner,null):Object(c.createElement)(l.Button,{isSecondary:!0,onClick:d},Object(o.__)("Retry","woo-gutenberg-products-block"))))}},82:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var c=r(0),o=r(2),n=r(62),a=r(162),s=r(71);const i="core/post-title",l="woocommerce/product-query/product-title";Object(s.a)(i,{blockDescription:n.a,blockIcon:Object(c.createElement)(o.Icon,{icon:a.a}),blockTitle:n.c,variationName:l})},9:function(e,t){e.exports=window.wc.wcBlocksData},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var c=r(6),o=r.n(c),n=r(0),a=r(1),s=r(2),i=r(74),l=r(573),u=r(4),d=r.n(u),m=r(11),p=r(17),b=r(37),g=r(572),h=r(16);const O=e=>{let{id:t,label:r,popoverContents:c,remove:o,screenReaderLabel:l,className:u=""}=e;const[p,b]=Object(n.useState)(!1),w=Object(m.useInstanceId)(O);if(l=l||r,!r)return null;r=Object(h.decodeEntities)(r);const j=d()("woocommerce-tag",u,{"has-remove":!!o}),f="woocommerce-tag__label-"+w,E=Object(n.createElement)(n.Fragment,null,Object(n.createElement)("span",{className:"screen-reader-text"},l),Object(n.createElement)("span",{"aria-hidden":"true"},r));return Object(n.createElement)("span",{className:j},c?Object(n.createElement)(s.Button,{className:"woocommerce-tag__text",id:f,onClick:()=>b(!0)},E):Object(n.createElement)("span",{className:"woocommerce-tag__text",id:f},E),c&&p&&Object(n.createElement)(s.Popover,{onClose:()=>b(!1)},c),o&&Object(n.createElement)(s.Button,{className:"woocommerce-tag__remove",onClick:o(t),label:Object(a.sprintf)(// Translators: %s label.
Object(a.__)("Remove %s","woo-gutenberg-products-block"),r),"aria-describedby":f},Object(n.createElement)(i.a,{icon:g.a,size:20,className:"clear-icon"})))};var w=O;const j=e=>Object(n.createElement)(b.b,e),f=e=>{const{list:t,selected:r,renderItem:c,depth:a=0,onSelect:s,instanceId:i,isSingle:l,search:u,useExpandedPanelId:d}=e,[m]=d;return t?Object(n.createElement)(n.Fragment,null,t.map(t=>{var p,b;const g=null!==(p=t.children)&&void 0!==p&&p.length&&!l?t.children.every(e=>{let{id:t}=e;return r.find(e=>e.id===t)}):!!r.find(e=>{let{id:r}=e;return r===t.id}),h=(null===(b=t.children)||void 0===b?void 0:b.length)&&m===t.id;return Object(n.createElement)(n.Fragment,{key:t.id},Object(n.createElement)("li",null,c({item:t,isSelected:g,onSelect:s,isSingle:l,selected:r,search:u,depth:a,useExpandedPanelId:d,controlId:i})),h?Object(n.createElement)(f,o()({},e,{list:t.children,depth:a+1})):null)})):null},E=e=>{let{isLoading:t,isSingle:r,selected:c,messages:o,onChange:i,onRemove:l}=e;if(t||r||!c)return null;const u=c.length;return Object(n.createElement)("div",{className:"woocommerce-search-list__selected"},Object(n.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(n.createElement)("strong",null,o.selected(u)),u>0?Object(n.createElement)(s.Button,{isLink:!0,isDestructive:!0,onClick:()=>i([]),"aria-label":o.clear},Object(a.__)("Clear all","woo-gutenberg-products-block")):null),u>0?Object(n.createElement)("ul",null,c.map((e,t)=>Object(n.createElement)("li",{key:t},Object(n.createElement)(w,{label:e.name,id:e.id,remove:l})))):null)},k=e=>{let{filteredList:t,search:r,onSelect:c,instanceId:o,useExpandedPanelId:s,...u}=e;const{messages:d,renderItem:m,selected:p,isSingle:b}=u,g=m||j;return 0===t.length?Object(n.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(n.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(n.createElement)(i.a,{icon:l.a})),Object(n.createElement)("span",{className:"woocommerce-search-list__not-found-text"},r?Object(a.sprintf)(d.noResults,r):d.noItems)):Object(n.createElement)("ul",{className:"woocommerce-search-list__list"},Object(n.createElement)(f,{useExpandedPanelId:s,list:t,selected:p,renderItem:g,onSelect:c,instanceId:o,isSingle:b,search:r}))},v=e=>{const{className:t="",isCompact:r,isHierarchical:c,isLoading:i,isSingle:l,list:u,messages:b=p.a,onChange:g,onSearch:h,selected:O,type:w="text",debouncedSpeak:j}=e,[f,_]=Object(n.useState)(""),y=Object(n.useState)(-1),S=Object(m.useInstanceId)(v),P=Object(n.useMemo)(()=>({...p.a,...b}),[b]),x=Object(n.useMemo)(()=>Object(p.c)(u,f,c),[u,f,c]);Object(n.useEffect)(()=>{j&&j(P.updated)},[j,P]),Object(n.useEffect)(()=>{"function"==typeof h&&h(f)},[f,h]);const N=Object(n.useCallback)(e=>()=>{l&&g([]);const t=O.findIndex(t=>{let{id:r}=t;return r===e});g([...O.slice(0,t),...O.slice(t+1)])},[l,O,g]),C=Object(n.useCallback)(e=>()=>{Array.isArray(e)?g(e):-1===O.findIndex(t=>{let{id:r}=t;return r===e.id})?g(l?[e]:[...O,e]):N(e.id)()},[l,N,g,O]),I=Object(n.useCallback)(e=>{const[t]=O.filter(t=>!e.find(e=>t.id===e.id));N(t.id)()},[N,O]);return Object(n.createElement)("div",{className:d()("woocommerce-search-list",t,{"is-compact":r,"is-loading":i,"is-token":"token"===w})},"text"===w&&Object(n.createElement)(E,o()({},e,{onRemove:N,messages:P})),Object(n.createElement)("div",{className:"woocommerce-search-list__search"},"text"===w?Object(n.createElement)(s.TextControl,{label:P.search,type:"search",value:f,onChange:e=>_(e)}):Object(n.createElement)(s.FormTokenField,{disabled:i,label:P.search,onChange:I,onInputChange:e=>_(e),suggestions:[],__experimentalValidateInput:()=>!1,value:i?[Object(a.__)("Loading…","woo-gutenberg-products-block")]:O.map(e=>({...e,value:e.name})),__experimentalShowHowTo:!1})),i?Object(n.createElement)("div",{className:"woocommerce-search-list__list"},Object(n.createElement)(s.Spinner,null)):Object(n.createElement)(k,o()({},e,{search:f,filteredList:x,messages:P,onSelect:C,instanceId:S,useExpandedPanelId:y})))};Object(s.withSpokenMessages)(v)}});