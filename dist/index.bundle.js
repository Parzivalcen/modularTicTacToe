/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* FONT FAMILY */\n/*\n=============== \nGlobal Styles/ Reset\n===============\n*/\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4 p,\nfigure,\npicture {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\na,\nli {\n  text-decoration: none;\n  list-style: none;\n}\n\nbody {\n  line-height: 1.5;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n\n  grid-template-rows: -webkit-min-content 1fr;\n  grid-template-rows: min-content 1fr;\n  overflow-x: hidden;\n}\n\n/* imgs easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* remove animation for people who turned them off */\n@media (prefers-reduced-motion: reduce) {\n\n  *,\n  *::before,\n  *::after {\n    -webkit-animation-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01sms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* =========\nutility clases \n=========== */\n.hidden {\n  display: none;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n  gap: var(--gap, 1rem);\n}\n\n.grid {\n  display: grid;\n  gap: var(--gap, 1rem);\n}\n\n.d-block {\n  display: block;\n}\n\n/* header */\n.logo {\n  margin: clamp(1.5rem, 5vw, 2rem);\n}\n\n.primary-header {\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 768px) {\n  .flex {\n    flex-wrap: wrap;\n  }\n}\n\n/* SPACING .flow */\n/* Seclect all the elements of a divider except the first Child */\n/* It is use to make the top and botton line heights and borders the same */\n/* Where is a way to group things, is lower on specificy so we dont overwrite things*/\n.flow>*:where(:not(:first-child)) {\n  margin-top: var(--flow-space, 1rem);\n  /* outline: 1px solid red; */\n}\n\n.container {\n  padding-inline: 0rem;\n  margin-inline: auto;\n  max-width: 1200px;\n}\n\n/* for the visually impaired -Hide Contten- */\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  /* added line */\n  border: 0;\n}\n\n/* -----------\nTIC-TAC-TOE\n--------------- */\n.container {\n  display: flex;\n  place-items: center;\n  flex-direction: column;\n}\n\n.board-container {\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 0;\n  margin: 0;\n  max-width: 300px;\n  place-items: center;\n}\n\n.btn--reset {\n  grid-column: 2;\n}\n\n.box {\n  width: 100px;\n  height: 100px;\n  border: 1px solid grey;\n  text-align: center;\n  font-size: 2rem;\n}\n\n.banish {\n  display: none;\n}\n\n.show-grid-item {\n  display: grid;\n}\n\n/* ----------\nNames\n------------ */\n@media screen and (min-width: 0px) {\n  .title {\n    margin-top: 2rem;\n    text-align: center;\n  }\n\n  .input-fields {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .player-name {\n    margin-top: 1rem\n  }\n\n  .form {\n    padding-block: 0.1rem;\n    padding-inline: 1rem;\n  }\n\n\n  .names {\n    text-align: center;\n    border-bottom: 1px solid grey;\n    padding-bottom: 2rem;\n  }\n\n  .btns {\n    margin-top: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n  }\n\n  .btn:hover {\n    cursor: pointer;\n  }\n\n\n\n  .btn--reset {\n    margin-top: 1rem;\n    padding-inline: 1rem;\n  }\n\n  .game-over {\n    box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.36);\n    background-color: white;\n    max-width: 18rem;\n    text-align: center;\n    border-radius: 10px;\n    padding: 2rem;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, 20%);\n  }\n\n  .box {\n    display: grid;\n    place-items: center;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .input-fields {\n    flex-direction: row;\n    gap: 1rem\n  }\n\n  .player-name {\n    margin-top: 0rem\n  }\n\n  .form img {\n    display: inline;\n    padding-right: 0.5rem;\n  }\n\n}\n\n\n\n/* ------------\ngame over display\n-------------- */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;;;;CAIC;;AAED;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,SAAS;AACX;;AAEA;;;;;EAKE,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;;EAEE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iCAAiC;;EAEjC,2CAA2C;EAC3C,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA,6BAA6B;AAC7B;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,sCAAsC;AACtC;;;;EAIE,aAAa;AACf;;AAEA,oDAAoD;AACpD;;EAEE;;;IAGE,6CAA6C;IAC7C,qCAAqC;IACrC,+CAA+C;IAC/C,uCAAuC;IACvC,uCAAuC;IACvC,gCAAgC;EAClC;AACF;;AAEA;;aAEa;AACb;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA,WAAW;AACX;EACE,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA,kBAAkB;AAClB,iEAAiE;AACjE,2EAA2E;AAC3E,qFAAqF;AACrF;EACE,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA,6CAA6C;AAC7C;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;;iBAEiB;AACjB;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,MAAM;EACN,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;cAEc;AACd;EACE;IACE,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE;EACF;;EAEA;IACE,qBAAqB;IACrB,oBAAoB;EACtB;;;EAGA;IACE,kBAAkB;IAClB,6BAA6B;IAC7B,oBAAoB;EACtB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;;;EAIA;IACE,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,gDAAgD;IAChD,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,+BAA+B;EACjC;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;IACnB;EACF;;EAEA;IACE;EACF;;EAEA;IACE,eAAe;IACf,qBAAqB;EACvB;;AAEF;;;;AAIA;;gBAEgB","sourcesContent":["/* FONT FAMILY */\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap\");\n/*\n=============== \nGlobal Styles/ Reset\n===============\n*/\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4 p,\nfigure,\npicture {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\na,\nli {\n  text-decoration: none;\n  list-style: none;\n}\n\nbody {\n  line-height: 1.5;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n\n  grid-template-rows: -webkit-min-content 1fr;\n  grid-template-rows: min-content 1fr;\n  overflow-x: hidden;\n}\n\n/* imgs easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* remove animation for people who turned them off */\n@media (prefers-reduced-motion: reduce) {\n\n  *,\n  *::before,\n  *::after {\n    -webkit-animation-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01sms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* =========\nutility clases \n=========== */\n.hidden {\n  display: none;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n  gap: var(--gap, 1rem);\n}\n\n.grid {\n  display: grid;\n  gap: var(--gap, 1rem);\n}\n\n.d-block {\n  display: block;\n}\n\n/* header */\n.logo {\n  margin: clamp(1.5rem, 5vw, 2rem);\n}\n\n.primary-header {\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 768px) {\n  .flex {\n    flex-wrap: wrap;\n  }\n}\n\n/* SPACING .flow */\n/* Seclect all the elements of a divider except the first Child */\n/* It is use to make the top and botton line heights and borders the same */\n/* Where is a way to group things, is lower on specificy so we dont overwrite things*/\n.flow>*:where(:not(:first-child)) {\n  margin-top: var(--flow-space, 1rem);\n  /* outline: 1px solid red; */\n}\n\n.container {\n  padding-inline: 0rem;\n  margin-inline: auto;\n  max-width: 1200px;\n}\n\n/* for the visually impaired -Hide Contten- */\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  /* added line */\n  border: 0;\n}\n\n/* -----------\nTIC-TAC-TOE\n--------------- */\n.container {\n  display: flex;\n  place-items: center;\n  flex-direction: column;\n}\n\n.board-container {\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 0;\n  margin: 0;\n  max-width: 300px;\n  place-items: center;\n}\n\n.btn--reset {\n  grid-column: 2;\n}\n\n.box {\n  width: 100px;\n  height: 100px;\n  border: 1px solid grey;\n  text-align: center;\n  font-size: 2rem;\n}\n\n.banish {\n  display: none;\n}\n\n.show-grid-item {\n  display: grid;\n}\n\n/* ----------\nNames\n------------ */\n@media screen and (min-width: 0px) {\n  .title {\n    margin-top: 2rem;\n    text-align: center;\n  }\n\n  .input-fields {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .player-name {\n    margin-top: 1rem\n  }\n\n  .form {\n    padding-block: 0.1rem;\n    padding-inline: 1rem;\n  }\n\n\n  .names {\n    text-align: center;\n    border-bottom: 1px solid grey;\n    padding-bottom: 2rem;\n  }\n\n  .btns {\n    margin-top: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n  }\n\n  .btn:hover {\n    cursor: pointer;\n  }\n\n\n\n  .btn--reset {\n    margin-top: 1rem;\n    padding-inline: 1rem;\n  }\n\n  .game-over {\n    box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.36);\n    background-color: white;\n    max-width: 18rem;\n    text-align: center;\n    border-radius: 10px;\n    padding: 2rem;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, 20%);\n  }\n\n  .box {\n    display: grid;\n    place-items: center;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .input-fields {\n    flex-direction: row;\n    gap: 1rem\n  }\n\n  .player-name {\n    margin-top: 0rem\n  }\n\n  .form img {\n    display: inline;\n    padding-right: 0.5rem;\n  }\n\n}\n\n\n\n/* ------------\ngame over display\n-------------- */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game/checkWinner.js":
/*!*********************************!*\
  !*** ./src/game/checkWinner.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoardArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardArray */ "./src/game/gameBoardArray.js");


const checkWinner = () => {
  const _winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winner = false
  let message = "No one won yet";
 // Go to every winCombos index, if the numbers in one index of winCombos are the same symbol in the original array, return true. 
  let player1wins = _winCombos.some((comboIndex) => {
    return comboIndex.every((index) => (0,_gameBoardArray__WEBPACK_IMPORTED_MODULE_0__.positionIndex)(index) === 'X')
  });
  let player2wins = _winCombos.some((comboIndex) => {
    return comboIndex.every((index) => (0,_gameBoardArray__WEBPACK_IMPORTED_MODULE_0__.positionIndex)(index) === 'O')
  });
  if (player1wins)
  {
    winner = 'X'
  }
  else if(player2wins)
  {
    winner = 'O'
  }
  else if (!_gameBoardArray__WEBPACK_IMPORTED_MODULE_0__.gameboard.getBoard().includes(''))
  {
    winner = 'tie';
  }
  return {winner};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkWinner);

/***/ }),

/***/ "./src/game/gameBoardArray.js":
/*!************************************!*\
  !*** ./src/game/gameBoardArray.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard),
/* harmony export */   "positionIndex": () => (/* binding */ positionIndex)
/* harmony export */ });
const gameboard = (() => {
  let _boardArr = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => _boardArr;
  return { getBoard };
})();

const positionIndex = (index) => gameboard.getBoard()[index];




/***/ }),

/***/ "./src/game/humanPlay.js":
/*!*******************************!*\
  !*** ./src/game/humanPlay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "humanPlay": () => (/* binding */ humanPlay)
/* harmony export */ });
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ "./src/game/players.js");
/* harmony import */ var _gameBoardArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardArray.js */ "./src/game/gameBoardArray.js");
/* harmony import */ var _checkWinner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkWinner.js */ "./src/game/checkWinner.js");





const player1 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.player)(1);
const player2 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.player)(2);
let _played1 = false
let _played2 = false
// Get position from player
const getPositionFromPlayer = (symbol) => {
  let position = prompt(`enter a position on the board for ${symbol}`)
  position = +position;
  return position;
}
const humanPlay = (X, O) => {


  // check if player has played, if not, allow to play until there is a winner
  if (_played1) 
  {
      player2.play(getPositionFromPlayer(O));

    _played2 = true;
    _played1 = false;
    console.log(_played1);
    console.log(_played2);
  } 
  else 
  {
    
    // populate board Array
    player1.play(getPositionFromPlayer(X));
    
    _played1 = true;
    _played2 = false;
    console.log(_played1);
    console.log(_played2);
  }
    
  // print winner or tie on screen.
  if ((0,_checkWinner_js__WEBPACK_IMPORTED_MODULE_2__["default"])().winner || (0,_checkWinner_js__WEBPACK_IMPORTED_MODULE_2__["default"])().winner == 'tie' ) 
  {
    // endGame();
  }
  
  // LOG ARRAY
  console.log(_gameBoardArray_js__WEBPACK_IMPORTED_MODULE_1__.gameboard.getBoard());  
  return{_played1, _played2};
}


/***/ }),

/***/ "./src/game/players.js":
/*!*****************************!*\
  !*** ./src/game/players.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameBoardArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardArray.js */ "./src/game/gameBoardArray.js");
  

  const player = (number) => {
    let name = () => getName(number);  
    const play = (position) =>{
      if (number === 1)
      {
        _gameBoardArray_js__WEBPACK_IMPORTED_MODULE_0__.gameboard.getBoard()[position] = 'X';
      }else if (number === 2)
      {
        _gameBoardArray_js__WEBPACK_IMPORTED_MODULE_0__.gameboard.getBoard()[position] = 'O';
      }
    }
    return {name, play};
  }
  







/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_O_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/O.svg */ "./src/imgs/O.svg");

const home = () =>{
  const homePage = document.createElement('div')
  homePage.classList.add('container', 'container--home')
  homePage.innerHTML = `
  <div class="title">
    <h1>Tic-Tac-Toe</h1>
  </div>
  <form class="names">
    <h2>Welcome, enter a cool Name.</h2>
    <div class="form">
      <div class="input-fields">
        <!-- Player 1 name -->
        <label for="name-1" class="player-name">Player 1 name:</label>
        <input type="text" class="form" id="name-1" name="name-1">
        <!-- Player 2 name -->
          <label for="name-2" class="player-name">Player 2 name:</label>
          <input type="text" class="form" id="name-2" name="name-2">
      </div>
      <!-- Buttons -->
      <div class="btns">
        <button class="btn btn--play" type="submit" >Play!</button>
        <button class="btn btn--a-i">Play with A.I.</button>
      </div>
    </div>
</form>
  `
  return homePage;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/page/htmlBoard.js":
/*!*******************************!*\
  !*** ./src/page/htmlBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createBoard = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = `
  <div class="title">
    <h1>Tic-Tac-Toe</h1>
  </div>
  <div class="board-container">
    <div class="box" ><p data-box=0  class="symbol symbol--0"></p></div>
    <div class="box" ><p data-box=1  class="symbol symbol--1"></p></div>
    <div class="box" ><p data-box=2  class="symbol symbol--2"></p></div>
    <div class="box"><p  data-box=3 class="symbol symbol--3"></p></div>
    <div class="box" ><p data-box=4  class="symbol symbol--4"></p></div>
    <div class="box" ><p data-box=5  class="symbol symbol--5"></p></div>
    <div class="box" ><p data-box=6  class="symbol symbol--6"></p></div>
    <div class="box" ><p data-box=7  class="symbol symbol--7"></p></div>
    <div class="box" ><p data-box=8  class="symbol symbol--8"></p></div>
  </div>
  <button class="btn btn--reset">reset</button>
  `
  return container
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);

/***/ }),

/***/ "./src/imgs/O.svg":
/*!************************!*\
  !*** ./src/imgs/O.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a6dcf09223357a4829d.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _page_htmlBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/htmlBoard.js */ "./src/page/htmlBoard.js");
/* harmony import */ var _game_gameBoardArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/gameBoardArray.js */ "./src/game/gameBoardArray.js");
/* harmony import */ var _game_players_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/players.js */ "./src/game/players.js");
/* harmony import */ var _game_checkWinner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/checkWinner.js */ "./src/game/checkWinner.js");
/* harmony import */ var _game_humanPlay_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/humanPlay.js */ "./src/game/humanPlay.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");








const body = document.body;
const main = document.createElement('main');
body.appendChild(main);

main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
// Play btn clicked
const btnPlay = document.querySelector('.btn--play');
btnPlay.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.container--home').remove();
  main.appendChild((0,_page_htmlBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
})

// while (!checkWinner().winner){
//   humanPlay('X', 'O')
// }




// console.log(player1)

console.log(_game_gameBoardArray_js__WEBPACK_IMPORTED_MODULE_2__.gameboard.getBoard());

console.log( (0,_game_checkWinner_js__WEBPACK_IMPORTED_MODULE_4__["default"])().winner);
// console.log( positionIndex(boardArray, 2));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDYTtBQUNxQjtBQUMxQjtBQUNPO0FBQ0Y7QUFDekI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsb0RBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4REFBVztBQUM5QixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQSxZQUFZLHVFQUFrQjs7QUFFOUIsYUFBYSxnRUFBVztBQUN4Qiw4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvZ2FtZS9jaGVja1dpbm5lci5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9nYW1lL2dhbWVCb2FyZEFycmF5LmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL2dhbWUvaHVtYW5QbGF5LmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL2dhbWUvcGxheWVycy5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL3BhZ2UvaHRtbEJvYXJkLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NTAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGT05UIEZBTUlMWSAqL1xcbi8qXFxuPT09PT09PT09PT09PT09IFxcbkdsb2JhbCBTdHlsZXMvIFJlc2V0XFxuPT09PT09PT09PT09PT09XFxuKi9cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCBwLFxcbmZpZ3VyZSxcXG5waWN0dXJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5hLFxcbmxpIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAtd2Via2l0LW1pbi1jb250ZW50IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiBpbWdzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogZm9ybSBlbGVtZW50cyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiByZW1vdmUgYW5pbWF0aW9uIGZvciBwZW9wbGUgd2hvIHR1cm5lZCB0aGVtIG9mZiAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFzbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbi8qID09PT09PT09PVxcbnV0aWxpdHkgY2xhc2VzIFxcbj09PT09PT09PT09ICovXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaW5saW5lIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tZ2FwLCAxcmVtKTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogdmFyKC0tZ2FwLCAxcmVtKTtcXG59XFxuXFxuLmQtYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbi5sb2dvIHtcXG4gIG1hcmdpbjogY2xhbXAoMS41cmVtLCA1dncsIDJyZW0pO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5mbGV4IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cXG5cXG4vKiBTUEFDSU5HIC5mbG93ICovXFxuLyogU2VjbGVjdCBhbGwgdGhlIGVsZW1lbnRzIG9mIGEgZGl2aWRlciBleGNlcHQgdGhlIGZpcnN0IENoaWxkICovXFxuLyogSXQgaXMgdXNlIHRvIG1ha2UgdGhlIHRvcCBhbmQgYm90dG9uIGxpbmUgaGVpZ2h0cyBhbmQgYm9yZGVycyB0aGUgc2FtZSAqL1xcbi8qIFdoZXJlIGlzIGEgd2F5IHRvIGdyb3VwIHRoaW5ncywgaXMgbG93ZXIgb24gc3BlY2lmaWN5IHNvIHdlIGRvbnQgb3ZlcndyaXRlIHRoaW5ncyovXFxuLmZsb3c+Kjp3aGVyZSg6bm90KDpmaXJzdC1jaGlsZCkpIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLWZsb3ctc3BhY2UsIDFyZW0pO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWlubGluZTogMHJlbTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLyogZm9yIHRoZSB2aXN1YWxseSBpbXBhaXJlZCAtSGlkZSBDb250dGVuLSAqL1xcbi5zci1vbmx5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAvKiBhZGRlZCBsaW5lICovXFxuICBib3JkZXI6IDA7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tXFxuVElDLVRBQy1UT0VcXG4tLS0tLS0tLS0tLS0tLS0gKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDA7XFxuICBtYXJnaW46IDA7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi0tcmVzZXQge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5ib3gge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5iYW5pc2gge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3ctZ3JpZC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS1cXG5OYW1lc1xcbi0tLS0tLS0tLS0tLSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgLnRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmlucHV0LWZpZWxkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGxheWVyLW5hbWUge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtXFxuICB9XFxuXFxuICAuZm9ybSB7XFxuICAgIHBhZGRpbmctYmxvY2s6IDAuMXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICB9XFxuXFxuXFxuICAubmFtZXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gIC5idG5zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxuXFxuICAuYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcblxcblxcbiAgLmJ0bi0tcmVzZXQge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5nYW1lLW92ZXIge1xcbiAgICBib3gtc2hhZG93OiAtMXB4IDBweCA1cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKTtcXG4gIH1cXG5cXG4gIC5ib3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgLmlucHV0LWZpZWxkcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMXJlbVxcbiAgfVxcblxcbiAgLnBsYXllci1uYW1lIHtcXG4gICAgbWFyZ2luLXRvcDogMHJlbVxcbiAgfVxcblxcbiAgLmZvcm0gaW1nIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICB9XFxuXFxufVxcblxcblxcblxcbi8qIC0tLS0tLS0tLS0tLVxcbmdhbWUgb3ZlciBkaXNwbGF5XFxuLS0tLS0tLS0tLS0tLS0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFFaEI7Ozs7Q0FJQzs7QUFFRDs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7RUFPRSxTQUFTO0FBQ1g7O0FBRUE7Ozs7O0VBS0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQ0FBaUM7O0VBRWpDLDJDQUEyQztFQUMzQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUVBLDZCQUE2QjtBQUM3Qjs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSxzQ0FBc0M7QUFDdEM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsb0RBQW9EO0FBQ3BEOztFQUVFOzs7SUFHRSw2Q0FBNkM7SUFDN0MscUNBQXFDO0lBQ3JDLCtDQUErQztJQUMvQyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLGdDQUFnQztFQUNsQztBQUNGOztBQUVBOzthQUVhO0FBQ2I7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBLGtCQUFrQjtBQUNsQixpRUFBaUU7QUFDakUsMkVBQTJFO0FBQzNFLHFGQUFxRjtBQUNyRjtFQUNFLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQSw2Q0FBNkM7QUFDN0M7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7O2lCQUVpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLE1BQU07RUFDTixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Y0FFYztBQUNkO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOzs7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7OztFQUlBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CO0VBQ0Y7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtFQUN2Qjs7QUFFRjs7OztBQUlBOztnQkFFZ0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRk9OVCBGQU1JTFkgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NTAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4vKlxcbj09PT09PT09PT09PT09PSBcXG5HbG9iYWwgU3R5bGVzLyBSZXNldFxcbj09PT09PT09PT09PT09PVxcbiovXFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQgcCxcXG5maWd1cmUsXFxucGljdHVyZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYSxcXG5saSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogLXdlYmtpdC1taW4tY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLyogaW1ncyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGZvcm0gZWxlbWVudHMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogcmVtb3ZlIGFuaW1hdGlvbiBmb3IgcGVvcGxlIHdobyB0dXJuZWQgdGhlbSBvZmYgKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxc21zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiA9PT09PT09PT1cXG51dGlsaXR5IGNsYXNlcyBcXG49PT09PT09PT09PSAqL1xcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLWdhcCwgMXJlbSk7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLWdhcCwgMXJlbSk7XFxufVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG4ubG9nbyB7XFxuICBtYXJnaW46IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZmxleCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLyogU1BBQ0lORyAuZmxvdyAqL1xcbi8qIFNlY2xlY3QgYWxsIHRoZSBlbGVtZW50cyBvZiBhIGRpdmlkZXIgZXhjZXB0IHRoZSBmaXJzdCBDaGlsZCAqL1xcbi8qIEl0IGlzIHVzZSB0byBtYWtlIHRoZSB0b3AgYW5kIGJvdHRvbiBsaW5lIGhlaWdodHMgYW5kIGJvcmRlcnMgdGhlIHNhbWUgKi9cXG4vKiBXaGVyZSBpcyBhIHdheSB0byBncm91cCB0aGluZ3MsIGlzIGxvd2VyIG9uIHNwZWNpZmljeSBzbyB3ZSBkb250IG92ZXJ3cml0ZSB0aGluZ3MqL1xcbi5mbG93Pio6d2hlcmUoOm5vdCg6Zmlyc3QtY2hpbGQpKSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1mbG93LXNwYWNlLCAxcmVtKTtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZy1pbmxpbmU6IDByZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi8qIGZvciB0aGUgdmlzdWFsbHkgaW1wYWlyZWQgLUhpZGUgQ29udHRlbi0gKi9cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLyogYWRkZWQgbGluZSAqL1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLVxcblRJQy1UQUMtVE9FXFxuLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tLXJlc2V0IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uYm94IHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYmFuaXNoIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93LWdyaWQtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tXFxuTmFtZXNcXG4tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcXG4gIC50aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbnB1dC1maWVsZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnBsYXllci1uYW1lIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbVxcbiAgfVxcblxcbiAgLmZvcm0ge1xcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjFyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgfVxcblxcblxcbiAgLm5hbWVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAuYnRucyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG5cXG4gIC5idG4tLXJlc2V0IHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICB9XFxuXFxuICAuZ2FtZS1vdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggNXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XFxuICB9XFxuXFxuICAuYm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC5pbnB1dC1maWVsZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDFyZW1cXG4gIH1cXG5cXG4gIC5wbGF5ZXItbmFtZSB7XFxuICAgIG1hcmdpbi10b3A6IDByZW1cXG4gIH1cXG5cXG4gIC5mb3JtIGltZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgfVxcblxcbn1cXG5cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS1cXG5nYW1lIG92ZXIgZGlzcGxheVxcbi0tLS0tLS0tLS0tLS0tICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWVib2FyZCwgcG9zaXRpb25JbmRleCB9IGZyb20gXCIuL2dhbWVCb2FyZEFycmF5XCI7XG5cbmNvbnN0IGNoZWNrV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCBfd2luQ29tYm9zID0gW1xuICAgIFswLCAxLCAyXSxcbiAgICBbMywgNCwgNV0sXG4gICAgWzYsIDcsIDhdLFxuICAgIFswLCAzLCA2XSxcbiAgICBbMSwgNCwgN10sXG4gICAgWzIsIDUsIDhdLFxuICAgIFswLCA0LCA4XSxcbiAgICBbMiwgNCwgNl0sXG4gIF07XG4gIGxldCB3aW5uZXIgPSBmYWxzZVxuICBsZXQgbWVzc2FnZSA9IFwiTm8gb25lIHdvbiB5ZXRcIjtcbiAvLyBHbyB0byBldmVyeSB3aW5Db21ib3MgaW5kZXgsIGlmIHRoZSBudW1iZXJzIGluIG9uZSBpbmRleCBvZiB3aW5Db21ib3MgYXJlIHRoZSBzYW1lIHN5bWJvbCBpbiB0aGUgb3JpZ2luYWwgYXJyYXksIHJldHVybiB0cnVlLiBcbiAgbGV0IHBsYXllcjF3aW5zID0gX3dpbkNvbWJvcy5zb21lKChjb21ib0luZGV4KSA9PiB7XG4gICAgcmV0dXJuIGNvbWJvSW5kZXguZXZlcnkoKGluZGV4KSA9PiBwb3NpdGlvbkluZGV4KGluZGV4KSA9PT0gJ1gnKVxuICB9KTtcbiAgbGV0IHBsYXllcjJ3aW5zID0gX3dpbkNvbWJvcy5zb21lKChjb21ib0luZGV4KSA9PiB7XG4gICAgcmV0dXJuIGNvbWJvSW5kZXguZXZlcnkoKGluZGV4KSA9PiBwb3NpdGlvbkluZGV4KGluZGV4KSA9PT0gJ08nKVxuICB9KTtcbiAgaWYgKHBsYXllcjF3aW5zKVxuICB7XG4gICAgd2lubmVyID0gJ1gnXG4gIH1cbiAgZWxzZSBpZihwbGF5ZXIyd2lucylcbiAge1xuICAgIHdpbm5lciA9ICdPJ1xuICB9XG4gIGVsc2UgaWYgKCFnYW1lYm9hcmQuZ2V0Qm9hcmQoKS5pbmNsdWRlcygnJykpXG4gIHtcbiAgICB3aW5uZXIgPSAndGllJztcbiAgfVxuICByZXR1cm4ge3dpbm5lcn07XG59XG5leHBvcnQgZGVmYXVsdCBjaGVja1dpbm5lcjsiLCJjb25zdCBnYW1lYm9hcmQgPSAoKCkgPT4ge1xuICBsZXQgX2JvYXJkQXJyID0gW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdO1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IF9ib2FyZEFycjtcbiAgcmV0dXJuIHsgZ2V0Qm9hcmQgfTtcbn0pKCk7XG5cbmNvbnN0IHBvc2l0aW9uSW5kZXggPSAoaW5kZXgpID0+IGdhbWVib2FyZC5nZXRCb2FyZCgpW2luZGV4XTtcblxuXG5leHBvcnQge2dhbWVib2FyZCwgcG9zaXRpb25JbmRleH0iLCJpbXBvcnQge3BsYXllcn0gZnJvbSAnLi9wbGF5ZXJzLmpzJ1xuaW1wb3J0IHtnYW1lYm9hcmR9IGZyb20gJy4vZ2FtZUJvYXJkQXJyYXkuanMnO1xuaW1wb3J0IGNoZWNrV2lubmVyIGZyb20gJy4vY2hlY2tXaW5uZXIuanMnO1xuXG5cbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoMSk7XG5jb25zdCBwbGF5ZXIyID0gcGxheWVyKDIpO1xubGV0IF9wbGF5ZWQxID0gZmFsc2VcbmxldCBfcGxheWVkMiA9IGZhbHNlXG4vLyBHZXQgcG9zaXRpb24gZnJvbSBwbGF5ZXJcbmNvbnN0IGdldFBvc2l0aW9uRnJvbVBsYXllciA9IChzeW1ib2wpID0+IHtcbiAgbGV0IHBvc2l0aW9uID0gcHJvbXB0KGBlbnRlciBhIHBvc2l0aW9uIG9uIHRoZSBib2FyZCBmb3IgJHtzeW1ib2x9YClcbiAgcG9zaXRpb24gPSArcG9zaXRpb247XG4gIHJldHVybiBwb3NpdGlvbjtcbn1cbmNvbnN0IGh1bWFuUGxheSA9IChYLCBPKSA9PiB7XG5cblxuICAvLyBjaGVjayBpZiBwbGF5ZXIgaGFzIHBsYXllZCwgaWYgbm90LCBhbGxvdyB0byBwbGF5IHVudGlsIHRoZXJlIGlzIGEgd2lubmVyXG4gIGlmIChfcGxheWVkMSkgXG4gIHtcbiAgICAgIHBsYXllcjIucGxheShnZXRQb3NpdGlvbkZyb21QbGF5ZXIoTykpO1xuXG4gICAgX3BsYXllZDIgPSB0cnVlO1xuICAgIF9wbGF5ZWQxID0gZmFsc2U7XG4gICAgY29uc29sZS5sb2coX3BsYXllZDEpO1xuICAgIGNvbnNvbGUubG9nKF9wbGF5ZWQyKTtcbiAgfSBcbiAgZWxzZSBcbiAge1xuICAgIFxuICAgIC8vIHBvcHVsYXRlIGJvYXJkIEFycmF5XG4gICAgcGxheWVyMS5wbGF5KGdldFBvc2l0aW9uRnJvbVBsYXllcihYKSk7XG4gICAgXG4gICAgX3BsYXllZDEgPSB0cnVlO1xuICAgIF9wbGF5ZWQyID0gZmFsc2U7XG4gICAgY29uc29sZS5sb2coX3BsYXllZDEpO1xuICAgIGNvbnNvbGUubG9nKF9wbGF5ZWQyKTtcbiAgfVxuICAgIFxuICAvLyBwcmludCB3aW5uZXIgb3IgdGllIG9uIHNjcmVlbi5cbiAgaWYgKGNoZWNrV2lubmVyKCkud2lubmVyIHx8IGNoZWNrV2lubmVyKCkud2lubmVyID09ICd0aWUnICkgXG4gIHtcbiAgICAvLyBlbmRHYW1lKCk7XG4gIH1cbiAgXG4gIC8vIExPRyBBUlJBWVxuICBjb25zb2xlLmxvZyhnYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7ICBcbiAgcmV0dXJue19wbGF5ZWQxLCBfcGxheWVkMn07XG59XG5leHBvcnQge2h1bWFuUGxheX0iLCIgIGltcG9ydCB7Z2FtZWJvYXJkfSBmcm9tICcuL2dhbWVCb2FyZEFycmF5LmpzJztcblxuICBjb25zdCBwbGF5ZXIgPSAobnVtYmVyKSA9PiB7XG4gICAgbGV0IG5hbWUgPSAoKSA9PiBnZXROYW1lKG51bWJlcik7ICBcbiAgICBjb25zdCBwbGF5ID0gKHBvc2l0aW9uKSA9PntcbiAgICAgIGlmIChudW1iZXIgPT09IDEpXG4gICAgICB7XG4gICAgICAgIGdhbWVib2FyZC5nZXRCb2FyZCgpW3Bvc2l0aW9uXSA9ICdYJztcbiAgICAgIH1lbHNlIGlmIChudW1iZXIgPT09IDIpXG4gICAgICB7XG4gICAgICAgIGdhbWVib2FyZC5nZXRCb2FyZCgpW3Bvc2l0aW9uXSA9ICdPJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtuYW1lLCBwbGF5fTtcbiAgfVxuICBcblxuZXhwb3J0IHtwbGF5ZXJ9XG5cblxuXG4iLCJpbXBvcnQgaWNvbiBmcm9tICcuL2ltZ3MvTy5zdmcnXG5jb25zdCBob21lID0gKCkgPT57XG4gIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2NvbnRhaW5lci0taG9tZScpXG4gIGhvbWVQYWdlLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgPGgxPlRpYy1UYWMtVG9lPC9oMT5cbiAgPC9kaXY+XG4gIDxmb3JtIGNsYXNzPVwibmFtZXNcIj5cbiAgICA8aDI+V2VsY29tZSwgZW50ZXIgYSBjb29sIE5hbWUuPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkc1wiPlxuICAgICAgICA8IS0tIFBsYXllciAxIG5hbWUgLS0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lLTFcIiBjbGFzcz1cInBsYXllci1uYW1lXCI+UGxheWVyIDEgbmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm1cIiBpZD1cIm5hbWUtMVwiIG5hbWU9XCJuYW1lLTFcIj5cbiAgICAgICAgPCEtLSBQbGF5ZXIgMiBuYW1lIC0tPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lLTJcIiBjbGFzcz1cInBsYXllci1uYW1lXCI+UGxheWVyIDIgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybVwiIGlkPVwibmFtZS0yXCIgbmFtZT1cIm5hbWUtMlwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIEJ1dHRvbnMgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0tcGxheVwiIHR5cGU9XCJzdWJtaXRcIiA+UGxheSE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLWEtaVwiPlBsYXkgd2l0aCBBLkkuPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZm9ybT5cbiAgYFxuICByZXR1cm4gaG9tZVBhZ2U7XG59XG5leHBvcnQgZGVmYXVsdCBob21lIiwiY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgIDxoMT5UaWMtVGFjLVRvZTwvaDE+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm9hcmQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiID48cCBkYXRhLWJveD0wICBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLTBcIj48L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiID48cCBkYXRhLWJveD0xICBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLTFcIj48L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiID48cCBkYXRhLWJveD0yICBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLTJcIj48L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiPjxwICBkYXRhLWJveD0zIGNsYXNzPVwic3ltYm9sIHN5bWJvbC0tM1wiPjwvcD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm94XCIgPjxwIGRhdGEtYm94PTQgIGNsYXNzPVwic3ltYm9sIHN5bWJvbC0tNFwiPjwvcD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm94XCIgPjxwIGRhdGEtYm94PTUgIGNsYXNzPVwic3ltYm9sIHN5bWJvbC0tNVwiPjwvcD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm94XCIgPjxwIGRhdGEtYm94PTYgIGNsYXNzPVwic3ltYm9sIHN5bWJvbC0tNlwiPjwvcD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm94XCIgPjxwIGRhdGEtYm94PTcgIGNsYXNzPVwic3ltYm9sIHN5bWJvbC0tN1wiPjwvcD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm94XCIgPjxwIGRhdGEtYm94PTggIGNsYXNzPVwic3ltYm9sIHN5bWJvbC0tOFwiPjwvcD48L2Rpdj5cbiAgPC9kaXY+XG4gIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1yZXNldFwiPnJlc2V0PC9idXR0b24+XG4gIGBcbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9hcmQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNyZWF0ZUJvYXJkIGZyb20gJy4vcGFnZS9odG1sQm9hcmQuanMnO1xuaW1wb3J0IHtnYW1lYm9hcmQsIHBvc2l0aW9uSW5kZXggfSBmcm9tICcuL2dhbWUvZ2FtZUJvYXJkQXJyYXkuanMnO1xuaW1wb3J0IHtwbGF5ZXJ9IGZyb20gJy4vZ2FtZS9wbGF5ZXJzLmpzJztcbmltcG9ydCBjaGVja1dpbm5lciBmcm9tICcuL2dhbWUvY2hlY2tXaW5uZXIuanMnO1xuaW1wb3J0IHtodW1hblBsYXl9IGZyb20gJy4vZ2FtZS9odW1hblBsYXkuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbm1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XG4vLyBQbGF5IGJ0biBjbGlja2VkXG5jb25zdCBidG5QbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcGxheScpO1xuYnRuUGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci0taG9tZScpLnJlbW92ZSgpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkKCkpO1xufSlcblxuLy8gd2hpbGUgKCFjaGVja1dpbm5lcigpLndpbm5lcil7XG4vLyAgIGh1bWFuUGxheSgnWCcsICdPJylcbi8vIH1cblxuXG5cblxuLy8gY29uc29sZS5sb2cocGxheWVyMSlcblxuY29uc29sZS5sb2coZ2FtZWJvYXJkLmdldEJvYXJkKCkpO1xuXG5jb25zb2xlLmxvZyggY2hlY2tXaW5uZXIoKS53aW5uZXIpO1xuLy8gY29uc29sZS5sb2coIHBvc2l0aW9uSW5kZXgoYm9hcmRBcnJheSwgMikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==