install:
	npm install
start: 
	npx node bin/brain-games.js
	npx node bin/brain-even.js
	npx node bin/brain-calc.js
	npx node bin/brain-gcd.js
	npx node bin/brain-progression.js
	npx node bin/brain-prime.js
build:
	rm -rf dist
	npm run build
publish:
	npm publish --dry-run

lint:
	npx eslint .
