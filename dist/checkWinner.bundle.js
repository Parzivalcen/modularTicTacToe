/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/game/checkWinner.js ***!
  \*********************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tXaW5uZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEOzs7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOERBQWE7QUFDcEQsR0FBRztBQUNIO0FBQ0EsdUNBQXVDLDhEQUFhO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsaUVBQWUsV0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvZ2FtZS9nYW1lQm9hcmRBcnJheS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL2dhbWUvY2hlY2tXaW5uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2FtZWJvYXJkID0gKCgpID0+IHtcbiAgbGV0IF9ib2FyZEFyciA9IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBfYm9hcmRBcnI7XG4gIHJldHVybiB7IGdldEJvYXJkIH07XG59KSgpO1xuXG5jb25zdCBwb3NpdGlvbkluZGV4ID0gKGluZGV4KSA9PiBnYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpbmRleF07XG5cblxuZXhwb3J0IHtnYW1lYm9hcmQsIHBvc2l0aW9uSW5kZXh9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnYW1lYm9hcmQsIHBvc2l0aW9uSW5kZXggfSBmcm9tIFwiLi9nYW1lQm9hcmRBcnJheVwiO1xuXG5jb25zdCBjaGVja1dpbm5lciA9ICgpID0+IHtcbiAgY29uc3QgX3dpbkNvbWJvcyA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQsIDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdLFxuICBdO1xuICBsZXQgd2lubmVyID0gZmFsc2VcbiAgbGV0IG1lc3NhZ2UgPSBcIk5vIG9uZSB3b24geWV0XCI7XG4gLy8gR28gdG8gZXZlcnkgd2luQ29tYm9zIGluZGV4LCBpZiB0aGUgbnVtYmVycyBpbiBvbmUgaW5kZXggb2Ygd2luQ29tYm9zIGFyZSB0aGUgc2FtZSBzeW1ib2wgaW4gdGhlIG9yaWdpbmFsIGFycmF5LCByZXR1cm4gdHJ1ZS4gXG4gIGxldCBwbGF5ZXIxd2lucyA9IF93aW5Db21ib3Muc29tZSgoY29tYm9JbmRleCkgPT4ge1xuICAgIHJldHVybiBjb21ib0luZGV4LmV2ZXJ5KChpbmRleCkgPT4gcG9zaXRpb25JbmRleChpbmRleCkgPT09ICdYJylcbiAgfSk7XG4gIGxldCBwbGF5ZXIyd2lucyA9IF93aW5Db21ib3Muc29tZSgoY29tYm9JbmRleCkgPT4ge1xuICAgIHJldHVybiBjb21ib0luZGV4LmV2ZXJ5KChpbmRleCkgPT4gcG9zaXRpb25JbmRleChpbmRleCkgPT09ICdPJylcbiAgfSk7XG4gIGlmIChwbGF5ZXIxd2lucylcbiAge1xuICAgIHdpbm5lciA9ICdYJ1xuICB9XG4gIGVsc2UgaWYocGxheWVyMndpbnMpXG4gIHtcbiAgICB3aW5uZXIgPSAnTydcbiAgfVxuICBlbHNlIGlmICghZ2FtZWJvYXJkLmdldEJvYXJkKCkuaW5jbHVkZXMoJycpKVxuICB7XG4gICAgd2lubmVyID0gJ3RpZSc7XG4gIH1cbiAgcmV0dXJuIHt3aW5uZXJ9O1xufVxuZXhwb3J0IGRlZmF1bHQgY2hlY2tXaW5uZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9