# Virtual DOM + JSX Showdown

Comparing React with three other virtual DOM libraries that support JSX components by building a simple component based markdown editor.

Read the article on SitePoint: [3 Lightweight React Alternatives: Preact, VirtualDom & Deku](http://www.sitepoint.com/react-alternatives-preact-virtualdom-deku)

## React
* __Version__: 0.14.7
* __Lines of Code__: 61
* __Dependencies__: `react`, `react-dom`, `marked`
* __Bundle Size__: 154.1kb
* __Gzipped__: 45.3kb
* __Codepen__: http://codepen.io/SitePoint/pen/qZxpeP
![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/03/1458057687react-flamegraph.png)

## Deku
* __Version__: 2.0.0-rc16
* __Lines of Code__: 80
* __Dependencies__: `deku`, `redux`, `marked`
* __Bundle Size__: 51.2kb
* __Gzipped__: 15.3kb
* __Codepen__: http://codepen.io/SitePoint/pen/NNyXQZ
![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/03/1458057722deku-flamegraph.png)

## Preact
* __Version__: 0.14.7
* __Lines of Code__: 62
* __Dependencies__: `preact`, `decko`, `marked`
* __Bundle Size__: 30.6kb
* __Gzipped__: 10.5kb
* __Codepen__: http://codepen.io/SitePoint/pen/reJJBW
![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/03/1458057699preact-flamegraph.png)

## Virtual DOM
* __Version__: 2.1.1
* __Lines of Code__: 85
* __Dependencies__: `virtual-dom`, `virtual-dom-util`, `redux`, `marked`
* __Bundle Size__: 50.5kb
* __Gzipped__: 15.2kb
* __Codepen__: http://codepen.io/SitePoint/pen/reJJNW
![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/03/1458057712vdom-flamegraph.png)

# Builds
This repository contains everything you need to make performance testing builds for the markdown editors. An ES5 snapshot of the Codepen sources has been included in `src/` and you can install the other dependencies with `npm install`. Run `make minify` to create a build, then find the appropriate HTML in `editors/`.

## Compile
Use `make compile` to create an unminified build.

## Minify
Use `make minify` to create a minified build.

## Gzip
Use `make gzip` to gzip a minified build (size testing artifact).

## Minify Deps
Use `make minify-deps` to create a minified versions of each dependency (size testing artifact).

## Clean
Use `make clean` to delete all built code.

## License

The MIT License (MIT)

Copyright (c) 2016 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
