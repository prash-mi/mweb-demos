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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "c2049f594e18c4359584f38ae0abe874"
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

workbox.routing.registerRoute(/\/^http(.)*\//, workbox.strategies.cacheFirst({ cacheName: "media-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":5})] }), 'GET');
