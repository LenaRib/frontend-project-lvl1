install: #for new repository
	npm install

brain-games: #run the Game
	node bin/brain-games.js

publish: #
	npm publish --dry-run
