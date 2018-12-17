(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{18:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t(0),o=t.n(r),i=t(3),a=t(4),u=t.n(a);t(2);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);return f=function(){return e},e}var s=u()(f());n.b=function(e){return o.a.createElement(i.Query,c({},e,{query:s}),function(n){return e.children(n)})}},21:function(e,n,t){"use strict";var r=t(1),o=Object(r.d)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),i=r.b.form.withConfig({displayName:"Form",componentId:"sc-1xszr8q-0"})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:",";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:"," 0.5s linear infinite;}}"],function(e){return e.theme.red},o);i.displayName="Form",n.a=i},36:function(e,n,t){e.exports=t(62)},541:function(e,n,t){__NEXT_REGISTER_PAGE("/confirmation",function(){return e.exports=t(577),{page:e.exports.default}})},577:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=(t(19),t(13)),a=t.n(i),u=t(36),c=t.n(u),f=t(3),s=(t(2),t(4)),l=t.n(s),p=t(21),b=(t(23),t(18));function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  mutation CONFIRM_USER_MUTATION($confirmToken: String!) {\n    confirmUser(confirmToken: $confirmToken) {\n      message\n    }\n  }\n"]);return w=function(){return e},e}var k=l()(w()),O=function(e){function n(){var e,t,r,o,i,a,u;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var c=arguments.length,f=new Array(c),s=0;s<c;s++)f[s]=arguments[s];return r=this,t=!(o=(e=h(n)).call.apply(e,[this].concat(f)))||"object"!==m(o)&&"function"!=typeof o?v(r):o,i=v(v(t)),a="state",u={confirmToken:t.props.confirmToken},a in i?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,t}var t,i,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,r["Component"]),t=n,(i=[{key:"render",value:function(){return o.a.createElement(f.Mutation,{mutation:k,variables:{confirmToken:this.props.confirmToken},refetchQueries:[{query:b.a}]},function(e,n){n.error,n.loading,n.called;return o.a.createElement(p.a,{method:"post",onSubmit:function(){var n,t=(n=a.a.mark(function n(t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,e();case 3:c.a.push({pathname:"/"});case 4:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var i=n.apply(e,t);function a(e){d(i,r,o,a,u,"next",e)}function u(e){d(i,r,o,a,u,"throw",e)}a(void 0)})});return function(e){return t.apply(this,arguments)}}()},o.a.createElement("button",{type:"submit"},"Click to confirm account"))})}}])&&y(t.prototype,i),u&&y(t,u),n}();n.default=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,"Confirm your account ",e.query.confirmToken),o.a.createElement(O,{confirmToken:e.query.confirmToken}))}}},[[541,1,0]]]);