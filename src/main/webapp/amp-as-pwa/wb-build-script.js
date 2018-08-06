module.exports = {
  "swDest": "sw.js",
  globPatterns: ['images/*.png'], //precache the images
  globDirectory: '.',

  runtimeCaching: [
	  {
	    urlPattern: new RegExp('^https:\/\/mweb-demos\.appspot\.com\/amp-as-pwa\/index.html'),//cache the index.html 
	    handler: 'networkFirst', // using the networkfirst handler 
	    options: {
	      cacheName: 'amp-as-pwa-cache'
		      
	    }
	  }]
};