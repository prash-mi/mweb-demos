module.exports = {
  "swDest": "sw.js",
  globPatterns: ['images/*'], //precache the images
  globDirectory: '.',

  runtimeCaching: [
	  {
	    urlPattern: new RegExp('^https:\/\/mweb-demos\.appspot\.com\/we-rock\/index.html'),//cache the index.html 
	    handler: 'networkFirst', // using the networkfirst handler 
	    options: {
	      cacheName: 'amp-as-pwa-cache'
		      
	    }
	  }]
};