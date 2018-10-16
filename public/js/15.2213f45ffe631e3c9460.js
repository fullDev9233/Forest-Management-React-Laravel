webpackJsonp([15],{"5zKI":function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("O27J"),i=n.n(o),s=n("KSGD"),c=n.n(s),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show:!1,hiding:!1,marginTop:window.scrollY>70?-40:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),l(t,[{key:"componentWillMount",value:function(){var e=this;this.timer=setTimeout(function(){e.hide()},5e3)}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({show:!0})},100),window.addEventListener("scroll",this.handleWindowScroll.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleWindowScroll.bind(this))}},{key:"handleWindowScroll",value:function(){var e=window.scrollY>70?-40:0;this.setState({marginTop:e})}},{key:"hide",value:function(){this.setState({hiding:!0}),clearTimeout(this.timer)}},{key:"render",value:function(){var e="";switch(this.props.type){case"success":case"danger":case"info":case"warning":e="is-"+this.props.type;break;default:e="is-success"}e+=this.state.show?" show":"",e+=this.state.hiding?" hiding":"";var t=this.state.marginTop;return r.a.createElement("div",{className:"notification push-notification "+e,style:{marginTop:t+"px"}},r.a.createElement("button",{type:"button",className:"delete",onClick:this.hide.bind(this)}),this.props.message)}}],[{key:"_remove",value:function(){this.stack&&this.stack.length>0&&document.body.removeChild(this.stack.shift())}},{key:"push",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",a=document.createElement("div");i.a.render(r.a.createElement(t,{message:e,type:n,container:a}),a),document.body.appendChild(a),this.stack.length>0&&this._remove(),this.stack.push(a)}}]),t}();t.a=u,u.propTypes={message:c.a.string.isRequired,type:c.a.string,container:c.a.object.isRequired},u.defaultProps={type:"success"},u.stack=[]},"6Vhz":function(e,t,n){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var o={500:"Server error 500: Please try again later",404:"some 404 error",422:"some 422 error",401:"You are not logged in!Please log in to upload to the server.",403:"Authorization error: You don't have permission to access that observation."},i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={},this.responses=o,"string"!=typeof t?("object"===(void 0===t?"undefined":a(t))&&(this.errorCode=t.response?t.response.status:-1),this._extractErrors(t)):this.errors={general:[t]}}return r(e,[{key:"all",value:function(){return this.errors}},{key:"first",value:function(e){return this.errors[e][0]}},{key:"fetchCodes",value:function(){return this.responses}},{key:"getField",value:function(e){if(this.errors[e])return this.errors[e]}},{key:"_extractErrors",value:function(e){switch(this.errorCode){case 401:this.errors={general:[this.responses[401]]};break;case 403:this.errors={general:[this.responses[403]]};break;case 404:this.errors={general:[this.responses[404]]};break;case 500:this.errors={general:[this.responses[500]]};break;case 422:var t=e.response.data;t.error?"string"==typeof t.error?this.errors={general:[t.error]}:this.errors=t.error:this.errors=t;break;default:this.errors={general:["Network error!  Please check your internet connection and try again."]}}}},{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"clear",value:function(e){return this.errors.hasOwnProperty(e)&&delete this.errors[e],this}}]),e}();t.a=i},DakW:function(e,t,n){"use strict";var a=n("GiK3");n.n(a);var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.ga&&setTimeout(function(){return window.ga("send","pageview")},2500),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),t}();t.a=r},GzKl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("GiK3"),r=n.n(a),o=n("KSGD"),i=n.n(o),s=n("6Vhz"),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"",errors:new s.a({name:""})},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),c(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{action:"#",onSubmit:function(t){return e.generateTokens(t)},onKeyDown:this.clearError.bind(this)},r.a.createElement("div",{className:"limit-width"},r.a.createElement("div",{className:"field is-horizontal"},r.a.createElement("div",{className:"field-label"},r.a.createElement("label",{className:"label"},"Name")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("input",{type:"text",className:"input"+(this.state.errors.has("name")?" is-danger":""),name:"name",placeholder:"Descriptive name",onChange:function(t){var n=t.target;return e.setState({name:n.value})},value:this.state.name}),this.state.errors.has("name")?r.a.createElement("p",{className:"help is-danger"},this.state.errors.first("name")):null),r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary"},"Generate Tokens")))))))}},{key:"generateTokens",value:function(e){var t=this;e.preventDefault(),axios.post("/web/oauth/personal-tokens",{name:this.state.name}).then(function(e){t.state.errors.clear("name"),t.setState({name:""}),t.props.onCreate(e.data.data)}).catch(function(e){t.setState({errors:new s.a(e)})})}},{key:"clearError",value:function(e){this.state.errors.clear(e.nativeEvent.target.name)}}]),t}(),u=l;l.propTypes={onCreate:i.a.func.isRequired};var m=n("saAw"),f=n("cabM"),h=n("TIMf"),p=n("5zKI"),v=n("OE/d"),d=n("DakW"),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tokens:[],loading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d["a"]),b(t,[{key:"componentDidMount",value:function(){this.loadTokens()}},{key:"loadTokens",value:function(){var e=this;this.setState({loading:!0}),axios.get("/web/oauth/personal-tokens").then(function(t){var n=t.data;e.setState({loading:!1,tokens:n.data.map(e.setUpToken)})}).catch(function(t){e.setState({loading:!1}),console.log(t)})}},{key:"setUpToken",value:function(e){return e.show=!1,e}},{key:"toggleToken",value:function(e){this.setState({tokens:this.state.tokens.map(function(t){return t.id===e.id&&(t.show=!e.show),t})})}},{key:"delete",value:function(e){var t=this;confirm('Are you sure you want to delete "'+e.name+'"?')&&axios.delete("/web/oauth/personal-token/"+e.id).then(function(n){p.a.push("Token "+e.name+" was deleted successfully"),t.setState({tokens:t.state.tokens.filter(function(t){return t.id!==e.id})})}).catch(function(e){p.a.push("An error occurred while deleting the token. Please try again later.","danger"),console.log(e)})}},{key:"renderTokensTable",value:function(){var e=this;if(!(this.state.tokens.length<=0))return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"token"),r.a.createElement("th",null,"Expiration Date"),r.a.createElement("th",{className:"has-text-right"},"Actions"))),r.a.createElement("tbody",null,this.state.tokens.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.show?r.a.createElement("div",null,r.a.createElement("textarea",{className:"textarea",readOnly:!0},t.access_token),r.a.createElement("a",{href:"javascript:;",style:{marginLeft:3},onClick:function(){return e.toggleToken(t)}},"hide")):r.a.createElement("div",null,[1,2,3,4,5,6].map(function(e,t){return r.a.createElement("small",{style:{fontSize:9},key:t},r.a.createElement("i",{className:"fa fa-circle",style:{marginRight:1}}))}),r.a.createElement("a",{href:"javascript:;",style:{marginLeft:3},onClick:function(){return e.toggleToken(t)}},"show"))),r.a.createElement("td",null,t.expires_at),r.a.createElement("td",{className:"has-text-right"},r.a.createElement("button",{type:"button",className:"button is-outlined is-small is-danger",onClick:function(){return e.delete(t)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fa fa-trash"})))))})))}},{key:"renderAuthenticated",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"box"},r.a.createElement("h3",{className:"title is-5"},"API Tokens"),this.state.tokens.length<=0&&!this.state.loading?r.a.createElement("div",{className:"alert is-warning"},"You have no API tokens. Use the form below to create a new one."):this.renderTokensTable()),r.a.createElement("div",{className:"box"},r.a.createElement("h3",{className:"title is-5"},"Create New API Tokens"),r.a.createElement(u,{onCreate:function(t){p.a.push("Token created successfully!","success"),e.setState({tokens:[e.setUpToken(t)].concat(e.state.tokens)})}})))}},{key:"renderUnauthenticated",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"alert is-danger mb-none"},"Please ",r.a.createElement("a",{href:"/login"},"login")," to view this page.")))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null),r.a.createElement("div",{className:"home-section short-content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-12"},r.a.createElement("h1",{className:"title is-3"},"Developer Dashboard"),v.a.authenticated()?this.renderAuthenticated():this.renderUnauthenticated())))),r.a.createElement(h.a,null),r.a.createElement(m.a,{visibile:this.state.loading}))}}]),t}();t.default=y},IFrJ:function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setPath()}return a(e,[{key:"setPath",value:function(){this.path=window.location.pathname,"/"!==this.path&&this.path.replace(/\/$/g,"")}},{key:"isActive",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is-active";return this.setPath(),t&&this.path===e?n:!t&&this.path.indexOf(e)>=0?n:null}},{key:"parseUrl",value:function(e){var t={};return(e=e.substr(1)).split("&").forEach(function(e){if(e){var n=(e=e.split("+").join(" ")).indexOf("="),a=n>-1?e.substr(0,n):e,r=n>-1?decodeURIComponent(e.substr(n+1)):"",o=a.indexOf("[");if(-1===o)t[decodeURIComponent(a)]=r;else{var i=a.indexOf("]",o),s=decodeURIComponent(a.substring(o+1,i));a=decodeURIComponent(a.substring(0,o)),t[a]||(t[a]=[]),s?t[a][s]=r:t[a].push(r)}}}),t}}]),e}();t.a=new r},"OE/d":function(e,t,n){"use strict";var a=n("t4LX"),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t&&(t=JSON.parse(JSON.stringify(window.TreeSnap))),this._role=null!==t.role?t.role.toLowerCase():null,this._isLoggedIn=t.loggedIn,this._isAdmin="admin"===this._role,this._isScientist="scientist"===this._role,this._user=t.user,this._groups=[],this._abilities={member:[],owner:[],admin:[]},this._role&&(this._role=this._role.toLowerCase()),this.initAbilities(),this.loadGroups(),a.a.listen("user.groups.updated",this.loadGroups.bind(this))}return o(e,[{key:"initAbilities",value:function(){this._abilities.user=["create notes","create collections","flag observations"],this._abilities.scientist=["contact users","confirm species","access admin pages","view accurate location"].concat(this._abilities.user),this._abilities.admin=["manage users","delete observations","manage events"].concat(this._abilities.scientist)}},{key:"loadGroups",value:function(){var e=this;this.authenticated()&&axios.get("/web/groups?with_users=1").then(function(t){e._groups=t.data.data.map(function(e){return{id:e.id,users:e.users.map(function(e){return e.id})}})}).catch(function(e){console.log(e)})}},{key:"can",value:function(e){return!(!this.authenticated()||null===this._role)&&this._abilities[this._role].indexOf(e)>-1}},{key:"owns",value:function(e,t){return void 0===t&&(t="user_id"),"object"===(void 0===e?"undefined":r(e))?Array.isArray(e)?e.every(this.owns.bind(this)):void 0!==e[t]&&e[t]===this._user.id:"number"==typeof e&&this._user.id===e}},{key:"inGroupWith",value:function(e){for(var t in this._groups)if(this._groups[t].users.indexOf(e)>-1)return!0;return!1}},{key:"inGroup",value:function(e){for(var t in this._groups)if(this._groups[t].id===e)return!0;return!1}},{key:"authenticated",value:function(){return this._isLoggedIn}},{key:"admin",value:function(){return this._isAdmin}},{key:"scientist",value:function(){return this._isScientist}},{key:"role",value:function(){return this._role}},{key:"user",value:function(){return this._user}}]),e}();t.a=new i},TIMf:function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("OE/d"),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),i(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns has-text-centered"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",null,r.a.createElement("b",null,"Site Map")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/map"},"Observations Map")),o.a.authenticated()?r.a.createElement("li",null,r.a.createElement("a",{href:"/account"},"Your Account")):null,o.a.authenticated()?null:r.a.createElement("li",null,r.a.createElement("a",{href:"/register"},"Registration")),o.a.authenticated()?null:r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/developer"},"Developer")))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",null,r.a.createElement("b",null,"Resources")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/partners"},"About Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact"},"Contact US")),r.a.createElement("li",null,r.a.createElement("a",{href:"/about"},"Scientific Partners")),r.a.createElement("li",null,r.a.createElement("a",{href:"/trees"},"The Trees of TreeSnap")),r.a.createElement("li",null,r.a.createElement("a",{href:"/faq"},"Frequently Asked Questions")))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",{className:"mb-1"},r.a.createElement("b",null,"Legal")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/privacy-policy"},"Privacy Policy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/terms-of-use"},"Terms of Use"))))),r.a.createElement("div",{className:"columns logos"},r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.utk.edu/"},r.a.createElement("img",{src:"/images/ut3.png",alt:"University of Tennessee Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://uky.edu"},r.a.createElement("img",{src:"/images/uky3.png",alt:"University of Kentucky Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.nsf.gov/"},r.a.createElement("img",{src:"/images/nsf1.png",alt:"NSF Logo"})))),r.a.createElement("p",{className:"has-text-centered"},"Copyright © ",(new Date).getFullYear()," University of Tennessee Knoxville and University of Kentucky.")))}}]),t}();t.a=s},cabM:function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("KSGD"),i=n.n(o),s=n("IFrJ"),c=n("F8kA"),l=n("OE/d"),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isActive:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),u(t,[{key:"toggle",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"+(this.props.home?" home-nav":"")},r.a.createElement("div",{className:this.props.container?"container is-fluid":"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(c.c,{to:"/",className:"navbar-item"},r.a.createElement("img",{src:"/logo/ts-logo-"+(this.props.home?"48":"32")+".png",alt:"Logo",className:"logo-img"}),r.a.createElement("span",{className:"logo-text"},r.a.createElement("b",null,"Tree"),r.a.createElement("span",{style:{fontWeight:300}},"Snap"))),r.a.createElement("div",{className:"navbar-burger",onClick:this.toggle.bind(this)},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"+(this.state.isActive?" is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{href:"https://www.facebook.com/treesnapapp/",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("a",{href:"https://twitter.com/Treesnapapp",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-twitter"})))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement(c.c,{exact:!0,to:"/",className:"navbar-item",activeClassName:"is-active"},"Home"),r.a.createElement(c.c,{to:"/map",className:"navbar-item",activeClassName:"is-active"},"Map"),r.a.createElement(c.c,{to:"/partners",className:"navbar-item",activeClassName:"is-active"},"Scientific Partners"),r.a.createElement(c.c,{to:"/about",className:"navbar-item",activeClassName:"is-active"},"About"),l.a.authenticated()?r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement(c.c,{to:"/account",className:"navbar-link",activeClassName:"is-active"},"Account"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(c.c,{to:"/account/observations",className:"navbar-item",activeClassName:"is-active"},"My Observations"),r.a.createElement(c.c,{to:"/account/groups",className:"navbar-item",activeClassName:"is-active"},"Groups"),r.a.createElement(c.c,{to:"/account/collections",className:"navbar-item",activeClassName:"is-active"},"Collections"),r.a.createElement(c.c,{to:"/account/filters",className:"navbar-item",activeClassName:"is-active"},"Filters"),r.a.createElement("hr",{className:"navbar-divider"}),r.a.createElement(c.c,{to:"/account",className:"navbar-item",activeClassName:"is-active"},"Settings"),r.a.createElement("a",{href:"/logout",className:"navbar-item"},"Logout"))):null,l.a.authenticated()?null:r.a.createElement("a",{href:"/login",className:"navbar-item "+s.a.isActive("/login")},"Login"),l.a.authenticated()?null:r.a.createElement("a",{href:"/register",className:"navbar-item "+s.a.isActive("/register")},"Register"),l.a.can("access admin pages")?r.a.createElement("a",{href:"/admin",className:"navbar-item "+s.a.isActive("/admin",!1)},"Admin"):null))))}}]),t}();t.a=m,m.propTypes={container:i.a.bool,home:i.a.bool},m.defaultProps={container:!1,home:!1}},saAw:function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("KSGD"),i=n.n(o),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),s(t,[{key:"render",value:function(){return this.props.visible?this.props.inline?r.a.createElement("div",{className:"mt-1",style:this.props.containerStyle},r.a.createElement("i",{className:"fa fa-refresh fa-spin fa-2x"})):r.a.createElement("div",{className:"spinner-overlay",style:this.props.containerStyle},r.a.createElement("div",{className:"overlay-blur"}),r.a.createElement("span",{className:"spinner-container"},r.a.createElement("i",{className:"is-loading"}))):null}}]),t}();t.a=c,c.propTypes={visible:i.a.bool.isRequired,containerStyle:i.a.object,inline:i.a.bool},c.defaultProps={containerStyle:{},inline:!1}},t4LX:function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"emit",value:function(e){var t=void 0;document.createEvent?(t=new Event(e),document.dispatchEvent(t)):(t=document.createEventObject(),document.fireEvent("on"+e,t))}},{key:"listen",value:function(e,t){document.addEventListener(e,t)}},{key:"remove",value:function(e,t){document.removeEventListener(e,t)}}]),e}();t.a=new r}});