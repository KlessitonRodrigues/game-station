/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI/base/DynamicBg/index.tsx":
/*!*****************************************!*\
  !*** ./src/UI/base/DynamicBg/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/DynamicBg/styled.ts\");\n\n\nconst DynamicBg = (props) => {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_1__.Container, Object.assign({}, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_1__.Effects, Object.assign({}, props)) })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicBg);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/DynamicBg/index.tsx?");

/***/ }),

/***/ "./src/UI/base/DynamicBg/styled.ts":
/*!*****************************************!*\
  !*** ./src/UI/base/DynamicBg/styled.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Effects\": () => (/* binding */ Effects)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ gradient, img, layer }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    z-index: ${layer || -1};\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    background-image: ${gradient};\n    background-size: 400% 400%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n\n    ${img &&\n        styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n      background-image: url(${img});\n      background-size: cover;\n      filter: brightness(0.45);\n    `}\n  `;\n});\nconst Effects = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ blurBg }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    height: 100%;\n    transition: backdrop-filter 0.1s ease-out;\n    ${blurBg && 'backdrop-filter: blur(40px);'}\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/DynamicBg/styled.ts?");

/***/ }),

/***/ "./src/UI/base/GamepadButtons/index.tsx":
/*!**********************************************!*\
  !*** ./src/UI/base/GamepadButtons/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/Icons */ \"./src/UI/base/GamepadButtons/services/Icons.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/GamepadButtons/styled.ts\");\n\n\n\n\nconst GamepadButtons = (props) => {\n    const { buttons } = props;\n    const MappedButtons = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {\n        return buttons === null || buttons === void 0 ? void 0 : buttons.map(btn => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_3__.Button, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_services_Icons__WEBPACK_IMPORTED_MODULE_2__.RoundedIcon, { content: btn.content }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_3__.ButtonLabel, { children: btn.label })] }, btn.label)));\n    }, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_3__.Container, { children: MappedButtons });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamepadButtons);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/GamepadButtons/index.tsx?");

/***/ }),

/***/ "./src/UI/base/GamepadButtons/services/Icons.tsx":
/*!*******************************************************!*\
  !*** ./src/UI/base/GamepadButtons/services/Icons.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RoundedIcon\": () => (/* binding */ RoundedIcon)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\nconst RoundedIcon = (props) => {\n    const { content } = props;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", Object.assign({ style: { display: 'block', width: '1.8rem' } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"svg\", Object.assign({ width: \"100%\", height: \"100%\", viewBox: \"0 0 64 64\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"circle\", { id: \"Oval\", fill: \"none\", cx: \"31\", cy: \"31\", r: \"27.841\", style: { strokeWidth: '4px', stroke: '#999' }, transform: \"matrix(0.910153, 0, 0, 0.89304, 3.448403, 3.713665)\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"text\", Object.assign({ style: {\n                        fill: '#DDD',\n                        fontFamily: 'FreeSans',\n                        fontSize: '32.4528px',\n                        fontWeight: 'bold',\n                        whiteSpace: 'pre',\n                    }, transform: \"matrix(1.478571, 0, 0, 1.232558, -10.114382, -9.312138\", x: \"19.5\", y: \"44\" }, { children: content }))] })) })));\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/GamepadButtons/services/Icons.tsx?");

/***/ }),

/***/ "./src/UI/base/GamepadButtons/styled.ts":
/*!**********************************************!*\
  !*** ./src/UI/base/GamepadButtons/styled.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"ButtonLabel\": () => (/* binding */ ButtonLabel),\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    position: fixed;\n    bottom: ${theme.size(6)};\n    left: 50%;\n    display: flex;\n    gap: ${theme.size(4)};\n    height: ${theme.size(8)};\n    translate: -50%;\n  `;\n});\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    display: flex;\n    align-items: center;\n    gap: ${theme.size(1)};\n  `;\n});\nconst ButtonLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    font-size: ${theme.fontSize.label};\n    padding-bottom: ${theme.size(0.75)};\n    color: ${theme.colors.text3};\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/GamepadButtons/styled.ts?");

/***/ }),

/***/ "./src/UI/base/Icons/index.tsx":
/*!*************************************!*\
  !*** ./src/UI/base/Icons/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _services_iconMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/iconMap */ \"./src/UI/base/Icons/services/iconMap.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/Icons/styled.ts\");\n\n\n\nconst Icons = (props) => {\n    const { type, size, style } = props;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.Container, Object.assign({ size: size, style: style }, { children: _services_iconMap__WEBPACK_IMPORTED_MODULE_1__.iconMap[type] })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Icons/index.tsx?");

/***/ }),

/***/ "./src/UI/base/Icons/services/iconMap.tsx":
/*!************************************************!*\
  !*** ./src/UI/base/Icons/services/iconMap.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"iconMap\": () => (/* binding */ iconMap)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n\n\n\nconst iconMap = {\n    games: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiGameFill, {}),\n    apps: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiApps2Fill, {}),\n    music: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiMusic2Fill, {}),\n    midia: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiMovieFill, {}),\n    web: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiEarthFill, {}),\n    news: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiNewspaperFill, {}),\n    theme: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiPaintBrushFill, {}),\n    settings: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiSettings4Fill, {}),\n    user: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiUser2Fill, {}),\n    battery: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiBatteryFill, {}),\n    gamepad: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoGameControllerSharp, {}),\n    search: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiSearchLine, {}),\n    folder: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiFolderFill, {}),\n    file: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiFile2Line, {}),\n    image: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiImage2Fill, {}),\n    'arrow-left': (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiArrowLeftSLine, {}),\n    'arrow-right': (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiArrowRightSLine, {}),\n    usb: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiUsbFill, {}),\n    controls: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoGameControllerSharp, {}),\n    edit: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiPencilLine, {}),\n    spinner: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiLoader5Line, {}),\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Icons/services/iconMap.tsx?");

/***/ }),

/***/ "./src/UI/base/Icons/styled.ts":
/*!*************************************!*\
  !*** ./src/UI/base/Icons/styled.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(props => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n      display: inline-flex;\n      font-size: ${props.theme.size(props.size || 8)};\n    `);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Icons/styled.ts?");

/***/ }),

/***/ "./src/UI/base/If/index.ts":
/*!*********************************!*\
  !*** ./src/UI/base/If/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst If = (props) => (props.check ? props.true || props.children : props.false);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (If);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/If/index.ts?");

/***/ }),

/***/ "./src/UI/base/InputModal/index.tsx":
/*!******************************************!*\
  !*** ./src/UI/base/InputModal/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputModal\": () => (/* binding */ InputModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var src_UI_base_If__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/UI/base/If */ \"./src/UI/base/If/index.ts\");\n/* harmony import */ var _services_ColorInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ColorInput */ \"./src/UI/base/InputModal/services/ColorInput/index.tsx\");\n/* harmony import */ var _services_FileInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/FileInput */ \"./src/UI/base/InputModal/services/FileInput/index.tsx\");\n/* harmony import */ var _services_ImageInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ImageInput */ \"./src/UI/base/InputModal/services/ImageInput/index.tsx\");\n/* harmony import */ var _services_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/TextInput */ \"./src/UI/base/InputModal/services/TextInput/index.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/InputModal/styled.ts\");\n\n\n\n\n\n\n\nconst InputModal = (props) => {\n    const { type, active, title } = props;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object.assign({ check: active }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_6__.Container, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_6__.ModalBg, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_6__.Modal, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_6__.Title, { children: title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { check: type === 'text', true: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_services_TextInput__WEBPACK_IMPORTED_MODULE_5__.TextInputModal, Object.assign({}, props)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { check: type === 'img', true: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_services_ImageInput__WEBPACK_IMPORTED_MODULE_4__.ImageInputModal, Object.assign({}, props)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { check: type === 'file', true: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_services_FileInput__WEBPACK_IMPORTED_MODULE_3__.FileInputModal, Object.assign({}, props)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { check: type === 'color', true: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_services_ColorInput__WEBPACK_IMPORTED_MODULE_2__.ColorInputModal, Object.assign({}, props)) })] }) }) }) })));\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/index.tsx?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/ColorInput/index.tsx":
/*!**************************************************************!*\
  !*** ./src/UI/base/InputModal/services/ColorInput/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorInputModal\": () => (/* binding */ ColorInputModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useUIState */ \"./src/hooks/useUIState/index.tsx\");\n/* harmony import */ var src_utils_constants_gradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/constants/gradient */ \"./src/utils/constants/gradient.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/InputModal/services/ColorInput/styled.ts\");\n\n\n\n\n\n\nconst colors = Object.keys(src_utils_constants_gradient__WEBPACK_IMPORTED_MODULE_4__.bgGradientList);\nconst ColorInputModal = (props) => {\n    const { active, value, onChange } = props;\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const { option, setUI } = (0,src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        if (active) {\n            onPressed('ArrowLeft', () => setUI('option', option - 1));\n            onPressed('ArrowRight', () => option < 11 && setUI('option', option + 1));\n            onPressed('ButtonA', () => onChange(colors[option]));\n        }\n    }, [onPressed]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.Container, { children: Object.values(src_utils_constants_gradient__WEBPACK_IMPORTED_MODULE_4__.bgGradientList).map((color, i) => {\n            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.ColorItem, { selected: option === i, bg: color }, color);\n        }) }));\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/ColorInput/index.tsx?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/ColorInput/styled.ts":
/*!**************************************************************!*\
  !*** ./src/UI/base/InputModal/services/ColorInput/styled.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorItem\": () => (/* binding */ ColorItem),\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    display: flex;\n    flex-wrap: wrap;\n    gap: ${theme.size(2)};\n    width: 100%;\n  `;\n});\nconst ColorItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme, bg, selected }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: ${theme.size(16)};\n    height: ${theme.size(16)};\n    border-radius: ${theme.radius.medium};\n    box-shadow: ${theme.shadow.medium};\n    background: ${bg};\n    ${selected && ` border: 2px solid ${theme.colors.white};`}\n  `);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/ColorInput/styled.ts?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/FileInput/index.tsx":
/*!*************************************************************!*\
  !*** ./src/UI/base/InputModal/services/FileInput/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileInputModal\": () => (/* binding */ FileInputModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/Icons */ \"./src/UI/base/Icons/index.tsx\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hooks/useUIState */ \"./src/hooks/useUIState/index.tsx\");\n/* harmony import */ var src_utils_electron_nodeJS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/electron/nodeJS */ \"./src/utils/electron/nodeJS.ts\");\n/* harmony import */ var _services_fileName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/fileName */ \"./src/UI/base/InputModal/services/FileInput/services/fileName.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/InputModal/services/FileInput/styled.ts\");\n\n\n\n\n\n\n\n\nconst FileInputModal = (props) => {\n    const { active, onChange } = props;\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { focus, setUI } = (0,src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('/');\n    const [dirsNames, setDirNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        if (active) {\n            onPressed('ArrowUp', () => setUI('focus', focus - 1));\n            onPressed('ArrowDown', () => setUI('focus', focus + 1));\n            onPressed('ArrowRight', () => {\n                setPath(src_utils_electron_nodeJS__WEBPACK_IMPORTED_MODULE_5__.nodeJS.resolvePath(path + '/' + dirsNames[focus]));\n                setUI('focus', 0);\n            });\n            onPressed('ArrowLeft', () => {\n                setPath(src_utils_electron_nodeJS__WEBPACK_IMPORTED_MODULE_5__.nodeJS.resolvePath(path + '/..'));\n                setUI('focus', 0);\n            });\n            onPressed('ButtonA', () => onChange(path + '/' + dirsNames[focus]));\n        }\n    }, [onPressed]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        const dirPath = src_utils_electron_nodeJS__WEBPACK_IMPORTED_MODULE_5__.nodeJS.resolvePath(path);\n        const dirSubPaths = src_utils_electron_nodeJS__WEBPACK_IMPORTED_MODULE_5__.nodeJS.listDir(dirPath);\n        setDirNames(dirSubPaths);\n    }, [path]);\n    const dirList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {\n        return dirsNames.map((name, i) => {\n            const { isFile, isExe } = (0,_services_fileName__WEBPACK_IMPORTED_MODULE_6__.checkFileName)(name);\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_7__.Dir, Object.assign({ active: focus === i }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { type: isFile ? 'file' : 'folder' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_7__.DirName, { children: name })] }), name + i));\n        });\n    }, [dirsNames, focus]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_7__.Container, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_7__.Path, { children: path }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_7__.Directories, { children: dirList })] }));\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/FileInput/index.tsx?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/FileInput/services/fileName.ts":
/*!************************************************************************!*\
  !*** ./src/UI/base/InputModal/services/FileInput/services/fileName.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkFileName\": () => (/* binding */ checkFileName)\n/* harmony export */ });\nconst checkFileName = (name) => ({\n    isFile: name.includes('.'),\n    isExe: name.includes('.exe'),\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/FileInput/services/fileName.ts?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/FileInput/styled.ts":
/*!*************************************************************!*\
  !*** ./src/UI/base/InputModal/services/FileInput/styled.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Dir\": () => (/* binding */ Dir),\n/* harmony export */   \"DirName\": () => (/* binding */ DirName),\n/* harmony export */   \"Directories\": () => (/* binding */ Directories),\n/* harmony export */   \"Path\": () => (/* binding */ Path)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n  `;\n});\nconst Path = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    padding: ${theme.size(1)} 0;\n    font-size: ${theme.fontSize.small};\n  `;\n});\nconst Directories = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n  `;\n});\nconst Dir = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme, active }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    display: flex;\n    align-items: center;\n    padding: ${theme.size(0.5)} 0;\n    opacity: ${active ? 1 : 0.6};\n  `;\n});\nconst DirName = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    margin-left: ${theme.size(2)};\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/FileInput/styled.ts?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/ImageInput/index.tsx":
/*!**************************************************************!*\
  !*** ./src/UI/base/InputModal/services/ImageInput/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImageInputModal\": () => (/* binding */ ImageInputModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useUIState */ \"./src/hooks/useUIState/index.tsx\");\n/* harmony import */ var src_utils_images_imageCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/images/imageCache */ \"./src/utils/images/imageCache.ts\");\n/* harmony import */ var _services_fetchImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/fetchImages */ \"./src/UI/base/InputModal/services/ImageInput/services/fetchImages.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/InputModal/services/ImageInput/styled.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nconst ImageInputModal = (props) => {\n    const { active, value, onChange } = props;\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const { option, setUI } = (0,src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [lastQuery, setLastQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [urls, setUrls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        if (active) {\n            onPressed('ArrowLeft', () => setUI('option', option - 1));\n            onPressed('ArrowRight', () => {\n                option < urls.length && setUI('option', option + 1);\n            });\n        }\n    }, [onPressed]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        const fetchUrls = () => __awaiter(void 0, void 0, void 0, function* () {\n            const imgUrls = yield (0,_services_fetchImages__WEBPACK_IMPORTED_MODULE_5__.fetchImages)(value);\n            setUrls(imgUrls);\n            setLastQuery(value);\n        });\n        if (active && value.length >= 3 && value !== lastQuery) {\n            fetchUrls().catch(console.error);\n        }\n    }, [active, value]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        onChange && onChange(urls[option]);\n        (0,src_utils_images_imageCache__WEBPACK_IMPORTED_MODULE_4__.fetchImageData)(urls[option]).then(setUrl);\n    }, [option, urls.length]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_6__.ImageBox, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_6__.Image, { src: url }) }));\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/ImageInput/index.tsx?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/ImageInput/services/fetchImages.ts":
/*!****************************************************************************!*\
  !*** ./src/UI/base/InputModal/services/ImageInput/services/fetchImages.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchImages\": () => (/* binding */ fetchImages)\n/* harmony export */ });\n/* harmony import */ var src_utils_electron_nodeJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/electron/nodeJS */ \"./src/utils/electron/nodeJS.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst fetchImages = (search) => __awaiter(void 0, void 0, void 0, function* () {\n    const searchQuery = `${search.toLowerCase()}`;\n    return yield fetchUrls(searchQuery);\n});\nconst fetchUrls = (search) => __awaiter(void 0, void 0, void 0, function* () {\n    const query = search.split(' ').join('+');\n    const page = yield src_utils_electron_nodeJS__WEBPACK_IMPORTED_MODULE_0__.nodeJS.fetchHTML(`http://www.bing.com/images/search?q=${query}`);\n    const imgData = page.replace(/&quot;/g, '\"').match(/\"murl\":\".*?\"/gm);\n    const imgSource = imgData.join(',').match(/\"https:\\/\\/.*?\"/gm);\n    const imgUrl = imgSource.map(url => url.replace(/\\\"/g, ''));\n    return imgUrl;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/ImageInput/services/fetchImages.ts?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/ImageInput/styled.ts":
/*!**************************************************************!*\
  !*** ./src/UI/base/InputModal/services/ImageInput/styled.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Image\": () => (/* binding */ Image),\n/* harmony export */   \"ImageBox\": () => (/* binding */ ImageBox)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst ImageBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: ${theme.size(200)};\n    max-width: ${theme.size(200)};\n    height: ${theme.size(100)};\n    max-height: ${theme.size(100)};\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n  `);\nconst Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img(({ theme }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: ${theme.radius.large};\n    box-shadow: ${theme.shadow.high};\n  `);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/ImageInput/styled.ts?");

/***/ }),

/***/ "./src/UI/base/InputModal/services/TextInput/index.tsx":
/*!*************************************************************!*\
  !*** ./src/UI/base/InputModal/services/TextInput/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextInputModal\": () => (/* binding */ TextInputModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var src_UI_base_Styles_Inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/UI/base/Styles/Inputs */ \"./src/UI/base/Styles/Inputs.ts\");\n\n\nconst TextInputModal = (props) => {\n    const { value, onChange } = props;\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Styles_Inputs__WEBPACK_IMPORTED_MODULE_1__.InputField, { autoFocus: true, value: value, onChange: ev => onChange(ev.target.value) });\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/services/TextInput/index.tsx?");

/***/ }),

/***/ "./src/UI/base/InputModal/styled.ts":
/*!******************************************!*\
  !*** ./src/UI/base/InputModal/styled.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Modal\": () => (/* binding */ Modal),\n/* harmony export */   \"ModalBg\": () => (/* binding */ ModalBg),\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var src_UI_base_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/UI/base/Styles/Animations */ \"./src/UI/base/Styles/Animations.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css ``;\n});\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    width: 100%;\n    height: 100%;\n    max-height: ${theme.size(300)};\n    max-width: ${theme.size(250)};\n    margin: 0 auto;\n    padding: ${theme.size(4)};\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: ${theme.radius.large};\n    animation: ${src_UI_base_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__.Keyframes.slideUpLarge} 0.3s ease-out;\n  `;\n});\nconst ModalBg = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(25px);\n    transition: all 0.1s;\n  `;\n});\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    font-size: ${theme.fontSize.h3};\n    font-weight: bold;\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/InputModal/styled.ts?");

/***/ }),

/***/ "./src/UI/base/Loading/index.tsx":
/*!***************************************!*\
  !*** ./src/UI/base/Loading/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons */ \"./src/UI/base/Icons/index.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/Loading/styled.ts\");\n\n\n\nconst Loading = () => {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_2__.Container, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.Spinner, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"spinner\", size: 12 }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.Title, { children: \"Optimizing Images\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.Description, { children: \"Will happening once only\" })] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Loading/index.tsx?");

/***/ }),

/***/ "./src/UI/base/Loading/styled.ts":
/*!***************************************!*\
  !*** ./src/UI/base/Loading/styled.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Description\": () => (/* binding */ Description),\n/* harmony export */   \"Spinner\": () => (/* binding */ Spinner),\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Styles_Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Styles/Animations */ \"./src/UI/base/Styles/Animations.ts\");\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #000b;\n    backdrop-filter: blur(10px);\n  `;\n});\nconst Spinner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: ${theme.size(8)};\n    animation: ${_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__.Keyframes.spinning} 1s infinite linear;\n  `;\n});\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    font-size: ${theme.fontSize.label};\n    margin-bottom: ${theme.size(2)};\n    animation: ${_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__.Keyframes.slideUpLarge} 0.5s ease-out;\n  `;\n});\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    color: ${theme.colors.text4};\n    font-size: ${theme.fontSize.verySmall};\n    animation: ${_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__.Keyframes.slideUpLarge} 0.5s ease-out;\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Loading/styled.ts?");

/***/ }),

/***/ "./src/UI/base/PageContainer/index.tsx":
/*!*********************************************!*\
  !*** ./src/UI/base/PageContainer/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/PageContainer/styled.ts\");\n\n\nconst PageContainer = (props) => {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_1__.Container, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_1__.Content, { children: props.children }) }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContainer);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/PageContainer/index.tsx?");

/***/ }),

/***/ "./src/UI/base/PageContainer/styled.ts":
/*!*********************************************!*\
  !*** ./src/UI/base/PageContainer/styled.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Content\": () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    max-width: ${theme.size(500)};\n    height: 100%;\n    margin: 0 auto;\n    overflow: hidden;\n  `);\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    height: 100%;\n    padding: ${theme.size(4)};\n  `);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/PageContainer/styled.ts?");

/***/ }),

/***/ "./src/UI/base/Panel/index.tsx":
/*!*************************************!*\
  !*** ./src/UI/base/Panel/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons */ \"./src/UI/base/Icons/index.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/UI/base/Panel/styled.ts\");\n\n\n\nconst Panel = (props) => {\n    const { active, title, value, children } = props;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_2__.Container, Object.assign({ active: active }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_2__.Header, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.Title, { children: title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.Value, { children: value === null || value === void 0 ? void 0 : value.substring(0, 60) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"edit\", size: 6 })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.Content, { children: children })] })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Panel/index.tsx?");

/***/ }),

/***/ "./src/UI/base/Panel/styled.ts":
/*!*************************************!*\
  !*** ./src/UI/base/Panel/styled.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"Header\": () => (/* binding */ Header),\n/* harmony export */   \"Title\": () => (/* binding */ Title),\n/* harmony export */   \"Value\": () => (/* binding */ Value)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme, active }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 75%;\n    margin: 0 auto;\n    padding: ${theme.size(4)};\n    margin-bottom: ${theme.size(4)};\n    color: ${theme.colors.text3};\n    background-color: ${theme.colors.bg4};\n    border-radius: ${theme.radius.medium};\n    transition: 0.5s;\n\n    ${active &&\n        styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n      background-color: ${theme.colors.bg2};\n      color: ${theme.colors.text1};\n      ${Content} {\n        max-height: ${theme.size(120)};\n      }\n    `}\n  `;\n});\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    display: flex;\n    align-items: center;\n    gap: ${theme.size(4)};\n  `;\n});\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    font-size: ${theme.fontSize.h4};\n    font-weight: bold;\n  `;\n});\nconst Value = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    transition: 0.3s;\n    width: 100%;\n  `;\n});\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.5s;\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Panel/styled.ts?");

/***/ }),

/***/ "./src/UI/base/Styles/Animations.ts":
/*!******************************************!*\
  !*** ./src/UI/base/Styles/Animations.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyframes\": () => (/* binding */ Keyframes)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst slideUp = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes `\n    from {transform: translateY(6rem); opacity: 0} \n    to {opacity: 1}\n`;\nconst slideUpLarge = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes `\n    from {transform: translateY(18rem); opacity: 0} \n    to {opacity: 1}\n`;\nconst fadeIn = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes `\n   from {opacity: 0}\n   to {opacity: 1}\n`;\nconst spinning = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes `\n   to {transform: rotateZ(360deg);}\n`;\nconst Keyframes = {\n    slideUp,\n    slideUpLarge,\n    fadeIn,\n    spinning,\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Styles/Animations.ts?");

/***/ }),

/***/ "./src/UI/base/Styles/Inputs.ts":
/*!**************************************!*\
  !*** ./src/UI/base/Styles/Inputs.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputField\": () => (/* binding */ InputField)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst InputField = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    padding: ${theme.size(2)} ${theme.size(1)};\n    border: none;\n    background-color: transparent;\n    color: ${theme.colors.text1};\n    font-size: ${theme.fontSize.h3};\n    border-bottom: 2px solid ${theme.colors.gray};\n    text-transform: capitalize;\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Styles/Inputs.ts?");

/***/ }),

/***/ "./src/UI/base/Styles/Panel.ts":
/*!*************************************!*\
  !*** ./src/UI/base/Styles/Panel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PanelTitle\": () => (/* binding */ PanelTitle),\n/* harmony export */   \"Panels\": () => (/* binding */ Panels)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Panels = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(() => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    height: 100%;\n  `);\nconst PanelTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: fit-content;\n    margin: 0 auto;\n    text-align: center;\n    font-size: ${theme.fontSize.h2};\n    padding-bottom: ${theme.size(2)};\n    margin-bottom: ${theme.size(8)};\n    font-weight: bold;\n    border-bottom: 3px solid ${theme.colors.bg1};\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/base/Styles/Panel.ts?");

/***/ }),

/***/ "./src/UI/components/GameList/index.tsx":
/*!**********************************************!*\
  !*** ./src/UI/components/GameList/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_If__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/If */ \"./src/UI/base/If/index.ts\");\n/* harmony import */ var src_UI_base_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/UI/base/Loading */ \"./src/UI/base/Loading/index.tsx\");\n/* harmony import */ var src_config_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/config/db */ \"./src/config/db.ts\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_useGlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/hooks/useGlobalContext */ \"./src/hooks/useGlobalContext/index.tsx\");\n/* harmony import */ var src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/hooks/useUIState */ \"./src/hooks/useUIState/index.tsx\");\n/* harmony import */ var src_utils_images_imageCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/utils/images/imageCache */ \"./src/utils/images/imageCache.ts\");\n/* harmony import */ var _services_GameListBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/GameListBar */ \"./src/UI/components/GameList/services/GameListBar/index.tsx\");\n/* harmony import */ var _services_GameListGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/GameListGrid */ \"./src/UI/components/GameList/services/GameListGrid/index.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styled */ \"./src/UI/components/GameList/styled.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst GameList = () => {\n    const { focus, loading, setUI } = (0,src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const [global, setGlobal] = (0,src_hooks_useGlobalContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [gameList, setGameList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('grid');\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        onPressed('ButtonX', () => setMode(mode === 'list' ? 'grid' : 'list'));\n    }, [onPressed]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        const games = src_config_db__WEBPACK_IMPORTED_MODULE_4__.dbClient.games.read();\n        setUI('loading', true);\n        (0,src_utils_images_imageCache__WEBPACK_IMPORTED_MODULE_8__.getGamesImageCache)(games)\n            .then(setGameList)\n            .finally(() => setUI('loading', false));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        var _a;\n        const imgBg = (_a = gameList[focus]) === null || _a === void 0 ? void 0 : _a.background;\n        setGlobal(Object.assign(Object.assign({}, global), { imgBg }));\n    }, [focus, gameList]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_11__.Container, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object.assign({ check: mode === 'list' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_services_GameListBar__WEBPACK_IMPORTED_MODULE_9__.GameListBar, { gameList: gameList, gameIndex: focus, onChangeGame: index => index < gameList.length && setUI('focus', index), onStartGame: () => { } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object.assign({ check: mode === 'grid' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_services_GameListGrid__WEBPACK_IMPORTED_MODULE_10__.GameListGrid, { gameList: gameList, gameIndex: focus, onChangeGame: index => index < gameList.length && setUI('focus', index), onStartGame: () => { } }) })), loading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {})] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameList);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/GameList/index.tsx?");

/***/ }),

/***/ "./src/UI/components/GameList/services/GameListBar/index.tsx":
/*!*******************************************************************!*\
  !*** ./src/UI/components/GameList/services/GameListBar/index.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameListBar\": () => (/* binding */ GameListBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_GamepadButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/GamepadButtons */ \"./src/UI/base/GamepadButtons/index.tsx\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_utils_constants_UIButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/constants/UIButtons */ \"./src/utils/constants/UIButtons.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ \"./src/UI/components/GameList/services/GameListBar/styled.ts\");\n\n\n\n\n\n\nconst GameListBar = (props) => {\n    const { gameList, gameIndex, onChangeGame, onStartGame } = props;\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const game = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => gameList[gameIndex], [gameIndex, gameList]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        onPressed('ArrowLeft', () => onChangeGame(gameIndex - 1));\n        onPressed('ArrowRight', () => onChangeGame(gameIndex + 1));\n        onPressed('ButtonStart', () => onStartGame(gameIndex));\n        // nodeJS.exec(`cd ${game.gamePath} && ./${game.gameFile}`);\n    }, [onPressed]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__.Container, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__.Games, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.Cover, Object.assign({ img: game === null || game === void 0 ? void 0 : game.cover }, { children: game === null || game === void 0 ? void 0 : game.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__.Column, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__.Description, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.GameTitle, { children: game === null || game === void 0 ? void 0 : game.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.GameInfo, { children: game === null || game === void 0 ? void 0 : game.publisher })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.CoverList, { children: gameList.map(game => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.CoverListItem, Object.assign({ img: game.cover, focus: gameIndex }, { children: game.name }), game.name))) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_GamepadButtons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { buttons: src_utils_constants_UIButtons__WEBPACK_IMPORTED_MODULE_4__.UIButtons.GameListBar })] }));\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/GameList/services/GameListBar/index.tsx?");

/***/ }),

/***/ "./src/UI/components/GameList/services/GameListBar/styled.ts":
/*!*******************************************************************!*\
  !*** ./src/UI/components/GameList/services/GameListBar/styled.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Column\": () => (/* binding */ Column),\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Cover\": () => (/* binding */ Cover),\n/* harmony export */   \"CoverList\": () => (/* binding */ CoverList),\n/* harmony export */   \"CoverListItem\": () => (/* binding */ CoverListItem),\n/* harmony export */   \"Description\": () => (/* binding */ Description),\n/* harmony export */   \"GameInfo\": () => (/* binding */ GameInfo),\n/* harmony export */   \"GameTitle\": () => (/* binding */ GameTitle),\n/* harmony export */   \"Games\": () => (/* binding */ Games)\n/* harmony export */ });\n/* harmony import */ var src_UI_base_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/UI/base/Styles/Animations */ \"./src/UI/base/Styles/Animations.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: flex-end;\n  `;\n});\nconst Games = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    width: 100%;\n    display: flex;\n    gap: ${theme.size(8)};\n    height: ${theme.size(120)};\n    margin-bottom: ${theme.size(20)};\n    animation: ${src_UI_base_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__.Keyframes.slideUpLarge} 0.2s ease-out;\n  `;\n});\nconst Cover = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(({ theme, img }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    height: 100%;\n    width: ${theme.size(90)};\n    min-width: ${theme.size(90)};\n    max-width: ${theme.size(90)};\n    background-color: transparent;\n    border-radius: ${theme.radius.large};\n    box-shadow: ${theme.shadow.high};\n    border: 2px solid ${theme.colors.bg1};\n    background-image: url(${img});\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    transition: 0.1s;\n    font-size: ${theme.size(20)};\n    ${img && 'color: transparent;'}\n  `;\n});\nconst Column = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    display: flex;\n    flex-direction: column;\n  `;\n});\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    width: 100%;\n    height: 100%;\n  `;\n});\nconst GameTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    color: ${theme.colors.text1};\n    font-size: ${theme.size(14)};\n  `;\n});\nconst GameInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(({ theme }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    color: ${theme.colors.text3};\n    font-size: ${theme.fontSize.h4};\n  `;\n});\nconst CoverList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    width: 100%;\n    height: 100%;\n    display: flex;\n    overflow: hidden;\n  `;\n});\nconst CoverListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(({ theme, focus, img }) => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n    height: 100%;\n    width: ${theme.size(50)};\n    max-width: ${theme.size(50)};\n    margin-right: ${theme.size(4)};\n    background-color: transparent;\n    border-radius: ${theme.radius.small};\n    box-shadow: ${theme.shadow.high};\n    border: 2px solid ${theme.colors.bg1};\n    background-image: url(${img});\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    font-size: ${theme.size(10)};\n    transition: 0.2s;\n    ${img && 'color: transparent;'}\n\n    :nth-child(-n + ${focus + 1}) {\n      width: 0;\n      margin: 0;\n      border: none;\n      opacity: 0;\n      overflow: hidden;\n    }\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/GameList/services/GameListBar/styled.ts?");

/***/ }),

/***/ "./src/UI/components/GameList/services/GameListGrid/index.tsx":
/*!********************************************************************!*\
  !*** ./src/UI/components/GameList/services/GameListGrid/index.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameListGrid\": () => (/* binding */ GameListGrid)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_GamepadButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/GamepadButtons */ \"./src/UI/base/GamepadButtons/index.tsx\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_utils_constants_UIButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/constants/UIButtons */ \"./src/utils/constants/UIButtons.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ \"./src/UI/components/GameList/services/GameListGrid/styled.ts\");\n\n\n\n\n\n\nconst GameListGrid = (props) => {\n    const { gameList, gameIndex, onChangeGame, onStartGame } = props;\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        const pos = (gameIndex + 1) % 4;\n        onPressed('ArrowLeft', () => pos !== 1 && onChangeGame(gameIndex - 1));\n        onPressed('ArrowRight', () => pos !== 0 && onChangeGame(gameIndex + 1));\n        onPressed('ArrowDown', () => onChangeGame(gameIndex + 4));\n        onPressed('ArrowUp', () => onChangeGame(gameIndex - 4));\n        // onPressed('ButtonStart', () => onStartGame(gameIndex));\n    }, [onPressed]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__.Container, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.Grid, { children: gameList.map(game => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_5__.GridItem, { imgSrc: game.cover, focus: gameIndex }, game.name))) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_GamepadButtons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { buttons: src_utils_constants_UIButtons__WEBPACK_IMPORTED_MODULE_4__.UIButtons.GameListGrid })] }));\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/GameList/services/GameListGrid/index.tsx?");

/***/ }),

/***/ "./src/UI/components/GameList/services/GameListGrid/styled.ts":
/*!********************************************************************!*\
  !*** ./src/UI/components/GameList/services/GameListGrid/styled.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Grid\": () => (/* binding */ Grid),\n/* harmony export */   \"GridItem\": () => (/* binding */ GridItem)\n/* harmony export */ });\n/* harmony import */ var src_UI_base_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/UI/base/Styles/Animations */ \"./src/UI/base/Styles/Animations.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(() => styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: flex-end;\n    `);\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(props => styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n      height: 100%;\n      margin: 0 auto;\n      max-width: ${props.theme.size(400)};\n      display: grid;\n      align-content: flex-start;\n      justify-items: center;\n      grid-template-columns: repeat(4, 1fr);\n      grid-gap: ${props.theme.size(8)};\n      padding: 0 ${props.theme.size(16)};\n      animation: ${src_UI_base_Styles_Animations__WEBPACK_IMPORTED_MODULE_0__.Keyframes.slideUp} 0.2s ease-out;\n    `);\nconst GridItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(props => styled_components__WEBPACK_IMPORTED_MODULE_1__.css `\n      width: ${props.theme.size(80)};\n      height: ${props.theme.size(110)};\n      background-color: transparent;\n      border-radius: ${props.theme.radius.large};\n      box-shadow: ${props.theme.shadow.high};\n      border: 2px solid ${props.theme.colors.bg2};\n      background-image: url(${props.imgSrc});\n      background-repeat: no-repeat;\n      background-size: 100% 100%;\n      font-size: ${props.theme.size(10)};\n      transition: 0.2s;\n      ${props.imgSrc && 'color: transparent;'}\n\n      :nth-child(${props.focus + 1}) {\n        border: 2px solid ${props.theme.colors.gray};\n      }\n    `);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/GameList/services/GameListGrid/styled.ts?");

/***/ }),

/***/ "./src/UI/components/GameList/styled.ts":
/*!**********************************************!*\
  !*** ./src/UI/components/GameList/styled.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(() => {\n    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n  `;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/GameList/styled.ts?");

/***/ }),

/***/ "./src/UI/components/TabHeader/index.tsx":
/*!***********************************************!*\
  !*** ./src/UI/components/TabHeader/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/Icons */ \"./src/UI/base/Icons/index.tsx\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_usePath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hooks/usePath */ \"./src/hooks/usePath/index.tsx\");\n/* harmony import */ var src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hooks/useUIState */ \"./src/hooks/useUIState/index.tsx\");\n/* harmony import */ var _services_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/tabs */ \"./src/UI/components/TabHeader/services/tabs.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ \"./src/UI/components/TabHeader/styled.ts\");\n\n\n\n\n\n\n\n\nconst TabHeader = () => {\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [path, setPath] = (0,src_hooks_usePath__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { option, setUI } = (0,src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        onPressed('ButtonLeft', () => setUI('option', option - 1));\n        onPressed('ButtonRight', () => option < _services_tabs__WEBPACK_IMPORTED_MODULE_6__.tabRoutes.length - 1 && setUI('option', option + 1));\n    }, [onPressed]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        const route = _services_tabs__WEBPACK_IMPORTED_MODULE_6__.tabRoutes[option].route;\n        setPath(route);\n    }, [option]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_7__.Container, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_7__.LeftIcons, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { type: \"user\", size: 7 }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_7__.MiddleTabs, { children: _services_tabs__WEBPACK_IMPORTED_MODULE_6__.tabRoutes.map((tab, i) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_7__.TabsItem, Object.assign({ selected: option === i, onClick: () => setUI('option', i) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { type: tab.name, size: 13 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_7__.TabsItemLabel, { children: tab.name })] }), tab.name))) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_7__.RightIcons, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { type: \"gamepad\", size: 7 }) })] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabHeader);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/TabHeader/index.tsx?");

/***/ }),

/***/ "./src/UI/components/TabHeader/services/tabs.ts":
/*!******************************************************!*\
  !*** ./src/UI/components/TabHeader/services/tabs.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabRoutes\": () => (/* binding */ tabRoutes)\n/* harmony export */ });\nconst tabRoutes = [\n    { name: 'games', route: 'games/list/bar' },\n    { name: 'apps', route: 'apps' },\n    { name: 'music', route: 'music' },\n    { name: 'midia', route: 'midia' },\n    { name: 'web', route: 'web' },\n    { name: 'theme', route: 'theme' },\n    { name: 'controls', route: 'controls' },\n    { name: 'settings', route: 'settings' },\n];\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/TabHeader/services/tabs.ts?");

/***/ }),

/***/ "./src/UI/components/TabHeader/styled.ts":
/*!***********************************************!*\
  !*** ./src/UI/components/TabHeader/styled.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"LeftIcons\": () => (/* binding */ LeftIcons),\n/* harmony export */   \"MiddleTabs\": () => (/* binding */ MiddleTabs),\n/* harmony export */   \"RightIcons\": () => (/* binding */ RightIcons),\n/* harmony export */   \"TabsItem\": () => (/* binding */ TabsItem),\n/* harmony export */   \"TabsItemLabel\": () => (/* binding */ TabsItemLabel)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    max-width: ${theme.size(500)};\n    display: flex;\n    align-items: center;\n    padding: ${theme.size(4)};\n    margin: ${theme.size(2)} auto;\n  `);\nconst LeftIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(() => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    display: flex;\n    align-items: center;\n  `);\nconst RightIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(({ theme }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    display: flex;\n    align-items: center;\n    gap: ${theme.size(4)};\n  `);\nconst MiddleTabs = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(() => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  `);\nconst TabsItemLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(({ theme }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    padding: 0 ${theme.size(2)};\n    font-size: ${theme.fontSize.h1};\n    text-transform: capitalize;\n  `);\nconst TabsItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label(props => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    display: flex;\n    position: relative;\n    align-items: center;\n    color: ${props.theme.colors.bg1};\n    transition: 0.3s ease-out;\n    cursor: pointer;\n\n    :hover {\n      color: ${props.theme.colors.text2};\n    }\n\n    ${props.selected &&\n    styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n      color: ${props.theme.colors.text1};\n      margin-left: ${props.theme.size(15)};\n      margin-right: ${props.theme.size(15)};\n    `}\n\n    ${TabsItemLabel} {\n      width: 0;\n      ${!props.selected && `opacity: 0;`}\n      ${props.selected && `width: ${props.theme.size(25)};`}\n    }\n  `);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/components/TabHeader/styled.ts?");

/***/ }),

/***/ "./src/UI/forms/GameDetails/index.tsx":
/*!********************************************!*\
  !*** ./src/UI/forms/GameDetails/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_GamepadButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/GamepadButtons */ \"./src/UI/base/GamepadButtons/index.tsx\");\n/* harmony import */ var src_UI_base_InputModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/UI/base/InputModal */ \"./src/UI/base/InputModal/index.tsx\");\n/* harmony import */ var src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/UI/base/Panel */ \"./src/UI/base/Panel/index.tsx\");\n/* harmony import */ var src_UI_base_Styles_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/UI/base/Styles/Panel */ \"./src/UI/base/Styles/Panel.ts\");\n/* harmony import */ var src_config_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/config/db */ \"./src/config/db.ts\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/hooks/useUIState */ \"./src/hooks/useUIState/index.tsx\");\n/* harmony import */ var src_utils_constants_UIButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/utils/constants/UIButtons */ \"./src/utils/constants/UIButtons.ts\");\n/* harmony import */ var _services_handleForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/handleForm */ \"./src/UI/forms/GameDetails/services/handleForm.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst GameDetailsForm = () => {\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const { active, focus, setUI } = (0,src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_services_handleForm__WEBPACK_IMPORTED_MODULE_10__.initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        onPressed('ArrowUp', () => setUI('focus', focus - 1));\n        onPressed('ArrowDown', () => setUI('focus', focus + 1));\n        onPressed('ButtonA', () => setUI('active', !active));\n        onPressed('ButtonX', () => src_config_db__WEBPACK_IMPORTED_MODULE_6__.dbClient.games.create({ gameInfo: form }));\n    }, [onPressed]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_UI_base_Styles_Panel__WEBPACK_IMPORTED_MODULE_5__.Panels, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Styles_Panel__WEBPACK_IMPORTED_MODULE_5__.PanelTitle, { children: \"Add New Game\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object.assign({ active: focus === 0, title: \"Title\", value: form.name }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_InputModal__WEBPACK_IMPORTED_MODULE_3__.InputModal, { title: \"Game Title\", type: \"text\", active: focus === 0 && active, value: form.name, onChange: name => setForm(Object.assign(Object.assign({}, form), { name })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object.assign({ active: focus === 1, title: \"Publisher\", value: form.publisher }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_InputModal__WEBPACK_IMPORTED_MODULE_3__.InputModal, { title: \"Game Publisher\", type: \"text\", active: focus === 1 && active, value: form.publisher, onChange: publisher => setForm(Object.assign(Object.assign({}, form), { publisher })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object.assign({ active: focus === 2, title: \"Cover\", value: form.cover }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_InputModal__WEBPACK_IMPORTED_MODULE_3__.InputModal, { title: \"Game Cover\", type: \"img\", active: focus === 2 && active, value: form.name + ' cover', onChange: cover => setForm(Object.assign(Object.assign({}, form), { cover })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object.assign({ active: focus === 3, title: \"Background\", value: form.background }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_InputModal__WEBPACK_IMPORTED_MODULE_3__.InputModal, { title: \"Game Background\", type: \"img\", active: focus === 3 && active, value: form.name + ' background', onChange: background => setForm(Object.assign(Object.assign({}, form), { background })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object.assign({ active: focus === 4, title: \"Location\", value: form.gamePath + form.gameFile }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_InputModal__WEBPACK_IMPORTED_MODULE_3__.InputModal, { title: \"Game Path\", type: \"file\", active: focus === 4 && active, value: form.gamePath, onChange: gameFile => setForm(Object.assign(Object.assign({}, form), { gameFile })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_GamepadButtons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { buttons: src_utils_constants_UIButtons__WEBPACK_IMPORTED_MODULE_9__.UIButtons.GameDetailsForm })] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameDetailsForm);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/forms/GameDetails/index.tsx?");

/***/ }),

/***/ "./src/UI/forms/GameDetails/services/handleForm.ts":
/*!*********************************************************!*\
  !*** ./src/UI/forms/GameDetails/services/handleForm.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": () => (/* binding */ initialState)\n/* harmony export */ });\nconst initialState = {\n    name: '',\n    description: '',\n    cover: '',\n    background: '',\n    publisher: '',\n    rate: '80',\n    addedAt: '',\n    year: '2023',\n    hidden: false,\n    gamePath: '',\n    gameFile: '',\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/forms/GameDetails/services/handleForm.ts?");

/***/ }),

/***/ "./src/UI/forms/ThemeSettings/index.tsx":
/*!**********************************************!*\
  !*** ./src/UI/forms/ThemeSettings/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_InputModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/InputModal */ \"./src/UI/base/InputModal/index.tsx\");\n/* harmony import */ var src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/UI/base/Panel */ \"./src/UI/base/Panel/index.tsx\");\n/* harmony import */ var src_UI_base_Styles_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/UI/base/Styles/Panel */ \"./src/UI/base/Styles/Panel.ts\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/hooks/useUIState */ \"./src/hooks/useUIState/index.tsx\");\n\n\n\n\n\n\n\nconst ThemeSettingsForm = () => {\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { active, focus, setUI } = (0,src_hooks_useUIState__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        onPressed('ArrowUp', () => setUI('focus', focus - 1));\n        onPressed('ArrowDown', () => setUI('focus', focus + 1));\n        onPressed('ButtonA', () => setUI('active', !active));\n        onPressed('ButtonX', () => { });\n    }, [onPressed]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_UI_base_Styles_Panel__WEBPACK_IMPORTED_MODULE_4__.Panels, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Styles_Panel__WEBPACK_IMPORTED_MODULE_4__.PanelTitle, { children: \"Theme Settings\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object.assign({ active: focus === 0, title: \"Title\", value: '' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_InputModal__WEBPACK_IMPORTED_MODULE_2__.InputModal, { title: \"Game Title\", type: \"color\", active: focus === 0 && active, value: '', onChange: name => setForm(Object.assign(Object.assign({}, form), { name })) }) }))] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeSettingsForm);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/forms/ThemeSettings/index.tsx?");

/***/ }),

/***/ "./src/UI/pages/Controls/index.tsx":
/*!*****************************************!*\
  !*** ./src/UI/pages/Controls/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var src_UI_base_PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/UI/base/PageContainer */ \"./src/UI/base/PageContainer/index.tsx\");\n\n\nconst ControlsPage = () => {\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_PageContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {});\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlsPage);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/pages/Controls/index.tsx?");

/***/ }),

/***/ "./src/UI/pages/Games/index.tsx":
/*!**************************************!*\
  !*** ./src/UI/pages/Games/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_If__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/If */ \"./src/UI/base/If/index.ts\");\n/* harmony import */ var src_UI_base_PageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/UI/base/PageContainer */ \"./src/UI/base/PageContainer/index.tsx\");\n/* harmony import */ var src_UI_components_GameList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/UI/components/GameList */ \"./src/UI/components/GameList/index.tsx\");\n/* harmony import */ var src_UI_forms_GameDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/UI/forms/GameDetails */ \"./src/UI/forms/GameDetails/index.tsx\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_usePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/hooks/usePath */ \"./src/hooks/usePath/index.tsx\");\n\n\n\n\n\n\n\n\nconst GamesPage = () => {\n    const [path, setPath] = (0,src_hooks_usePath__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        onPressed('ButtonY', () => {\n            if (path === 'games/add')\n                return setPath('games/list/bar');\n            setPath('games/add');\n        });\n    }, [onPressed]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_UI_base_PageContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { check: path === 'games/list/bar', true: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_components_GameList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { check: path === 'games/list/grid', true: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_components_GameList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_If__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { check: path === 'games/add', true: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_forms_GameDetails__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}) })] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamesPage);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/pages/Games/index.tsx?");

/***/ }),

/***/ "./src/UI/pages/Settings/index.tsx":
/*!*****************************************!*\
  !*** ./src/UI/pages/Settings/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_UI_base_PageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/base/PageContainer */ \"./src/UI/base/PageContainer/index.tsx\");\n/* harmony import */ var src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/UI/base/Panel */ \"./src/UI/base/Panel/index.tsx\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n\n\n\n\n\nconst SettingsPage = () => {\n    const onPressed = (0,src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        onPressed('ArrowUp', () => active > 0 && setActive(active - 1));\n        onPressed('ArrowDown', () => active < 1 && setActive(active + 1));\n    }, [onPressed]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_PageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_Panel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object.assign({ active: active === 0, title: \"Start up time\", value: \"\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: \"Settings\" }) })) }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/pages/Settings/index.tsx?");

/***/ }),

/***/ "./src/UI/pages/Theme/index.tsx":
/*!**************************************!*\
  !*** ./src/UI/pages/Theme/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var src_UI_base_PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/UI/base/PageContainer */ \"./src/UI/base/PageContainer/index.tsx\");\n/* harmony import */ var src_UI_forms_ThemeSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/forms/ThemeSettings */ \"./src/UI/forms/ThemeSettings/index.tsx\");\n\n\n\nconst ThemePage = () => {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_PageContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_forms_ThemeSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}) }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemePage);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/pages/Theme/index.tsx?");

/***/ }),

/***/ "./src/UI/routes/index.tsx":
/*!*********************************!*\
  !*** ./src/UI/routes/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var src_UI_base_DynamicBg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/UI/base/DynamicBg */ \"./src/UI/base/DynamicBg/index.tsx\");\n/* harmony import */ var src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useGamepad */ \"./src/hooks/useGamepad/index.tsx\");\n/* harmony import */ var src_hooks_useGlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useGlobalContext */ \"./src/hooks/useGlobalContext/index.tsx\");\n/* harmony import */ var src_hooks_usePath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hooks/usePath */ \"./src/hooks/usePath/index.tsx\");\n/* harmony import */ var src_styles_globalCSS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/styles/globalCSS */ \"./src/styles/globalCSS.ts\");\n/* harmony import */ var src_styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var src_utils_constants_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/utils/constants/gradient */ \"./src/utils/constants/gradient.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_TabHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TabHeader */ \"./src/UI/components/TabHeader/index.tsx\");\n/* harmony import */ var _pages_Controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Controls */ \"./src/UI/pages/Controls/index.tsx\");\n/* harmony import */ var _pages_Games__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Games */ \"./src/UI/pages/Games/index.tsx\");\n/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Settings */ \"./src/UI/pages/Settings/index.tsx\");\n/* harmony import */ var _pages_Theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/Theme */ \"./src/UI/pages/Theme/index.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Router = () => {\n    const [path] = (0,src_hooks_usePath__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [global] = (0,src_hooks_useGlobalContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_13__.ThemeProvider, Object.assign({ theme: src_styles_theme__WEBPACK_IMPORTED_MODULE_6__.defaultTheme }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_styles_globalCSS__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_hooks_useGamepad__WEBPACK_IMPORTED_MODULE_2__.GamepadProvider, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TabHeader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, Object.assign({ location: { pathname: '/' + path, hash: '', search: '' } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"games/list/bar\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"games/list/grid\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"games/add\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"apps\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"music\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"midia\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"web\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"theme\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Theme__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"controls\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Controls__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, { path: \"settings\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Settings__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}) })] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_base_DynamicBg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { gradient: src_utils_constants_gradient__WEBPACK_IMPORTED_MODULE_7__.bgGradientList[global.gradientBg], img: global.imgBg, layer: -2, blurBg: !path.includes('games/list') })] })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n\n//# sourceURL=webpack://app-desktop/./src/UI/routes/index.tsx?");

/***/ }),

/***/ "./src/config/db.ts":
/*!**************************!*\
  !*** ./src/config/db.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbClient\": () => (/* binding */ dbClient)\n/* harmony export */ });\n/* harmony import */ var app_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app-db */ \"./node_modules/app-db/dist/main.js\");\n/* harmony import */ var app_db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(app_db__WEBPACK_IMPORTED_MODULE_0__);\n// @ts-ignore\n\nconst dbName = 'games_db';\nconst dbClient = app_db__WEBPACK_IMPORTED_MODULE_0___default()({\n    readDB: () => {\n        return JSON.parse(window.localStorage.getItem(dbName) || '{}');\n    },\n    saveDB: (data) => {\n        data.updatedAt = new Date().toISOString();\n        window.localStorage.setItem(dbName, JSON.stringify(data));\n        return data;\n    },\n});\ndbClient.data.testData();\n\n\n//# sourceURL=webpack://app-desktop/./src/config/db.ts?");

/***/ }),

/***/ "./src/hooks/useGamepad/index.tsx":
/*!****************************************!*\
  !*** ./src/hooks/useGamepad/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GamepadProvider\": () => (/* binding */ GamepadProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_gamepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/gamepad */ \"./src/hooks/useGamepad/services/gamepad.ts\");\n\n\n\nconst globalContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(() => { });\nconst GamepadProvider = (props) => {\n    const [pressed, setPressed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const onPressed = (button, cb) => pressed.includes(button) && cb && cb();\n    const onPressedHook = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(onPressed, [pressed]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        window.addEventListener('gamepadconnected', ev => (0,_services_gamepad__WEBPACK_IMPORTED_MODULE_2__.onConnected)(ev, setPressed));\n        window.addEventListener('gamepaddisconnected', _services_gamepad__WEBPACK_IMPORTED_MODULE_2__.onDisconnected);\n    }, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(globalContext.Provider, Object.assign({ value: onPressedHook }, { children: props.children }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(globalContext));\n\n\n//# sourceURL=webpack://app-desktop/./src/hooks/useGamepad/index.tsx?");

/***/ }),

/***/ "./src/hooks/useGamepad/services/gamepad.ts":
/*!**************************************************!*\
  !*** ./src/hooks/useGamepad/services/gamepad.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onConnected\": () => (/* binding */ onConnected),\n/* harmony export */   \"onDisconnected\": () => (/* binding */ onDisconnected)\n/* harmony export */ });\n/* harmony import */ var _gamepadButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamepadButtons */ \"./src/hooks/useGamepad/services/gamepadButtons.ts\");\n\nconst buttonLoop = (gamepadIndex, onPress) => {\n    const lastUpdate = { time: 0, buttons: [''] };\n    return setInterval(() => {\n        const { timestamp, axes, buttons } = navigator.getGamepads()[gamepadIndex];\n        const pressedButtons = [];\n        if (timestamp === lastUpdate.time)\n            return (lastUpdate.time = timestamp);\n        else\n            lastUpdate.time = timestamp;\n        axes.forEach((axis, i) => {\n            if (!(axis === 1 || axis === -1))\n                return false;\n            const axisId = `axis${i}${axis > 0 ? 'Pos' : 'Neg'}`;\n            if (_gamepadButtons__WEBPACK_IMPORTED_MODULE_0__.xboxButtonsId[axisId])\n                pressedButtons.push(_gamepadButtons__WEBPACK_IMPORTED_MODULE_0__.xboxButtonsId[axisId]);\n        });\n        buttons.forEach((Button, i) => {\n            if (Button.value === 0)\n                return false;\n            const buttonId = `button${i}`;\n            if (_gamepadButtons__WEBPACK_IMPORTED_MODULE_0__.xboxButtonsId[buttonId])\n                pressedButtons.push(_gamepadButtons__WEBPACK_IMPORTED_MODULE_0__.xboxButtonsId[buttonId]);\n        });\n        if (pressedButtons.length === 1) {\n            lastUpdate.buttons = pressedButtons;\n            onPress && onPress(pressedButtons);\n        }\n    }, 33); // 30 FPS\n};\nconst buttonLoopInterval = [];\nconst onConnected = (ev, onPress) => {\n    console.log('Connected', ev.gamepad.id);\n    buttonLoopInterval.push(buttonLoop(ev.gamepad.index, onPress));\n};\nconst onDisconnected = (ev) => {\n    console.log('Disconnected', ev.gamepad.id);\n    buttonLoopInterval.forEach(int => clearInterval(int));\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/hooks/useGamepad/services/gamepad.ts?");

/***/ }),

/***/ "./src/hooks/useGamepad/services/gamepadButtons.ts":
/*!*********************************************************!*\
  !*** ./src/hooks/useGamepad/services/gamepadButtons.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"xboxButtonsId\": () => (/* binding */ xboxButtonsId)\n/* harmony export */ });\nconst xboxButtonsId = {\n    axis0Pos: 'LeftStickRight',\n    axis0Neg: 'LeftStickLeft',\n    axis1Pos: 'LeftStickDown',\n    axis1Neg: 'LeftStickUp',\n    axis2Pos: 'RightStickRight',\n    axis2Neg: 'RightStickLeft',\n    axis3Pos: 'RightStickDown',\n    axis3Neg: 'RightStickUp',\n    button0: 'ButtonA',\n    button1: 'ButtonB',\n    button2: 'ButtonX',\n    button3: 'ButtonY',\n    button4: 'ButtonLeft',\n    button5: 'ButtonRight',\n    button6: 'TriggerLeft',\n    button7: 'TriggerRight',\n    button8: 'ButtonSelect',\n    button9: 'ButtonStart',\n    button10: 'LeftStick',\n    button11: 'RightStick',\n    button12: 'ArrowUp',\n    button13: 'ArrowDown',\n    button14: 'ArrowLeft',\n    button15: 'ArrowRight',\n    button16: 'ButtonHome',\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/hooks/useGamepad/services/gamepadButtons.ts?");

/***/ }),

/***/ "./src/hooks/useGlobalContext/index.tsx":
/*!**********************************************!*\
  !*** ./src/hooks/useGlobalContext/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/hooks/useGlobalContext/state.ts\");\n\n\n\nconst globalContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([_state__WEBPACK_IMPORTED_MODULE_2__.initialGlobalState, () => { }]);\nconst GlobalProvider = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(globalContext.Provider, Object.assign({ value: (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_state__WEBPACK_IMPORTED_MODULE_2__.initialGlobalState) }, { children: props.children })));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(globalContext));\n\n\n//# sourceURL=webpack://app-desktop/./src/hooks/useGlobalContext/index.tsx?");

/***/ }),

/***/ "./src/hooks/useGlobalContext/state.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useGlobalContext/state.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialGlobalState\": () => (/* binding */ initialGlobalState)\n/* harmony export */ });\n/* harmony import */ var src_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/db */ \"./src/config/db.ts\");\nvar _a;\n\nconst initialGlobalState = {\n    gradientBg: (_a = src_config_db__WEBPACK_IMPORTED_MODULE_0__.dbClient.settings.read()) === null || _a === void 0 ? void 0 : _a.bgOption,\n    imgBg: '',\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/hooks/useGlobalContext/state.ts?");

/***/ }),

/***/ "./src/hooks/usePath/index.tsx":
/*!*************************************!*\
  !*** ./src/hooks/usePath/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PathProvider\": () => (/* binding */ PathProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialPath = 'games/list/bar';\nconst pathContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([initialPath, () => { }]);\nconst PathProvider = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pathContext.Provider, Object.assign({ value: (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialPath) }, { children: props.children })));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(pathContext));\n\n\n//# sourceURL=webpack://app-desktop/./src/hooks/usePath/index.tsx?");

/***/ }),

/***/ "./src/hooks/useUIState/index.tsx":
/*!****************************************!*\
  !*** ./src/hooks/useUIState/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [focus, setFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [option, setOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const setUI = (key, value) => {\n        if (key === 'active' && typeof value === 'boolean')\n            setActive(value);\n        if (key === 'focus' && typeof value === 'number')\n            !active && value >= 0 && setFocus(value);\n        if (key === 'option' && typeof value === 'number')\n            value >= 0 && setOption(value);\n        if (key === 'loading' && typeof value === 'boolean')\n            setLoading(value);\n    };\n    const setUIHook = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(setUI, [active, focus, option, loading]);\n    return { focus, active, option, loading, setUI: setUIHook };\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/hooks/useUIState/index.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var src_UI_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/UI/routes */ \"./src/UI/routes/index.tsx\");\n/* harmony import */ var src_hooks_useGlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useGlobalContext */ \"./src/hooks/useGlobalContext/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_usePath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/usePath */ \"./src/hooks/usePath/index.tsx\");\n\n\n\n\n\n\n\nconst App = () => {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_hooks_useGlobalContext__WEBPACK_IMPORTED_MODULE_3__.GlobalProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hooks_usePath__WEBPACK_IMPORTED_MODULE_4__.PathProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.StyleSheetManager, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_UI_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}) }) }) }) }));\n};\nconst root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root'));\nroot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(App, {}));\n\n\n//# sourceURL=webpack://app-desktop/./src/index.tsx?");

/***/ }),

/***/ "./src/styles/globalCSS.ts":
/*!*********************************!*\
  !*** ./src/styles/globalCSS.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(({ theme }) => styled_components__WEBPACK_IMPORTED_MODULE_0__.css `\n    * {\n      margin: 0;\n      padding: 0;\n      outline: 0;\n      box-sizing: border-box;\n    }\n    html {\n      font-size: 16px;\n    }\n    body {\n      font-size: ${theme.fontSize.body};\n      height: 100vh;\n      width: 100vw;\n      max-height: 100vh;\n      max-width: 100vw;\n      overflow: hidden;\n    }\n    html,\n    body {\n      font-family: Roboto, sans-serif;\n      background-color: transparent;\n      color: ${theme.colors.text3};\n    }\n    h1 {\n      font-size: ${theme.fontSize.h1};\n    }\n    h2 {\n      font-size: ${theme.fontSize.h2};\n    }\n    h3 {\n      font-size: ${theme.fontSize.h3};\n    }\n    h4 {\n      font-size: ${theme.fontSize.h4};\n    }\n    h5 {\n      font-size: ${theme.fontSize.h5};\n    }\n    h6 {\n      font-size: ${theme.fontSize.h6};\n    }\n    ul {\n      list-style: none;\n    }\n    a {\n      text-decoration: none;\n    }\n    button {\n      cursor: pointer;\n      background-color: transparent;\n      border: none;\n      outline: none;\n    }\n    div::-webkit-scrollbar {\n      width: ${theme.size(2)};\n    }\n    div::-webkit-scrollbar-track {\n      background: #0000;\n    }\n    div::-webkit-scrollbar-thumb {\n      background: ${theme.colors.gray};\n      border-radius: 2px;\n    }\n    div::-webkit-scrollbar-thumb:hover {\n      background: ${theme.colors.main};\n    }\n    #root {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n  `));\n\n\n//# sourceURL=webpack://app-desktop/./src/styles/globalCSS.ts?");

/***/ }),

/***/ "./src/styles/lib/palettes.ts":
/*!************************************!*\
  !*** ./src/styles/lib/palettes.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"atlassianColors\": () => (/* binding */ atlassianColors),\n/* harmony export */   \"materialColors\": () => (/* binding */ materialColors)\n/* harmony export */ });\nconst materialColors = {\n    red: {\n        '50': '#ffebee',\n        '100': '#ffcdd2',\n        '200': '#ef9a9a',\n        '300': '#e57373',\n        '400': '#ef5350',\n        '500': '#f44336',\n        '600': '#e53935',\n        '700': '#d32f2f',\n        '800': '#c62828',\n        '900': '#b71c1c',\n        a100: '#ff8a80',\n        a200: '#ff5252',\n        a400: '#ff1744',\n        a700: '#d50000',\n    },\n    pink: {\n        '50': '#fce4ec',\n        '100': '#f8bbd0',\n        '200': '#f48fb1',\n        '300': '#f06292',\n        '400': '#ec407a',\n        '500': '#e91e63',\n        '600': '#d81b60',\n        '700': '#c2185b',\n        '800': '#ad1457',\n        '900': '#880e4f',\n        a100: '#ff80ab',\n        a200: '#ff4081',\n        a400: '#f50057',\n        a700: '#c51162',\n    },\n    purple: {\n        '50': '#f3e5f5',\n        '100': '#e1bee7',\n        '200': '#ce93d8',\n        '300': '#ba68c8',\n        '400': '#ab47bc',\n        '500': '#9c27b0',\n        '600': '#8e24aa',\n        '700': '#7b1fa2',\n        '800': '#6a1b9a',\n        '900': '#4a148c',\n        a100: '#ea80fc',\n        a200: '#e040fb',\n        a400: '#d500f9',\n        a700: '#aa00ff',\n    },\n    deepPurple: {\n        '50': '#ede7f6',\n        '100': '#d1c4e9',\n        '200': '#b39ddb',\n        '300': '#9575cd',\n        '400': '#7e57c2',\n        '500': '#673ab7',\n        '600': '#5e35b1',\n        '700': '#512da8',\n        '800': '#4527a0',\n        '900': '#311b92',\n        a100: '#b388ff',\n        a200: '#7c4dff',\n        a400: '#651fff',\n        a700: '#6200ea',\n    },\n    indigo: {\n        '50': '#e8eaf6',\n        '100': '#c5cae9',\n        '200': '#9fa8da',\n        '300': '#7986cb',\n        '400': '#5c6bc0',\n        '500': '#3f51b5',\n        '600': '#3949ab',\n        '700': '#303f9f',\n        '800': '#283593',\n        '900': '#1a237e',\n        a100: '#8c9eff',\n        a200: '#536dfe',\n        a400: '#3d5afe',\n        a700: '#304ffe',\n    },\n    blue: {\n        '50': '#e3f2fd',\n        '100': '#bbdefb',\n        '200': '#90caf9',\n        '300': '#64b5f6',\n        '400': '#42a5f5',\n        '500': '#2196f3',\n        '600': '#1e88e5',\n        '700': '#1976d2',\n        '800': '#1565c0',\n        '900': '#0d47a1',\n        a100: '#82b1ff',\n        a200: '#448aff',\n        a400: '#2979ff',\n        a700: '#2962ff',\n    },\n    lightBlue: {\n        '50': '#e1f5fe',\n        '100': '#b3e5fc',\n        '200': '#81d4fa',\n        '300': '#4fc3f7',\n        '400': '#29b6f6',\n        '500': '#03a9f4',\n        '600': '#039be5',\n        '700': '#0288d1',\n        '800': '#0277bd',\n        '900': '#01579b',\n        a100: '#80d8ff',\n        a200: '#40c4ff',\n        a400: '#00b0ff',\n        a700: '#0091ea',\n    },\n    cyan: {\n        '50': '#e0f7fa',\n        '100': '#b2ebf2',\n        '200': '#80deea',\n        '300': '#4dd0e1',\n        '400': '#26c6da',\n        '500': '#00bcd4',\n        '600': '#00acc1',\n        '700': '#0097a7',\n        '800': '#00838f',\n        '900': '#006064',\n        a100: '#84ffff',\n        a200: '#18ffff',\n        a400: '#00e5ff',\n        a700: '#00b8d4',\n    },\n    teal: {\n        '50': '#e0f2f1',\n        '100': '#b2dfdb',\n        '200': '#80cbc4',\n        '300': '#4db6ac',\n        '400': '#26a69a',\n        '500': '#009688',\n        '600': '#00897b',\n        '700': '#00796b',\n        '800': '#00695c',\n        '900': '#004d40',\n        a100: '#a7ffeb',\n        a200: '#64ffda',\n        a400: '#1de9b6',\n        a700: '#00bfa5',\n    },\n    green: {\n        '50': '#e8f5e9',\n        '100': '#c8e6c9',\n        '200': '#a5d6a7',\n        '300': '#81c784',\n        '400': '#66bb6a',\n        '500': '#4caf50',\n        '600': '#43a047',\n        '700': '#388e3c',\n        '800': '#2e7d32',\n        '900': '#1b5e20',\n        a100: '#b9f6ca',\n        a200: '#69f0ae',\n        a400: '#00e676',\n        a700: '#00c853',\n    },\n    lightGreen: {\n        '50': '#f1f8e9',\n        '100': '#dcedc8',\n        '200': '#c5e1a5',\n        '300': '#aed581',\n        '400': '#9ccc65',\n        '500': '#8bc34a',\n        '600': '#7cb342',\n        '700': '#689f38',\n        '800': '#558b2f',\n        '900': '#33691e',\n        a100: '#ccff90',\n        a200: '#b2ff59',\n        a400: '#76ff03',\n        a700: '#64dd17',\n    },\n    lime: {\n        '50': '#f9fbe7',\n        '100': '#f0f4c3',\n        '200': '#e6ee9c',\n        '300': '#dce775',\n        '400': '#d4e157',\n        '500': '#cddc39',\n        '600': '#c0ca33',\n        '700': '#afb42b',\n        '800': '#9e9d24',\n        '900': '#827717',\n        a100: '#f4ff81',\n        a200: '#eeff41',\n        a400: '#c6ff00',\n        a700: '#aeea00',\n    },\n    yellow: {\n        '50': '#fffde7',\n        '100': '#fff9c4',\n        '200': '#fff59d',\n        '300': '#fff176',\n        '400': '#ffee58',\n        '500': '#ffeb3b',\n        '600': '#fdd835',\n        '700': '#fbc02d',\n        '800': '#f9a825',\n        '900': '#f57f17',\n        a100: '#ffff8d',\n        a200: '#ffff00',\n        a400: '#ffea00',\n        a700: '#ffd600',\n    },\n    amber: {\n        '50': '#fff8e1',\n        '100': '#ffecb3',\n        '200': '#ffe082',\n        '300': '#ffd54f',\n        '400': '#ffca28',\n        '500': '#ffc107',\n        '600': '#ffb300',\n        '700': '#ffa000',\n        '800': '#ff8f00',\n        '900': '#ff6f00',\n        a100: '#ffe57f',\n        a200: '#ffd740',\n        a400: '#ffc400',\n        a700: '#ffab00',\n    },\n    orange: {\n        '50': '#fff3e0',\n        '100': '#ffe0b2',\n        '200': '#ffcc80',\n        '300': '#ffb74d',\n        '400': '#ffa726',\n        '500': '#ff9800',\n        '600': '#fb8c00',\n        '700': '#f57c00',\n        '800': '#ef6c00',\n        '900': '#e65100',\n        a100: '#ffd180',\n        a200: '#ffab40',\n        a400: '#ff9100',\n        a700: '#ff6d00',\n    },\n    deepOrange: {\n        '50': '#fbe9e7',\n        '100': '#ffccbc',\n        '200': '#ffab91',\n        '300': '#ff8a65',\n        '400': '#ff7043',\n        '500': '#ff5722',\n        '600': '#f4511e',\n        '700': '#e64a19',\n        '800': '#d84315',\n        '900': '#bf360c',\n        a100: '#ff9e80',\n        a200: '#ff6e40',\n        a400: '#ff3d00',\n        a700: '#dd2c00',\n    },\n    brown: {\n        '50': '#efebe9',\n        '100': '#d7ccc8',\n        '200': '#bcaaa4',\n        '300': '#a1887f',\n        '400': '#8d6e63',\n        '500': '#795548',\n        '600': '#6d4c41',\n        '700': '#5d4037',\n        '800': '#4e342e',\n        '900': '#3e2723',\n    },\n    grey: {\n        '50': '#fafafa',\n        '100': '#f5f5f5',\n        '200': '#eeeeee',\n        '300': '#e0e0e0',\n        '400': '#bdbdbd',\n        '500': '#9e9e9e',\n        '600': '#757575',\n        '700': '#616161',\n        '800': '#424242',\n        '900': '#212121',\n    },\n    blueGrey: {\n        '50': '#eceff1',\n        '100': '#cfd8dc',\n        '200': '#b0bec5',\n        '300': '#90a4ae',\n        '400': '#78909c',\n        '500': '#607d8b',\n        '600': '#546e7a',\n        '700': '#455a64',\n        '800': '#37474f',\n        '900': '#263238',\n    },\n    black: '#141414',\n    white: '#F4F4F4',\n};\nconst atlassianColors = {\n    blue: {\n        100: '#E9F2FF',\n        200: '#CCE0FF',\n        300: '#85B8FF',\n        400: '#579DFF',\n        500: '#388BFF',\n        600: '#1D7AFC',\n        700: '#0C66E4',\n        800: '#0055CC',\n        900: '#09326C',\n        1000: '#082145',\n    },\n    red: {\n        100: '#FFEDEB',\n        200: '#FFD2CC',\n        300: '#FF9C8F',\n        400: '#F87462',\n        500: '#EF5C48',\n        600: '#E34935',\n        700: '#CA3521',\n        800: '#AE2A19',\n        900: '#601E16',\n        1000: '#391813',\n    },\n    yellow: {\n        100: '#FFF7D6',\n        200: '#F8E6A0',\n        300: '#F5CD47',\n        400: '#E2B203',\n        500: '#CF9F02',\n        600: '#B38600',\n        700: '#946F00',\n        800: '#7F5F01',\n        900: '#533F04',\n        1000: '#3D2E00',\n    },\n    green: {\n        100: '#DFFCF0',\n        200: '#BAF3DB',\n        300: '#7EE2B8',\n        400: '#4BCE97',\n        500: '#2ABB7F',\n        600: '#22A06B',\n        700: '#1F845A',\n        800: '#216E4E',\n        900: '#164B35',\n        1000: '#133527',\n    },\n    purple: {\n        100: '#F3F0FF',\n        200: '#DFD8FD',\n        300: '#B8ACF6',\n        400: '#9F8FEF',\n        500: '#8F7EE7',\n        600: '#8270DB',\n        700: '#6E5DC6',\n        800: '#5E4DB2',\n        900: '#352C63',\n        1000: '#231C3F',\n    },\n    teal: {\n        100: '#E3FAFC',\n        200: '#C1F0F5',\n        300: '#8BDBE5',\n        400: '#60C6D2',\n        500: '#37B4C3',\n        600: '#1D9AAA',\n        700: '#1D7F8C',\n        800: '#206B74',\n        900: '#1D474C',\n        1000: '#153337',\n    },\n    orange: {\n        100: '#FFF4E5',\n        200: '#FFE2BD',\n        300: '#FEC57B',\n        400: '#FAA53D',\n        500: '#F18D13',\n        600: '#D97008',\n        700: '#B65C02',\n        800: '#974F0C',\n        900: '#5F3811',\n        1000: '#43290F',\n    },\n    magenta: {\n        100: '#FFECF8',\n        200: '#FDD0EC',\n        300: '#F797D2',\n        400: '#E774BB',\n        500: '#DA62AC',\n        600: '#CD519D',\n        700: '#AE4787',\n        800: '#943D73',\n        900: '#50253F',\n        1000: '#341829',\n    },\n    blueGray: {\n        0: '#FFFFFF',\n        50: '#091E4208',\n        100: '#F7F8F9',\n        200: '#F1F2F4',\n        300: '#DCDFE4',\n        400: '#B3B9C4',\n        500: '#8993A5',\n        600: '#758195',\n        700: '#626F86',\n        800: '#44546F',\n        900: '#2C3E5D',\n        1000: '#172B4D',\n        1100: '#091E42',\n    },\n    gray: {\n        0: '#DEE4EA',\n        50: '#C7D1DB',\n        100: '#B6C2CF',\n        200: '#9FADBC',\n        300: '#8696A7',\n        400: '#738496',\n        500: '#596773',\n        600: '#454F59',\n        700: '#2C333A',\n        800: '#22272B',\n        900: '#1D2125',\n        1000: '#161A1D',\n        1100: '#101214',\n    },\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/styles/lib/palettes.ts?");

/***/ }),

/***/ "./src/styles/lib/screenSizes.ts":
/*!***************************************!*\
  !*** ./src/styles/lib/screenSizes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    mobileS: 320,\n    mobileM: 425,\n    mobileL: 480,\n    tablet: 768,\n    laptopS: 900,\n    laptopM: 1024,\n    laptopL: 1280,\n    desktopS: 1440,\n    desktopM: 1980,\n    desktopL: 2560,\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/styles/lib/screenSizes.ts?");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultTheme\": () => (/* binding */ defaultTheme),\n/* harmony export */   \"defaultThemeDark\": () => (/* binding */ defaultThemeDark)\n/* harmony export */ });\n/* harmony import */ var _lib_palettes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/palettes */ \"./src/styles/lib/palettes.ts\");\n/* harmony import */ var _lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/screenSizes */ \"./src/styles/lib/screenSizes.ts\");\n\n\nconst defaultTheme = {\n    size: (n) => `${n * 0.2}rem`,\n    colors: {\n        main: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.lightBlue[600],\n        mainBg: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.atlassianColors.blue[700],\n        bg1: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[300] + '55',\n        bg2: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[300] + '33',\n        bg3: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[300] + '22',\n        bg4: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[300] + '11',\n        text1: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[50],\n        text2: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[200],\n        text3: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[300],\n        text4: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[400],\n        gray: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[400],\n        yellow: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.atlassianColors.yellow[600],\n        red: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.atlassianColors.red[800],\n        blue: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.atlassianColors.blue[500],\n        green: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.lightGreen[600],\n        white: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[300],\n        black: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black,\n    },\n    fontSize: {\n        body: '1rem',\n        small: '0.95rem',\n        verySmall: '0.8rem',\n        label: '0.9rem',\n        h1: '1.6rem',\n        h2: '1.4rem',\n        h3: '1.2rem',\n        h4: '1.1rem',\n        h5: '1.075rem',\n        h6: '1.05rem',\n    },\n    shadow: {\n        low: '1px 1px 2px 0 #0004',\n        medium: '1px 1px 2px 0 #0009',\n        high: '1px 2px 2px 0 #0007',\n        mediumGray: '1px 1px 4px 1px #777a',\n        lowRight: '3px 0 4px 0px #0002',\n        mediumLeft: '-4px 0 4px 0px #0006',\n    },\n    radius: {\n        verySmall: '0.2rem',\n        small: '0.3rem',\n        medium: '0.4rem',\n        large: '0.5rem',\n        full: '50%',\n    },\n    devices: {\n        mobileS: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mobileS}px)`,\n        mobileM: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mobileM}px)`,\n        mobileL: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mobileL}px)`,\n        tablet: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tablet}px)`,\n        laptopS: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].laptopS}px)`,\n        laptopM: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].laptopM}px)`,\n        laptopL: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].laptopL}px)`,\n        desktopS: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].desktopS}px)`,\n        desktopM: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].desktopM}px)`,\n        desktopL: `(max-width: ${_lib_screenSizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].desktopL}px)`,\n    },\n};\nconst defaultThemeDark = Object.assign(Object.assign({}, defaultTheme), { colors: Object.assign(Object.assign({}, defaultTheme.colors), { bg1: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black, bg2: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[800] + '44', bg3: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[700] + '44', bg4: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[600] + '44', text1: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[300], text2: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[400], text3: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[500], text4: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[700], gray: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[600], white: _lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.grey[300] }) });\n\n\n//# sourceURL=webpack://app-desktop/./src/styles/theme.ts?");

/***/ }),

/***/ "./src/utils/constants/UIButtons.ts":
/*!******************************************!*\
  !*** ./src/utils/constants/UIButtons.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIButtons\": () => (/* binding */ UIButtons)\n/* harmony export */ });\nconst UIButtons = {\n    GameListBar: [\n        { content: 'A', label: 'Details' },\n        { content: 'X', label: 'Grid View' },\n        { content: 'Y', label: 'Add Game' },\n    ],\n    GameListGrid: [\n        { content: 'A', label: 'Details' },\n        { content: 'X', label: 'List View' },\n        { content: 'Y', label: 'Add Game' },\n    ],\n    GameDetailsForm: [\n        { content: 'A', label: 'Edit' },\n        { content: 'X', label: 'Save' },\n        { content: 'Y', label: 'Game List' },\n    ],\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/utils/constants/UIButtons.ts?");

/***/ }),

/***/ "./src/utils/constants/fetchHeaders.ts":
/*!*********************************************!*\
  !*** ./src/utils/constants/fetchHeaders.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchHeaders\": () => (/* binding */ fetchHeaders)\n/* harmony export */ });\nconst fetchHeaders = {\n    method: 'GET',\n    mode: 'cors',\n    headers: {\n    // 'Content-Type': 'application/json',\n    // 'X-RapidAPI-Key': 'your-api-key',\n    },\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/utils/constants/fetchHeaders.ts?");

/***/ }),

/***/ "./src/utils/constants/gradient.ts":
/*!*****************************************!*\
  !*** ./src/utils/constants/gradient.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgGradientList\": () => (/* binding */ bgGradientList)\n/* harmony export */ });\n/* harmony import */ var src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/styles/lib/palettes */ \"./src/styles/lib/palettes.ts\");\n\nconst bgGradientList = {\n    indigo: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.blue.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black} 80%)`,\n    blue: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.lightBlue.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black} 80%)`,\n    green: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.lightGreen.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black} 80%)`,\n    deepPurple: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.deepPurple.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black} 80%)`,\n    purple: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.purple.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black} 80%)`,\n    pink: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.pink.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black} 80%)`,\n    red: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.red[700]}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.black} 80%)`,\n    blueAndPurple: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.cyan.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.purple[600]} 70%)`,\n    blueAndPink: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.cyan.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.pink.a700} 80%)`,\n    greenAndPink: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.lightGreen.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.pink[900]} 80%)`,\n    blueAndBrown: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.lightBlue.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.brown[700]} 75%)`,\n    purpleAndGreen: `linear-gradient(150deg, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.deepPurple.a700}, ${src_styles_lib_palettes__WEBPACK_IMPORTED_MODULE_0__.materialColors.lightGreen[600]} 80%)`,\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/utils/constants/gradient.ts?");

/***/ }),

/***/ "./src/utils/electron/nodeJS.ts":
/*!**************************************!*\
  !*** ./src/utils/electron/nodeJS.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nodeJS\": () => (/* binding */ nodeJS)\n/* harmony export */ });\nconst NodeJS = () => {\n    const require = window.require;\n    window.require = null; // prevent accessing nodejs from page context\n    return {\n        isActive: !!require,\n        resolvePath: (dirPath) => {\n            try {\n                const Path = require('path');\n                return Path.resolve(dirPath);\n            }\n            catch (e) {\n                console.error(e);\n                return '';\n            }\n        },\n        fetchHTML: (url) => {\n            return new Promise((resolve, reject) => {\n                try {\n                    const Http = require('http');\n                    Http.get(url, (res) => {\n                        let rawHtml = '';\n                        res.on('data', (chunk) => (rawHtml += chunk));\n                        res.on('end', () => resolve(rawHtml));\n                    });\n                }\n                catch (e) {\n                    reject(e);\n                }\n            });\n        },\n        exec: (command) => {\n            try {\n                const Process = require('child_process');\n                return Process.execSync(command).toString();\n            }\n            catch (e) {\n                console.log(e);\n                return '';\n            }\n        },\n        listDir: (dir) => {\n            try {\n                const Fs = require('fs');\n                const Path = require('path');\n                const files = Fs.readdirSync(Path.resolve(dir));\n                return files.filter((file) => {\n                    if (file.startsWith('.'))\n                        return false;\n                    return true;\n                });\n            }\n            catch (e) {\n                console.error(e);\n                return [];\n            }\n        },\n    };\n};\nconst nodeJS = NodeJS();\n\n\n//# sourceURL=webpack://app-desktop/./src/utils/electron/nodeJS.ts?");

/***/ }),

/***/ "./src/utils/images/imageCache.ts":
/*!****************************************!*\
  !*** ./src/utils/images/imageCache.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchImageData\": () => (/* binding */ fetchImageData),\n/* harmony export */   \"getGamesImageCache\": () => (/* binding */ getGamesImageCache),\n/* harmony export */   \"imageCache\": () => (/* binding */ imageCache)\n/* harmony export */ });\n/* harmony import */ var _constants_fetchHeaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/fetchHeaders */ \"./src/utils/constants/fetchHeaders.ts\");\n/* harmony import */ var _imageCompress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCompress */ \"./src/utils/images/imageCompress/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst fetchImageData = (url) => {\n    return new Promise((resolve, reject) => {\n        fetch(url, _constants_fetchHeaders__WEBPACK_IMPORTED_MODULE_0__.fetchHeaders)\n            .then((res) => __awaiter(void 0, void 0, void 0, function* () {\n            const img = yield res.blob();\n            const compressedImg = yield (0,_imageCompress__WEBPACK_IMPORTED_MODULE_1__.ImageCompress)(img);\n            const file = new FileReader();\n            file.readAsDataURL(compressedImg);\n            return yield new Promise(r => (file.onload = () => r(file.result)));\n        }))\n            .then(resolve)\n            .catch(reject);\n    });\n};\nconst imageCache = (url) => __awaiter(void 0, void 0, void 0, function* () {\n    const storeName = 'image_cache';\n    const imgStore = localStorage.getItem(storeName) || '[]';\n    const cachedImages = JSON.parse(imgStore);\n    const img = cachedImages.find(img => img.url === url);\n    if (img)\n        return img.data;\n    const imgData = yield fetchImageData(url);\n    cachedImages.push({ url, data: imgData });\n    localStorage.setItem(storeName, JSON.stringify(cachedImages));\n    return imgData;\n});\nconst getGamesImageCache = (games) => __awaiter(void 0, void 0, void 0, function* () {\n    for (const game of games) {\n        try {\n            game.background = yield imageCache(game.background);\n            game.cover = yield imageCache(game.cover);\n        }\n        catch (err) {\n            continue;\n        }\n    }\n    return games;\n});\n\n\n//# sourceURL=webpack://app-desktop/./src/utils/images/imageCache.ts?");

/***/ }),

/***/ "./src/utils/images/imageCompress/index.ts":
/*!*************************************************!*\
  !*** ./src/utils/images/imageCompress/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImageCompress\": () => (/* binding */ ImageCompress)\n/* harmony export */ });\n/* harmony import */ var _services_image_compressor_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/image-compressor.min.js */ \"./src/utils/images/imageCompress/services/image-compressor.min.js\");\n/* harmony import */ var _services_image_compressor_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_image_compressor_min_js__WEBPACK_IMPORTED_MODULE_0__);\n\n// https://www.npmjs.com/package/js-image-compressor\nconst ImageCompress = (bin) => {\n    return new Promise((resolve, reject) => {\n        new (_services_image_compressor_min_js__WEBPACK_IMPORTED_MODULE_0___default())({\n            file: bin,\n            quality: 0.2,\n            mimeType: 'image/jpeg',\n            width: 1920,\n            height: 1080,\n            // maxWidth: 1920,\n            // maxHeight: 1080,\n            // minWidth: 500,\n            // minHeight: 500,\n            convertSize: Infinity,\n            loose: true,\n            redressOrientation: true,\n            // beforeCompress: () => {},\n            // beforeDraw: () => {},\n            // afterDraw: () => {},\n            success: (result) => {\n                const binSize = (bin.size / 1024).toFixed(2);\n                const resultSize = (result.size / 1024).toFixed(2);\n                const ratio = (((bin.size - result.size) / bin.size) * 100).toFixed(2) + '%';\n                console.log(`Image compressor: ${binSize} Kb -> ${resultSize} Kb, ratio: ${ratio}`);\n                resolve(result);\n            },\n            error: (msg) => {\n                console.error(msg);\n                reject(msg);\n            },\n        });\n    });\n};\n\n\n//# sourceURL=webpack://app-desktop/./src/utils/images/imageCompress/index.ts?");

/***/ }),

/***/ "./src/utils/images/imageCompress/services/image-compressor.min.js":
/*!*************************************************************************!*\
  !*** ./src/utils/images/imageCompress/services/image-compressor.min.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){\"use strict\";n.r(t);var r=window,a=/^image\\//,i=/\\.\\w+$/,o={},s={file:null,quality:.8,convertSize:2048e3,loose:!0,redressOrientation:!0},f=function(e){return\"function\"==typeof e},c=function(e){return a.test(e)};function l(e){e=Object.assign({},s,e),this.options=e,this.file=e.file,this.image=null,this.ParsedOrientationInfo=null,this.init()}var u=l.prototype;for(var h in t.default=l,u.init=function(){var e=this,t=this.file,n=this.options;t&&c(t.type)?(c(n.mimeType)||(n.mimeType=t.type),o.file2Image(t,(function(r){f(e.beforeCompress)&&(e.image=r,t.width=r.naturalWidth,t.height=r.naturalHeight,e.beforeCompress(t)),\"image/jpeg\"===t.type&&n.redressOrientation?e.getParsedOrientationInfo((function(t){e.parsedOrientationInfo=t,e.rendCanvas()})):(e.parsedOrientationInfo={rotate:0,scaleX:1,scaleY:1},e.rendCanvas())}),e.error)):e.error(\"请上传图片文件!\")},u.rendCanvas=function(){var e=this,t=this.options,n=this.image,r=this.getExpectedEdge(),a=r.dWidth,i=r.dHeight,s=r.width,f=r.height,c=o.image2Canvas(n,a,i,e.beforeDraw.bind(e),e.afterDraw.bind(e),s,f);o.canvas2Blob(c,(function(t){t&&(t.width=c.width,t.height=c.height),e.success(t)}),t.quality,t.mimeType)},u.beforeCompress=function(){f(this.options.beforeCompress)&&this.options.beforeCompress(this.file)},u.getExpectedEdge=function(){var e,t=this.image,n=this.parsedOrientationInfo.rotate,r=this.options,a=t.naturalWidth,i=t.naturalHeight,o=Math.abs(n)%180==90;o&&(e=i,i=a,a=e);var s=a/i,f=Math.max(r.maxWidth,0)||1/0,c=Math.max(r.maxHeight,0)||1/0,l=Math.max(r.minWidth,0)||0,u=Math.max(r.minHeight,0)||0,h=Math.max(r.width,0)||a,d=Math.max(r.height,0)||i;f<1/0&&c<1/0?c*s>f?c=f/s:f=c*s:f<1/0?c=f/s:c<1/0&&(f=c*s),l>0&&u>0?u*s>l?u=l/s:l=u*s:l>0?u=l/s:u>0&&(l=u*s),d*s>h?d=h/s:h=d*s;var g=h=Math.floor(Math.min(Math.max(h,l),f)),p=d=Math.floor(Math.min(Math.max(d,u),c));return o&&(e=p,p=g,g=e),{dWidth:g,dHeight:p,width:h,height:d}},u.getParsedOrientationInfo=function(e){var t=this;this.getOrientation((function(n){f(e)&&e(t.parseOrientation(n))}))},u.getOrientation=function(e){var t=this;o.file2ArrayBuffer(this.file,(function(n){f(e)&&e(t.resetAndGetOrientation(n))}))},u.resetAndGetOrientation=function(e){var t,n=new DataView(e);try{var r,a,i;if(255===n.getUint8(0)&&216===n.getUint8(1))for(var s=n.byteLength,f=2;f+1<s;){if(255===n.getUint8(f)&&225===n.getUint8(f+1)){a=f;break}f+=1}if(a){var c=a+4,l=a+10;if(\"Exif\"===o.getStringFromCharCode(n,c,4)){var u=n.getUint16(l);if(((r=18761===u)||19789===u)&&42===n.getUint16(l+2,r)){var h=n.getUint32(l+4,r);h>=8&&(i=l+h)}}}if(i){var d;s=n.getUint16(i,r);for(d=0;d<s;d+=1)if(f=i+12*d+2,274===n.getUint16(f,r)){f+=8,t=n.getUint16(f,r),n.setUint16(f,1,r);break}}}catch(e){console.error(e),t=1}return t},u.parseOrientation=function(e){var t=0,n=1,r=1;switch(e){case 2:n=-1;break;case 3:t=-180;break;case 4:r=-1;break;case 5:t=90,r=-1;break;case 6:t=90;break;case 7:t=90,n=-1;break;case 8:t=-90}return{rotate:t,scaleX:n,scaleY:r}},u.beforeDraw=function(e,t){var n=this.parsedOrientationInfo,r=n.rotate,a=n.scaleX,i=n.scaleY,o=this.file,s=this.options,c=\"transparent\",l=t.width,u=t.height;switch(o.size>s.convertSize&&\"image/png\"===s.mimeType&&(c=\"#fff\",s.mimeType=\"image/jpeg\"),e.fillStyle=c,e.fillRect(0,0,l,u),f(s.beforeDraw)&&s.beforeDraw.call(this,e,t),e.save(),r){case 90:e.translate(l,0);break;case-90:e.translate(0,u);break;case-180:e.translate(l,u)}e.rotate(r*Math.PI/180),e.scale(a,i)},u.afterDraw=function(e,t){var n=this.options;f(n.afterDraw)&&n.afterDraw.call(this,e,t)},u.error=function(e){var t=this.options;if(!f(t.error))throw new Error(e);t.error.call(this,e)},u.success=function(e){var t,n,r=this.options,a=this.file,o=this.image,s=this.getExpectedEdge(),l=o.naturalHeight,u=o.naturalWidth;if(e&&e.size)if(!r.loose&&e.size>a.size&&!(s.width>u||s.height>l))console.warn(\"当前设置的是非宽松模式，压缩结果大于源图片，输出源图片\"),e=a;else{var h=new Date;e.lastModified=h.getTime(),e.lastModifiedDate=h,e.name=a.name,e.name&&e.type!==a.type&&(e.name=e.name.replace(i,(t=e.type,\"jpeg\"===(n=c(t)?t.substr(6):\"\")&&(n=\"jpg\"),\".\"+n)))}else console.warn(\"图片压缩出了点意外，输出源图片\"),e=a;f(r.success)&&r.success.call(this,e)},o.file2DataUrl=function(e,t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){f(n)&&n(\"读取文件失败！\")},r.readAsDataURL(e)},o.file2ArrayBuffer=function(e,t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(){f(n)&&n(\"读取文件失败！\")},r.readAsArrayBuffer(e)},o.getStringFromCharCode=function(e,t,n){var r,a=\"\";for(n+=t,r=t;r<n;r+=1)a+=String.fromCharCode(e.getUint8(r));return a},o.file2Image=function(e,t,n){var a=new Image,i=r.URL||r.webkitURL;if(r.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent)&&(a.crossOrigin=\"anonymous\"),a.alt=e.name,a.onerror=function(){f(n)&&n(\"图片加载错误！\")},i){var o=i.createObjectURL(e);a.onload=function(){t(a),i.revokeObjectURL(o)},a.src=o}else this.file2DataUrl(e,(function(e){a.onload=function(){t(a)},a.src=e}),n)},o.url2Image=function(e,t,n){var r=new Image;r.src=e,r.onload=function(){t(r)},r.onerror=function(){f(n)&&n(\"图片加载错误！\")}},o.image2Canvas=function(e,t,n,r,a,i,o){var s=document.createElement(\"canvas\"),c=s.getContext(\"2d\");return s.width=i||e.naturalWidth,s.height=o||e.naturalHeight,f(r)&&r(c,s),c.save(),c.drawImage(e,0,0,t,n),c.restore(),f(a)&&a(c,s),s},o.canvas2DataUrl=function(e,t,n){return e.toDataURL(n||\"image/jpeg\",t)},o.dataUrl2Image=function(e,t,n){var r=new Image;r.onload=function(){t(r)},r.error=function(){f(n)&&n(\"图片加载错误！\")},r.src=e},o.dataUrl2Blob=function(e,t){for(var n=e.split(\",\")[1],r=e.match(/^data:(.*?)(;base64)?,/)[1],a=atob(n),i=n.length,o=new Uint8Array(i),s=0;s<i;s++)o[s]=a.charCodeAt(s);return new Blob([o],{type:t||r})},o.blob2DataUrl=function(e,t,n){this.file2DataUrl(e,t,n)},o.blob2Image=function(e,t,n){this.file2Image(e,t,n)},o.canvas2Blob=function(e,t,n,r){var a=this;HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,\"toBlob\",{value:function(e,t,n){var r=this.toDataURL(t,n);e(a.dataUrl2Blob(r))}}),e.toBlob((function(e){t(e)}),r||\"image/jpeg\",n||.8)},o.upload=function(e,t,n){var r=new XMLHttpRequest,a=new FormData;a.append(\"file\",t),r.onreadystatechange=function(){if(4!==r.readyState||200!==r.status)throw new Error(r);n&&n(r.responseText)},r.open(\"POST\",e,!0),r.send(a)},o)o.hasOwnProperty(h)&&(l[h]=o[h])}]).default}));\n\n//# sourceURL=webpack://app-desktop/./src/utils/images/imageCompress/services/image-compressor.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp_desktop"] = self["webpackChunkapp_desktop"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["libs"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;