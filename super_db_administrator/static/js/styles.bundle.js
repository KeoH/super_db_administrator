webpackJsonp([1,2],{

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(633);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(670)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./main.sass", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(634)();
// imports


// module
exports.push([module.i, ".MainNav {\n  background-color: #2a3039;\n  width: 200px;\n  box-sizing: border-box;\n  max-width: 200px;\n  height: 100%;\n  top: -1px;\n  display: inline-block;\n  position: absolute;\n  border-right: 1px solid #222;\n  transition: all .6s;\n  display: flex;\n  flex-direction: column; }\n  .MainNav.hide {\n    transform: translateX(-210px); }\n\n.navProfile {\n  flex-basis: 100px;\n  margin-top: 1em;\n  padding: 1em;\n  margin-bottom: .5em;\n  display: flex;\n  flex-direction: column; }\n  .navProfile .Photo {\n    background-color: #0c78c8;\n    margin: 0 auto;\n    width: 76px;\n    height: 76px;\n    padding: 2px;\n    text-align: center;\n    position: relative; }\n    .navProfile .Photo img {\n      width: 72px;\n      border: 2px solid black;\n      height: 72px; }\n    .navProfile .Photo .badge {\n      position: absolute;\n      top: 50%;\n      right: -9px;\n      background-color: #a9bd7a;\n      width: 18px;\n      height: 18px;\n      border-radius: 50%;\n      text-align: center;\n      font-size: .85em;\n      border: 2px solid black; }\n  .navProfile .ProfileName {\n    text-transform: uppercase;\n    color: #95a0b1;\n    font-weight: 200;\n    text-align: center;\n    font-size: 0.9em;\n    padding: .5em 0; }\n\n.navContent {\n  flex: 1; }\n\n.navList {\n  margin: 0;\n  list-style: none;\n  margin: 1em auto;\n  padding: 0; }\n\n.navListItem {\n  border-bottom: 1px solid #222;\n  cursor: pointer; }\n  .navListItem .navListItemLink {\n    padding: .6em .5em .6em 1em;\n    color: #95a0b1;\n    text-decoration: none;\n    display: block;\n    height: 100%; }\n  .navListItem i {\n    font-size: 1.5em;\n    margin-right: .5em; }\n  .navListItem.active .navListItemLink {\n    background-color: #6fb4ce;\n    color: white; }\n  .navListItem.active .navDropdownList {\n    display: block; }\n\n.navDropdownList {\n  list-style: none;\n  padding: 0.8em 0;\n  display: none; }\n\n.navDropdownListItem {\n  height: 2em; }\n  .navDropdownListItem .navDropdownListItemLink {\n    display: block;\n    height: 100%;\n    padding-left: 2em;\n    color: #95a0b1;\n    text-decoration: none; }\n\nbody {\n  background-color: #313742; }\n\np {\n  margin: 0; }\n\n.Body {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0; }\n\n.MainContent, .MainHeader {\n  background-color: #333; }\n\n.MainHeader {\n  flex-basis: 60px;\n  max-height: 60px;\n  display: flex;\n  align-items: center;\n  padding: 0 1em;\n  background-color: #2a3039;\n  border-bottom: 1px solid #222; }\n\n.Logo {\n  flex-basis: 200px; }\n  .Logo h1 {\n    margin: 0;\n    font-size: 20px;\n    color: white; }\n\n.MenuToogle {\n  flex-basis: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #222;\n  background-color: #333;\n  border-radius: 10px;\n  color: orange;\n  cursor: pointer; }\n\n.MainContent {\n  flex: 1;\n  position: relative;\n  height: 100%; }\n\n.Content {\n  background-color: #313742;\n  height: 100%;\n  min-height: 600px;\n  padding: 1em; }\n\n.HeaderNav {\n  display: flex;\n  flex: 1;\n  padding-right: 2em;\n  height: 60px; }\n\n.HeaderNav-wrapper {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end; }\n\n.HeaderNav-Icon {\n  flex-basis: 3em;\n  font-size: 1.1em;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  color: gray;\n  cursor: pointer; }\n  .HeaderNav-Icon i {\n    position: relative; }\n    .HeaderNav-Icon i span {\n      background-color: #313742;\n      border-radius: 5px;\n      border: 1px solid black;\n      box-sizing: border-box;\n      color: white;\n      display: inline-block;\n      font-size: 0.5em;\n      height: 20px;\n      padding: .3em;\n      position: absolute;\n      text-align: center;\n      width: 20px;\n      top: -10px;\n      right: -10px; }\n  @media screen and (min-width: 768px) {\n    .HeaderNav-Icon {\n      display: flex; } }\n\n.Notifications i span {\n  background-color: #6fb4ce; }\n\n.Tasks i span {\n  background-color: #bf7a6a; }\n\n.Profile {\n  flex-basis: 9em;\n  justify-content: space-around; }\n\n.Profile-NameWrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  font-size: .8em;\n  text-align: right;\n  padding-right: 1em; }\n\n.NameWrapper-name {\n  color: white; }\n\n.NameWrapper-role {\n  color: gray; }\n\n.Profile-PictureWrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  height: 100%;\n  flex-basis: 40px; }\n  .Profile-PictureWrapper img {\n    width: 20px;\n    height: 20px; }\n", ""]);

// exports


/***/ },

/***/ 634:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 670:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(371);


/***/ }

},[673]);
//# sourceMappingURL=styles.map