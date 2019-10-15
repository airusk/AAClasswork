/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(options){\n  options.color = options.color || '#' + Math.floor(Math.random() * 16777215).toString(16);\n  options.radius = options.radius || 10;\n  options.vel = options.vel || Util.randomVec(0.5);\n  MovingObject.call(this, options);\n}\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nfunction Game(){\n  this.DIM_X = 600;\n  this.DIM_Y = 600;\n  this.NUM_ASTEROIDS = 19;\n  this.asteroids = [];\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function(){\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    let roid = new Asteroid({ pos: this.randomPosition() });//, game: this\n    this.asteroids.push(roid);\n  }\n};\n\nGame.prototype.randomPosition = function(){\n  return [Math.floor(Math.random() * 600), Math.floor(Math.random() * 600)];\n};\n\nGame.prototype.draw = function(ctx){\n  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);\n  for (let i=0; i<this.NUM_ASTEROIDS; i++){\n    this.asteroids[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function(){\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids[i].move();\n  }\n};\n\n// Game.prototype.wrap = function(pos){\n//   let x = pos[0];\n//   let y = pos[1];\n\n//   if(x > 605){\n//     x = -5;\n//   }else if (x < -5){\n//     x = 605;\n//   }\n\n//   if(y > 605){\n//     y = -5;\n//   }else if (y < -5){\n//     y = 605;\n//   }\n\n//   return [x,y];\n// };\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(game, ctx){\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n  let that = this;\n  setInterval( function(){\n    that.game.moveObjects();\n    that.game.draw(that.ctx);\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Wubpack is wubbing\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n  const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n  const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n  const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  \n  window.ctx = ctx;\n  window.MovingObject = MovingObject;\n  window.Asteroid = Asteroid;\n  window.Game = Game;\n  window.GameView = GameView;\n  \n  let g = new Game();\n  let gv = new GameView(g, ctx);\n  gv.start();\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Game = require(\"./game.js\");\n\nconst mo = new MovingObject({\n  pos: [300,300],\n  vel: [10,5],\n  radius: 20,\n  color: \"#41e0cb\"\n});\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options[\"vel\"];\n  this.radius = options.radius;\n  this.color = options.color;\n  // this.game = options.game;\n}\n\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  // this.pos = this.game.wrap(this.pos);\n  if (this.pos[0] > 610) {\n    this.pos[0] = -5;\n  }else if (this.pos[0] < -5){\n    this.pos[0] = 610;\n  }\n  if(this.pos[1] > 610){\n    this.pos[1] = -5;\n  }else if (this.pos[1] < -5){\n    this.pos[1] = 610;\n  }\n  \n};\n\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  inherits(childClass, parentClass) {\n    let Surrogate = function(){};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass.constructor;\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });