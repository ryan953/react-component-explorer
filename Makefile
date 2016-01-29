.PHONEY: build

build:
	./node_modules/webpack/bin/webpack.js --config webpack.component.config.js -p
	./node_modules/webpack/bin/webpack.js --config webpack.loader.config.js -p
