"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[1615],{"../web-component-library-stencil/dist/esm/clsx.m-071989db.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function clsx(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}__webpack_require__.d(__webpack_exports__,{c:()=>clsx})},"../web-component-library-stencil/dist/esm/utrecht-backdrop.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_backdrop:()=>Backdrop});var _index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-component-library-stencil/dist/esm/index-b6f2699c.js"),_clsx_m_071989db_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-071989db.js");const Backdrop=class{constructor(hostRef){(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}render(){const{viewport}=this;return(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_clsx_m_071989db_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-backdrop",viewport&&"utrecht-backdrop--viewport")},(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}};Backdrop.style=".utrecht-backdrop{background-color:var(--utrecht-backdrop-background-color);bottom:0;color:var(--utrecht-backdrop-color);display:block;left:0;opacity:var(--utrecht-backdrop-opacity);position:absolute;right:0;top:0;user-select:none;z-index:var(--utrecht-backdrop-z-index)}.utrecht-backdrop--viewport{position:fixed}:host{display:block}:host([hidden]){display:none !important}"}}]);