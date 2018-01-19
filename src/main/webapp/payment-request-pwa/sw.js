importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "108f42cd8b68bc120a2b991b37fb031b"
  },
  {
    "url": "script/app.js",
    "revision": "0c734cbfe047fc0f28e3cbccb831f0e4"
  },
  {
    "url": "images/icon-192.png",
    "revision": "7469079da18555c463fec6795e234535"
  },
  {
    "url": "images/icons-512.png",
    "revision": "8dfae9c551f1b8ddd88ad5e644b64c65"
  },
  {
    "url": "images/pixel2.jpeg",
    "revision": "82b1ee152c9e120341d7061203333f4a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
