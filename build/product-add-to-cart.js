(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[22],{102:function(e,t,r){"use strict";var c=r(0);r(177),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},105:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var c=r(9);let s;!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(s||(s={}));const n={addEventCallback:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(c.uniqueId)(),type:s.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}},removeEventCallback:(e,t)=>({id:t,type:s.REMOVE_EVENT_CALLBACK,eventType:e})},o={},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,{type:t,eventType:r,id:c,callback:n,priority:a}=arguments.length>1?arguments[1]:void 0;const i=e.hasOwnProperty(r)?new Map(e[r]):new Map;switch(t){case s.ADD_EVENT_CALLBACK:return i.set(c,{priority:a,callback:n}),{...e,[r]:i};case s.REMOVE_EVENT_CALLBACK:return i.delete(c),{...e,[r]:i}}}},176:function(e,t){},177:function(e,t){},224:function(e,t,r){"use strict";var c=r(0),s=r(4),n=r.n(s),o=r(1),a=r(45),i=r(362),u=r(7),l=r(10);const d={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},b={status:d.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},p={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:E,SET_IDLE:m,SET_DISABLED:_,SET_PROCESSING:O,SET_BEFORE_PROCESSING:h,SET_AFTER_PROCESSING:f,SET_PROCESSING_RESPONSE:S,SET_HAS_ERROR:g,SET_NO_ERROR:v,SET_QUANTITY:j,SET_REQUEST_PARAMS:C}=p,y=()=>({type:m}),R=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=e?g:v;return{type:t}},{SET_PRISTINE:T,SET_IDLE:w,SET_DISABLED:A,SET_PROCESSING:P,SET_BEFORE_PROCESSING:I,SET_AFTER_PROCESSING:k,SET_PROCESSING_RESPONSE:N,SET_HAS_ERROR:D,SET_NO_ERROR:L,SET_QUANTITY:x,SET_REQUEST_PARAMS:B}=p,{PRISTINE:F,IDLE:M,DISABLED:q,PROCESSING:Y,BEFORE_PROCESSING:G,AFTER_PROCESSING:V}=d,Q=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,{quantity:r,type:c,data:s}=arguments.length>1?arguments[1]:void 0;switch(c){case T:e=b;break;case w:e=t.status!==M?{...t,status:M}:t;break;case A:e=t.status!==q?{...t,status:q}:t;break;case x:e=r!==t.quantity?{...t,quantity:r}:t;break;case B:e={...t,requestParams:{...t.requestParams,...s}};break;case N:e={...t,processingResponse:s};break;case P:e=t.status!==Y?{...t,status:Y,hasError:!1}:t,e=!1===e.hasError?e:{...e,hasError:!1};break;case I:e=t.status!==G?{...t,status:G,hasError:!1}:t;break;case k:e=t.status!==V?{...t,status:V}:t;break;case D:e=t.hasError?t:{...t,hasError:!0},e=t.status===Y||t.status===G?{...e,status:M}:e;break;case L:e=t.hasError?{...t,hasError:!1}:t}return e!==t&&c!==T&&e.status===F&&(e.status=M),e};var H=r(105),K=r(271);const W=e=>({onAddToCartAfterProcessingWithSuccess:Object(K.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(K.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(K.a)("add_to_cart_before_processing",e)});var U=r(332),X=r(61);const J=Object(c.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),z=()=>Object(c.useContext)(J),Z=e=>{var t,r,s,n;let{children:p,product:m,showFormElements:g}=e;const[v,T]=Object(c.useReducer)(Q,b),[w,A]=Object(c.useReducer)(H.b,{}),P=Object(a.a)(w),{createErrorNotice:I}=Object(u.useDispatch)("core/notices"),{setValidationErrors:k}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),N=Object(c.useMemo)(()=>({onAddToCartAfterProcessingWithSuccess:W(A).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:W(A).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:W(A).onAddToCartBeforeProcessing}),[A]),D=Object(c.useMemo)(()=>({resetForm:()=>{T({type:E})},submitForm:()=>{T({type:h})},setQuantity:e=>{T((e=>({type:j,quantity:e}))(e))},setHasError:e=>{T(R(e))},setRequestParams:e=>{T((e=>({type:C,data:e}))(e))},setAfterProcessing:e=>{T({type:S,data:e}),T({type:f})}}),[]);Object(c.useEffect)(()=>{const e=v.status,t=!m.id||!Object(i.a)(m);e!==d.DISABLED||t?e!==d.DISABLED&&t&&T({type:_}):T(y())},[v.status,m,T]),Object(c.useEffect)(()=>{v.status===d.BEFORE_PROCESSING&&(((e,t)=>{const r=Object(u.select)("core/notices").getNotices("wc/add-to-cart"),{removeNotice:c}=Object(u.dispatch)("core/notices");r.filter(e=>"error"===e.status).forEach(e=>c(e.id,"wc/add-to-cart"))})(),Object(U.a)(P,"add_to_cart_before_processing",{}).then(e=>{!0!==e?(Array.isArray(e)&&e.forEach(e=>{let{errorMessage:t,validationErrors:r}=e;t&&I(t,{context:"wc/add-to-cart"}),r&&k(r)}),T(y())):T({type:O})}))},[v.status,k,I,T,P,null==m?void 0:m.id]),Object(c.useEffect)(()=>{if(v.status===d.AFTER_PROCESSING){const e={processingResponse:v.processingResponse},t=e=>{let t=!1;return e.forEach(e=>{const{message:r,messageContext:c}=e;(Object(X.b)(e)||Object(X.c)(e))&&r&&(t=!0,I(r,c?{context:c}:void 0))}),t};if(v.hasError)return void Object(U.b)(P,"add_to_cart_after_processing_with_error",e).then(r=>{if(!t(r)){var c;const t=(null===(c=e.processingResponse)||void 0===c?void 0:c.message)||Object(o.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block");I(t,{id:"add-to-cart",context:"woocommerce/single-product/"+((null==m?void 0:m.id)||0)})}T(y())});Object(U.b)(P,"add_to_cart_after_processing_with_success",e).then(e=>{t(e)?T(R(!0)):T(y())})}},[v.status,v.hasError,v.processingResponse,D,I,P,null==m?void 0:m.id]);const L=Object(i.b)(m),x={product:m,productType:m.type||"simple",productIsPurchasable:Object(i.a)(m),productHasOptions:m.has_options||!1,supportsFormElements:L,showFormElements:g&&L,quantity:v.quantity||(null==m||null===(t=m.add_to_cart)||void 0===t?void 0:t.minimum)||1,minQuantity:(null==m||null===(r=m.add_to_cart)||void 0===r?void 0:r.minimum)||1,maxQuantity:(null==m||null===(s=m.add_to_cart)||void 0===s?void 0:s.maximum)||99,multipleOf:(null==m||null===(n=m.add_to_cart)||void 0===n?void 0:n.multiple_of)||1,requestParams:v.requestParams,isIdle:v.status===d.IDLE,isDisabled:v.status===d.DISABLED,isProcessing:v.status===d.PROCESSING,isBeforeProcessing:v.status===d.BEFORE_PROCESSING,isAfterProcessing:v.status===d.AFTER_PROCESSING,hasError:v.hasError,eventRegistration:N,dispatchActions:D};return Object(c.createElement)(J.Provider,{value:x},p)};var $=r(16),ee=r.n($),te=r(15),re=r(262),ce=r(46),se=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:s,hasError:n,isProcessing:a,requestParams:i}=z(),{showAllValidationErrors:d}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),b=Object(u.useSelect)(e=>e(l.VALIDATION_STORE_KEY).hasValidationErrors),{createErrorNotice:p,removeNotice:E}=Object(u.useDispatch)("core/notices"),{receiveCart:m}=Object(ce.a)(),[_,O]=Object(c.useState)(!1),h=!n&&a,f=Object(c.useCallback)(()=>!b()||(d(),{type:"error"}),[b,d]);Object(c.useEffect)(()=>{const e=s.onAddToCartBeforeProcessing(f,0);return()=>{e()}},[s,f]);const S=Object(c.useCallback)(()=>{O(!0),E("add-to-cart","woocommerce/single-product/"+((null==t?void 0:t.id)||0));const c={id:t.id||0,quantity:r,...i};ee()({path:"/wc/store/v1/cart/add-item",method:"POST",data:c,cache:"no-store",parse:!1}).then(r=>{ee.a.setNonce(r.headers),r.json().then((function(c){r.ok?m(c):(c.body&&c.body.message?p(Object(te.decodeEntities)(c.body.message),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}):p(Object(o.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block"),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}),e.setHasError()),Object(re.b)({preserveCartData:!0}),e.setAfterProcessing(c),O(!1)}))}).catch(t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&m(t.data.cart),e.setHasError(),e.setAfterProcessing(t),O(!1)}))})},[t,p,E,m,e,r,i]);return Object(c.useEffect)(()=>{h&&!_&&S()},[h,S,_]),null};const ne=e=>{let{children:t,product:r,showFormElements:s}=e;return Object(c.createElement)(Z,{product:r,showFormElements:s},t,Object(c.createElement)(se,null))};var oe=r(25),ae=r(9),ie=r(50),ue=(r(247),r(57)),le=r(72),de=r(557),be=r(88),pe=r(274);const Ee=e=>{let{className:t,href:r,text:s,onClick:n}=e;return Object(c.createElement)(ue.a,{className:t,href:r,onClick:n,rel:"nofollow"},s)},me=e=>{let{className:t,quantityInCart:r,isProcessing:s,isDisabled:n,isDone:a,onClick:i}=e;return Object(c.createElement)(ue.a,{className:t,disabled:n,showSpinner:s,onClick:i},a&&r>0?Object(o.sprintf)(
/* translators: %s number of products in cart. */
Object(o._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(o.__)("Add to cart","woo-gutenberg-products-block"),!!a&&Object(c.createElement)(le.a,{icon:de.a}))};var _e=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:s,productType:n,isDisabled:a,isProcessing:i,eventRegistration:u,hasError:l,dispatchActions:d}=z(),{parentName:b}=Object(oe.useInnerBlockLayoutContext)(),{dispatchStoreEvent:p}=Object(be.a)(),{cartQuantity:E}=Object(pe.a)(s.id||0),[m,_]=Object(c.useState)(!1),O=s.add_to_cart||{url:"",text:""};return Object(c.useEffect)(()=>{const e=u.onAddToCartAfterProcessingWithSuccess(()=>(l||_(!0),!0),0);return()=>{e()}},[u,l]),(e||!r&&"simple"===n)&&t?Object(c.createElement)(me,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:E,isDisabled:a,isProcessing:i,isDone:m,onClick:()=>{d.submitForm("woocommerce/single-product/"+((null==s?void 0:s.id)||0)),p("cart-add-item",{product:s,listName:b})}}):Object(c.createElement)(Ee,{className:"wc-block-components-product-add-to-cart-button",href:O.url,text:O.text||Object(o.__)("View Product","woo-gutenberg-products-block"),onClick:()=>{p("product-view-link",{product:s,listName:b})}})},Oe=r(122),he=e=>{let{disabled:t,min:r,max:s,step:n=1,value:o,onChange:a}=e;const i=void 0!==s,u=Object(Oe.a)(e=>{let t=e;i&&(t=Math.min(t,Math.floor(s/n)*n)),t=Math.max(t,Math.ceil(r/n)*n),t=Math.floor(t/n)*n,t!==e&&(null==a||a(t))},300);return Object(c.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:o,min:r,max:s,step:n,hidden:1===s,disabled:t,onChange:e=>{null==a||a(e.target.value),u(Number(e.target.value))}})},fe=e=>{let{reason:t=Object(o.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block")}=e;return Object(c.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},t)},Se=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:s,multipleOf:n,dispatchActions:a,isDisabled:i}=z();return e.id&&!e.is_purchasable?Object(c.createElement)(fe,null):e.id&&!e.is_in_stock?Object(c.createElement)(fe,{reason:Object(o.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(he,{value:t,min:r,max:s,step:n,disabled:i,onChange:a.setQuantity}),Object(c.createElement)(_e,null))},ge=(r(270),r(586)),ve=r(13);const je={value:"",label:Object(o.__)("Select an option","woo-gutenberg-products-block")};var Ce=e=>{let{attributeName:t,options:r=[],value:s="",onChange:a=(()=>{}),errorMessage:i=Object(o.__)("Please select a value.","woo-gutenberg-products-block")}=e;const d=t,{setValidationErrors:b,clearValidationError:p}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),{error:E}=Object(u.useSelect)(e=>({error:e(l.VALIDATION_STORE_KEY).getValidationError(d)||{}}));return Object(c.useEffect)(()=>{s?p(d):b({[d]:{message:i,hidden:!0}})},[s,d,i,p,b]),Object(c.useEffect)(()=>()=>{p(d)},[d,p]),Object(c.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(c.createElement)(ge.a,{label:Object(te.decodeEntities)(t),value:s||"",options:[je,...r],onChange:a,required:!0,className:n()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":(null==E?void 0:E.message)&&!(null!=E&&E.hidden)})}),Object(c.createElement)(ve.ValidationInputError,{propertyName:d,elementId:d}))},ye=r(20);const Re=(e,t,r)=>{const c=Object.values(t).map(e=>{let{id:t}=e;return t});if(Object.values(r).every(e=>""===e))return c;const s=Object.keys(e);return c.filter(e=>s.every(c=>{const s=r[c]||"",n=t["id:"+e].attributes[c];return""===s||null===n||n===s}))};var Te=e=>{let{attributes:t,variationAttributes:r,setRequestParams:s}=e;const n=Object(a.a)(t),o=Object(a.a)(r),[i,u]=Object(c.useState)(0),[l,d]=Object(c.useState)({}),[b,p]=Object(c.useState)(!1),E=Object(c.useMemo)(()=>((e,t,r)=>{const c={},s=Object.keys(e),n=Object.values(r).filter(Boolean).length>0;return s.forEach(s=>{const o=e[s],a={...r,[s]:null},i=n?Re(e,t,a):null,u=null!==i?i.map(e=>t["id:"+e].attributes[s]):null;c[s]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map(e=>{let{name:r,slug:c}=e;return null===t||t.includes(null)||t.includes(c)?{value:c,label:Object(te.decodeEntities)(r)}:null}).filter(Boolean)}(o.terms,u)}),c})(n,o,l),[l,n,o]);return Object(c.useEffect)(()=>{if(!b){const e=(e=>Object(ye.b)(e)?0===Object.keys(e).length?{}:Object.values(e).reduce((e,t)=>{const r=t.terms.filter(e=>e.default);var c;return r.length>0&&(e[t.name]=null===(c=r[0])||void 0===c?void 0:c.slug),e},{}):{})(t);e&&d({...e}),p(!0)}},[l,t,b]),Object(c.useEffect)(()=>{Object.values(l).filter(e=>""!==e).length===Object.keys(n).length?u(((e,t,r)=>Re(e,t,r)[0]||0)(n,o,l)):i>0&&u(0)},[l,i,n,o]),Object(c.useEffect)(()=>{s({id:i,variation:Object.keys(l).map(e=>({attribute:e,value:l[e]}))})},[s,i,l]),Object(c.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(n).map(e=>Object(c.createElement)(Ce,{key:e,attributeName:e,options:E[e].filter(Boolean),value:l[e],onChange:t=>{d({...l,[e]:t})}})))},we=e=>{let{dispatchers:t,product:r}=e;const s=(e=>e?Object(ae.keyBy)(Object.values(e).filter(e=>{let{has_variations:t}=e;return t}),"name"):{})(r.attributes),n=(e=>{if(!e)return{};const t={};return e.forEach(e=>{let{id:r,attributes:c}=e;t["id:"+r]={id:r,attributes:c.reduce((e,t)=>{let{name:r,value:c}=t;return e[r]=c,e},{})}}),t})(r.variations);return 0===Object.keys(s).length||0===Object.keys(n).length?null:Object(c.createElement)(Te,{attributes:s,variationAttributes:n,setRequestParams:t.setRequestParams})},Ae=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:s,multipleOf:n,dispatchActions:a,isDisabled:i}=z();return e.id&&!e.is_purchasable?Object(c.createElement)(fe,null):e.id&&!e.is_in_stock?Object(c.createElement)(fe,{reason:Object(o.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(we,{product:e,dispatchers:a}),Object(c.createElement)(he,{value:t,min:r,max:s,step:n,disabled:i,onChange:a.setQuantity}),Object(c.createElement)(_e,null))},Pe=()=>Object(c.createElement)(_e,null),Ie=()=>Object(c.createElement)("p",null,"This is a placeholder for the grouped products form element.");const ke=()=>{const{showFormElements:e,productType:t}=z();return e?"variable"===t?Object(c.createElement)(Ae,null):"grouped"===t?Object(c.createElement)(Ie,null):"external"===t?Object(c.createElement)(Pe,null):"simple"===t||"variation"===t?Object(c.createElement)(Se,null):null:Object(c.createElement)(_e,null)};t.a=Object(ie.withProductDataContext)(e=>{let{className:t,showFormElements:r}=e;const{product:s}=Object(oe.useProductDataContext)(),o=n()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(ae.isEmpty)(s)});return Object(c.createElement)(ne,{product:s,showFormElements:r},Object(c.createElement)("div",{className:o},Object(c.createElement)(ke,null)))})},247:function(e,t){},262:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));const c=window.CustomEvent||null,s=(e,t)=>{let{bubbles:r=!1,cancelable:s=!1,element:n,detail:o={}}=t;if(!c)return;n||(n=document.body);const a=new c(e,{bubbles:r,cancelable:s,detail:o});n.dispatchEvent(a)},n=e=>{let{preserveCartData:t=!1}=e;s("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:t}})},o=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const n=()=>{s(t,{bubbles:r,cancelable:c})};return jQuery(document).on(e,n),()=>jQuery(document).off(e,n)}},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i}));var c=r(98),s=(r(17),r(3)),n=r(15);const o=e=>{const t=Object.keys(s.defaultAddressFields),r=Object(c.a)(t,{},e.country),n=Object.assign({},e);return r.forEach(t=>{let{key:r="",hidden:c=!1}=t;c&&((e,t)=>e in t)(r,e)&&(n[r]="")}),n},a=e=>{if(0===Object.values(e).length)return null;const t=Object(s.getSetting)("shippingCountries",{}),r=Object(s.getSetting)("shippingStates",{}),c="string"==typeof t[e.country]?Object(n.decodeEntities)(t[e.country]):"",o="object"==typeof r[e.country]&&"string"==typeof r[e.country][e.state]?Object(n.decodeEntities)(r[e.country][e.state]):e.state,a=[];a.push(e.postcode.toUpperCase()),a.push(e.city),a.push(o),a.push(c);return a.filter(Boolean).join(", ")||null},i=e=>!!e.city&&!!e.country},270:function(e,t){},271:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var c=r(105);const s=(e,t)=>function(r){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const n=c.a.addEventCallback(e,r,s);return t(n),()=>{t(c.a.removeEventCallback(e,n.id))}}},274:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var c=r(0),s=r(7),n=r(10),o=r(15),a=r(46);const i=(e,t)=>{const r=e.find(e=>{let{id:r}=e;return r===t});return r?r.quantity:0},u=e=>{const{addItemToCart:t}=Object(s.useDispatch)(n.CART_STORE_KEY),{cartItems:r,cartIsLoading:u}=Object(a.a)(),{createErrorNotice:l,removeNotice:d}=Object(s.useDispatch)("core/notices"),[b,p]=Object(c.useState)(!1),E=Object(c.useRef)(i(r,e));return Object(c.useEffect)(()=>{const t=i(r,e);t!==E.current&&(E.current=t)},[r,e]),{cartQuantity:Number.isFinite(E.current)?E.current:0,addingToCart:b,cartIsLoading:u,addToCart:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p(!0),t(e,r).then(()=>{d("add-to-cart")}).catch(e=>{l(Object(o.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{p(!1)})}}}},331:function(e,t,r){"use strict";t.a={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}}},332:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var c=r(61),s=r(20);const n=e=>Object(s.b)(e)&&Object(s.c)(e,"type"),o=async(e,t,r)=>{const s=Object(c.a)(e,t),n=[];for(const e of s)try{const t=await Promise.resolve(e.callback(r));"object"==typeof t&&n.push(t)}catch(e){console.error(e)}return!n.length||n},a=async(e,t,r)=>{const s=[],o=Object(c.a)(e,t);for(const e of o)try{const t=await Promise.resolve(e.callback(r));if(!n(t))continue;if(!t.hasOwnProperty("type"))throw new Error("Returned objects from event emitter observers must return an object with a type property");if(Object(c.b)(t)||Object(c.c)(t))return s.push(t),s;s.push(t)}catch(e){return console.error(e),s.push({type:c.e.ERROR}),s}return s}},362:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s}));const c=e=>e.is_purchasable||!1,s=e=>["simple","variable"].includes(e.type||"simple")},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var c=r(0),s=r(26),n=r.n(s);function o(e){const t=Object(c.useRef)(e);return n()(e,t.current)||(t.current=e),t.current}},46:function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var c=r(9),s=r(0),n=r(10),o=r(7),a=r(15),i=r(263),u=r(87);var l=r(262);const d=e=>{const t=null==e?void 0:e.detail;t&&t.preserveCartData||Object(o.dispatch)(n.CART_STORE_KEY).invalidateResolutionForStore()},b=e=>{(null!=e&&e.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&Object(o.dispatch)(n.CART_STORE_KEY).invalidateResolutionForStore()},p=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},E=()=>{Object(s.useEffect)(()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(e=window.wcBlocksStoreCartListeners)||void 0===e?void 0:e.count)>0)return void window.wcBlocksStoreCartListeners.count++;var e;document.body.addEventListener("wc-blocks_added_to_cart",d),document.body.addEventListener("wc-blocks_removed_from_cart",d),window.addEventListener("pageshow",b);const t=Object(l.a)("added_to_cart","wc-blocks_added_to_cart"),r=Object(l.a)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",d),document.body.removeEventListener("wc-blocks_removed_from_cart",d),window.removeEventListener("pageshow",b),t(),r()}})(),p),[])},m={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},_={...m,email:""},O={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:n.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},h=e=>Object.fromEntries(Object.entries(e).map(e=>{let[t,r]=e;return[t,Object(a.decodeEntities)(r)]})),f={cartCoupons:n.EMPTY_CART_COUPONS,cartItems:n.EMPTY_CART_ITEMS,cartFees:n.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:n.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:n.EMPTY_CART_ITEM_ERRORS,cartTotals:O,cartIsLoading:!0,cartErrors:n.EMPTY_CART_ERRORS,billingAddress:_,shippingAddress:m,shippingRates:n.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentMethods:n.EMPTY_PAYMENT_METHODS,paymentRequirements:n.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:n.EMPTY_EXTENSIONS},S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0};const{isEditor:t,previewData:r}=Object(u.b)(),a=null==r?void 0:r.previewCart,{shouldSelect:l}=e,d=Object(s.useRef)();E();const b=Object(o.useSelect)((e,r)=>{let{dispatch:c}=r;if(!l)return f;if(t)return{cartCoupons:a.coupons,cartItems:a.items,crossSellsProducts:a.cross_sells,cartFees:a.fees,cartItemsCount:a.items_count,cartItemsWeight:a.items_weight,cartNeedsPayment:a.needs_payment,cartNeedsShipping:a.needs_shipping,cartItemErrors:n.EMPTY_CART_ITEM_ERRORS,cartTotals:a.totals,cartIsLoading:!1,cartErrors:n.EMPTY_CART_ERRORS,billingData:_,billingAddress:_,shippingAddress:m,extensions:n.EMPTY_EXTENSIONS,shippingRates:a.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:a.has_calculated_shipping,paymentRequirements:a.paymentRequirements,receiveCart:"function"==typeof(null==a?void 0:a.receiveCart)?a.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==a?void 0:a.receiveCartContents)?a.receiveCartContents:()=>{}};const s=e(n.CART_STORE_KEY),o=s.getCartData(),u=s.getCartErrors(),d=s.getCartTotals(),b=!s.hasFinishedResolution("getCartData"),p=s.isCustomerDataUpdating(),{receiveCart:E,receiveCartContents:O}=c(n.CART_STORE_KEY),S=h(o.billingAddress),g=o.needsShipping?h(o.shippingAddress):S,v=o.fees.length>0?o.fees.map(e=>h(e)):n.EMPTY_CART_FEES;return{cartCoupons:o.coupons.length>0?o.coupons.map(e=>({...e,label:e.code})):n.EMPTY_CART_COUPONS,cartItems:o.items,crossSellsProducts:o.crossSells,cartFees:v,cartItemsCount:o.itemsCount,cartItemsWeight:o.itemsWeight,cartNeedsPayment:o.needsPayment,cartNeedsShipping:o.needsShipping,cartItemErrors:o.errors,cartTotals:d,cartIsLoading:b,cartErrors:u,billingData:Object(i.a)(S),billingAddress:Object(i.a)(S),shippingAddress:Object(i.a)(g),extensions:o.extensions,shippingRates:o.shippingRates,isLoadingRates:p,cartHasCalculatedShipping:o.hasCalculatedShipping,paymentRequirements:o.paymentRequirements,receiveCart:E,receiveCartContents:O}},[l]);return d.current&&Object(c.isEqual)(d.current,b)||(d.current=b),d.current}},57:function(e,t,r){"use strict";var c=r(6),s=r.n(c),n=r(0),o=r(172),a=r(4),i=r.n(a),u=r(102);r(176),t.a=e=>{let{className:t,showSpinner:r=!1,children:c,variant:a="contained",...l}=e;const d=i()("wc-block-components-button","wp-element-button",t,a,{"wc-block-components-button--loading":r});return Object(n.createElement)(o.a,s()({className:d},l),r&&Object(n.createElement)(u.a,null),Object(n.createElement)("span",{className:"wc-block-components-button__text"},c))}},591:function(e,t,r){"use strict";r.r(t);var c=r(50),s=r(224),n=r(331);t.default=Object(c.withFilteredAttributes)(n.a)(s.a)},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u}));var c=r(20);const s=(e,t)=>e[t]?Array.from(e[t].values()).sort((e,t)=>e.priority-t.priority):[];let n,o;!function(e){e.SUCCESS="success",e.FAIL="failure",e.ERROR="error"}(n||(n={})),function(e){e.CART="wc/cart",e.CHECKOUT="wc/checkout",e.PAYMENTS="wc/checkout/payments",e.EXPRESS_PAYMENTS="wc/checkout/express-payments",e.CONTACT_INFORMATION="wc/checkout/contact-information",e.SHIPPING_ADDRESS="wc/checkout/shipping-address",e.BILLING_ADDRESS="wc/checkout/billing-address",e.SHIPPING_METHODS="wc/checkout/shipping-methods",e.CHECKOUT_ACTIONS="wc/checkout/checkout-actions"}(o||(o={}));const a=(e,t)=>Object(c.b)(e)&&"type"in e&&e.type===t,i=e=>a(e,n.ERROR),u=e=>a(e,n.FAIL)},87:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var c=r(0),s=r(7);const n=Object(c.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),o=()=>Object(c.useContext)(n),a=e=>{let{children:t,currentPostId:r=0,previewData:o={},currentView:a="",isPreview:i=!1}=e;const u=Object(s.useSelect)(e=>r||e("core/editor").getCurrentPostId(),[r]),l=Object(c.useCallback)(e=>o&&e in o?o[e]:{},[o]),d={isEditor:!0,currentPostId:u,currentView:a,previewData:o,getPreviewData:l,isPreview:i};return Object(c.createElement)(n.Provider,{value:d},t)}},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var c=r(47),s=r(0),n=r(46);const o=()=>{const e=Object(n.a)(),t=Object(s.useRef)(e);return Object(s.useEffect)(()=>{t.current=e},[e]),{dispatchStoreEvent:Object(s.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(c.doAction)("experimental__woocommerce_blocks-"+e,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:Object(s.useCallback)((function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(c.doAction)("experimental__woocommerce_blocks-checkout-"+e,{...r,storeCart:t.current})}catch(e){console.error(e)}}),[])}}},98:function(e,t,r){"use strict";var c=r(3),s=r(1),n=r(152),o=r(67);const a=Object(c.getSetting)("countryLocale",{}),i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=Object(s.sprintf)(
/* translators: %s Field label. */
Object(s.__)("%s (optional)","woo-gutenberg-products-block"),e.label)),e.priority&&(Object(n.a)(e.priority)&&(t.index=e.priority),Object(o.a)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},u=Object.entries(a).map(e=>{let[t,r]=e;return[t,Object.entries(r).map(e=>{let[t,r]=e;return[t,i(r)]}).reduce((e,t)=>{let[r,c]=t;return e[r]=c,e},{})]}).reduce((e,t)=>{let[r,c]=t;return e[r]=c,e},{});t.a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const s=r&&void 0!==u[r]?u[r]:{};return e.map(e=>({key:e,...c.defaultAddressFields[e]||{},...s[e]||{},...t[e]||{}})).sort((e,t)=>e.index-t.index)}}}]);