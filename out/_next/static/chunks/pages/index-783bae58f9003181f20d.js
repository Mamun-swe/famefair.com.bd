(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{14856:function(e,t,i){"use strict";i.d(t,{BY:function(){return d},r3:function(){return o},u1:function(){return u}});var n=i(85893),r=i(80018),s=i(67294),c=i(51655),a=i(38626),d=function(e){var t=(0,s.useRef)(),i=(0,s.useState)(0),r=i[0],a=i[1],d=(0,s.useState)(0),o=d[0],u=d[1];return(0,s.useEffect)((function(){var e=function(){a(t.current.offsetWidth),u(t.current.offsetHeight)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,n.jsx)("div",{className:"custom-carousel-container",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("div",{className:"carousel-container",children:(0,n.jsx)("div",{className:"carousel-card",ref:t,children:(0,n.jsx)(c.ZP,{circle:e.circle,width:e.width?e.width:r,height:e.height?e.height:o})})})})})})})},o=function(e){var t=(0,s.useRef)(),i=(0,s.useState)(0),r=i[0],a=i[1],d=(0,s.useState)(0),o=d[0],u=d[1];return(0,s.useEffect)((function(){var e=function(){a(t.current.offsetWidth),u(t.current.offsetHeight)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,n.jsx)("div",{style:{width:"100%",height:"100%"},ref:t,children:(0,n.jsx)(c.ZP,{width:e.width?e.width:r,height:e.height?e.height:o})})},u=function(e){return(0,n.jsx)("div",{children:e.items?(0,r.Z)(Array(e.items).keys()).map((function(e){return(0,n.jsx)("div",{className:"categories-container",children:(0,n.jsx)("div",{className:"container mb-4 mb-lg-5",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-12 mb-1",style:{padding:"0px 20px"},children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("div",{children:(0,n.jsx)(c.ZP,{width:240,height:35})}),(0,n.jsx)("div",{className:"ms-auto",children:(0,n.jsx)(c.ZP,{width:80,height:35})})]})}),(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)(a.w,{items:12})})]})})},e)})):null})}},38626:function(e,t,i){"use strict";i.d(t,{$:function(){return a},w:function(){return d}});var n=i(80018),r=i(85893),s=i(67294),c=i(51655),a=function(e){var t=(0,s.useRef)(),i=(0,s.useState)(0),n=i[0],a=i[1];return(0,s.useEffect)((function(){var e=function(){return a(t.current.offsetWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,r.jsx)("div",{ref:t,children:(0,r.jsx)(c.ZP,{circle:e.circle,width:e.width?e.width:n,height:e.height?e.height:190})})},d=function(e){var t=(0,s.useRef)(),i=(0,s.useState)(0),a=i[0],d=i[1];return(0,s.useEffect)((function(){var e=function(){return d(t.current.offsetWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,r.jsx)("div",{children:e.items?(0,n.Z)(Array(e.items).keys()).map((function(i){return(0,r.jsx)("div",{className:"product-card",children:(0,r.jsx)("div",{className:"bg-white",style:{borderRadius:6,paddingLeft:12,paddingRight:12,paddingBottom:12,paddingTop:7},children:(0,r.jsx)("div",{className:"w-100",ref:t,children:(0,r.jsx)(c.ZP,{circle:e.circle,width:e.width?e.width:a,height:e.height?e.height:190})})})},i)})):null})}},39496:function(e,t,i){"use strict";var n=i(85893),r=i(67294),s=i(33657);t.Z=function(){var e=(0,r.useState)(!1),t=e[0],i=e[1];(0,r.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY>400;i(!0===e)}))}),[]);return(0,n.jsx)("div",{className:"go-to-top-container",children:t?(0,n.jsx)("button",{type:"button",className:"btn shadow rounded-circle border-0",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:(0,n.jsx)(s.Z,{size:22})}):null})}},65596:function(e,t,i){"use strict";var n=i(85893),r=i(11163);t.Z=function(e){var t=(0,r.useRouter)();return(0,n.jsx)("div",{className:"product-card card border-0",onClick:function(){return t.push("/product/".concat(e.item.slug))},children:(0,n.jsxs)("div",{className:"card-body text-center",children:[(0,n.jsx)("div",{className:"img-container",children:(0,n.jsx)("img",{src:e.item.image,className:"img-fluid",alt:e.item.name})}),(0,n.jsx)("p",{children:e.item.name})]})})}},49297:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var n=i(85893),r=i(87757),s=i.n(r),c=i(92137),a=i(9008),d=i(86830),o=i(67477),u=i(42244),l=i(67294),m=i(41664),h=i(57069),f=i(14856),p=(i(7730),function(e){return e.loading?(0,n.jsx)(f.BY,{}):(0,n.jsx)("div",{className:"custom-carousel-container",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("div",{className:"carousel-container",children:(0,n.jsx)(h.Z,{controls:!1,children:e.data&&e.data.length&&e.data.map((function(e,t){return(0,n.jsx)(h.Z.Item,{children:(0,n.jsx)("div",{className:"carousel-card",children:(0,n.jsx)(m.default,{href:"/category/".concat(e.category),children:(0,n.jsx)("img",{src:e.image,className:"img-fluid",alt:"..."})})})},t)}))})})})})})})}),g=function(){return(0,n.jsx)("div",{className:"feature-container",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-3 text-center",children:(0,n.jsxs)("div",{className:"feature-item",children:[(0,n.jsx)("div",{className:"icon-container rounded-circle flex-center flex-column",children:(0,n.jsx)("img",{src:"/icons/delivery.png",className:"img-fluid",alt:"feature"})}),(0,n.jsx)("p",{children:"Fast Delivery to"})]})}),(0,n.jsx)("div",{className:"col-3 text-center",children:(0,n.jsxs)("div",{className:"feature-item",children:[(0,n.jsx)("div",{className:"icon-container rounded-circle flex-center flex-column",children:(0,n.jsx)("img",{src:"/icons/customer.png",className:"img-fluid",alt:"feature"})}),(0,n.jsx)("p",{children:"Customer Service"})]})}),(0,n.jsx)("div",{className:"col-3 text-center",children:(0,n.jsxs)("div",{className:"feature-item",children:[(0,n.jsx)("div",{className:"icon-container rounded-circle flex-center flex-column",children:(0,n.jsx)("img",{src:"/icons/refund.png",className:"img-fluid",alt:"feature"})}),(0,n.jsx)("p",{children:"100% Refund"})]})}),(0,n.jsx)("div",{className:"col-3 text-center",children:(0,n.jsxs)("div",{className:"feature-item",children:[(0,n.jsx)("div",{className:"icon-container rounded-circle flex-center flex-column",children:(0,n.jsx)("img",{src:"/icons/cart.png",className:"img-fluid",alt:"feature"})}),(0,n.jsx)("p",{children:"Safe Shopping"})]})})]})})})},x=i(80018),v=i(58533),j=i(65596),w=i(45665),N=function(e){var t=(0,l.useState)(2),i=t[0],r=t[1],a=(0,l.useState)([]),d=a[0],o=a[1],u=(0,l.useState)(!0),h=u[0],p=u[1],g=function(){var e=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,(0,w._Y)(i);case 4:200===(t=e.sent).status&&(t.data.data&&t.data.data.length?(o([].concat((0,x.Z)(d),(0,x.Z)(t.data.data))),r(i+1)):p(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){e.data&&e.data.length&&o(e.data)}),[e.data]),(0,n.jsx)("div",{className:"categories-container",children:(0,n.jsx)(v.Z,{dataLength:d.length,next:g,hasMore:h,loader:(0,n.jsx)(f.u1,{items:2}),children:d&&d.map((function(e,t){return(0,n.jsx)("div",{className:"container mb-4 mb-lg-5",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-12 mb-1 px-4",children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("div",{children:(0,n.jsx)("h5",{children:e.name})}),(0,n.jsx)("div",{className:"ms-auto",children:(0,n.jsx)(m.default,{href:"/category/".concat(e.slug),children:(0,n.jsx)("button",{type:"button",className:"btn shadow-none",children:"View All"})})})]})}),(0,n.jsx)("div",{className:"col-12",children:e.products&&e.products.length&&e.products.map((function(e,t){return(0,n.jsx)(j.Z,{item:e},t)}))})]})},t)}))})})},k=i(39496);function _(){var e=(0,l.useState)({data:[],loading:!0}),t=e[0],i=e[1],r=(0,l.useState)({data:[],loading:!0}),m=r[0],h=r[1],f=(0,l.useCallback)((0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.jL)();case 3:200===(t=e.sent).status&&i({data:t.data.banners,loading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0&&console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),x=(0,l.useCallback)((0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w._Y)(1);case 3:200===(t=e.sent).status&&h({data:t.data.data,loading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0&&console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);return(0,l.useEffect)((function(){f()}),[f]),(0,l.useEffect)((function(){x()}),[x]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Famefair || Biggest online market in Bangladesh."}),(0,n.jsx)("meta",{name:"description",content:"Famefair.com.bd biggest online market"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(d.Z,{}),(0,n.jsx)(o.Z,{}),(0,n.jsxs)("main",{children:[(0,n.jsx)(p,{loading:t.loading,data:t.data}),(0,n.jsx)(g,{}),(0,n.jsx)(N,{data:m.data,loading:m.loading}),(0,n.jsx)(u.Z,{}),(0,n.jsx)(k.Z,{})]})]})}},7730:function(e,t,i){"use strict";i.d(t,{RB:function(){return n},A9:function(){return r},A6:function(){return s}});var n=[{_id:1,slug:1,sku:"FF123",stock_amount:20,price:250,name:"Product 1",image:"/products/1.jpg"},{_id:2,slug:2,sku:"FF123",stock_amount:20,price:250,name:"Product 2",image:"/products/2.jpg"},{_id:3,slug:3,sku:"FF123",stock_amount:20,price:250,name:"Product 3",image:"/products/3.jpg"},{_id:4,slug:4,sku:"FF123",stock_amount:20,price:250,name:"Product 4",image:"/products/4.jpg"},{_id:5,slug:5,sku:"FF123",stock_amount:20,price:250,name:"Product 5",image:"/products/5.jpg"},{_id:6,slug:6,sku:"FF123",stock_amount:20,price:250,name:"Product 6",image:"/products/6.jpg"},{_id:7,slug:7,sku:"FF123",stock_amount:20,price:250,name:"Product 7",image:"/products/7.jpg"},{_id:8,slug:8,sku:"FF123",stock_amount:20,price:250,name:"Product 8",image:"/products/8.jpg"},{_id:9,slug:9,sku:"FF123",stock_amount:20,price:250,name:"Product 9",image:"/products/1.jpg"},{_id:10,slug:10,sku:"FF123",stock_amount:20,price:250,name:"Product 10",image:"/products/2.jpg"},{_id:11,slug:11,sku:"FF123",stock_amount:20,price:250,name:"Product 11",image:"/products/3.jpg"},{_id:12,slug:12,sku:"FF123",stock_amount:20,price:250,name:"Product 12",image:"/products/4.jpg"},{_id:13,slug:13,sku:"FF123",stock_amount:20,price:250,name:"Product 7",image:"/products/7.jpg"},{_id:14,slug:14,sku:"FF123",stock_amount:20,price:250,name:"Product 8",image:"/products/8.jpg"}],r=[{product:"ABC product",rating:4.5,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."},{product:"ABC product",rating:4.5,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."},{product:"ABC product",rating:4.5,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."},{product:"ABC product",rating:4.5,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."},{product:"ABC product",rating:4.5,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."},{product:"ABC product",rating:4.5,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."},{product:"ABC product",rating:4.5,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."}],s=[{orderId:"FF12357",date:"19 Jun 2021, 07:02 PM",amount:5001,payment:"paid",status:"pending"},{orderId:"FF12357",date:"19 Jun 2021, 07:02 PM",amount:5001,payment:"unpaid",status:"pending"},{orderId:"FF12357",date:"19 Jun 2021, 07:02 PM",amount:5001,payment:"paid",status:"pending"},{orderId:"FF12357",date:"19 Jun 2021, 07:02 PM",amount:5001,payment:"unpaid",status:"pending"}]},78581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(49297)}])}},function(e){e.O(0,[996,100,656,534,810,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);