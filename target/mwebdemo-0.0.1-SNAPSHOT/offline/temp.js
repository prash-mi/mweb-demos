/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");


/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
	  {
	    "url": "images/offline.jpg",
	    "revision": "805509e8305424cdbcd7ecf0aeafda47"
	  },
	  {
	    "url": "images/p.jpg",
	    "revision": "74a94c8308d457f4efc183f78477820d"
	  },
	  {
	    "url": "offline.html",
	    "revision": "bbafbe0a83ef219548d9314f578d1ed2"
	  }
	].concat(self.__precacheManifest || []);
	workbox.precaching.suppressWarnings();
	workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\//, async ({event}) => {
    try {
        return await workbox.strategies.networkFirst().handle({event});
      } catch (error) {
        return caches.match("offline.html");
      }
    });

workbox.routing.registerRoute(/(.)*\/index.html/, async ({event}) => {
    try {
        return await workbox.strategies.networkFirst().handle({event});
      } catch (error) {
        return caches.match("offline.html");
      }
    });
