"use strict";
exports.__esModule = true;
var Shuffle = /** @class */ (function () {
    /** the constructor of this @library */
    function Shuffle(el, options) {
        if (options === void 0) { options = this.defaultOptions; }
        // default css classes
        this.shuffleContentClass = '.shuffle-content';
        this.shuffleControlsClass = ".shuffle-controls";
        this.shuffleControlItemClass = ".shuffle-control-item";
        this.shuffleContentItemClass = ".shuffle-item";
        this.hideClass = "hide";
        // list of the library properties
        this.propsList = [
            'content',
            'controls',
            'controlItems',
            'shuffleItems',
            'hideClass',
        ];
        // default properties in the library
        this.defaultOptions = {
            controls: this.shuffleControlsClass,
            content: this.shuffleContentClass,
            controlItems: this.shuffleControlItemClass,
            shuffleItems: this.shuffleContentItemClass,
            hideClass: this.hideClass
        };
        this.init(el, options);
        this.log(this.shuffleContentItem.length);
    }
    /**
     * if the @option argument has new values of the library properties, the default of it will be changed
     */
    Shuffle.prototype.updateOptions = function (options) {
        var _this = this;
        /**
         * match the @options keys & update the @defaultOptions
         */
        this.propsList.forEach(function (val, propName) {
            _this.defaultOptions[propName] = options[propName] || _this.defaultOptions[propName];
        });
    };
    /**
     * Initialization the @shuffle
     * An alias of the @constructor
     * Solve an error says:
     **** 'this' cannot be referenced in constructor arguments
     */
    Shuffle.prototype.init = function (el, options) {
        if (options === void 0) { options = this.defaultOptions; }
        /** pass the @options into the @updateOptions method */
        this.updateOptions(options);
        /** get the main element of the @shuffle */
        this.shuffleContainer = document.querySelector(el);
        /** get the elements @container of the @shuffle */
        this.shuffleContent = this.shuffleContainer.querySelector(this.defaultOptions.content);
        /** get the elements @items of the @shuffle */
        this.shuffleContentItem = this.shuffleContent.querySelectorAll(this.defaultOptions.shuffleItems);
        /** get the controls @container of the @shuffle */
        this.shuffleControls = this.shuffleContainer.querySelector(this.defaultOptions.controls);
        /** get the controls @items of the @shuffle */
        this.shuffleControlItem = this.shuffleControls.querySelectorAll(this.defaultOptions.controlItems);
        /** call the method @shufflingByClick */
        this.shufflingByClick();
    };
    /**
     * method to hide all elements in the @shuffleContent
     */
    Shuffle.prototype.hideAll = function () {
        var _this = this;
        this.shuffleContentItem.forEach(function (sci) {
            sci.classList.add(_this.hideClass);
        });
    };
    /**
     * method to show all elements in the @shuffleContent
     */
    Shuffle.prototype.showAll = function () {
        var _this = this;
        this.shuffleContentItem.forEach(function (sci) {
            sci.classList.remove(_this.hideClass);
        });
    };
    /**
     * init the @shuffle by the @click event
     */
    Shuffle.prototype.shufflingByClick = function () {
        var _this = this;
        var shufflesElements = this.shuffleContentItem;
        /** make loop from every @shuffleControlItem */
        this.shuffleControlItem.forEach(function (btn) {
            /** get the @dataBtn from all the buttons */
            var btnAttr = btn.getAttribute('data-btn');
            /** trigger the @click event & execute the function */
            btn.onclick = function () {
                if (btnAttr == "all" || btnAttr == null) {
                    _this.showAll();
                }
                else {
                    shufflesElements.forEach(function (sElem) {
                        var sElemAttr = sElem.getAttribute('data-cat');
                        if (sElemAttr == btnAttr) {
                            _this.hideAll();
                            sElem.classList.remove(_this.hideClass);
                        }
                    });
                }
            };
        });
    };
    /** use @consoleLog to test something */
    Shuffle.prototype.log = function (msg) {
        console.log(msg);
    };
    return Shuffle;
}());
exports["default"] = Shuffle;
new Shuffle('.shuffle-kech');
