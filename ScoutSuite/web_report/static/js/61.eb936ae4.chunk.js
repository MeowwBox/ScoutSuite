(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[61],{584:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(642)),c=n(640),i=n(103);t.default=function(e){var t=e.data;return t?Object(a.jsx)(c.a,{data:t,children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.c,{label:"Name",valuePath:"name",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Unique ID",valuePath:"unique_id",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Provisioning State",valuePath:"provisioning_state",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Time Created",valuePath:"time_created",renderValue:i.h}),Object(a.jsx)(c.c,{label:"Location",valuePath:"location",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Encryption Type",valuePath:"encryption_type",renderValue:i.n}),Object(a.jsx)(c.c,{label:"OS Type",valuePath:"os_type",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Managed By",valuePath:"managed_by",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Hyper V Generation",valuePath:"hyper_vgeneration",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Disk Size GB",valuePath:"disk_size_gb",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Incremental",valuePath:"incremental",renderValue:i.n})]})}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),l=r.a.createContext(""),u=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n(0),i=n(633),l=n(7),u=n.n(l),o=n(15),s=n.n(o),b=n(10),d=n.n(b),j=n(637),v=n(103),p=n(83),h=(n(641),n(624)),f=n(191),O=n.n(f),x=n(192),m=n(130),P=function(e){var t=e.service,n=e.finding,a=e.path,l=Object(c.useContext)(m.a),u=l.exceptions,o=l.addException,b=Object(x.b)().enqueueSnackbar,d=s()(u,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(h.a,{disabled:d,size:"small",startIcon:Object(r.jsx)(O.a,{}),className:"exception-btn",onClick:function(){o(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=n(29),V=function(e){var t,n=e.label,l=e.separator,o=e.valuePath,b=e.errorPath,h=e.className,f=e.inline,O=e.tooltip,x=e.tooltipProps,m=e.renderValue,V=e.basePathOverwrite,_=Object(g.g)(),y=Object(c.useContext)(j.a),C=Object(c.useContext)(j.b),N=Object(c.useContext)(j.c),k=Object(v.a)(V||C,o),A=m(e.value||s()(y.item,k,e.value));("boolean"===typeof A&&(A=String(A)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(v.a)(V||C,e)})):t=[k];var w=t.some((function(e){return y.path_to_issues.includes(e)})),D=y.level;if(Object(c.useEffect)((function(){w&&N(D)}),[D]),void 0===A||null===A)return null;var I=Object(r.jsx)(P,{service:_.service,finding:_.finding,path:"".concat(y.path,".").concat(t[0])}),S=Object(r.jsxs)("span",{className:u()(w&&u()("issue",D)),children:[A,w&&I]});return Object(r.jsx)(p.a,{className:u()(h,"partial-value",{inline:f}),label:n,separator:l,value:O?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:A},x),{},{children:S})):S})};V.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=V},639:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,l=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(l,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return l.a}));var a=n(1),r=(n(0),n(637)),c=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),l=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var a=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){}}]);
//# sourceMappingURL=61.eb936ae4.chunk.js.map