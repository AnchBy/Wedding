'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2737b49252e2a4c0fe4c342e92b13285",
".git/config": "cbae7dbc8918a6f16eab34a76600b44c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eb53863dd402d374434f0fc55d198387",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c4f66b8abfc7be44c9b56b050c2f8e2c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34fee5691af1d77fb6e7eb8eded3bb10",
".git/logs/refs/heads/gh-pages": "34fee5691af1d77fb6e7eb8eded3bb10",
".git/logs/refs/remotes/origin/gh-pages": "55af4cbc486ead6c181075d42337d117",
".git/logs/refs/remotes/origin/HEAD": "7a66019c330c2cef3af0beb331855bfc",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/17abcb69589c69cfbceb58f4f53d5ceff8e4a5": "66c69bedde84425778153fda0097a3e5",
".git/objects/08/648138f35d75f5ea561b523aa65cfe2bde5ad1": "727697dee4525849f03b7a614b161723",
".git/objects/0b/3c3eb4cb0bd777bfd07f3f49554d441e02fcaf": "d8955d0691af96a3cb0c328e735f7fa5",
".git/objects/0c/6e3af5f6313c11ad667086f4e3e38a0f72d1aa": "22a9059474ced18c3eca3837736600d2",
".git/objects/0c/92e0ddc193dacacfab565234f832e489878a4f": "328757f7f35de76f2093feff64b777e0",
".git/objects/0d/e72d3e045b7ea09e0e19ba144c75d92fbb01e8": "739d6c2a408d356d6cf63031d0f034d1",
".git/objects/0d/edb896fb191543e70713bea3fa566ffadb1adc": "5e8e3641e581c7c0105cc131714740eb",
".git/objects/10/41bb68168c4a5e52e5c5be7d5e01e6044cd6e6": "2e06cfac29814393d26a77081228a505",
".git/objects/10/a88ba6301ffd2f2fccea4f08ab42d8a9b2d2eb": "3694a07683cabdc6586c3be64b0db668",
".git/objects/11/5a2ed64ea0d47368f7c2ec508a249014878380": "01f06411b63a369a89fd82826b9e7bc1",
".git/objects/17/3460cee36526e2849be03e1bc017c901477d05": "8e41fce13c439d39d9ac1d36beca05da",
".git/objects/1c/99fc7ee9e92cfcf10a8dd49f8951c50b2a6459": "8c12a84729f801a3679be0ea1b2eee8f",
".git/objects/1e/7c6d77167a7b5eea0b871431d733c29cae543f": "86dcf9c915ba9c327a7e69534c254f61",
".git/objects/1f/54a46b60750f9c526f8b433e123bda452737b3": "942fc89496b2f6cf8bf4eeeb393cf0fe",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/a8f925487ed7a2d3a6b0d784487e56cb42e733": "e21fb48241db2c7c7c01a5750d2ab2e8",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/7b5f4bd708b5abd850af34f07b1c705a110a32": "ba64b1a8fb83b335d11398517dbf965b",
".git/objects/2f/be4802dfc6d408a7627ddd3482c983a59f52b9": "cb58da3b3da43daf7e34078d08dea731",
".git/objects/31/7d589d798dcf7763a2d14485ce4fce62d38820": "bac3ef0f6b7251207446835f5cd1e697",
".git/objects/32/dd2ca64ac4cb0402016294de72bd8b565721cc": "8781b42b9dba455534f99783f59b328d",
".git/objects/33/cdb38beefb41f59b54bfbd7ba2be1e4c8a0fa3": "5182c4c0804acda296c895f3819b6186",
".git/objects/34/1e329a542767acfebd9e6b747aa8813cf94f6f": "36bb25b1975ea99bfb090c583cafa29d",
".git/objects/34/b364706f3ab6c57c1d172ab74b0f6caa8bfed4": "3e7496c9c19016d46f6e3608721796c8",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/902a24924e9de8d4739230e557f9d69298e6d8": "8037485e489b8f55cbd8cb71613b4bd0",
".git/objects/3f/95ae4cf883df186c4d13bba0954c09910660aa": "ecfb8a7f2cf754bf3a247601f91cbd83",
".git/objects/41/e1b904d24c2cb85947f87d4e8c1a8786378d65": "7dfbab643683fc13247275a2943c252f",
".git/objects/43/1dfc294c45eb09c030e840b653d26843bdd748": "80bd8bae5d7ba51831d673c4dc9b8943",
".git/objects/44/9182966bef1267094fba02cca4f9b712a67212": "a8a2b0a5dafc1e8264109704749b614f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/11dbab3a61241b47e6f1f87a65f696979bb06c": "ad77850198a44d50e46105abe987e29d",
".git/objects/47/1b8d0ee99a9e285028bc21ceffbab1de1b949d": "34b352b484b08a5d569248b9622264c9",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/4a567edc76c0c241649729f7bdfc5487791bdd": "df6df4c5d7e5d548bc1006501242a659",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/0e0119cabe9fe2ef3603ca7fee20052521eb47": "4a3dd67164ca3c14f54da2bea53825cf",
".git/objects/51/44929f70da73d59c088f2c409d3957dab3ab3a": "f8544410dd744c9b104c4161b35b7038",
".git/objects/56/1515ea125df2fdafbdb5947423883408f5ce9e": "a5c4d65ad61e243d24345d34e39698fc",
".git/objects/57/ec9db5f6032149f62037904a588b859fb33616": "76c81133dc1aee02dfa5b6634008eae4",
".git/objects/59/9f5f54cf0d39966a961bc6d83b02912ae0cf94": "9939fab7f33eb03c3e5bacd8491f04b3",
".git/objects/5b/c21d1a39a96c5a60d03ca5e2c02215e2ce0fc7": "daccc04e4c0007098a7f6b5da082dca2",
".git/objects/5d/cc396bbde494a2afa1d8f34b8e4c2577172c33": "42467ec89c0ca6c3cc91851d117019e3",
".git/objects/60/95ff438a9944005d8ab632d806f8a5d49adaac": "10a8cc47a136bdeaf1b660509721de65",
".git/objects/60/d165188a920d24d7ee5f7748fa42d3eda7eea2": "a8c1d6b9efd50bef253e0c8203eec8ca",
".git/objects/62/803084005bb45822707735063c69563cb1b7b8": "1d8db7872a649c697c6eff3fad940aa2",
".git/objects/65/d4940a014e93629b1c5121afaa2004ca44e021": "4383f89bc41d26bdd4a1118a08ca6de2",
".git/objects/67/8663bb7557ab61b13030036c1886f4c1aa88a4": "f8595f4975a532be923311bbccfb0b44",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/a11b0dcc81df35de6466351ebf5f911f10ebe0": "733551021e62d9f5157338054853c768",
".git/objects/6c/283f9e2a3c22f981f6726d8a9c2057461c757a": "6784d1be6567894f3e0bab9df1f58949",
".git/objects/73/135dde083280336f05b8517483b7283e8017d8": "b55900d976bd2b8bccce170ef3d19bd6",
".git/objects/79/85c317cec40f2c039c4c5b9dfe04a133c5240d": "405b5e9534135d733d0667b029eaffad",
".git/objects/79/e5fc4eeb1ad26ae3d8141af6d006cfc0954ba0": "75440710401c2f27dc78027d31dc14e4",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/b89e14d26b6a6dde2cfc093ccc22de67971b33": "ecaa6ae6947aebd432671f8a3048d85a",
".git/objects/7d/5483d617eafd311941a3ae15d348f0861ac7fb": "a9a8f31b8d1fdc3f8e8ff31c74cd3b40",
".git/objects/82/13842686a53a79786d8b99363a2eeae92bc782": "ef3386aaefa6d2cea0ea2c38f1901043",
".git/objects/83/2287fcf9f069cbea1163e2f90e4417eab92999": "09e1820f644aeb6557011e0f17fdcc4e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bea8bcb9807c23920b102fe27dc561f316c320": "16c5cd4c450c2d4ee384b3c0d959ecc4",
".git/objects/8b/73658b0bd9942bb3d254b50dac43edb87c6910": "364089c80252d627073564e37323bc0e",
".git/objects/8d/7fc7cb8afe35c079bb6c81435702a229dc8106": "9ec940e773554296b5ca6ffa8dc8d745",
".git/objects/91/2965600fd30644e6cfbcfa4a8227c43bf18122": "19726c05d0261a98fc2c107ba6a868e9",
".git/objects/92/b5d6b5f2c1bb7fe93bd1c68bb8516b43a71f11": "0e0cdfc4374ec01410a74ad8bf90887b",
".git/objects/94/992ac0c1d4f7f5053e108008350d3384cfca2b": "c1d33c2b3235ab1b6a28a4c31384ac5a",
".git/objects/95/189dd1e3490448b7629ea066dc9cbbd329f60d": "48195467c3705538bf7a27269e7452f3",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/8f4a746152c13fbfc10e6437b549ae39ecca25": "56473f22d0c934f38e9d097dc8391f3f",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a1/898d1a974c24e4a089941e8b0eb9ebcc6f164f": "7862d6c74edc77beff116264dc261d94",
".git/objects/a1/8d069962cb518d4d2a5dae7dc15d2690ca0c30": "fd41c68012234b6122ea8f1282346fd4",
".git/objects/a2/6b5b620a7df13dd9e6187828e71974896d8f73": "1097d31395b3bf575240d09bcb7f1095",
".git/objects/a2/f8b1e2930424bf840ea5ef3b0070dda1aa0791": "ab86b4a9cc3847c0db6e20e26e7fbc7c",
".git/objects/aa/829d0159543f2623ccbdc0fcf1de31a40a2cb8": "e664ec02360d9727d05ffdc62aa5e124",
".git/objects/ab/0c9a7973327d7add0952150feb3bcd31d45620": "a879da65d2d83d330b5e99863404f8cb",
".git/objects/ad/405af3336e28effeaca623cd9e62d73797d6eb": "604f01c5e03aa49b96c029a91ef01389",
".git/objects/ad/d6e6bb567ce67c1286f4961f8a8d5cf9cb0ed3": "2bdcb7151e37b68bb02d22c4b9b95bc6",
".git/objects/ae/609c90c9e67f687eb964d2237f7c1f4113f396": "3fa95473877b94b0344aa7aefec14c5d",
".git/objects/b0/cacc4f27a42f38340587b96b2b7007a2f1c179": "d9e053a06a6654654b8f5ec27dc18cf2",
".git/objects/b2/6862f9548e93efabdcec7125a784ada2348c10": "4313efe244cb610d663cc705eb9ca813",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fdbcafac811491acd9e01d1a9d43617f78cd2f": "22ae1be9ea9c13b2e5ebd1cb1652df66",
".git/objects/bc/bf2839fc7704ef06d3265ab0fc5b5ba3bd5573": "b6e56844a4cc341b57c876c1bb89ce53",
".git/objects/bf/7d89f78dd5ebd55088125d512114e9cf1645a6": "089baefd2630b97f032ec492f94f02a0",
".git/objects/c3/0906887f9e432c2e7f9eed734ebbaa31d622f4": "cda1b571d69a6c8f4f654c58dfa8c607",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/e634677a128ad85cc62b5e04195b5f47aedff3": "e3983212a2d1f8092d5f7da601030bc1",
".git/objects/c8/9170425b0ce67e31b1db1d6c1adb3c8691c215": "367f59f4177c884a9393956054701d55",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/8641697837b8db5c6fd88509f79552f4756f3d": "175341c3cce1257da5b9c4797af15e6f",
".git/objects/d3/01972fc12873a488a7bcf7bebb734ba96f0685": "7e1802381bc69f3e0405b0352850649a",
".git/objects/d3/69052d7c86efc8c529aca267890eb4c898d6f9": "4668d268603f7364018ba91cc3c10823",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/8e5678d4580e2dbe410f9d0f5ff68c6c7bd793": "e5882ca946660a15663da77599dc3ee7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/7fef4be36e4db633412ca96842bd13f3eb992b": "4677ff3d09bc6a41b865e3ce791199c9",
".git/objects/dc/419e50c2f6b3cc8299eac1f9241bd2f34418df": "c6f1eb0e76e12d04976ddbcc03a65537",
".git/objects/dc/d594883ef80cf5463cea2882c0ebe16bedc3f0": "2b3b439e4fa6aa5cbce4ff74e692a55d",
".git/objects/dd/4fb317cb2c5ff97e305f6ca3baacd8a843e6cc": "25ed4a483ac16a6071cb605cd1d7e3e8",
".git/objects/de/37069735660a96de825f916efaeef6e760afc7": "3a34c7a6b05f820036782446bee0d9a2",
".git/objects/de/7f1dccfad855112459bd26417ef097f270bbce": "def40739d5dbb1bb6c8cd72a716fd49c",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/ebc4603ca23432a643c181eeeed4b8c767f715": "3df105cfde5b4fc44a92343a9f44be93",
".git/objects/e6/689a3f1210ba1d1a625dba69350079a6973caf": "818cfbdb60361f452360cedcbd8abfee",
".git/objects/e8/064232b72cc3bbe14f6335a211327200ca8ea7": "5e1a9c06425745a3bb5c3f9d77c305f2",
".git/objects/e8/b43047b7eb965d44103e38427f4110fb862846": "ae53d6b25e24521aab9f95285825c6fa",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/ba528fe0ac4bbc0ebdcfab9efcd06ffc3d0299": "6260ca450f258f532b2f00288c0564d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/1fe32cd17e5687ac635b90e07ab38fc236ef85": "589eab18e7f23cc5e0dc8c6369a3d8d5",
".git/objects/ef/b63909a8714b40b478ea982212f66ecf62b8e9": "3e20d275ee62e42fd1e0cdd9fb866378",
".git/objects/f0/a46ed6d6138190bfacfab9c7bdf3b8966bb16a": "b26a8d1bd07cdb581049cc5f27b6b65a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/ab0dab389fc47044897b8ea1343ef316d47558": "a87bca0851b7a57bc84f549d5d626c02",
".git/objects/f9/ee901bf48cfef050dc0de3b1517cf5355f6040": "d48d5b831124c84094ed7688f6e4503a",
".git/objects/fa/2b719d56699412d2e52bf119e3e470add36271": "09f20b80b8622b60bc64d258ab23cc6c",
".git/objects/fa/65715e092d0fa171ebf8c28b8692ecfbd798f0": "0bf8eb61eeee8455fc65be3c8554be57",
".git/objects/fd/35ccdd64ca7fdeac15cf1bdab62c5e0cdca69b": "844d00303a8fa050a367709fa26334d6",
".git/objects/fd/8d9ef5f33b9a4565889e29ae3c86129b8b8d25": "b439bcc0dc6a807428355816c5d4e491",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/57c60b2faab853318ac6a9229ae38f00677d5b": "46355e6f90cdece2c515429b4ce63607",
".git/objects/fe/8dddf25ff43c32d3dc1e3da383b58f45ac6c8e": "93452416eab047ddc55436143e719343",
".git/objects/ff/a8468fd546803e5ef27f1cb6ba1431484eab42": "030eecf64ebb61a94dddf2a59dcfbe3a",
".git/refs/heads/gh-pages": "65a34e7ec76ef8a3418e852b2015f7f1",
".git/refs/remotes/origin/gh-pages": "65a34e7ec76ef8a3418e852b2015f7f1",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
"assets/AssetManifest.bin": "02bbcbb729082e988c3fbb5c940dbd4a",
"assets/AssetManifest.bin.json": "7b588750635d0263f509e9a535fe742a",
"assets/AssetManifest.json": "fda62aee39453a443a8a6cfe5d67aea7",
"assets/assets/fonts/Bad_Script/BadScript-Regular.ttf": "2820f94ce1c15259bdde8c0b1bcc0973",
"assets/assets/images/1.jpg": "6a30c7799b44acb58d3031c02d0f6ec4",
"assets/assets/images/2.jpg": "c04c9876d91e030388126789d40bd540",
"assets/assets/images/3.jpg": "d4a73d7465c8473d3e31f48ce89a2414",
"assets/assets/images/4.jpg": "e38ebaf06328149e8f7d23703f8138dd",
"assets/assets/images/b2.jpg": "dfc01632e9494affeae15f862d573d9d",
"assets/assets/sounds/bg_musik.mp3": "d1536cc71cd792c67b3fa7883d1babe3",
"assets/assets/sounds/wedding.mp3": "3127f1a1086b86bfab4ccbecc4c97ac8",
"assets/FontManifest.json": "b19f9ca702a77df4843f571bc8b843be",
"assets/fonts/MaterialIcons-Regular.otf": "217bba2a208ba60607aa9ac24e27f72b",
"assets/NOTICES": "77f4ccb929f3d2845b5eac1bdec61315",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2ff64f02aea96ff6ba1ed6e4b58cdde4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "021195481028bef6bd13be48341286f1",
"/": "021195481028bef6bd13be48341286f1",
"main.dart.js": "4ed37f2d57aec750161c48b1c7642042",
"manifest.json": "7ee034dffa1450513b32f7a594981f48",
"version.json": "b938cf9c7bc0d3487bb33257c6ff27a4"};
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
