module.exports = {
		"swDest": "swGen.js",
		globPatterns: ['images/*.{png,jpg}', 'script/*.js','offline.html'],
		globDirectory: '.',
		skipWaiting:true,
		clientsClaim:true,
		runtimeCaching: [
			{
				urlPattern: new RegExp('/'),
				handler: 'networkFirst'
			},
			{
				urlPattern: new RegExp('(.)*\/index.html'),
				handler: 'networkFirst'
			}]
};

//workbox generateSW wbconfig.js 
//workbox injectManifest wbconfig-injectmf.js 