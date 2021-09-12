(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{96245:function(e,r,n){"use strict";function t(e){this.message=e}t.prototype=new Error,t.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,s=0,a=0,i="";o=r.charAt(a++);~o&&(n=s%4?64*n+o:o,s++%4)?i+=String.fromCharCode(255&n>>(-2*s&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return i};function s(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,r){var n=r.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(r)}catch(e){return o(r)}}function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidTokenError",r.Z=function(e,r){if("string"!=typeof e)throw new a("Invalid token specified");var n=!0===(r=r||{}).header?0:1;try{return JSON.parse(s(e.split(".")[n]))}catch(e){throw new a("Invalid token specified: "+e.message)}}},31564:function(e,r,n){"use strict";var t=n(85893),o=n(11163),s=n(55654),a=n(69435),i=n(25471),c=n(67518),l=n(90791),u=n(73752),d=n(77662),p=n(4868);r.Z=function(){var e=(0,o.useRouter)(),r=e.pathname,n=function(e){return e===r};return(0,t.jsx)("div",{className:"profile-card-container",children:(0,t.jsxs)("div",{className:"card border-0 shadow-sm",children:[(0,t.jsxs)("div",{className:"card-header bg-white border-0 p-4",children:[(0,t.jsxs)("div",{className:"image-container flex-center flex-column",children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)("img",{src:"/assets/user.png",className:"img-fluid",alt:"User profile"})}),(0,t.jsx)("button",{type:"button",className:"btn shadow-sm rounded-circle",children:(0,t.jsx)(s.Z,{size:18})})]}),(0,t.jsxs)("div",{className:"content-container",children:[(0,t.jsx)("h6",{children:"abdullah al mamun"}),(0,t.jsx)("p",{children:"mamun.swe.277@gmail.com"}),(0,t.jsx)("p",{children:"01533592610"})]})]}),(0,t.jsxs)("div",{className:"card-body px-0 pt-0",children:[(0,t.jsxs)("button",{type:"button",onClick:function(){return e.push("/")},className:"btn shadow-none w-100",children:[(0,t.jsx)(a.Z,{size:18,className:"me-2"}),"Back to Shopping"]}),(0,t.jsxs)("button",{type:"button",onClick:function(){return e.push("/account")},className:n("/account")?"btn shadow-none w-100 active":"btn shadow-none w-100",children:[(0,t.jsx)(i.Z,{size:18,className:"me-2"}),"Dashboard"]}),(0,t.jsxs)("button",{type:"button",onClick:function(){return e.push("/account/order-list")},className:n("/account/order-list")?"btn shadow-none w-100 active":"btn shadow-none w-100",children:[(0,t.jsx)(c.Z,{size:18,className:"me-2"}),"Order List"]}),(0,t.jsxs)("button",{type:"button",onClick:function(){return e.push("/account/review")},className:n("/account/review")?"btn shadow-none w-100 active":"btn shadow-none w-100",children:[(0,t.jsx)(l.Z,{size:18,className:"me-2"}),"Review"]}),(0,t.jsxs)("button",{type:"button",onClick:function(){return e.push("/account/basic-information")},className:n("/account/basic-information")?"btn shadow-none w-100 active":"btn shadow-none w-100",children:[(0,t.jsx)(u.Z,{size:18,className:"me-2"}),"Basic Information"]}),(0,t.jsxs)("button",{type:"button",onClick:function(){return e.push("/account/change-password")},className:n("/account/change-password")?"btn shadow-none w-100 active":"btn shadow-none w-100",children:[(0,t.jsx)(d.Z,{size:18,className:"me-2"}),"Change Password"]}),(0,t.jsxs)("button",{type:"button",className:"btn shadow-none w-100",onClick:function(){localStorage.removeItem("token"),e.push("/")},children:[(0,t.jsx)(p.Z,{size:18,className:"me-2"}),"Logout"]})]})]})})}},33479:function(e,r,n){"use strict";n.d(r,{Q:function(){return f}});var t=n(96156),o=n(85893),s=n(39249),a=n(11163),i=n(87757),c=n.n(i),l=n(92137),u=n(96245),d=function(){var e=(0,l.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=(0,u.Z)(r),t=parseInt((new Date).getTime()/1e3),!(n.exp>t)){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0){e.next=13;break}return e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}();function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var f=function(e){return function(r){var n=(0,a.useRouter)(),i=localStorage.getItem("token");return i?(d(i).then((function(e){if(!e)return s.Am.error("Login expired"),localStorage.removeItem("token"),n.replace("/login"),null})),(0,o.jsx)(e,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},r))):(n.replace("/login"),null)}}},98902:function(e,r,n){"use strict";n.r(r);var t=n(96156),o=n(85893),s=n(87757),a=n.n(s),i=n(92137),c=n(67294),l=n(9008),u=n(42283),d=n(33479),p=n(86830),f=n(67477),h=n(42244),m=n(31564);function w(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?w(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.default=(0,d.Q)((function(){var e=(0,u.cI)(),r=e.register,n=e.handleSubmit,t=e.formState.errors,s=e.reset,d=(0,c.useState)(!1),w=d[0],v=d[1],b=function(){var e=(0,i.Z)(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{v(!0),console.log(r),setTimeout((function(){s(),v(!1)}),1500)}catch(n){v(!1),console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{className:"account-container",children:[(0,o.jsxs)(l.default,{children:[(0,o.jsx)("title",{children:"Famefair || Change Password"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(p.Z,{}),(0,o.jsx)(f.Z,{}),(0,o.jsxs)("main",{children:[(0,o.jsx)("div",{className:"container change-password-container py-3",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12 col-padding",children:(0,o.jsxs)("div",{className:"d-lg-flex",children:[(0,o.jsx)("div",{className:"profile-info-container mb-3 mb-lg-0",children:(0,o.jsx)(m.Z,{})}),(0,o.jsx)("div",{className:"data-container flex-fill ps-lg-3",children:(0,o.jsxs)("div",{className:"card border-0 shadow-sm",children:[(0,o.jsx)("div",{className:"card-header bg-white p-4",children:(0,o.jsx)("h6",{className:"mb-0",children:"Change Password"})}),(0,o.jsx)("div",{className:"card-body p-4",children:(0,o.jsx)("div",{className:"form-container",children:(0,o.jsxs)("form",{onSubmit:n(b),children:[(0,o.jsxs)("div",{className:"form-group mb-4",children:[t.oldPassword&&t.oldPassword.message?(0,o.jsx)("small",{className:"text-danger",children:t.oldPassword&&t.oldPassword.message}):(0,o.jsx)("small",{children:"Old Password"}),(0,o.jsx)("input",g({type:"password",className:t.oldPassword?"form-control shadow-none error":"form-control shadow-none",placeholder:"*****"},r("oldPassword",{required:"Old password is required",minLength:{value:8,message:"Minimun length 8 character"}})))]}),(0,o.jsxs)("div",{className:"form-group mb-4",children:[t.newPassword&&t.newPassword.message?(0,o.jsx)("small",{className:"text-danger",children:t.newPassword&&t.newPassword.message}):(0,o.jsx)("small",{children:"New password"}),(0,o.jsx)("input",g({type:"password",className:t.newPassword?"form-control shadow-none error":"form-control shadow-none",placeholder:"*****"},r("newPassword",{required:"New password is required",minLength:{value:8,message:"Minimun length 8 character"}})))]}),(0,o.jsxs)("div",{className:"form-group mb-4",children:[t.confirmPassword&&t.confirmPassword.message?(0,o.jsx)("small",{className:"text-danger",children:t.confirmPassword&&t.confirmPassword.message}):(0,o.jsx)("small",{children:"Confirm password"}),(0,o.jsx)("input",g({type:"password",className:t.confirmPassword?"form-control shadow-none error":"form-control shadow-none",placeholder:"*****"},r("confirmPassword",{required:"Confirm password is required",minLength:{value:8,message:"Minimun length 8 character"}})))]}),(0,o.jsx)("div",{className:"text-end",children:(0,o.jsx)("button",{type:"submit",className:"btn shadow-none submit-btn",disabled:w,children:w?"Saving ...":"Save"})})]})})})]})})]})})})}),(0,o.jsx)(h.Z,{})]})]})}))},30731:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/change-password",function(){return n(98902)}])},90791:function(e,r,n){"use strict";var t=n(67294),o=n(45697),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,t.forwardRef)((function(e,r){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return t.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("circle",{cx:"12",cy:"12",r:"10"}),t.createElement("polyline",{points:"12 6 12 12 16 14"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="Clock",r.Z=c},55654:function(e,r,n){"use strict";var t=n(67294),o=n(45697),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,t.forwardRef)((function(e,r){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return t.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="Edit2",r.Z=c},25471:function(e,r,n){"use strict";var t=n(67294),o=n(45697),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,t.forwardRef)((function(e,r){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return t.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),t.createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),t.createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),t.createElement("rect",{x:"3",y:"14",width:"7",height:"7"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="Grid",r.Z=c},4868:function(e,r,n){"use strict";var t=n(67294),o=n(45697),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,t.forwardRef)((function(e,r){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return t.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),t.createElement("polyline",{points:"16 17 21 12 16 7"}),t.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="LogOut",r.Z=c},67518:function(e,r,n){"use strict";var t=n(67294),o=n(45697),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,t.forwardRef)((function(e,r){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return t.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),t.createElement("path",{d:"M22 12A10 10 0 0 0 12 2v10z"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="PieChart",r.Z=c},77662:function(e,r,n){"use strict";var t=n(67294),o=n(45697),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,t.forwardRef)((function(e,r){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return t.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("circle",{cx:"12",cy:"12",r:"3"}),t.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="Settings",r.Z=c},69435:function(e,r,n){"use strict";var t=n(67294),o=n(45697),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,t.forwardRef)((function(e,r){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return t.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),t.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),t.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="ShoppingBag",r.Z=c}},function(e){e.O(0,[996,100,810,774,888,179],(function(){return r=30731,e(e.s=r);var r}));var r=e.O();_N_E=r}]);