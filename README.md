# boilerplate-frontend

a lightweight template for web apps


## documentation

#### webpack

- webpack core provides module bundling
- JS sourcemaps are provided by the "devtool" property
- "html-webpack-plugin" will inject all bundled js and css files into the html file
- "webpack-dev-server" provides live-reloading
- "copy-webpack-plugin" selects files that need to be copied from src to dist (https://github.com/kevlened/copy-webpack-plugin)
- "write-file-webpack-plugin" is needed to force webpack-dev-server to copy watched files to dist folder instead from only serving them up from memory. files will still get served from memory but also copied. (https://github.com/gajus/write-file-webpack-plugin)

- SASS transpilation: "sass-loader" transforms SASS into CSS. "css-loader" parses the CSS into JS and resolves any dependencies. "style-loader" outputs our CSS into a style tag in the document.
- "file-loader" and "url-loader" are resolving image/fonts/.. references in css files
- "optimize-css-assets-webpack-plugin" minifies css. this module is necessary as webpack isnt able to minify css, when we dont inject css via js but instead use the "extract-text-webpack-plugin"

#### linting
- "eslint" installed as a local npm package with associated .eslintrc config to allow your code editor (e.g. vscode) make use of linting-plugins

#### JS transpilation

- unsupported ECMAScript syntax will be transpiled with babels "babel-preset-latest" to a lower ECMAScript version that all browsers understand
- unsupported ECMAScript libraries will be polyfilled with the help of polyfill.io
- unsupported react syntax like JSX/flow will be transpiled to valid javascript with "babel-preset-react"

#### react

- "react", "react-dom", "react-router-dom"  provide the basic react components
- .eslintrc has been adjusted to deal with JSX syntax


#### other ressources

https://webpack.js.org/guides/  
https://webpack.js.org/configuration/  
http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/  
https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/  
https://github.com/NMFR/optimize-css-assets-webpack-plugin  
https://survivejs.com/webpack/loading/images/

https://github.com/webpack-contrib/extract-text-webpack-plugin