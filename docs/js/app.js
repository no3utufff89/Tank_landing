/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/files/carData.js":
/*!******************************!*\
  !*** ./src/files/carData.js ***!
  \******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialData: function() { return /* binding */ initialData; }\n/* harmony export */ });\nvar initialData = [{\n  id: 1,\n  title: 'Tank 300',\n  price: 5000000,\n  count: 5,\n  colors: [{\n    colorName: 'red',\n    colorValue: '#ef2929',\n    contrast: false,\n    image: 'red-car-300.png',\n    first: true\n  }, {\n    colorName: 'orange',\n    colorValue: '#df4c30',\n    contrast: false,\n    image: 'orange-car-300.png',\n    first: false\n  }, {\n    colorName: 'gray',\n    colorValue: '#c6c9ce',\n    contrast: false,\n    image: 'gray-car-300.png',\n    first: false\n  }, {\n    colorName: 'black',\n    colorValue: '#212329',\n    contrast: false,\n    image: 'black-car-300.png',\n    first: false\n  }, {\n    colorName: 'white',\n    colorValue: '#e6e7e8',\n    contrast: false,\n    image: 'white-car-300.png',\n    first: false\n  }]\n}, {\n  id: 2,\n  title: 'Tank 500',\n  price: 6000000,\n  count: 3,\n  colors: [{\n    colorName: 'black',\n    colorValue: '#212329',\n    contrast: false,\n    image: 'black-car-500.png',\n    first: true\n  }, {\n    colorName: 'gray',\n    colorValue: '#c6c9ce',\n    contrast: false,\n    image: 'gray-car-500.png',\n    first: false\n  }, {\n    colorName: 'white',\n    colorValue: '#e6e7e8',\n    contrast: false,\n    image: 'white-car-500.png',\n    first: false\n  }, {\n    colorName: 'sand',\n    colorValue: '#B0A798',\n    contrast: false,\n    image: 'sand-car-500.png',\n    first: false\n  }]\n}];\n\n//# sourceURL=webpack://Tank-landing/./src/files/carData.js?\n}");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n/* harmony import */ var _modules_controls_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/controls/control.js */ \"./src/js/modules/controls/control.js\");\n/* harmony import */ var _modules_builder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/builder.js */ \"./src/js/modules/builder.js\");\n/* harmony import */ var _files_carData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../files/carData.js */ \"./src/files/carData.js\");\n/* harmony import */ var _modules_controls_btnsControl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/controls/btnsControl.js */ \"./src/js/modules/controls/btnsControl.js\");\n/* harmony import */ var _modules_timer_timer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer/timer.js */ \"./src/js/modules/timer/timer.js\");\n/* harmony import */ var _modules_pageElements_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pageElements.js */ \"./src/js/modules/pageElements.js\");\n/* harmony import */ var _modules_controls_formControl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/controls/formControl.js */ \"./src/js/modules/controls/formControl.js\");\n\n\n// import jQuery from 'jquery';\n// window.$ = window.jQuery = jQuery;\n\n\n\n\n\n\n\n\nvar data = _files_carData_js__WEBPACK_IMPORTED_MODULE_3__.initialData;\nvar elements = (0,_modules_pageElements_js__WEBPACK_IMPORTED_MODULE_6__.pageElements)();\nwindow.addEventListener('load', function () {\n  _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\n  // functions.preventClickDefault($('form'));\n});\nwindow.addEventListener('resize', function () {\n  clearTimeout(window.resizedFinished);\n  window.resizedFinished = setTimeout(function () {\n    // window resize functions\n  }, 100);\n});\nvar timer;\nwindow.addEventListener('scroll', function () {\n  if (timer !== null) {\n    clearTimeout(timer);\n  }\n  timer = setTimeout(function () {\n    var pageOffset = Math.round(window.pageYOffset);\n    pageOffset > 300 ? document.body.classList.add('scrolled') : document.body.classList.remove('scrolled');\n    // scroll functions\n  }, 100);\n}, false);\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.phoneMask();\n_modules_controls_control_js__WEBPACK_IMPORTED_MODULE_1__.modalControl();\n_modules_controls_control_js__WEBPACK_IMPORTED_MODULE_1__.carSelect(data);\n_modules_builder_js__WEBPACK_IMPORTED_MODULE_2__.builder(data);\n(0,_modules_controls_btnsControl_js__WEBPACK_IMPORTED_MODULE_4__.colorChangeControl)();\n(0,_modules_timer_timer_js__WEBPACK_IMPORTED_MODULE_5__.countDownTimer)();\n(0,_modules_controls_btnsControl_js__WEBPACK_IMPORTED_MODULE_4__.overlayControl)(elements);\n(0,_modules_controls_formControl_js__WEBPACK_IMPORTED_MODULE_7__.fromControl)(elements);\n\n//# sourceURL=webpack://Tank-landing/./src/js/app.js?\n}");

/***/ }),

/***/ "./src/js/modules/builder.js":
/*!***********************************!*\
  !*** ./src/js/modules/builder.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   builder: function() { return /* binding */ builder; },\n/* harmony export */   getCarDetails: function() { return /* binding */ getCarDetails; },\n/* harmony export */   loadDefault: function() { return /* binding */ loadDefault; },\n/* harmony export */   renderCarDetails: function() { return /* binding */ renderCarDetails; }\n/* harmony export */ });\n/* harmony import */ var _pageElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageElements.js */ \"./src/js/modules/pageElements.js\");\n\nvar _pageElements = (0,_pageElements_js__WEBPACK_IMPORTED_MODULE_0__.pageElements)(),\n  modalSelectList = _pageElements.modalSelectList,\n  colorsList = _pageElements.colorsList,\n  carVariansBtns = _pageElements.carVariansBtns,\n  carModelTitle = _pageElements.carModelTitle,\n  carPreviewImage = _pageElements.carPreviewImage;\nvar createSelectListRow = function createSelectListRow(_ref) {\n  var title = _ref.title;\n  var rowElement = document.createElement('li');\n  rowElement.classList.add('select-list__item');\n  rowElement.textContent = title;\n  return rowElement;\n};\nvar getCarDetails = function getCarDetails(data) {\n  var carTitle = data.find(function (item) {\n    return item.id === +localStorage.getItem('selectedModel');\n  }).title;\n  return carTitle;\n};\nvar createColorsListElement = function createColorsListElement(_ref2) {\n  var colorValue = _ref2.colorValue,\n    colorName = _ref2.colorName,\n    image = _ref2.image,\n    first = _ref2.first;\n  var colorsListElement = document.createElement('li');\n  colorsListElement.classList.add('colors-list__item');\n  var colorBtn = document.createElement('button');\n  if (!first) {\n    colorBtn.classList.add('btn', 'colors-list__btn');\n  } else {\n    colorBtn.classList.add('btn', 'colors-list__btn', 'active');\n  }\n  colorBtn.setAttribute('aria-label', \"\".concat(colorName, \" color button\"));\n  colorBtn.setAttribute('type', 'button');\n  colorBtn.setAttribute('data-image', image);\n  colorBtn.style.backgroundColor = colorValue;\n  colorsListElement.append(colorBtn);\n  return colorsListElement;\n};\nvar renderCarDetails = function renderCarDetails(data) {\n  var currentCarId = +localStorage.getItem('selectedModel');\n  var selectedCar = data.find(function (car) {\n    return car.id === currentCarId;\n  });\n  selectedCar.colors.map(function (item) {\n    colorsList.append(createColorsListElement(item));\n  });\n  var defaultImage = selectedCar.colors.find(function (item) {\n    return item.first === true;\n  });\n  var imageParrent = document.querySelector('.preview__image');\n  var currentImg = imageParrent.querySelector('img');\n  currentImg.src = \"img/cars/\".concat(defaultImage.image);\n};\nvar loadDefault = function loadDefault(data) {\n  var selectedCar = localStorage.getItem('selectedModel');\n  if (!selectedCar) {\n    localStorage.setItem('selectedModel', carVariansBtns[0].getAttribute('data-id'));\n    carVariansBtns[0].classList.add('active');\n    carModelTitle.textContent = getCarDetails(data);\n  } else {\n    carVariansBtns.find(function (item) {\n      if (item.getAttribute('data-id') === selectedCar) {\n        item.classList.add('active');\n        carModelTitle.textContent = getCarDetails(data);\n      }\n    });\n  }\n  renderCarDetails(data);\n};\nfunction builder(data) {\n  data.map(function (item) {\n    modalSelectList.append(createSelectListRow(item));\n  });\n  loadDefault(data);\n}\n\n//# sourceURL=webpack://Tank-landing/./src/js/modules/builder.js?\n}");

/***/ }),

/***/ "./src/js/modules/controls/btnsControl.js":
/*!************************************************!*\
  !*** ./src/js/modules/controls/btnsControl.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   colorChangeControl: function() { return /* binding */ colorChangeControl; },\n/* harmony export */   overlayControl: function() { return /* binding */ overlayControl; }\n/* harmony export */ });\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction colorChangeControl() {\n  var colorChangeBtn = _toConsumableArray(document.querySelectorAll('.colors-list__btn'));\n  var imageParrent = document.querySelector('.preview__image');\n  var currentImg = imageParrent.querySelector('img');\n  colorChangeBtn.forEach(function (btn, index) {\n    btn.addEventListener('click', function () {\n      currentImg.src = \"img/cars/\".concat(btn.getAttribute('data-image'));\n      for (var i = 0; i < colorChangeBtn.length; i += 1) {\n        if (index === i) {\n          colorChangeBtn[i].classList.toggle('active');\n        } else {\n          colorChangeBtn[i].classList.remove('active');\n        }\n      }\n    });\n  });\n}\nfunction openModal(overlay) {\n  overlay.classList.add('active');\n  document.body.classList.add('no-scroll');\n}\nfunction overlayControl(_ref) {\n  var overlay = _ref.overlay,\n    modalCloseBtn = _ref.modalCloseBtn,\n    actionElements = _ref.actionElements;\n  overlay.addEventListener('click', function (e) {\n    var target = e.target;\n    if (target === overlay) {\n      overlay.classList.remove('active');\n      document.body.classList.remove('no-scroll');\n    }\n    if (target === modalCloseBtn.querySelector('svg')) {\n      overlay.classList.remove('active');\n      document.body.classList.remove('no-scroll');\n    }\n  });\n  actionElements.forEach(function (item) {\n    item.addEventListener('click', function () {\n      openModal(overlay);\n    });\n  });\n}\n\n//# sourceURL=webpack://Tank-landing/./src/js/modules/controls/btnsControl.js?\n}");

/***/ }),

/***/ "./src/js/modules/controls/control.js":
/*!********************************************!*\
  !*** ./src/js/modules/controls/control.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   carSelect: function() { return /* binding */ carSelect; },\n/* harmony export */   modalControl: function() { return /* binding */ modalControl; }\n/* harmony export */ });\n/* harmony import */ var _builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder.js */ \"./src/js/modules/builder.js\");\n/* harmony import */ var _pageElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pageElements.js */ \"./src/js/modules/pageElements.js\");\n/* harmony import */ var _btnsControl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnsControl.js */ \"./src/js/modules/controls/btnsControl.js\");\n\n\n\nfunction modalControl() {\n  var _pageElements = (0,_pageElements_js__WEBPACK_IMPORTED_MODULE_1__.pageElements)(),\n    modalSelectList = _pageElements.modalSelectList,\n    modalFormOption = _pageElements.modalFormOption,\n    modalFormBtn = _pageElements.modalFormBtn,\n    modalForm = _pageElements.modalForm,\n    modalFormSelect = _pageElements.modalFormSelect;\n  modalFormSelect.addEventListener('click', function () {\n    var listHeight = modalSelectList.scrollHeight;\n    modalFormSelect.classList.toggle('active');\n    if (modalFormSelect.classList.contains('active')) {\n      modalSelectList.style.height = \"\".concat(listHeight, \"px\");\n      modalSelectList.style.opacity = 1;\n    } else {\n      modalSelectList.style.height = '';\n      modalSelectList.style.opacity = 0;\n    }\n  });\n  modalSelectList.addEventListener('click', function (e) {\n    var target = e.target;\n    modalFormOption.value = target.innerText;\n    modalFormOption.innerText = target.innerText;\n    modalFormSelect.classList.remove('active');\n    modalSelectList.style.height = '';\n    modalSelectList.style.opacity = 0;\n  });\n  modalFormBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    var formData = new FormData(modalForm);\n    var product = Object.fromEntries(formData);\n    console.log(product);\n  });\n}\nfunction carSelect(data) {\n  var _pageElements2 = (0,_pageElements_js__WEBPACK_IMPORTED_MODULE_1__.pageElements)(),\n    carVariansBtns = _pageElements2.carVariansBtns,\n    carModelTitle = _pageElements2.carModelTitle,\n    colorsList = _pageElements2.colorsList;\n  carVariansBtns.forEach(function (item, index) {\n    item.addEventListener('click', function () {\n      for (var i = 0; i < carVariansBtns.length; i += 1) {\n        if (index === i) {\n          carVariansBtns[i].classList.add('active');\n          var selectedCarId = carVariansBtns[i].getAttribute('data-id');\n          localStorage.setItem('selectedModel', selectedCarId);\n          carModelTitle.textContent = (0,_builder_js__WEBPACK_IMPORTED_MODULE_0__.getCarDetails)(data);\n          colorsList.textContent = '';\n          (0,_builder_js__WEBPACK_IMPORTED_MODULE_0__.renderCarDetails)(data);\n        } else {\n          carVariansBtns[i].classList.remove('active');\n        }\n      }\n      (0,_btnsControl_js__WEBPACK_IMPORTED_MODULE_2__.colorChangeControl)();\n    });\n  });\n}\n\n//# sourceURL=webpack://Tank-landing/./src/js/modules/controls/control.js?\n}");

/***/ }),

/***/ "./src/js/modules/controls/formControl.js":
/*!************************************************!*\
  !*** ./src/js/modules/controls/formControl.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromControl: function() { return /* binding */ fromControl; }\n/* harmony export */ });\nvar fromControl = function fromControl(_ref) {\n  var modalForm = _ref.modalForm,\n    modalSubmitBtn = _ref.modalSubmitBtn,\n    errorTextModel = _ref.errorTextModel,\n    errorTextPhone = _ref.errorTextPhone,\n    modalCheckbox = _ref.modalCheckbox,\n    checkboxText = _ref.checkboxText;\n  modalSubmitBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    var modelSelect = document.querySelector('.modal-form__select');\n    var phoneInput = document.querySelector('.modal-form__phone');\n    var isValid = true;\n    [errorTextModel, errorTextPhone].forEach(function (errorField) {\n      errorField.textContent = '';\n    });\n    if (modelSelect.value === '') {\n      errorTextModel.textContent = 'Заполните поле';\n      isValid = false;\n    }\n    if (phoneInput.value === '') {\n      errorTextPhone.textContent = 'Заполните поле';\n      isValid = false;\n    }\n    if (modalCheckbox.checked !== true) {\n      checkboxText.querySelector('span').style.color = '#ff9549';\n      isValid = false;\n    }\n    if (isValid) {\n      modalForm.submit();\n    }\n  });\n};\n\n//# sourceURL=webpack://Tank-landing/./src/js/modules/controls/formControl.js?\n}");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isWebp: function() { return /* binding */ isWebp; },\n/* harmony export */   phoneMask: function() { return /* binding */ phoneMask; },\n/* harmony export */   preventClickDefault: function() { return /* binding */ preventClickDefault; }\n/* harmony export */ });\n// Отключение действий при нажатии на кнопки\nfunction preventClickDefault(elem) {\n  elem.on('click', function (e) {\n    e.preventDefault();\n  });\n}\n\n/* Проверка поддержки webp, добавление класса webp или not-webp для HTML */\nfunction isWebp() {\n  function testWebP(callback) {\n    var webP = new Image();\n    webP.onload = webP.onerror = function () {\n      callback(webP.height == 2);\n    };\n    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';\n  }\n  testWebP(function (support) {\n    var className = support === true ? 'webp' : 'no-webp';\n    document.body.classList.add(className);\n  });\n}\n//phone mask\nfunction phoneMask() {\n  var input = document.querySelectorAll(\"input[type='tel']\");\n  Inputmask({\n    mask: '+7 999 999-99-99'\n  }).mask(input);\n}\n\n//# sourceURL=webpack://Tank-landing/./src/js/modules/functions.js?\n}");

/***/ }),

/***/ "./src/js/modules/pageElements.js":
/*!****************************************!*\
  !*** ./src/js/modules/pageElements.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageElements: function() { return /* binding */ pageElements; }\n/* harmony export */ });\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction pageElements() {\n  var modal = document.querySelector('.modal');\n  var modalForm = document.querySelector('.modal-form');\n  var modalFormOption = document.querySelector('.modal-form__select-option');\n  var modalFormBtn = document.querySelector('.modal-form__btn');\n  //select-list\n  var selectElems = document.querySelectorAll('.select-list__item');\n  var modalFormSelect = document.querySelector('.modal-form__select');\n  var modalSelectList = document.querySelector('.select-list');\n  //car-variants\n  var carVariansBtns = _toConsumableArray(document.querySelectorAll('.cars-variants__btn'));\n  //car-info actions\n  var carModelTitle = document.querySelector('.offer__car-title');\n  //car-colors\n  var colorsList = document.querySelector('.colors-list');\n  var carPreviewImage = document.querySelector('.preview__image');\n  //open-modal\n  var actionElements = document.querySelectorAll('.action-elem');\n  var overlay = document.querySelector('.overlay');\n  var modalCloseBtn = document.querySelector('.modal__close-btn');\n  var modalSubmitBtn = document.querySelector('.modal-form__btn');\n  var errorTextModel = document.querySelector('.modal-form__error-text-model');\n  var errorTextPhone = document.querySelector('.modal-form__error-text-phone');\n  var modalCheckbox = document.querySelector('.modal-form__checkbox');\n  var checkboxText = document.querySelector('.modal-form__label_agreement');\n  return {\n    modal: modal,\n    modalForm: modalForm,\n    modalSelectList: modalSelectList,\n    modalFormSelect: modalFormSelect,\n    modalFormOption: modalFormOption,\n    modalFormBtn: modalFormBtn,\n    selectElems: selectElems,\n    carVariansBtns: carVariansBtns,\n    carModelTitle: carModelTitle,\n    colorsList: colorsList,\n    carPreviewImage: carPreviewImage,\n    actionElements: actionElements,\n    overlay: overlay,\n    modalCloseBtn: modalCloseBtn,\n    modalSubmitBtn: modalSubmitBtn,\n    errorTextModel: errorTextModel,\n    errorTextPhone: errorTextPhone,\n    modalCheckbox: modalCheckbox,\n    checkboxText: checkboxText\n  };\n}\n\n//# sourceURL=webpack://Tank-landing/./src/js/modules/pageElements.js?\n}");

/***/ }),

/***/ "./src/js/modules/timer/timer.js":
/*!***************************************!*\
  !*** ./src/js/modules/timer/timer.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countDownTimer: function() { return /* binding */ countDownTimer; }\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar CountdownTimer = /*#__PURE__*/function () {\n  function CountdownTimer(deadline, onUpdate, onComplete) {\n    var _this = this;\n    _classCallCheck(this, CountdownTimer);\n    // Запуск таймера\n    _defineProperty(this, \"start\", function () {\n      _this.update();\n      _this.timerId = setInterval(_this.update, 1000);\n    });\n    // Остановка таймера\n    _defineProperty(this, \"stop\", function () {\n      if (_this.timerId) {\n        clearInterval(_this.timerId);\n        _this.timerId = null;\n      }\n    });\n    // Вычисление оставшегося времени\n    _defineProperty(this, \"calculateTime\", function () {\n      var now = new Date();\n      var diff = Math.max(0, _this.deadline - now);\n      return {\n        days: Math.floor(diff / (1000 * 60 * 60 * 24)),\n        hours: Math.floor(diff / (1000 * 60 * 60) % 24),\n        minutes: Math.floor(diff / (1000 * 60) % 60),\n        seconds: Math.floor(diff / 1000 % 60),\n        diff: diff\n      };\n    });\n    // Форматирование чисел с ведущим нулём\n    _defineProperty(this, \"formatTime\", function (value) {\n      return String(value).padStart(2, '0');\n    });\n    // Обновление данных таймера\n    _defineProperty(this, \"update\", function () {\n      var _this$onUpdate;\n      var _this$calculateTime = _this.calculateTime(),\n        days = _this$calculateTime.days,\n        hours = _this$calculateTime.hours,\n        minutes = _this$calculateTime.minutes,\n        seconds = _this$calculateTime.seconds,\n        diff = _this$calculateTime.diff;\n      var formattedTime = {\n        days: _this.formatTime(days),\n        hours: _this.formatTime(hours),\n        minutes: _this.formatTime(minutes),\n        seconds: _this.formatTime(seconds),\n        daysTitle: CountdownTimer.declensionNum(days, ['день', 'дня', 'дней']),\n        hoursTitle: CountdownTimer.declensionNum(hours, ['час', 'часа', 'часов']),\n        minutesTitle: CountdownTimer.declensionNum(minutes, ['минута', 'минуты', 'минут']),\n        secondsTitle: CountdownTimer.declensionNum(seconds, ['секунда', 'секунды', 'секунд'])\n      };\n\n      // Callback при обновлении\n      (_this$onUpdate = _this.onUpdate) === null || _this$onUpdate === void 0 || _this$onUpdate.call(_this, formattedTime);\n\n      // Остановка таймера по завершении\n      if (diff === 0) {\n        var _this$onComplete;\n        _this.stop();\n        (_this$onComplete = _this.onComplete) === null || _this$onComplete === void 0 || _this$onComplete.call(_this);\n      }\n    });\n    if (!(deadline instanceof Date)) {\n      throw new Error('`deadline` должен быть объектом Date.');\n    }\n    this.deadline = deadline;\n    this.onUpdate = onUpdate;\n    this.onComplete = onComplete;\n    this.timerId = null;\n    this.start();\n  }\n\n  // Склонение числительных для отображения корректной формы слова\n  return _createClass(CountdownTimer, null, [{\n    key: \"declensionNum\",\n    value: function declensionNum(num, words) {\n      return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];\n    }\n  }]);\n}();\nvar countDownTimer = function countDownTimer() {\n  var elDays = document.querySelector('.timer__days');\n  var elDaysText = document.querySelector('.timer__days-text');\n  var elHours = document.querySelector('.timer__hours');\n  var elHoursText = document.querySelector('.timer__hours-text');\n  var elMinutes = document.querySelector('.timer__minutes');\n  var elMinutesText = document.querySelector('.timer__minutes-text');\n  var elSeconds = document.querySelector('.timer__seconds');\n  var elSecondsText = document.querySelector('.timer__seconds-text');\n  // Конечная дата\n  var now = new Date();\n  var deadline = new Date(\"\".concat(now.getFullYear() + 1), \"\".concat(now.getMonth()), \"\".concat(now.getDate() + 10));\n\n  // Создание нового таймера\n  var timer = new CountdownTimer(deadline, function (time) {\n    elDays.textContent = time.days;\n    elHours.textContent = time.hours;\n    elMinutes.textContent = time.minutes;\n    elSeconds.textContent = time.seconds;\n    elDaysText.textContent = time.daysTitle;\n    elHoursText.textContent = time.hoursTitle;\n    elMinutesText.textContent = time.minutesTitle;\n    elSecondsText.textContent = time.secondsTitle;\n  });\n};\n\n//# sourceURL=webpack://Tank-landing/./src/js/modules/timer/timer.js?\n}");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;