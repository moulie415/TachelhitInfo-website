export const colors = {
  red: '#dc3832',
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
    name: 'rqqasn',
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

const psalms = [
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

export const psalmData = psalms.map((psalm, index) => {
  const audio = `./assets/audio/psalms/Ps ${psalm}.mp3`;
  const pdfLat = `./assets/pdfs/psalms/tch-psalms-lat.pdf#page=${getPageNumber(
    index,
  )}`;
  const pdfArabic = `./assets/pdfs/psalms/Ps${getPsalmPdfNumber(psalm)}A.pdf`;
  const pdfTif = `./assets/pdfs/psalms/Ps${getPsalmPdfNumber(psalm)}Tif.pdf`;

  return {psalm, audio, pdfLat, pdfArabic, pdfTif, name: names[index]};
});
