const config = require('../config');
const helpers = require('./helpers');


const str = [
	config.rootDir,
	config.src,
	config.dist,
	config.docs,
	config.jsFolder,
	config.jsFiles,
	config.jsMain,
	config.pugFolder,
	config.pugFiles,
	config.pugIndex,
	config.pugExtends,
	config.pugPartials,
	config.tsFolder,
	config.tsFiles,
	config.tsMain,
];

const num = [
	config.port,
]

describe("Config file testing >", () => {
	/** check @filesPath if string */
	str.forEach((el) => {
		helpers.isString(el)
	})

	/** check the @path is not null */
	Object.values(config).forEach((val) => {
		helpers.notNull(val)
	})

	/** check @variables if number */
	num.forEach((el) => {
		helpers.isNumber(el)
	})

});

