(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Badge"] = factory();
	else
		root["Badge"] = factory();
})(this, function() {
return webpackJsonpBadge([2],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var $ = __webpack_require__(1);
function test() {
	return 123;
}

/***/ })

},[2]);
});