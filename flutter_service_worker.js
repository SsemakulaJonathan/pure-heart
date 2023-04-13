'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "14b8144f5d5181cf311af679426c3957",
".git/config": "3ad628e8bba6ac14883110b6ee738bb5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "42d736586af1c50bf22d7c60d900e5d3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8d81d633a6454597b6171285e1ac9908",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20af7f523bad6fadff40a502e5164839",
".git/logs/refs/heads/master": "20af7f523bad6fadff40a502e5164839",
".git/logs/refs/remotes/origin/master": "6e194c94cdf5659e4836fdff74c3b94d",
".git/objects/02/e3af4445be94a0de3f099caec9527e16a32b52": "a19f4c66bfe7a2635ab6111eaae8cc01",
".git/objects/05/93ecc675144f527e504f08540e9bb84922eac0": "d66df8210c9f7105944f41b99b81716e",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/f23d3f46d689df53a30be0a31c5608560cfcd0": "a0cab0586c24efe790211b985f1aa5c7",
".git/objects/14/b3f9de5c433e5d56e9fb0772d790c7d70799c4": "726add2bf02e9f617ecbe8bf3bc7ce5a",
".git/objects/1c/cf9e5720028b4bfd84d17efc56fbaef0658bc1": "7c03e5b8ebbf37d34b53200a31f5107c",
".git/objects/1c/f1a082313fca9e4cbda0da4d90cbb3fccf46ad": "1646c3399d98436f59c063419e71846b",
".git/objects/1d/885dd5d410642c0bea60e1da5a59b8cacc8568": "558f06358059e8453f0cc949a694d634",
".git/objects/1e/80871378a0e267cab3cf3ecc9086bbeb7b109b": "c0e214960768a11fe62c332c2921dcc9",
".git/objects/1f/ec167c27f90675d3a2fa624a9921bcfd155e60": "c4be50109d97f4d72deb2c16ccdf92e8",
".git/objects/23/0e86910f9c22a864a175994d5336af72fa855f": "b3f49eae46b1b52f339bd9ed19952043",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/1ba4ec990bfa34a589c1911ee583582a3b20e4": "27d5200085633a0fc153e5a14f1f99f7",
".git/objects/31/656e479f5f1a245c3ee41996e0f387ad9c4886": "5ae41c9f230f60233b7f739fb4857bbf",
".git/objects/33/e8aef5a9f40c2b76cdcc21c238cdee479ca80c": "f582f970b9fba69743f95966687c012b",
".git/objects/37/18a2dcd7770d224ca25a7b0056a303b5a168b3": "6a1ef989962018cfb4b0149fd10befb9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/25ca52164e07cb0c366e574239ac2a3ab71ae1": "2e455493eb9b23c1049495c83887b5fc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/59c4fd47c6361e644122590e8476321b383a18": "03c5918999f6c682b39ac54e60175eca",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/74f7d199f19d43f04eea9c4e095926efa5f13e": "b4422243c1d2bc763dc90b032b3d398a",
".git/objects/54/4f4e011c9c6ebd1092b14ff31f7cd4da9e28f7": "92f03a4e037ee8fef7ca06c4480d6975",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/9426eb26a0c0434d806913547084a56ea10b14": "a37f075149eae7342c1fcfd9b74398d3",
".git/objects/59/507cadb90b2fd0e0ec15a03e0e1346f1b3ed76": "92fca10fb7e6c6b1b952ead21c46509e",
".git/objects/5a/c39c32764d711875d495d985d9ccc45f86102c": "d1c6d3aacff6867dd3c66f6896d2856f",
".git/objects/5e/7aadfa476a103d5eb9799827d3feb8867c14b0": "5d80750cc5344b274c3cd3da1e259064",
".git/objects/60/4aac75f4237465def67c6d03eddb1dbff8537d": "a7b13899993c562c56c03372e74a21af",
".git/objects/60/935c8ebfbc9ad80af0770efdec0e6c9be5f8b3": "e4a64def95d1bcb7c9f808d11d9af6c1",
".git/objects/62/b7e6d1efbeec913bfdf28266113d892106298d": "5d417b007e5bb0e153ef98b2c9fdf05e",
".git/objects/69/8f3adb05b5f9883c5ac36536765cd22fff46eb": "5c3e7594f5586a62e4d2be949c396b47",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/485b3d69702cb5c4d32f1607b7639142e2e16d": "617b055f2540341a4a80076fc686eba7",
".git/objects/70/acc2cbfe07f7c28450193d74dff4661a4eff50": "f780efdb48881c5a00ff51d0410cabbd",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/ecd482b3025a7bf0bee2ea15587c7d52c3c401": "a39d29fca081db1d96cf99294f9f83dd",
".git/objects/76/875de09bbb142aa031414587b954b8c4860b95": "136d3138e90f73f63e326fe12d55eb1d",
".git/objects/76/bd3397d8250cbaee99e310f5bb56e761fe0f7d": "1b022313fcc96880becce82458c5cae1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/23e16b0901bb53c6cbee0b7139776a9be11a17": "dbd781cc1cadbed349d9a1f3683995d0",
".git/objects/7b/d610d1f866e85c08375c66ab5ac7ec24a27748": "c36e4c9e0dbe87546b99a09358e5dddb",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7d/0f6cf5573dc379d4fe886ad138a96951e4fde7": "adcf3d4c76c9612a004936cdb65fb024",
".git/objects/84/6c2d7101792d91a6631c9b60f949eeb8b21fb0": "7816932c2778f24420be459f9015c4ad",
".git/objects/88/48fc43bc63859a56fbb65fd867e979eb3ff827": "c42c3adccb5fa2254899003c95e40bfe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/7e3c7b3b8b7827adb38ece6b641a3fdf1c5908": "9832396b620390a57ddcede1b13e2af6",
".git/objects/8e/2633d4aa74d4610ecfa9b8919afb21b4f35906": "103fef6bddbc726ab8d16ffb19d20f58",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/98/867327044e9bae89c2e970d95bad5b62bc3153": "3e7f6b109fa2035aba93d3ffc6622785",
".git/objects/9b/4830654c2b53642aadc3217b25426f70b4bbcb": "cfec5c2634f501a2961014572c5ab558",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e544a55fe8ee59a0b3496796a4c8e0ee6a87f7": "5e7eac7b8ca815983273f129a1bb4469",
".git/objects/a5/43aeece1549b70e40e8845e92a2e8c68a70b98": "11cba3873923e19c109f712285480957",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/53951257b46ed9fb73b4dc21d97d210bc6fa2d": "e439099f41c694ced53e67fafa1ad549",
".git/objects/ab/a9fef767e8b9e0c73bc1a8666d0c567c411b08": "c583de11c85d82f7169b89b13766c40f",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/e2dc785d410906c646861f1b889fc583ec9be5": "7ac0b7010fb5bdbd4c9615c3b24c18b8",
".git/objects/af/b930e91093398f96368b9a4ea53c15b43331e2": "f42bd45d54a394caee9fca0cc6afd444",
".git/objects/b5/c522c86bdeb4cd291a3d28a0345189eb4b6be2": "e39eba0883d1c96a0ad880a2f79f0728",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/130a5a1f2b79ccc48d2e0aabec8421c327306a": "c680d678b31e746f068b067d8ebcf637",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8703c34c4022b234815046e5bd1b2ec7df1046": "77797f9566e38767c9cb5c8428301ffc",
".git/objects/bb/dbe3b0c6d785b9cd1d3fe08480b3c422b160e9": "b3fd2cc9855b02b2e84c79c57396c7dc",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/71dff70fe7f179ae31414fdb95a0f180cddfe5": "4b1791f9a6e00fde358a63c22a6f25ff",
".git/objects/c1/f0db4b8fa2f6f3ea7cc8ae2a07a333d4ac55cd": "aaf91c35f10cce8061a0c8a58b458b66",
".git/objects/c5/7b41b4695b0c34671a5886afd55dbf448aaf92": "b7a1ad3f1f423a3e6275141041479025",
".git/objects/c7/43b5b6deb394ce10904813f6218df7003ab244": "4b95ae5f040b8a9767bfad9a4c789d5a",
".git/objects/c8/a5674a89be7063511be75bbac8ce0fe7969f37": "48414986c96f8944e12173b3c9ac5b80",
".git/objects/c9/ecfe2dd4571baee9d9cb0c35ae065e3463eefc": "ddfabd5b90831a70a3a5a37bee0eaa68",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/32554ae2354f8facc6b573a3dc87421f42f5fb": "3056d6717879a4f3a4f82122e1dead7a",
".git/objects/d0/1e52db6c42e6be4adbe730b617a78359dac650": "7c9cbee6ac09691fe09a1e1d94ca494f",
".git/objects/d1/634ef7a8868f3b66779187ab28ec0891546f86": "4e241464db66b927921c4b360118036a",
".git/objects/d4/0e1bbac7cab5d2c13d2c5e28bc7652f889fd05": "41d67d0028c79451310f504bd410e74b",
".git/objects/d6/12c149763dd13f5c59a6e356098292490e6e9e": "ebddba19bf1127531cdaa4020184b671",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/fd799666625790bba27f6e3ecb00bd81f1cbe1": "3a6481ea8717e9b5337f166abb01dbfa",
".git/objects/db/3d194cbebfb670956193659b3a9f4eaf2bf3df": "c5d263eb10b34d29a9d681d105f3c8a0",
".git/objects/db/8d230d1afb516faf55baf5a9791ac549662cdf": "9f963ac1bd9cd51ba0c7c25d4edf8f6a",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/37ed544ef9e76ecc0bb53322a997c88a542de0": "11f90d95a7ff4d4f059922d2bee668a7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c88e80df6aa33c2a70b9f1505319ca01706871": "2b575e46e57bef4abedc74306c3cfeaa",
".git/objects/f0/c85993ea6ea3b4a35971b4e0047e5ad249b691": "3eb6cffffb39f1b79bea082803565ccc",
".git/objects/f8/c941f8244201a4889af20dfd07451247c737ac": "15692c2e05c323ab290a36d42461604c",
".git/objects/fa/37e6628b2c60d1bbd1ab22a9924f3c2decd819": "7fe28b912b01c4d379b579393432631a",
".git/objects/fa/557e04ab7398ba03e444c3a5e5847fd7621fe1": "da60a8ec2ef37ea355ed9557a616478f",
".git/objects/fb/9255e409e19d8881909efdf09270b76ee3d4b6": "afcabd34bb2b7a56a3b7e3e64f6db8d8",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/766790baba75ae29ca0d1b049eb5e28726d691": "d41cf5d3b1c4569b4fb9c8a886792079",
".git/ORIG_HEAD": "415f22e8e5b727b42d54e1f89ab758fe",
".git/refs/heads/master": "f6a49d8966f3a20242f50c5e5e6f1556",
".git/refs/remotes/origin/master": "f6a49d8966f3a20242f50c5e5e6f1556",
"assets/AssetManifest.bin": "40034847b3b07cce5fb4d2a34e9e4945",
"assets/AssetManifest.json": "6ae0fd08ee9ebd08432ed84c4010cb38",
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
"assets/assets/images/IMG-20230208-WA0022.jpg": "57227481ab15565683a03c6506072b02",
"assets/assets/images/IMG-20230208-WA0025.jpg": "b705448afa53239179b17b9a4ad46768",
"assets/assets/images/IMG-20230208-WA0026.jpg": "90066253b79fe68666c1d0ab3dd6e831",
"assets/assets/images/IMG-20230208-WA0027.jpg": "3d1bad69a3b5e89018521db213ffc002",
"assets/assets/images/IMG-20230208-WA0028.jpg": "32b0d1be79c6c02385c335d75bcf28d8",
"assets/assets/images/IMG-20230208-WA0029.jpg": "9e0c80464f3ef32ce29e754014b692fc",
"assets/assets/images/IMG-20230208-WA0030.jpg": "4e55164e49c9a31c651e0c6990025344",
"assets/assets/images/IMG-20230208-WA0031.jpg": "de5afd9d7dc4ad4846ee9b38f693257f",
"assets/assets/images/IMG_20230302_125314.jpg": "ace4d45f05569beec95d317b7f59db6d",
"assets/assets/images/sandra1.jpg": "9cad738bd3ec2f79b66d91861904d0d9",
"assets/assets/images/sandra2.jpg": "429b3a639cf08e4c7ead897edaebda5d",
"assets/assets/images/sandra3.jpg": "cb948c193fe0f989f9aef956425b9d93",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d100f12e6d97d27ba0e3ed1459563e2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"index.html": "4971b7843b09043d98ecb3523b718e61",
"/": "4971b7843b09043d98ecb3523b718e61",
"main.dart.js": "8009fa9c068f77d6ff303fbf02344940",
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
