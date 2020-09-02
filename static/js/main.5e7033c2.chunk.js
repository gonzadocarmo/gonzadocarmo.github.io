(this["webpackJsonplanddox-react-code-challenge"]=this["webpackJsonplanddox-react-code-challenge"]||[]).push([[0],{72:function(e,a,n){e.exports=n(89)},77:function(e,a,n){},79:function(e,a,n){},89:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(63),c=n.n(l),i=(n(77),n(90)),o=n(92),m=n(68),s=n(93),u=n(95),d=(n(78),n(79),n(69)),E=n(96),p=n(94),f=n(91),v=n(11),h=n(66),b=n(43),w=n(44);b.b.add(w.a,w.b,w.c,w.d);var g=function(e){var a=function(e){switch(e){case"add":return{icon:"plus"};case"indent":return{icon:"level-up-alt",rotation:90};case"remove":return{icon:"minus-circle"};case"smile":return{icon:"smile"};default:return{}}}(e.icon);return r.a.createElement(h.a,a)},O=n(13),j=O.c().shape({minerals:O.a().of(Object(O.c)().shape({id:Object(O.d)(),owner:Object(O.d)().required().min(1).max(20),interest:Object(O.b)().required().positive().max(100),lease:Object(O.d)().required().min(1).max(20),npris:O.a().of(Object(O.c)().shape({id:Object(O.d)(),owner:Object(O.d)().required().min(1).max(20),interest:Object(O.b)().required().positive().max(100)}))})).required().min(1)}),k=n(3),y=n.n(k),N=function(e){var a=e.fieldName;return r.a.createElement(v.a,{name:a},(function(e){return r.a.createElement("div",{className:"invalid-feedback"},e)}))},x=function(e,a,n){var t=Object(v.f)(e,n);return y()("form-control",{"is-valid":!t,"is-invalid":t})},I=function(e,a,n){var l=e.values,c=e.errors,o=e.touched;n(l.minerals);var s=l.minerals;return s&&s.length>0?s.map((function(e,n){return r.a.createElement(i.a,{key:"mineral-".concat(n,"-container"),style:{margin:"1rem 0",padding:"1rem",boxShadow:"0 0 10px  rgba(0,0,0,0.6)",border:"solid 1px #555"}},r.a.createElement(p.a.Row,{key:"mineral-".concat(n,"-form")},r.a.createElement(m.a,null,r.a.createElement(v.b,{name:"minerals[".concat(n,"].owner"),className:x(c,0,"minerals[".concat(n,"].owner")),placeholder:"Owner...","data-testid":"mineralInterest-".concat(e.id,".owner")}),r.a.createElement(N,{fieldName:"minerals[".concat(n,"].owner")}),r.a.createElement(v.b,{type:"hidden",name:"minerals[".concat(n,"].id"),"data-testid":"mineralInterest-".concat(e.id)})),r.a.createElement(m.a,null,r.a.createElement(v.b,{name:"minerals[".concat(n,"].interest"),className:x(c,0,"minerals[".concat(n,"].interest")),placeholder:"Interest...","data-testid":"mineralInterest-".concat(e.id,".interest")}),r.a.createElement(N,{fieldName:"minerals[".concat(n,"].interest")})),r.a.createElement(m.a,null),r.a.createElement(m.a,null,r.a.createElement(v.b,{name:"minerals[".concat(n,"].lease"),className:x(c,0,"minerals[".concat(n,"].lease")),placeholder:"Lease name...","data-testid":"mineralInterest-".concat(e.id,".lease")}),r.a.createElement(N,{fieldName:"minerals[".concat(n,"].lease")})),r.a.createElement(m.a,null,r.a.createElement("span",{onClick:function(){return a(n)},"data-testid":"mineralInterest-".concat(e.id,".remove")},r.a.createElement(g,{icon:"remove"})))),r.a.createElement(p.a.Row,{key:"mineral-".concat(n,"-npris")},r.a.createElement(m.a,null,r.a.createElement(v.c,{name:"minerals[".concat(n,"].npris")},(function(e){return r.a.createElement(t.Fragment,null,function(e,a,n){var t=e.values,l=e.errors,c=(e.touched,t.minerals[a].npris);return c&&c.length>0?c.map((function(e,t){return r.a.createElement(i.a,{key:"minerals-".concat(a,"-npri-").concat(t,"-container")},r.a.createElement(p.a.Row,null,r.a.createElement(m.a,null,r.a.createElement(v.b,{name:"minerals[".concat(a,"].npris[").concat(t,"].owner"),className:x(l,0,"minerals[".concat(a,"].npris[").concat(t,"].owner")),placeholder:"Owner name...","data-testid":"npri-".concat(e.id,".owner")}),r.a.createElement(N,{fieldName:"minerals[".concat(a,"].npris[").concat(t,"].owner")}),r.a.createElement(v.b,{type:"hidden",name:"minerals[".concat(a,"].npris[").concat(t,"].id"),"data-testid":"npri-".concat(e.id)})),r.a.createElement(m.a,null),r.a.createElement(m.a,null,r.a.createElement(v.b,{name:"minerals[".concat(a,"].npris[").concat(t,"].interest"),className:x(l,0,"minerals[".concat(a,"].npris[").concat(t,"].interest")),placeholder:"Interest...","data-testid":"npri-".concat(e.id,".interest")}),r.a.createElement(N,{fieldName:"minerals[".concat(a,"].npris[").concat(t,"].interest")})),r.a.createElement(m.a,null),r.a.createElement(m.a,null,r.a.createElement("span",{onClick:function(){return n(t)},"data-testid":"npri-".concat(e.id,".remove")},r.a.createElement(g,{icon:"remove"})))))})):null}({values:l,errors:c,touched:o},n,(function(a){e.remove(a)})),r.a.createElement(E.a,{onClick:function(){return e.push({id:Object(u.a)(),owner:"",lease:""})}},"Add NPRI"))})))))})):null},C=function(e){var a=e.value,n=void 0===a?[]:a,l=e.onChange,c=void 0===l?function(){}:l,i=Object(t.useState)(!1),s=Object(d.a)(i,2),p=s[0],h=s[1];return p?r.a.createElement("div",null,r.a.createElement(f.a,{animation:"grow"}),"Sending data... hold on!"):r.a.createElement(t.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(m.a,null,"Owner"),r.a.createElement(m.a,null,"Mineral Interest"),r.a.createElement(m.a,null,"NPRI"),r.a.createElement(m.a,null,"Lease")),r.a.createElement(o.a,null,r.a.createElement(v.e,{validationSchema:j,initialValues:{minerals:n},onSubmit:function(){console.log("sending form...."),h(!0),setTimeout((function(){return h(!1)}),3e3)}},(function(e){var a=e.values,n=e.errors,l=e.touched,i=0===Object.keys(n).length;return r.a.createElement(v.d,null,r.a.createElement(o.a,null,r.a.createElement(v.c,{name:"minerals"},(function(e){return r.a.createElement(t.Fragment,null,r.a.createElement(o.a,null,I({values:a,errors:n,touched:l},(function(a){e.remove(a)}),(function(){console.info("Every time you do any of the above actions, the onChange prop should be fired"),c(a.minerals)}))),r.a.createElement(o.a,{style:{marginTop:"2rem"}},(i=function(){return e.push({id:Object(u.a)()})},r.a.createElement(E.a,{onClick:i},"Add Mineral Interest"))));var i}))),r.a.createElement(o.a,{style:{marginTop:"2rem"}},r.a.createElement(E.a,{type:"submit",disabled:!i},"SEND")))}))))},S=[{id:Object(u.a)(),owner:"Luke Skywalker",interest:.5,lease:"Tatooine Lease",npris:[{id:Object(u.a)(),owner:"Leia Organa",interest:.45},{id:Object(u.a)(),owner:"Han Solo",interest:.15}]}];var q=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement("h1",null,"Landdox Code Challenge ",r.a.createElement(g,{icon:"smile"}))))),r.a.createElement(o.a,null,r.a.createElement(m.a,null,r.a.createElement(C,{value:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.5e7033c2.chunk.js.map