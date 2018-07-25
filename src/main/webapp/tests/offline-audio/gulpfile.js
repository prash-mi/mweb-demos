'use strict';

var gulp = require('gulp');
const wbBuild = require('workbox-build');

gulp.task('sw', () => {
	return wbBuild.generateSW({
		globDirectory: '.',
		swDest: 'sw.js',
		globPatterns: [
			'index.html',
			'/',
			'images/music.png',
			'images/play.png'
			],

			runtimeCaching: [{
		        urlPattern:  new RegExp('/^http(.)*/'),
		        handler: "cacheFirst",
		        options: {
		        	 cacheName: 'media-cache',
		             // Configure custom cache expiration.
		             expiration: {
		               maxEntries: 5
		             }
			
			,
//			rangeRequests:{},
//			
//			
//		        	 broadcastUpdate: {
//		        		    channelName: "my-update-channel"
//		        		  }
			
			
		      }
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

