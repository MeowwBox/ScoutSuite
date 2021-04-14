(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[25,94],{509:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(640)),r=n(103);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.c,{label:"ARN",valuePath:"arn"}),Object(a.jsx)(c.c,{label:"Region",valuePath:"region"}),Object(a.jsx)(c.c,{label:"Engine",valuePath:"Engine"}),Object(a.jsx)(c.c,{label:"Creation Time",valuePath:"InstanceCreateTime",renderValue:r.h}),Object(a.jsx)(c.c,{label:"Status",valuePath:"DBInstanceStatus",renderValue:r.i}),Object(a.jsx)(c.c,{label:"Is Read Replica",valuePath:"is_read_replica"}),Object(a.jsx)(c.c,{label:"Auto Minor Version Upgrade",valuePath:"AutoMinorVersionUpgrade",renderValue:r.c}),Object(a.jsx)(c.c,{label:"Multi Availability Zones",valuePath:"MultiAZ",renderValue:r.c}),Object(a.jsx)(c.c,{label:"Instance Class",valuePath:"DBInstanceClass"}),Object(a.jsx)(c.c,{label:"Backup Retention Period",valuePath:"BackupRetentionPeriod",renderValue:function(e){return"".concat(e," days")}}),Object(a.jsx)(c.c,{label:"Enhanced Monitoring",valuePath:"EnhancedMonitoringResourceArn",renderValue:r.c}),Object(a.jsx)(c.c,{label:"Encrypted Storage",valuePath:"StorageEncrypted",renderValue:r.c}),Object(a.jsx)(c.c,{label:"CA Certificate",valuePath:"CACertificateIdentifier"})]})}},550:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(103)),r=n(640),i=n(645),l=n(642),s=n(509);t.default=function(e){var t=e.data;return t?Object(a.jsxs)(r.a,{data:t,children:[Object(a.jsx)(l.a,{children:Object(a.jsx)(s.default,{})}),Object(a.jsx)(i.b,{children:Object(a.jsx)(i.a,{title:"Network",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(r.c,{label:"Endpoint",valuePath:"Endpoint",renderValue:function(e){return"".concat(e.Address,":").concat(e.Port)}}),Object(a.jsx)(r.c,{label:"Publicly Accessible",valuePath:"PubliclyAccessible",errorPath:"instance_publicly_accessible",renderValue:c.c})]})})})]}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(0),c=n.n(a),r={path_to_issue:[],item:{}},i=c.a.createContext(r),l=c.a.createContext(""),s=c.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),c=n(1),r=n(0),i=n(633),l=n(7),s=n.n(l),u=n(15),o=n.n(u),b=n(10),d=n.n(b),j=n(637),h=n(103),v=n(83),f=(n(641),n(624)),O=n(191),p=n.n(O),x=n(192),P=n(130),m=function(e){var t=e.service,n=e.finding,a=e.path,l=Object(r.useContext)(P.a),s=l.exceptions,u=l.addException,b=Object(x.b)().enqueueSnackbar,d=o()(s,[t,n],[]).includes(a);return Object(c.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(c.jsx)(f.a,{disabled:d,size:"small",startIcon:Object(c.jsx)(p.a,{}),className:"exception-btn",onClick:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=n(29),C=function(e){var t,n=e.label,l=e.separator,u=e.valuePath,b=e.errorPath,f=e.className,O=e.inline,p=e.tooltip,x=e.tooltipProps,P=e.renderValue,C=e.basePathOverwrite,A=Object(g.g)(),V=Object(r.useContext)(j.a),E=Object(r.useContext)(j.b),k=Object(r.useContext)(j.c),y=Object(h.a)(C||E,u),I=P(e.value||o()(V.item,y,e.value));("boolean"===typeof I&&(I=String(I)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(h.a)(C||E,e)})):t=[y];var N=t.some((function(e){return V.path_to_issues.includes(e)})),S=V.level;if(Object(r.useEffect)((function(){N&&k(S)}),[S]),void 0===I||null===I)return null;var R=Object(c.jsx)(m,{service:A.service,finding:A.finding,path:"".concat(V.path,".").concat(t[0])}),_=Object(c.jsxs)("span",{className:s()(N&&s()("issue",S)),children:[I,N&&R]});return Object(c.jsx)(v.a,{className:s()(f,"partial-value",{inline:O}),label:n,separator:l,value:p?Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({title:I},x),{},{children:_})):_})};C.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=C},639:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,l=Object(c.useContext)(r.b);return Object(a.jsx)(r.b.Provider,{value:Object(i.a)(l,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return l.a}));var a=n(1),c=(n(0),n(637)),r=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(c.a.Provider,{value:t,children:n})}),i=n(639),l=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var a=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){},644:function(e,t,n){},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s.b}));var a=n(1),c=n(18),r=n(0),i=n(7),l=n.n(i),s=n(104),u=n(637),o=n(56),b=(n(644),function(e){var t=e.title,n=e.isSelected,i=e.disabled,b=e.onClick,d=e.children,j=Object(r.useState)(""),h=Object(c.a)(j,2),v=h[0],f=h[1],O=v?Object(a.jsxs)(a.Fragment,{children:[t,o.a[v].icon]}):t;return Object(a.jsx)(u.c.Provider,{value:f,children:Object(a.jsx)(s.a,{title:O,className:l()("partial-tab-pane",v),isSelected:n,disabled:i,onClick:b,children:d})})})}}]);
//# sourceMappingURL=25.c3d63a2b.chunk.js.map