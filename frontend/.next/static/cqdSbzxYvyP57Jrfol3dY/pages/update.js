(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";var r=n(1).b.div.withConfig({displayName:"CenterMaxWidth",componentId:"sc-1qwsocq-0"})(["max-width:",";margin:0 auto;"],function(e){return e.theme.maxWidth});t.a=r},21:function(e,t,n){"use strict";var r=n(1),a=Object(r.d)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),i=r.b.form.withConfig({displayName:"Form",componentId:"sc-1xszr8q-0"})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:",";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:"," 0.5s linear infinite;}}"],function(e){return e.theme.red},a);i.displayName="Form",t.a=i},36:function(e,t,n){e.exports=n(62)},564:function(e,t,n){__NEXT_REGISTER_PAGE("/update",function(){return e.exports=n(581),{page:e.exports.default}})},581:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=(n(19),n(13)),o=n.n(i),u=n(3),l=n(4),c=n.n(l),d=(n(36),n(21)),p=n(23),s=n(116);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){E(e,t,n[t])})}return e}function b(e,t,n,r,a,i,o){try{var u=e[i](o),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,a)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){var e=O(["\n  mutation UPDATE_ITEM_MUTATION(\n    $id: ID!\n    $title: String\n    $description: String\n    $date: String\n    $startTime: Int\n    $endTime: Int\n  ) {\n    updateMeeting(\n      id: $id\n      title: $title\n      description: $description\n      date: $date\n      startTime: $startTime\n      endTime: $endTime\n    ) {\n      id\n    }\n  }\n"]);return w=function(){return e},e}function T(){var e=O(["\n  query SINGLE_MEETING_QUERY($id: ID!) {\n    meeting(where: { id: $id }) {\n      id\n      title\n      date\n      startTime\n      endTime\n      description\n    }\n  }\n"]);return T=function(){return e},e}function O(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x=c()(T()),C=c()(w()),S=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return r=this,a=(e=g(t)).call.apply(e,[this].concat(u)),n=!a||"object"!==m(a)&&"function"!=typeof a?v(r):a,E(v(v(n)),"state",{}),E(v(v(n)),"handleChange",function(e){var t=e.target,r=t.name,a=t.type,i=t.value,o="number"===a?parseFloat(i):i;n.setState(E({},r,o))}),E(v(v(n)),"updateMeeting",function(){var e,t=(e=o.a.mark(function e(t,r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("updating item"),console.log(n.state),e.next=5,r({variables:f({id:n.props.id},n.state)});case 5:e.sent,console.log("updated");case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){b(i,r,a,o,u,"next",e)}function u(e){b(i,r,a,o,u,"throw",e)}o(void 0)})});return function(e,n){return t.apply(this,arguments)}}()),n}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this;return a.a.createElement(s.a,null,a.a.createElement(u.Query,{query:x,variables:{id:this.props.id}},function(t){var n=t.data;return t.loading?a.a.createElement("p",null,"Loading"):n.meeting?a.a.createElement(u.Mutation,{mutation:C,variables:e.state},function(t,r){var i=r.loading,o=r.error;return a.a.createElement(d.a,{onSubmit:function(n){return e.updateMeeting(n,t)}},a.a.createElement(p.a,{error:o}),a.a.createElement("h2",null,"Create a Meeting"),a.a.createElement("fieldset",{disabled:i,"aria-busy":i},a.a.createElement("label",{htmlFor:"title"},"Title",a.a.createElement("input",{type:"text",id:"title",name:"title",placeholder:"Title",required:!0,defaultValue:n.meeting.title,onChange:e.handleChange})),a.a.createElement("label",{htmlFor:"date"},"Event Date",a.a.createElement("input",{type:"date",id:"date",name:"date",placeholder:"date",required:!0,defaultValue:n.meeting.date,onChange:e.handleChange})),a.a.createElement("label",{htmlFor:"startTime"},"Start Time",a.a.createElement("input",{type:"time",id:"startTime",name:"startTime",placeholder:"startTime",required:!0,defaultValue:n.meeting.startTime,onChange:e.handleChange})),a.a.createElement("label",{htmlFor:"endTime"},"End Time",a.a.createElement("input",{type:"time",id:"endTime",name:"endTime",placeholder:"endTime",required:!0,defaultValue:n.meeting.endTime,onChange:e.handleChange})),a.a.createElement("label",{htmlFor:"description"},"Description",a.a.createElement("textarea",{id:"description",name:"description",placeholder:"Enter A Description",required:!0,defaultValue:n.meeting.description,onChange:e.handleChange})),a.a.createElement("button",{type:"submit"},"Sav",i?"ing":"e")))}):a.a.createElement("p",null,"No item for for ID ",e.props.id)}))}}])&&h(n.prototype,i),l&&h(n,l),t}();t.default=function(e){var t=e.query;return a.a.createElement("div",null,a.a.createElement(S,{id:t.id}))}}},[[564,1,0]]]);