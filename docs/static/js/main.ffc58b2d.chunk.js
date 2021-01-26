(this.webpackJsonphibrido=this.webpackJsonphibrido||[]).push([[0],{12:function(e,a,c){"use strict";c.r(a);var t=c(0),s=c(1),l=c(6),r=c.n(l),n=c(2),i=c(3),o=c(5),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(s.useState)(e),c=Object(n.a)(a,2),t=c[0],l=c[1],r=function(e){var a=e.target;l(Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},a.name,a.value)))},d=function(){l(e)};return[t,r,d]},j=function(e,a){var c=Object(s.useRef)(!0),t=Object(s.useState)({data:null,loading:!0,err:null}),l=Object(n.a)(t,2),r=l[0],i=l[1];return Object(s.useEffect)((function(){return function(){c.current=!1}}),[]),Object(s.useEffect)((function(){i({data:null,loading:!0,error:null}),a!=={}&&fetch(e,a).then((function(e){return e.json()})).then((function(e){c.current&&i({loading:!1,error:null,data:e})})).catch((function(){i({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[a,e]),r},m=function(e){var a=e.data,c=e.servicio,s=e.mensaje,l=Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h5",{className:"",children:"Mensaje Cifrado"}),Object(t.jsx)("p",{className:"card-text",children:null===a||void 0===a?void 0:a.mensajeCifrado}),Object(t.jsx)("h5",{className:"",children:"Llave cifrada"}),Object(t.jsx)("p",{className:"card-text",children:null===a||void 0===a?void 0:a.llaveCifrada}),Object(t.jsx)("h5",{className:"",children:"Firma"}),Object(t.jsx)("p",{className:"card-text",children:null===a||void 0===a?void 0:a.firma})]}),r=Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h5",{className:"",children:"Mensaje cifrado"}),Object(t.jsx)("p",{className:"card-text",children:null===a||void 0===a?void 0:a.mensajeCifrado})]}),n=Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h5",{className:"",children:"Mensaje"}),Object(t.jsx)("p",{className:"card-text",children:s}),Object(t.jsx)("h5",{className:"",children:"Firma"}),Object(t.jsx)("p",{className:"card-text",children:null===a||void 0===a?void 0:a.llaveCifrada})]});return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("blockquote",{className:"blockquote mt-2 mb-1",children:0==c?l:1==c?r:n})})},b=function(){var e=d({mensaje:"",password:"",pubkey:"",privkey:""}),a=Object(n.a)(e,2),c=a[0],l=c.mensaje,r=c.password,i=c.pubkey,o=c.privkey,b=a[1],h=Object(s.useState)(0),u=Object(n.a)(h,2),p=u[0],v=u[1],O=Object(s.useState)({}),x=Object(n.a)(O,2),f=x[0],N=x[1],g=j("https://hugo-hr.herokuapp.com/cifradorhibrido",f).data;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l.length>1&&r.length>1){var a=new FormData;a.append("mensaje",l),a.append("password",l),a.append("publickey",i),a.append("privatekey",o),N({method:"POST",body:a})}},children:[Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"mensaje",className:"form-label",children:"Mensaje a cifrar"}),Object(t.jsx)("input",{type:"text",className:"form-control",id:"mensaje",name:"mensaje",value:l,onChange:b,placeholder:""})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"password",className:"form-label",children:"Llave AES"}),Object(t.jsx)("input",{type:"text",className:"form-control",id:"password",name:"password",value:r,onChange:b,placeholder:""})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"pubkey",className:"form-label",children:"Llave Publica"}),Object(t.jsx)("textarea",{className:"form-control",id:"publickey",name:"pubkey",value:i,onChange:b,placeholder:"Llave publica del receptor",rows:"2"})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"privkey",className:"form-label",children:"Llave Privada"}),Object(t.jsx)("textarea",{className:"form-control",id:"privkey",name:"privkey",value:o,onChange:b,placeholder:"Llave privada del emisor",rows:"2"})]}),Object(t.jsxs)("select",{className:"form-select mb-3","aria-label":"Default select example",onChange:function(e){e.preventDefault(),v(e.target.value)},selected:p,children:[Object(t.jsx)("option",{value:"0",children:"Todos los servicios"}),Object(t.jsx)("option",{value:"1",children:"Confidencialidad"}),Object(t.jsx)("option",{value:"2",children:"Autenticacion"})]}),Object(t.jsx)("div",{className:"mb-3",children:Object(t.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Cifrar mensaje"})})]}),g&&Object(t.jsx)(m,{servicio:p,data:g,mensaje:l})]})},h=function(e){var a,c=e.data,s=e.servicio,l=Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h5",{className:"",children:"Mensaje Decifrado"}),Object(t.jsx)("p",{className:"card-text",children:null===c||void 0===c?void 0:c.mensaje}),Object(t.jsx)("h5",{className:"",children:"Llave Decifrada"}),Object(t.jsx)("p",{className:"card-text",children:null===c||void 0===c?void 0:c.llave}),Object(t.jsx)("h5",{className:"",children:"Informacion de la firma"}),Object(t.jsx)("p",{className:"card-text",children:null===c||void 0===c?void 0:c.info})]}),r=Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h5",{className:"",children:"Informacion de la Firma"}),Object(t.jsx)("p",{className:"card-text",children:null===c||void 0===c||null===(a=c.resultado)||void 0===a?void 0:a.message})]});return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("blockquote",{className:"blockquote mt-2 mb-1",children:0==s?l:r})})},u=function(){var e=d({mensaje:"",password:"",pubkey:"",privkey:"",firma:""}),a=Object(n.a)(e,2),c=a[0],l=c.mensaje,r=c.password,i=c.pubkey,o=c.privkey,m=c.firma,b=a[1],u=Object(s.useState)("decifradorhibrido"),p=Object(n.a)(u,2),v=p[0],O=p[1],x=Object(s.useState)(0),f=Object(n.a)(x,2),N=f[0],g=f[1];console.log(v);var y=Object(s.useState)({}),k=Object(n.a)(y,2),F=k[0],w=k[1],C=j("https://hugo-hr.herokuapp.com/".concat(v),F).data;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l.length>1&&r.length>1){var a=new FormData;a.append("mensaje",l),a.append("password",r),a.append("publickey",i),a.append("privatekey",o),a.append("firma",m),w({method:"POST",body:a})}},children:[Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"mensaje",className:"form-label",children:"Mensaje a verificar/decifrar"}),Object(t.jsx)("input",{type:"text",className:"form-control",id:"mensaje",name:"mensaje",value:l,onChange:b,placeholder:""})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"password",className:"form-label",children:"Llave AES cifrada."}),Object(t.jsx)("input",{type:"text",className:"form-control",id:"password",name:"password",value:r,onChange:b,placeholder:""})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"pubkey",className:"form-label",children:"Llave Publica"}),Object(t.jsx)("textarea",{className:"form-control",id:"publickey",name:"pubkey",value:i,onChange:b,placeholder:"Llave publica del emisor",rows:"2"})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"privkey",className:"form-label",children:"Llave Privada"}),Object(t.jsx)("textarea",{className:"form-control",id:"privkey",name:"privkey",value:o,onChange:b,placeholder:"Llave privada del receptor",rows:"2"})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{htmlFor:"firma",className:"form-label",children:"Firma del mensaje"}),Object(t.jsx)("textarea",{className:"form-control",id:"firma",name:"firma",value:m,onChange:b,placeholder:"Firma del mensaje",rows:"2"})]}),Object(t.jsxs)("select",{className:"form-select mb-3","aria-label":"Default select example",onChange:function(e){e.preventDefault(),g(e.target.value),0==e.target.value?O("decifradorhibrido"):1==e.target.value?O("decifradorhibridoconfidencialidad"):2==e.target.value&&O("verificar")},selected:N,children:[Object(t.jsx)("option",{value:"0",children:"Verificar todos los servicios"}),Object(t.jsx)("option",{value:"2",children:"Verificar Autenticacion"})]}),Object(t.jsx)("div",{className:"mb-3",children:Object(t.jsx)("input",{type:"submit",className:"btn btn-danger",value:"Verificar/Decifrar mensaje"})})]}),C&&Object(t.jsx)(h,{servicio:N,data:C})]})},p=function(){return Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("section",{className:"mb-5",children:Object(t.jsx)(b,{})}),Object(t.jsx)("hr",{}),Object(t.jsx)("section",{className:"mt-5",children:Object(t.jsx)(u,{})})]})};r.a.render(Object(t.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ffc58b2d.chunk.js.map