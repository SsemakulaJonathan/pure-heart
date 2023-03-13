'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.bin": "e6f944865f261d6d0519839149277e1d",
"assets/AssetManifest.json": "b807beaea865ff93fa3df0669a25aff6",
"assets/assets/images/image1.jpg": "ace4d45f05569beec95d317b7f59db6d",
"assets/assets/images/image10.jpg": "66caf62fdbe1e80b4cd6c0247d7c52c2",
"assets/assets/images/image2.jpg": "e1b0573ab07d0af76c016122a11088d7",
"assets/assets/images/image3.jpg": "ff2aacd12f11872b70fc2738793a56c6",
"assets/assets/images/image4.jpg": "ff42d60106f4d1508812b83f82c35503",
"assets/assets/images/image5.jpg": "a97a2fb88332440bc40b56d444c36b27",
"assets/assets/images/image6.jpg": "7db6943455304eee308d7882ebb33a5f",
"assets/assets/images/image7.jpg": "7905e1932810f7e5bdee996c31dac620",
"assets/assets/images/image8.jpg": "878447097cf03eecb206b044d1e86b7b",
"assets/assets/images/image9.jpg": "8e2fb3403a1e70d1c5a05fc7f7a307c8",
"assets/assets/images/IMG-20230208-WA0007.jpg": "b6e78b9d5a56ce965e5a36d3b07ef86e",
"assets/assets/images/IMG-20230208-WA0008.jpg": "26350441d12ef6240b89b6c8bdf59212",
"assets/assets/images/IMG-20230208-WA0009.jpg": "af0e36b8a50eca1f38cfec1a4b431a20",
"assets/assets/images/IMG-20230208-WA0010.jpg": "d469b40b004cc8a8772e07900c21e2d6",
"assets/assets/images/IMG-20230208-WA0011.jpg": "194967c04bd01ebf2b9beb09f129b86e",
"assets/assets/images/IMG-20230208-WA0012.jpg": "be7d4de021a07e6c213ff4b897ba7994",
"assets/assets/images/IMG-20230208-WA0013.jpg": "74060546a03b18edae5a9d96f2783799",
"assets/assets/images/IMG-20230208-WA0014.jpg": "468b7f913ce2ab749d40ae8839f56dcd",
"assets/assets/images/IMG-20230208-WA0015.jpg": "1452bcdbac18a9e1f4c2b70d79e668c5",
"assets/assets/images/IMG-20230208-WA0016.jpg": "b81e3101585dd604b017a365d00e45e3",
"assets/assets/images/IMG-20230208-WA0017.jpg": "3fc757fdf9f777272a3de8e64388536c",
"assets/assets/images/IMG-20230208-WA0020.jpg": "c2b141ef2df33c46d443ba666f98fdf0",
"assets/assets/images/IMG-20230208-WA0021.jpg": "429b3a639cf08e4c7ead897edaebda5d",
"assets/assets/images/IMG-20230208-WA0022.jpg": "57227481ab15565683a03c6506072b02",
"assets/assets/images/IMG-20230208-WA0024.jpg": "cb948c193fe0f989f9aef956425b9d93",
"assets/assets/images/IMG-20230208-WA0025.jpg": "b705448afa53239179b17b9a4ad46768",
"assets/assets/images/IMG-20230208-WA0026.jpg": "90066253b79fe68666c1d0ab3dd6e831",
"assets/assets/images/IMG-20230208-WA0027.jpg": "3d1bad69a3b5e89018521db213ffc002",
"assets/assets/images/IMG-20230208-WA0028.jpg": "32b0d1be79c6c02385c335d75bcf28d8",
"assets/assets/images/IMG-20230208-WA0029.jpg": "9e0c80464f3ef32ce29e754014b692fc",
"assets/assets/images/IMG-20230208-WA0030.jpg": "4e55164e49c9a31c651e0c6990025344",
"assets/assets/images/IMG-20230208-WA0031.jpg": "de5afd9d7dc4ad4846ee9b38f693257f",
"assets/assets/images/IMG-20230208-WA0033.jpg": "9cad738bd3ec2f79b66d91861904d0d9",
"assets/assets/images/IMG_20230302_125314.jpg": "ace4d45f05569beec95d317b7f59db6d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "20cddf06398be1f87aec744f14dbc400",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "07dbbeb99f672af74e7762d7b4b5d776",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0fd896f9adef32c4371176cb27b858c8",
"/": "0fd896f9adef32c4371176cb27b858c8",
"main.dart.js": "c056a19cd77a2a5f041d55a3b690b8ca",
"manifest.json": "8dca5612295c5bbb71cd6ce7b3ac95d5",
"version.json": "04adb4d27db14561107133664eb798eb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
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
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
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
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
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
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
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
