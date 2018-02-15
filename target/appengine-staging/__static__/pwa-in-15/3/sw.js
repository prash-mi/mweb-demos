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
    "url": "images/3.jpeg",
    "revision": "66d0feab27efae6a213a2d9748bf5bf2"
  },
  {
    "url": "images/ab.jpg",
    "revision": "9ef51c230fd33c4c67584cf2a69a033d"
  },
  {
    "url": "images/b1.jpg",
    "revision": "4f46d12b18f012b50ed1f9ef53d16c72"
  },
  {
    "url": "images/b2.jpg",
    "revision": "98a60df63a22516c937e3c332ac06875"
  },
  {
    "url": "images/b3.jpg",
    "revision": "2c4a2d2e86bd3d3d2ba15faf410221d2"
  },
  {
    "url": "images/b4.jpg",
    "revision": "f6d574894df29c9899a33feb4f4c4141"
  },
  {
    "url": "images/banner1.jpg",
    "revision": "8d5c432aa81879a395472a3b64d2bcfb"
  },
  {
    "url": "images/banner2.jpg",
    "revision": "1cdb5e290565b495f53284b094b4cc6e"
  },
  {
    "url": "images/banner3.jpg",
    "revision": "5ae2e3994c70d7fdef9e447c9d9708bf"
  },
  {
    "url": "images/banner4.jpg",
    "revision": "89673055ae2ce8c523656df0c2834a5e"
  },
  {
    "url": "images/close_1.JPG",
    "revision": "d01208748a21452aeb630ad12b08b5d1"
  },
  {
    "url": "images/close.png",
    "revision": "9280d29d67b133fac9786a38bcb8636b"
  },
  {
    "url": "images/d1.jpg",
    "revision": "ffec81cbd0048dff1c7ef986158ca138"
  },
  {
    "url": "images/d2.jpg",
    "revision": "f3bb78e4c8b1816ae3072b379ec7f424"
  },
  {
    "url": "images/d3.jpg",
    "revision": "5b7c489bbbc797f6822eda1575fa1b57"
  },
  {
    "url": "images/g1.jpg",
    "revision": "48a910db54589f05969f8ed12f445f78"
  },
  {
    "url": "images/g2.jpg",
    "revision": "d382355aed5a54faba166f5b974d415b"
  },
  {
    "url": "images/g3.jpg",
    "revision": "c1d01a3aa061bacc0bd291f14ee56336"
  },
  {
    "url": "images/g4.jpg",
    "revision": "9b316b42ebb590e3982c6dd7a670ea10"
  },
  {
    "url": "images/g5.jpg",
    "revision": "a676ffe6c0a30236fd462b41831a6a66"
  },
  {
    "url": "images/g6.jpg",
    "revision": "8c8c1900b501691cd042f6aa1071673b"
  },
  {
    "url": "images/icon-192.png",
    "revision": "7469079da18555c463fec6795e234535"
  },
  {
    "url": "images/icon-512.png",
    "revision": "8dfae9c551f1b8ddd88ad5e644b64c65"
  },
  {
    "url": "images/left_black.png",
    "revision": "4b4dbcd519ecd978067bfe92a6919150"
  },
  {
    "url": "images/left.png",
    "revision": "d20ec2d8671c44cc3c6cd48a7f745e3c"
  },
  {
    "url": "images/move-top.png",
    "revision": "e5cb8458f240f79c5c7c0865d8965ed0"
  },
  {
    "url": "images/overlay.png",
    "revision": "1b01d0689ea696bee4283fa6d2c98850"
  },
  {
    "url": "images/paypal.png",
    "revision": "c5e0d7cb0678819ff3207d598b045180"
  },
  {
    "url": "images/right_black.png",
    "revision": "06d1bbc428798edfdf7b07e7e3467ab6"
  },
  {
    "url": "images/right.png",
    "revision": "3e61ae56e285268aba77a50d6c7ec0c7"
  },
  {
    "url": "images/s1.jpg",
    "revision": "49acec9047249cecf49c0a5bc4b19bad"
  },
  {
    "url": "images/s2.jpg",
    "revision": "0465adff3256bef37df627ad7fa7a577"
  },
  {
    "url": "images/s3.jpg",
    "revision": "44a0e2d22fcef475c2b497ad4ec95b73"
  },
  {
    "url": "images/s4.jpg",
    "revision": "8a51b8d9380a5fa8428771f71e452aae"
  },
  {
    "url": "images/s5.jpg",
    "revision": "ac95b1f6b2fa01343c5399975f2dd72f"
  },
  {
    "url": "images/s6.jpg",
    "revision": "3e8e06fed1b4e3cf3015300495aada29"
  },
  {
    "url": "images/s7.jpg",
    "revision": "a761cc1f4d3d0d5df094726adc0891af"
  },
  {
    "url": "images/s8.jpg",
    "revision": "095f9435cc59713173885cb87b606d10"
  },
  {
    "url": "images/s9.jpg",
    "revision": "188323699d53a615e47a1a9c8272ab5d"
  },
  {
    "url": "images/search.png",
    "revision": "d63d028aac1c9f4fc2d0dce873d138c8"
  },
  {
    "url": "images/t1.jpg",
    "revision": "c7d816cc93059ad5a0ea9d60a54637e9"
  },
  {
    "url": "images/t2.jpg",
    "revision": "ddebfe65b7ecc048a1389772665f2923"
  },
  {
    "url": "images/t3.jpg",
    "revision": "5e1c9f70fd88648ae589f50a04b930ea"
  },
  {
    "url": "images/t4.jpg",
    "revision": "5102fd71f11d97bf65fb110470c10133"
  },
  {
    "url": "images/Thumbs.db",
    "revision": "efa071eb670787d7ee0139f33aac3de3"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "8b27bc96115c2d24350f0d09e6a9433f"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "0a799148a50bb02c6f380eabd8d97559"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "dcb26c7239d850266941e80370e207c1"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf?v=4.7.0",
    "revision": "dcb26c7239d850266941e80370e207c1"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "3293616ec0c605c7c2db25829a0a509e"
  },
  {
    "url": "fonts/fontawesome-webfont.woff?v=4.7.0",
    "revision": "3293616ec0c605c7c2db25829a0a509e"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "db812d8a70a4e88e888744c1c9a27e89"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2?v=4.7.0",
    "revision": "db812d8a70a4e88e888744c1c9a27e89"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "3f3a623e88cb5c62eaa2367195e98b67"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.eot",
    "revision": "7ad17c6085dee9a33787bac28fb23d46"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.svg",
    "revision": "32941d6330044744c02493835b799e90"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.ttf",
    "revision": "e49d52e74b7689a0727def99da31f3eb"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.woff",
    "revision": "68ed1dac06bf0409c18ae7bc62889170"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "css/about.css",
    "revision": "9f2aa4d750a1199587a9689be90840fe"
  },
  {
    "url": "css/bootstrap.css",
    "revision": "2183d05f5a0a9a3b2e8cb0509ca363e3"
  },
  {
    "url": "css/checkout.css",
    "revision": "f86e1293b889c3900e9d1a68991a941e"
  },
  {
    "url": "css/contact.css",
    "revision": "029bd39a17fa3c9d7a057f3ae928ea72"
  },
  {
    "url": "css/creditly.css",
    "revision": "46a991d7ccfc87319ea905f14d440f6f"
  },
  {
    "url": "css/easy-responsive-tabs.css",
    "revision": "39a14bd44513465aedf9c0e5efdabdba"
  },
  {
    "url": "css/flexslider.css",
    "revision": "c8a393313284604e1a1b819df453e6a5"
  },
  {
    "url": "css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "css/jquery-ui1.css",
    "revision": "5b73c2ad7a01a7fd17d3f31995d70217"
  },
  {
    "url": "css/shop.css",
    "revision": "5bd535f644ccbd7d4faa74c4d2856345"
  },
  {
    "url": "css/style.css",
    "revision": "a20e47f5123d9c1d4d6ebecaccd30fa1"
  },
  {
    "url": "css/style7.css",
    "revision": "467f801b57ae55fd201b792a8b8759d0"
  },
  {
    "url": "js/bootstrap-3.1.1.min.js",
    "revision": "ba847811448ef90d98d272aeccef2a95"
  },
  {
    "url": "js/classie.js",
    "revision": "a9df1cfb76ce492afd9d13f3320272fd"
  },
  {
    "url": "js/creditly.js",
    "revision": "e46aeaa8f644707efff00f55b9311584"
  },
  {
    "url": "js/demo1.js",
    "revision": "0bb54567450cf26e9fe022d4b3047e54"
  },
  {
    "url": "js/easing.js",
    "revision": "6ee8b009ab1e71a1380c69e81339f4c5"
  },
  {
    "url": "js/easy-responsive-tabs.js",
    "revision": "0d80bc01d106938466fb7b03f61f498d"
  },
  {
    "url": "js/imagezoom.js",
    "revision": "c15e52c613c4f1f7fc2cf0f22638bd41"
  },
  {
    "url": "js/jquery-2.1.4.min.js",
    "revision": "f9c7afd05729f10f55b689f36bb20172"
  },
  {
    "url": "js/jquery-ui.js",
    "revision": "d843cc8006d8999a4bcbf62fee6233d3"
  },
  {
    "url": "js/jquery.flexslider.js",
    "revision": "ca62c1c70540c707878ca4ef68ce4f22"
  },
  {
    "url": "js/minicart.js",
    "revision": "9cd077e109d1dbd9aa86896e46bffc90"
  },
  {
    "url": "js/modernizr-2.6.2.min.js",
    "revision": "42306a279a9e831515347ae319181cd1"
  },
  {
    "url": "js/move-top.js",
    "revision": "0ca97ca5c84470b7cafef45dec8b3fdf"
  },
  {
    "url": "js/responsiveslides.min.js",
    "revision": "04f1b2ac39e762cd516cb359755c8cc6"
  },
  {
    "url": "js/search.js",
    "revision": "a5b5142cf193a5afdd8fa5f0097bd65c"
  },
  {
    "url": "404.html",
    "revision": "6bcc0e60c951e4e300a6eb5c545874ed"
  },
  {
    "url": "about.html",
    "revision": "599e91f3c6de62effbe0a3923d5ee703"
  },
  {
    "url": "checkout.html",
    "revision": "e3262521f4670ff3b6eb8ca0686009c5"
  },
  {
    "url": "contact.html",
    "revision": "aedd996fce1094e91b433b60d7003c3b"
  },
  {
    "url": "index.html",
    "revision": "6732df13db466c8fea79049a558fff10"
  },
  {
    "url": "payment.html",
    "revision": "739f2498ecc2e95c3e19449696b8552f"
  },
  {
    "url": "shop.html",
    "revision": "38d0620e3dcee2cd2cf23b386f7a7133"
  },
  {
    "url": "single.html",
    "revision": "bc950b98b6346ad2e631093bc1ab857b"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('https://fonts.gstatic.com/*', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('https://fonts.googleapis.com/*', workboxSW.strategies.cacheFirst({}), 'GET');
