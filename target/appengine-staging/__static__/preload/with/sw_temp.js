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
//This will trigger the importScripts() for workbox.strategies and its dependencies:
workbox.loadModule('workbox-strategies');
workbox.skipWaiting();
workbox.clientsClaim();
/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
	
workbox.precaching.precacheAndRoute([]);

//logically it's acting like networkFirst and not networkOnly 
workbox.routing.registerRoute(/\//, async ({event}) => {
    try {
        return await workbox.strategies.networkOnly().handle({event});
      } catch (error) {
        return caches.match("offline.html");
      }
    });

workbox.routing.registerRoute(/(.)*\/index.html/, async ({event}) => {
    try {
        return await workbox.strategies.networkOnly().handle({event});
      } catch (error) {
        return caches.match("offline.html");
      }
    });
