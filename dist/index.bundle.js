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

/***/ "./src/game/AImove.js":
/*!****************************!*\
  !*** ./src/game/AImove.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This module will handle the movement for the AI 
const AImove = (boardArray) => {
  let posibleMoves = [];
  for(let i = 0, len = boardArray.length; i < len; i++){
    if(boardArray[i] === ''){
      posibleMoves.push(i);
    }

  }
  let random = Math.floor(Math.random()*posibleMoves.length);
  
  return posibleMoves[random];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AImove);

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
/* harmony import */ var _playersPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playersPlay */ "./src/game/playersPlay.js");
/* harmony import */ var _page_getName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/getName */ "./src/page/getName.js");



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
    message = `${_page_getName__WEBPACK_IMPORTED_MODULE_2__.names[0]} wins`
  }
  else if(player2wins)
  {
    winner = 'O'
    message = `${_page_getName__WEBPACK_IMPORTED_MODULE_2__.names[1]} wins`
  }
  else if (!_gameBoardArray__WEBPACK_IMPORTED_MODULE_0__.gameboard.getBoard().includes(''))
  {
    winner = 'tie';
    message = 'Tie'
  }
  return {winner, message};
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
/* harmony import */ var _page_getName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/getName.js */ "./src/page/getName.js");
  
  

  
  
  const player = (number) => {
    let name = () => {
      let name = (0,_page_getName_js__WEBPACK_IMPORTED_MODULE_1__.getName)(number)
      ;(0,_page_getName_js__WEBPACK_IMPORTED_MODULE_1__.storeName)(name);
      return name
    };  
    

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

/***/ "./src/game/playersPlay.js":
/*!*********************************!*\
  !*** ./src/game/playersPlay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AIplay": () => (/* binding */ AIplay),
/* harmony export */   "gameEnded": () => (/* binding */ gameEnded),
/* harmony export */   "humanPlay": () => (/* binding */ humanPlay),
/* harmony export */   "player1": () => (/* binding */ player1),
/* harmony export */   "player2": () => (/* binding */ player2),
/* harmony export */   "setgameEnded": () => (/* binding */ setgameEnded)
/* harmony export */ });
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ "./src/game/players.js");
/* harmony import */ var _gameBoardArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardArray.js */ "./src/game/gameBoardArray.js");
/* harmony import */ var _checkWinner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkWinner.js */ "./src/game/checkWinner.js");
/* harmony import */ var _page_getPosition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page/getPosition.js */ "./src/page/getPosition.js");
/* harmony import */ var _page_endGameMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page/endGameMessage.js */ "./src/page/endGameMessage.js");
/* harmony import */ var _page_btnReset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page/btnReset.js */ "./src/page/btnReset.js");
/* harmony import */ var _AImove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AImove */ "./src/game/AImove.js");



// Get position from player







const player1 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.player)(1);
const player2 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.player)(2);
let _played1 = false
let _played2 = false
let gameEnded =  false;


// Allow us to Set gameEnded from outside the module. 
const setgameEnded =(val) => gameEnded = val;

const humanPlay = (e, X, O) => {
  
  let box = (0,_page_getPosition_js__WEBPACK_IMPORTED_MODULE_3__.getPositionFromPlayer)(e);
  console.log('BOX', box)
  // check if player has played, if not, allow to play until there is a winner
  if (_played1) 
  {
      (0,_page_getPosition_js__WEBPACK_IMPORTED_MODULE_3__.PositionOnDOMboard)(e, O);
      player2.play(box);
      _played2 = true;
      _played1 = false;
    } 
    else 
    {
      
      (0,_page_getPosition_js__WEBPACK_IMPORTED_MODULE_3__.PositionOnDOMboard)(e, X);
      // populate board Array
      player1.play(box);
      
    _played1 = true;
    _played2 = false;
  }
    
  // print winner or tie on screen.
  if ((0,_checkWinner_js__WEBPACK_IMPORTED_MODULE_2__["default"])().winner || (0,_checkWinner_js__WEBPACK_IMPORTED_MODULE_2__["default"])().winner == 'tie' ) 
  {
    (0,_page_endGameMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    gameEnded = true;
    (0,_page_btnReset_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_played1, _played2);
  }
  
  // LOG ARRAY
  console.log(_gameBoardArray_js__WEBPACK_IMPORTED_MODULE_1__.gameboard.getBoard());  
  return{_played1, _played2};
}
// AI play
const AIplay = (e, X, O) => {
  let box =(0,_page_getPosition_js__WEBPACK_IMPORTED_MODULE_3__.getPositionFromPlayer)(e)
  ;(0,_page_getPosition_js__WEBPACK_IMPORTED_MODULE_3__.PositionOnDOMboard)(e, X);
  // populate board Array 
  player1.play(box);
  let aiMove = (0,_AImove__WEBPACK_IMPORTED_MODULE_6__["default"])(_gameBoardArray_js__WEBPACK_IMPORTED_MODULE_1__.gameboard.getBoard())
  console.log(aiMove)
  
  // If one of thse conditions is met, it does not have to play anymore
  if(aiMove !== undefined && !(0,_checkWinner_js__WEBPACK_IMPORTED_MODULE_2__["default"])().winner)
  {
    
    
    // populate board Array
    player2.play(aiMove)
    document.querySelector(`[data-box = "${aiMove}"]`).innerHTML = O;
    
  }
  
// print winner or tie on screen.
if ((0,_checkWinner_js__WEBPACK_IMPORTED_MODULE_2__["default"])().winner || (0,_checkWinner_js__WEBPACK_IMPORTED_MODULE_2__["default"])().winner == 'tie' ) 
{
  (0,_page_endGameMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
}

// LOG ARRAY
console.log(_gameBoardArray_js__WEBPACK_IMPORTED_MODULE_1__.gameboard.getBoard());

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

/***/ "./src/page/btnReset.js":
/*!******************************!*\
  !*** ./src/page/btnReset.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_playersPlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/playersPlay */ "./src/game/playersPlay.js");
/* harmony import */ var _game_checkWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/checkWinner */ "./src/game/checkWinner.js");
/* harmony import */ var _game_gameBoardArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/gameBoardArray */ "./src/game/gameBoardArray.js");




/*
when the reset button or a element that has that class is pressed, reset all the 
values
  - It gets called on playersPlay when there is a winner, and the htmlBoard, to 
  reset the values at any time
*/ 

const reset = (_played1, _played2) => {
  document.addEventListener('click', (e) => {  
    if(e.target.classList.contains('btn--reset')){
      _played1 = false;
      _played2 = false;
      // Modify gameEnded variable on players.Play.js
      (0,_game_playersPlay__WEBPACK_IMPORTED_MODULE_0__.setgameEnded)(false)
      // modify check winner
      ;(0,_game_checkWinner__WEBPACK_IMPORTED_MODULE_1__["default"])().winner = false;
      
      let counter = 0;
      _game_gameBoardArray__WEBPACK_IMPORTED_MODULE_2__.gameboard.getBoard().forEach(() => {
        // Clears array board
        _game_gameBoardArray__WEBPACK_IMPORTED_MODULE_2__.gameboard.getBoard()[counter] = '';
        // Clear board on the  DOM. 
        document.querySelector(`.symbol--${counter}`).innerHTML = '';
        counter ++;
      })
      // Deletete END GAME message
      if(document.querySelector('.end-game-message'))
      {
        document.querySelector('.end-game-message').remove();
      }
    }
  })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset); 

/***/ }),

/***/ "./src/page/endGameMessage.js":
/*!************************************!*\
  !*** ./src/page/endGameMessage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_checkWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/checkWinner */ "./src/game/checkWinner.js");

const endGame = () => {
  const win = document.createElement('div');
  win.classList.add('end-game-message', 'game-over');
  win.innerHTML = `
  <h1>${(0,_game_checkWinner__WEBPACK_IMPORTED_MODULE_0__["default"])().message}</h1>
  <button class="btn btn--reset">Play again</button>
    `;
  document.querySelector('.container').appendChild(win);
  return true; 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endGame);

/***/ }),

/***/ "./src/page/getName.js":
/*!*****************************!*\
  !*** ./src/page/getName.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getName": () => (/* binding */ getName),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "storeName": () => (/* binding */ storeName)
/* harmony export */ });

const getName = (playerNumber) =>{
  let name;
  name = document.querySelector(`#name-${playerNumber}`).value;
  if (name == '')
  {
    name = `Player ${playerNumber}`
  }
  return name;
}
// Store names in Local Storage and or list.
/*
this function is called when player.name()  is called to store the name from the 
form on a list called names.
  - Ths list names is used on the checkWinner() module for the message of who wins
  names[0] == player 1, names[1] == player 2
*/ 

let names = [];
const storeName = (name) => {
  names.push(name);
  return names
}



/***/ }),

/***/ "./src/page/getPosition.js":
/*!*********************************!*\
  !*** ./src/page/getPosition.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionOnDOMboard": () => (/* binding */ PositionOnDOMboard),
/* harmony export */   "getPositionFromPlayer": () => (/* binding */ getPositionFromPlayer)
/* harmony export */ });
const getPositionFromPlayer = (e) => {
  let symbolHTML = e.target.firstChild;
  return +symbolHTML.getAttribute("data-box");
  
}

const PositionOnDOMboard = (e, symbol) => {
  e.target.firstChild.innerHTML = symbol;
}



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
/* harmony import */ var _game_playersPlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/playersPlay */ "./src/game/playersPlay.js");
/* harmony import */ var _btnReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btnReset */ "./src/page/btnReset.js");



const createBoard = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = `
  <div class="title">
    <h1>Tic-Tac-Toe</h1>
    </div>
    <h1>${_game_playersPlay__WEBPACK_IMPORTED_MODULE_0__.player1.name()} vs ${_game_playersPlay__WEBPACK_IMPORTED_MODULE_0__.player2.name()}</h1>
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
  ;(0,_btnReset__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return container
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);

/***/ }),

/***/ "./src/page/startPlay.js":
/*!*******************************!*\
  !*** ./src/page/startPlay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_playersPlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/playersPlay */ "./src/game/playersPlay.js");


const startPlay = (AI) => {
  document.querySelector('.board-container').addEventListener('click', (e) =>{
    
    let symbolHTML = e.target.firstChild;
    console.log(symbolHTML);
    if(symbolHTML.classList.contains("symbol") && symbolHTML.innerHTML === '' && !_game_playersPlay__WEBPACK_IMPORTED_MODULE_0__.gameEnded)
    {
      if (AI){
        (0,_game_playersPlay__WEBPACK_IMPORTED_MODULE_0__.AIplay)(e, 'X', 'O') 
      }else{
        (0,_game_playersPlay__WEBPACK_IMPORTED_MODULE_0__.humanPlay)(e, 'X', 'O')
      }
      
    }
  })
} 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startPlay);

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
/* harmony import */ var _game_checkWinner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/checkWinner.js */ "./src/game/checkWinner.js");
/* harmony import */ var _page_startPlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/startPlay.js */ "./src/page/startPlay.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");










const body = document.body;
const main = document.createElement('main');
body.appendChild(main);

main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

// Play btn clicked
const btnPlay = document.querySelector('.btn--play');
const btnPlayAI = document.querySelector('.btn--a-i')
btnPlay.addEventListener('click', (e) => {
  e.preventDefault();
  main.appendChild((0,_page_htmlBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  document.querySelector('.container--home').remove();
  (0,_page_startPlay_js__WEBPACK_IMPORTED_MODULE_4__["default"])(false)
})
btnPlayAI.addEventListener('click', (e) => {
  e.preventDefault();
  main.appendChild((0,_page_htmlBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  document.querySelector('.container--home').remove();
  (0,_page_startPlay_js__WEBPACK_IMPORTED_MODULE_4__["default"])(true)
})


// while (!checkWinner().winner){
//   humanPlay('X', 'O')
// }




// console.log(player1)

console.log(_game_gameBoardArray_js__WEBPACK_IMPORTED_MODULE_2__.gameboard.getBoard());

console.log( (0,_game_checkWinner_js__WEBPACK_IMPORTED_MODULE_3__["default"])().winner);
// console.log( positionIndex(boardArray, 2));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1CQUFtQiw4REFBVztBQUM5QjtBQUNBLEVBQUUsOERBQVM7QUFDWCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUEsWUFBWSx1RUFBa0I7O0FBRTlCLGFBQWEsZ0VBQVc7QUFDeEIsOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL2dhbWUvQUltb3ZlLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL2dhbWUvY2hlY2tXaW5uZXIuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvZ2FtZS9nYW1lQm9hcmRBcnJheS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9nYW1lL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvZ2FtZS9wbGF5ZXJzUGxheS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL3BhZ2UvYnRuUmVzZXQuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvcGFnZS9lbmRHYW1lTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9wYWdlL2dldE5hbWUuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvcGFnZS9nZXRQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9wYWdlL2h0bWxCb2FyZC5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9wYWdlL3N0YXJ0UGxheS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzUwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRk9OVCBGQU1JTFkgKi9cXG4vKlxcbj09PT09PT09PT09PT09PSBcXG5HbG9iYWwgU3R5bGVzLyBSZXNldFxcbj09PT09PT09PT09PT09PVxcbiovXFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQgcCxcXG5maWd1cmUsXFxucGljdHVyZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYSxcXG5saSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogLXdlYmtpdC1taW4tY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLyogaW1ncyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGZvcm0gZWxlbWVudHMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogcmVtb3ZlIGFuaW1hdGlvbiBmb3IgcGVvcGxlIHdobyB0dXJuZWQgdGhlbSBvZmYgKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxc21zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiA9PT09PT09PT1cXG51dGlsaXR5IGNsYXNlcyBcXG49PT09PT09PT09PSAqL1xcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLWdhcCwgMXJlbSk7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLWdhcCwgMXJlbSk7XFxufVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG4ubG9nbyB7XFxuICBtYXJnaW46IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZmxleCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLyogU1BBQ0lORyAuZmxvdyAqL1xcbi8qIFNlY2xlY3QgYWxsIHRoZSBlbGVtZW50cyBvZiBhIGRpdmlkZXIgZXhjZXB0IHRoZSBmaXJzdCBDaGlsZCAqL1xcbi8qIEl0IGlzIHVzZSB0byBtYWtlIHRoZSB0b3AgYW5kIGJvdHRvbiBsaW5lIGhlaWdodHMgYW5kIGJvcmRlcnMgdGhlIHNhbWUgKi9cXG4vKiBXaGVyZSBpcyBhIHdheSB0byBncm91cCB0aGluZ3MsIGlzIGxvd2VyIG9uIHNwZWNpZmljeSBzbyB3ZSBkb250IG92ZXJ3cml0ZSB0aGluZ3MqL1xcbi5mbG93Pio6d2hlcmUoOm5vdCg6Zmlyc3QtY2hpbGQpKSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1mbG93LXNwYWNlLCAxcmVtKTtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZy1pbmxpbmU6IDByZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi8qIGZvciB0aGUgdmlzdWFsbHkgaW1wYWlyZWQgLUhpZGUgQ29udHRlbi0gKi9cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLyogYWRkZWQgbGluZSAqL1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLVxcblRJQy1UQUMtVE9FXFxuLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tLXJlc2V0IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uYm94IHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYmFuaXNoIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93LWdyaWQtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tXFxuTmFtZXNcXG4tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcXG4gIC50aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbnB1dC1maWVsZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnBsYXllci1uYW1lIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbVxcbiAgfVxcblxcbiAgLmZvcm0ge1xcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjFyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgfVxcblxcblxcbiAgLm5hbWVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAuYnRucyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG5cXG4gIC5idG4tLXJlc2V0IHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICB9XFxuXFxuICAuZ2FtZS1vdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggNXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XFxuICB9XFxuXFxuICAuYm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC5pbnB1dC1maWVsZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDFyZW1cXG4gIH1cXG5cXG4gIC5wbGF5ZXItbmFtZSB7XFxuICAgIG1hcmdpbi10b3A6IDByZW1cXG4gIH1cXG5cXG4gIC5mb3JtIGltZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgfVxcblxcbn1cXG5cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS1cXG5nYW1lIG92ZXIgZGlzcGxheVxcbi0tLS0tLS0tLS0tLS0tICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBRWhCOzs7O0NBSUM7O0FBRUQ7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7O0VBT0UsU0FBUztBQUNYOztBQUVBOzs7OztFQUtFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUNBQWlDOztFQUVqQywyQ0FBMkM7RUFDM0MsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjs7QUFFQSw2QkFBNkI7QUFDN0I7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEsc0NBQXNDO0FBQ3RDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLG9EQUFvRDtBQUNwRDs7RUFFRTs7O0lBR0UsNkNBQTZDO0lBQzdDLHFDQUFxQztJQUNyQywrQ0FBK0M7SUFDL0MsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTs7YUFFYTtBQUNiO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEIsaUVBQWlFO0FBQ2pFLDJFQUEyRTtBQUMzRSxxRkFBcUY7QUFDckY7RUFDRSxtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBOztpQkFFaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxNQUFNO0VBQ04sU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O2NBRWM7QUFDZDtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7Ozs7RUFJQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQjtFQUNGOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0FBRUY7Ozs7QUFJQTs7Z0JBRWdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZPTlQgRkFNSUxZICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzUwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuLypcXG49PT09PT09PT09PT09PT0gXFxuR2xvYmFsIFN0eWxlcy8gUmVzZXRcXG49PT09PT09PT09PT09PT1cXG4qL1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHAsXFxuZmlndXJlLFxcbnBpY3R1cmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmEsXFxubGkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IC13ZWJraXQtbWluLWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8qIGltZ3MgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBmb3JtIGVsZW1lbnRzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIHJlbW92ZSBhbmltYXRpb24gZm9yIHBlb3BsZSB3aG8gdHVybmVkIHRoZW0gb2ZmICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMXNtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLyogPT09PT09PT09XFxudXRpbGl0eSBjbGFzZXMgXFxuPT09PT09PT09PT0gKi9cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pbmxpbmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1nYXAsIDFyZW0pO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiB2YXIoLS1nYXAsIDFyZW0pO1xcbn1cXG5cXG4uZC1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogaGVhZGVyICovXFxuLmxvZ28ge1xcbiAgbWFyZ2luOiBjbGFtcCgxLjVyZW0sIDV2dywgMnJlbSk7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmZsZXgge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi8qIFNQQUNJTkcgLmZsb3cgKi9cXG4vKiBTZWNsZWN0IGFsbCB0aGUgZWxlbWVudHMgb2YgYSBkaXZpZGVyIGV4Y2VwdCB0aGUgZmlyc3QgQ2hpbGQgKi9cXG4vKiBJdCBpcyB1c2UgdG8gbWFrZSB0aGUgdG9wIGFuZCBib3R0b24gbGluZSBoZWlnaHRzIGFuZCBib3JkZXJzIHRoZSBzYW1lICovXFxuLyogV2hlcmUgaXMgYSB3YXkgdG8gZ3JvdXAgdGhpbmdzLCBpcyBsb3dlciBvbiBzcGVjaWZpY3kgc28gd2UgZG9udCBvdmVyd3JpdGUgdGhpbmdzKi9cXG4uZmxvdz4qOndoZXJlKDpub3QoOmZpcnN0LWNoaWxkKSkge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tZmxvdy1zcGFjZSwgMXJlbSk7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmctaW5saW5lOiAwcmVtO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4vKiBmb3IgdGhlIHZpc3VhbGx5IGltcGFpcmVkIC1IaWRlIENvbnR0ZW4tICovXFxuLnNyLW9ubHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIC8qIGFkZGVkIGxpbmUgKi9cXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS1cXG5USUMtVEFDLVRPRVxcbi0tLS0tLS0tLS0tLS0tLSAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuLS1yZXNldCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLmJveCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmJhbmlzaCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hvdy1ncmlkLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLVxcbk5hbWVzXFxuLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSB7XFxuICAudGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaW5wdXQtZmllbGRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wbGF5ZXItbmFtZSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW1cXG4gIH1cXG5cXG4gIC5mb3JtIHtcXG4gICAgcGFkZGluZy1ibG9jazogMC4xcmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIH1cXG5cXG5cXG4gIC5uYW1lcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgLmJ0bnMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuXFxuXFxuICAuYnRuLS1yZXNldCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgfVxcblxcbiAgLmdhbWUtb3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC0xcHggMHB4IDVweCA2cHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1heC13aWR0aDogMThyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyMCUpO1xcbiAgfVxcblxcbiAgLmJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAuaW5wdXQtZmllbGRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxcmVtXFxuICB9XFxuXFxuICAucGxheWVyLW5hbWUge1xcbiAgICBtYXJnaW4tdG9wOiAwcmVtXFxuICB9XFxuXFxuICAuZm9ybSBpbWcge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIH1cXG5cXG59XFxuXFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tXFxuZ2FtZSBvdmVyIGRpc3BsYXlcXG4tLS0tLS0tLS0tLS0tLSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGlzIG1vZHVsZSB3aWxsIGhhbmRsZSB0aGUgbW92ZW1lbnQgZm9yIHRoZSBBSSBcbmNvbnN0IEFJbW92ZSA9IChib2FyZEFycmF5KSA9PiB7XG4gIGxldCBwb3NpYmxlTW92ZXMgPSBbXTtcbiAgZm9yKGxldCBpID0gMCwgbGVuID0gYm9hcmRBcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG4gICAgaWYoYm9hcmRBcnJheVtpXSA9PT0gJycpe1xuICAgICAgcG9zaWJsZU1vdmVzLnB1c2goaSk7XG4gICAgfVxuXG4gIH1cbiAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwb3NpYmxlTW92ZXMubGVuZ3RoKTtcbiAgXG4gIHJldHVybiBwb3NpYmxlTW92ZXNbcmFuZG9tXTtcbn1cbmV4cG9ydCBkZWZhdWx0IEFJbW92ZTsiLCJpbXBvcnQgeyBnYW1lYm9hcmQsIHBvc2l0aW9uSW5kZXggfSBmcm9tIFwiLi9nYW1lQm9hcmRBcnJheVwiO1xuaW1wb3J0IHsgcGxheWVyMSwgcGxheWVyMiB9IGZyb20gXCIuL3BsYXllcnNQbGF5XCI7XG5pbXBvcnQgeyBuYW1lcyB9IGZyb20gXCIuLi9wYWdlL2dldE5hbWVcIjtcbmNvbnN0IGNoZWNrV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCBfd2luQ29tYm9zID0gW1xuICAgIFswLCAxLCAyXSxcbiAgICBbMywgNCwgNV0sXG4gICAgWzYsIDcsIDhdLFxuICAgIFswLCAzLCA2XSxcbiAgICBbMSwgNCwgN10sXG4gICAgWzIsIDUsIDhdLFxuICAgIFswLCA0LCA4XSxcbiAgICBbMiwgNCwgNl0sXG4gIF07XG4gIGxldCB3aW5uZXIgPSBmYWxzZVxuICBsZXQgbWVzc2FnZSA9IFwiTm8gb25lIHdvbiB5ZXRcIjtcbiAvLyBHbyB0byBldmVyeSB3aW5Db21ib3MgaW5kZXgsIGlmIHRoZSBudW1iZXJzIGluIG9uZSBpbmRleCBvZiB3aW5Db21ib3MgYXJlIHRoZSBzYW1lIHN5bWJvbCBpbiB0aGUgb3JpZ2luYWwgYXJyYXksIHJldHVybiB0cnVlLiBcbiAgbGV0IHBsYXllcjF3aW5zID0gX3dpbkNvbWJvcy5zb21lKChjb21ib0luZGV4KSA9PiB7XG4gICAgcmV0dXJuIGNvbWJvSW5kZXguZXZlcnkoKGluZGV4KSA9PiBwb3NpdGlvbkluZGV4KGluZGV4KSA9PT0gJ1gnKVxuICB9KTtcbiAgbGV0IHBsYXllcjJ3aW5zID0gX3dpbkNvbWJvcy5zb21lKChjb21ib0luZGV4KSA9PiB7XG4gICAgcmV0dXJuIGNvbWJvSW5kZXguZXZlcnkoKGluZGV4KSA9PiBwb3NpdGlvbkluZGV4KGluZGV4KSA9PT0gJ08nKVxuICB9KTtcbiAgaWYgKHBsYXllcjF3aW5zKVxuICB7XG4gICAgd2lubmVyID0gJ1gnXG4gICAgbWVzc2FnZSA9IGAke25hbWVzWzBdfSB3aW5zYFxuICB9XG4gIGVsc2UgaWYocGxheWVyMndpbnMpXG4gIHtcbiAgICB3aW5uZXIgPSAnTydcbiAgICBtZXNzYWdlID0gYCR7bmFtZXNbMV19IHdpbnNgXG4gIH1cbiAgZWxzZSBpZiAoIWdhbWVib2FyZC5nZXRCb2FyZCgpLmluY2x1ZGVzKCcnKSlcbiAge1xuICAgIHdpbm5lciA9ICd0aWUnO1xuICAgIG1lc3NhZ2UgPSAnVGllJ1xuICB9XG4gIHJldHVybiB7d2lubmVyLCBtZXNzYWdlfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNoZWNrV2lubmVyOyIsImNvbnN0IGdhbWVib2FyZCA9ICgoKSA9PiB7XG4gIGxldCBfYm9hcmRBcnIgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gX2JvYXJkQXJyO1xuICByZXR1cm4geyBnZXRCb2FyZCB9O1xufSkoKTtcblxuY29uc3QgcG9zaXRpb25JbmRleCA9IChpbmRleCkgPT4gZ2FtZWJvYXJkLmdldEJvYXJkKClbaW5kZXhdO1xuXG5cbmV4cG9ydCB7Z2FtZWJvYXJkLCBwb3NpdGlvbkluZGV4fSIsIiAgaW1wb3J0IHtnYW1lYm9hcmR9IGZyb20gJy4vZ2FtZUJvYXJkQXJyYXkuanMnO1xuICBpbXBvcnQge2dldE5hbWUsIHN0b3JlTmFtZX0gZnJvbSAnLi4vcGFnZS9nZXROYW1lLmpzJztcblxuICBcbiAgXG4gIGNvbnN0IHBsYXllciA9IChudW1iZXIpID0+IHtcbiAgICBsZXQgbmFtZSA9ICgpID0+IHtcbiAgICAgIGxldCBuYW1lID0gZ2V0TmFtZShudW1iZXIpXG4gICAgICBzdG9yZU5hbWUobmFtZSk7XG4gICAgICByZXR1cm4gbmFtZVxuICAgIH07ICBcbiAgICBcblxuICAgIGNvbnN0IHBsYXkgPSAocG9zaXRpb24pID0+e1xuICAgICAgaWYgKG51bWJlciA9PT0gMSlcbiAgICAgIHtcbiAgICAgICAgZ2FtZWJvYXJkLmdldEJvYXJkKClbcG9zaXRpb25dID0gJ1gnO1xuICAgICAgfWVsc2UgaWYgKG51bWJlciA9PT0gMilcbiAgICAgIHtcbiAgICAgICAgZ2FtZWJvYXJkLmdldEJvYXJkKClbcG9zaXRpb25dID0gJ08nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge25hbWUsIHBsYXl9O1xuICB9XG4gIFxuXG5leHBvcnQge3BsYXllcn1cblxuXG5cbiIsImltcG9ydCB7cGxheWVyfSBmcm9tICcuL3BsYXllcnMuanMnXG5pbXBvcnQge2dhbWVib2FyZH0gZnJvbSAnLi9nYW1lQm9hcmRBcnJheS5qcyc7XG5pbXBvcnQgY2hlY2tXaW5uZXIgZnJvbSAnLi9jaGVja1dpbm5lci5qcyc7XG4vLyBHZXQgcG9zaXRpb24gZnJvbSBwbGF5ZXJcbmltcG9ydCB7Z2V0UG9zaXRpb25Gcm9tUGxheWVyLCBQb3NpdGlvbk9uRE9NYm9hcmR9IGZyb20gJy4uL3BhZ2UvZ2V0UG9zaXRpb24uanMnO1xuaW1wb3J0IGVuZEdhbWUgZnJvbSAnLi4vcGFnZS9lbmRHYW1lTWVzc2FnZS5qcyc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnLi4vcGFnZS9idG5SZXNldC5qcyc7XG5pbXBvcnQgQUlNb3ZlIGZyb20gJy4vQUltb3ZlJztcblxuXG5cbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoMSk7XG5jb25zdCBwbGF5ZXIyID0gcGxheWVyKDIpO1xubGV0IF9wbGF5ZWQxID0gZmFsc2VcbmxldCBfcGxheWVkMiA9IGZhbHNlXG5sZXQgZ2FtZUVuZGVkID0gIGZhbHNlO1xuXG5cbi8vIEFsbG93IHVzIHRvIFNldCBnYW1lRW5kZWQgZnJvbSBvdXRzaWRlIHRoZSBtb2R1bGUuIFxuY29uc3Qgc2V0Z2FtZUVuZGVkID0odmFsKSA9PiBnYW1lRW5kZWQgPSB2YWw7XG5cbmNvbnN0IGh1bWFuUGxheSA9IChlLCBYLCBPKSA9PiB7XG4gIFxuICBsZXQgYm94ID0gZ2V0UG9zaXRpb25Gcm9tUGxheWVyKGUpO1xuICBjb25zb2xlLmxvZygnQk9YJywgYm94KVxuICAvLyBjaGVjayBpZiBwbGF5ZXIgaGFzIHBsYXllZCwgaWYgbm90LCBhbGxvdyB0byBwbGF5IHVudGlsIHRoZXJlIGlzIGEgd2lubmVyXG4gIGlmIChfcGxheWVkMSkgXG4gIHtcbiAgICAgIFBvc2l0aW9uT25ET01ib2FyZChlLCBPKTtcbiAgICAgIHBsYXllcjIucGxheShib3gpO1xuICAgICAgX3BsYXllZDIgPSB0cnVlO1xuICAgICAgX3BsYXllZDEgPSBmYWxzZTtcbiAgICB9IFxuICAgIGVsc2UgXG4gICAge1xuICAgICAgXG4gICAgICBQb3NpdGlvbk9uRE9NYm9hcmQoZSwgWCk7XG4gICAgICAvLyBwb3B1bGF0ZSBib2FyZCBBcnJheVxuICAgICAgcGxheWVyMS5wbGF5KGJveCk7XG4gICAgICBcbiAgICBfcGxheWVkMSA9IHRydWU7XG4gICAgX3BsYXllZDIgPSBmYWxzZTtcbiAgfVxuICAgIFxuICAvLyBwcmludCB3aW5uZXIgb3IgdGllIG9uIHNjcmVlbi5cbiAgaWYgKGNoZWNrV2lubmVyKCkud2lubmVyIHx8IGNoZWNrV2lubmVyKCkud2lubmVyID09ICd0aWUnICkgXG4gIHtcbiAgICBlbmRHYW1lKCk7XG4gICAgZ2FtZUVuZGVkID0gdHJ1ZTtcbiAgICByZXNldChfcGxheWVkMSwgX3BsYXllZDIpO1xuICB9XG4gIFxuICAvLyBMT0cgQVJSQVlcbiAgY29uc29sZS5sb2coZ2FtZWJvYXJkLmdldEJvYXJkKCkpOyAgXG4gIHJldHVybntfcGxheWVkMSwgX3BsYXllZDJ9O1xufVxuLy8gQUkgcGxheVxuY29uc3QgQUlwbGF5ID0gKGUsIFgsIE8pID0+IHtcbiAgbGV0IGJveCA9Z2V0UG9zaXRpb25Gcm9tUGxheWVyKGUpXG4gIFBvc2l0aW9uT25ET01ib2FyZChlLCBYKTtcbiAgLy8gcG9wdWxhdGUgYm9hcmQgQXJyYXkgXG4gIHBsYXllcjEucGxheShib3gpO1xuICBsZXQgYWlNb3ZlID0gQUlNb3ZlKGdhbWVib2FyZC5nZXRCb2FyZCgpKVxuICBjb25zb2xlLmxvZyhhaU1vdmUpXG4gIFxuICAvLyBJZiBvbmUgb2YgdGhzZSBjb25kaXRpb25zIGlzIG1ldCwgaXQgZG9lcyBub3QgaGF2ZSB0byBwbGF5IGFueW1vcmVcbiAgaWYoYWlNb3ZlICE9PSB1bmRlZmluZWQgJiYgIWNoZWNrV2lubmVyKCkud2lubmVyKVxuICB7XG4gICAgXG4gICAgXG4gICAgLy8gcG9wdWxhdGUgYm9hcmQgQXJyYXlcbiAgICBwbGF5ZXIyLnBsYXkoYWlNb3ZlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJveCA9IFwiJHthaU1vdmV9XCJdYCkuaW5uZXJIVE1MID0gTztcbiAgICBcbiAgfVxuICBcbi8vIHByaW50IHdpbm5lciBvciB0aWUgb24gc2NyZWVuLlxuaWYgKGNoZWNrV2lubmVyKCkud2lubmVyIHx8IGNoZWNrV2lubmVyKCkud2lubmVyID09ICd0aWUnICkgXG57XG4gIGVuZEdhbWUoKTtcbn1cblxuLy8gTE9HIEFSUkFZXG5jb25zb2xlLmxvZyhnYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG5cbn1cblxuZXhwb3J0IHtodW1hblBsYXksIEFJcGxheSwgZ2FtZUVuZGVkLCBzZXRnYW1lRW5kZWQsIHBsYXllcjEsIHBsYXllcjJ9IiwiaW1wb3J0IGljb24gZnJvbSAnLi9pbWdzL08uc3ZnJ1xuY29uc3QgaG9tZSA9ICgpID0+e1xuICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdjb250YWluZXItLWhvbWUnKVxuICBob21lUGFnZS5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgIDxoMT5UaWMtVGFjLVRvZTwvaDE+XG4gIDwvZGl2PlxuICA8Zm9ybSBjbGFzcz1cIm5hbWVzXCI+XG4gICAgPGgyPldlbGNvbWUsIGVudGVyIGEgY29vbCBOYW1lLjwvaDI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZHNcIj5cbiAgICAgICAgPCEtLSBQbGF5ZXIgMSBuYW1lIC0tPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZS0xXCIgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPlBsYXllciAxIG5hbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtXCIgaWQ9XCJuYW1lLTFcIiBuYW1lPVwibmFtZS0xXCI+XG4gICAgICAgIDwhLS0gUGxheWVyIDIgbmFtZSAtLT5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZS0yXCIgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPlBsYXllciAyIG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm1cIiBpZD1cIm5hbWUtMlwiIG5hbWU9XCJuYW1lLTJcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBCdXR0b25zIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImJ0bnNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLXBsYXlcIiB0eXBlPVwic3VibWl0XCIgPlBsYXkhPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1hLWlcIj5QbGF5IHdpdGggQS5JLjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG4gIGBcbiAgcmV0dXJuIGhvbWVQYWdlO1xufVxuZXhwb3J0IGRlZmF1bHQgaG9tZSIsImltcG9ydCB7c2V0Z2FtZUVuZGVkIH0gZnJvbSBcIi4uL2dhbWUvcGxheWVyc1BsYXlcIjtcbmltcG9ydCBjaGVja1dpbm5lciBmcm9tIFwiLi4vZ2FtZS9jaGVja1dpbm5lclwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4uL2dhbWUvZ2FtZUJvYXJkQXJyYXlcIjtcblxuLypcbndoZW4gdGhlIHJlc2V0IGJ1dHRvbiBvciBhIGVsZW1lbnQgdGhhdCBoYXMgdGhhdCBjbGFzcyBpcyBwcmVzc2VkLCByZXNldCBhbGwgdGhlIFxudmFsdWVzXG4gIC0gSXQgZ2V0cyBjYWxsZWQgb24gcGxheWVyc1BsYXkgd2hlbiB0aGVyZSBpcyBhIHdpbm5lciwgYW5kIHRoZSBodG1sQm9hcmQsIHRvIFxuICByZXNldCB0aGUgdmFsdWVzIGF0IGFueSB0aW1lXG4qLyBcblxuY29uc3QgcmVzZXQgPSAoX3BsYXllZDEsIF9wbGF5ZWQyKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgIFxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLS1yZXNldCcpKXtcbiAgICAgIF9wbGF5ZWQxID0gZmFsc2U7XG4gICAgICBfcGxheWVkMiA9IGZhbHNlO1xuICAgICAgLy8gTW9kaWZ5IGdhbWVFbmRlZCB2YXJpYWJsZSBvbiBwbGF5ZXJzLlBsYXkuanNcbiAgICAgIHNldGdhbWVFbmRlZChmYWxzZSlcbiAgICAgIC8vIG1vZGlmeSBjaGVjayB3aW5uZXJcbiAgICAgIGNoZWNrV2lubmVyKCkud2lubmVyID0gZmFsc2U7XG4gICAgICBcbiAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgIGdhbWVib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAvLyBDbGVhcnMgYXJyYXkgYm9hcmRcbiAgICAgICAgZ2FtZWJvYXJkLmdldEJvYXJkKClbY291bnRlcl0gPSAnJztcbiAgICAgICAgLy8gQ2xlYXIgYm9hcmQgb24gdGhlICBET00uIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3ltYm9sLS0ke2NvdW50ZXJ9YCkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvdW50ZXIgKys7XG4gICAgICB9KVxuICAgICAgLy8gRGVsZXRldGUgRU5EIEdBTUUgbWVzc2FnZVxuICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1nYW1lLW1lc3NhZ2UnKSlcbiAgICAgIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1nYW1lLW1lc3NhZ2UnKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5leHBvcnQgZGVmYXVsdCByZXNldDsgIiwiaW1wb3J0IGNoZWNrV2lubmVyIGZyb20gXCIuLi9nYW1lL2NoZWNrV2lubmVyXCI7XG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICBjb25zdCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luLmNsYXNzTGlzdC5hZGQoJ2VuZC1nYW1lLW1lc3NhZ2UnLCAnZ2FtZS1vdmVyJyk7XG4gIHdpbi5pbm5lckhUTUwgPSBgXG4gIDxoMT4ke2NoZWNrV2lubmVyKCkubWVzc2FnZX08L2gxPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0tcmVzZXRcIj5QbGF5IGFnYWluPC9idXR0b24+XG4gICAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHdpbik7XG4gIHJldHVybiB0cnVlOyBcbn1cblxuZXhwb3J0IGRlZmF1bHQoZW5kR2FtZSk7IiwiXG5jb25zdCBnZXROYW1lID0gKHBsYXllck51bWJlcikgPT57XG4gIGxldCBuYW1lO1xuICBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25hbWUtJHtwbGF5ZXJOdW1iZXJ9YCkudmFsdWU7XG4gIGlmIChuYW1lID09ICcnKVxuICB7XG4gICAgbmFtZSA9IGBQbGF5ZXIgJHtwbGF5ZXJOdW1iZXJ9YFxuICB9XG4gIHJldHVybiBuYW1lO1xufVxuLy8gU3RvcmUgbmFtZXMgaW4gTG9jYWwgU3RvcmFnZSBhbmQgb3IgbGlzdC5cbi8qXG50aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHBsYXllci5uYW1lKCkgIGlzIGNhbGxlZCB0byBzdG9yZSB0aGUgbmFtZSBmcm9tIHRoZSBcbmZvcm0gb24gYSBsaXN0IGNhbGxlZCBuYW1lcy5cbiAgLSBUaHMgbGlzdCBuYW1lcyBpcyB1c2VkIG9uIHRoZSBjaGVja1dpbm5lcigpIG1vZHVsZSBmb3IgdGhlIG1lc3NhZ2Ugb2Ygd2hvIHdpbnNcbiAgbmFtZXNbMF0gPT0gcGxheWVyIDEsIG5hbWVzWzFdID09IHBsYXllciAyXG4qLyBcblxubGV0IG5hbWVzID0gW107XG5jb25zdCBzdG9yZU5hbWUgPSAobmFtZSkgPT4ge1xuICBuYW1lcy5wdXNoKG5hbWUpO1xuICByZXR1cm4gbmFtZXNcbn1cblxuZXhwb3J0IHsgZ2V0TmFtZSwgc3RvcmVOYW1lLCBuYW1lc307IiwiY29uc3QgZ2V0UG9zaXRpb25Gcm9tUGxheWVyID0gKGUpID0+IHtcbiAgbGV0IHN5bWJvbEhUTUwgPSBlLnRhcmdldC5maXJzdENoaWxkO1xuICByZXR1cm4gK3N5bWJvbEhUTUwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ib3hcIik7XG4gIFxufVxuXG5jb25zdCBQb3NpdGlvbk9uRE9NYm9hcmQgPSAoZSwgc3ltYm9sKSA9PiB7XG4gIGUudGFyZ2V0LmZpcnN0Q2hpbGQuaW5uZXJIVE1MID0gc3ltYm9sO1xufVxuXG5leHBvcnQgeyBnZXRQb3NpdGlvbkZyb21QbGF5ZXIsIFBvc2l0aW9uT25ET01ib2FyZH07IiwiaW1wb3J0IHsgcGxheWVyMSwgcGxheWVyMiB9IGZyb20gXCIuLi9nYW1lL3BsYXllcnNQbGF5XCI7XG5pbXBvcnQgcmVzZXQgZnJvbSBcIi4vYnRuUmVzZXRcIjtcblxuY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgIDxoMT5UaWMtVGFjLVRvZTwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGgxPiR7cGxheWVyMS5uYW1lKCl9IHZzICR7cGxheWVyMi5uYW1lKCl9PC9oMT5cbiAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJib3hcIiA+PHAgZGF0YS1ib3g9MCAgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLS0wXCI+PC9wPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJib3hcIiA+PHAgZGF0YS1ib3g9MSAgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLS0xXCI+PC9wPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJib3hcIiA+PHAgZGF0YS1ib3g9MiAgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLS0yXCI+PC9wPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJib3hcIj48cCAgZGF0YS1ib3g9MyBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLTNcIj48L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiID48cCBkYXRhLWJveD00ICBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLTRcIj48L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiID48cCBkYXRhLWJveD01ICBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLTVcIj48L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiID48cCBkYXRhLWJveD02ICBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLTZcIj48L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiID48cCBkYXRhLWJveD03ICBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLTdcIj48L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiID48cCBkYXRhLWJveD04ICBjbGFzcz1cInN5bWJvbCBzeW1ib2wtLThcIj48L3A+PC9kaXY+XG4gIDwvZGl2PlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0tcmVzZXRcIj5yZXNldDwvYnV0dG9uPlxuICBgXG4gIHJlc2V0KCk7XG4gIHJldHVybiBjb250YWluZXJcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb2FyZDsiLCJpbXBvcnQgeyBodW1hblBsYXksIEFJcGxheSwgZ2FtZUVuZGVkIH0gZnJvbSBcIi4uL2dhbWUvcGxheWVyc1BsYXlcIjtcblxuY29uc3Qgc3RhcnRQbGF5ID0gKEFJKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICBcbiAgICBsZXQgc3ltYm9sSFRNTCA9IGUudGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgY29uc29sZS5sb2coc3ltYm9sSFRNTCk7XG4gICAgaWYoc3ltYm9sSFRNTC5jbGFzc0xpc3QuY29udGFpbnMoXCJzeW1ib2xcIikgJiYgc3ltYm9sSFRNTC5pbm5lckhUTUwgPT09ICcnICYmICFnYW1lRW5kZWQpXG4gICAge1xuICAgICAgaWYgKEFJKXtcbiAgICAgICAgQUlwbGF5KGUsICdYJywgJ08nKSBcbiAgICAgIH1lbHNle1xuICAgICAgICBodW1hblBsYXkoZSwgJ1gnLCAnTycpXG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH0pXG59IFxuZXhwb3J0IGRlZmF1bHQgc3RhcnRQbGF5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVCb2FyZCBmcm9tICcuL3BhZ2UvaHRtbEJvYXJkLmpzJztcbmltcG9ydCB7Z2FtZWJvYXJkLCBwb3NpdGlvbkluZGV4IH0gZnJvbSAnLi9nYW1lL2dhbWVCb2FyZEFycmF5LmpzJztcbmltcG9ydCBjaGVja1dpbm5lciBmcm9tICcuL2dhbWUvY2hlY2tXaW5uZXIuanMnO1xuaW1wb3J0IHN0YXJ0UGxheSBmcm9tICcuL3BhZ2Uvc3RhcnRQbGF5LmpzJztcblxuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG5tYWluLmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpO1xuXG4vLyBQbGF5IGJ0biBjbGlja2VkXG5jb25zdCBidG5QbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcGxheScpO1xuY29uc3QgYnRuUGxheUFJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tYS1pJylcbmJ0blBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQm9hcmQoKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItLWhvbWUnKS5yZW1vdmUoKTtcbiAgc3RhcnRQbGF5KGZhbHNlKVxufSlcbmJ0blBsYXlBSS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVCb2FyZCgpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci0taG9tZScpLnJlbW92ZSgpO1xuICBzdGFydFBsYXkodHJ1ZSlcbn0pXG5cblxuLy8gd2hpbGUgKCFjaGVja1dpbm5lcigpLndpbm5lcil7XG4vLyAgIGh1bWFuUGxheSgnWCcsICdPJylcbi8vIH1cblxuXG5cblxuLy8gY29uc29sZS5sb2cocGxheWVyMSlcblxuY29uc29sZS5sb2coZ2FtZWJvYXJkLmdldEJvYXJkKCkpO1xuXG5jb25zb2xlLmxvZyggY2hlY2tXaW5uZXIoKS53aW5uZXIpO1xuLy8gY29uc29sZS5sb2coIHBvc2l0aW9uSW5kZXgoYm9hcmRBcnJheSwgMikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==