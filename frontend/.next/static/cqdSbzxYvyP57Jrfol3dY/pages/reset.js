(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{18:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var n=r(0),o=r.n(n),a=r(3),i=r(4),s=r.n(i);r(2);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);return c=function(){return e},e}var f=s()(c());t.b=function(e){return o.a.createElement(a.Query,u({},e,{query:f}),function(t){return e.children(t)})}},21:function(e,t,r){"use strict";var n=r(1),o=Object(n.d)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),a=n.b.form.withConfig({displayName:"Form",componentId:"sc-1xszr8q-0"})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:",";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:"," 0.5s linear infinite;}}"],function(e){return e.theme.red},o);a.displayName="Form",t.a=a},561:function(e,t,r){__NEXT_REGISTER_PAGE("/reset",function(){return e.exports=r(579),{page:e.exports.default}})},579:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=(r(19),r(13)),i=r.n(a),s=r(3),u=(r(2),r(4)),c=r.n(u),f=r(21),l=r(23),p=r(18);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation RESET_MUTATION(\n    $resetToken: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    resetPassword(\n      resetToken: $resetToken\n      password: $password\n      confirmPassword: $confirmPassword\n    ) {\n      id\n      email\n      name\n    }\n  }\n"]);return g=function(){return e},e}var P=c()(g()),k=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=this,o=(e=w(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==d(o)&&"function"!=typeof o?h(n):o,v(h(h(r)),"state",{password:"",confirmPassword:""}),v(h(h(r)),"saveToState",function(e){r.setState(v({},e.target.name,e.target.value))}),r}var r,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this;return o.a.createElement(s.Mutation,{mutation:P,variables:{resetToken:this.props.resetToken,password:this.state.password,confirmPassword:this.state.confirmPassword},refetchQueries:[{query:p.a}]},function(t,r){var n=r.error,a=r.loading,s=r.called;return o.a.createElement(f.a,{method:"post",onSubmit:function(){var r,n=(r=i.a.mark(function r(n){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.next=3,t();case 3:e.setState({password:"",confirmPassword:""});case 4:case"end":return r.stop()}},r,this)}),function(){var e=this,t=arguments;return new Promise(function(n,o){var a=r.apply(e,t);function i(e){m(a,n,o,i,s,"next",e)}function s(e){m(a,n,o,i,s,"throw",e)}i(void 0)})});return function(e){return n.apply(this,arguments)}}()},o.a.createElement("fieldset",{disabled:a,"aria-busy":a},o.a.createElement("h2",null,"Reset your password!"),o.a.createElement(l.a,{error:n}),!n&&!a&&s&&o.a.createElement("p",null,"Success! check your email for a reset link"),o.a.createElement("label",{htmlFor:"password"},"Password",o.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:e.state.password,onChange:e.saveToState})),o.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password",o.a.createElement("input",{type:"password",name:"confirmPassword",placeholder:"confirmPassword",value:e.state.confirmPassword,onChange:e.saveToState})),o.a.createElement("button",{type:"submit"},"Reset your password")))})}}])&&b(r.prototype,a),u&&b(r,u),t}();t.default=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,"Reset your password ",e.query.resetToken),o.a.createElement(k,{resetToken:e.query.resetToken}))}}},[[561,1,0]]]);