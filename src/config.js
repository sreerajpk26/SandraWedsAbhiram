// All editable wedding content and settings live here.

export const WEDDING = {
  brideShort: 'Sandra',
  groomShort: 'Abhiram',
  brideFull: 'Sandra Menon',
  groomFull: 'Abhiram',
  dateLabel: '25 · JULY · 2026',
  dateTime: '2026-07-25T10:30:00+05:30',
  landingVenue: 'APM AUDITORIUM, TIRUR',
  footerLine: '25 JULY 2026 · TIRUR',
};

export const EVENTS = [
  {
    num: '01',
    title: 'NIKAH CEREMONY',
    date: '25.07.2026 · Saturday',
    time: '10:30 AM ONWARDS',
    venue: 'Amanath Convention Centre',
    address: 'Panampalam, Tirur, Kerala',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Amanath+Convention+Centre+Panampalam+Tirur+Kerala',
  },
  {
    num: '02',
    title: 'RECEPTION',
    date: '25.07.2026 · Saturday',
    time: '4:00 PM — 8:00 PM',
    venue: 'APM Auditorium',
    address: 'Thalakkadathur, Tirur, Kerala',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=APM+Auditorium+Thalakkadathur+Tirur+Kerala',
  },
];

export const FAMILIES = [
  {
    side: "BRIDE'S FAMILY",
    name: 'Sandra Menon',
    father: 'Sakeer Hussain',
    mother: 'Raheema',
    residence: 'Kallingal Elayodath House, Tirur',
  },
  {
    side: "GROOM'S FAMILY",
    name: 'Abhiram',
    father: 'Mohamed Nazer',
    mother: 'Safiya',
    residence: 'Vadakkiniyedath House, Chembra',
  },
];

export const MOMENTS = [
  { id: 'photo1', caption: 'Every love story is beautiful, but ours is my favourite.' },
  { id: 'photo2', caption: 'Together is a wonderful place to be.' },
  { id: 'photo3', caption: 'You are my today and all of my tomorrows.' },
];

export const VERSE = {
  arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا',
  english:
    '"And of His signs is that He created for you from yourselves mates that you may find tranquility in them."',
  reference: '— QURAN 30:21',
};

// Realtime Database paths for this couple
export const WISH_PATH = 'sandra-abhiram/wishes';
export const MEDIA_PATH = 'sandra-abhiram/media';

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSy841fvxVl1KeHOro6WKJ72o22izuCpJ-b4',
  authDomain: 'yaseen-jumana-wedding.firebaseapp.com',
  databaseURL: 'https://yaseen-jumana-wedding-default-rtdb.firebaseio.com',
  projectId: 'yaseen-jumana-wedding',
  storageBucket: 'yaseen-jumana-wedding.firebasestorage.app',
  messagingSenderId: '355557621111',
  appId: '1:355557621111:web:d0b78c34bfe5a53b69f572',
};
