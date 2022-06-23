/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game/checkWinner.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1h0QjtBQUNBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvZ2FtZS9BSW1vdmUuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvZ2FtZS9jaGVja1dpbm5lci5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9nYW1lL2dhbWVCb2FyZEFycmF5LmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL2dhbWUvcGxheWVycy5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9nYW1lL3BsYXllcnNQbGF5LmpzIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkLy4vc3JjL3BhZ2UvYnRuUmVzZXQuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvcGFnZS9lbmRHYW1lTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC8uL3NyYy9wYWdlL2dldE5hbWUuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvLi9zcmMvcGFnZS9nZXRQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aWN0YWN0b2Vzb2xpZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lc29saWQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RpY3RhY3RvZXNvbGlkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIG1vZHVsZSB3aWxsIGhhbmRsZSB0aGUgbW92ZW1lbnQgZm9yIHRoZSBBSSBcbmNvbnN0IEFJbW92ZSA9IChib2FyZEFycmF5KSA9PiB7XG4gIGxldCBwb3NpYmxlTW92ZXMgPSBbXTtcbiAgZm9yKGxldCBpID0gMCwgbGVuID0gYm9hcmRBcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG4gICAgaWYoYm9hcmRBcnJheVtpXSA9PT0gJycpe1xuICAgICAgcG9zaWJsZU1vdmVzLnB1c2goaSk7XG4gICAgfVxuXG4gIH1cbiAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwb3NpYmxlTW92ZXMubGVuZ3RoKTtcbiAgXG4gIHJldHVybiBwb3NpYmxlTW92ZXNbcmFuZG9tXTtcbn1cbmV4cG9ydCBkZWZhdWx0IEFJbW92ZTsiLCJpbXBvcnQgeyBnYW1lYm9hcmQsIHBvc2l0aW9uSW5kZXggfSBmcm9tIFwiLi9nYW1lQm9hcmRBcnJheVwiO1xuaW1wb3J0IHsgcGxheWVyMSwgcGxheWVyMiB9IGZyb20gXCIuL3BsYXllcnNQbGF5XCI7XG5pbXBvcnQgeyBuYW1lcyB9IGZyb20gXCIuLi9wYWdlL2dldE5hbWVcIjtcbmNvbnN0IGNoZWNrV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCBfd2luQ29tYm9zID0gW1xuICAgIFswLCAxLCAyXSxcbiAgICBbMywgNCwgNV0sXG4gICAgWzYsIDcsIDhdLFxuICAgIFswLCAzLCA2XSxcbiAgICBbMSwgNCwgN10sXG4gICAgWzIsIDUsIDhdLFxuICAgIFswLCA0LCA4XSxcbiAgICBbMiwgNCwgNl0sXG4gIF07XG4gIGxldCB3aW5uZXIgPSBmYWxzZVxuICBsZXQgbWVzc2FnZSA9IFwiTm8gb25lIHdvbiB5ZXRcIjtcbiAvLyBHbyB0byBldmVyeSB3aW5Db21ib3MgaW5kZXgsIGlmIHRoZSBudW1iZXJzIGluIG9uZSBpbmRleCBvZiB3aW5Db21ib3MgYXJlIHRoZSBzYW1lIHN5bWJvbCBpbiB0aGUgb3JpZ2luYWwgYXJyYXksIHJldHVybiB0cnVlLiBcbiAgbGV0IHBsYXllcjF3aW5zID0gX3dpbkNvbWJvcy5zb21lKChjb21ib0luZGV4KSA9PiB7XG4gICAgcmV0dXJuIGNvbWJvSW5kZXguZXZlcnkoKGluZGV4KSA9PiBwb3NpdGlvbkluZGV4KGluZGV4KSA9PT0gJ1gnKVxuICB9KTtcbiAgbGV0IHBsYXllcjJ3aW5zID0gX3dpbkNvbWJvcy5zb21lKChjb21ib0luZGV4KSA9PiB7XG4gICAgcmV0dXJuIGNvbWJvSW5kZXguZXZlcnkoKGluZGV4KSA9PiBwb3NpdGlvbkluZGV4KGluZGV4KSA9PT0gJ08nKVxuICB9KTtcbiAgaWYgKHBsYXllcjF3aW5zKVxuICB7XG4gICAgd2lubmVyID0gJ1gnXG4gICAgbWVzc2FnZSA9IGAke25hbWVzWzBdfSB3aW5zYFxuICB9XG4gIGVsc2UgaWYocGxheWVyMndpbnMpXG4gIHtcbiAgICB3aW5uZXIgPSAnTydcbiAgICBtZXNzYWdlID0gYCR7bmFtZXNbMV19IHdpbnNgXG4gIH1cbiAgZWxzZSBpZiAoIWdhbWVib2FyZC5nZXRCb2FyZCgpLmluY2x1ZGVzKCcnKSlcbiAge1xuICAgIHdpbm5lciA9ICd0aWUnO1xuICAgIG1lc3NhZ2UgPSAnVGllJ1xuICB9XG4gIHJldHVybiB7d2lubmVyLCBtZXNzYWdlfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNoZWNrV2lubmVyOyIsImNvbnN0IGdhbWVib2FyZCA9ICgoKSA9PiB7XG4gIGxldCBfYm9hcmRBcnIgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gX2JvYXJkQXJyO1xuICByZXR1cm4geyBnZXRCb2FyZCB9O1xufSkoKTtcblxuY29uc3QgcG9zaXRpb25JbmRleCA9IChpbmRleCkgPT4gZ2FtZWJvYXJkLmdldEJvYXJkKClbaW5kZXhdO1xuXG5cbmV4cG9ydCB7Z2FtZWJvYXJkLCBwb3NpdGlvbkluZGV4fSIsIiAgaW1wb3J0IHtnYW1lYm9hcmR9IGZyb20gJy4vZ2FtZUJvYXJkQXJyYXkuanMnO1xuICBpbXBvcnQge2dldE5hbWUsIHN0b3JlTmFtZX0gZnJvbSAnLi4vcGFnZS9nZXROYW1lLmpzJztcblxuICBcbiAgXG4gIGNvbnN0IHBsYXllciA9IChudW1iZXIpID0+IHtcbiAgICBsZXQgbmFtZSA9ICgpID0+IHtcbiAgICAgIGxldCBuYW1lID0gZ2V0TmFtZShudW1iZXIpXG4gICAgICBzdG9yZU5hbWUobmFtZSk7XG4gICAgICByZXR1cm4gbmFtZVxuICAgIH07ICBcbiAgICBcblxuICAgIGNvbnN0IHBsYXkgPSAocG9zaXRpb24pID0+e1xuICAgICAgaWYgKG51bWJlciA9PT0gMSlcbiAgICAgIHtcbiAgICAgICAgZ2FtZWJvYXJkLmdldEJvYXJkKClbcG9zaXRpb25dID0gJ1gnO1xuICAgICAgfWVsc2UgaWYgKG51bWJlciA9PT0gMilcbiAgICAgIHtcbiAgICAgICAgZ2FtZWJvYXJkLmdldEJvYXJkKClbcG9zaXRpb25dID0gJ08nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge25hbWUsIHBsYXl9O1xuICB9XG4gIFxuXG5leHBvcnQge3BsYXllcn1cblxuXG5cbiIsImltcG9ydCB7cGxheWVyfSBmcm9tICcuL3BsYXllcnMuanMnXG5pbXBvcnQge2dhbWVib2FyZH0gZnJvbSAnLi9nYW1lQm9hcmRBcnJheS5qcyc7XG5pbXBvcnQgY2hlY2tXaW5uZXIgZnJvbSAnLi9jaGVja1dpbm5lci5qcyc7XG4vLyBHZXQgcG9zaXRpb24gZnJvbSBwbGF5ZXJcbmltcG9ydCB7Z2V0UG9zaXRpb25Gcm9tUGxheWVyLCBQb3NpdGlvbk9uRE9NYm9hcmR9IGZyb20gJy4uL3BhZ2UvZ2V0UG9zaXRpb24uanMnO1xuaW1wb3J0IGVuZEdhbWUgZnJvbSAnLi4vcGFnZS9lbmRHYW1lTWVzc2FnZS5qcyc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnLi4vcGFnZS9idG5SZXNldC5qcyc7XG5pbXBvcnQgQUlNb3ZlIGZyb20gJy4vQUltb3ZlJztcblxuXG5cbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoMSk7XG5jb25zdCBwbGF5ZXIyID0gcGxheWVyKDIpO1xubGV0IF9wbGF5ZWQxID0gZmFsc2VcbmxldCBfcGxheWVkMiA9IGZhbHNlXG5sZXQgZ2FtZUVuZGVkID0gIGZhbHNlO1xuXG5cbi8vIEFsbG93IHVzIHRvIFNldCBnYW1lRW5kZWQgZnJvbSBvdXRzaWRlIHRoZSBtb2R1bGUuIFxuY29uc3Qgc2V0Z2FtZUVuZGVkID0odmFsKSA9PiBnYW1lRW5kZWQgPSB2YWw7XG5cbmNvbnN0IGh1bWFuUGxheSA9IChlLCBYLCBPKSA9PiB7XG4gIFxuICBsZXQgYm94ID0gZ2V0UG9zaXRpb25Gcm9tUGxheWVyKGUpO1xuICBjb25zb2xlLmxvZygnQk9YJywgYm94KVxuICAvLyBjaGVjayBpZiBwbGF5ZXIgaGFzIHBsYXllZCwgaWYgbm90LCBhbGxvdyB0byBwbGF5IHVudGlsIHRoZXJlIGlzIGEgd2lubmVyXG4gIGlmIChfcGxheWVkMSkgXG4gIHtcbiAgICAgIFBvc2l0aW9uT25ET01ib2FyZChlLCBPKTtcbiAgICAgIHBsYXllcjIucGxheShib3gpO1xuICAgICAgX3BsYXllZDIgPSB0cnVlO1xuICAgICAgX3BsYXllZDEgPSBmYWxzZTtcbiAgICB9IFxuICAgIGVsc2UgXG4gICAge1xuICAgICAgXG4gICAgICBQb3NpdGlvbk9uRE9NYm9hcmQoZSwgWCk7XG4gICAgICAvLyBwb3B1bGF0ZSBib2FyZCBBcnJheVxuICAgICAgcGxheWVyMS5wbGF5KGJveCk7XG4gICAgICBcbiAgICBfcGxheWVkMSA9IHRydWU7XG4gICAgX3BsYXllZDIgPSBmYWxzZTtcbiAgfVxuICAgIFxuICAvLyBwcmludCB3aW5uZXIgb3IgdGllIG9uIHNjcmVlbi5cbiAgaWYgKGNoZWNrV2lubmVyKCkud2lubmVyIHx8IGNoZWNrV2lubmVyKCkud2lubmVyID09ICd0aWUnICkgXG4gIHtcbiAgICBlbmRHYW1lKCk7XG4gICAgZ2FtZUVuZGVkID0gdHJ1ZTtcbiAgICByZXNldChfcGxheWVkMSwgX3BsYXllZDIpO1xuICB9XG4gIFxuICAvLyBMT0cgQVJSQVlcbiAgY29uc29sZS5sb2coZ2FtZWJvYXJkLmdldEJvYXJkKCkpOyAgXG4gIHJldHVybntfcGxheWVkMSwgX3BsYXllZDJ9O1xufVxuLy8gQUkgcGxheVxuY29uc3QgQUlwbGF5ID0gKGUsIFgsIE8pID0+IHtcbiAgbGV0IGJveCA9Z2V0UG9zaXRpb25Gcm9tUGxheWVyKGUpXG4gIFBvc2l0aW9uT25ET01ib2FyZChlLCBYKTtcbiAgLy8gcG9wdWxhdGUgYm9hcmQgQXJyYXkgXG4gIHBsYXllcjEucGxheShib3gpO1xuICBsZXQgYWlNb3ZlID0gQUlNb3ZlKGdhbWVib2FyZC5nZXRCb2FyZCgpKVxuICBjb25zb2xlLmxvZyhhaU1vdmUpXG4gIFxuICAvLyBJZiBvbmUgb2YgdGhzZSBjb25kaXRpb25zIGlzIG1ldCwgaXQgZG9lcyBub3QgaGF2ZSB0byBwbGF5IGFueW1vcmVcbiAgaWYoYWlNb3ZlICE9PSB1bmRlZmluZWQgJiYgIWNoZWNrV2lubmVyKCkud2lubmVyKVxuICB7XG4gICAgXG4gICAgXG4gICAgLy8gcG9wdWxhdGUgYm9hcmQgQXJyYXlcbiAgICBwbGF5ZXIyLnBsYXkoYWlNb3ZlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJveCA9IFwiJHthaU1vdmV9XCJdYCkuaW5uZXJIVE1MID0gTztcbiAgICBcbiAgfVxuICBcbi8vIHByaW50IHdpbm5lciBvciB0aWUgb24gc2NyZWVuLlxuaWYgKGNoZWNrV2lubmVyKCkud2lubmVyIHx8IGNoZWNrV2lubmVyKCkud2lubmVyID09ICd0aWUnICkgXG57XG4gIGVuZEdhbWUoKTtcbn1cblxuLy8gTE9HIEFSUkFZXG5jb25zb2xlLmxvZyhnYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG5cbn1cblxuZXhwb3J0IHtodW1hblBsYXksIEFJcGxheSwgZ2FtZUVuZGVkLCBzZXRnYW1lRW5kZWQsIHBsYXllcjEsIHBsYXllcjJ9IiwiaW1wb3J0IHtzZXRnYW1lRW5kZWQgfSBmcm9tIFwiLi4vZ2FtZS9wbGF5ZXJzUGxheVwiO1xuaW1wb3J0IGNoZWNrV2lubmVyIGZyb20gXCIuLi9nYW1lL2NoZWNrV2lubmVyXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi4vZ2FtZS9nYW1lQm9hcmRBcnJheVwiO1xuXG4vKlxud2hlbiB0aGUgcmVzZXQgYnV0dG9uIG9yIGEgZWxlbWVudCB0aGF0IGhhcyB0aGF0IGNsYXNzIGlzIHByZXNzZWQsIHJlc2V0IGFsbCB0aGUgXG52YWx1ZXNcbiAgLSBJdCBnZXRzIGNhbGxlZCBvbiBwbGF5ZXJzUGxheSB3aGVuIHRoZXJlIGlzIGEgd2lubmVyLCBhbmQgdGhlIGh0bWxCb2FyZCwgdG8gXG4gIHJlc2V0IHRoZSB2YWx1ZXMgYXQgYW55IHRpbWVcbiovIFxuXG5jb25zdCByZXNldCA9IChfcGxheWVkMSwgX3BsYXllZDIpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAgXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tLXJlc2V0Jykpe1xuICAgICAgX3BsYXllZDEgPSBmYWxzZTtcbiAgICAgIF9wbGF5ZWQyID0gZmFsc2U7XG4gICAgICAvLyBNb2RpZnkgZ2FtZUVuZGVkIHZhcmlhYmxlIG9uIHBsYXllcnMuUGxheS5qc1xuICAgICAgc2V0Z2FtZUVuZGVkKGZhbHNlKVxuICAgICAgLy8gbW9kaWZ5IGNoZWNrIHdpbm5lclxuICAgICAgY2hlY2tXaW5uZXIoKS53aW5uZXIgPSBmYWxzZTtcbiAgICAgIFxuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgZ2FtZWJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIC8vIENsZWFycyBhcnJheSBib2FyZFxuICAgICAgICBnYW1lYm9hcmQuZ2V0Qm9hcmQoKVtjb3VudGVyXSA9ICcnO1xuICAgICAgICAvLyBDbGVhciBib2FyZCBvbiB0aGUgIERPTS4gXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zeW1ib2wtLSR7Y291bnRlcn1gKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY291bnRlciArKztcbiAgICAgIH0pXG4gICAgICAvLyBEZWxldGV0ZSBFTkQgR0FNRSBtZXNzYWdlXG4gICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWdhbWUtbWVzc2FnZScpKVxuICAgICAge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWdhbWUtbWVzc2FnZScpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbmV4cG9ydCBkZWZhdWx0IHJlc2V0OyAiLCJpbXBvcnQgY2hlY2tXaW5uZXIgZnJvbSBcIi4uL2dhbWUvY2hlY2tXaW5uZXJcIjtcbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW4uY2xhc3NMaXN0LmFkZCgnZW5kLWdhbWUtbWVzc2FnZScsICdnYW1lLW92ZXInKTtcbiAgd2luLmlubmVySFRNTCA9IGBcbiAgPGgxPiR7Y2hlY2tXaW5uZXIoKS5tZXNzYWdlfTwvaDE+XG4gIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1yZXNldFwiPlBsYXkgYWdhaW48L2J1dHRvbj5cbiAgICBgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQod2luKTtcbiAgcmV0dXJuIHRydWU7IFxufVxuXG5leHBvcnQgZGVmYXVsdChlbmRHYW1lKTsiLCJcbmNvbnN0IGdldE5hbWUgPSAocGxheWVyTnVtYmVyKSA9PntcbiAgbGV0IG5hbWU7XG4gIG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmFtZS0ke3BsYXllck51bWJlcn1gKS52YWx1ZTtcbiAgaWYgKG5hbWUgPT0gJycpXG4gIHtcbiAgICBuYW1lID0gYFBsYXllciAke3BsYXllck51bWJlcn1gXG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59XG4vLyBTdG9yZSBuYW1lcyBpbiBMb2NhbCBTdG9yYWdlIGFuZCBvciBsaXN0LlxuLypcbnRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gcGxheWVyLm5hbWUoKSAgaXMgY2FsbGVkIHRvIHN0b3JlIHRoZSBuYW1lIGZyb20gdGhlIFxuZm9ybSBvbiBhIGxpc3QgY2FsbGVkIG5hbWVzLlxuICAtIFRocyBsaXN0IG5hbWVzIGlzIHVzZWQgb24gdGhlIGNoZWNrV2lubmVyKCkgbW9kdWxlIGZvciB0aGUgbWVzc2FnZSBvZiB3aG8gd2luc1xuICBuYW1lc1swXSA9PSBwbGF5ZXIgMSwgbmFtZXNbMV0gPT0gcGxheWVyIDJcbiovIFxuXG5sZXQgbmFtZXMgPSBbXTtcbmNvbnN0IHN0b3JlTmFtZSA9IChuYW1lKSA9PiB7XG4gIG5hbWVzLnB1c2gobmFtZSk7XG4gIHJldHVybiBuYW1lc1xufVxuXG5leHBvcnQgeyBnZXROYW1lLCBzdG9yZU5hbWUsIG5hbWVzfTsiLCJjb25zdCBnZXRQb3NpdGlvbkZyb21QbGF5ZXIgPSAoZSkgPT4ge1xuICBsZXQgc3ltYm9sSFRNTCA9IGUudGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gIHJldHVybiArc3ltYm9sSFRNTC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJveFwiKTtcbiAgXG59XG5cbmNvbnN0IFBvc2l0aW9uT25ET01ib2FyZCA9IChlLCBzeW1ib2wpID0+IHtcbiAgZS50YXJnZXQuZmlyc3RDaGlsZC5pbm5lckhUTUwgPSBzeW1ib2w7XG59XG5cbmV4cG9ydCB7IGdldFBvc2l0aW9uRnJvbVBsYXllciwgUG9zaXRpb25PbkRPTWJvYXJkfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWUvY2hlY2tXaW5uZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=