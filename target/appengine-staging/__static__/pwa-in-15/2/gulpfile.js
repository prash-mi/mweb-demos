'use strict';


var gulp = require('gulp');
const wbBuild = require('workbox-build');

gulp.task('sw', () => {
	return wbBuild.generateSW({
		globDirectory: '.',
		swDest: 'sw.js',
		staticFileGlobs: [
			'images/*',
			'fonts/*',
			'css/*',
			'js/*',
			'*.html'
			],
			verbose: true,

			runtimeCaching: [
			
		     	{
		        urlPattern:  "/*/",
		        handler: "cacheFirst"
		     	},
		     	{
		        urlPattern:  "https://fonts.gstatic.com/*",
		        handler: "cacheFirst"
		     	},
		     	{
		        urlPattern:  "https://fonts.googleapis.com/*",
		        handler: "cacheFirst"
		     	}

				]
	})
	.then(() => {
		console.log('Service worker generated.');
	})
	.catch((err) => {
		console.log('[ERROR] This happened: ' + err);
	});
});
