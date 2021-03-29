"use strict";
const MANIFEST = "flutter-app-manifest";
const TEMP = "flutter-temp-cache";
const CACHE_NAME = "flutter-app-cache";
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fe13119fb084fe8bbf5fe3ab7cc89b3b",
  ".git/config": "048436dce40f34b37855ffa5bf3436ab",
  ".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
  ".git/FETCH_HEAD": "45c074f65851cb76dca7f3e0f8332aa9",
  ".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
  ".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
  ".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
  ".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
  ".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
  ".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
  ".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
  ".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
  ".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
  ".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
  ".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
  ".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
  ".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
  ".git/index": "1512c3042d80bf8a52eaa7098a1a43f2",
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
  ".git/logs/HEAD": "fb6a5fa1930f46e9b392ea32c49a8db3",
  ".git/logs/refs/heads/master": "fb6a5fa1930f46e9b392ea32c49a8db3",
  ".git/logs/refs/remotes/origin/master": "535c467b09b616ce8d96d2fd76ef89ab",
  ".git/objects/00/894cc822b233244563ea6d42adc192c59f2124":
    "9eaf591746bbca485553de5d6fdb1bb9",
  ".git/objects/01/7eba6335f3c9e6723bf81e0d61b9943899b4ab":
    "c3955155e687826ad4963c7a07466e8a",
  ".git/objects/01/928218f815b0b349f697cd84b907f26b2a190b":
    "dbbaecd6d967e5b46e1a4e06e37caced",
  ".git/objects/11/5d018adb4fd6fb0d9a60a16606631b25e04fcc":
    "efde1bb64c6e4fa4a572036609cd839a",
  ".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183":
    "a448adc1da0456db701dc50d773d932a",
  ".git/objects/12/228ba4bc4ad61a5124d35582fb09437438ae6e":
    "b8a4d9bd9e03818c5ce9ca2d34d53268",
  ".git/objects/13/583a400f8f23a6b6cddbc82b5c3dbe14010e4f":
    "0411ab492c8c7dfca98b00c83587f74d",
  ".git/objects/13/c26b24cbb4a2898e7472d541dd84d0283884d5":
    "d387a5f19d867e3cb52cf1576e303c04",
  ".git/objects/14/2d58e019f9287defda7c95d898707b308c8bde":
    "b86f912f159cf136833cd6c962f6d973",
  ".git/objects/1c/950e7bb96eb9e3625c33276f67d2f128830503":
    "00dc5e2f7f836afa60ec690c48cc2761",
  ".git/objects/1c/a075f6390561402fe1c2d8d6428046d0ec0c42":
    "22114cb0eae79ad77c961486ca527b31",
  ".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893":
    "c993b22f115d7f3ae6d5b7b212806539",
  ".git/objects/25/d3d99e50d2f65fb47dc38d4eb32fe3fe5879a6":
    "7a3cf55f271cac6bf5b29b6d1fb0b41a",
  ".git/objects/27/8a918e9077689a5fc5b13efef43395570c37c3":
    "361904910644ae313e8075ccd44d32b3",
  ".git/objects/28/6d5ab51d4114a70c4741467c85f8ddc2e61c73":
    "4bab39c09e1938b33db79079e3810052",
  ".git/objects/29/05142c3b8f55cb86250a1568d16699ee6e8934":
    "b430d015ad0916ee2826d46bbefe3d73",
  ".git/objects/2a/0d90855fd8aa70e769736c75aef0fefeb5b83e":
    "7e3d4b311b20207be54890a90ab92621",
  ".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41":
    "d92fd35a211d5e9c566342a07818e99e",
  ".git/objects/2f/1cb35785051fc00b8d9459a52d7b943b6e51ec":
    "977f6851602516d9bba305b17a65bd61",
  ".git/objects/34/593c03714f6f284d4e72adbb5c0713066f68da":
    "584fe8123e483d59d113d833db185fb7",
  ".git/objects/35/8e7ff75ea981587041f76cb35c078e7981f6aa":
    "075ea7aaeedd572747982ca71ee0b1b8",
  ".git/objects/35/c61c734f205acfc0e913417c21305a85d2690a":
    "7e1627e3618f85050ccec96a1d1247ac",
  ".git/objects/3b/46999b3d7ecfccd06932f0802943d1459dc7fb":
    "3dacb8b8b3b9317835d26a0f1a9b1337",
  ".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b":
    "c3066eae2c84f5465b93f0624f5ecfa6",
  ".git/objects/3f/b2f551fd61c78bc6690fa260f92d7742be2e66":
    "e960d991eff9a9e38bded5382cc25bc0",
  ".git/objects/44/e7890951df7743c4294b874b64373c46a64b02":
    "f000fd5bbd9d3147f116307bb9538d26",
  ".git/objects/44/f7afc61b5bf58c32a539c73962e8de25b049d0":
    "2c767b3ca19eab7022b0cf633fb5ac3b",
  ".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155":
    "2e52a767dc04391de7b4d0beb32e7fc4",
  ".git/objects/49/6871f4776bf3bf45288942f5094e8d583bd55e":
    "4b18fd1e638db069054698091a47e5b4",
  ".git/objects/4c/e4a746a3d0abfb42baff7e1bd70f708a1751a4":
    "3438792b44737d30eed4987370c65766",
  ".git/objects/50/d9ccc9561bfd68082206964c153f0fb309279d":
    "8ed36ba8c1cdd4091a6d0327aee969a5",
  ".git/objects/53/511e6bc492fe101a9901bf2787ea16ce1697c1":
    "75bc6dad570dc869932c6ff840fa8b89",
  ".git/objects/5c/6107378b249ccc9b4cd3dc5b550fc7567bbd9f":
    "c72e0edc78aeb48757ccf5cc942abc22",
  ".git/objects/5d/eb0ea035caef864bd90ff397474c6746497838":
    "3f3fde8d4a711615a5889d6773b78da8",
  ".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5":
    "88422bbb2bc42436f8f242eb59c23af7",
  ".git/objects/66/35403438b526c619602f48285123766df4abeb":
    "a04efaf93d766f4a140b78efdfb2004d",
  ".git/objects/75/c52cc81e126db1a82dc32cdfa2f7b96fb53053":
    "1ffccb58b96cde902d9186f347b50044",
  ".git/objects/76/fda5e2103bfd1b488dce43f7530953eb2d3820":
    "b3446fdf42bd07b2c89bf66ddd87b70c",
  ".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f":
    "f3e31aec622d6cf63f619aa3a6023103",
  ".git/objects/7b/8f418e9e286140bcf8a64c63db38ccfb6d6b82":
    "b0916bab910c80af7bef03b8812955c7",
  ".git/objects/82/fadac6881ba5ca7e50d928c4acd085f4e9548d":
    "11ba1ef057fe6cac04f433811461a618",
  ".git/objects/83/e5a808e340b3c78c6b3035dedee88805dbbaaf":
    "c9f06633fde58e5594ffd26b8a0a7d80",
  ".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6":
    "e42aaae6a4cbfbc9f6326f1fa9e3380c",
  ".git/objects/89/2940da0fec625eb06128e3242671f0324c658e":
    "4de510ccf8aa9f0e073b979b88f24b9e",
  ".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1":
    "1d8820d345e38b30de033aa4b5a23e7b",
  ".git/objects/8b/67151cef8c2fcf0d2eab10d500ff05c9e6533e":
    "0b54ae8463526f414ce742bb345a1590",
  ".git/objects/8f/c7a54dbe8685a1863d795ceed9ba73538d08f1":
    "9c7bb9f6c89c2977c4d64f1b5ed6ad19",
  ".git/objects/91/80603bafc968248ee657a547a4560445e3cdf2":
    "cb064aa3ac9fa8cfaea50a5740c1604b",
  ".git/objects/94/1de875dba8942e83e182c0a5dd9ec0a2d80f75":
    "3f709a1f997669c4d7f7f748c54836f0",
  ".git/objects/9d/ae95a96171ec45f7cd6b907740bc4b64942fe3":
    "09a441b34bd02d4c585c1c8a9394b0f0",
  ".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f":
    "bfe4910ea01eb3d69e9520c3b42a0adf",
  ".git/objects/a4/5411c0b0ad09d89a06bdfbef935fdfc17813f2":
    "fb0efd55647d6d0775fc882b233b9129",
  ".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017":
    "6525101be8d70b808a809af9c83fa4ad",
  ".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b":
    "6fea100e06e06948e49143e92be1a8dd",
  ".git/objects/ac/f17c42b0cda2404e4e4445855a2b45b36e0ac1":
    "18f6ce635c17f07f8cd2a4ae122c9be9",
  ".git/objects/ae/7e054429e576b8b4d35d50f96d17182cddfe18":
    "021f05be42953efedfa42e4646f9abb9",
  ".git/objects/af/38262b2a59552a250a9acc52edeaa29f7a2e4e":
    "ed3001266df5b157fc94a17d2cb5c6e2",
  ".git/objects/b3/a91187be44e6e750d85166a95e204084a5c8c6":
    "7bee175df30db50b7809facc5e6a5c94",
  ".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa":
    "36b4020dca303986cad10924774fb5dc",
  ".git/objects/b9/d975320c54a885af86573c667f982904dfd92e":
    "a3cfe27519418626f184122580978375",
  ".git/objects/be/90bf616e63528750d43eb49e06579622fb5832":
    "fadbc11188f0e78aed7798e19d4275df",
  ".git/objects/c0/d6170cd24447df6e985d3a6cfc912b8816abb5":
    "def72ba6efe2ce8a8d5172a88c268fbb",
  ".git/objects/c3/f21aa6401681d41aa73e8f226de8b0e4d50c94":
    "5efd1234eaff961d5692ea93dc099acc",
  ".git/objects/c7/9e73928f8db762af7394386a22c78b51f6bff2":
    "aec0d67e50876bb189c73e482cf1aa16",
  ".git/objects/c9/25be3260fd8e87b4d6fc81ce3674dcc3ed5314":
    "5abfa8593c39b9d49e134b4430255b56",
  ".git/objects/ca/10f9a795ff26f3cb2870191466f7675e2e1411":
    "e6dd83507962764155412b6ffb3dd805",
  ".git/objects/cf/7a1b3fb2c1382531757978500be3db466ec499":
    "aa4964e2515ce12d552aa546a42ace14",
  ".git/objects/d1/e76b8b2584a2b5fa283aaaeacdef752c4b8dda":
    "53c96ab9689031e5bad2e1024722d8d2",
  ".git/objects/d6/41359aa6a913d791281b0fb0ab217a7bda8c13":
    "c9b1a12ef398982e13cfa4b05ccbfab0",
  ".git/objects/d6/fcaf780ade810846d8feda9748ced0bbf731df":
    "4afcb4cf51783ed390fa687badea4150",
  ".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7":
    "1780d82c383ef506d78eeb6a874d2dfa",
  ".git/objects/de/8b4e5fd3f52afc6d79aaeb43988bcb2e84dd8b":
    "f720c934e1deca979d27f8bf3cc024fe",
  ".git/objects/df/d1d31e123b9cbaef7cbdadcf0ab4fe8c234061":
    "f91d1ec101a94cb43756095cc44bd1c7",
  ".git/objects/e3/93a0a1dc70072c9796598fbc75722dd5450891":
    "dd7cdc4ba15f345afbf28cbbf900c17f",
  ".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d":
    "c6fa51103d8db5478e1a43a661f6c68d",
  ".git/objects/e8/21b09065e88564c1958b5bb3b3631734ac49d1":
    "f185c7818d9e99359ebafa1af6605b90",
  ".git/objects/e9/7d53f22e63c9e246f399082dbb792ef80d61fb":
    "985b2604d833df5814dc9d8132f0d0a1",
  ".git/objects/f0/5fb090e5cb41fb335aee161f4e5368705aa3dc":
    "80fcc916f0658e9505245b2ecfb0180a",
  ".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e":
    "59e425d1456034072d902c75d18ec75f",
  ".git/objects/f4/2265384aabd71586f0f497d1ad4b8cb06d7571":
    "2054da96c9ea57865416dca55ca53ba1",
  ".git/objects/f4/35f05f08f4a2992469081b7f5113102867fd9e":
    "3751cb1df94c10f57566138cef56dd64",
  ".git/objects/f4/7ff2099704cb782c812415ef9ab1d2760622c0":
    "dc0d30c7f78b8eb4694d86ac7a586bf0",
  ".git/objects/fa/6f779efdb2c4c51f8e7c303f15eda08517549b":
    "fee0c50c76aee06e85a0da425af976f9",
  ".git/objects/fb/693dae04eb5107cf00e5d4c9999974198dca74":
    "32030857ddfff1321458a90ffe3b213d",
  ".git/objects/fc/fb7647cb38e269cfac6e95120a1be0e1d05d67":
    "c8a2700a58a07732b9aa08d5a70a6291",
  ".git/objects/fd/2503847bfcd4698fa70bd7d279a009142dfa6f":
    "2253b8a3ced62c9e7940f05e96dafa01",
  ".git/objects/fe/4cdee3f08393b283a1eb1dc4429ce75fe26606":
    "d0352cfd2971e78ae46bef23623b722b",
  ".git/objects/ff/5a7f974c3cf807daa29bc7fc271fb45c895fe2":
    "37e107543f071c4dd028a40da73ad80b",
  ".git/objects/ff/c9c3bf31c8413a9fdec0852392ce9f207efbba":
    "fd8c964ca3474b146842da28866cd8f3",
  ".git/objects/ff/fbe19698eaecade7383be00abd7c8094681f00":
    "00e89771f93e427f99b556629bd91ee3",
  ".git/refs/heads/master": "b90e37527538984e7905acf11f38e851",
  ".git/refs/remotes/origin/master": "b90e37527538984e7905acf11f38e851",
  "assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
  "assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
  "assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
  "assets/NOTICES": "266cab82e140c368d5dd8b82c2ac4bd4",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf":
    "6d342eb68f170c97609e9da345464e5e",
  "assets/packages/fluttertoast/assets/toastify.css":
    "a85675050054f179444bc5ad70ffc635",
  "assets/packages/fluttertoast/assets/toastify.js":
    "e7006a0a033d834ef9414d48db3be6fc",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "index.html": "a9a5a953c9259eddaf27b52653c9e4ce",
  "/": "a9a5a953c9259eddaf27b52653c9e4ce",
  "main.dart.js": "1f05c72ec3d952d2a82dd1fa4819632a",
  "manifest.json": "4eff1c15fc15ce7fd8edb157efb7c589",
  "version.json": "7fcf9ab5428f1e1c6f63147d78f43253",
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
  "main.dart.js",
  "index.html",
  "assets/NOTICES",
  "assets/AssetManifest.json",
  "assets/FontManifest.json",
];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { cache: "reload" }))
      );
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(
    (async function () {
      try {
        var contentCache = await caches.open(CACHE_NAME);
        var tempCache = await caches.open(TEMP);
        var manifestCache = await caches.open(MANIFEST);
        var manifest = await manifestCache.match("manifest");
        // When there is no prior manifest, clear the entire cache.
        if (!manifest) {
          await caches.delete(CACHE_NAME);
          contentCache = await caches.open(CACHE_NAME);
          for (var request of await tempCache.keys()) {
            var response = await tempCache.match(request);
            await contentCache.put(request, response);
          }
          await caches.delete(TEMP);
          // Save the manifest to make future upgrades efficient.
          await manifestCache.put(
            "manifest",
            new Response(JSON.stringify(RESOURCES))
          );
          return;
        }
        var oldManifest = await manifest.json();
        var origin = self.location.origin;
        for (var request of await contentCache.keys()) {
          var key = request.url.substring(origin.length + 1);
          if (key == "") {
            key = "/";
          }
          // If a resource from the old manifest is not in the new cache, or if
          // the MD5 sum has changed, delete it. Otherwise the resource is left
          // in the cache and can be reused by the new service worker.
          if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
            await contentCache.delete(request);
          }
        }
        // Populate the cache with the app shell TEMP files, potentially overwriting
        // cache files preserved above.
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put(
          "manifest",
          new Response(JSON.stringify(RESOURCES))
        );
        return;
      } catch (err) {
        // On an unhandled exception the state of the cache cannot be guaranteed.
        console.error("Failed to upgrade service worker: " + err);
        await caches.delete(CACHE_NAME);
        await caches.delete(TEMP);
        await caches.delete(MANIFEST);
      }
    })()
  );
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf("?v=") != -1) {
    key = key.split("?v=")[0];
  }
  if (
    event.request.url == origin ||
    event.request.url.startsWith(origin + "/#") ||
    key == ""
  ) {
    key = "/";
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == "/") {
    return onlineFirst(event);
  }
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return (
          response ||
          fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});

self.addEventListener("message", (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === "skipWaiting") {
    self.skipWaiting();
    return;
  }
  if (event.data === "downloadOffline") {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request)
      .then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch((error) => {
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.match(event.request).then((response) => {
            if (response != null) {
              return response;
            }
            throw error;
          });
        });
      })
  );
}
