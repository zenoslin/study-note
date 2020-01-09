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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e19dda9e541affe6e20a21f4b4275b36"
  },
  {
    "url": "assets/css/0.styles.7a5cb970.css",
    "revision": "124f30d6d4b77ae265d855411dc049db"
  },
  {
    "url": "assets/img/qrcode.bedfe127.png",
    "revision": "bedfe1276b7362996e46dfd435c31f8d"
  },
  {
    "url": "assets/img/RDM_1.d740145d.png",
    "revision": "d740145dba5733eefa10d142b4e02f97"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/unblock_1.e6f957dd.png",
    "revision": "e6f957dde4cb67acd07ad7325fac4dde"
  },
  {
    "url": "assets/img/unblock_2.dace8ddf.png",
    "revision": "dace8ddfec39413e95cfc59f5611db0f"
  },
  {
    "url": "assets/img/unblock_3.e42ee279.png",
    "revision": "e42ee27964c0297273deabc5debafb19"
  },
  {
    "url": "assets/img/unblock_4.931e1dc5.png",
    "revision": "931e1dc5ed8b5ba496c86802ca4799c1"
  },
  {
    "url": "assets/img/unblock_5.13cd1a2d.png",
    "revision": "13cd1a2d0a2c582884fc27fbbf15c383"
  },
  {
    "url": "assets/js/10.a9a390c4.js",
    "revision": "33a7e99900ad2389b0b193598f68093c"
  },
  {
    "url": "assets/js/11.89f33b3c.js",
    "revision": "b0a2252719ae697f4bdaeb6e7156865a"
  },
  {
    "url": "assets/js/12.0f5a50c2.js",
    "revision": "3ad69f3f45547bdca658ffdb3134c257"
  },
  {
    "url": "assets/js/13.af6ed26d.js",
    "revision": "df6538092b9cd57d811f1606fee662c0"
  },
  {
    "url": "assets/js/14.6af09bba.js",
    "revision": "5a38870b3fd0e4c08121a44798bd58c7"
  },
  {
    "url": "assets/js/15.6afab8b0.js",
    "revision": "76b4cf2f6bcd16414495afa5a94e0d30"
  },
  {
    "url": "assets/js/16.966b72f4.js",
    "revision": "065e66c84c171953659dc1e167f1da89"
  },
  {
    "url": "assets/js/17.9fef224e.js",
    "revision": "c95b00c8d27c8be74306bb58627bf06a"
  },
  {
    "url": "assets/js/18.15b86135.js",
    "revision": "a8dde35b2c853c540fc9e5ca3f97df4f"
  },
  {
    "url": "assets/js/2.926c71d9.js",
    "revision": "eb48c6720d78930cda7e1ac2f972a0a1"
  },
  {
    "url": "assets/js/3.890c9a4a.js",
    "revision": "fa741ba412227bfc6e696fc753ea82e2"
  },
  {
    "url": "assets/js/4.4262c551.js",
    "revision": "b5968cec600d1af0822523cb46b40d4e"
  },
  {
    "url": "assets/js/5.fcac510e.js",
    "revision": "89ea97d8679bb7fea128b53824d73d1e"
  },
  {
    "url": "assets/js/6.da9589ce.js",
    "revision": "779773d1fa4e3b9c8a84857557a6316b"
  },
  {
    "url": "assets/js/7.ea11c8c4.js",
    "revision": "fbef2f309270909ab203e132d0acac27"
  },
  {
    "url": "assets/js/8.c721d6ff.js",
    "revision": "024f8f0cca6119eae505ba42aa7e32f4"
  },
  {
    "url": "assets/js/9.1304c632.js",
    "revision": "8d70ca53c738d33a0fd7577df35a5d78"
  },
  {
    "url": "assets/js/app.e095d8cd.js",
    "revision": "9d87ea8f19ccb719bbeb9965b62e6659"
  },
  {
    "url": "atlas/index.html",
    "revision": "684f5f9a024b9d3c2831a5cf264b8c89"
  },
  {
    "url": "emoji/index.html",
    "revision": "4c10283913ee39db731fcbc38760944d"
  },
  {
    "url": "emojiLocation/index.html",
    "revision": "2de0ef2d1745855af036cf29ba3afd78"
  },
  {
    "url": "https/index.html",
    "revision": "87f351cc806f1b53a27518803c6b2271"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "fa90590cfc1286862fd2657ed2962d97"
  },
  {
    "url": "icons/book-128x128.png",
    "revision": "7b3ff88236ec7adf3958ccc6e84ab0cc"
  },
  {
    "url": "icons/book-256x256.png",
    "revision": "f0f73c137d251f4982252d8485cecff2"
  },
  {
    "url": "icons/book-32x32.png",
    "revision": "504b211d56e4a841c326bdffa836f24c"
  },
  {
    "url": "icons/book-512x512.png",
    "revision": "d35cd8dbb7fd5c63790a915dd8af6da3"
  },
  {
    "url": "icons/book-64x64.png",
    "revision": "d85156db9fb54c1f435b432cac9e8c10"
  },
  {
    "url": "icons/book.png",
    "revision": "5dec9b5766bdfab500964b7e20dc7092"
  },
  {
    "url": "icons/book.svg",
    "revision": "cb08c94df14ce8a3939806abe4a80b83"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "f3c6d350b38bce60d71120a267d39dc7"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "cb08c94df14ce8a3939806abe4a80b83"
  },
  {
    "url": "imagemin/index.html",
    "revision": "83a5fcd70f393c4c51fe040543e8116a"
  },
  {
    "url": "index.html",
    "revision": "039d8049c1d9beaf6f2ec1d5111cc8ff"
  },
  {
    "url": "layabox/index.html",
    "revision": "a47b599a5bd4e658b9c01c12c5e89d78"
  },
  {
    "url": "miniApp/index.html",
    "revision": "7571e8725dc61c96f0e1ab4e30c178a8"
  },
  {
    "url": "neteaseMusic/index.html",
    "revision": "16581b7bf530ec0f8a8850ef7d2d7d64"
  },
  {
    "url": "proxy/index.html",
    "revision": "5b0486061a8aef57ef9ffb8acd2bc087"
  },
  {
    "url": "retina/index.html",
    "revision": "cdb0a558428c3ed2ae5ca8d76a65bde1"
  },
  {
    "url": "rollup/index.html",
    "revision": "bdeb05a5a99b189b6a48d3f971e942d7"
  },
  {
    "url": "webpackCli/index.html",
    "revision": "0f28d9c1410c5c3af0f456f7eb2b39e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
