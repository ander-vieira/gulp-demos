# Asset compiling demos using Gulp

These demos show different things you can do in the realm of asset preprocessing.

## Who is this useful for

Asset compiling is useful for *anyone who works with web development* and front-end assets, CSS and JS especially. They unlock additional features by means of compiled languages such as SASS, and transpiling tools such as Babel, and enhance browser-side performance via minification. As such, front-end developers as well as full-stack developers might benefit from adding these tools to their toolbelt.

## Benefits

* Enhanced performance, especially useful for mobile users with limited bandwidth.
* Useful features for CSS generation offered by preprocessing languages (SASS, Less).
* Guaranteed compatibility with most browsers thanks to Babel, allowing use of ES6 features such as classes, while retaining IE11 support.
* Cache busting via automatic versioning of assets
* And many more!

## How to use this project

In order to install this project, you must have Node.js installed.

In order to run the server which serves the demos (not necessary for the demos' functionality, as they are fully static and independent sites), you can run the following commands in the project root:
* `npm install`
* `npm run start`

However, each demo must be compiled before it can be seen: for that, in each of the demo directories, you can run the following commands to perform the actual asset compilation:
* `npm install`
* `gulp`

Demos 3 and 4 additionally have 'watch' type commands, which will recompile the demos automatically on changes. These can be copied for your own projects or used to tinker with the demos. You can run them via `gulp watch` in the appropriate demo directory.
