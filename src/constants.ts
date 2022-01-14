export const colors = {
  red: '#009d94',
  paleTurquoise: '#afeeee',
  palerTurquoise: '#cef2f2',
  green: '#307155',
  gold: 'gold',
  black: '#000',
  white: '#fff',
  cream: 'cornsilk',
};

export const ROOT_URL = 'https://www.tachelhit.info/';

export const JESUS_FILM_URI =
  'https://www.jesusfilm.org/bin/jf/media-download?input_url=arc.gt/wqxsu&input_name=JESUS.mp4';

export const GODS_STORY = 'https://www.amsiggel.com/videos/Gods_story.mp4';

export const AZUZD = `./assets/audio/azuzd_combined.mp3`;

export const NTHUNA = `./assets/audio/ssa_n-thuna.mp3`;

export const ISEQSITN = `./assets/audio/iseqsitn.mp3`;

export const MATSSENT = `./assets/audio/ma_tssent.mp3`;

export const LATIN_OT = `${ROOT_URL}pdf/laahd aqdim.pdf`;
export const LATIN_NT = `${ROOT_URL}pdf/laahd l-ljdid.pdf`;

export const AMSIGGEL_ID = '106801287';

export const PHONE_NUMBER = '+212642596841';

export interface Book {
  name: string;
  arabicName: string;
  chapters: number[];
}

export const oldTestament: {[book: number]: Book} = {
  1: {
    name: 'isizwur',
    arabicName: 'ءيسيزوور',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 37, 39, 40, 41, 42, 43,
      44, 45, 46, 47, 48, 49, 50,
    ],
  },
  2: {
    name: 'ufuå',
    arabicName: 'ءوفوغ',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23,
      24, 32, 33, 34, 40,
    ],
  },
  3: {
    name: 'ayt-lawi',
    arabicName: 'ايت-لاوي',
    chapters: [1, 3, 4, 10, 11, 13, 16, 17, 19, 20, 24, 26, 27],
  },
  4: {
    name: 'tasutin',
    arabicName: 'تاسوتين',
    chapters: [1, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 27, 28],
  },
  5: {
    name: 'tinbaãin',
    arabicName: 'تينباضين',
    chapters: [
      1, 4, 5, 6, 7, 8, 9, 18, 19, 21, 22, 24, 27, 28, 29, 30, 31, 32, 34,
    ],
  },
  6: {
    name: 'yahušuø',
    arabicName: 'ياهوشوع',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 18, 21, 23, 24],
  },
  7: {
    name: 'iriyasn',
    arabicName: 'ءيريياسن',
    chapters: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
  8: {
    name: 'raøut',
    arabicName: 'راعوت',
    chapters: [1, 2, 3, 4],
  },
  9: {
    name: '1 œamwil',
    arabicName: '1 صامويل',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 24,
      31,
    ],
  },
  10: {
    name: '2 œamwil',
    arabicName: '2 صامويل',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12],
  },
  11: {
    name: '1 igldan',
    arabicName: '1 ءيگلدان',
    chapters: [2, 3, 4, 6, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22],
  },
  12: {
    name: '2 igldan',
    arabicName: '2 ءوسّان ',
    chapters: [2, 4, 5, 6, 16, 17, 18, 19, 20, 21, 22, 23],
  },
  13: {
    name: '1 ussan',
    arabicName: '1 ءوسّان',
    chapters: [4],
  },
  14: {
    name: '2 ussan',
    arabicName: '2 ءوسّان',
    chapters: [35, 36],
  },
  15: {
    name: 'øazra',
    arabicName: 'عازرا',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  16: {
    name: 'naæamyah',
    arabicName: 'ناحامياه',
    chapters: [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13],
  },
  17: {
    name: 'astir',
    arabicName: 'استير',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  18: {
    name: 'ayyub',
    arabicName: 'ايّوب',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 22, 23, 25, 27, 31,
      32, 33, 34, 37, 38, 39, 40, 41, 42,
    ],
  },
  19: {
    name: 'imurign',
    arabicName: 'ءيموريگن',
    chapters: [
      1, 4, 8, 11, 12, 15, 16, 19, 22, 23, 24, 25, 27, 30, 32, 33, 34, 37, 40,
      42, 51, 62, 63, 66, 78, 86, 90, 95, 100, 101, 103, 107, 111, 113, 117,
      118, 119, 121, 126, 127, 128, 130, 131, 133, 138, 139, 143, 145,
    ],
  },
  20: {
    name: 'imrwasn',
    arabicName: 'ءيمرواسن',
    chapters: [
      1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      24, 25, 26, 27, 28, 29, 30, 31,
    ],
  },
  21: {
    name: 'amslmd',
    arabicName: 'امسلمد',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
  },
  22: {
    name: 'tallåat',
    arabicName: 'تالّغات',
    chapters: [8],
  },
  23: {
    name: 'išaøyah',
    arabicName: 'ءيشاعياه',
    chapters: [
      1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 25, 26, 27, 30, 35, 40, 41, 42, 43, 45,
      46, 48, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 63, 64, 65, 66,
    ],
  },
  24: {
    name: 'irmiyah',
    arabicName: 'ءيرميياه',
    chapters: [
      1, 2, 6, 9, 11, 14, 15, 17, 18, 19, 20, 23, 25, 29, 31, 32, 36, 38, 39,
      40, 42, 43, 44, 46, 50, 51,
    ],
  },
  25: {
    name: 'ismummÐin',
    arabicName: 'ءيسمومّين',
    chapters: [1, 3, 5],
  },
  26: {
    name: 'iæazqyal',
    arabicName: 'ءيحازقيال',
    chapters: [1, 2, 3, 4, 5, 6, 18, 33, 34, 36, 37],
  },
  27: {
    name: 'danyal',
    arabicName: 'دانيال',
    chapters: [1, 2, 3, 4, 5, 6, 7, 9, 12],
  },
  28: {
    name: 'hušaø',
    arabicName: 'هوشاع',
    chapters: [1, 3, 4, 6, 11, 14],
  },
  29: {
    name: 'yuwil',
    arabicName: 'يوويل',
    chapters: [2],
  },
  30: {
    name: 'øamus',
    arabicName: 'عاموس',
    chapters: [3],
  },
  31: {
    name: 'øubadyah',
    arabicName: 'عوبادياه',
    chapters: [1],
  },
  32: {
    name: 'yunah',
    arabicName: 'يوناه',
    chapters: [1, 2, 3, 4],
  },
  33: {
    name: 'miçah',
    arabicName: 'ميخاه',
    chapters: [5, 6],
  },
  34: {
    name: 'naæum',
    arabicName: 'ناحوم',
    chapters: [1, 3],
  },
  35: {
    name: 'æabaqquq',
    arabicName: 'حاباقّوق',
    chapters: [1, 2, 3],
  },
  36: {
    name: 'œafanyah',
    arabicName: 'صافانياه',
    chapters: [1, 3],
  },
  37: {
    name: 'æaggay',
    arabicName: 'حاگّاي',
    chapters: [1],
  },
  38: {
    name: 'zakaryah',
    arabicName: 'زاكارياه',
    chapters: [2, 3, 4, 8, 9],
  },
  39: {
    name: 'malaçi',
    arabicName: 'مالاخي',
    chapters: [3, 4],
  },
};

export const newTestament: {[book: number]: Book} = {
  40: {
    name: 'matta',
    arabicName: 'ماتّا',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ],
  },
  41: {
    name: 'marqus',
    arabicName: 'مارقوس',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  42: {
    name: 'luqa',
    arabicName: 'لوقا',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
  },
  43: {
    name: 'yuæanna',
    arabicName: 'يوحانّا',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ],
  },
  44: {
    name: 'irqqasn',
    arabicName: 'ءيرقّاسن',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ],
  },
  45: {
    name: 'ruma',
    arabicName: 'روما',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  46: {
    name: '1 kurintus',
    arabicName: '1 كورينتوس',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  47: {
    name: '2 kurintus',
    arabicName: '2 كورينتوس',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
  48: {
    name: 'gala¡iyya',
    arabicName: 'گالاطيّا',
    chapters: [1, 2, 3, 4, 5, 6],
  },
  49: {
    name: 'afsus',
    arabicName: 'افسوس',
    chapters: [1, 2, 3, 4, 5, 6],
  },
  50: {
    name: 'filibbi',
    arabicName: 'فيليبّي',
    chapters: [1, 2, 3, 4],
  },
  51: {
    name: 'kulussi',
    arabicName: 'كولوسّي',
    chapters: [1, 2, 3, 4],
  },
  52: {
    name: '1 tasaluniki',
    arabicName: '1 تاسالونيكي',
    chapters: [1, 2, 3, 4, 5],
  },
  53: {
    name: '2 tasaluniki',
    arabicName: '2 تاسالونيكي',
    chapters: [1, 2, 3],
  },
  54: {
    name: '1 timutaws',
    arabicName: '1 تيموتاوس',
    chapters: [1, 2, 3, 4, 5, 6],
  },
  55: {
    name: '2 timutaws',
    arabicName: '2 تيموتاوس',
    chapters: [1, 2, 3, 4],
  },
  56: {
    name: 'ti¡us',
    arabicName: 'تيطوس',
    chapters: [1, 2, 3],
  },
  57: {
    name: 'filimun',
    arabicName: 'فيليمون',
    chapters: [1],
  },
  58: {
    name: 'iøbrin',
    arabicName: 'ءيعبرين',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
  59: {
    name: 'yaøqub',
    arabicName: 'ياعقوب',
    chapters: [1, 2, 3, 4, 5],
  },
  60: {
    name: '1 b¡rus',
    arabicName: '1 بطرُس',
    chapters: [1, 2, 3, 4, 5],
  },
  61: {
    name: '2 b¡rus',
    arabicName: '2 بطرُس',
    chapters: [1, 2, 3],
  },
  62: {
    name: '1 yuæanna',
    arabicName: '1 يوحانّ',
    chapters: [1, 2, 3, 4, 5],
  },
  63: {
    name: '2 yuæanna',
    arabicName: '2 يوحانّا',
    chapters: [1],
  },
  64: {
    name: '3 yuæanna',
    arabicName: '3 يوحا',
    chapters: [1],
  },
  65: {
    name: 'yahuda',
    arabicName: 'ياهود',
    chapters: [1],
  },
  66: {
    name: 'anurñm',
    arabicName: 'انورژم',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22,
    ],
  },
};

export const psalms = [
  1, 8, 12, 15, 19, 23, 24, 27, 32, 42, 62, 63, 90, 101, 103, 107, 113, 117,
  121, 126, 127, 128, 130, 131, 139,
];

const getPsalmPdfNumber = (psalm: number) => {
  if (psalm < 10) {
    return `00${psalm}`;
  }

  if (psalm < 100) {
    return `0${psalm}`;
  }
  return psalm;
};

const names = [
  'ambarki',
  'wa-rbbi siditnnġ',
  'ašk-id tnjjat-ġ',
  'wa-rbbi ma-ra-n-ikšm?',
  'timuġra n-rbbi',
  'rbbi a-yyi-iksan',
  'agllid imqqurn',
  'ma-zġ-rad-iksaḍġ?',
  'tasaɛt n-taġuft',
  'a-ul-inu',
  'ur-sar-asusġ',
  'nkrġ zikk',
  'ar-zrayn-uwssan-nnġ',
  'rad-asiġ amarg',
  'ḥmd i-rbbi',
  'iskkirn n-rbbi',
  'ignwan d-wakal',
  'sbbḥat i-rbbi',
  'ġwalli-k-igabln',
  'taḍṣa d-imṭṭawn',
  'tawafka n-rbbi',
  'imbarkin',
  'iskraf',
  'udrġ i-ixf-inu',
  'tawassna',
];

const arabicNames = [
  'امباركي',
  'وا-ربّي سيديتنّغ',
  'اشك-يد تنجّات-اغ',
  'وا-ربّي ما-را-ن-يكشم؟',
  'تيموغرا ن-ربّي',
  'ربّي ا-يّي-يكسان',
  'اگلّيد ءيمقّورن',
  'ما-زغ-راد-يكساضغ؟',
  'تاساعت ن-تاغوفت',
  'ا-ول-ينو',
  'ءور-سار-اسوسغ',
  'نكرغ زيكّ',
  'ار-زراين-ووسّان-نّغ',
  'راد-اسيغ امارگ',
  'حمد ءي-ربّي',
  'ءيسكّيرن ن-ربّي',
  'ءيگنوان د-واكال',
  'سبّحات ءي-ربّي',
  'غوالّي-ك-يگابلن',
  'تاضصا د-يمطّاون',
  'تاوافكا ن-ربّي ',
  'ءيمباركين',
  'ءيسكراف',
  'ءودرغ ءي-يخف-ينو',
  'تاواسّنا',
];

const tifNames = [
  'ambarki',
  'wa-rbbi siditnnv',
  'ack-id tnjjat-av',
  'wa-rbbi ma-ra-n-ikcm?',
  'timuvra n-rbbi',
  'rbbi a-yyi-iksan',
  'agllid imqqurn',
  'ma-zv-rad-iksaÄv?',
  'tasaOt n-tavuft',
  'a-ul-inu',
  'ur-sar-asusv',
  'nkrv zikk',
  'ar-zrayn-uwssan-nnv',
  'rad-asiv amarg',
  'pmd i-rbbi',
  'iskkirn n-rbbi',
  'ignwan d-wakal',
  'sbbpat i-rbbi',
  'vwalli-k-igabln',
  'taÄãa d-imÏÏawn',
  'tawafka n-rbbi',
  'imbarkin',
  'iskraf',
  'udrv i-ixf-inu',
  'tawassna',
];

const getPageNumber = (index: number) => {
  if (index < 4) {
    return 2;
  }
  if (index < 7) {
    return 3;
  }
  if (index < 9) {
    return 4;
  }
  if (index < 11) {
    return 5;
  }
  if (index < 13) {
    return 6;
  }
  if (index < 15) {
    return 7;
  }
  if (index < 16) {
    return 8;
  }
  if (index < 22) {
    return 9;
  }
  return 10;
};

export interface PsalmData {
  psalm: number;
  audio: string;
  pdfLat: string;
  pdfArabic: string;
  pdfTif: string;
  name: string;
  tifName: string;
  arabicName: string;
}

export const psalmData: PsalmData[] = psalms.map((psalm, index) => {
  const audio = `./assets/audio/psalms/Ps ${psalm}.mp3`;
  const pdfLat = `./assets/pdfs/psalms/Ps${getPsalmPdfNumber(psalm)}Lat.pdf`;
  const pdfArabic = `./assets/pdfs/psalms/Ps${getPsalmPdfNumber(psalm)}A.pdf`;
  const pdfTif = `./assets/pdfs/psalms/Ps${getPsalmPdfNumber(psalm)}Tif.pdf`;

  return {
    psalm,
    audio,
    pdfLat,
    pdfArabic,
    pdfTif,
    name: names[index],
    tifName: tifNames[index],
    arabicName: arabicNames[index],
  };
});

export const questionList: {
  question: string;
  body: string;
  questionArabic: string;
}[] = [
  {
    question: 'maç aylliå tumnem bahra s-lmasiæ uggÐar l-lanbya yaãni?',
    questionArabic: 'ماخ ايلّيغ تومنم باهرا س-لماسيح، ءوݣُّار ن-لانبيا ياضني؟',
    body: `lɛjb a‑iga lmasiḥ ula kullu ma iskr. ur‑jji‑illi yan zund nttan. ur‑illi yan iluln ġmk lli‑d‑ilul lmasiḥ s‑lmuɛajiza n‑rbbi lliġ‑d‑igguz rruḥ lqudus n‑rbbi f‑maryam, taru s‑tḥkimt n‑rbbi bla argaz.

  ur‑illi yan iṭṭafn ismawn lli dars illan. «awal n‑rbbi» tga lmɛna‑ns «walli‑d‑ikkan rbbi». «yasuɛ» tga lmɛana‑ns «walli ra‑ijjnjm mddn». lmasiḥ tga lmɛna‑ns walli ityawẓlayn a‑ig «tamatart n‑tasaɛt».
 
  ur‑illi yan ijjujin imuḍan ġmklli‑tn‑ijjuji. irẓm alln i‑ibukaḍn, irẓm imzgan i‑iḍrḍar, ifsi ils i‑iẓnẓam, issdus ikušamn, issġus injdamn, ar‑d‑issnkar ula willi mmutnin.
 
  ur‑illi yan isslmadn ġmk lli isslmad. ur‑illi yan mi iṣfa‑uwl ġmk lli iṣfa‑uwl‑ns, nġd yan itḥnnun ġ‑mddn ġmklli gisn iḥnna.
 
  nttan waḥdut a‑iqṣadn a‑immt baš a‑yasi ddnub n‑bnadm. nttan waḥdut a‑inran lmut, inkr‑d zġ‑umḍḍal s‑tudrt idumn. nttan waḥdut a‑ityattayn s‑dar rbbi ar‑t‑fllannġ‑itḍalab.
 
  ar‑srs‑tqln kullu mddn, issann izd nttan a‑ra‑d‑igguz zġ‑ignna ġ‑isiggʷra n‑ddunit, ra‑ijjnjm willi srs umnnin. nttan waḥdut a‑issittin šškk ula tiksaḍ ula ddnub, ifk‑aġ‑d laman d‑sslamt ġ‑ddunit‑ad ula liḫrt. ur‑illi yan zund nttan. kullu ma‑iskr lɛjb a‑iga.
 
  imma kiyi a‑gma, ma‑yk‑ibann? ula kmmin a‑ulltma, ma‑fllas‑ttinit? is‑tumnt s‑lmasiḥ? ara‑yaġ‑d f‑ma‑tswingmt ula ma‑ur‑tfhimt.`,
  },
  {
    question: 'mamnek a-s-ra-yaf bnadm asunfu d-rraæt å-ddunit?',
    questionArabic:
      'تعمّر دّونيت س-تمّارا د-لهمّ. مامنك ا-س-را-ياف بنادم اسونفو د-رّاحت؟',
    body: `ddunit urd ġmkad a‑tga zġ‑isizwur, wala ra‑bdda‑tġama ġmkad dima. ašku ddunit ar‑tzray ġ‑smmus izmaz.

      ġ‑isizwur, nssn sidi rbbi is‑ifulki. d‑kullu ma‑iskar ifulki. lliġ iḫlq ddunit, iḫlq‑tt s‑ufulki ikmmln. ur‑gis kra inaqṣn ula kra ihršn ula kra yʷḫšnn. ityara ġ‑warratn n‑tawrat: «sidi rbbi iẓra kullu ma‑iḫlq, hati ifulki bahra» (isizwur 1:31). d‑ġwan a‑igan azmz amzwaru.
     
      iban ġ‑ddunit ġilad is‑tɛmmr s‑kullu ma‑yʷḫšnn. míddn ar‑tẓẓin ar‑tmmaġn, ar‑trfufunn ar‑thrašn ar‑tmtatn. ilin išabukn ggutnin ġ‑ddunit‑ad,
     
     ilin willi igan win bnadm, ilin willi igan wins nttat. tgguz‑d yat nnɛalt f‑ddunit, a‑s‑tt‑igan d‑lmut, aylliġ twurri thlk kullu ma‑gis‑illan. maḫ? ašku ur‑a‑skarn míddn s‑wawal n‑rbbi. ġmkad a‑ityaran: «tiġraḍ n‑ddnub, lmut a‑stt‑igan» (ruma 6:23). ġwan a‑igan wis sin izmaz.
     
      yašk‑id ilmma yan iẓḍarn a‑issitti tagat ula nnɛalt lli‑ihlkn ddunit. yašk‑id ġ‑yat‑luqt igzzuln s‑yat‑tmazirt imẓẓin. ifk i‑ibukaḍn ad‑isfyun, iḍrḍar ar‑sflidn, iẓnẓam ar‑sawaln, ikušamn ar‑fttun. ar‑ijjuji kullu wanna ihršn, ar‑d‑issnkar willi mmutnin. ar‑isshnnu mddn ar‑asn‑yakka sslamt. ityara ġ‑warratn l‑linjil: «ar‑itkka kraygatt mani ar‑iskar afulki, ar‑ijjuji kullu wanna ityawkrrafn s‑iskraf n‑iblis» (irqqasn 10:38).
     
     ġwan a‑igan wis kraḍ izmaz.
     
      ġwalli ijjnjmn míddn‑an, ira nttan a‑iskr uggʷar. yiri a‑issitti tagat l‑lmut f‑ddunit kullutt, ifk iḫf‑ns a‑yasi ddnub n‑kullu míddn, yasi f‑tʷġraḍ‑ns ddnub n‑bnadm kullut. d‑ġmkan a‑iskr. iḫllṣ lḥsab lli‑fllannġ‑illan. ityara ġ‑warratn n‑rbbi: «nttan a‑yusin ddnub‑nnġ f‑ddat‑ns ġ‑uggjdi, baš a‑nmmt i‑ddnub nddr i‑ma‑irḍan rbbi. s‑tiggas‑ns a‑s‑tjjim.» (1 bṭrus 2:24). ġwan a‑igan wis kkuẓ izmaz.
     
       ġ‑isiggʷra n‑ddunit ra‑d‑yašk nttan tis‑snat twal. ġakudan a‑ra‑ikmml tawuri‑ns. ra‑d‑issnkr ġwilli mmutnin ġ‑ddunit kullutt, iẓli ihray zġ‑waġaḍn, issmun willi srs umnnin a‑dids‑ilin ġ‑wakal l‑ljdid. imma aġaḍn rad‑qaman ġ‑brra s‑tagat l‑lmut idumn. ityara ġ‑warratn n‑rbbi: «ar‑ntql s‑maylli‑s‑aġ‑inna rbbi, ar‑n‑ntrju ignna l‑ljdid d‑wakal l‑ljdid, ɛmmrn s‑kullu ma‑irḍan rbbi.» (2 bṭrus 3:13). ġakudan ur‑ra‑sul‑thrš ddunit walaynni ra‑tɛmmr s‑kullu ma‑ifulkin. ur‑ra‑sul‑gis ilin imṭṭawn nġd aṭṭan nġd timuḍan nġd imaġn nġd míddn ʷḫšnnin. ġwan a‑ra‑ig wis smmus izmaz.
     
       walli iẓḍarn a‑ijjuji imuḍan issnkr‑d willi mmutnin, ma‑t‑igan? iga‑t yasuɛ lmasiḥ. nttan a‑ra‑d‑ywurrin s‑ddunit.
     
     illa f‑kraygatt yan a‑yujad iḫf‑ns i‑wass lli‑ġ‑ra‑d‑yašk.
     
       iẓḍar lmasiḥ a‑k‑ijjnjm. is‑tujadt ad‑dids‑tmnaggart? is‑srs‑tumnt? ara‑yaġ‑d f‑ma‑tswingimt ula ma‑ur‑tfhimt.`,
  },
  {
    question: 'mamnek a-tñallam?',
    questionArabic: 'مامنك ا-تژّالّام؟',
    body: `taẓallit‑nnġ tga ġmka. illa f‑yan a‑ijjujad iḫf‑ns, yissan is‑ra‑isawal d‑walli iḫlqn ignwan d‑wakal. ġakud nna‑nra a‑nẓẓall i‑rbbi, da‑zwar‑nsiggil ġ‑uwl‑nnġ a‑nissan is‑ginnġ‑illa kra issḥššamn. nẓẓall ilmma s‑ism l‑lmasiḥ lli‑d‑yuškan a‑yġ‑issġus zġ‑kullu ma‑yʷḫšnn.`,
  },
  {
    question: 'ma-ttinim å-tñallit-nnun?',
    questionArabic: 'ما-تّينيم غ-تژالّيت-نّون؟ ءيزد س-تعرابت ا-س-ا-تژّالّام؟',
    body: `rbbi issn i‑kullu iwalyun, ifhm kraygatt lluġa. ar‑dids‑nsawal s‑tšlḥayt.

  ar‑ntḥmad rbbi, ašku nttan a‑iḫlqn ddunit ula kullu ma‑gis‑illan. ar‑t‑ntškar f‑rrḥmt‑ns ula lḥnant‑ns ula kullu ma‑yġ‑iskar ifulki ġ‑kraygatt ass. nḍalb zġ‑gis a‑yġ‑iguwwd, issdus‑aġ ġ‑uġaras n‑ufulki. nzayd ilmma nḍalb‑as f‑aynna‑yaġ‑iḫṣṣan ula f‑ssibt n‑wadjarn‑nnġ nna‑ihršn. nḍalb‑as a‑ibark ġ‑imddukkʷal‑nnġ ula inuwwašn‑nnġ.
 
  yan‑wass illa lmasiḥ ġ‑yan‑udġar, ḍalbn zġ‑gis imḥḍarn‑ns: «ml‑aġ mamnk a‑ntẓalla.» yini‑asn «tẓallayt ġmkad, tinim i‑rbbi: wa‑babatnnġ lli‑illan ġ‑ignna, a‑yili luqr i‑ism‑nnk, tašk‑id‑tgldit‑nnk, yili ma‑k‑irḍan ġ‑ddunit ġmklli illa ġ‑ignna. fk‑aġ‑d ġassad aġrum lli‑nḥtajja i‑wass‑ad, tṣamḥt‑aġ f‑lḫʷšant lli‑nskr, ġmklli nṣamḥ nkkʷni i‑willi ginnġ iskrn lḫʷšant. tssanft fllannġ kullu ma‑rad‑aġ‑n‑ildi a‑nskr kra yʷḫšnn, tjjnjmt‑aġ zġ‑iblis» (matta 6:9‑13).`,
  },
  {
    question: 'mennawt-twal a-ttñallam å-wass?',
    questionArabic: 'منّاوت-توال ا-تژّالّام غ-واسّ؟',
    body: `ur‑d‑fllannġ‑tyawfraḍnt tasaɛin, walaynni ġakud nna‑nra. ar‑ntḥmad rbbi ar‑t‑ntškar ġakud nna‑d‑nnkr zikk ṣbaḥ. d‑ġakud nna‑di‑ttrs lmunt ar‑t‑ntškar f‑lbaraka‑yan. ar‑ntẓalla t‑tarwa‑nnġ ġakud nna‑ra‑nffûġ s‑twuri‑nnġ. ar‑ntẓalla ġ‑uġaras ula ġ‑dar‑twuri, iġ‑nfta ula iġ‑nbídd. ar‑ntẓalla ur‑ta‑ngin. ar‑ntẓalla ula d‑imddukkʷal‑nnġ nna‑d‑darnnġ‑yuškan. ar‑aġ‑tssfraḥ‑tẓallit‑ad, ašku tga tajmmaɛt lli‑s‑a‑nsawal d‑babatnnġ.`,
  },
  {
    question: 'is-ur-tbeddilm linjil lli-d-yiwi lmasiæ?',
    questionArabic: 'ءيس-ور-تبدّيلم لينجيل لّي-د-ييوي لماسيح؟',
    body: `is‑ti‑tġrit a‑gʷma? ma‑fllas‑tssnt? imḥḍarn nna‑illan d‑kra n‑nnabi, nis‑rad‑iẓḍarn ad‑bddln awal‑ns s‑kra n‑wawal yaḍni?

  nis‑ur‑rad‑darsn‑ɛzzan iwalyun n‑nnabi‑an uggʷar n‑tudrt‑nsn? ašku lamant‑an, ifl‑tt f‑umggrḍ‑nsn. inna lmasiḥ s‑iḫf‑ns:
 
 «rad‑ittin ignwan d‑wakal walaynni ur‑sar‑ittin iwalyun‑inu» (matta 24:35).
 
  ġ‑uwssan lli‑ġ‑illa lmasiḥ ġ‑ddunit‑ad, ar‑itkka kraygatt mani ar‑iskar lḫir. ar‑dars‑ttaškin míddn ggutnin ġ‑uwssan‑an, ẓrn ma‑iskar,
 
 sfldn i‑ma‑ittini. is‑rad‑iẓḍarn ad‑kullu‑ttun awal‑ns d‑iskkirn‑ns? is‑rad‑qbln kra n‑wawal ur‑igin awal lli‑mi‑dars‑sfldn?
 
  ġakud lliġ ityara linjil l‑lmasiḥ, ilkm kullu tisgyu n‑ddunit. mra‑ys‑nnit‑ran ad‑bddln awal‑ns, is‑rad‑iẓḍarn ad‑bddln ġ‑kraygatt mani ma‑ityaran ġ‑lktub‑an, ssngaddan‑tn, rarn‑tn ad‑d‑kullu‑mšaškan ġ‑ddunit kullutt? uhu, ur‑rad‑iẓḍarn i‑mayan. linjil‑ad darnnġ illan, linjil iṣḥan a‑iga. ur‑jji‑itbddl. ašku rbbi a‑t‑igabln, ur‑yudji míddn ad‑ssinfn awal lli‑f‑tn‑yuṣṣa.
 
  linjil‑ad a‑gʷma, ur‑a‑yġ‑issaggug zġ‑rbbi, walaynni ar‑aġ‑imala mamnk a‑n‑srs‑ntakmur, nissan is‑illa‑bdda‑didnnġ a‑ginnġ‑ibark.`,
  },
  {
    question: 'is-a-tmmaån imasiæin d-mddn yaãni?',
    questionArabic: 'ءيس-ا-تمّاغن يماسيحين د-مدّن ياضني؟',
    body: ` iban ġ‑warratn l‑linjil d‑win ttariḫ f‑imasiḥiyn imzwura is‑a‑bdda‑skarn f‑sslamt. ur‑a‑tasin ssif ula da‑tmmaġn d‑míddn yaḍni. ur‑a‑ttirin ad‑nrun wiyyaḍ, ula da‑tn‑traran s‑bzzíz ad‑amnn. ar‑ġir‑sawaln d‑míddn f‑uġaras l‑lmasiḥ, ar‑tn‑tɛawann ula ġ‑išabukn n‑kraygatt ass, aylliġ ilkm‑wawal‑nsn ddunit kullutt.

  lmasiḥ ur‑jji‑yusi ssif ula issnkr kra n‑imiġ. sslamt a‑f‑yuṣṣa imḥḍarn‑ns, yazn‑tn ilmma ad‑ɛmmrn ddunit s‑lḥnant n‑ignna. ašku linjil, tga lmɛna‑ns «lḫbar ifulkin», ar‑aġ‑imala mamnk a‑nskar afulki i‑kullu míddn ar‑tn‑nssfraḥ s‑lfrḥ izgan idumn. inna lmasiḥ: «a‑ur‑tmmaġm d‑yan giyun iskrn ma‑yʷḫšnn. iġ‑k‑yut yan f‑umadl afasi, gllb‑as‑n ula aẓlmaḍ.» (matta 5:39) swingm is‑illa ma‑yuggʷrn sslamt‑ad?`,
  },
  {
    question: 'maç aylliå a-ttinim i-lmasiæ yus n-rbbi?',
    questionArabic:
      'ربّي ءور-ا-يتّاهل ءولا دا-يتارو. ماخ ايلّيغ ا-تّينيم ءي-لماسيح «يوس ن-ربّي»؟',
    body: ` s‑ṣaḥḥt a‑gʷma, rbbi ur‑igi zund bnadm, ur‑a‑ittahal ula da‑itaru. lmɛna‑yad, urd ġmklli iswingim bnadm a‑tga. lliġ‑d‑ilul lmasiḥ, yazn‑d rbbi lmalak jibrayyil s‑yat‑tfruḫt ism‑ns maryam. yini‑as lmalak: «hati ra‑trbut, tarut yan‑warraw.» tini‑as maryam i‑lmalak: «mamnk a‑ra‑yyi‑yili mayad? ur‑dari argaz.» yini‑as: «ra‑d‑fllam‑igguz rruḥ n‑rbbi, tdl‑km‑tḥkimt n‑rbbi. mayad a‑f‑ra‑nttini i‑warraw‑an amẓlay lli‑ra‑tarut

      ‹yus n‑rbbi.› » (luqa 1:30, 34‑35)
     
      maḫ aylliġ a‑ys‑nttini «yus n‑rbbi»? amzwaru ašku ilul‑d zġ‑rruḥ n‑rbbi. tis snat ašku tlla‑gis‑tḥkimt n‑rbbi,
     
     ar‑iskar lmúɛjizat lli‑ur‑iẓḍar yan a‑tnt‑iskr abla rbbi. walaynni tlla sul tis kraṭṭ, ašku rbbi a‑t‑innan. ġmklli ityaran ġ‑linjil:
     
     «isawl‑d yan‑wawal zġ‑ignwan yini: ‹ġwad iga iwi iɛzzan. sflidat srs.›» (marqus 9:7)`,
  },
  {
    question: 'maç aylliå a-ttinim «immut lmasiæ inker-d zå-lmut»?',
    questionArabic:
      'ݣّوتن مدّن ار-تّينين: «ءور-يمّوت لماسيح.» ماخ ايلّيغ ا-تّينيم: «ءيمّوت ءينكر-د زغ-لموت»؟',
    body: ` ẓr, a‑gʷma, lmasiḥ mayd inna f‑iḫf‑ns ur‑ta‑iruḥ‑uzmz lli‑ġ‑ra‑immt. inna: «ra‑nddu s‑tmdint n‑urušalim. ra‑yyi‑n‑dḥin s‑gr ifassn n‑inmġurn n‑uwdayn. rad‑flla‑ḥkamn s‑lmut. ra‑gigi‑tṭnaẓn ssufsn flla lḫḍn‑iyi nġn‑iyi. walaynni ġ‑wis kraḍ‑uwssan rad‑d‑nkrġ zġ‑lmut» (matta 20:18‑19). issn lmasiḥ ma‑ra‑ys‑ijru, inna‑yasn awal‑ad kraṭṭ‑twal afad a‑ur‑t‑ttun.

      lliġ‑d‑mšaškan‑uwdayn d‑rruman a‑t‑nġn, ssnn kullu nizd yus n‑maryam a‑iga. lliġ‑t‑uggln f‑uggjdi a‑immt, tbidd innas d‑aytmas d‑imḥḍarn‑ns ġ‑tama‑ns. ntni ssnn bahra nizd nttan a‑iga. lliġ‑d‑inkr zġ‑lmut isawl didsn, išš didsn, iml‑asn ula timitar lli‑fln imsmarn ġ‑ifassn‑ns ula iḍarn‑ns. mamnk a‑ra‑ibidd yan ġ‑lgʷddam n‑innas d‑aytmas d‑imddukkʷal‑ns bla‑t‑ukʷzn? inagan kullutn ssnn izd lmasiḥ ayn immutn.`,
  },
  {
    question: 'maç aylliå ra-yadj rbbi yan igan nnabi a-immt zund ameççar?',
    questionArabic:
      'ماخ ايلّيغ را-يادج ربّي يان ءيݣان نّابي نغد يوس ا-يمّت زوبد يان ءيݣان امخّار؟',
    body: `ašku a‑gʷma mayan rbbi iqṣad‑t zġ‑isizwur. ityara kullu mayan ġ‑warratn l‑lanbya n‑zman, imla‑ysn rbbi nis‑ra‑immt lmasiḥ. ašku ira a‑iskr s‑idammn l‑lmasiḥ yal‑lɛhd l‑ljdid ġ‑gras d‑bnadm. d‑lmut‑ns a‑s‑yusi lmasiḥ lḥukm lli‑ittutn f‑ddunit. izri nttan ġ‑lɛdab l‑lqbr afad a‑ur‑zġ‑gis‑nzri nkkʷni. inna nttan «lḥqq ayad, lḥqq a‑rad‑awn‑iniġ. iġ‑ur‑iḍr‑waqqa n‑irdn ġ‑wakal immt, waḥdut a‑ra‑iqama. walaynni iġ‑immut ra‑d‑yawi ṣṣabt iggutn» (yuḥanna 12:24). ur‑iqama waḥdut nttan, ašku inkr‑d ġ‑wis kraḍ‑uwssan ġmklli‑s‑inna i‑imḥḍarn‑ns. yall‑t ilmma rbbi s‑ignna, ar isiggʷra n‑ddunit ra‑d‑yuwrri. ra‑issmun kullu willi srs umnnin, ar‑skarn s‑luṣiyyat‑ns ġmklli iskar.

      yawi‑tn dids ilmma s‑tudrt idumn. ġwin a‑igan ṣṣabt‑ns iggutn.`,
  },
  {
    question: 'liman n-imasiæin, mamnek a-iga?',
    questionArabic: 'ليمان ن-يماسيحين، مامنك ا-يݣا؟',
    body: ` iġ‑a‑iṣwaḍ‑waḍu itjhhdn a‑gʷma, da‑issukuf tuga iqqurn zġ‑wakal. han iwalyun l‑lanbya zund aḍu ad‑gan,

  ar‑ssittin ljhalt zġ‑bnadm. imma akal, urd aḍu ka‑iḥtajja ma‑issukufn tuga iqqurn. iḥtajja ula anẓar ma‑d‑issmġayn tuga l‑ljdid.
  
   ha‑bnadm, urd lanbya ka‑iḥtajja, ma‑d‑itawin luṣiyat ula lfrayḍ. iḥtajja ula ma‑t‑itɛmmarn s‑lbaraka n‑ignna ula lquwwa n‑rbbi.
  
   imla‑yaġ lmasiḥ is‑iẓḍar a‑yġ‑iskar kullu mayad. ifka‑yaġ a‑nɛmmr s‑rruḥ n‑ignna, ma‑yġ‑itɛawann ġ‑kraygatt luqt. hati rruḥ‑ns a‑yġ‑issdusn ar‑aġ‑itbddal zġ‑wawgʷns aylliġ nwurri ar‑ntɛmmar s‑ufulki n‑rbbi. ar‑aġ‑itɛmmar s‑tḥkimt‑ns ula lḥnant‑ns, ar‑aġ‑itguwwad ġ‑kullu ma‑nskar. ar‑t‑ntškar bahra f‑lbaraka‑yad‑aġ‑ifka. ityara ġ‑warratn l‑linjil: «iġ‑a‑tskarm s‑ma‑tra ddat, rad‑awn‑tili lmut. walaynni iġ‑a‑tnqqam iskkirn n‑ddat s‑tḥkimt n‑rruḥ, rad‑awn‑tili tudrt» (ruma 8:13).`,
  },
];
