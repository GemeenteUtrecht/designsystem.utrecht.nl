function l(t,r){if(t==null)return{};var n={},e=Object.keys(t),o,i;for(i=0;i<e.length;i++)o=e[i],!(r.indexOf(o)>=0)&&(n[o]=t[o]);return n}function c(t,r){if(t==null)return{};var n=l(t,r),e,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],!(r.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}function f(t){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},f(t)}function a(t,r){if(f(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var e=n.call(t,r||"default");if(f(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function y(t){var r=a(t,"string");return f(r)==="symbol"?r:String(r)}function b(t,r,n){return r=y(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function u(t){var r,n,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=u(t[r]))&&(e&&(e+=" "),e+=n);else for(r in t)t[r]&&(e&&(e+=" "),e+=r);return e}function p(){for(var t,r,n=0,e="";n<arguments.length;)(t=arguments[n++])&&(r=u(t))&&(e&&(e+=" "),e+=r);return e}export{f as _,c as a,b,p as c,y as d};
//# sourceMappingURL=clsx.m-59171c9b.js.map