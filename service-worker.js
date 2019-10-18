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
    "revision": "64ab740a6294015759348fb10334c231"
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
    "url": "assets/js/10.d7510b63.js",
    "revision": "4ab9ee90f8fc01d63a0af72720e2144e"
  },
  {
    "url": "assets/js/11.222213e7.js",
    "revision": "21da8403a1ccf5d6b6843247386a1e46"
  },
  {
    "url": "assets/js/12.124032af.js",
    "revision": "582aadb41ab072d0cb025119303edd02"
  },
  {
    "url": "assets/js/13.efb034fe.js",
    "revision": "b73abe858c45c1e72446668672796343"
  },
  {
    "url": "assets/js/14.6af09bba.js",
    "revision": "5a38870b3fd0e4c08121a44798bd58c7"
  },
  {
    "url": "assets/js/15.befe5f05.js",
    "revision": "2d4c34f9e3b1c6847b20072df7550741"
  },
  {
    "url": "assets/js/16.98d41bcc.js",
    "revision": "c7be126311ea7defe7a36a3efae6a854"
  },
  {
    "url": "assets/js/17.48bb69a1.js",
    "revision": "78dff907be89921dafb130a6e58b7b8f"
  },
  {
    "url": "assets/js/2.58259a26.js",
    "revision": "eb48c6720d78930cda7e1ac2f972a0a1"
  },
  {
    "url": "assets/js/3.26b1ae2b.js",
    "revision": "06dde79cc81902864426465d66f40118"
  },
  {
    "url": "assets/js/4.b5db6b83.js",
    "revision": "0edaf4554939f76b4ba4fe2db536e933"
  },
  {
    "url": "assets/js/5.27213889.js",
    "revision": "0cc0475ba46174ee062901a890193135"
  },
  {
    "url": "assets/js/6.0828baff.js",
    "revision": "cf8a01bbe59c8a4848de63463f01d120"
  },
  {
    "url": "assets/js/7.ea11c8c4.js",
    "revision": "fbef2f309270909ab203e132d0acac27"
  },
  {
    "url": "assets/js/8.20607e08.js",
    "revision": "2a5465868f61d05f197bd68c0aeb9c04"
  },
  {
    "url": "assets/js/9.7268a5a6.js",
    "revision": "c67b239622713a623168ac27ef8572ea"
  },
  {
    "url": "assets/js/app.4a96da1f.js",
    "revision": "fc2b96b398eadc059f0afc147f767583"
  },
  {
    "url": "atlas/index.html",
    "revision": "c80b6d4b211ba26157573be5d21ab5f5"
  },
  {
    "url": "emoji/index.html",
    "revision": "91ba3878ec1962c0897df2be01d4d86f"
  },
  {
    "url": "emojiLocation/index.html",
    "revision": "b82d1f56dc6627a65bea82690effeca8"
  },
  {
    "url": "https/index.html",
    "revision": "0a682ed3183961bf0b17a550728593fa"
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
    "revision": "ff7b5791e7c6059154bf13ddad43f981"
  },
  {
    "url": "index.html",
    "revision": "c3a26711aa14dd7c9cbcd689a24f79e5"
  },
  {
    "url": "layabox/index.html",
    "revision": "6e7a8557e740c26956f740da7bede351"
  },
  {
    "url": "miniApp/index.html",
    "revision": "1de729f2dc209c4171a326f648fa7363"
  },
  {
    "url": "neteaseMusic/index.html",
    "revision": "7ec5b5b87f518a3c4263d71f00a79a8c"
  },
  {
    "url": "retina/index.html",
    "revision": "f3e3810c57d3311363f8caf086e3a5e8"
  },
  {
    "url": "rollup/index.html",
    "revision": "07b420d963d73efaf9a2b0b81b76c4bc"
  },
  {
    "url": "webpackCli/index.html",
    "revision": "09cc65135684a81fc7812a98b2123427"
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
