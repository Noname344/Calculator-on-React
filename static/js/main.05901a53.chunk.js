(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),App=function(_Component){Object(C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(e){var t;return Object(C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(t=_super.call(this,e)).reset=function(){t.setState({result:"0"})},t.handleKey=function(e){var n=e.key||e,_=t.state.result,a=_.split(/[*/+\-%]/);/Enter|=/.test(n)?t.calculate():/^c$|^\u0441$/i.test(n)?t.reset():/Backspace/.test(n)?t.clearLastChar():_.length<=47&&/[*/+\-%().]|^\d$/.test(n)&&(/error|infinity|-infinity|NaN|undefined/i.test(_)||/\d/.test(n)&&"0"===_?t.setState({result:n}):"."===n&&_.match(/\d$/)&&!/[d.]/.test(a[a.length-1])?t.setState({result:_+n}):("+"!==n||"0"===_||/[*./+\-(%]$/.test(_))&&("-"!==n||"0"===_||/[*./+\-(%]$/.test(_))&&("*"!==n||"0"===_||/[*./+\-(%]$/.test(_))&&("/"!==n||"0"===_||/[*./+\-(%]$/.test(_))&&("%"!==n||"0"===_||/[*./+\-(%]$/.test(_))?")"===n&&/\(/.test(_)&&!/\)/.test(_)&&!/\(/.test(a[a.length-1])&&_.match(/\d$/)||")"===n&&_.match(/\d$/)&&/\(/.test(_)&&!/\(/.test(a[a.length-1])&&_.match(/\(/g).length!==_.match(/\)/g).length?t.setState({result:_+n}):"("===n&&"0"===_?t.setState({result:n}):("("===n&&"0"!==_&&!/[(.]$/.test(_)&&/[*/+\-%]$/.test(_)||"0"===n&&"0"!==_&&!/[(.]$/.test(_)&&/[*/+\-%]$/.test(_)||/\d/.test(n)&&!/\)$/.test(_))&&t.setState({result:_+n}):t.setState({result:_+n}))},t.state={result:"0"},t}return Object(C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"calculate",value:function calculate(){try{var x=eval(this.state.result).toString(),Rnd=x.length>13?Number(x).toPrecision(13):x;this.setState({result:Rnd})}catch(e){this.setState({result:"error"})}}},{key:"clearLastChar",value:function(){/error|infinity|-infinity|NaN|undefined/i.test(this.state.result)?this.reset():this.setState({result:this.state.result.substring(0,this.state.result.length-1)||"0"})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKey)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.handleKey}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(e,t,n){"use strict";var _=n(1),a=n(2),r=n(4),o=n(3),s=n(0),c=n.n(s),l=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.result;return c.a.createElement("div",{className:"result"},c.a.createElement("p",null,e))}}]),n}(s.Component);t.a=l},function(e,t,n){"use strict";var _=n(1),a=n(2),r=n(4),o=n(3),s=n(0),c=n.n(s),l=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"button"},c.a.createElement("button",{name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),c.a.createElement("button",{name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),c.a.createElement("button",{className:"width2",name:"Backspace",style:{fontSize:"38px",padding:"15.7px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"\u21a4"),c.a.createElement("button",{name:"%",onClick:function(t){return e.props.onClick(t.target.name)}},"%"),c.a.createElement("button",{name:"*",style:{fontSize:"45px",padding:"8.8px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"*"),c.a.createElement("button",{name:"/",style:{fontSize:"36px",padding:"16.6px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"/"),c.a.createElement("button",{name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),c.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),c.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),c.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),c.a.createElement("button",{name:"-",style:{fontSize:"55px",padding:"7.27px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"-"),c.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),c.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),c.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),c.a.createElement("button",{name:"+",style:{fontSize:"53px",padding:"7.54px 0",fontWeight:"normal"},onClick:function(t){return e.props.onClick(t.target.name)}},"+"),c.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),c.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),c.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),c.a.createElement("button",{name:"=",className:"height2",style:{fontSize:"40px",padding:"10px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"="),c.a.createElement("button",{name:"0",className:"width2",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),c.a.createElement("button",{name:".",style:{fontSize:"45px",padding:"8.8px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"."))}}]),n}(s.Component);t.a=l},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var _=n(0),a=n.n(_),r=n(6),o=n.n(r),s=n(7);o.a.render(a.a.createElement(s.a,null),document.getElementById("root"))},,,,,function(e,t,n){}],[[10,1,2]]]);
//# sourceMappingURL=main.05901a53.chunk.js.map