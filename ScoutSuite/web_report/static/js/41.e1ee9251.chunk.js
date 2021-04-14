(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[41],{571:function(e,t,n){"use strict";n.r(t);var c=n(1),r=(n(0),n(15)),a=n.n(r),i=n(72),s=n.n(i),l=n(642),o=n(640),u=n(103),d=n(645),j=n(194),b=function(e){return Object(c.jsx)("div",{className:"table-responsive",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Priority"}),Object(c.jsx)("td",{children:"Name"}),Object(c.jsx)("td",{children:"Protocol"}),Object(c.jsx)("td",{children:"Source Port"}),Object(c.jsx)("td",{children:"Source Filter"}),Object(c.jsx)("td",{children:"Destination Port"}),Object(c.jsx)("td",{children:"Destination Filter"}),Object(c.jsx)("td",{children:"Action"})]})}),Object(c.jsx)("tbody",{children:e.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{width:"10%",className:"text-center",children:e.priority}),Object(c.jsx)("td",{width:"40%",children:e.name}),Object(c.jsx)("td",{width:"10%",className:"text-center",children:e.protocol}),Object(c.jsx)("td",{width:"10%",className:"text-center",children:e.source_port_ranges}),e.source_address_prefixes_is_asg&&Object(c.jsx)("td",{width:"10%",className:"text-center",children:Object(c.jsx)(j.a,{service:"network",resource:"application_security_groups",id:e.source_address_prefixes})}),!e.source_address_prefixes_is_asg&&Object(c.jsx)("td",{width:"10%",className:"text-center",children:e.source_address_prefixes}),Object(c.jsx)("td",{width:"10%",className:"text-center",children:e.destination_port_ranges}),Object(c.jsx)("td",{width:"10%",className:"text-center",children:e.destination_address_prefixes}),Object(c.jsxs)("td",{width:"10%",className:"text-center",children:[e.allow&&Object(c.jsx)("i",{className:"fa fa-check-circle finding-good"}),!e.allow&&Object(c.jsx)("i",{className:"fa fa-times-circle finding-danger"})]})]},e.name)}))})]})})},h=function(e){var t=e.id;return Object(c.jsx)(j.a,{service:"network",resource:"virtual_networks",id:t})};t.default=function(e){var t=e.data,n=a()(t,["item"],{});if(!t)return null;var r=s()(n.security_rules,"priority"),i=r.filter((function(e){return"Inbound"===e.direction})),j=r.filter((function(e){return"Outbound"===e.direction}));return Object(c.jsxs)(o.a,{data:t,children:[Object(c.jsxs)(l.a,{children:[Object(c.jsx)(o.c,{label:"Name",valuePath:"name"}),Object(c.jsx)(o.c,{label:"Location",valuePath:"location"}),Object(c.jsx)(o.c,{label:"State",valuePath:"provisioning_state"}),Object(c.jsx)(o.c,{label:"Tags",valuePath:"tags",renderValue:function(e){return Object(u.k)(e,u.n)}}),Object(c.jsx)(o.c,{label:"Resource group",valuePath:"resource_group_name",renderValue:u.n})]}),Object(c.jsxs)(d.b,{children:[Object(c.jsx)(d.a,{title:"Inbound Security Rules",children:b(i)}),Object(c.jsx)(d.a,{title:"Outbound Security Rules",children:b(j)}),Object(c.jsx)(d.a,{title:"Attached Subnets",children:Object(c.jsx)(o.c,{valuePath:"subnets",renderValue:function(e){return Object(u.k)(Object.values(e),"",h)}})}),Object(c.jsx)(d.a,{title:"Attached Network Interfaces"})]})]})}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var c=n(0),r=n.n(c),a={path_to_issue:[],item:{}},i=r.a.createContext(a),s=r.a.createContext(""),l=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var c=n(19),r=n(1),a=n(0),i=n(633),s=n(7),l=n.n(s),o=n(15),u=n.n(o),d=n(10),j=n.n(d),b=n(637),h=n(103),x=n(83),O=(n(641),n(624)),f=n(191),p=n.n(f),v=n(192),m=n(130),_=function(e){var t=e.service,n=e.finding,c=e.path,s=Object(a.useContext)(m.a),l=s.exceptions,o=s.addException,d=Object(v.b)().enqueueSnackbar,j=u()(l,[t,n],[]).includes(c);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(O.a,{disabled:j,size:"small",startIcon:Object(r.jsx)(p.a,{}),className:"exception-btn",onClick:function(){o(t,n,c),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=n(29),N=function(e){var t,n=e.label,s=e.separator,o=e.valuePath,d=e.errorPath,O=e.className,f=e.inline,p=e.tooltip,v=e.tooltipProps,m=e.renderValue,N=e.basePathOverwrite,P=Object(g.g)(),w=Object(a.useContext)(b.a),k=Object(a.useContext)(b.b),C=Object(a.useContext)(b.c),S=Object(h.a)(N||k,o),y=m(e.value||u()(w.item,S,e.value));("boolean"===typeof y&&(y=String(y)),d)?t=(j()(d)?d:[d]).map((function(e){return Object(h.a)(N||k,e)})):t=[S];var A=t.some((function(e){return w.path_to_issues.includes(e)})),I=w.level;if(Object(a.useEffect)((function(){A&&C(I)}),[I]),void 0===y||null===y)return null;var D=Object(r.jsx)(_,{service:P.service,finding:P.finding,path:"".concat(w.path,".").concat(t[0])}),V=Object(r.jsxs)("span",{className:l()(A&&l()("issue",I)),children:[y,A&&D]});return Object(r.jsx)(x.a,{className:l()(O,"partial-value",{inline:f}),label:n,separator:s,value:p?Object(r.jsx)(i.a,Object(c.a)(Object(c.a)({title:y},v),{},{children:V})):V})};N.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=N},639:function(e,t,n){"use strict";var c=n(1),r=n(0),a=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,s=Object(r.useContext)(a.b);return Object(c.jsx)(a.b.Provider,{value:Object(i.a)(s,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return s.a}));var c=n(1),r=(n(0),n(637)),a=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(c.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),s=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var c=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(c.jsxs)("div",{className:"informations-wrapper",children:[Object(c.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){},644:function(e,t,n){},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l.b}));var c=n(1),r=n(18),a=n(0),i=n(7),s=n.n(i),l=n(104),o=n(637),u=n(56),d=(n(644),function(e){var t=e.title,n=e.isSelected,i=e.disabled,d=e.onClick,j=e.children,b=Object(a.useState)(""),h=Object(r.a)(b,2),x=h[0],O=h[1],f=x?Object(c.jsxs)(c.Fragment,{children:[t,u.a[x].icon]}):t;return Object(c.jsx)(o.c.Provider,{value:O,children:Object(c.jsx)(l.a,{title:f,className:s()("partial-tab-pane",x),isSelected:n,disabled:i,onClick:d,children:j})})})}}]);
//# sourceMappingURL=41.e1ee9251.chunk.js.map