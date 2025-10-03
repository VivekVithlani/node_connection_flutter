'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4556d43feda29835e6ecad9c2fd363e4",
"icons/Icon-maskable-512.png": "c4e987b7f2503f8e534a126244dee229",
"icons/Icon-512.png": "71203d5350390cbeadbb1973f72c6b0b",
"icons/Icon-maskable-192.png": "eabdffdc8240eef486cde8165030805a",
"icons/Icon-192.png": "dadf1733217ea2bc941c45aa142e41f3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"manifest.json": "33c8abb6997d3dd25e0c0fdfb353acf4",
"assets/AssetManifest.bin.json": "da7fb445d2e73e9d2d71375cc6ae7388",
"assets/fonts/MaterialIcons-Regular.otf": "339914aa42aa213ab1b814070891aa26",
"assets/packages/rive_animated_icon/assets/icons1.riv": "7f23a53d34a2b43b6dd551465d9f71a6",
"assets/packages/rive_animated_icon/assets/icons2.riv": "054611cd990d48b0415acc0def8b2064",
"assets/packages/rive_animated_icon/assets/icons3.riv": "0427231b1a0b147fef274cff2eff1f43",
"assets/packages/rive_animated_icon/assets/icons4.riv": "e1e065954b82deb7cacefaad8499880c",
"assets/packages/unicons/icons/UniconsLine.ttf": "23ff57b05b96cefb4447b906201860f2",
"assets/packages/unicons/icons/UniconsSolid.ttf": "f3a124c72d47ea34b70524c8aa28828c",
"assets/packages/unicons/icons/UniconsThinline.ttf": "d6a6c3136a9d732bbf77adabfc7193e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dd6c14adee7cc53c9dd5cbc35066b81d",
"assets/AssetManifest.json": "8ae5126c9e7607b664ca9250d33d0790",
"assets/AssetManifest.bin": "a7ba1717732fb9067eff9bc5530acab8",
"assets/NOTICES": "4780cb409f45e2b3ed7f2ffe21f4794b",
"assets/assets/config/api_config_dev.json": "760d5fcc834693a8ffd7b4572ac9a725",
"assets/assets/config/api_config.json": "6a5eeb8f0e242ef3cee97547b6dfb2f1",
"assets/assets/images/ai_call_flow.png": "7a2274dac10e7a9cba6679e61abb947f",
"assets/assets/images/ringplan.png": "6b1e1455f91dcb6fa598309881cfe7e9",
"assets/assets/images/ai_agent_callflow_banner.jpg": "0b157a6b361b7d444c492b8c7624f8f2",
"assets/assets/time_zone_list.json": "aba12de7582b270e4ad2ad1234235318",
"assets/assets/lottie/ai_robot.lottie": "1a725077b124d044c324bf7958010d6d",
"assets/assets/lottie/ai_robot.json": "6b5f3698eb3931fef2802f3319efdc04",
"assets/assets/lottie/ai_twinkle_loading.json": "bb1e6bc1ed5de074ee4b3dd3cfa23037",
"assets/assets/lottie/project_evolution_steps.json": "440609572ae8e5b609115176e88c0043",
"index.html": "2299f851b71e54820a3556347252edff",
"/": "2299f851b71e54820a3556347252edff",
"README.md": "db947f8694fe4b29d8f8336dc9808734",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
".git/COMMIT_EDITMSG": "49d2b38d4dafad965ce7d26f7ed6acee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "df720067e76c4ec45959f00dd1562e80",
".git/logs/refs/remotes/origin/main": "e2f34d39348901c1ddff306d7aff6d2c",
".git/logs/refs/heads/main": "edc1d7deb8be57fc3f2755775a3a2014",
".git/ORIG_HEAD": "b3b87020851aa969c6296ad691122998",
".git/config": "568e0816bd1b7eafe4a59e6525a6aaa2",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/objects/7c/8232b7f9e483ea804a9107a995f121d8929fef": "608a37b62a80f606f88a3b682b0bb2cd",
".git/objects/be/107b3ea32d4c0781ef7a6c8a864e2c8bc32f04": "5ccbe9ae3d8c90a73a6107378caa64e5",
".git/objects/be/10f13067bf6f62390a85fd8876807db759225d": "5e840dcae42acd68888c668000638ce4",
".git/objects/15/77d6bc6805068748f1fc2818173e5971fba35a": "8fe69d7f087483fe07eb90e623039d61",
".git/objects/76/51906f0daec17aa91a5babd75177e2a8d171d1": "ac1187ec376f3555ef8eddac1393aabf",
".git/objects/76/63b6a0d4aba277c7f83cc7db9f2d64545aed6d": "257dfab1862fc07d90c8aa59bd8e183a",
".git/objects/76/6f609b89f06df149481180e7a1670c3e7b3909": "f4637be010b4357600c52f546b2a27fb",
".git/objects/ef/694e490449bbb9b962260d648bd6847466b063": "35c12df13aa512efd3a83aab2133e288",
".git/objects/ef/e428994ceea6eab829e1c0a7cc50cd469376c4": "fc87058f986f9aa9b4c0f53e99c1b96f",
".git/objects/2e/dcdbee55c4f6e82743f947db29438333435efb": "07d82f664dba27ff18429ff0a1142398",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/df/c3e2c37c03e477ac27f888132fc877127f0008": "bf02b93ca402d46aedb3fa588f90a9a6",
".git/objects/df/ebc60fe2e52775451625a0273aa5b4212a4245": "660dfcfcab28d6c04f3dd0237a549a8c",
".git/objects/52/3a609f838fd798465d9808a3f9a5c4890caa17": "3f8742db7066d8df623728d6080211dc",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/05/3059e37f0c9ce69e388086912dc4c464b8cb6b": "a09b9feff21c9325ce755656ec324cb5",
".git/objects/10/d6e684a6e039dd70df3effb425193589ed7684": "c1ccc7483d2945734f36ab665151ce8d",
".git/objects/09/e0b8f40ad91a51ecf40778eb29c769db3ade6e": "30c1fdce6058c3cd0b2922373d202e37",
".git/objects/11/137ac6550d67d7fae382a448618b33c45572c7": "471cb03e438b308e439c957ee498e0aa",
".git/objects/11/6e5d8facc2b66a31bc190735951221603fda60": "51d1d06bc883064ab4d81ac57da9c22e",
".git/objects/a1/96815d324585c1936cb0520345ebb10e0ef9ed": "30d70818e757ee9b55f5a5b2973342d7",
".git/objects/a1/874a6c4ade2dfc24e1e7e22a3fb495345d630a": "bc15d4c6cf5f3d3f616fe9ba4a3d2b9f",
".git/objects/9f/d7115221e3ed18453edfafc180514ad0e6b10b": "83d9b09ad2594ee0e758c40a10104346",
".git/objects/9f/26ef454b1c0b7c687fb26019c50574472f5fbb": "10978f488ae4a67ba1290e002f0a9331",
".git/objects/63/44cca4c382d66e674950ccfd0866b6374abf50": "f8aff957f54f6945b3f20bbc1f35d8a2",
".git/objects/e5/276e6cda5cb99b63e014818acfde753bb7e19a": "33a2cf65e685f43b8b94ca9a317cf92c",
".git/objects/d5/47794e2b1c4e4b137574914e32da8134b69e37": "03459937f7229dacf929ef372f15e91b",
".git/objects/49/73a208ff5ce2516ddf93fcf2a70651076a0c1d": "214f6fd92a0bcc2b1c88ab028b3b7c39",
".git/objects/89/2788b6512cf936595e508e880837f102f2063e": "3d455648dcf5ce7cc01b234d684d9066",
".git/objects/81/1e7816c950540a1c604df80761223c32c0fd5d": "52f96dc3acaef2cae9a639fe09283285",
".git/objects/81/74b9b00ca2f4c15bd00ec07d6e48e0cd0cf95c": "7cf73793964b35aa9c0ed487b199d0be",
".git/objects/b3/d8fe041a6e5296d75a93dadb6dbb60ac9285d3": "f37ea3074fbf4e77add1461d64d24569",
".git/objects/14/6ad8d9cd22b7635cf320ee9944a5c0d7739d59": "d7fdbce7a71aafde0bb1ed29f53231aa",
".git/objects/14/e05fba2cba09f37932ef0ca09716a067ae5bfa": "07367c1376984f53cd901fbc3c571662",
".git/objects/a8/ece8d41fda13e82ca49093f9f2b6fe8d1d7210": "c26286f857e54da2dd94f887bd5f4432",
".git/objects/17/0f6f4ef66e12bbb49c442d6c271054edd10251": "1fd258e2a758cb3f44571cd503d7f12c",
".git/objects/4e/c5bddfe93dfd2f40bf3e28b1e346a8c5f8648c": "165d2ac257cd8ef903224377ec56c130",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/64/66f19ea756c161455ecf7cb0f9ab530fd4a88f": "a90d42281262806684f4817e44e708bd",
".git/objects/54/0d27c78f38b886c7248eda018ff788e9b1a77c": "e0944b459ac8ff8969fbabf9bd9bb798",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/55/e14ea8f798ad60c7a89b139a43a18a429ef24b": "7bcdf74cbc5ef1922cef3e52502646b0",
".git/objects/55/31feeedda5751c642513c7a0cb0d35dd6505c4": "41c87e6799fbfac5caf7d332618eb01e",
".git/objects/da/1cdb188522575e39574499185c0c5f92f7f433": "3f8f93f8444aebd8f9b65a092200a139",
".git/objects/79/45a7b417f8d783a82b8de7a5a246c0533dfa5e": "7195b012a0709f64d4871ace91463824",
".git/objects/80/3b1225b28945fbae929ed0cfef66a16e0d21f2": "13905268996b6c962e9bb2e4a29b75d9",
".git/objects/ff/a2641fa9d2f8061534961edd9bf9d4c56adad1": "43103d284db11998ab1cb71ff596735b",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/f461bc37db2901ec2317da11f20846c1705414": "5968b07eaff82f4eeb699f794a319fb7",
".git/objects/66/b9857e453abbe5a050d917aa6f551e355bb714": "2d72f7f38ccfa9374df4cb2bbf977522",
".git/objects/84/c4ebd6f34676a20e471d2b0004bf2ba996b5aa": "eb6e5605d06addff8eb4460c361641a5",
".git/objects/84/7db4620ca27eef11cae21fb5f38be435251678": "9f3fe6b8b7f88d16871dc8cce9cc6053",
".git/objects/38/ecf0502c3f2014d731026259015f20bce9afe8": "3beeb56880c9250822adb55272192380",
".git/objects/a9/e7b038a1e3ba15dbf2d26d62228acd866b5a15": "1c0bfd972b60831e07e8355ee5bb1586",
".git/objects/45/c8bebdc13b590b9dac39fef03f0454003a894c": "5704c874ab2afcb7483bf208cc284814",
".git/objects/04/71b13a9f8c31b19c3e8766349bdf055b60f1a9": "a0d01a814a52a25a2b15a471699d7e4f",
".git/objects/04/a9000677fa0dec6fe965aa1198ea9ac490216f": "60bb434a31ff105ec89ea30d046858a0",
".git/objects/08/c35beaaa58b1bcdee1e919a9947ed31ed42ff7": "c8584ac160b2b19567abc096e088074a",
".git/objects/08/e9676869458fe5f8c29354c2681c77f4a773cc": "84f62ccc3fb5bb29aef6e98121b83a00",
".git/objects/28/e1373753b48337ef7e4e8056548715e62ed4f4": "ca56ec21e995100d8d9061416a3d43d2",
".git/objects/51/79c05e12864f595beb4163b74faf8301eebbf4": "c5b8f149921fa6a33d4cd15b23c76be4",
".git/objects/37/6d7d5122d34adcb2352b499530501729f91662": "ceab1a64c427a22e7ca89ef56c652b0b",
".git/objects/8c/4122a3b7e3fed1a0b5c8176f47b2292bd9935b": "4263a0247f17a419c8e8ddd23d73a921",
".git/objects/96/cad184702ebccd94cae1796a1e39bb3b8c62b5": "3cc3952c101aa9d5f7e423a3a1abc9c7",
".git/objects/ea/d49fb5113e0cbb3282104a5625c128b4bb80bf": "5ad547ef6b9a364fdf37102fff68260f",
".git/objects/9d/835910c4e37e8e245fe59e7f6f05ac378b488f": "09b913bf75f8c0d181f66a395c161575",
".git/objects/f6/e9fc9d5af3262b70f0bb9bfff3f749afdc2fc8": "bef6d49132560876bc95f023daaff98c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/bd/6cf28a29927667e5bd8e871ef795f0ca8afea1": "f0739dec1a0b23370816e30965b35b59",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/99/615526a1e7fee4f682468661ba5c9a8d1c6364": "578396ee04aa718244a8d95be87de830",
".git/objects/77/24737de088b629bbeb1b7c8309262d6a514780": "edfee6b11727b269265b76948f31acab",
".git/objects/77/60cbc5718025859e55f665077fa0fa77bc21e0": "35c055290dd1b1ead72f2b312faf8cb0",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0c/216f23dd41c67840d2d5dc0624b3ac65805ec1": "bdd94aa4e6ef7b9aba8ea754fd96570d",
".git/objects/0c/c4ff2f7710116286144d0916277b0b58558a1c": "e460604703a451992d7ea26102afadc7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/06/eb9da8dee49fe84ec905d3c4e31c8720d58c91": "27ff256b7dcb6b5997239a309182bde9",
".git/objects/b8/840eb4effb6bfe1811e4f31fb9fdffa86afaed": "7182d85f757566175d992c0901d9e98b",
".git/objects/3a/4fe46d2e6e58fd76b43210fe990c3fcc5a780f": "00e7bd690cd6da370c75fb7699aee360",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/bc/721a1868be02e6b6ba494ba82944b4f68f0c17": "48151b7abbe78d0403ac3db17711716f",
".git/objects/d9/83623d3480bc6fbaa3305c4c09ab7e26a34684": "4aab215583fc5a3554e082ec061970b5",
".git/objects/d9/982e73e090b1f7b8f52fef967781f972958f3f": "6f1a5fe90f41d715f96109933e7e0c1b",
".git/objects/a0/b494ea2bd99feecaa53f753956e316770e6967": "e4ed776d72aed5621939088a6999d000",
".git/objects/fd/ace31439020ba97dcddbe373e22d803ee4e12e": "a815924d89224fe4e9b6d380c5b304ba",
".git/objects/fa/42f5a94ba1597cc4e109aee870f7195026a4be": "8fa613efc81cddfde60c2df658406177",
".git/objects/56/331545d0b57bdbabeb5548c3ec6f3f7ae8cf5e": "e28a7d9701c3c14ef2c0e63d896b543d",
".git/objects/56/22d271a21689811a9648c27f6f32a5c3c5d8e4": "8e649795328e75bf3c7f9de83ecf6e49",
".git/objects/d0/bb645dc2b2cb50e62ca3d6899c7017d45aac83": "9a77c296801bb5ad769ca54680fbe271",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/b9/8d0b01ff553445c65706922481824298bcabae": "a8e9c15eda9a68bda6367f72478be120",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/58/2a76068bf56c9a711deeb26dc7dc3fc3843b69": "be481377c1ee8fa85605304d63f2f01c",
".git/objects/e6/ad8a663f3d03a5c8ffca5aaaa1cd4fa941debb": "89723c9cfe52ba1e2760d1a91f76ea0b",
".git/objects/ee/0202a84f525ee07b01e641dd26e767699eb00d": "82416d0a4ab4f7cba6209a457af19fd3",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/70/99beed4518bbcae67779adb7adc2fbf23845cf": "a8341be287450e6bd4970aac00307d14",
".git/objects/26/6009634f2a68f5ed966ac97d283e02ca33f069": "8f7a7b51785502847dad3018fcd7fba2",
".git/objects/26/5b5fc68c31184db46bff5ac7c05d2316367b2b": "464bc62897051a1fa05239bfcd7e8875",
".git/objects/90/907ff6fce3909c853c2d246a9420f83f8cabc4": "c06ad2ea5051808ddb97aba3ed53e19c",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/07/550bfcd72376ba415fa8953238018673e7a7cf": "8354db11c689fcc83b28c0db850c346b",
".git/objects/50/cb75d45c002af94dec28b09b6cb9c3f5f84f65": "8791df1bd171305a840166b46ceac73b",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/74/eb5c5bea7babb5c91ec59f702d40efc73b3689": "92a1b19bbb6b23df63c4b749f8333412",
".git/objects/74/a3cd77527bc145a48f3bd4bafd7e49b8be7a0a": "446165d76d9ffc1a0719377370bac472",
".git/objects/ce/637412e8aec36545bd956e32372bcd74c3eab8": "8de5754bd4b41ffd809d8f2d46b652ab",
".git/objects/ce/f7d9f82c35d3b5d592c42f3ab44d0413842fe2": "a0d10604d616955adcd72aa2bc3bfff4",
".git/objects/6a/f0ebcb559acb4083935bef068ded26ca9505fa": "225292137074dd8176c99637eee84eb1",
".git/objects/6e/0f77c99d3e05b3d967e556da622a2b15246c76": "8845f16483a15533163fc370a3f700a5",
".git/objects/6e/048be749658e40659ddb30b99665fb72a930e1": "87c42f9f48ded83fc15d951d27378ab9",
".git/objects/3d/65b9d2f982457310a519230429a2e9c2af1341": "6a1a78c3771ca5bda27ca95d97fb4693",
".git/objects/7e/50bb3d2d01a524ecc59b87261a080913e30379": "da11907f528193d13fcf8a4e6454244b",
".git/objects/7b/1eb46973d9d4b6a053b9d9b9ad97efb12cb3c4": "20a1ccded144f1f59fb2358260eba385",
".git/objects/32/0ab2a15646ef54f86574a6c58746688abd2eb6": "7d7fcd95196bd862fea269e692ad54a9",
".git/objects/db/63c3a9574a48dc0cfcbc62e1ea8b2c22c49cea": "4a2852b3c24e51b13dd8a0933c52ba80",
".git/objects/db/10d733e2335672983411cde11bb70a66483e18": "d54688222d69f526439ab99dde70e1e5",
".git/objects/db/813dcb8b410d39921a87c4d9d120bb3deba976": "c26a81009015ddb486cdd6a8297e646e",
".git/objects/4b/1811236f8643d4fb11cbe09e199a208bce1f01": "de27cd9ba09809c32c11fea3135f1fac",
".git/objects/85/96f3ca4126ea201b011d624346c190bfa2983b": "73470c3ff043750faffa4282c8bddfb0",
".git/objects/ba/ca60db3ba61696fbf0ce268448ba2ac0e89a7c": "077584db03481314f541f28601668a73",
".git/index": "416f72708fc95dab531b84630b711f7a",
".git/refs/remotes/origin/main": "686c191306ecbcb19fc1e02917fccd47",
".git/refs/heads/main": "686c191306ecbcb19fc1e02917fccd47",
".git/FETCH_HEAD": "2f6f0abc0e7fbbe3c3c11bd685003c68",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutter_bootstrap.js": "d7a2b56219fd44b7a899735e59d78be3",
"main.dart.js": "2ffb3be45be2fb76be9d53c483b23e63"};
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
