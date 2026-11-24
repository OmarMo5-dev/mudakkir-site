'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"version.json": "f6382678a4ccbb0148208a02a4fd6b00",
"flutter_bootstrap.js": "d0832609efe49853451b334b0ea38fae",
"splash/img/dark-3x.png": "6e84c98f4f12973662381ce63d9b1cf2",
"splash/img/dark-1x.png": "afafc74ad748ee1376aac5b2e15b9207",
"splash/img/light-4x.png": "26b0e0fbab78302ba20f426e9ef22f53",
"splash/img/light-3x.png": "6e84c98f4f12973662381ce63d9b1cf2",
"splash/img/light-2x.png": "773ada831daf0935ab4a3d9e278d3095",
"splash/img/dark-4x.png": "26b0e0fbab78302ba20f426e9ef22f53",
"splash/img/light-1x.png": "afafc74ad748ee1376aac5b2e15b9207",
"splash/img/dark-2x.png": "773ada831daf0935ab4a3d9e278d3095",
"assets/NOTICES": "8128eb728f9cf89a12f47f511057318c",
"assets/packages/pdfrx/assets/pdfium.wasm": "70a0620e6434254fcb5b1f770db50bc6",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "5343e0f742afb6d7b63a9e3d178bc729",
"assets/packages/flutter_islamic_icons/assets/fonts/IslamicIcons.ttf": "83caab3a2c2b140f80725df6ac6e80cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "6c1cfbc0b82f4ed76c28e39097bfc9c2",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "d65f21e923697441b9018ae6e71cc156",
"assets/assets/audio/dhikr/dhikr_reminder.mp3": "9894857cb0388fa85b06b76c1747bd33",
"assets/assets/json/azkar.json": "848077a257c1784037ca7ca84e798d4a",
"assets/assets/json/books_ar.json": "a0b999d9f560dce044552a663d90ba72",
"assets/assets/json/Reyad%2520al-Salehin.json": "477362f867e886fa2e9ee09251de2c07",
"assets/assets/json/allah_names_ar.json": "b22e157680c040e0c75da580a2cc5b13",
"assets/assets/json/quran_index.json": "56eb4036a8fefe8c2eb315cbf85a6506",
"assets/assets/json/Sahih%2520Muslim.json": "9e7aaa4916fd3dcc31542634bde382c7",
"assets/assets/json/Sahih_Albukhary.json": "7c662c3833d69d915a3c296fbd346056",
"assets/assets/json/audio_surah.json": "215a66b42e293ee67a1f2572152886b0",
"assets/assets/json/dead%2520dua.json": "633a6debdab5852cf4b3f62b0af754d9",
"assets/assets/json/stories.json": "4aaedcda682e60a213d29fbf1d01c654",
"assets/assets/json/confetti.json": "2efd2fc126bf0dae679bf87f41959b4b",
"assets/assets/json/Hajj%2520and%2520Omra%2520Dua.json": "75ec0223203812e9bbbbe3f9b0f6344d",
"assets/assets/json/jami_dua.json": "58d6bff49ce5f3d942123165bedc8964",
"assets/assets/json/The%2520Last%2520Ten%2520Dua.json": "ee1b0e1b982d9c91bb29ab413caecfb8",
"assets/assets/fonts/ArbFONTS-Noon.ttf": "8adbf3f633dbc7faff1563f6e374a869",
"assets/assets/fonts/uthmanic_hafs.otf": "43269f118299246de0cf264e04ae2680",
"assets/assets/fonts/AlQuranAlKareem.ttf": "60b9f9d3674a0dd451e7a483edaafad3",
"assets/assets/fonts/UthmanicHafs.ttf": "69b34d79c363d51a674283e1dee486d3",
"assets/assets/fonts/Al_Qalam_Quran_Majeed2.ttf": "44e7b6985d2284ccba959b36fe639d13",
"assets/assets/fonts/Cairo-Black.ttf": "5e8d1abc73e3cb2f4e4f28e8f1266810",
"assets/assets/fonts/AmiriQuran-Regular.ttf": "f294ac0b92a74fed1018c06af36af076",
"assets/assets/fonts/Cairo-Bold.ttf": "08f051a1822e014b22374926f1406d01",
"assets/assets/fonts/almushaf-%25D9%25A1.ttf": "8eb530920ecc3095380fb10f976a5689",
"assets/assets/images/decoor.png": "879fd0b740a118b44834708823a1268c",
"assets/assets/images/empty.png": "daa081579e934227dd9020adbb7734a1",
"assets/assets/hadith.json": "9f670a8e4db7852d0300147248c2d452",
"assets/assets/questions/database.json": "ea8650435a19f1ad1834c4a30087d1c3",
"assets/assets/icons/Makka.png": "3c3abb4c043c1ce3430ed8d5dc775898",
"assets/assets/icons/Madina.png": "bbf497f6edc87aaad136f10c20fbfb3a",
"assets/assets/icons/loogo.png": "da1425d2b464a101ef88d0013aed6031",
"assets/assets/icons/ic_launcher.png": "9deda33ee706e674d27642ccf8b6f393",
"assets/assets/quran/Image180.png": "6385be6d31ea8ac544eb42bce9a7c235",
"assets/assets/quran/Image101.png": "b508b65743e673617a460091688de923",
"assets/assets/quran/Image532.png": "c457fc03f8ff24ea6716bce4caf94048",
"assets/assets/quran/Image542.png": "5881cb60087d263a6d90b1ea2ecacd9a",
"assets/assets/quran/Image553.png": "0cfab28ba91e0f9f09be5822fd477635",
"assets/assets/quran/Image526.png": "5165c23ed99ec2c26933b5ed22b8b91f",
"assets/assets/quran/Image223.png": "2bc0e7139e8ab4c0c3e25b95c1a0590c",
"assets/assets/quran/Image552.png": "0731964ba072f70969e55633c3711d1b",
"assets/assets/quran/Image543.png": "2b043638731f6a4873a1a145b63ad3cf",
"assets/assets/quran/Image103.png": "f731cc0d0bdbeceb011b8940c683046e",
"assets/assets/quran/Image300.png": "f6ba10da527da85489813035a98bc15e",
"assets/assets/quran/Image448.png": "16c15b5de19877580c345e0fedaab599",
"assets/assets/quran/Image454.png": "ab9ed9a90b1f1bc9b008e2d89b1cd73a",
"assets/assets/quran/Image190.png": "fbc7866ab223589efd5ecb4f62262149",
"assets/assets/quran/Image544.png": "fcd21c44f1afdfc37402cdad91a931d5",
"assets/assets/quran/Image171.png": "5c743abeefe85b0d818069084b40de6b",
"assets/assets/quran/Image240.png": "d409d374115d9903cc108b7c681eca48",
"assets/assets/quran/Image437.png": "7605c5bb8c6d8590e2b0f412d50dbd61",
"assets/assets/quran/Image446.png": "52668ec7fc1cca672749d6f88f4bd35b",
"assets/assets/quran/Image372.png": "8c5572ac373f3cda428804bc8d0c63e0",
"assets/assets/quran/Image231.png": "7b65ca5ac4c0942e7eb33bddeca5d89e",
"assets/assets/quran/Image427.png": "d6248ef15541303bc8cb92e06334f3ae",
"assets/assets/quran/Image102.png": "a37d2e4a009ce39742eb188dd39c7c30",
"assets/assets/quran/Image426.png": "5aad1dbcb47b9ec1d710aa6d6e975989",
"assets/assets/quran/Image347.png": "7a22911b2b16e8b8bd2d2d172f1795bb",
"assets/assets/quran/Image267.png": "14666c78845dddae4a75271698cadc4c",
"assets/assets/quran/Image125.png": "cbe07b0cb2f8db18547b16e08adc9a99",
"assets/assets/quran/Image345.png": "4568cbfe47ff94b1cc2708c86f5d6b81",
"assets/assets/quran/Image411.png": "7fc0bfd5ebffd3e039ebf19321be106c",
"assets/assets/quran/Image287.png": "445097d6f1b918acd37cd8f71044fe13",
"assets/assets/quran/Image354.png": "bbc4d727ca87b0f11b5fa0da11e3b660",
"assets/assets/quran/Image286.png": "5a0ae79fdfdc353c00cc226668c4a4f1",
"assets/assets/quran/Image136.png": "60fcbe259b6f7ee6cbd71eeee247d8e2",
"assets/assets/quran/Image358.png": "18f045be33477751b3552f5e33a12aed",
"assets/assets/quran/Image402.png": "0cbd720a8c7bb1a4ea5532249fbe59f7",
"assets/assets/quran/Image403.png": "a97f52824fbea5dd4038d5eb09567084",
"assets/assets/quran/Image469.png": "a26a9a071a9aca33df977439c69a19ef",
"assets/assets/quran/Image479.png": "bd0881ec0775cdf3bc53a681438b57c1",
"assets/assets/quran/Image599.png": "ee759e0c98861fd5535fc0f14005c3af",
"assets/assets/quran/Image439.png": "35fe1806c41aaf38df4ab8018dd60af0",
"assets/assets/quran/Image429.png": "d846fc8a814bfb02a036120ad139ce65",
"assets/assets/quran/Image459.png": "fd56b5a044278d5f0d8b564972f92989",
"assets/assets/quran/Image449.png": "2637495760d002392e576fe628abd0e1",
"assets/assets/quran/Image579.png": "ab06c1899c0b50ab94594f1b0f0089e6",
"assets/assets/quran/Image489.png": "f525496f6c93aea0a457eada662151cb",
"assets/assets/quran/Image520.png": "0cad68123c3dd9fa817353b058a7d040",
"assets/assets/quran/Image533.png": "022e14da31018e1f7828f1291b692eb0",
"assets/assets/quran/Image550.png": "05b1947276a927da268aacd94ee44d9c",
"assets/assets/quran/Image05.png": "41f6fd24a8c3a3a0ea2d1a036f503e27",
"assets/assets/quran/Image521.png": "be6bb55cba63bab5c3281bb35007d7cb",
"assets/assets/quran/Image551.png": "0818367a1c2eab7cbd266a19d07c0e13",
"assets/assets/quran/Image62.png": "7c6272c63dbca200f88094123ff7b719",
"assets/assets/quran/Image59.png": "47389fdea1939d52dd4282e786ceca3c",
"assets/assets/quran/Image589.png": "500f467c816c00eddab48eac34beaca5",
"assets/assets/quran/Image25.png": "5f618d74b8b56a29343dd6da9d9db9e8",
"assets/assets/quran/Image502.png": "c8cb636aab0f85b43fa997009784d4de",
"assets/assets/quran/Image500.png": "60034a2ac16cade050107efa41f4a98f",
"assets/assets/quran/Image518.png": "d7f8050d33030ea2bfb0eebff8de2131",
"assets/assets/quran/Image04.png": "0264410deb7e0b6b0594b3fcf7a2c2a3",
"assets/assets/quran/Image45.png": "8ddcf21de37cd3831e1b2497fc34f5b5",
"assets/assets/quran/Image88.png": "f759ad398d7b6574a25dcf8f406a6781",
"assets/assets/quran/Image501.png": "6286dd4fdb0256e6bdcaf5555f36baa2",
"assets/assets/quran/Image528.png": "e5906edacb1a084e0f2bcece5ded2f34",
"assets/assets/quran/Image72.png": "4552623af76fe7ce7e10ba1488fd0c2b",
"assets/assets/quran/Image73.png": "2fa0f989772b049fa2ec4a3d0eb7e993",
"assets/assets/quran/Image535.png": "c96678327ef3d081c6c2deafcc01a3bb",
"assets/assets/quran/Image517.png": "7ac5beb94dd27f9ed05b4b65537fbff9",
"assets/assets/quran/Image527.png": "03b66073ec5a7fc735cebae0d2ffb458",
"assets/assets/quran/Image516.png": "68c1b5816f3d8ce70f2268994631f0c4",
"assets/assets/quran/Image15.png": "2c2df7923c5b3c56ea1c5349e37d4e43",
"assets/assets/quran/Image11.png": "c65ecf566efc64f0b8a91e7086a36624",
"assets/assets/quran/Image12.png": "83e175c7227b9bd7f7f0d5a6c207c702",
"assets/assets/quran/Image82.png": "bbb1931292586c460e0a81e8d161cf1f",
"assets/assets/quran/Image75.png": "c72ae5b6b50708c83929df710296e027",
"assets/assets/quran/Image38.png": "ce36ce2206f577e5e2c6b67b334b19c2",
"assets/assets/quran/Image34.png": "627fb9d2f168d06dc4b10f6dddc3fda5",
"assets/assets/quran/Image47.png": "2d595c96a3aaea7d167c86053a67e433",
"assets/assets/quran/Image359.png": "1eca6889c50c4482c3aa0aafd9c500bb",
"assets/assets/quran/Image26.png": "2077190e1dd3e55b16158f35daa0c8e5",
"assets/assets/quran/Image83.png": "5a5617be296f48aa025cbfbfa1c0ce0b",
"assets/assets/quran/Image70.png": "9b8a5ba41f5df32d8a5c4e1fbf7f2e9a",
"assets/assets/quran/Image28.png": "f9e25e1a9cfaf052d0c2af87861bea22",
"assets/assets/quran/Image99.png": "bf632b5a8119150b60e1ca5c5face398",
"assets/assets/quran/Image189.png": "18377823cbdc112d3a8f0683e73858e5",
"assets/assets/quran/Image60.png": "6b4a9c6fa5eced938b9773d909ec7da8",
"assets/assets/quran/Image349.png": "44097d5346af5ef511774ed0961d834b",
"assets/assets/quran/Image27.png": "84c4950fc326d664d10922ad61e503d4",
"assets/assets/quran/Image279.png": "a21109bb18c15ba3d6b4ea21ad80eaf7",
"assets/assets/quran/Image35.png": "74a8ae741fbea778f58d0f76da3e6d92",
"assets/assets/quran/Image269.png": "1f3ad5d6d37595489b9a6a832cd392c9",
"assets/assets/quran/Image139.png": "c797ded7a8e77267588b032309b8941c",
"assets/assets/quran/Image13.png": "a456ef79d36249e0d63b50131752052c",
"assets/assets/quran/Image169.png": "9418de6b2655500121a136e1d989c0ad",
"assets/assets/quran/Image491.png": "0d582754fbc962af678052eb5c51876e",
"assets/assets/quran/Image129.png": "10da763e2d58145f224ed2cb64749c85",
"assets/assets/quran/Image48.png": "e9e3ef8d6d42666c10a43b452e6d6e5d",
"assets/assets/quran/Image109.png": "40dc4cb835aa3b16a381d422b53f0e01",
"assets/assets/quran/Image569.png": "9c7e9027aece1a60d685b79689d90cc0",
"assets/assets/quran/Image259.png": "cdbc97273981f2632fc1151e35e193d0",
"assets/assets/quran/Image289.png": "b0be423c59e8c5f29350b600eacdb463",
"assets/assets/quran/Image499.png": "6fb716288681d94bfe7333cde832e4ef",
"assets/assets/quran/Image179.png": "b91d6783509d9c1fec90c1950763a504",
"assets/assets/quran/Image119.png": "fe33ff6c21a1293331791896ec70b71a",
"assets/assets/quran/Image379.png": "528de3d1bb1bdff2cb58d944d8127857",
"assets/assets/quran/Image369.png": "fa7b8cb1c2da6e6fce907eb9a1c17a66",
"assets/assets/quran/Image513.png": "f7c9a3c45491737283459096d36c5e4b",
"assets/assets/quran/Image536.png": "39da1c182e06dcacfa92bd3a250ff5fe",
"assets/assets/quran/Image389.png": "b3102601bf2a8783d832673609f77e5c",
"assets/assets/quran/Image192.png": "c8aedf0ac6529b3f0f58a08c187edd59",
"assets/assets/quran/Image319.png": "3c3ce926e0f4d064ef056120f76f8732",
"assets/assets/quran/Image40.png": "d737b4d022753ff9c982727e4d190724",
"assets/assets/quran/Image558.png": "b16cc98eab7d31be90f059b13a9f1ff3",
"assets/assets/quran/Image309.png": "c446019bafb48ef13bede68067f7995f",
"assets/assets/quran/Image557.png": "7942e73892e5390f9be2a6b1ce409d69",
"assets/assets/quran/Image548.png": "030ed9a3f0330611d761d56a9dba6cb5",
"assets/assets/quran/Image193.png": "e0c246e38830dcdd7ec0491d3446d58d",
"assets/assets/quran/Image565.png": "b40bd2037f8834bce3031182b09c922c",
"assets/assets/quran/Image567.png": "0080706bdf51531373282483f3afa0c8",
"assets/assets/quran/Image574.png": "7c6b7204f8dcdc3d39b4fbd855e0a08d",
"assets/assets/quran/Image393.png": "9202cdd4ac168d792bd5b3a41c17576a",
"assets/assets/quran/Image498.png": "3e3dd34c4a4aaef33b0b5c17913c0cd8",
"assets/assets/quran/Image514.png": "93d13c15fe8ebaad4d313440d5dcb33b",
"assets/assets/quran/Image545.png": "9d90322890791489ba9cbc34ad3a1772",
"assets/assets/quran/Image295.png": "7bf9cfd1646dc654e2f46d758829c448",
"assets/assets/quran/Image497.png": "c4114bf1919f85395c322144ae566cb1",
"assets/assets/quran/Image584.png": "380a01400804a40155d607ba94fe6e23",
"assets/assets/quran/Image534.png": "63f63a497176ee57093b2c2a6edcd3c9",
"assets/assets/quran/Image503.png": "cb9f1863c65f3a55bd01c557f368535d",
"assets/assets/quran/Image41.png": "54411a72dc62dbdfde2ebe84bcfa64b2",
"assets/assets/quran/Image538.png": "a50e6adcb1e89f461fab28826154e58c",
"assets/assets/quran/Image547.png": "725d28b070b69867a17bebb790651ac1",
"assets/assets/quran/Image554.png": "1d4f7673c5d44b2a0fba7b7c73a682d8",
"assets/assets/quran/Image515.png": "27bf11008138597633869613c78c9781",
"assets/assets/quran/Image555.png": "4cb959d88af20090f01bf61e7686d204",
"assets/assets/quran/Image63.png": "af7e23b651ee78bccdf144ce2dd5793d",
"assets/assets/quran/Image588.png": "8e88bf31af35962c0e4f4ffe5206dbdb",
"assets/assets/quran/Image537.png": "d80467f23fb13a2e7a02613d393cc5ff",
"assets/assets/quran/Image191.png": "49e943d733c50e67cc28702144a70fe1",
"assets/assets/quran/Image524.png": "dfc7f3d85f10efaf16377533a1252a8a",
"assets/assets/quran/Image392.png": "759332abc5a3beb29cfff0ce0ac743e9",
"assets/assets/quran/Image525.png": "af3d675d36704eae4d3fa4119fbdc223",
"assets/assets/quran/Image556.png": "d9d4df704b24c1254b1ef4016180a5a8",
"assets/assets/quran/Image546.png": "fd846f684c14ba63c26413ba007626c2",
"assets/assets/quran/Image566.png": "b14ce8113eb0c88c5098f431dd6c4783",
"assets/assets/quran/Image294.png": "07ec7b27785681ed8afa65dc0c6d6682",
"assets/assets/quran/Image576.png": "f8787d0508d5ebf1d5d3849a27cc4447",
"assets/assets/quran/Image585.png": "9836b3191b1e976a784a5065fc895054",
"assets/assets/quran/Image577.png": "4a919aa159a0e577a6b5908f05421c09",
"assets/assets/quran/Image298.png": "9afb334b82f3e31c423275eacbee7332",
"assets/assets/quran/Image496.png": "0c6af38c97d1b97be4f613271bcbbef5",
"assets/assets/quran/Image568.png": "2fe30b69351c95f4328b442105e88cfd",
"assets/assets/quran/Image79.png": "e6df9c064ebab97022341124009dc03c",
"assets/assets/quran/Image578.png": "becb8286eb66ad79714db3439411fdc9",
"assets/assets/quran/Image49.png": "d465daaae43e777bb51ffde0f38f922e",
"assets/assets/quran/Image69.png": "7bf2e6741a8010b818d1853491932990",
"assets/assets/quran/Image390.png": "6d5c0ab297cc7f35bae931e88344f149",
"assets/assets/quran/Image95.png": "e77f70610dfa54df27d9ed4d05efad8e",
"assets/assets/quran/Image57.png": "0f8621d2136f12fcb1d620122c15fd2e",
"assets/assets/quran/Image56.png": "a8cfeb9bcc60caf33eef771506e6b3da",
"assets/assets/quran/Image494.png": "288d42601828def3a25d962bcdd827d6",
"assets/assets/quran/Image296.png": "0b2c82a483db99d68108b90a099d183f",
"assets/assets/quran/Image522.png": "977eb6c3814d1d45766dd94a41695804",
"assets/assets/quran/Image509.png": "7038d4d2de187fed30f37ee673f1ba15",
"assets/assets/quran/Image58.png": "ecb8ea38954f0bb689527f4daf0ba7a9",
"assets/assets/quran/Image540.png": "f7f94578ed0c6cf648bc26aaf5a2e564",
"assets/assets/quran/Image531.png": "f1a60f04f430adf6303629507c7930f4",
"assets/assets/quran/Image399.png": "9c80f8337b3e0ccc859506cd47940d58",
"assets/assets/quran/Image580.png": "f5e76d9c9665ef736a8e66a557a00228",
"assets/assets/quran/Image462.png": "86867b4f1108ec9b98ececeb32cd81d1",
"assets/assets/quran/Image407.png": "f968b08fabaa7b789aaba813c7c91120",
"assets/assets/quran/Image368.png": "1e916ec3cab7e72015ff37271d08c3ea",
"assets/assets/quran/Image596.png": "16d40d017ec9010f7f3af45a8faf5107",
"assets/assets/quran/Image219.png": "e2a4f9e2c916811ad8fafab32d321a14",
"assets/assets/quran/Image415.png": "e02cc2efc4d62f9251c67f1daa26ed5c",
"assets/assets/quran/Image450.png": "81b68527128246851b2d553103e00ab8",
"assets/assets/quran/Image597.png": "a5e0ff0d4ca3f446ed5b474351eb4046",
"assets/assets/quran/Image471.png": "f6cfe6c7070ef1770bde0462c8232711",
"assets/assets/quran/Image560.png": "21944a61e4a12a9894cbde8dd74652dd",
"assets/assets/quran/Image299.png": "55eb9d034b24e66707f93cac6ba6a123",
"assets/assets/quran/Image339.png": "a148ac6af222a1d4fdaf6935997a7734",
"assets/assets/quran/Image470.png": "4e288644ba3d9c686c7ccec4b0b12136",
"assets/assets/quran/Image412.png": "a0b9a0763d90a141cbd0855c13aa6dba",
"assets/assets/quran/Image116.png": "f0a02a5b699e706e31cad6f65eb6e4c3",
"assets/assets/quran/Image126.png": "e41629613513deaff2c0855bb17044f5",
"assets/assets/quran/Image488.png": "e78a09863aef6ae216bd6f40673c13cc",
"assets/assets/quran/Image460.png": "e5beae3e8d00a43fe84872286fbf5749",
"assets/assets/quran/Image461.png": "2c475172e910d8a1e812142b2b91f0e3",
"assets/assets/quran/Image128.png": "1f726f56c09d41d8e16bfd620c883005",
"assets/assets/quran/Image487.png": "fff54e27fa31f93f1e46df7aeac042c1",
"assets/assets/quran/Image186.png": "d68a40edab554141fe4cad396e108187",
"assets/assets/quran/Image453.png": "3e82159858f8e4a4700d57743266b2ec",
"assets/assets/quran/Image418.png": "e9313fa6c0ee44d699d1c47f1c85d3ed",
"assets/assets/quran/Image406.png": "8962a666754cee30d457f039ab90f32a",
"assets/assets/quran/Image398.png": "bbc4df175809a616c715dbf67b0f6ea1",
"assets/assets/quran/Image314.png": "e3b1796e96fcdf56e395072c85fc8a4d",
"assets/assets/quran/Image364.png": "fc75afb6b5a6c290d4a2cdd783dc3198",
"assets/assets/quran/Image235.png": "7b0114d3506b2f7582ba4a75538738a3",
"assets/assets/quran/Image242.png": "c8bd677f2008b9a14240fe83734fffa2",
"assets/assets/quran/Image197.png": "19928ba4cd1bf4b975384b44ded113e9",
"assets/assets/quran/Image490.png": "2b298b674b3589cde634ba840d858031",
"assets/assets/quran/Image196.png": "d74482c1b93448b4107a7dc6e702baa1",
"assets/assets/quran/Image394.png": "cdf618abb8a258ed03d16224aee354db",
"assets/assets/quran/Image106.png": "4603fe87d44f4ce1af6dceef0a37fa8d",
"assets/assets/quran/Image144.png": "d3dd6de38d3d33f6ae18fda491a7bc27",
"assets/assets/quran/Image318.png": "8dfd84ca88314e00c7aaf15d017360c9",
"assets/assets/quran/Image374.png": "1473a46c095356e30a4c3a97be847054",
"assets/assets/quran/Image290.png": "6c0486642c4e8d18f590fd35a34a102c",
"assets/assets/quran/Image226.png": "2805088b0d20e4f26f823f0add8326eb",
"assets/assets/quran/Image243.png": "0baabcd289a74b3563620c66b5d861bc",
"assets/assets/quran/Image304.png": "fa2ed0cfda5adccf00b63bc3915e4a8f",
"assets/assets/quran/Image107.png": "30c461bcbd52d238a267b4d41226ab23",
"assets/assets/quran/Image198.png": "3efa05b6d467546630ece35504276275",
"assets/assets/quran/Image405.png": "d1d1ed8723191a51dbd4aac9890afbf9",
"assets/assets/quran/Image375.png": "2c1eb181f0da4511b397013805dc52e8",
"assets/assets/quran/Image187.png": "b7a34c49fc0bf952dcec09fa843e0d6f",
"assets/assets/quran/Image232.png": "90e7f3a44e8c00f0c360654589a68497",
"assets/assets/quran/Image117.png": "29dd1223b8db78207ebbdce323c12920",
"assets/assets/quran/Image317.png": "30016dba521ba9cc1184bb470cb80b48",
"assets/assets/quran/Image529.png": "79ac65ee82a19c2ab8f506a8b84af9b1",
"assets/assets/quran/Image396.png": "1b2de584f19b0d6e29222c399415aee9",
"assets/assets/quran/Image366.png": "0d93fdc1974948daad5e12eec054a6e3",
"assets/assets/quran/Image262.png": "f3cf7ae6ea9cbe3b90057a699f6bbde2",
"assets/assets/quran/Image408.png": "93aa3ad73be6b9ff78606b75e8ff4ba7",
"assets/assets/quran/Image604.png": "10656d7832e86681897dc6298bcfa415",
"assets/assets/quran/Image248.png": "70761be7b69e000b050620b4d97d525f",
"assets/assets/quran/Image388.png": "b24e3da6192b5e8bc64307bde371c6c4",
"assets/assets/quran/Image376.png": "b1c130a2b034ab702288f04e967b254a",
"assets/assets/quran/Image404.png": "2550c5f2632be968be4237adcc65b1d9",
"assets/assets/quran/Image348.png": "f2da61db36fd9b4bf30efe3ca68f00ab",
"assets/assets/quran/Image253.png": "7efab4e3cc41f6f78d9cc79ec265bf3e",
"assets/assets/quran/Image539.png": "b1eef14535ee3f7712fd12031af80fe1",
"assets/assets/quran/Image414.png": "485ac8f46f2258d0afb0cbb55bddf98a",
"assets/assets/quran/Image391.png": "926db1f5ffcd20e9aac01a46e5f2ce50",
"assets/assets/quran/Image194.png": "083b5cca44c2f590a05c13c8a44421f5",
"assets/assets/quran/Image381.png": "0f629ef10481e8b51fa7bc6b3ced54cc",
"assets/assets/quran/Image346.png": "90257e11d2fca6dc70235bd526ab8e43",
"assets/assets/quran/Image400.png": "f614bf91b2a4ec0db9208a2c3cb0545a",
"assets/assets/quran/Image155.png": "981e8654d69f7272fd474c6f5411e349",
"assets/assets/quran/Image258.png": "988d42b11dba61f32029711ec8190192",
"assets/assets/quran/Image341.png": "4c7c077be4cdeca04cc6c5f21469e0c7",
"assets/assets/quran/Image114.png": "dc28cefd826c148361c818a8b9875ea3",
"assets/assets/quran/Image602.png": "95994f63b84648ea9b441ae319a17fa8",
"assets/assets/quran/Image132.png": "e69a4fd6425d9d2957be3a553bda09fe",
"assets/assets/quran/Image386.png": "af949c202d1e980242d7c9a1fc593cbc",
"assets/assets/quran/Image549.png": "d62e4a21fafb98c39d57a5fb74b4bc68",
"assets/assets/quran/Image270.png": "a34036f8e4473bd540da0007fc887948",
"assets/assets/quran/Image203.png": "a5e130892c5b91b0160d18d049c5ad8c",
"assets/assets/quran/Image94.png": "714fa190d76d17fe287e9640436e10a2",
"assets/assets/quran/Image519.png": "b8cf8ff540a04cf583c7790b8ccbbf4c",
"assets/assets/quran/Image603.png": "6bc5b4a81d1969d6e0839842812166ff",
"assets/assets/quran/Image385.png": "fa686df96a96b7c1926d242a486f7eb7",
"assets/assets/quran/Image297.png": "7edefa9d2c09053166d17fa516f1a329",
"assets/assets/quran/Image559.png": "b35f7724f09da1c903b9cc3afc17742c",
"assets/assets/quran/Image291.png": "8aa20eaf281362c76dd59bf20778d515",
"assets/assets/quran/Image583.png": "868cf79611e43609369c0ff4d271b4b3",
"assets/assets/quran/Image570.png": "bfeaf1198fdc3ee4bfbc3d7588b059cb",
"assets/assets/quran/Image134.png": "2c93ccef18c3f34f7c9bf948dcb6dba3",
"assets/assets/quran/Image397.png": "4ff17f2aaab11158207f92aadf701c9e",
"assets/assets/quran/Image413.png": "971676c3344cd7d83bb756b4ac4777b5",
"assets/assets/quran/Image115.png": "bbe9c9bcbe238298aba162ac6bf66c31",
"assets/assets/quran/Image225.png": "2c07013e4043198bfef5c13311ca2d03",
"assets/assets/quran/Image410.png": "895ae60292ef42bee398c8fceeb9f13c",
"assets/assets/quran/Image234.png": "7582c5d7117ac0e11b1210e78fdd6e74",
"assets/assets/quran/Image124.png": "c341e87de75953b90d9ab8ac2c6ad63d",
"assets/assets/quran/Image98.png": "b84596d3da8710f975a6f0719d3d5fcc",
"assets/assets/quran/Image582.png": "cf1c87acab126a1437f7f33107c46e17",
"assets/assets/quran/Image195.png": "568a781a91abb6277714df18e320dd93",
"assets/assets/quran/Image571.png": "6cecb2866f3a44e6804275f8b88b7064",
"assets/assets/quran/Image224.png": "ceb093487ada1433376f1b8a8e9e8261",
"assets/assets/quran/Image305.png": "85f0b91c2d93207e3d81c2c48527b9c0",
"assets/assets/quran/Image316.png": "10325c038d209a552f67ce240b6efa18",
"assets/assets/quran/Image246.png": "6f559b7f0e3fcefbddd66ab7fb598c7b",
"assets/assets/quran/Image214.png": "71b6fca70b2d54f6024bf958e8436b73",
"assets/assets/quran/Image118.png": "09d6632f50274c4196e2fd613efbca01",
"assets/assets/quran/Image247.png": "1463231183e40d3dddf08016739da45f",
"assets/assets/quran/Image378.png": "7870e054ca04808857c73dabaeb652e6",
"assets/assets/quran/Image237.png": "32c8e61e53578fb1a986b9e9cac62666",
"assets/assets/quran/Image245.png": "b0f91811244789e2e871fabbf2d28de4",
"assets/assets/quran/Image380.png": "6df6af1e5ac319dbac696002d0985e2b",
"assets/assets/quran/Image260.png": "cf04a11aa8e6adf1e859f4afb72c4f45",
"assets/assets/quran/Image215.png": "d20f03957e416efd837dfd788c15299b",
"assets/assets/quran/Image340.png": "e38deab6a0338fc17dd51657988419f8",
"assets/assets/quran/Image127.png": "c7990d87a5c6d09d13b5e130656c6c71",
"assets/assets/quran/Image236.png": "79e89e63e0e513a645802cb095881bd3",
"assets/assets/quran/Image280.png": "3535f2ec14a18ea8d9d88f2d00e9f3b7",
"assets/assets/quran/Image281.png": "1b4e30f13d5e500f0ce6b3237fb885db",
"assets/assets/quran/Image135.png": "d0bbae4c477c3973eefe315ee89b813f",
"assets/assets/quran/Image250.png": "7ad1594e59caeb777db1b53e2eb97a0d",
"assets/assets/quran/Image401.png": "4492ab92d686ddb4b92b7d8add9cb8d2",
"assets/assets/quran/Image238.png": "6c7334a3695838706fad1365e2d29ee6",
"assets/assets/quran/Image293.png": "027780249cd4631af10ffdd0cc0f4336",
"assets/assets/quran/Image263.png": "7497e70988180e44d4e18f26a21d6b89",
"assets/assets/quran/Image199.png": "2d575d11421ffae2e11345ea1e862b05",
"assets/assets/quran/Image271.png": "eee4bb1da277cc603968afe32c3c4c35",
"assets/assets/quran/Image261.png": "5a8c6d2f96bf471c551d10063c11e116",
"assets/assets/quran/Image167.png": "797ca8c52df1d3580e5a0205d7e055d4",
"assets/assets/quran/Image185.png": "b3d2b45c6f66b8a24487db705e606750",
"assets/assets/quran/Image313.png": "9877958493aefe31c688ca2af82dc48e",
"assets/assets/quran/Image206.png": "1ea1d81319f1bb839e11119f9947fd95",
"assets/assets/quran/Image241.png": "7599e8e6caf80d31401711b66b71347f",
"assets/assets/quran/Image301.png": "dd46a1de220fdad843fd4c60b47b48cf",
"assets/assets/quran/Image210.png": "9780d0cc75da300b34fef082ddc553e4",
"assets/assets/quran/Image174.png": "84d51d3b9e08d659445f6abdd062ec8a",
"assets/assets/quran/Image153.png": "1f3f8bdd2b418b06ddb6db7985a06481",
"assets/assets/quran/Image331.png": "3d917af1d6fdf47e4004a18eb610392d",
"assets/assets/quran/Image320.png": "1b5fe2ffcced1c15fd69c1a6aa1155ae",
"assets/assets/quran/Image178.png": "fd310822e85698b6941238c7ea5aab28",
"assets/assets/quran/Image152.png": "36f3f1b590d42f398d7aabf2fcd977ba",
"assets/assets/quran/Image330.png": "4d8bd6bbae8c788f302159c188712fb4",
"assets/assets/quran/Image218.png": "a1720e808f73aed978786771a8f8a9a4",
"assets/assets/quran/Image428.png": "5610ce15607d15bbdd3e5ade4a243502",
"assets/assets/quran/Image143.png": "aa0a7d30647849e833b6855586c9c841",
"assets/assets/quran/Image104.png": "e5ba7187df7b357b0c6eee54e2dab17f",
"assets/assets/quran/Image188.png": "67a265c89cb4bbcb62f4384fa9495d8d",
"assets/assets/quran/Image200.png": "c49ad0a0764320528f3bda598da5ab8f",
"assets/assets/quran/Image165.png": "7cf3792ce29fad0071a84cd9b4963c51",
"assets/assets/quran/Image383.png": "b3dcd6d16158cb1fddeb6ef7abdac475",
"assets/assets/quran/Image438.png": "dfd6259815d2caec0db4192115a77f9f",
"assets/assets/quran/Image221.png": "4fe167d587d4fa65f5a3936c63a02c5d",
"assets/assets/quran/Image220.png": "7e78942c2d6009b102c843961d504a0a",
"assets/assets/quran/Image308.png": "bdf797da729cbcff9ece78c4c361bfcc",
"assets/assets/quran/Image228.png": "f6e6b9d6bd42a6f78371471b30d05c40",
"assets/assets/quran/Image306.png": "ac71a70b3a24aab1e53d18394bb2f270",
"assets/assets/quran/Image184.png": "187f1ceafaf83660c16dba7f3bade53e",
"assets/assets/quran/Image201.png": "5aacb228eb29448827041db15a513b88",
"assets/assets/quran/Image323.png": "781a8fdf6beed32d2dcf01150a5c0bd8",
"assets/assets/quran/Image233.png": "aa9b3b44a6f7555332bc38c4d84dad77",
"assets/assets/quran/Image164.png": "42c3a3880cec7f1bbeb69ea1b301ea3b",
"assets/assets/quran/Image105.png": "57594a7ef949c99dcfff86994f9810af",
"assets/assets/quran/Image363.png": "5655704c43ef7d9f5e800f10f7fc74b3",
"assets/assets/quran/Image373.png": "c59f1a94cf16928d2d4d67a060a002d0",
"assets/assets/quran/Image288.png": "a865d24921b571e7b501f815bb199a40",
"assets/assets/quran/Image175.png": "6ccb486de698c9102f4405477c4329b1",
"assets/assets/quran/Image564.png": "d38698eff9a12d43cb76c8f8e9f79e2c",
"assets/assets/quran/Image315.png": "48c18b906626b3c6b0c33176f154f3e1",
"assets/assets/quran/Image120.png": "ed012cf8e10a4af579c5c2dde8b5cc2a",
"assets/assets/quran/Image121.png": "d9089712eb74b0f79ef3121d64e7f887",
"assets/assets/quran/Image416.png": "92367ea0e3b762bb1536f79487e804e1",
"assets/assets/quran/Image284.png": "e66ef3af7b1e892dec3d21cd5147ea82",
"assets/assets/quran/Image417.png": "d423ecd605add4d3f835473afa3be62b",
"assets/assets/quran/Image351.png": "55c378f4a9aa661d281d0e3266dad22f",
"assets/assets/quran/Image343.png": "5c992f192df37cfe0906209eb8c1ac43",
"assets/assets/quran/Image264.png": "b7380692c6d0e4185ce1cb771852fae0",
"assets/assets/quran/Image356.png": "3c941ad6ed67287e11cbce491d3f362c",
"assets/assets/quran/Image110.png": "e68979356858edcdd81738640773c72b",
"assets/assets/quran/Image133.png": "7d9ca791ad99bcb82841c5a8866b36ca",
"assets/assets/quran/Image572.png": "423db7d51b1c4aafc2ce481c45a44b02",
"assets/assets/quran/Image495.png": "2091f423633e64718cd31c2a74d08d95",
"assets/assets/quran/Image350.png": "4a0566ba6d8a047880395f33d4405eed",
"assets/assets/quran/Image285.png": "8832ae34e50f60c5f073d893f868d1bc",
"assets/assets/quran/Image486.png": "1b9ccea829d4960bf0cc33c31e0f58b9",
"assets/assets/quran/Image274.png": "69bbfd8cb4238e15b43ccb59f82a5aa2",
"assets/assets/quran/Image600.png": "c960d8c2dd9149220d1d7899edf458d3",
"assets/assets/quran/Image265.png": "e06de9c3e8c8af76bb541fdd72948e33",
"assets/assets/quran/Image209.png": "cdfba0198c4e6bc7843aec08a297beaf",
"assets/assets/quran/Image581.png": "53be7f6dac978dfc840cc77368891d40",
"assets/assets/quran/Image254.png": "fd0d6d7b444c091527b2a4876d97e5e5",
"assets/assets/quran/Image275.png": "4f07decc5567c9e18ecea37bb20cce06",
"assets/assets/quran/Image419.png": "8907f415d89e8945475124186290659f",
"assets/assets/quran/Image598.png": "b9edb6194d79c9e842b9b41877a7e0bc",
"assets/assets/quran/Image90.png": "37c0160cf731823d0858be05ade72938",
"assets/assets/quran/Image202.png": "5ec42e00e98122c149a64ed17b1d29b5",
"assets/assets/quran/Image332.png": "3f92e20f235f960a4ce160e31d2ac0c1",
"assets/assets/quran/Image257.png": "9e54d43c6eb300ab32ddf81590026cb7",
"assets/assets/quran/Image344.png": "58a6ecbac9ac6365f63b6904ca12cb72",
"assets/assets/quran/Image409.png": "82f5f5f5fb5245d6bef9a774cfb5b5e2",
"assets/assets/quran/Image278.png": "7ca97ccf1fd34457f044a108ed264795",
"assets/assets/quran/Image256.png": "b463ed83fafccd5aeccf430db610555d",
"assets/assets/quran/Image322.png": "54f19c806f352f900998ce769b289754",
"assets/assets/quran/Image217.png": "03f95d642a9875028c6c3fd8bb7c74aa",
"assets/assets/quran/Image384.png": "482ddf1d7860869c358bd7111f85d070",
"assets/assets/quran/Image216.png": "98d9bad9e23d521e2e2bb005928089f8",
"assets/assets/quran/Image601.png": "0ea5ea7bdaad99676fccebcd2007a032",
"assets/assets/quran/Image365.png": "2adb5887e0b7beccbc9f4e1fa73ee920",
"assets/assets/quran/Image108.png": "f73aff676cfe34636b00d2daf824aa4e",
"assets/assets/quran/Image333.png": "6cbada133c3ddacb5924d5deb79763f9",
"assets/assets/quran/Image367.png": "e999adee2ef0cb2566e87afdd42ad965",
"assets/assets/quran/Image377.png": "4bb125016df187ef18f9384eb6979008",
"assets/assets/quran/Image131.png": "1766fa565357d58ba63f8e6610d47984",
"assets/assets/quran/Image357.png": "4647ad1a787473e4a6c8ee1caefdfbd2",
"assets/assets/quran/Image112.png": "c6e15f3a3ecb8b1e663ab154ba01076a",
"assets/assets/quran/Image382.png": "26b532ae289ffa141f81b6e95265f51b",
"assets/assets/quran/Image255.png": "2aebe8db8da5b098069e8373908d1924",
"assets/assets/quran/Image268.png": "594df44aebb2d761f811762f3303d62e",
"assets/assets/quran/Image227.png": "ed9b7b06773ee8e30c2c33bd909d31db",
"assets/assets/quran/Image244.png": "8d267746c746ab821f0bf70ab7f7f149",
"assets/assets/quran/Image122.png": "dad54e58237f05cdf2ec80ea8cd8995b",
"assets/assets/quran/Image272.png": "2f86727528705f28de7a696691d70503",
"assets/assets/quran/Image342.png": "6c4ee843828d605986fbab9a96fe663a",
"assets/assets/quran/Image276.png": "0536f8b145c0bbc957abef07f979937b",
"assets/assets/quran/Image113.png": "a7f315ce2273738bb579d550746a2b5f",
"assets/assets/quran/Image130.png": "95d76ace7a8539034ba4675b6f9ae825",
"assets/assets/quran/Image273.png": "5ff542a27ba3c6c9b011f76868277284",
"assets/assets/quran/Image123.png": "0e267fafdff644b0ceb41449281fd04f",
"assets/assets/quran/Image208.png": "ce1ba66f1eccf5b0fc40ca235e3a63c1",
"assets/assets/quran/Image252.png": "be5cb889acdafa5182a29f663dbde7d2",
"assets/assets/quran/Image282.png": "fab1e8b84273cbe8ce29360ca9a596a1",
"assets/assets/quran/Image251.png": "506161eec37647238ac333519b4f2605",
"assets/assets/quran/Image353.png": "f3ce35feb3c120aa7811fc59943bcb96",
"assets/assets/quran/Image321.png": "a4da5ad709ced1aa0256776b3ec4c69c",
"assets/assets/quran/Image283.png": "6c92b24b158b90d483aa515a29676e6f",
"assets/assets/quran/Image352.png": "5e88a3e3625e2a5847c30c19df75bb91",
"assets/assets/quran/Image111.png": "e4773b4a7288f82b596bb651779a8938",
"assets/assets/quran/Image39.png": "07d1462c9873cbbb9f0cedca0726ba7f",
"assets/assets/quran/Image19.png": "a640e210cc383f368007299a047b7a9e",
"assets/assets/quran/Image506.png": "56fd7930ff5512442b9c51b28e4fe951",
"assets/assets/quran/Image541.png": "34a70745e2759b0a8d2661972ef9df9e",
"assets/assets/quran/Image507.png": "5db771ff3f5a0f61e851a2c0efacc0db",
"assets/assets/quran/Image89.png": "76c5dc7d7a0272aae4f488e0f563866c",
"assets/assets/quran/Image508.png": "5994d40791a0cf7d4bb94d825cd26011",
"assets/assets/quran/Image510.png": "41d268de864e341864b9130e10ad68d0",
"assets/assets/quran/Image504.png": "8378b5f542dde412f1f252dd0ec35758",
"assets/assets/quran/Image09.png": "be622e096df566387630af00b78b0308",
"assets/assets/quran/Image512.png": "42a7b335c8e397a7521c8f4943ffc4f5",
"assets/assets/quran/Image505.png": "4afd8f1b9f099e082170657bf954aa7f",
"assets/assets/quran/Image530.png": "f8f0e2abf9519f30543319535af3dbdc",
"assets/assets/quran/Image29.png": "60a59bdd265b3886f840a70f1bbf0eae",
"assets/assets/quran/Image523.png": "6242b5c43533b582e3d7bae9da6e1432",
"assets/assets/quran/Image395.png": "38cab8bf27607d45bffe0d15537f3eb0",
"assets/assets/quran/Image292.png": "0012879aa24be2566af040a68a6242f6",
"assets/assets/quran/Image511.png": "2250efc4c5c793d449bdad13b285547b",
"assets/assets/quran/Image52.png": "e4a2f92eb0f772e4f4adc1f25c83a5df",
"assets/assets/quran/Image51.png": "b40a5419eb532005a3768cfb3ef649b3",
"assets/assets/quran/Image482.png": "f979d001270f844492415401e3ad63d5",
"assets/assets/quran/Image97.png": "6e9567f5bd4273464306739c6efacfc9",
"assets/assets/quran/Image24.png": "a2d4991753f53c3665494d940b59d98d",
"assets/assets/quran/Image54.png": "c5ddcbc57f56236e2cd930efbf841414",
"assets/assets/quran/Image55.png": "c69d2066f7c3d9b98c569c1a6f636547",
"assets/assets/quran/Image53.png": "b5df7d4f88cccfc5a6328fa11df9f62f",
"assets/assets/quran/Image91.png": "e18bbcfde154c00a7f7657500741b80f",
"assets/assets/quran/Image37.png": "d36f644409a8d60e4d781c24aa3310af",
"assets/assets/quran/Image36.png": "a974ce1bb89a4ccf0ea14573cec79324",
"assets/assets/quran/Image06.png": "5e66c093c1c5e5f7746c4abf2c2c6120",
"assets/assets/quran/Image08.png": "0e803bb27d63c474580edfe4a3b4ac16",
"assets/assets/quran/Image96.png": "43ef2a2d5e4d6f3c56304bfa7a9aa15d",
"assets/assets/quran/Image93.png": "5a616018f39e02d23cf5727e74d20cc8",
"assets/assets/quran/Image50.png": "c1d5133c56e22f1526ea91ae68f34d3d",
"assets/assets/quran/Image92.png": "db9608fbb58ab0eb70e0d9d0709ef3fd",
"assets/assets/quran/Image485.png": "1de6555876b977f09d2a5ce4abef5a9d",
"assets/assets/quran/Image594.png": "6d7d6fa3378157186f0b01220fb59036",
"assets/assets/quran/Image484.png": "1a89d94af7c2762ab62b7daf64119336",
"assets/assets/quran/Image149.png": "73e8c9c2c703751ac4b6f99c5e7ac88b",
"assets/assets/quran/Image159.png": "19e947d3e9eef2021d53428a353a2742",
"assets/assets/quran/Image463.png": "2209eee969a01c488f0a0ce5a96de95d",
"assets/assets/quran/Image595.png": "f974dad98c64d384ee5cced22c52ba3b",
"assets/assets/quran/Image452.png": "4bf13ee974606dd9a5073729773bea84",
"assets/assets/quran/Image472.png": "540bc49ed9cf15b54462bc92596e108e",
"assets/assets/quran/Image473.png": "f44134768a5a4578a31b556d32f7e0fe",
"assets/assets/quran/Image329.png": "3b289de9ec6f83b4f8ad481a238b1ce6",
"assets/assets/quran/Image151.png": "aef683fd5a2677eebad3f4f240ee530e",
"assets/assets/quran/Image141.png": "a68328ccc997654fe74aaa3c1e76e02e",
"assets/assets/quran/Image168.png": "376f17ec00ff28e8e58b8fa480bbecc9",
"assets/assets/quran/Image326.png": "06232daa6f40c7f7c8499ade76f0c95b",
"assets/assets/quran/Image212.png": "a79d7287b75a5c9204f7762bfa96a14b",
"assets/assets/quran/Image166.png": "52c5b3cab65095aea552752e679ee566",
"assets/assets/quran/Image328.png": "e5673e6623c1bc8045538a2ec328ec9e",
"assets/assets/quran/Image150.png": "0f54223e893b24974d34d22b118caa93",
"assets/assets/quran/Image327.png": "398c9edea2890510a662ff9a199391ec",
"assets/assets/quran/Image211.png": "68ef1a56d04a21a6bbabf7895affa5a7",
"assets/assets/quran/Image222.png": "7d6aca6bdb7a51ef21e385f0664db10c",
"assets/assets/quran/Image338.png": "45df9a8c51a3e32ae9860d10f2b2342a",
"assets/assets/quran/Image455.png": "9bd19897d5fe56fb8eae6f39f9290b2a",
"assets/assets/quran/Image207.png": "858ce93a8b851738d7835965bb34ba9c",
"assets/assets/quran/Image337.png": "bfb46bb1770b39bb39c5d0b8bee18a9a",
"assets/assets/quran/Image205.png": "0cfd77b9c58121f04ba9aa1b9baf1dd8",
"assets/assets/quran/Image20.png": "a3dd7ffeb4fb594bc757af3064d66b73",
"assets/assets/quran/Image87.png": "8fa42e74e68ac74425694b0ed0e0acff",
"assets/assets/quran/Image177.png": "d5dec52c0f94bf4586b33d6fce7a41f9",
"assets/assets/quran/Image230.png": "3424f94f107dc3b4dcc6e8a7c698d0cb",
"assets/assets/quran/Image66.png": "58a075babfaa35d454c1e72da672e23f",
"assets/assets/quran/Image176.png": "c017cb1bd36ca6cc0f3dfe642c4677cf",
"assets/assets/quran/Image312.png": "b2f27a15059b8a2266c16681bfa939e5",
"assets/assets/quran/Image03.png": "a0292780efb0f99e9d314f4748b0aae6",
"assets/assets/quran/Image142.png": "ed18a64bfea7e57739cb323b53a0e5c7",
"assets/assets/quran/Image464.png": "61bf8c915f2867aa6798aabeaba03175",
"assets/assets/quran/Image17.png": "b6ff0fb7d8c37311c7a924e34a9211a6",
"assets/assets/quran/Image16.png": "c2fe98a8aceef8cd60654d6b8024d271",
"assets/assets/quran/Image86.png": "59b8c8a0a6650316de4756c6585db37f",
"assets/assets/quran/Image42.png": "92c2de14cf15f4d1e6f29224d26f3b2a",
"assets/assets/quran/Image43.png": "f18fc745f1c0b73fabffb8ff0a57e865",
"assets/assets/quran/Image307.png": "1218af757e87b9bde5c7b495bffb86be",
"assets/assets/quran/Image447.png": "aabbc0e2fa86ab7e922204eb79392792",
"assets/assets/quran/Image23.png": "83fcd8cd0689467805ba22b6d2efca90",
"assets/assets/quran/Image362.png": "01d060900016d58b2e863dd6a9cd8a3d",
"assets/assets/quran/Image33.png": "fcd2d234a6354db54877592a7345c3a4",
"assets/assets/quran/Image76.png": "0d66c3cfe6c9be9236dbdef282ec528b",
"assets/assets/quran/Image68.png": "aaf3306ec4e61a0e5e7ed8f62fbd9458",
"assets/assets/quran/Image44.png": "4289dd06d5f35fc337dbd42e998ef2a3",
"assets/assets/quran/Image31.png": "65b18add8d4d49814231720d7daf3a4e",
"assets/assets/quran/Image21.png": "c7c2eecf7c85a18a6040f57d5cd6645a",
"assets/assets/quran/Image81.png": "97719f8870e22f952bbef44e93aab94e",
"assets/assets/quran/Image71.png": "f4438196ddac3edf055cf66844eb2595",
"assets/assets/quran/Image10.png": "27fc457ba96f18b9db58ae237a743c3e",
"assets/assets/quran/Image18.png": "344f10d4086f1933d6a4c2a823ff04b9",
"assets/assets/quran/Image30.png": "fecb7326b29f96e1790610ed01bb6980",
"assets/assets/quran/Image22.png": "def4ea5d436c35abf5b5e86f56a4be0b",
"assets/assets/quran/Image32.png": "f608a3e4f1efa4a0b7d8303fe4734922",
"assets/assets/quran/Image07.png": "b8ffe4651134ed169807697187d1b702",
"assets/assets/quran/Image80.png": "ba703da4a396beb433e90d7afb93792a",
"assets/assets/quran/Image01.png": "7f4bb23bf2c27f8908081b5e3201e73d",
"assets/assets/quran/Image02.png": "4b9bdc5d03a95cd0dbca9d469842d287",
"assets/assets/quran/Image77.png": "253987df6cc19f81cd9673c71f02fca4",
"assets/assets/quran/Image74.png": "43bd0c7725019c5af817e7b13cca3a68",
"assets/assets/quran/Image61.png": "d2e993729f316a5e795e58f8b9d9c008",
"assets/assets/quran/Image67.png": "1b1acec30df0132e38a2b1b09a330ff7",
"assets/assets/quran/Image84.png": "90a993dfea122a45458bb7caf7da6fcf",
"assets/assets/quran/Image14.png": "9641efd51e2fee5ab3e9cc17dfa9aab3",
"assets/assets/quran/Image65.png": "400a79876d025d1661fc65ddd4a21045",
"assets/assets/quran/Image46.png": "49cb41501198b454753ab409b6fc76d0",
"assets/assets/quran/Image431.png": "3742fd61c168ed27018fe26ce9f7d6db",
"assets/assets/quran/Image324.png": "c69ff6ad17ffa389a54f1de1ee7c3e65",
"assets/assets/quran/Image421.png": "0b6cb25503a3554cc3a5480a9becc732",
"assets/assets/quran/Image422.png": "eed7024bd33e8eb9acb2c6d6b7844817",
"assets/assets/quran/Image64.png": "1c477a345b7652e93efca9048b427085",
"assets/assets/quran/Image85.png": "8e2ced23b487167593f73d16645f9687",
"assets/assets/quran/Image423.png": "b5116a942876fc616b92b95e285df836",
"assets/assets/quran/Image458.png": "7099a3dab01cba0728d3fd1117c580df",
"assets/assets/quran/Image432.png": "5caad0223b578b0028f980231a42be3b",
"assets/assets/quran/Image173.png": "3e54653e1d2424dfe15a60c7d0e6d8bc",
"assets/assets/quran/Image442.png": "faae24d83ad972b80d8a65676656280a",
"assets/assets/quran/Image302.png": "16b5637926a5fea532905866574540ea",
"assets/assets/quran/Image586.png": "9ae1e06cde65d4d0f007c6c101809f23",
"assets/assets/quran/Image575.png": "31b7b2ce21089ac8556e3a0bafa70a61",
"assets/assets/quran/Image78.png": "48c296e8e0443b46ae0a09740111b9e7",
"assets/assets/quran/Image563.png": "175e57366d3d2607ab12bce9f608d614",
"assets/assets/quran/Image239.png": "50b5139c47c882791ac5e042abe67214",
"assets/assets/quran/Image441.png": "ecccd5c502f469b665c02a471d95a9c7",
"assets/assets/quran/Image573.png": "621f7393a8fdf2463e2ecbdf34515a1a",
"assets/assets/quran/Image430.png": "9cce44ff45934f9a3c2a5b288de4bd26",
"assets/assets/quran/Image483.png": "0a0025032a029cb3f1ca40c546b69477",
"assets/assets/quran/Image587.png": "3cf6d8a53c0b7efb07406870b2212e00",
"assets/assets/quran/Image325.png": "605dc79c58def93ffdfc20e3617ccc3d",
"assets/assets/quran/Image249.png": "f47a405e25bf7e1bfd28a0a37a923c37",
"assets/assets/quran/Image334.png": "e3da26d8cec3102dd8486718171b5c11",
"assets/assets/quran/Image229.png": "018c1b4af7c053f58c41d65689794708",
"assets/assets/quran/Image162.png": "2ec68e82c5bea53a414a9587e1f3130b",
"assets/assets/quran/Image420.png": "f411b36df79fb4f79f9466a1d2efca18",
"assets/assets/quran/Image336.png": "40186aa9b5b46003a7b2c8de4df857c1",
"assets/assets/quran/Image181.png": "615091031976be3f86c41cb8fa4b99b5",
"assets/assets/quran/Image156.png": "d3ab5f09f67eef43c4c83e994e26f5f0",
"assets/assets/quran/Image204.png": "5f91dd2e29847f8203555d8d96c29eab",
"assets/assets/quran/Image476.png": "8ffd98463a2a1597e05468fcaa4261be",
"assets/assets/quran/Image140.png": "b83954024199043d8dfc57a4186f935c",
"assets/assets/quran/Image161.png": "cf7bd5b2be219a8df7179425e1aad427",
"assets/assets/quran/Image435.png": "ebfb2262d3b6a2319652f30c77a67f2c",
"assets/assets/quran/Image475.png": "27c794b53bff43f77a945e1587cf0964",
"assets/assets/quran/Image456.png": "6042ecb1402185b919e10b166e20059c",
"assets/assets/quran/Image157.png": "17eda1d4f563ccdb5b1125d53b161338",
"assets/assets/quran/Image440.png": "42e3cbf5252239a7b5b023dfeb3ff0f8",
"assets/assets/quran/Image370.png": "448ffa09e979833fdc9d4664a073364e",
"assets/assets/quran/Image360.png": "0e3d62cf23176adec120e761ebe5d198",
"assets/assets/quran/Image444.png": "a8d52958698b1468013ddde8d31ed24e",
"assets/assets/quran/Image170.png": "180cc93c76721bf99db59a2b455a9946",
"assets/assets/quran/Image335.png": "35f7db174acebb61c6697683ff1775d0",
"assets/assets/quran/Image148.png": "03af79d6abcefece2f6b8dc92cc2d153",
"assets/assets/quran/Image593.png": "7689b4feb6327c91a7e2bdcbe1b647e1",
"assets/assets/quran/Image466.png": "57004d8ee5a395fce454c0d1a0a8b972",
"assets/assets/quran/Image158.png": "7d5d4d962e94639104071fc099cfc622",
"assets/assets/quran/Image100.png": "d7ee754bd8dc5ee87c82b431635ef3c1",
"assets/assets/quran/Image160.png": "b4b3db373f366854f8355809fa6839bb",
"assets/assets/quran/Image183.png": "24694c6f04f339f8c35af09ec281f3fd",
"assets/assets/quran/Image562.png": "deb3c9e261e3c63e02b0abb1151df250",
"assets/assets/quran/Image474.png": "3bdf0802be1c39c4368c90d722d41a79",
"assets/assets/quran/Image434.png": "fb7e2b834b3c0c0e159cf7724f279bdc",
"assets/assets/quran/Image465.png": "54214e7b9824102d66d38fa088b61043",
"assets/assets/quran/Image213.png": "3b2a60d88e4c3bce8402d58657f1d593",
"assets/assets/quran/Image424.png": "5cf1f8861556f1d58c7a9e6a79012509",
"assets/assets/quran/Image425.png": "26ea437d34f95e32e52fe9cb12ce9f61",
"assets/assets/quran/Image303.png": "ad045b4789bd86bf39001fea78d810a1",
"assets/assets/quran/Image492.png": "9e191a290233c0131c8fc0b06ccfba4a",
"assets/assets/quran/Image182.png": "52e00c6a61f993c62c7c4486d89c9e03",
"assets/assets/quran/Image311.png": "a3c1cdc2227c4489b40ca37809bb24c2",
"assets/assets/quran/Image310.png": "f8a65e27c843383c9aea7bda1c5e6e85",
"assets/assets/quran/Image481.png": "7e1516c3bb507d5638cf32fbd0a96675",
"assets/assets/quran/Image561.png": "00453b54cfc23fe063cd387fc324c259",
"assets/assets/quran/Image172.png": "d8c38b3b4cded88601d3fd010858783e",
"assets/assets/quran/Image592.png": "4f703bd827ff763e55c23ed3a5a4ed1d",
"assets/assets/quran/Image361.png": "ce0535fcc0d93355d153ed72750adaff",
"assets/assets/quran/Image145.png": "199e2f11b82fb0c5656086e7b6c7ecb8",
"assets/assets/quran/Image371.png": "8e803b0020754f32c9f14e31bfd72cd0",
"assets/assets/quran/Image436.png": "15633302257583041918c56d11796f99",
"assets/assets/quran/Image443.png": "f431135bcfbd84ad782bd6bc2af46288",
"assets/assets/quran/Image163.png": "e14a304e1254051f2e459da25b222290",
"assets/assets/quran/Image355.png": "d554c641afdaa599f0c5f8cc29b366bd",
"assets/assets/quran/Image468.png": "db508b74d4a75bdbec68c3aca39206b4",
"assets/assets/quran/Image451.png": "bcbbecced4dbf4b653c736267e6e3991",
"assets/assets/quran/Image493.png": "7f305b151cde115c55c59947bf88b3de",
"assets/assets/quran/Image457.png": "89e19a1385fdc6fc19f759619cd44216",
"assets/assets/quran/Image154.png": "626d780edfc845a2504e7cf5d32dc722",
"assets/assets/quran/Image590.png": "7a8df5a85357a3ef373be4ce78408aa2",
"assets/assets/quran/Image387.png": "ffbf5aa6a522b0aabe08240977d9c378",
"assets/assets/quran/Image477.png": "f5bba858156146056edcaa4b9c8a2422",
"assets/assets/quran/Image591.png": "f7d0a5a0eb55c20ae25947f5b119f37c",
"assets/assets/quran/Image433.png": "39b787f2508aeaeaff22e68af874923c",
"assets/assets/quran/Image277.png": "516fbf5600fb38a0aac1fdb3c2cdf17f",
"assets/assets/quran/Image478.png": "a7d6a5b15eb98d1dab657616295a1110",
"assets/assets/quran/Image137.png": "790eb3d53e3ac826851cfe916db8f42c",
"assets/assets/quran/Image467.png": "84009a7208ee42df245345350c6044bf",
"assets/assets/quran/Image266.png": "f09f02838aafea7213ae2be939aed14f",
"assets/assets/quran/Image138.png": "a212a7dd8288cff43da68ac515de8c04",
"assets/assets/quran/Image146.png": "266610e573f616d115d654fff08e512b",
"assets/assets/quran/Image480.png": "69402d777fe68824bb8f9c376156a007",
"assets/assets/quran/Image147.png": "3a08bd6ca34eecd8477ecb7047de19c0",
"assets/assets/quran/Image445.png": "8652c8f98b8bbb794428d1a6207f5e5a",
"assets/AssetManifest.bin": "e4caa8f8abcdc5b6b9576cf8492c9e8b",
"assets/AssetManifest.bin.json": "59bb2d069c69128b24b83f41139c8d5d",
"index.html": "01160b8f92ac304770e93d8b9ac1809b",
"/": "01160b8f92ac304770e93d8b9ac1809b",
"manifest.json": "6669214e0f5e26be2852aa76ae280ca7",
"main.dart.js": "a1b0dd4d7fbea361de2ffe0e4fa164e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
