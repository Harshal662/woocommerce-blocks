(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[51],{517:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(5),l=i.n(n),o=i(147),d=i(318),r=i(409),c=i(4),a=i(3),p=i(1),h=i(416),b=i(75),u=i(52),g=i(37),m=i(9),w=i(413),O=i(414),j=e=>{let{showCompanyField:t=!1,showApartmentField:i=!1,showPhoneField:n=!1,requireCompanyField:l=!1,requirePhoneField:o=!1}=e;const{defaultAddressFields:d,setShippingAddress:c,setBillingAddress:a,shippingAddress:j,billingAddress:F,setShippingPhone:S,useShippingAsBilling:E,setUseShippingAsBilling:f}=Object(r.a)(),{dispatchCheckoutEvent:_}=Object(b.a)(),{isEditor:k}=Object(u.a)(),{email:C}=F,[A,y]=Object(s.useState)(!1);Object(s.useEffect)(()=>{n||S("")},[n,S]),Object(s.useEffect)(()=>{A||(E&&a({...j,email:C}),y(!0))},[A,a,j,E]);const P=Object(s.useMemo)(()=>({company:{hidden:!t,required:l},address_2:{hidden:!i}}),[t,l,i]),N=k?w.a:s.Fragment,q=E?[g.d.SHIPPING_ADDRESS,g.d.BILLING_ADDRESS]:[g.d.SHIPPING_ADDRESS];return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(N,null,Object(s.createElement)(m.StoreNoticesContainer,{context:q}),Object(s.createElement)(h.a,{id:"shipping",type:"shipping",onChange:e=>{c(e),E&&(a({...e,email:C}),_("set-billing-address")),_("set-shipping-address")},values:j,fields:Object.keys(d),fieldConfig:P}),n&&Object(s.createElement)(O.a,{id:"shipping-phone",errorId:"shipping_phone",isRequired:o,value:j.phone,onChange:e=>{S(e),_("set-phone-number",{step:"shipping"})}})),Object(s.createElement)(m.CheckboxControl,{className:"wc-block-checkout__use-address-for-billing",label:Object(p.__)("Use same address for billing","woo-gutenberg-products-block"),checked:E,onChange:e=>{f(e),e&&a(j)}}))},F=i(294),S={...Object(F.a)({defaultTitle:Object(p.__)("Shipping address","woo-gutenberg-products-block"),defaultDescription:Object(p.__)("Enter the address where you want your order delivered.","woo-gutenberg-products-block")}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},E=i(157);t.default=Object(o.withFilteredAttributes)(S)(e=>{let{title:t,description:i,showStepNumber:n,children:o,className:p}=e;const h=Object(c.useSelect)(e=>e(a.CHECKOUT_STORE_KEY).isProcessing()),{showShippingFields:b}=Object(r.a)(),{requireCompanyField:u,requirePhoneField:g,showApartmentField:m,showCompanyField:w,showPhoneField:O}=Object(E.b)();return b?Object(s.createElement)(d.a,{id:"shipping-fields",disabled:h,className:l()("wc-block-checkout__shipping-fields",p),title:t,description:i,showStepNumber:n},Object(s.createElement)(j,{requireCompanyField:u,requirePhoneField:g,showApartmentField:m,showCompanyField:w,showPhoneField:O}),o):null})}}]);