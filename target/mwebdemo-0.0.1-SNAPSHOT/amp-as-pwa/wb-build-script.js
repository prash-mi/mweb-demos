module.exports = {
  "swDest": "sw.js",
  globPatterns: ['images/*.png'],
  globDirectory: '.',

  runtimeCaching: [
	  {
	    urlPattern: new RegExp('^https:\/\/mweb-demos\.appspot\.com\/amp-as-pwa\/index.html'),
	    handler: 'networkFirst',
	    options: {
	      cacheName: 'amp-as-pwa-cache'
		      
	    }
	  }]
};