importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");
workbox.setConfig({
	  debug: true
	});


/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "b8b595f079160e8363a90854faf858d7"
  },
  {
    "url": "images/music.png",
    "revision": "a6923aaad0be062e77fe06aa34e8d2e3"
  },
  {
    "url": "images/play.png",
    "revision": "2411b9b9fd954586186478e545373881"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

//workbox.routing.registerRoute(new RegExp('http(.)*'), workbox.strategies.cacheFirst({ cacheName: "media-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":5})] }), 'GET');
//workbox.routing.registerRoute(new RegExp('http(.)*'), workbox.strategies.cacheFirst({ cacheName: "media-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":5}), new workbox.rangeRequests.Plugin()] }), 'GET');
workbox.routing.registerRoute(new RegExp('https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8'), workbox.strategies.cacheFirst({ cacheName: "media-cache", plugins: [new workbox.rangeRequests.Plugin()] }), 'GET');