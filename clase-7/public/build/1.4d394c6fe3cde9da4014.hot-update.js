webpackHotUpdate(1,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _arguments = arguments;\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(33);\n\nvar _reactRedux = __webpack_require__(172);\n\nvar _redux = __webpack_require__(179);\n\nvar _reduxDevtools = __webpack_require__(195);\n\nvar _reduxDevtoolsLogMonitor = __webpack_require__(323);\n\nvar _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);\n\nvar _reduxDevtoolsDockMonitor = __webpack_require__(494);\n\nvar _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Creamos un componente\nvar Counter = function Counter(_ref) {\n\tvar value = _ref.value;\n\tvar dispatch = _ref.dispatch;\n\n\tconsole.log('Rendering state', _arguments);\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t'h1',\n\t\t\t{ onClick: function onClick(e) {\n\t\t\t\t\treturn dispatch({\n\t\t\t\t\t\ttype: 'INCREMENT'\n\t\t\t\t\t});\n\t\t\t\t} },\n\t\t\tvalue\n\t\t)\n\t);\n};\n\n// Reducer\nfunction increment(state, action) {\n\tconsole.log(state, action);\n\n\tif (action.type === 'INCREMENT') {\n\t\treturn { value: state.value + (action.i || 1) };\n\t} else {\n\t\treturn { value: 0 };\n\t}\n}\n\n// Creamos un store\nvar DevTools = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(\n\t_reduxDevtoolsDockMonitor2.default,\n\t{ toggleVisibilityKey: 'ctrl-h', changePositionKey: 'ctrl-q' },\n\t_react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)\n));\nvar store = (0, _redux.createStore)(increment, DevTools.instrument());\n\n// Conectar un componente a store\nfunction mapStateToProps(state) {\n\treturn { value: state.value };\n}\n// Conectar un componente a funciones propias\nfunction mapDispatchToProps(dispatch) {\n\treturn {\n\t\tincrement: function increment() {\n\t\t\tvar i = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];\n\n\t\t\tdispatch({\n\t\t\t\ttype: 'INCREMENT',\n\t\t\t\ti: i\n\t\t\t});\n\t\t}\n\t};\n}\nCounter = (0, _reactRedux.connect)(mapStateToProps)(Counter);\n\n// Rendereamos\n(0, _reactDom.render)(_react2.default.createElement(\n\t_reactRedux.Provider,\n\t{ store: store },\n\t_react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(Counter, null),\n\t\t_react2.default.createElement(DevTools, null)\n\t)\n), document.getElementById('root'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./frontend/dispatcher-with-tools.jsx\n ** module id = 0\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./frontend/dispatcher-with-tools.jsx?");

/***/ }
])