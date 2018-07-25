'use strict';


var gulp = require('gulp');
const wbBuild = require('workbox-build');

gulp.task('sw', () => {
	return wbBuild.generateSW({
		globDirectory: '.',
		swDest: 'sw.js',
		staticFileGlobs: [
			'index.html',
			'script/app.js',
			'images/*.{jpg,jpeg,png}',
			],
			verbose: true,

			runtimeCaching: [// no runtime caching required

				]
	})
	.then(() => {
		console.log('Service worker generated.');
	})
	.catch((err) => {
		console.log('[ERROR] This happened: ' + err);
	});
});

