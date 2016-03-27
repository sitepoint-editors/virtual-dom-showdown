compile:
	mkdir -p unminified
	browserify src/preact.js -o unminified/preact.js
	browserify src/deku.js   -o unminified/deku.js
	browserify src/vdom.js   -o unminified/vdom.js
	browserify src/react.js  -o unminified/react.js
	wget -qO- https://fb.me/react-0.14.7.js >> minified/react.js
	wget -qO- https://fb.me/react-dom-0.14.7.js >> minified/react.js
	du -h unminified/*

minify:
	mkdir -p minified
	browserify src/deku.js   -g uglifyify -o minified/deku.js
	browserify src/preact.js -g uglifyify -o minified/preact.js
	browserify src/vdom.js   -g uglifyify -o minified/vdom.js
	wget -qO- https://fb.me/react-0.14.7.min.js > minified/react.js
	wget -qO- https://fb.me/react-dom-0.14.7.min.js >> minified/react.js
	browserify src/react.js  -g uglifyify >> minified/react.js
	du -h minified/*

minify-deps:
	mkdir -p minified-deps
	browserify deps/deku.js   -g uglifyify -o minified-deps/deku.js
	browserify deps/preact.js -g uglifyify -o minified-deps/preact.js
	browserify deps/vdom.js   -g uglifyify -o minified-deps/vdom.js
	browserify deps/redux.js   -g uglifyify -o minified-deps/redux.js
	browserify deps/decko.js   -g uglifyify -o minified-deps/decko.js
	browserify deps/marked.js   -g uglifyify -o minified-deps/marked.js
	browserify deps/vdom-util.js   -g uglifyify -o minified-deps/vdom-util.js
	wget -qO- https://fb.me/react-0.14.7.min.js > minified-deps/react.js
	wget -qO- https://fb.me/react-dom-0.14.7.min.js > minified-deps/react-dom.js
	du -h minified-deps/*

gzip:
	#make minify
	mkdir -p gzipped
	gzip < minified/react.js  > gzipped/react.gz
	gzip < minified/preact.js > gzipped/preact.gz
	gzip < minified/deku.js   > gzipped/deku.gz
	gzip < minified/vdom.js   > gzipped/vdom.gz
	du -h minified/*

clean:
	rm -r gzipped
	rm -r minified
	rm -r unminified
