export default class Shuffle {

  /** the constructor of this @library */
  constructor(el, options = this.defaultOptions) {
    this.init(el, options)
    this.log(this.shuffleContentItem.length)
  }

  // DOM objects
  shuffleControls;
	shuffleControlItem;
	shuffleContainer;
	shuffleContent;
	shuffleContentItem;

  // default css classes
  shuffleContentClass:String = '.shuffle-content';
	shuffleControlsClass:String = ".shuffle-controls";
  shuffleControlItemClass:String = ".shuffle-control-item";
	shuffleContentItemClass:String = ".shuffle-item";
	hideClass:String = "hide";

  // list of the library properties
  propsList:String[] = [
		'content',
		'controls',
		'controlItems',
		'shuffleItems',
		'hideClass',
	];

  // default properties in the library
  defaultOptions = {
		controls: this.shuffleControlsClass,
		content: this.shuffleContentClass,
		controlItems: this.shuffleControlItemClass,
		shuffleItems: this.shuffleContentItemClass,
		hideClass: this.hideClass,
	};

  /**
   * if the @option argument has new values of the library properties, the default of it will be changed
   */
	updateOptions(options:Object) {
    /** 
     * match the @options keys & update the @defaultOptions
     */
		this.propsList.forEach((val, propName) => {
			this.defaultOptions[propName] = options[propName] || this.defaultOptions[propName]
		})
	}

  /** 
   * Initialization the @shuffle 
   * An alias of the @constructor
   * Solve an error says:
   **** 'this' cannot be referenced in constructor arguments
   */
  init(el, options = this.defaultOptions) {

    /** pass the @options into the @updateOptions method */
		this.updateOptions(options)

    /** get the main element of the @shuffle */
    this.shuffleContainer = document.querySelector(el)

    /** get the elements @container of the @shuffle */
		this.shuffleContent = this.shuffleContainer.querySelector(this.defaultOptions.content)

    /** get the elements @items of the @shuffle */
		this.shuffleContentItem = this.shuffleContent.querySelectorAll(this.defaultOptions.shuffleItems)

    /** get the controls @container of the @shuffle */
		this.shuffleControls = this.shuffleContainer.querySelector(this.defaultOptions.controls)

    /** get the controls @items of the @shuffle */
		this.shuffleControlItem = this.shuffleControls.querySelectorAll(this.defaultOptions.controlItems)

    /** call the method @shufflingByClick */
    this.shufflingByClick();

  }

  /**
   * method to hide all elements in the @shuffleContent
   */
	hideAll() {
		this.shuffleContentItem.forEach((sci) => {
			sci.classList.add(this.hideClass)
		})
	}

  /**
   * method to show all elements in the @shuffleContent
   */
	showAll() {
		this.shuffleContentItem.forEach((sci) => {
			sci.classList.remove(this.hideClass)
		})
	}

  /**
   * init the @shuffle by the @click event
   */
	shufflingByClick() {
		const shufflesElements = this.shuffleContentItem
    
    /** make loop from every @shuffleControlItem */
    this.shuffleControlItem.forEach(btn => {
      /** get the @dataBtn from all the buttons */
      const btnAttr = btn.getAttribute('data-btn')
      /** trigger the @click event & execute the function */
      btn.onclick = () => {
				if (btnAttr == "all" || btnAttr == null) {
					this.showAll()
				} else {
					shufflesElements.forEach((sElem) => {
						const sElemAttr = sElem.getAttribute('data-cat')
						if (sElemAttr == btnAttr) {
							this.hideAll()
							sElem.classList.remove(this.hideClass)
						}
					})
				}
			};
		});
	}

  /** use @consoleLog to test something */
	log(msg) {
		console.log(msg);
	}

}

new Shuffle('.shuffle-kech');
