export interface WeddingData {
  groom: {
    name: string;
    nickname: string;
    fatherName: string;
    motherName: string;
    bio: string;
  };
  bride: {
    name: string;
    nickname: string;
    fatherName: string;
    motherName: string;
    bio: string;
  };
  event: {
    title: string;
    dateFormatted: string;
    dayFormatted: string;
    yearFormatted: string;
    timeFormatted: string;
    targetIsoDate: string; // ISO 8601 for countdown & calendar
    venueName: string;
    address: string;
    mapsUrl: string;
    googleCalendarUrl: string;
  };
  quote: {
    source: string;
    arabic: string;
    translation: string;
  };
  physicalGiftAddress: string;
  gifts: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
    category?: "bank" | "ewallet";
    giftAddress?: string;
  }[];
  audio: {
    url: string;
    title: string;
  };
}

export const weddingData: WeddingData = {
  groom: {
    name: "Muhammad Farhan",
    nickname: "Farhan",
    fatherName: "Bapak M. Ilyas (Alm)",
    motherName: "Ibu Nurhayati / Mama Rudi (Almh)",
    bio: "Putra tercinta dari Alm. Bapak M. Ilyas & Almh. Ibu Nurhayati",
  },
  bride: {
    name: "Pepy Ariska",
    nickname: "Pepy",
    fatherName: "Bapak Sulaiman",
    motherName: "Ibu Rita",
    bio: "Putri tercinta dari Bapak Sulaiman & Ibu Rita",
  },
  event: {
    title: "Resepsi Pernikahan",
    dayFormatted: "Minggu",
    dateFormatted: "08 November 2026",
    yearFormatted: "2026",
    timeFormatted: "Pukul 09.00 WIB s/d Selesai",
    targetIsoDate: "2026-11-08T09:00:00+07:00",
    venueName: "Kediaman Mempelai / Lokasi Acara",
    address:
      "8J89+FC9, Mendawai, Kec. Arut Sel., Kabupaten Kotawaringin Barat, Kalimantan Tengah 74112",
    mapsUrl: "https://maps.app.goo.gl/Wj3wTXy5s8vMuoR78",
    googleCalendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Pepy+Ariska+%26+Muhammad+Farhan&dates=20261108T020000Z/20261108T070000Z&details=Walimatul+%27Ursy+Pepy+Ariska+%26+Muhammad+Farhan.+Kehadiran+dan+doa+restu+Anda+merupakan+kehormatan+dan+kebahagiaan+bagi+kami.&location=Mendawai%2C+Kec.+Arut+Sel.%2C+Kabupaten+Kotawaringin+Barat%2C+Kalimantan+Tengah+74112",
  },
  quote: {
    source: "QS. Ar-Rum: 21",
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation:
      "“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”",
  },
  physicalGiftAddress:
    "8J89+FC9, Mendawai, Kec. Arut Sel., Kabupaten Kotawaringin Barat, Kalimantan Tengah 74112",
  gifts: [
    {
      bankName: "Bank Rakyat Indonesia (BRI)",
      accountNumber: "028201020501535",
      accountHolder: "M. Farhan",
      category: "bank",
    },
    {
      bankName: "Bank Central Asia (BCA)",
      accountNumber: "8880610644",
      accountHolder: "Pepy Ariska",
      category: "bank",
    },
    {
      bankName: "GoPay",
      accountNumber: "085849111359",
      accountHolder: "M. Farhan",
      category: "ewallet",
    },
    {
      bankName: "Bank Aladin Syariah",
      accountNumber: "50020629201",
      accountHolder: "Pepy Ariska",
      category: "bank",
    },
  ],
  audio: {
    // Elegant, copyright-free piano instrumental
    url: "/audio/bgm.mp3",
    title: "Romantic Piano Melody",
  },
};
