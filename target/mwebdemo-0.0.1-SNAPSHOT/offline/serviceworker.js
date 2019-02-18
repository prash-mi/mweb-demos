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
    "url": "images/icon-192.png",
    "revision": "7469079da18555c463fec6795e234535"
  },
  {
    "url": "images/icons-512.png",
    "revision": "8dfae9c551f1b8ddd88ad5e644b64c65"
  },
  {
    "url": "images/offline.jpg",
    "revision": "805509e8305424cdbcd7ecf0aeafda47"
  },
  {
    "url": "images/p.jpg",
    "revision": "74a94c8308d457f4efc183f78477820d"
  },
  {
    "url": "images/pixel2.jpg",
    "revision": "82b1ee152c9e120341d7061203333f4a"
  },
  {
    "url": "script/app.js",
    "revision": "0c734cbfe047fc0f28e3cbccb831f0e4"
  },
  {
    "url": "offline.html",
    "revision": "46a8633b53ce91e75bdeb189f331e4fb"
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
