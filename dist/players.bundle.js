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
/*!*****************************!*\
  !*** ./src/game/players.js ***!
  \*****************************/
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
  






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBLHlDQUF5QyxhQUFhO0FBQ3REO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLEVBQWdEO0FBQ2hELEVBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5REFBTztBQUN4QixNQUFNLDREQUFTO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQWtCO0FBQzFCLE9BQU87QUFDUDtBQUNBLFFBQVEsa0VBQWtCO0FBQzFCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL2dhbWUvZ2FtZUJvYXJkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvcGFnZS9nZXROYW1lLmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvZ2FtZS9wbGF5ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdhbWVib2FyZCA9ICgoKSA9PiB7XG4gIGxldCBfYm9hcmRBcnIgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gX2JvYXJkQXJyO1xuICByZXR1cm4geyBnZXRCb2FyZCB9O1xufSkoKTtcblxuY29uc3QgcG9zaXRpb25JbmRleCA9IChpbmRleCkgPT4gZ2FtZWJvYXJkLmdldEJvYXJkKClbaW5kZXhdO1xuXG5cbmV4cG9ydCB7Z2FtZWJvYXJkLCBwb3NpdGlvbkluZGV4fSIsIlxuY29uc3QgZ2V0TmFtZSA9IChwbGF5ZXJOdW1iZXIpID0+e1xuICBsZXQgbmFtZTtcbiAgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuYW1lLSR7cGxheWVyTnVtYmVyfWApLnZhbHVlO1xuICBpZiAobmFtZSA9PSAnJylcbiAge1xuICAgIG5hbWUgPSBgUGxheWVyICR7cGxheWVyTnVtYmVyfWBcbiAgfVxuICByZXR1cm4gbmFtZTtcbn1cbi8vIFN0b3JlIG5hbWVzIGluIExvY2FsIFN0b3JhZ2UgYW5kIG9yIGxpc3QuXG4vKlxudGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBwbGF5ZXIubmFtZSgpICBpcyBjYWxsZWQgdG8gc3RvcmUgdGhlIG5hbWUgZnJvbSB0aGUgXG5mb3JtIG9uIGEgbGlzdCBjYWxsZWQgbmFtZXMuXG4gIC0gVGhzIGxpc3QgbmFtZXMgaXMgdXNlZCBvbiB0aGUgY2hlY2tXaW5uZXIoKSBtb2R1bGUgZm9yIHRoZSBtZXNzYWdlIG9mIHdobyB3aW5zXG4gIG5hbWVzWzBdID09IHBsYXllciAxLCBuYW1lc1sxXSA9PSBwbGF5ZXIgMlxuKi8gXG5cbmxldCBuYW1lcyA9IFtdO1xuY29uc3Qgc3RvcmVOYW1lID0gKG5hbWUpID0+IHtcbiAgbmFtZXMucHVzaChuYW1lKTtcbiAgcmV0dXJuIG5hbWVzXG59XG5cbmV4cG9ydCB7IGdldE5hbWUsIHN0b3JlTmFtZSwgbmFtZXN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiICBpbXBvcnQge2dhbWVib2FyZH0gZnJvbSAnLi9nYW1lQm9hcmRBcnJheS5qcyc7XG4gIGltcG9ydCB7Z2V0TmFtZSwgc3RvcmVOYW1lfSBmcm9tICcuLi9wYWdlL2dldE5hbWUuanMnO1xuXG4gIFxuICBcbiAgY29uc3QgcGxheWVyID0gKG51bWJlcikgPT4ge1xuICAgIGxldCBuYW1lID0gKCkgPT4ge1xuICAgICAgbGV0IG5hbWUgPSBnZXROYW1lKG51bWJlcilcbiAgICAgIHN0b3JlTmFtZShuYW1lKTtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfTsgIFxuICAgIFxuXG4gICAgY29uc3QgcGxheSA9IChwb3NpdGlvbikgPT57XG4gICAgICBpZiAobnVtYmVyID09PSAxKVxuICAgICAge1xuICAgICAgICBnYW1lYm9hcmQuZ2V0Qm9hcmQoKVtwb3NpdGlvbl0gPSAnWCc7XG4gICAgICB9ZWxzZSBpZiAobnVtYmVyID09PSAyKVxuICAgICAge1xuICAgICAgICBnYW1lYm9hcmQuZ2V0Qm9hcmQoKVtwb3NpdGlvbl0gPSAnTyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7bmFtZSwgcGxheX07XG4gIH1cbiAgXG5cbmV4cG9ydCB7cGxheWVyfVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9