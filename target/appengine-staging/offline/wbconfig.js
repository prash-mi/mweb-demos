module.exports = {
		"swDest": "swGen.js",
		globPatterns: ['images/*.{png,jpg}', 'script/*.js','offline.html'],
		globDirectory: '.',

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