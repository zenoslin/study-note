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
    "revision": "581410a7f239e469063845cbcb5b7113"
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
    "url": "assets/js/10.89949eb9.js",
    "revision": "5b4d1329e275569fa7ee4ae5b90c4105"
  },
  {
    "url": "assets/js/11.222213e7.js",
    "revision": "21da8403a1ccf5d6b6843247386a1e46"
  },
  {
    "url": "assets/js/12.9fead229.js",
    "revision": "15d927987d9af305fe2a11d9487f2e1a"
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
    "url": "assets/js/app.fb1192e2.js",
    "revision": "24abd3f8c02ade79fdb8d32677291d57"
  },
  {
    "url": "atlas/index.html",
    "revision": "5bebaa14c90ab0db78ebdc2f7a50ba3e"
  },
  {
    "url": "book.png",
    "revision": "5dec9b5766bdfab500964b7e20dc7092"
  },
  {
    "url": "emoji/index.html",
    "revision": "040885206bdd1513f6dbd8924f3953bf"
  },
  {
    "url": "emojiLocation/index.html",
    "revision": "02c008bfa5b930de5053686eb9dff210"
  },
  {
    "url": "https/index.html",
    "revision": "e98e19e75cb2cf90bbd12616e6364547"
  },
  {
    "url": "imagemin/index.html",
    "revision": "54452b2a7e7e08a68d87f7cea9820f9a"
  },
  {
    "url": "index.html",
    "revision": "6f8ad61afd68268e948325465f99581b"
  },
  {
    "url": "layabox/index.html",
    "revision": "415eb4b536bc57d60fc81e7bb67414d4"
  },
  {
    "url": "miniApp/index.html",
    "revision": "2c69e3ebc8df42b6d05f86317cc3c669"
  },
  {
    "url": "neteaseMusic/index.html",
    "revision": "5e980d1121394f58242c575605d32f21"
  },
  {
    "url": "retina/index.html",
    "revision": "84052d4002681021badda368f016736d"
  },
  {
    "url": "rollup/index.html",
    "revision": "a20c332da41bef08782630c81b014895"
  },
  {
    "url": "webpackCli/index.html",
    "revision": "3d6b2eabafe1605b2420c3b047e1ecd9"
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
