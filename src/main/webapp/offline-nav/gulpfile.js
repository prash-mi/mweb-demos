'use strict';


var gulp = require('gulp');
const wbBuild = require('workbox-build');

gulp.task('default', () => {
	  return wbBuild.generateSW({
		  globDirectory: '.',
		  swDest: 'sw.js',
		  staticFileGlobs: [
		  'offlineGaragePage.html'
			  ],
			  
		  verbose: true,
		  runtimeCaching: [{
			  urlPattern:  "http://localhost(.*)",
			  handler: "cacheFirst"
				  ,
			  options: {
				    cache: {
				      maxEntries: 10,
				      name: 'test-cache'
				    }
				  }
			  
			  
		  }]
		  
	  })
	  .then(() => {
	    console.log('Service worker generated.');
	  })
	  .catch((err) => {
	    console.log('[ERROR] This happened: ' + err);
	  });
	});

