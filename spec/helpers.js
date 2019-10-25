// custom helpers files

/** to check if the input type is @string */
module.exports.isString = (input) => {
	it("check if the input is string", () => {
		expect(typeof(input)).toBe("string");
	})
}

/** to check if the input type is @number */
module.exports.isNumber = (input) => {
	it("check if the input is number", () => {
		expect(typeof(input)).toBe("number");
	})
}

/** to check if the input type is @array */
module.exports.isArray = (input) => {
	it("check if the input is number", () => {
		expect(Array.isArray(input)).toBe(true);
	})
}

/** to check if the input type is @object */
module.exports.isObject = (input) => {
	it("check if the input is object", () => {
		expect(typeof(input)).toBe("object");
	})
}

/** to check if the input type is @notNull */
module.exports.notNull = (input) => {
	it("check if the input is not null", () => {
		expect(input != '' || input !== '').toBe(true);
	})
}
