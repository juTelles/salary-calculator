(this["webpackJsonpfer-cap02-aula02"]=this["webpackJsonpfer-cap02-aula02"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),i=(t(12),t(13),t(1)),u=t(2),m=t(3),s=t(4),o=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.value;return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",{className:"input-labels"},a),r.a.createElement("input",{className:"inputs-div",type:"text",readOnly:!0,disabled:!0,value:t})))}}]),t}(n.Component),d=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"title-div"},r.a.createElement("h1",null,"Calculadora de Sal\xe1rio L\xedquido Mensal"),r.a.createElement("h3",null,"Escreva o valor de seu sal\xe1rio mensal abaixo"))}}]),t}(n.Component),p=[{id:1,min:0,max:1045,percent:.075},{id:2,min:1045.01,max:2089.6,percent:.09},{id:3,min:2089.61,max:3134.4,percent:.12},{id:4,min:3134.41,max:6101.06,percent:.14}],v=function(e,a){return e*a},f=function(e){return parseFloat(e).toFixed(2)};var x=[{id:1,min:0,max:1903.98,percent:0,deduction:0},{id:2,min:1903.99,max:2826.65,percent:.075,deduction:142.8},{id:3,min:2826.66,max:3751.05,percent:.15,deduction:354.8},{id:4,min:3751.06,max:4664.68,percent:.225,deduction:636.13},{id:5,min:4664.69,max:1/0,percent:.275,deduction:869.36}];function b(e){var a=v,t=x[1],n=x[2],r=x[3],l=x[4];return e<=x[0].max?0:e<=t.max?a(e,t.percent)-t.deduction:e<=n.max?a(e,n.percent)-n.deduction:e<=r.max?a(e,r.percent)-r.deduction:a(e,l.percent)-l.deduction}function h(e){var a=f,t=0===e||""===e?"":a(e),n=0===e||""===e?"":a(function(e){var a=v,t=p[0],n=p[1],r=p[2],l=p[3];if(e<=t.max)return a(e,t.percent);if(e<=n.max)return e-=t.max,a(t.max-t.min,t.percent)+a(e,n.percent);if(e<=r.max)return e-=n.max,a(t.max-t.min,t.percent)+a(n.max-n.min,n.percent)+a(e,r.percent);var c=a(t.max-t.min,t.percent)+a(n.max-n.min,n.percent)+a(r.max-r.min,r.percent);return e<l.max?c+a(e-=r.max,l.percent):c+a(l.max-l.min,l.percent)}(e)),r=0===e||""===e?"":a(e-n),l=0===e||""===e?"":0===b(r)?"Isento":a(b(r));return{inssBase:t,inssCalc:n,irrfBase:r,irrfCalc:l,liquidSalary:0===e||""===e?"":"Isento"===l?r:a(r-l)}}var y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleSalaryChange=function(a){var t=Number(a.target.value);0===t?e.setState({salary:""}):e.setState({salary:t})},e.state={salary:"",calculations:{inssBase:"",inssCalc:"",irrfBase:"",irrfCalc:"",liquidSalary:""}},e}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this.state.salary;if(t!==a.salary){var n=h(t);this.setState({calculations:n})}}},{key:"render",value:function(){var e=this.state,a=e.salary,t=e.calculations,n=t.inssBase,l=t.inssCalc,c=t.irrfBase,i=t.irrfCalc,u=t.liquidSalary;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"calculator"},r.a.createElement("div",null,r.a.createElement("input",{type:"number",min:"0",value:a,placeholder:" ",onChange:this.handleSalaryChange})),r.a.createElement("div",null,r.a.createElement(o,{value:n,label:"INSS Base"}),r.a.createElement(o,{value:l,label:"Desconto INSS"}),r.a.createElement(o,{value:c,label:"IRRF Base"}),r.a.createElement(o,{value:i,label:"Desconto IRRF"}),r.a.createElement(o,{value:u,label:"Salario Liquido"}))))}}]),t}(n.Component),E=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null)}}]),t}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.86bc14f6.chunk.js.map