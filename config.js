rootDir = "./"

src = rootDir + "src/"

dist = "dist/"

docs = "docs/"

jsFolder = src + "js/"
jsFiles = jsFolder + "*.js"
jsMain = jsFolder + "main.js"

pugFolder = src + "pug/"
pugFiles = pugFolder + "**/*.pug"
pugIndex = pugFolder + "index.pug"
pugPartials = pugFolder + "partials/"
pugExtends = pugFolder + "extends/"

specFiles = 'spec/**/*.[sS]pec.js'

devPort = 3000

tsFolder = src + "ts/"
tsFiles = tsFolder + "**/*.ts"
tsMain = tsFolder + "main.ts"



title = "shuffle"
description = "shuffle description"
authour = "Mohssine"

// export the variables
module.exports = {
	title,
	description,
	authour,
	src,
	dist,
	docs,
	jsFolder,
	pugFolder,
	jsFiles,
	specFiles,
	jsMain,
	pugFiles,
	pugIndex,
	pugExtends,
	pugPartials,
	port: devPort,
	rootDir,
	tsFolder,
	tsFiles,
	tsMain,
}